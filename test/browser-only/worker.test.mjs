// The browser bundle inside a dedicated Web Worker, as used by routing off the
// main thread.
import { describe, expect, it } from "vitest";

// Literal `new URL("...", import.meta.url)` inside `new Worker(...)`: Vite
// bundles the worker only for this literal form.
function runWorker() {
  return new Promise((resolve, reject) => {
    const worker = new Worker(new URL("./router.worker.mjs", import.meta.url), { type: "module" });
    worker.onmessage = (event) => {
      worker.terminate();
      resolve(event.data);
    };
    worker.onerror = (event) => {
      worker.terminate();
      reject(new Error(`worker failed to start: ${event.message}`));
    };
  });
}

describe("AvoidLib in a Web Worker", () => {
  it("loads the wasm and routes a connector", async () => {
    const result = await runWorker();
    expect(result.error).toBeUndefined();
    // Both pins sit at the shape centers: (10, 10) and (110, 70).
    expect(result.route.length).toBeGreaterThanOrEqual(2);
    expect(result.route[0]).toEqual([10, 10]);
    expect(result.route.at(-1)).toEqual([110, 70]);
  });
});
