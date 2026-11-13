import { describe, expect, it, vi } from "vitest";
import { createAvoidLibObj } from "../src/common.js";
import { BUILDS, IS_BROWSER, loadAvoid } from "./helpers.mjs";

// Raw emscripten glue: the web build in the browser, the node-only build in Node.
const initAvoidSrc = (
  IS_BROWSER ? await import("../src/generated/libavoid.js") : await import("../src/generated/libavoid.mjs")
).default;

const EXPECTED_CLASSES = [
  "Box",
  "Checkpoint",
  "CheckpointVector",
  "ConnEnd",
  "ConnRef",
  "JunctionRef",
  "Obstacle",
  "Point",
  "PointVector",
  "Polygon",
  "PolygonInterface",
  "Rectangle",
  "Router",
  "ShapeConnectionPin",
  "ShapeRef",
];

const EXPECTED_ENUMS = ["ConnType", "RouterFlag", "RoutingOption", "RoutingParameter"];

describe("createAvoidLibObj", () => {
  it("throws from getInstance() before load()", () => {
    const lib = createAvoidLibObj(async () => ({}));
    expect(() => lib.getInstance()).toThrow(/initialized before using/);
  });

  it("initialises only once", async () => {
    const init = vi.fn(async () => ({ marker: true }));
    const lib = createAvoidLibObj(init);
    const log = vi.spyOn(console, "log").mockImplementation(() => {});
    await lib.load();
    const first = lib.getInstance();
    await lib.load();
    expect(init).toHaveBeenCalledTimes(1);
    expect(lib.getInstance()).toBe(first);
    log.mockRestore();
  });

  it("redirects only the .wasm file to an explicit path", async () => {
    let locateFile;
    const lib = createAvoidLibObj(async (moduleArg) => {
      locateFile = moduleArg.locateFile;
      return {};
    });
    await lib.load("/custom/location/libavoid.wasm");
    expect(locateFile("libavoid.wasm", "/prefix/")).toBe("/custom/location/libavoid.wasm");
    expect(locateFile("other.data", "/prefix/")).toBe("/prefix/other.data");
  });

  it("loads the real wasm from an explicit path", async () => {
    // Node reads the wasm from a file path, the browser fetches it from a URL.
    const wasmUrl = new URL("../dist/libavoid.wasm", import.meta.url);
    const wasmPath = IS_BROWSER ? wasmUrl.href : (await import("node:url")).fileURLToPath(wasmUrl);
    const lib = createAvoidLibObj(initAvoidSrc);
    await lib.load(wasmPath);
    const Avoid = lib.getInstance();
    const p = new Avoid.Point(1, 2);
    expect(p.x).toBe(1);
    p.delete();
  });

  it("rejects when the wasm file does not exist", async () => {
    const lib = createAvoidLibObj(initAvoidSrc);
    const err = vi.spyOn(console, "error").mockImplementation(() => {});
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    await expect(lib.load("/does/not/exist/libavoid.wasm")).rejects.toThrow();
    err.mockRestore();
    warn.mockRestore();
  });
});

describe.each(BUILDS)("$name build", (build) => {
  it("loads and exposes all bound classes and enums", async () => {
    const Avoid = await loadAvoid(build);
    for (const name of [...EXPECTED_CLASSES, ...EXPECTED_ENUMS]) {
      expect(Avoid[name], name).toBeDefined();
    }
  });
});
