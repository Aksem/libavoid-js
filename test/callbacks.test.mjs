import { afterEach, describe, expect, it, vi } from "vitest";
import { BUILDS, loadAvoid, makeRect, pointEnd, routeOf } from "./helpers.mjs";

describe.each(BUILDS)("$name build: connector callbacks", (build) => {
  let Avoid;
  let router;

  const newRouter = async () => {
    Avoid = await loadAvoid(build);
    router = new Avoid.Router(Avoid.RouterFlag.PolyLineRouting);
  };

  afterEach(() => {
    router?.delete();
    router = undefined;
  });

  it("is called on processTransaction with the ConnRef", async () => {
    await newRouter();
    const conn = new Avoid.ConnRef(router, pointEnd(Avoid, 0, 0), pointEnd(Avoid, 100, 0), 5);
    const routesSeen = [];
    const callback = vi.fn((c) => routesSeen.push(routeOf(c)));
    conn.setCallback(callback);
    router.processTransaction();

    expect(callback).toHaveBeenCalledTimes(1);
    const arg = callback.mock.calls[0][0];
    expect(arg).toBeInstanceOf(Avoid.ConnRef);
    expect(arg.id()).toBe(5);
    // The argument refers to the same C++ object, not a copy.
    expect(arg.isAliasOf(conn)).toBe(true);
    // The route is already up to date inside the callback.
    expect(routesSeen).toEqual([[[0, 0], [100, 0]]]);
  });

  it("is called again when a moved shape forces a re-route", async () => {
    await newRouter();
    const shape = new Avoid.ShapeRef(router, makeRect(Avoid, 40, 90, 60, 110).poly);
    const conn = new Avoid.ConnRef(router, pointEnd(Avoid, 0, 0), pointEnd(Avoid, 100, 0));
    const callback = vi.fn();
    conn.setCallback(callback);
    router.processTransaction();
    expect(callback).toHaveBeenCalledTimes(1);

    router.moveShape_delta(shape, 0, -100);
    router.processTransaction();
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it("passes each connector its own ConnRef", async () => {
    await newRouter();
    const seen = new Map();
    for (const id of [1, 2, 3]) {
      const conn = new Avoid.ConnRef(router, pointEnd(Avoid, 0, id * 10), pointEnd(Avoid, 100, id * 10), id);
      conn.setCallback((c) => seen.set(id, c.id()));
    }
    router.processTransaction();
    expect(Object.fromEntries(seen)).toEqual({ 1: 1, 2: 2, 3: 3 });
  });

  it("replacing the callback calls only the new one", async () => {
    await newRouter();
    const conn = new Avoid.ConnRef(router, pointEnd(Avoid, 0, 0), pointEnd(Avoid, 100, 0));
    const first = vi.fn();
    const second = vi.fn();
    conn.setCallback(first);
    conn.setCallback(second);
    router.processTransaction();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });
});
