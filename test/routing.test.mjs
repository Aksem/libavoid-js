// Router, ShapeRef and ConnRef: adding, moving and deleting shapes and
// connectors, connector ends, ids, routing types, reading routes, deleting
// the router.
//
// Ownership: a Router owns the shapes, junctions and connectors added to it;
// shapes and junctions own their pins. `.delete()` (or `using`) on any of them
// removes it through its owner, and `router.delete()` frees everything. Using
// a removed handle throws instead of touching freed memory.
import { describe, expect } from "vitest";
import {
  BUILDS, INVALID_ADD_OPTIONS, MAX_PIN_CLASS_ID, bindingTest, isOrthogonal, makeRect, routeOf,
} from "./helpers.mjs";

describe.each(BUILDS)("$name build: routing", (build) => {
  const it = bindingTest(build);

  describe("Router.delete, Router[Symbol.dispose]", () => {
    it("marks everything the router owned as deleted", ({ newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 10, 20).rect);
      const shapePin = shape.addPin({ classId: 1, x: 0.5, y: 0.5 });
      const junction = router.addJunction({ x: 50, y: 70 });
      const junctionPin = junction.addPin({ classId: 1 });
      const conn = router.addConnector({ shape, pin: 1 }, { junction });
      router.processTransaction();
      router.delete();

      for (const handle of [router, shape, shapePin, junction, junctionPin, conn]) {
        expect(handle.isDeleted()).toBe(true);
      }
    });

    it("works with adds still pending", ({ newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 10, 20).rect);
      const junction = router.addJunction({ x: 50, y: 70 });
      const conn = router.addConnector({ x: 0, y: 0 }, { junction });
      router.delete();
      for (const handle of [router, shape, junction, conn]) expect(handle.isDeleted()).toBe(true);
    });

    it("Symbol.dispose deletes the router", ({ newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 10, 20).rect);
      router[Symbol.dispose]();
      expect(router.isDeleted()).toBe(true);
      expect(shape.isDeleted()).toBe(true);
    });

    // embind's own guard on deleted objects.
    it("a deleted router throws when used", ({ newRouter }) => {
      const router = newRouter();
      router.delete();
      expect(() => router.processTransaction()).toThrow(/deleted/);
      expect(() => router.addShape(makeRect(0, 0, 10, 20).rect)).toThrow(/deleted/);
    });

    it("throws when called twice", ({ newRouter }) => {
      const router = newRouter();
      router.delete();
      expect(() => router.delete()).toThrow(/already deleted/);
    });
  });

  describe("Router.addShape", () => {
    it("options.id reaches the shape", ({ newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 10, 10).rect, { id: 42 });
      expect(shape.id()).toBe(42);
    });

    it("without options.id, libavoid assigns each shape its own id", ({ newRouter }) => {
      // Only check that the ids are usable and distinct; their values are libavoid's.
      const router = newRouter();
      const a = router.addShape(makeRect(0, 0, 10, 10).rect);
      const b = router.addShape(makeRect(50, 0, 60, 10).rect);
      expect(a.id()).toBeGreaterThan(0);
      expect(b.id()).not.toBe(a.id());
    });

    it.for([
      ["a missing height", { x: 0, y: 0, width: 1 }, /Router\.addShape: shape\.height must be a finite number, got undefined/],
      ["Infinity", { x: 0, y: 0, width: Infinity, height: 1 }, /shape\.width must be a finite number, got Infinity/],
      ["a 2-point polygon", [{ x: 0, y: 0 }, { x: 1, y: 1 }], /expected at least 3 points, got 2/],
      ["a polygon with a bad point", [{ x: 0, y: 0 }, { x: 1, y: 1 }, null], /point 2 must be an object/],
      ["a string", "rect", /shape must be an object, got "rect"/],
    ])("rejects %s as the shape", ([, shape, message], { newRouter }) => {
      const router = newRouter();
      expect(() => router.addShape(shape)).toThrow(message);
    });

    it.for(INVALID_ADD_OPTIONS)("rejects %s", ([, options, ErrorType], { newRouter }) => {
      const router = newRouter();
      expect(() => router.addShape(makeRect(0, 0, 1, 1).rect, options)).toThrow(ErrorType);
    });
  });

  describe("Router.moveShape", () => {
    it.for([
      ["two numbers -> a delta", () => [5, 8], [10, 13]],
      ["a RectLike -> a rect", () => [{ x: 100, y: 120, width: 10, height: 20 }], [105, 130]],
      ["a Rect -> a rect", (Avoid) => [new Avoid.Rect(5, 8, 10, 30)], [10, 23]],
    ])("dispatches %s", ([, makeArgs, [x, y]], { Avoid, newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 10, 10).rect);
      router.moveShape(shape, ...makeArgs(Avoid));
      router.processTransaction();
      expect(shape.position()).toEqual(new Avoid.Point(x, y));
    });

    it("a polygon replaces the shape's points in order", ({ Avoid, newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(40, 90, 60, 110).rect);
      const points = [{ x: 40, y: -10 }, { x: 70, y: -10 }, { x: 70, y: 15 }, { x: 40, y: 15 }];

      router.moveShape(shape, points);
      router.processTransaction();
      expect(shape.polygon()).toEqual(points.map(({ x, y }) => new Avoid.Point(x, y)));
    });

    it("the next transaction re-routes around the moved shape", ({ newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(40, -10, 60, 10).rect);
      const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 0 });
      router.processTransaction();
      expect(routeOf(conn)).not.toEqual([[0, 0], [100, 0]]);

      router.moveShape(shape, 7, 100);
      router.processTransaction();
      expect(routeOf(conn)).toEqual([[0, 0], [100, 0]]);
    });

    it.for([
      ["a delta without dy", [5], /Router\.moveShape: dy must be a finite number, got undefined/],
      ["a polygon of 2 points", [[{ x: 0, y: 0 }, { x: 1, y: 1 }]], /expected at least 3 points, got 2/],
      ["a point instead of a rect", [{ x: 1, y: 2 }], /rect\.width must be a finite number, got undefined/],
      ["nothing", [], /rect must be an object, got undefined/],
    ])("rejects %s", ([, args, message], { newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 10, 10).rect);
      expect(() => router.moveShape(shape, ...args)).toThrow(message);
    });

    it("rejects a non-shape", ({ newRouter }) => {
      const router = newRouter();
      expect(() => router.moveShape({}, 1, 1)).toThrow(/shape must be a ShapeRef/);
    });

    it("rejects a deleted shape", ({ newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 10, 20).rect);
      router.processTransaction();
      shape.delete();
      expect(() => router.moveShape(shape, 1, 2)).toThrow(/Router\.moveShape: shape was already deleted/);
    });

    it("rejects a shape of another router", ({ newRouter }) => {
      const shape = newRouter().addShape(makeRect(0, 0, 10, 20).rect);
      expect(() => newRouter().moveShape(shape, 1, 2)).toThrow(/Router\.moveShape: shape belongs to a different Router/);
    });

    it("keeps the shape's number of points (libavoid would abort)", ({ newRouter }) => {
      const router = newRouter();
      const rect = router.addShape(makeRect(0, 0, 10, 10).rect);
      const triangle = router.addShape([{ x: 50, y: 0 }, { x: 60, y: 0 }, { x: 55, y: 10 }]);
      const tri2 = [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 2, y: 4 }];
      expect(() => router.moveShape(rect, tri2)).toThrow(
        /Router\.moveShape: a shape keeps its number of points \(libavoid\); this shape has 4, got 3/,
      );
      expect(() => router.moveShape(triangle, makeRect(0, 0, 1, 1).rect)).toThrow(/this shape has 3, got 4/);
      router.moveShape(triangle, tri2);
      router.moveShape(triangle, 1, 1);
      router.processTransaction();
      expect(triangle.polygon()).toHaveLength(3);
    });
  });

  describe("Router.deleteShape, ShapeRef.delete, ShapeRef[Symbol.dispose]", () => {
    it.for([
      ["router.deleteShape(shape)", (router, shape) => router.deleteShape(shape)],
      ["shape.delete()", (router, shape) => shape.delete()],
      ["shape[Symbol.dispose]()", (router, shape) => shape[Symbol.dispose]()],
    ])("%s removes the obstacle from routing", ([, remove], { newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(40, -10, 60, 10).rect);
      const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 0 });
      router.processTransaction();
      expect(routeOf(conn)).not.toEqual([[0, 0], [100, 0]]);

      remove(router, shape);
      expect(shape.isDeleted()).toBe(true);
      router.processTransaction();
      expect(routeOf(conn)).toEqual([[0, 0], [100, 0]]);
    });

    // libavoid aborts the module when a shape is deleted in the transaction
    // that added it.
    it("throws in the transaction that added the shape, works after processTransaction", ({ newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 10, 20).rect);
      expect(() => shape.delete()).toThrow(
        /Router\.deleteShape: the shape was added in the current transaction; call processTransaction\(\) before deleting it/,
      );
      expect(shape.isDeleted()).toBe(false);

      router.processTransaction();
      shape.delete();
      expect(shape.isDeleted()).toBe(true);
    });

    it("removes the shape's pins", ({ newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 10, 20).rect);
      const pin = shape.addPin({ classId: 1, x: 0.5, y: 0.5 });
      router.processTransaction();
      shape.delete();
      expect(pin.isDeleted()).toBe(true);
      expect(() => pin.delete()).toThrow(/ShapeConnectionPin\.delete: the object was already deleted/);
    });

    // Connectors belong to the router, not to the shapes they attach to.
    it("leaves a connector attached to the shape alive and usable", ({ newRouter }) => {
      const router = newRouter();
      const a = router.addShape(makeRect(0, 0, 40, 60).rect);
      a.addPin({ classId: 1, x: 0.5, y: 0.5 });
      const b = router.addShape(makeRect(200, 0, 240, 60).rect);
      b.addPin({ classId: 1, x: 0.5, y: 0.5 });
      const conn = router.addConnector({ shape: a, pin: 1 }, { shape: b, pin: 1 });
      router.processTransaction();

      a.delete();
      router.processTransaction();
      expect(conn.isDeleted()).toBe(false);
      conn.setSource({ x: 5, y: 7 });
      router.processTransaction();
      expect(routeOf(conn)).toEqual([[5, 7], [220, 30]]);
    });

    it("deleting twice throws instead of freeing twice", ({ newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 10, 20).rect);
      router.processTransaction();
      shape.delete();
      expect(() => shape.delete()).toThrow(/ShapeRef\.delete: the object was already deleted/);
      expect(() => router.deleteShape(shape)).toThrow(/Router\.deleteShape: shape was already deleted/);
    });

    it("methods of a deleted shape throw instead of touching freed memory", ({ newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 10, 20).rect);
      router.processTransaction();
      shape.delete();
      expect(() => shape.position()).toThrow(/ShapeRef\.position: the object was already deleted/);
    });

    it("rejects a shape of another router", ({ newRouter }) => {
      const shape = newRouter().addShape(makeRect(0, 0, 10, 20).rect);
      expect(() => newRouter().deleteShape(shape)).toThrow(/Router\.deleteShape: shape belongs to a different Router/);
    });
  });

  describe("ShapeRef.clone", () => {
    it("throws, the router owns the shape", ({ newRouter }) => {
      const shape = newRouter().addShape(makeRect(0, 0, 10, 20).rect);
      expect(() => shape.clone()).toThrow(/ShapeRef\.clone: not supported/);
    });
  });

  describe("Router.addConnector", () => {
    it("{x, y} ends: source and destination, and x and y, are not swapped", ({ newRouter }) => {
      // With nothing in the way, libavoid routes the straight line
      // [source, destination], so the route shows where each end arrived.
      const router = newRouter();
      const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 50 });
      router.processTransaction();
      expect(routeOf(conn)).toEqual([[0, 0], [100, 50]]);
    });

    it("a {shape, pin} end attaches to the shape's pin", ({ newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 20, 20).rect);
      shape.addPin({ classId: 4, x: 1, y: 0.5 });
      const conn = router.addConnector({ shape, pin: 4 }, { x: 100, y: 10 });
      router.processTransaction();
      expect(routeOf(conn)).toEqual([[20, 10], [100, 10]]);
    });

    it("a {junction} end attaches to the junction", ({ newRouter }) => {
      const router = newRouter();
      const junction = router.addJunction({ x: 100, y: 10 });
      const conn = router.addConnector({ x: 0, y: 10 }, { junction });
      router.processTransaction();
      expect(routeOf(conn)).toEqual([[0, 10], [100, 10]]);
    });

    it("{shape, pin} wins over x/y in the same object", ({ newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 20, 20).rect);
      shape.addPin({ classId: 1, x: 0.5, y: 0.5 });
      const conn = router.addConnector({ shape, pin: 1, x: 500, y: 500 }, { x: 100, y: 10 });
      router.processTransaction();
      expect(routeOf(conn)[0]).toEqual([10, 10]);
    });

    it("a RectLike is accepted as a point end (its top-left corner)", ({ newRouter }) => {
      // Documented pitfall: structural typing cannot tell them apart.
      const router = newRouter();
      const conn = router.addConnector({ x: 5, y: 6, width: 100, height: 100 }, { x: 50, y: 6 });
      router.processTransaction();
      expect(routeOf(conn)).toEqual([[5, 6], [50, 6]]);
    });

    it("{x, y, directions} ends: the directions are accepted (libavoid's ConnEnd(Point, ConnDirFlags))", ({ Avoid, newRouter }) => {
      // In this libavoid version the flags of a free point end do not visibly
      // change the route of a simple scene, so this only checks that they are
      // accepted and routed. Orthogonal routing is where libavoid reads them.
      const router = newRouter(Avoid.RouterFlag.OrthogonalRouting);
      const conn = router.addConnector(
        { x: 0, y: 0, directions: Avoid.ConnDirFlag.ConnDirDown },
        { x: 100, y: 50, directions: Avoid.ConnDirFlag.ConnDirLeft | Avoid.ConnDirFlag.ConnDirUp },
      );
      router.processTransaction();
      const route = routeOf(conn);
      expect(route[0]).toEqual([0, 0]);
      expect(route.at(-1)).toEqual([100, 50]);
    });

    it("{shape, pin} accepts CONNECTIONPIN_CENTRE and rejects CONNECTIONPIN_UNSET (INT_MAX)", ({ newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 10, 10).rect);
      shape.addPin({ classId: MAX_PIN_CLASS_ID, x: 0.5, y: 0.5 });
      const conn = router.addConnector({ shape, pin: MAX_PIN_CLASS_ID }, { x: 100, y: 5 });
      router.processTransaction();
      expect(routeOf(conn)).toEqual([[5, 5], [100, 5]]);
      expect(() => router.addConnector({ shape, pin: MAX_PIN_CLASS_ID + 1 }, { x: 0, y: 0 })).toThrow(RangeError);
    });

    it("options.id reaches the connector", ({ newRouter }) => {
      const router = newRouter();
      const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 0 }, { id: 1234 });
      expect(conn.id()).toBe(1234);
    });

    it("without options.id, libavoid assigns each connector its own id", ({ newRouter }) => {
      // Only check that the ids are usable and distinct; their values are libavoid's.
      const router = newRouter();
      const a = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 0 });
      const b = router.addConnector({ x: 0, y: 50 }, { x: 100, y: 50 });
      expect(a.id()).toBeGreaterThan(0);
      expect(b.id()).not.toBe(a.id());
    });

    it.for([
      ["a ShapeRef instead of {shape, pin}", (s) => s, /source must be \{shape, pin\}, not a ShapeRef/],
      ["a JunctionRef instead of {junction}", (s, j) => j, /source must be \{junction\}, not a JunctionRef/],
      ["null", () => null, /source must be an object, got null/],
      ["an object without known keys", () => ({ left: 1 }), /source must be \{x, y\}, \{shape, pin\} or \{junction\}/],
      ["a missing pin", (s) => ({ shape: s }), /source\.pin must be an integer from 1 to/],
      ["pin 0", (s) => ({ shape: s, pin: 0 }), /source\.pin must be an integer from 1/],
      ["a non-shape", () => ({ shape: {}, pin: 1 }), /source\.shape must be a ShapeRef, got an object/],
      ["a missing y", () => ({ x: 1 }), /source\.y must be a finite number, got undefined/],
      ["NaN", () => ({ x: NaN, y: 1 }), /source\.x must be a finite number, got NaN/],
      ["bad directions", () => ({ x: 1, y: 1, directions: 16 }), /source\.directions must be an integer from 0 to 15/],
    ])("rejects %s as an end, creating nothing", ([, makeEnd, message], { newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 20, 20).rect);
      const junction = router.addJunction({ x: 50, y: 50 });
      const before = router.addConnector({ x: 0, y: 0 }, { x: 1, y: 1 }).id();
      expect(() => router.addConnector(makeEnd(shape, junction), { x: 0, y: 0 })).toThrow(message);
      // The destination is validated before anything is created as well.
      expect(() => router.addConnector({ x: 0, y: 0 }, makeEnd(shape, junction))).toThrow(/destination/);
      // No connector was created in between: ids are consecutive.
      const after = router.addConnector({ x: 0, y: 0 }, { x: 1, y: 1 }).id();
      expect(after).toBe(before + 1);
      router.processTransaction();
    });

    it("rejects a deleted shape or junction as an end", ({ newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 10, 20).rect);
      const junction = router.addJunction({ x: 50, y: 70 });
      router.processTransaction();
      shape.delete();
      junction.delete();

      expect(() => router.addConnector({ shape, pin: 1 }, { x: 0, y: 0 })).toThrow(
        /Router\.addConnector: source\.shape was already deleted/,
      );
      expect(() => router.addConnector({ x: 0, y: 0 }, { junction })).toThrow(
        /Router\.addConnector: destination\.junction was already deleted/,
      );
    });

    it("rejects a shape or junction of another router as an end", ({ newRouter }) => {
      const other = newRouter();
      const shape = other.addShape(makeRect(0, 0, 10, 20).rect);
      const junction = other.addJunction({ x: 50, y: 70 });
      const router = newRouter();

      expect(() => router.addConnector({ shape, pin: 1 }, { x: 0, y: 0 })).toThrow(
        /Router\.addConnector: source\.shape belongs to a different Router/,
      );
      expect(() => router.addConnector({ x: 0, y: 0 }, { junction })).toThrow(
        /Router\.addConnector: destination\.junction belongs to a different Router/,
      );
    });

    it.for(INVALID_ADD_OPTIONS)("rejects %s", ([, options, ErrorType], { newRouter }) => {
      const router = newRouter();
      expect(() => router.addConnector({ x: 0, y: 0 }, { x: 1, y: 1 }, options)).toThrow(ErrorType);
    });
  });

  describe("Router.deleteConnector, ConnRef.delete, ConnRef[Symbol.dispose]", () => {
    // A re-route calls the callback of every connector libavoid still routes:
    // the live one is called again, the deleted one is not.
    it.for([
      ["router.deleteConnector(conn)", (router, conn) => router.deleteConnector(conn)],
      ["conn.delete()", (router, conn) => conn.delete()],
      ["conn[Symbol.dispose]()", (router, conn) => conn[Symbol.dispose]()],
    ])("%s removes the connector from routing", ([, remove], { newRouter }) => {
      const router = newRouter();
      const calls = { deleted: 0, live: 0 };
      const deleted = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 0 });
      deleted.setCallback(() => calls.deleted++);
      const live = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 0 });
      live.setCallback(() => calls.live++);
      router.processTransaction();
      expect(calls).toEqual({ deleted: 1, live: 1 });

      remove(router, deleted);
      expect(deleted.isDeleted()).toBe(true);
      router.addShape(makeRect(40, -10, 60, 10).rect);
      router.processTransaction();
      expect(calls).toEqual({ deleted: 1, live: 2 });
    });

    // Unlike shapes and junctions. libavoid warns on stderr that the
    // connector's ends are uninitialised.
    it("works in the transaction that added the connector", ({ newRouter }) => {
      const router = newRouter();
      const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 30 });
      conn.delete();
      expect(conn.isDeleted()).toBe(true);
      router.processTransaction();
    });

    it("deleting twice throws instead of freeing twice", ({ newRouter }) => {
      const router = newRouter();
      const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 30 });
      conn.delete();
      expect(() => conn.delete()).toThrow(/ConnRef\.delete: the object was already deleted/);
      expect(() => router.deleteConnector(conn)).toThrow(/Router\.deleteConnector: connector was already deleted/);
    });

    it("methods of a deleted connector throw instead of touching freed memory", ({ newRouter }) => {
      const router = newRouter();
      const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 30 });
      router.processTransaction();
      conn.delete();
      expect(() => conn.displayRoute()).toThrow(/ConnRef\.displayRoute: the object was already deleted/);
    });

    it("rejects a connector of another router", ({ newRouter }) => {
      const conn = newRouter().addConnector({ x: 0, y: 0 }, { x: 100, y: 30 });
      expect(() => newRouter().deleteConnector(conn)).toThrow(
        /Router\.deleteConnector: connector belongs to a different Router/,
      );
    });

    it("leaves the other connectors routable", ({ newRouter }) => {
      const router = newRouter();
      const a = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 0 });
      const b = router.addConnector({ x: 0, y: 5 }, { x: 100, y: 30 });
      router.processTransaction();

      router.deleteConnector(a);
      b.setDest({ x: 90, y: 40 });
      router.processTransaction();
      expect(b.hasValidRoute()).toBe(true);
      expect(routeOf(b)).toEqual([[0, 5], [90, 40]]);
    });
  });

  describe("ConnRef.clone", () => {
    it("throws, the router owns the connector", ({ newRouter }) => {
      const conn = newRouter().addConnector({ x: 0, y: 0 }, { x: 100, y: 30 });
      expect(() => conn.clone()).toThrow(/ConnRef\.clone: not supported/);
    });
  });

  describe("ConnRef.displayRoute", () => {
    it("returns Point instances", ({ Avoid, newRouter }) => {
      const router = newRouter();
      const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 50 });
      router.processTransaction();
      const route = conn.displayRoute();
      expect(route).toHaveLength(2);
      route.forEach((point) => expect(point).toBeInstanceOf(Avoid.Point));
    });
  });

  describe("ConnRef.hasValidRoute, ConnRef.hasCrossingObstacles", () => {
    it("return booleans", ({ newRouter }) => {
      // Computed by libavoid: one simple case checks the conversion only.
      const router = newRouter();
      const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 50 });
      router.processTransaction();
      expect(conn.hasValidRoute()).toBe(true);
      expect(conn.hasCrossingObstacles()).toBe(false);
    });
  });

  describe("ConnRef.setSource", () => {
    it("an {x, y} end becomes the new source, x and y not swapped", ({ newRouter }) => {
      const router = newRouter();
      const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 0 });
      router.processTransaction();
      conn.setSource({ x: 5, y: 15 });
      router.processTransaction();
      expect(routeOf(conn)).toEqual([[5, 15], [100, 0]]);
    });

    it("validates the end like addConnector", ({ newRouter }) => {
      const router = newRouter();
      const conn = router.addConnector({ x: 0, y: 0 }, { x: 1, y: 1 });
      expect(() => conn.setSource({ x: "1", y: 0 })).toThrow(/ConnRef\.setSource: source\.x must be a finite number, got "1"/);
    });

    it("rejects a shape of another router", ({ newRouter }) => {
      const shape = newRouter().addShape(makeRect(0, 0, 10, 20).rect);
      const conn = newRouter().addConnector({ x: 0, y: 0 }, { x: 100, y: 30 });
      expect(() => conn.setSource({ shape, pin: 1 })).toThrow(/ConnRef\.setSource: source\.shape belongs to a different Router/);
    });
  });

  describe("ConnRef.setDest", () => {
    it("an {x, y} end becomes the new destination, x and y not swapped", ({ newRouter }) => {
      const router = newRouter();
      const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 0 });
      router.processTransaction();
      conn.setDest({ x: 50, y: 80 });
      router.processTransaction();
      expect(routeOf(conn)).toEqual([[0, 0], [50, 80]]);
    });

    it("validates the end like addConnector", ({ newRouter }) => {
      const router = newRouter();
      const conn = router.addConnector({ x: 0, y: 0 }, { x: 1, y: 1 });
      expect(() => conn.setDest(undefined)).toThrow(/ConnRef\.setDest: destination must be an object/);
    });

    it("rejects a junction of another router", ({ newRouter }) => {
      const junction = newRouter().addJunction({ x: 50, y: 70 });
      const conn = newRouter().addConnector({ x: 0, y: 0 }, { x: 100, y: 30 });
      expect(() => conn.setDest({ junction })).toThrow(/ConnRef\.setDest: destination\.junction belongs to a different Router/);
    });
  });

  describe("routing type: Router flags, ConnRef.routingType, ConnRef.setRoutingType", () => {
    it("the OrthogonalRouting router flag reaches the connectors", ({ Avoid, newRouter }) => {
      const router = newRouter(Avoid.RouterFlag.OrthogonalRouting);
      const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 50 });
      router.processTransaction();

      expect(conn.routingType()).toBe(Avoid.ConnType.ConnType_Orthogonal);
      // Diagonal endpoints: only orthogonal routing bends the route.
      const route = routeOf(conn);
      expect(route.length).toBeGreaterThan(2);
      expect(isOrthogonal(route)).toBe(true);
    });

    it("setRoutingType overrides the router default for one connector", ({ Avoid, newRouter }) => {
      // The router needs the OrthogonalRouting flag to route orthogonal connectors.
      const router = newRouter(Avoid.RouterFlag.PolyLineRouting | Avoid.RouterFlag.OrthogonalRouting);
      const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 50 });
      // Precondition (libavoid): PolyLineRouting is the default when both flags are set.
      expect(conn.routingType()).toBe(Avoid.ConnType.ConnType_PolyLine);
      conn.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);
      router.processTransaction();

      expect(conn.routingType()).toBe(Avoid.ConnType.ConnType_Orthogonal);
      const route = routeOf(conn);
      expect(route.length).toBeGreaterThan(2);
      expect(isOrthogonal(route)).toBe(true);
    });
  });

  // A rejection that reached wasm would abort the module (it is built with
  // ABORT_ON_WASM_EXCEPTIONS), so each one must be a JS error, and
  // the router must still route afterwards.
  it("rejected calls leave the router unchanged and usable", ({ Avoid, newRouter }) => {
    const router = newRouter();
    const shape = router.addShape(makeRect(5, 8, 15, 38).rect);
    expect(() => router.addShape({})).toThrow(/Router\.addShape: shape\.x must be a finite number/);
    expect(() => router.moveShape(shape, NaN, 0)).toThrow(/Router\.moveShape: dx must be a finite number/);
    expect(() => router.addConnector({}, {})).toThrow(/Router\.addConnector: source must be/);

    expect(shape.position()).toEqual(new Avoid.Point(10, 23));
    const conn = router.addConnector({ x: 0, y: 100 }, { x: 100, y: 130 });
    router.processTransaction();
    expect(routeOf(conn)).toEqual([[0, 100], [100, 130]]);
  });
});
