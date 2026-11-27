// The bundles must not compile code from strings (`eval`, `new Function`), so
// that they run where that is forbidden, e.g. under a Content-Security-Policy
// without 'unsafe-eval'. The module is built with -sDYNAMIC_EXECUTION=0 for
// this (tools/generate.py). Node only: it starts a Node process with
// --disallow-code-generation-from-strings, which makes every such call throw.
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const NODE_ENTRY = new URL("../../dist/index-node.mjs", import.meta.url);

const SCRIPT = `
const { AvoidLib } = await import(${JSON.stringify(NODE_ENTRY.href)});
await AvoidLib.load();
const Avoid = AvoidLib.getInstance();
const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
const a = router.addShape({ x: 0, y: 0, width: 100, height: 50 });
const b = router.addShape({ x: 300, y: 150, width: 100, height: 50 });
a.addPin({ classId: 1, x: 1, y: 0.5, directions: Avoid.ConnDirFlag.ConnDirRight });
b.addPin({ classId: 1, x: 0, y: 0.5, directions: Avoid.ConnDirFlag.ConnDirLeft });
const conn = router.addConnector({ shape: a, pin: 1 }, { shape: b, pin: 1 });
let calls = 0;
conn.setCallback(() => { calls++; });
router.processTransaction();
console.log(JSON.stringify({ calls, route: conn.displayRoute().map((p) => [p.x, p.y]) }));
router.delete();
`;

describe("no code generation from strings", () => {
  it("loads and routes with --disallow-code-generation-from-strings", () => {
    const out = execFileSync(
      process.execPath,
      ["--disallow-code-generation-from-strings", "--input-type=module", "--eval", SCRIPT],
      { encoding: "utf8" },
    );
    const { calls, route } = JSON.parse(out);
    expect(calls).toBe(1);
    expect(route[0]).toEqual([100, 25]);
    expect(route.at(-1)).toEqual([300, 175]);
  });

  it.for(["index.js", "index-node.mjs"])("dist/%s has no new Function or eval", (file) => {
    const source = readFileSync(new URL(`../../dist/${file}`, import.meta.url), "utf8");
    expect(source).not.toMatch(/\bnew Function\b|\beval\(/);
  });
});
