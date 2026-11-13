import { afterEach, describe, expect, it } from "vitest";
import {
  BUILDS,
  isOrthogonal,
  loadAvoid,
  makeRect,
  orthogonalSegmentDistanceToRect,
  pointEnd,
  routeCrossesRect,
  routeOf,
  segmentsOf,
} from "./helpers.mjs";

describe.each(BUILDS)("$name build: routing", (build) => {
  let Avoid;
  let router;

  const newRouter = async (flags) => {
    Avoid = await loadAvoid(build);
    router = new Avoid.Router(flags(Avoid.RouterFlag));
    return router;
  };
  const polyLine = (f) => f.PolyLineRouting;
  const orthogonal = (f) => f.OrthogonalRouting;

  afterEach(() => {
    router?.delete();
    router = undefined;
  });

  it("polyline: straight line when nothing is in the way", async () => {
    await newRouter(polyLine);
    const conn = new Avoid.ConnRef(router, pointEnd(Avoid, 0, 0), pointEnd(Avoid, 100, 50));
    router.processTransaction();
    expect(routeOf(conn)).toEqual([[0, 0], [100, 50]]);
    expect(conn.hasValidRoute()).toBe(true);
    expect(conn.routingType()).toBe(Avoid.ConnType.ConnType_PolyLine);
  });

  it("polyline: routes around an obstacle", async () => {
    await newRouter(polyLine);
    const shape = makeRect(Avoid, 40, -10, 60, 10);
    new Avoid.ShapeRef(router, shape.poly);
    const conn = new Avoid.ConnRef(router, pointEnd(Avoid, 0, 0), pointEnd(Avoid, 100, 0));
    router.processTransaction();

    const route = routeOf(conn);
    expect(route.length).toBeGreaterThan(2);
    expect(route[0]).toEqual([0, 0]);
    expect(route.at(-1)).toEqual([100, 0]);
    expect(routeCrossesRect(route, shape.bounds)).toBe(false);
    expect(conn.hasCrossingObstacles()).toBe(false);
  });

  it("orthogonal: axis-aligned segments that avoid the obstacle", async () => {
    await newRouter(orthogonal);
    const shape = makeRect(Avoid, 40, -10, 60, 10);
    new Avoid.ShapeRef(router, shape.poly);
    const conn = new Avoid.ConnRef(router, pointEnd(Avoid, 0, 0), pointEnd(Avoid, 100, 0));
    router.processTransaction();

    const route = routeOf(conn);
    expect(conn.routingType()).toBe(Avoid.ConnType.ConnType_Orthogonal);
    expect(route[0]).toEqual([0, 0]);
    expect(route.at(-1)).toEqual([100, 0]);
    expect(isOrthogonal(route)).toBe(true);
    expect(routeCrossesRect(route, shape.bounds)).toBe(false);
  });

  it("orthogonal: shapeBufferDistance keeps routes away from shapes", async () => {
    const buffer = 15;
    await newRouter(orthogonal);
    router.setRoutingParameter(Avoid.RoutingParameter.shapeBufferDistance, buffer);
    const shape = makeRect(Avoid, 40, -10, 60, 10);
    new Avoid.ShapeRef(router, shape.poly);
    const conn = new Avoid.ConnRef(router, pointEnd(Avoid, 0, 0), pointEnd(Avoid, 100, 0));
    router.processTransaction();

    const route = routeOf(conn);
    expect(isOrthogonal(route)).toBe(true);
    const minDistance = Math.min(
      ...segmentsOf(route).map((s) => orthogonalSegmentDistanceToRect(s, shape.bounds)),
    );
    expect(minDistance).toBeGreaterThanOrEqual(buffer - 1e-9);
  });

  it("Obstacle.routingBox: shape bounds grown by shapeBufferDistance", async () => {
    await newRouter(orthogonal);
    router.setRoutingParameter(Avoid.RoutingParameter.shapeBufferDistance, 5);
    const shape = makeRect(Avoid, 40, -10, 60, 10);
    const shapeRef = new Avoid.ShapeRef(router, shape.poly);
    shape.poly.delete();

    const box = shapeRef.routingBox();
    expect(box).toBeInstanceOf(Avoid.Box);
    const [min, max] = [box.min, box.max];
    expect([min.x, min.y, max.x, max.y]).toEqual([35, -15, 65, 15]);
    expect([box.width(), box.height()]).toEqual([30, 30]);
    for (const o of [box, min, max]) o.delete();

    // JunctionRef inherits routingBox from Obstacle as well.
    const junction = new Avoid.JunctionRef(router, new Avoid.Point(0, 0));
    const jBox = junction.routingBox();
    expect(jBox.width()).toBeGreaterThanOrEqual(10);
    jBox.delete();
  });

  it("per-connector routing type overrides the router default", async () => {
    // The router needs the OrthogonalRouting flag to route orthogonal connectors.
    await newRouter((f) => f.PolyLineRouting | f.OrthogonalRouting);
    const conn = new Avoid.ConnRef(router, pointEnd(Avoid, 0, 0), pointEnd(Avoid, 100, 50));
    conn.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);
    router.processTransaction();

    expect(conn.routingType()).toBe(Avoid.ConnType.ConnType_Orthogonal);
    const route = routeOf(conn);
    expect(route.length).toBeGreaterThan(2);
    expect(isOrthogonal(route)).toBe(true);
  });

  it("keeps the ids passed to constructors", async () => {
    await newRouter(polyLine);
    const shape = new Avoid.ShapeRef(router, makeRect(Avoid, 0, 0, 10, 10).poly, 42);
    const conn = new Avoid.ConnRef(router, pointEnd(Avoid, 20, 0), pointEnd(Avoid, 30, 0), 1234);
    expect(shape.id()).toBe(42);
    expect(conn.id()).toBe(1234);
  });

  it("re-routes after moveShape_delta", async () => {
    await newRouter(polyLine);
    const shape = new Avoid.ShapeRef(router, makeRect(Avoid, 40, -10, 60, 10).poly);
    const conn = new Avoid.ConnRef(router, pointEnd(Avoid, 0, 0), pointEnd(Avoid, 100, 0));
    router.processTransaction();
    expect(routeOf(conn).length).toBeGreaterThan(2);

    router.moveShape_delta(shape, 0, 100);
    router.processTransaction();
    expect(routeOf(conn)).toEqual([[0, 0], [100, 0]]);
    expect(shape.position().y).toBe(100);
  });

  it("re-routes after moveShape_poly", async () => {
    await newRouter(polyLine);
    const shape = new Avoid.ShapeRef(router, makeRect(Avoid, 40, 90, 60, 110).poly);
    const conn = new Avoid.ConnRef(router, pointEnd(Avoid, 0, 0), pointEnd(Avoid, 100, 0));
    router.processTransaction();
    expect(routeOf(conn)).toEqual([[0, 0], [100, 0]]);

    const moved = makeRect(Avoid, 40, -10, 60, 10);
    router.moveShape_poly(shape, moved.poly, false);
    router.processTransaction();
    const route = routeOf(conn);
    expect(route.length).toBeGreaterThan(2);
    expect(routeCrossesRect(route, moved.bounds)).toBe(false);
  });

  it("re-routes after deleteShape", async () => {
    await newRouter(orthogonal);
    const shape = new Avoid.ShapeRef(router, makeRect(Avoid, 40, -10, 60, 10).poly);
    const conn = new Avoid.ConnRef(router, pointEnd(Avoid, 0, 0), pointEnd(Avoid, 100, 0));
    router.processTransaction();
    expect(routeOf(conn).length).toBeGreaterThan(2);

    router.deleteShape(shape);
    router.processTransaction();
    expect(routeOf(conn)).toEqual([[0, 0], [100, 0]]);
  });

  it("re-routes after changing connector endpoints", async () => {
    await newRouter(polyLine);
    const conn = new Avoid.ConnRef(router, pointEnd(Avoid, 0, 0), pointEnd(Avoid, 100, 0));
    router.processTransaction();

    conn.setSourceEndpoint(pointEnd(Avoid, 5, 5));
    conn.setDestEndpoint(pointEnd(Avoid, 50, 80));
    router.processTransaction();
    expect(routeOf(conn)).toEqual([[5, 5], [50, 80]]);
  });

  it("deleteConnector leaves the other connectors routable", async () => {
    await newRouter(orthogonal);
    new Avoid.ShapeRef(router, makeRect(Avoid, 40, -10, 60, 10).poly);
    const a = new Avoid.ConnRef(router, pointEnd(Avoid, 0, 0), pointEnd(Avoid, 100, 0));
    const b = new Avoid.ConnRef(router, pointEnd(Avoid, 0, 5), pointEnd(Avoid, 100, 5));
    router.processTransaction();

    router.deleteConnector(a);
    router.processTransaction();
    const route = routeOf(b);
    expect(route[0]).toEqual([0, 5]);
    expect(route.at(-1)).toEqual([100, 5]);
  });
});
