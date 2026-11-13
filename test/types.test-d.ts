// Type-level tests for typings/libavoid.d.ts (run by `vitest --typecheck`).
// They are never executed; they only have to type-check. Runtime behaviour of
// the same calls is covered by the *.test.mjs files.
import { describe, expectTypeOf, it } from "vitest";
import type {
  Avoid,
  AvoidLib as AvoidLibValue,
  Box,
  ConnRef,
  ConnTypeValue,
  Point,
  PolyLine,
  Polygon,
  Router,
} from "../typings/libavoid";

declare const AvoidLib: typeof AvoidLibValue;
declare const Avoid: Avoid;

describe("libavoid typings", () => {
  it("AvoidLib loads and returns the module", () => {
    expectTypeOf(AvoidLib.load).returns.toEqualTypeOf<Promise<void>>();
    expectTypeOf(AvoidLib.load).toBeCallableWith("/assets/libavoid.wasm");
    expectTypeOf(AvoidLib.getInstance()).toEqualTypeOf<Avoid>();
  });

  it("typical routing session", () => {
    const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
    router.setRoutingParameter(Avoid.RoutingParameter.shapeBufferDistance, 10);
    router.setRoutingOption(Avoid.RoutingOption.nudgeSharedPathsWithCommonEndPoint, true);

    const rect = new Avoid.Rectangle(new Avoid.Point(0, 0), new Avoid.Point(40, 20));
    const shape = new Avoid.ShapeRef(router, rect, 1);
    new Avoid.ShapeConnectionPin(shape, 1, 0.5, 1, true, 0, 2);

    const conn = new Avoid.ConnRef(
      router,
      new Avoid.ConnEnd(shape, 1),
      new Avoid.ConnEnd(new Avoid.Point(100, 100)),
    );
    conn.setCallback((c) => {
      expectTypeOf(c).toEqualTypeOf<ConnRef>();
    });
    conn.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);
    expectTypeOf(router.processTransaction()).toBeBoolean();

    const route = conn.displayRoute();
    expectTypeOf(route).toEqualTypeOf<PolyLine>();
    expectTypeOf(route.at(0)).toEqualTypeOf<Point>();
    expectTypeOf(route.ps.get(0)).toEqualTypeOf<Point | undefined>();
    expectTypeOf(conn.routingType()).toEqualTypeOf<ConnTypeValue>();

    router.moveShape_delta(shape, 10, 0);
    router.moveShape_poly(shape, rect, false);
    router.deleteConnector(conn);
    router.deleteShape(shape);
    router.delete();
  });

  it("junctions and checkpoints", () => {
    const router = new Avoid.Router(Avoid.RouterFlag.PolyLineRouting);
    const junction = new Avoid.JunctionRef(router, new Avoid.Point(50, 50));
    const end = Avoid.ConnEnd.createConnEndFromJunctionRef(junction);
    const conn = new Avoid.ConnRef(router, new Avoid.ConnEnd(new Avoid.Point(0, 0)), end);
    const checkpoints = new Avoid.CheckpointVector();
    checkpoints.push_back(new Avoid.Checkpoint(new Avoid.Point(10, 10)));
    conn.setRoutingCheckpoints(checkpoints);
    router.moveJunction_point(junction, new Avoid.Point(60, 60));
    expectTypeOf(junction.positionFixed()).toBeBoolean();
  });

  it("bounding boxes", () => {
    const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
    const rect = new Avoid.Rectangle(new Avoid.Point(0, 0), new Avoid.Point(40, 20));
    const shape = new Avoid.ShapeRef(router, rect);
    expectTypeOf(rect.offsetBoundingBox(5)).toEqualTypeOf<Box>();
    expectTypeOf(shape.routingBox()).toEqualTypeOf<Box>();
    const box = new Avoid.Box();
    box.min = new Avoid.Point(0, 0);
    expectTypeOf(box.max).toEqualTypeOf<Point>();
    expectTypeOf(box.length(0)).toBeNumber();
    expectTypeOf(box.width()).toBeNumber();
    expectTypeOf(box.height()).toBeNumber();
  });

  it("enum values are numbers", () => {
    expectTypeOf(Avoid.RoutingParameter.shapeBufferDistance).toExtend<number>();
    expectTypeOf(Avoid.ConnType.ConnType_Orthogonal).toEqualTypeOf<ConnTypeValue>();
    new Avoid.Router(Avoid.RouterFlag.PolyLineRouting | Avoid.RouterFlag.OrthogonalRouting);
    const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
    const rect = new Avoid.Rectangle(new Avoid.Point(0, 0), new Avoid.Point(40, 20));
    const shape = new Avoid.ShapeRef(router, rect);
    const { ConnDirUp, ConnDirDown } = Avoid.ConnDirFlag;
    const pin = new Avoid.ShapeConnectionPin(shape, 1, 0.5, 1, true, 0, ConnDirUp | ConnDirDown);
    expectTypeOf(pin.directions()).toBeNumber();
    expectTypeOf(pin.position()).toEqualTypeOf<Point>();
    expectTypeOf(pin.position(new Avoid.Polygon())).toEqualTypeOf<Point>();
  });

  it("inheritance matches the C++ hierarchy", () => {
    expectTypeOf<InstanceType<Avoid["Rectangle"]>>().toExtend<Polygon>();
    expectTypeOf<InstanceType<Avoid["ShapeRef"]>>().toHaveProperty("polygon");
    expectTypeOf<InstanceType<Avoid["Router"]>>().toEqualTypeOf<Router>();
  });

  it("rejects mistakes that the runtime silently accepts or rejects late", () => {
    const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
    const conn = new Avoid.ConnRef(
      router,
      new Avoid.ConnEnd(new Avoid.Point(0, 0)),
      new Avoid.ConnEnd(new Avoid.Point(1, 1)),
    );

    // Enum values are plain numbers at runtime, but TypeScript keeps enums
    // apart: a value of another enum is rejected...
    // @ts-expect-error
    router.setRoutingParameter(Avoid.RoutingOption.nudgeSharedPathsWithCommonEndPoint, 10);
    // @ts-expect-error
    conn.setRoutingType(Avoid.RouterFlag.OrthogonalRouting);
    // ...and so is a bare number (JS callers may pass one; it is range-checked).
    // @ts-expect-error
    router.setRoutingParameter(6, 10);
    // The `.value` form of earlier 0.5 betas no longer exists.
    // @ts-expect-error
    router.setRoutingParameter(Avoid.RoutingParameter.shapeBufferDistance.value, 10);

    // @ts-expect-error
    router.moveShape_poly(null as never as InstanceType<Avoid["ShapeRef"]>, new Avoid.Polygon());

    // Abstract classes cannot be constructed.
    // @ts-expect-error
    new Avoid.Obstacle();
  });
});
