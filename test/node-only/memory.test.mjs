// Leak check (Node only: needs process.memoryUsage). Repeats a full
// add/move/route/read/delete cycle; with no temporaries to delete, wasm
// memory must stay flat. wasm memory shows up in `external`, not in
// `arrayBuffers`.
import { describe, expect, it } from "vitest";
import { BUILDS, loadAvoid } from "../helpers.mjs";

function cycle(Avoid, i) {
  const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
  const shapes = [];
  for (let k = 0; k < 5; k++) {
    const shape = router.addShape({ x: k * 100, y: 0, width: 50, height: 50 });
    shape.addPin({ classId: 1, x: 0.5, y: 1 });
    shapes.push(shape);
  }
  const conns = [];
  for (let k = 0; k + 1 < shapes.length; k++) {
    const conn = router.addConnector({ shape: shapes[k], pin: 1 }, { shape: shapes[k + 1], pin: 1 });
    conn.setRoutingCheckpoints([{ x: k * 100 + 75, y: 100 }]);
    conn.setCallback(() => {});
    conns.push(conn);
  }
  router.processTransaction();
  router.moveShape(shapes[2], { x: 200, y: 20 + (i % 3), width: 50, height: 50 });
  router.moveShape(shapes[3], [{ x: 300, y: 0 }, { x: 350, y: 0 }, { x: 350, y: 50 }, { x: 300, y: 50 }]);
  router.processTransaction();
  for (const conn of conns) {
    conn.displayRoute();
    conn.routingCheckpoints();
  }
  for (const shape of shapes) {
    shape.polygon();
    shape.position();
    shape.routingBox();
  }
  Avoid.offsetPolygon(shapes[0].polygon(), 2);
  conns[0].delete();
  shapes[4].delete();
  router.processTransaction();
  router.delete();
}

describe.each(BUILDS)("$name build: memory", (build) => {
  it("a full cycle leaks no wasm memory", async () => {
    const Avoid = await loadAvoid(build);
    for (let i = 0; i < 200; i++) cycle(Avoid, i); // warm up / let the heap settle
    const before = process.memoryUsage().external;
    for (let i = 0; i < 2000; i++) cycle(Avoid, i);
    const growth = process.memoryUsage().external - before;
    // Catches leaked objects, not single bytes: leaking the router of each
    // cycle grows `external` by ~40 MB here, a correct cycle by 0. Small
    // per-call leaks (e.g. a 24-byte Point) are absorbed by free wasm heap.
    expect(growth).toBeLessThan(1024 * 1024);
  });
});
