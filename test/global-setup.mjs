// Binding tests load dist/ (see helpers.mjs). Rebuild it before every run so
// they never test stale code after a change in src/, the typings or the wasm.
// The build also rewrites examples/dist and examples/debug-dist; that is
// fine, they are build output too.
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));

export default function buildDist() {
  execFileSync(process.execPath, ["build.cjs"], { cwd: root, stdio: "inherit" });
}
