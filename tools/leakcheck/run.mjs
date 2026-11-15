// `npm run leakcheck`: memory leak checks that do not fit the normal test run.
//  1. C++ (LeakSanitizer): every scenario of scenarios.mjs in its own process
//     against build/dist_sanitizer.
//  2. JS (forced GC): gc-check.mjs, also against build/dist_sanitizer: that is
//     the build `npm run leakcheck` has just made from the current bindings,
//     while src/generated may be stale.
// The processes run in parallel. Exits with 1 if anything leaks, except
// scenarios marked as known leaks.
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { availableParallelism } from "node:os";
import { basename } from "node:path";
import { fileURLToPath } from "node:url";
import { scenarios } from "./scenarios.mjs";

const here = (file) => fileURLToPath(new URL(file, import.meta.url));
if (!existsSync(here("../../build/dist_sanitizer/libavoid.mjs"))) {
  console.error("Sanitizer build missing: run `python tools/generate.py --sanitizer` (or `npm run leakcheck`).");
  process.exit(2);
}

const TIMEOUT_MS = 120_000;
const MAX_ATTEMPTS = 3;
const SANITIZER_REPORT = /ERROR: (AddressSanitizer|LeakSanitizer)/;

function runOnce(args) {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, args);
    let stdout = "";
    let stderr = "";
    let timedOut = false;
    child.stdout.setEncoding("utf8").on("data", (d) => { stdout += d; });
    child.stderr.setEncoding("utf8").on("data", (d) => { stderr += d; });
    const timer = setTimeout(() => { timedOut = true; child.kill("SIGKILL"); }, TIMEOUT_MS);
    child.on("error", (error) => { clearTimeout(timer); resolve({ status: null, signal: null, stdout, stderr, error, timedOut }); });
    child.on("close", (status, signal) => { clearTimeout(timer); resolve({ status, signal, stdout, stderr, timedOut }); });
  });
}

// Node 22 occasionally (a few % of runs) dies with SIGSEGV inside V8-generated
// code while running the 14 MB sanitizer wasm, without any sanitizer report.
// A real finding never looks like that: ASan/LSan print a report and exit
// normally. So such a run is discarded and the process re-run.
// (Disabling wasm tier-up made it rarer but did not remove it.)
async function run(args) {
  for (let attempt = 1; ; attempt++) {
    const result = await runOnce(args);
    const crashed = result.signal === "SIGSEGV" && !result.timedOut && !SANITIZER_REPORT.test(result.stderr);
    if (!crashed || attempt === MAX_ATTEMPTS) return { ...result, retries: attempt - 1 };
  }
}

// Runs tasks (functions returning promises) with at most `limit` at a time,
// keeping the order of the results.
async function pool(tasks, limit) {
  const results = new Array(tasks.length);
  let next = 0;
  const workers = Array.from({ length: Math.min(limit, tasks.length) }, async () => {
    while (next < tasks.length) {
      const i = next++;
      results[i] = await tasks[i]();
    }
  });
  await Promise.all(workers);
  return results;
}

function failureDetails(result) {
  const parts = [`exit status ${result.status}`, `signal ${result.signal}`];
  if (result.timedOut) parts.push(`timed out after ${TIMEOUT_MS / 1000} s`);
  if (result.error) parts.push(result.error.message);
  return parts.join(", ");
}

// A short version of a sanitizer report: the title of each record (leak,
// invalid access, free, allocation) with its first few frames that are not
// allocator, embind or libc++ internals, direct leaks first, plus the summary.
// Without a sanitizer report, the end of stderr.
const BORING_FRAME = /\bin (malloc|calloc|realloc|free|operator new|operator delete|emscripten::|std::|__cxa_|.*createJsInvoker)/;
const RECORD_TITLE = /^(Direct|Indirect) leak of|ERROR: (AddressSanitizer|LeakSanitizer)|^(READ|WRITE) of size|^freed by thread|^previously allocated by thread/;
function reportExcerpt(stderr, maxRecords = 10, framesPerRecord = 3) {
  const lines = stderr.split("\n").map((l) => l.trim());
  if (!SANITIZER_REPORT.test(stderr)) return lines.filter(Boolean).slice(-15);
  const records = [];
  for (const line of lines) {
    if (RECORD_TITLE.test(line)) records.push({ title: line, frames: [] });
    else if (records.length && /^#\d+ /.test(line) && !BORING_FRAME.test(line)) records.at(-1).frames.push(line);
  }
  const frame = (l) => {
    const m = /^#\d+ \S+ in (.*)$/.exec(l);
    if (!m) return l;
    // C++: "Symbol(args)+0x123 (/path/worker.mjs+0x123)"; JS: "fn file:///path/file.mjs:1:2".
    return m[1].replace(/\+0x[0-9a-f]+ \(.*\)$/, "").replace(/file:\/\/\S+/, (url) => basename(url));
  };
  const rank = (r) => (r.title.startsWith("Indirect") ? 1 : 0);
  const sorted = records.map((r, i) => ({ ...r, i })).sort((a, b) => rank(a) - rank(b) || a.i - b.i);
  const out = [];
  for (const record of sorted.slice(0, maxRecords)) {
    out.push(record.title);
    for (const f of record.frames.slice(0, framesPerRecord)) out.push(`  ${frame(f)}`);
  }
  if (sorted.length > maxRecords) out.push(`... ${sorted.length - maxRecords} more records`);
  out.push(...lines.filter((l) => l.startsWith("SUMMARY:")));
  return out;
}

function evaluateScenario(scenario, result) {
  const line = result.stdout.split("\n").find((l) => l.startsWith("LEAKCHECK "));
  if (result.status !== 0 || !line) return { status: "ERROR", ok: false, detail: failureDetails(result) };
  let leaked;
  try {
    ({ leaked } = JSON.parse(line.slice("LEAKCHECK ".length)));
  } catch {
    return { status: "ERROR", ok: false, detail: `unreadable worker output: ${line}` };
  }
  if (scenario.expectLeak) return { status: leaked ? "ok" : "NO LEAK", ok: leaked };
  if (scenario.known) return { status: leaked ? "KNOWN" : "FIXED?", ok: true };
  return { status: leaked ? "LEAK" : "ok", ok: !leaked };
}

const indent = (lines) => lines.map((l) => `            ${l}`).join("\n");
const retryNote = (r) => (r.retries ? ` (re-run after ${r.retries} Node crash${r.retries > 1 ? "es" : ""})` : "");

const entries = Object.entries(scenarios);
const tasks = [
  ...entries.map(([name]) => () => run([here("./worker.mjs"), name])),
  () => run(["--expose-gc", here("./gc-check.mjs")]),
];
const results = await pool(tasks, availableParallelism());
const gc = results.pop();

let failed = false;
console.log("C++ leaks (LeakSanitizer):");
entries.forEach(([name, scenario], i) => {
  const result = results[i];
  const { status, ok, detail } = evaluateScenario(scenario, result);
  console.log(`  ${status.padEnd(8)}${name}: ${scenario.title}${retryNote(result)}`);
  if (scenario.known) {
    console.log(indent([`known: ${scenario.known}`]));
    if (status === "FIXED?") console.log(indent(["did not leak: remove `known` from this scenario"]));
  }
  if (ok) return;
  failed = true;
  if (detail) console.log(indent([detail]));
  if (status === "NO LEAK") {
    console.log(indent(["the leak check did not report a deliberate leak: is the check working?"]));
  } else {
    console.log(indent(reportExcerpt(result.stderr)));
  }
});

console.log("\nJS leaks (forced GC):");
const gcLines = gc.stdout.trim();
if (gcLines) console.log(gcLines.split("\n").map((l) => `  ${l}`).join("\n"));
if (gc.retries) console.log(`  ${retryNote(gc).trim()}`);
if (gc.status !== 0) {
  failed = true;
  console.log(indent([failureDetails(gc), ...reportExcerpt(gc.stderr)]));
}

console.log(failed ? "\nleakcheck FAILED" : "\nleakcheck passed");
process.exitCode = failed ? 1 : 0;
