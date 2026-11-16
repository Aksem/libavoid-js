import { describe, expect, vi } from "vitest";
import { BUILDS, bindingTest, makeRect, routeOf } from "./helpers.mjs";

describe.each(BUILDS)("$name build: connector callbacks", (build) => {
  const it = bindingTest(build);

  it("is called on processTransaction with the same ConnRef object", ({ newRouter }) => {
    const router = newRouter();
    const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 0 }, { id: 5 });
    const routesSeen = [];
    const callback = vi.fn((c) => routesSeen.push(routeOf(c)));
    conn.setCallback(callback);
    router.processTransaction();

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback.mock.calls[0]).toHaveLength(1);
    expect(callback.mock.calls[0][0]).toBe(conn);
    // The route is already up to date inside the callback.
    expect(routesSeen).toEqual([[[0, 0], [100, 0]]]);
  });

  it("is called again when a moved shape forces a re-route", ({ newRouter }) => {
    const router = newRouter();
    const shape = router.addShape(makeRect(40, 90, 60, 110).rect);
    const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 0 });
    const callback = vi.fn();
    conn.setCallback(callback);
    router.processTransaction();
    expect(callback).toHaveBeenCalledTimes(1);

    router.moveShape(shape, 0, -100);
    router.processTransaction();
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it("passes each connector its own ConnRef", ({ newRouter }) => {
    const router = newRouter();
    const seen = new Map();
    const conns = [1, 2, 3].map((id) => {
      const conn = router.addConnector({ x: 0, y: id * 10 }, { x: 100, y: id * 10 }, { id });
      conn.setCallback((c) => seen.set(id, c));
      return conn;
    });
    router.processTransaction();
    conns.forEach((conn, i) => expect(seen.get(i + 1)).toBe(conn));
  });

  it("replacing the callback calls only the new one", ({ newRouter }) => {
    const router = newRouter();
    const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 0 });
    const first = vi.fn();
    const second = vi.fn();
    conn.setCallback(first);
    conn.setCallback(second);
    router.processTransaction();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it("rejects a non-function callback", ({ newRouter }) => {
    const router = newRouter();
    const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 0 });
    expect(() => conn.setCallback(undefined)).toThrow(/ConnRef.setCallback: callback must be a function/);
  });
});
