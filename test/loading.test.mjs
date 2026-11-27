// The loader contract of the published bundle: `AvoidLib.load(path?)` and
// `AvoidLib.getInstance()`. Loading with the default path is covered by every
// binding test; the classes and enums the module exposes are covered by
// surface.test.mjs and enums.test.mjs.
import { describe, expect, it, vi } from "vitest";
import { IS_BROWSER } from "./helpers.mjs";

// Literal `new URL("...", import.meta.url)`: in the browser, Vite rewrites only
// literal specifiers to URLs its dev server serves.
const DIST_ENTRY = IS_BROWSER
  ? new URL("../dist/index.js", import.meta.url)
  : new URL("../dist/index-node.mjs", import.meta.url);

// AvoidLib is a singleton per module instance. A unique query string makes the
// module loader evaluate the bundle again, so each test gets an unloaded AvoidLib.
let instanceCount = 0;
async function freshAvoidLib() {
  instanceCount += 1;
  const { AvoidLib } = await import(/* @vite-ignore */ `${DIST_ENTRY.href}?instance=${instanceCount}`);
  return AvoidLib;
}

// Node reads the wasm from a file path, the browser fetches it from a URL.
async function toLoadPath(url) {
  return IS_BROWSER ? url.href : (await import("node:url")).fileURLToPath(url);
}

describe("AvoidLib", () => {
  it("getInstance() throws before load()", async () => {
    const AvoidLib = await freshAvoidLib();
    expect(() => AvoidLib.getInstance()).toThrow(/initialized before using/);
  });

  it("a second load() keeps the first instance", async () => {
    const AvoidLib = await freshAvoidLib();
    const log = vi.spyOn(console, "log").mockImplementation(() => {});
    await AvoidLib.load();
    const first = AvoidLib.getInstance();
    await AvoidLib.load();
    expect(AvoidLib.getInstance()).toBe(first);
    log.mockRestore();
  });

  it("load(path) loads the wasm from the given path, not the default", async () => {
    // The default dist/libavoid.wasm exists, so a successful load alone can't
    // tell which file was used. A missing file at the given path must reject.
    const missing = await freshAvoidLib();
    const err = vi.spyOn(console, "error").mockImplementation(() => {});
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    await expect(missing.load(await toLoadPath(new URL("./does-not-exist/libavoid.wasm", import.meta.url)))).rejects.toThrow();
    err.mockRestore();
    warn.mockRestore();

    const AvoidLib = await freshAvoidLib();
    await AvoidLib.load(await toLoadPath(new URL("../dist/libavoid.wasm", import.meta.url)));
    const Avoid = AvoidLib.getInstance();
    const router = new Avoid.Router(Avoid.RouterFlag.PolyLineRouting);
    expect(router.addShape({ x: 0, y: 0, width: 2, height: 4 }).position()).toEqual(new Avoid.Point(1, 2));
    router.delete();
  });

  it("load(path, { instantiateWasm }) instantiates the given WebAssembly.Module", async () => {
    const wasmUrl = new URL("../dist/libavoid.wasm", import.meta.url);
    const bytes = IS_BROWSER
      ? await (await fetch(wasmUrl)).arrayBuffer()
      : await (await import("node:fs/promises")).readFile(wasmUrl);
    const wasmModule = await WebAssembly.compile(bytes);
    const instantiateWasm = vi.fn((imports, receiveInstance) => {
      WebAssembly.instantiate(wasmModule, imports).then((instance) => receiveInstance(instance, wasmModule));
      return {};
    });
    const options = { instantiateWasm };

    // The path does not exist: the load succeeds only if nothing is read from it.
    const AvoidLib = await freshAvoidLib();
    await AvoidLib.load(await toLoadPath(new URL("./does-not-exist/libavoid.wasm", import.meta.url)), options);
    expect(instantiateWasm).toHaveBeenCalledOnce();
    expect(Object.keys(options)).toEqual(["instantiateWasm"]);

    const Avoid = AvoidLib.getInstance();
    const router = new Avoid.Router(Avoid.RouterFlag.PolyLineRouting);
    expect(router.addShape({ x: 0, y: 0, width: 2, height: 4 }).position()).toEqual(new Avoid.Point(1, 2));
    router.delete();
  });
});
