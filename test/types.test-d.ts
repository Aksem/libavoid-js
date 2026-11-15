// Type-level tests for the typings. They import
// the package by name, so they check dist/index.d.ts as users resolve it
// through package.json. They are never executed; they only have to
// type-check. Runtime behaviour of the same calls is covered by the
// *.test.mjs files.
import { describe, expectTypeOf, it } from "vitest";
import {
  AvoidLib,
  type Avoid,
  type Checkpoint,
  type ConnRef,
  type ConnTypeValue,
  type JunctionRef,
  type Obstacle,
  type Point,
  type Rect,
  type Router,
  type ShapeConnectionPin,
  type ShapeRef,
} from "libavoid-js";

declare const Avoid: Avoid;

describe("libavoid typings", () => {
  it("AvoidLib loads and returns the module", () => {
    expectTypeOf(AvoidLib.load).returns.toEqualTypeOf<Promise<void>>();
    expectTypeOf(AvoidLib.load).toBeCallableWith();
    expectTypeOf(AvoidLib.load).toBeCallableWith("/assets/libavoid.wasm");
    expectTypeOf(AvoidLib.getInstance()).toEqualTypeOf<Avoid>();
    expectTypeOf(AvoidLib.avoidLib).toEqualTypeOf<Avoid | undefined>();
  });

  it("Point and Rect are classes on the module", () => {
    const p = new Avoid.Point(1, 2);
    expectTypeOf(p).toEqualTypeOf<Point>();
    expectTypeOf(p.equals({ x: 1, y: 2 })).toBeBoolean();
    expectTypeOf(p.equals(p, 0.001)).toBeBoolean();
    const r = new Avoid.Rect(0, 0, 10, 20);
    expectTypeOf(r).toEqualTypeOf<Rect>();
    expectTypeOf(r.right).toBeNumber();
  });

  it("typical routing session", () => {
    const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
    router.setRoutingParameter(Avoid.RoutingParameter.shapeBufferDistance, 10);
    router.setRoutingOption(Avoid.RoutingOption.nudgeSharedPathsWithCommonEndPoint, true);

    const shape = router.addShape({ x: 0, y: 0, width: 40, height: 20 }, { id: 1 });
    expectTypeOf(shape).toEqualTypeOf<ShapeRef>();
    const pin = shape.addPin({ classId: 1, x: 0.5, y: 1, directions: Avoid.ConnDirFlag.ConnDirDown });
    expectTypeOf(pin).toEqualTypeOf<ShapeConnectionPin>();

    const conn = router.addConnector({ shape, pin: 1 }, { x: 100, y: 100 });
    conn.setCallback((c) => {
      expectTypeOf(c).toEqualTypeOf<ConnRef>();
    });
    conn.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);
    expectTypeOf(router.processTransaction()).toBeBoolean();

    expectTypeOf(conn.displayRoute()).toEqualTypeOf<Point[]>();
    expectTypeOf(conn.routingType()).toEqualTypeOf<ConnTypeValue>();

    router.moveShape(shape, 10, 0);
    router.moveShape(shape, { x: 10, y: 0, width: 40, height: 20 });
    router.moveShape(shape, [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }]);
    router.deleteConnector(conn);
    shape.delete();
    router.delete();
  });

  it("outputs can be passed back as inputs", () => {
    const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
    const a = router.addShape({ x: 0, y: 0, width: 40, height: 20 });
    const b = router.addShape(a.polygon());
    router.moveShape(b, a.routingBox());
    router.addConnector(a.position(), b.position());
  });

  it("point lists may be readonly", () => {
    const router = new Avoid.Router(Avoid.RouterFlag.PolyLineRouting);
    const tri = [{ x: 0, y: 0 }, { x: 10, y: 2 }, { x: 4, y: 8 }] as const;
    const shape = router.addShape(tri);
    router.moveShape(shape, tri);
    const conn = router.addConnector({ x: 0, y: 0 }, { x: 1, y: 1 });
    conn.setRoutingCheckpoints([{ x: 10, y: 10 }, { x: 20, y: 20 }] as const);
    Avoid.offsetPolygon(tri, 2);
    Avoid.boundingRectPolygon(tri);
    Avoid.offsetBoundingBox(tri, 5);
  });

  it("addShape, addJunction and addConnector take options.id", () => {
    const router = new Avoid.Router(Avoid.RouterFlag.PolyLineRouting);
    router.addShape({ x: 0, y: 0, width: 40, height: 20 }, { id: 1 });
    router.addJunction({ x: 50, y: 50 }, { id: 2 });
    router.addConnector({ x: 0, y: 0 }, { x: 1, y: 1 }, { id: 3 });
  });

  it("obstacle getters return ids and geometry values", () => {
    const router = new Avoid.Router(Avoid.RouterFlag.PolyLineRouting);
    const shape = router.addShape({ x: 0, y: 0, width: 40, height: 20 });
    expectTypeOf(shape.id()).toBeNumber();
    expectTypeOf(shape.polygon()).toEqualTypeOf<Point[]>();
    expectTypeOf(shape.position()).toEqualTypeOf<Point>();
    expectTypeOf(shape.routingBox()).toEqualTypeOf<Rect>();
    const junction = router.addJunction({ x: 50, y: 50 });
    expectTypeOf(junction.id()).toBeNumber();
    expectTypeOf(junction.position()).toEqualTypeOf<Point>();
  });

  it("junctions, pins and checkpoints", () => {
    const router = new Avoid.Router(Avoid.RouterFlag.PolyLineRouting);
    const junction = router.addJunction({ x: 50, y: 50 });
    expectTypeOf(junction).toEqualTypeOf<JunctionRef>();
    junction.addPin({ classId: 2 });
    const conn = router.addConnector({ x: 0, y: 0, directions: Avoid.ConnDirFlag.ConnDirUp }, { junction });
    conn.setRoutingCheckpoints([{ x: 10, y: 10 }, { x: 20, y: 20, arrival: Avoid.ConnDirFlag.ConnDirLeft }]);
    expectTypeOf(conn.routingCheckpoints()).toEqualTypeOf<Checkpoint[]>();
    router.moveJunction(junction, { x: 60, y: 60 });
    router.moveJunction(junction, 1, 1);
    junction.setPositionFixed(true);
    expectTypeOf(junction.positionFixed()).toBeBoolean();
    expectTypeOf(junction.recommendedPosition()).toEqualTypeOf<Point>();
  });

  it("ShapeConnectionPin setters and getters", () => {
    const router = new Avoid.Router(Avoid.RouterFlag.PolyLineRouting);
    const shape = router.addShape({ x: 0, y: 0, width: 40, height: 20 });
    const pin = shape.addPin({ classId: 1, x: 0.5, y: 1 });
    expectTypeOf(pin.position()).toEqualTypeOf<Point>();
    pin.setConnectionCost(2);
    pin.setExclusive(true);
    expectTypeOf(pin.isExclusive()).toBeBoolean();
    pin.updatePosition({ x: 0.25, y: 0 });
  });

  it("ConnRef.setSource and setDest take every connector end", () => {
    const router = new Avoid.Router(Avoid.RouterFlag.PolyLineRouting);
    const shape = router.addShape({ x: 0, y: 0, width: 40, height: 20 });
    const junction = router.addJunction({ x: 50, y: 50 });
    const conn = router.addConnector({ x: 0, y: 0 }, { x: 1, y: 1 });
    conn.setSource({ x: 0, y: 0, directions: Avoid.ConnDirFlag.ConnDirUp });
    conn.setSource({ shape, pin: 1 });
    conn.setSource({ junction });
    conn.setDest({ x: 1, y: 1 });
    conn.setDest({ shape, pin: 1 });
    conn.setDest({ junction });
  });

  it("ConnRef getters return ids and booleans", () => {
    const router = new Avoid.Router(Avoid.RouterFlag.PolyLineRouting);
    const conn = router.addConnector({ x: 0, y: 0 }, { x: 1, y: 1 });
    expectTypeOf(conn.id()).toBeNumber();
    conn.setHateCrossings(true);
    expectTypeOf(conn.doesHateCrossings()).toBeBoolean();
    expectTypeOf(conn.hasValidRoute()).toBeBoolean();
    expectTypeOf(conn.hasCrossingObstacles()).toBeBoolean();
  });

  it("objects are deleted through their router or their own delete()", () => {
    const router = new Avoid.Router(Avoid.RouterFlag.PolyLineRouting);
    const shape = router.addShape({ x: 0, y: 0, width: 40, height: 20 });
    const pin = shape.addPin({ classId: 1, x: 0.5, y: 1 });
    const junction = router.addJunction({ x: 50, y: 50 });
    const conn = router.addConnector({ x: 0, y: 0 }, { x: 1, y: 1 });
    router.processTransaction();
    pin.delete();
    router.deleteConnector(conn);
    router.deleteJunction(junction);
    router.deleteShape(shape);
  });

  it("handles report deletion and aliasing", () => {
    const router = new Avoid.Router(Avoid.RouterFlag.PolyLineRouting);
    const shape = router.addShape({ x: 0, y: 0, width: 40, height: 20 });
    const conn = router.addConnector({ x: 0, y: 0 }, { x: 1, y: 1 });
    expectTypeOf(shape.isDeleted()).toBeBoolean();
    expectTypeOf(shape.isAliasOf(conn)).toBeBoolean();
  });

  it("the router can be declared with using", () => {
    using router = new Avoid.Router(Avoid.RouterFlag.PolyLineRouting);
    router.addShape({ x: 0, y: 0, width: 1, height: 1 });
  });

  it("enum values are numbers", () => {
    expectTypeOf(Avoid.RoutingParameter.shapeBufferDistance).toExtend<number>();
    expectTypeOf(Avoid.ConnType.ConnType_Orthogonal).toEqualTypeOf<ConnTypeValue>();
    new Avoid.Router(Avoid.RouterFlag.PolyLineRouting | Avoid.RouterFlag.OrthogonalRouting);
    const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
    const shape = router.addShape({ x: 0, y: 0, width: 40, height: 20 });
    const { ConnDirUp, ConnDirDown } = Avoid.ConnDirFlag;
    const pin = shape.addPin({ classId: 1, x: 0.5, y: 1, directions: ConnDirUp | ConnDirDown });
    expectTypeOf(pin.directions()).toBeNumber();
  });

  it("instanceof works on the module's classes", () => {
    const value: unknown = null;
    if (value instanceof Avoid.Point) expectTypeOf(value).toEqualTypeOf<Point>();
    if (value instanceof Avoid.Rect) expectTypeOf(value).toEqualTypeOf<Rect>();
    if (value instanceof Avoid.Router) expectTypeOf(value).toEqualTypeOf<Router>();
    if (value instanceof Avoid.Obstacle) expectTypeOf(value).toEqualTypeOf<Obstacle>();
    if (value instanceof Avoid.ShapeRef) expectTypeOf(value).toEqualTypeOf<ShapeRef>();
    if (value instanceof Avoid.JunctionRef) expectTypeOf(value).toEqualTypeOf<JunctionRef>();
    if (value instanceof Avoid.ConnRef) expectTypeOf(value).toEqualTypeOf<ConnRef>();
    if (value instanceof Avoid.ShapeConnectionPin) expectTypeOf(value).toEqualTypeOf<ShapeConnectionPin>();
  });

  it("rejects mistakes that the runtime would reject late or not at all", () => {
    const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
    const shape = router.addShape({ x: 0, y: 0, width: 40, height: 20 });
    const junction = router.addJunction({ x: 50, y: 50 });
    const conn = router.addConnector({ x: 0, y: 0 }, { x: 1, y: 1 });

    // Enum values are plain numbers at runtime, but TypeScript keeps enums
    // apart: a value of another enum is rejected...
    // @ts-expect-error
    router.setRoutingParameter(Avoid.RoutingOption.nudgeSharedPathsWithCommonEndPoint, 10);
    // @ts-expect-error
    conn.setRoutingType(Avoid.RouterFlag.OrthogonalRouting);
    // ...and so is a bare number (JS callers may pass one; it is range-checked).
    // @ts-expect-error
    router.setRoutingParameter(6, 10);

    // Router-owned classes are created through the router only.
    // @ts-expect-error
    new Avoid.ShapeRef();
    // @ts-expect-error
    new Avoid.Obstacle();

    // A shape is not a connector end: attach through a pin.
    // @ts-expect-error
    router.addConnector(shape, { x: 0, y: 0 });
    // @ts-expect-error
    router.addConnector({ shape }, { x: 0, y: 0 });
    // @ts-expect-error
    conn.setSource(shape);
    // @ts-expect-error
    conn.setDest({ shape });

    // A move by a delta needs both dx and dy.
    // @ts-expect-error
    router.moveShape(shape, 1);
    // @ts-expect-error
    router.moveJunction(junction, 1);

    // Geometry values are read-only copies.
    const p = shape.position();
    // @ts-expect-error
    p.x = 1;
    // @ts-expect-error
    shape.routingBox().width = 1;
    // ...and have no constructor defaults.
    // @ts-expect-error
    new Avoid.Point(1);

    // Removed in 0.5.0.
    // @ts-expect-error
    router.moveShape_delta(shape, 1, 1);
    // @ts-expect-error
    shape.routingBox().width();
    // @ts-expect-error
    shape.clone();
    // @ts-expect-error
    conn.deleteLater();
    // @ts-expect-error
    Avoid.Rectangle;
  });
});
