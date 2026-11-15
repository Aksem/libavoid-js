// Runs one LeakSanitizer scenario in this process (see run.mjs) against the
// sanitizer build and prints `LEAKCHECK <json>` as the last stdout line. The
// LSan report itself goes to stderr. An ASan memory error aborts the process.
import { createAvoidLibObj } from "../../src/common.js";
import { scenarios } from "./scenarios.mjs";

const name = process.argv[2];
const scenario = scenarios[name];
if (!scenario) {
  console.error(`unknown scenario "${name}"`);
  process.exit(2);
}

const sanitizerBuild = new URL("../../build/dist_sanitizer/libavoid.mjs", import.meta.url);
const { default: initAvoid } = await import(sanitizerBuild.href);
const lib = createAvoidLibObj(initAvoid);
await lib.load();
const Avoid = lib.getInstance();

scenario.run(Avoid);
const leaked = Avoid.___lsan_do_recoverable_leak_check() !== 0;
console.log(`LEAKCHECK ${JSON.stringify({ leaked })}`);
