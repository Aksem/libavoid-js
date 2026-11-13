// Object lifetime across the JS/wasm boundary.
//
// Ownership rules (from libavoid): a Router owns its ShapeRefs, ConnRefs,
// JunctionRefs and their ShapeConnectionPins, and deletes them in its
// destructor. Value types (Point, Polygon, Rectangle, ConnEnd, Checkpoint,
// vectors) are owned by JS and must be freed with .delete().
import { describe, expect, it } from "vitest";
import { BUILDS, loadAvoid, makeRect, pointEnd, routeOf } from "./helpers.mjs";

function buildDiagram(Avoid, router, shapeCount) {
  const shapes = [];
  for (let i = 0; i < shapeCount; i++) {
    const x = (i % 5) * 200;
    const y = Math.floor(i / 5) * 200;
    const rect = new Avoid.Rectangle(new Avoid.Point(x, y), new Avoid.Point(x + 120, y + 120));
    const shape = new Avoid.ShapeRef(router, rect);
    rect.delete();
    new Avoid.ShapeConnectionPin(shape, 1, 0.5, 0.5, true, 0, Avoid.ConnDirFlag.ConnDirAll).setExclusive(false);
    shapes.push(shape);
  }
  const conns = [];
  for (let i = 0; i < shapes.length; i++) {
    for (let j = 0; j < shapes.length; j++) {
      if (i === j) continue;
      const src = new Avoid.ConnEnd(shapes[i], 1);
      const dst = new Avoid.ConnEnd(shapes[j], 1);
      const conn = new Avoid.ConnRef(router, src, dst);
      conn.ends = [i, j];
      conns.push(conn);
      src.delete();
      dst.delete();
    }
  }
  return { shapes, conns };
}

describe.each(BUILDS)("$name build: lifecycle", (build) => {
  it("repeatedly creates and destroys routers with content", async () => {
    const Avoid = await loadAvoid(build);
    for (let i = 0; i < 100; i++) {
      const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
      const shape = makeRect(Avoid, 40, -10, 60, 10);
      new Avoid.ShapeRef(router, shape.poly);
      shape.poly.delete();
      const src = pointEnd(Avoid, 0, 0);
      const dst = pointEnd(Avoid, 100, 0);
      const conn = new Avoid.ConnRef(router, src, dst);
      src.delete();
      dst.delete();
      conn.setCallback(() => {});
      router.processTransaction();
      router.delete();
    }
  });

  it("routes a medium-sized fully connected diagram (memory growth)", async () => {
    const Avoid = await loadAvoid(build);
    const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
    router.setRoutingParameter(Avoid.RoutingParameter.shapeBufferDistance, 10);
    router.setRoutingParameter(Avoid.RoutingParameter.idealNudgingDistance, 5);
    const { conns } = buildDiagram(Avoid, router, 10);
    router.processTransaction();

    expect(conns).toHaveLength(10 * 9);
    for (const conn of conns) {
      expect(conn.hasValidRoute()).toBe(true);
      expect(routeOf(conn).length).toBeGreaterThanOrEqual(2);
    }
    router.delete();
  });

  it("stays usable after deleting shapes and connectors mid-session", async () => {
    const Avoid = await loadAvoid(build);
    const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
    const { shapes, conns } = buildDiagram(Avoid, router, 4);
    router.processTransaction();

    // Delete connectors attached to shape 0 first, then the shape itself.
    const attached = conns.filter((c) => c.ends.includes(0));
    const remaining = conns.filter((c) => !c.ends.includes(0));
    expect(attached).toHaveLength(6);
    for (const conn of attached) router.deleteConnector(conn);
    router.deleteShape(shapes[0]);
    router.processTransaction();

    router.moveShape_delta(shapes[1], 0, 50);
    router.processTransaction();
    for (const conn of remaining) {
      expect(conn.hasValidRoute()).toBe(true);
      expect(routeOf(conn).length).toBeGreaterThanOrEqual(2);
    }
    router.delete();
  });

  it("JS-owned objects report deletion and reject use after delete", async () => {
    const Avoid = await loadAvoid(build);
    const p = new Avoid.Point(1, 2);
    p.delete();
    expect(p.isDeleted()).toBe(true);
    expect(() => p.equal(new Avoid.Point(1, 2))).toThrow();
    expect(() => p.delete()).toThrow();

    const router = new Avoid.Router(Avoid.RouterFlag.PolyLineRouting);
    router.delete();
    expect(() => router.processTransaction()).toThrow();
  });
});
