// Connection pins, junctions, checkpoints, hate-crossings.
import { describe, expect } from "vitest";
import { BUILDS, INVALID_ADD_OPTIONS, MAX_PIN_CLASS_ID, bindingTest, makeRect, routeOf } from "./helpers.mjs";

describe.each(BUILDS)("$name build: pins, junctions, checkpoints", (build) => {
  const it = bindingTest(build);

  describe("ShapeRef.addPin, ShapeConnectionPin.position, ShapeConnectionPin.directions", () => {
    it("defaults: proportional, no inside offset, all directions", ({ Avoid, newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 40, 20).rect);
      const pin = shape.addPin({ classId: 1, x: 1, y: 0.25 });
      expect(pin.position()).toEqual(new Avoid.Point(40, 5));
      expect(pin.directions()).toBe(Avoid.ConnDirFlag.ConnDirAll);
    });

    it("absolute offsets", ({ Avoid, newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 40, 20).rect);
      // proportional = false: offsets in absolute units from the top-left.
      const pin = shape.addPin({ classId: 2, x: 40, y: 5, proportional: false });
      expect(pin.position()).toEqual(new Avoid.Point(40, 5));
    });

    it("directions reach the pin", ({ Avoid, newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 40, 20).rect);
      const pin = shape.addPin({ classId: 1, x: 0.5, y: 1, directions: Avoid.ConnDirFlag.ConnDirDown });
      expect(pin.directions()).toBe(Avoid.ConnDirFlag.ConnDirDown);
    });

    it("the pin position follows the shape", ({ Avoid, newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 40, 20).rect);
      const pin = shape.addPin({ classId: 2, x: 1, y: 0.5 });
      router.moveShape(shape, makeRect(100, 100, 200, 140).rect);
      router.processTransaction();
      expect(pin.position()).toEqual(new Avoid.Point(200, 120));
    });

    it("accepts CONNECTIONPIN_CENTRE as classId", ({ newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 10, 10).rect);
      expect(() => shape.addPin({ classId: MAX_PIN_CLASS_ID, x: 0.5, y: 0.5 })).not.toThrow();
    });

    it.for([
      ["no pin", undefined, /ShapeRef\.addPin: pin must be an object/],
      ["a missing classId", { x: 0, y: 0 }, /pin\.classId must be an integer from 1/],
      ["a missing y", { classId: 1, x: 0 }, /pin\.y must be a finite number/],
      ["a non-boolean proportional", { classId: 1, x: 0, y: 0, proportional: 1 }, /pin\.proportional must be a boolean/],
      ["negative directions", { classId: 1, x: 0, y: 0, directions: -1 }, /pin\.directions must be an integer/],
      ["CONNECTIONPIN_UNSET (INT_MAX) as classId", { classId: MAX_PIN_CLASS_ID + 1, x: 0, y: 0 }, /pin\.classId must be an integer from 1 to 2147483646/],
    ])("rejects %s", ([, pin, message], { newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 10, 10).rect);
      expect(() => shape.addPin(pin)).toThrow(message);
    });
  });

  describe("ShapeConnectionPin.updatePosition", () => {
    it("the new offset reaches the pin, x and y not swapped", ({ Avoid, newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 100, 50).rect);
      const pin = shape.addPin({ classId: 1, x: 10, y: 0, proportional: false });
      pin.updatePosition({ x: 20, y: 50 });
      expect(pin.position()).toEqual(new Avoid.Point(20, 50));
    });

    it("rejects NaN", ({ newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 10, 10).rect);
      const pin = shape.addPin({ classId: 1, x: 0, y: 0 });
      expect(() => pin.updatePosition({ x: NaN, y: 0 })).toThrow(/ShapeConnectionPin\.updatePosition: position\.x/);
    });

    it("is rejected for a junction's pin (libavoid would abort)", ({ newRouter }) => {
      const router = newRouter();
      const junction = router.addJunction({ x: 50, y: 50 });
      const pin = junction.addPin({ classId: 1 });
      expect(() => pin.updatePosition({ x: 1, y: 1 })).toThrow(TypeError);
      expect(() => pin.updatePosition({ x: 1, y: 1 })).toThrow(/not supported for a junction's pin/);
      const conn = router.addConnector({ junction }, { x: 100, y: 50 });
      router.processTransaction();
      expect(routeOf(conn)).toEqual([[50, 50], [100, 50]]);
    });
  });

  describe("ShapeConnectionPin.setConnectionCost", () => {
    it("the cost must be finite and >= 0", ({ newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 10, 10).rect);
      const pin = shape.addPin({ classId: 1, x: 0, y: 0 });
      expect(() => pin.setConnectionCost(-1)).toThrow(RangeError);
      expect(() => pin.setConnectionCost(-1)).toThrow(/ShapeConnectionPin\.setConnectionCost: cost must be >= 0, got -1/);
      expect(() => pin.setConnectionCost(NaN)).toThrow(TypeError);
      expect(() => pin.setConnectionCost(undefined)).toThrow(/cost must be a finite number/);
      pin.setConnectionCost(0);
      pin.setConnectionCost(5);
      const conn = router.addConnector({ shape, pin: 1 }, { x: 100, y: 0 });
      router.processTransaction();
      expect(routeOf(conn)[0]).toEqual([0, 0]);
    });
  });

  describe("ShapeConnectionPin.setExclusive, ShapeConnectionPin.isExclusive", () => {
    it("exclusivity round-trips", ({ newRouter }) => {
      const router = newRouter();
      const shape = router.addShape(makeRect(0, 0, 40, 20).rect);
      const pin = shape.addPin({ classId: 1, x: 0.5, y: 0.5 });
      pin.setExclusive(false);
      expect(pin.isExclusive()).toBe(false);
      pin.setExclusive(true);
      expect(pin.isExclusive()).toBe(true);
    });
  });

  describe("ShapeConnectionPin.delete, ShapeConnectionPin[Symbol.dispose]", () => {
    // Pins are deleted immediately, not in the next transaction. Without the
    // pin, libavoid warns on stderr and routes between the shape centres
    // instead of the pins (40, 30) and (200, 30).
    function pinScene(router) {
      const a = router.addShape(makeRect(0, 0, 40, 60).rect);
      a.addPin({ classId: 1, x: 1, y: 0.5 });
      const b = router.addShape(makeRect(200, 0, 240, 60).rect);
      const pin = b.addPin({ classId: 1, x: 0, y: 0.5 });
      const conn = router.addConnector({ shape: a, pin: 1 }, { shape: b, pin: 1 });
      return { pin, conn };
    }

    it("before processTransaction: the connector no longer attaches to the pin", ({ newRouter }) => {
      const router = newRouter();
      const { pin, conn } = pinScene(router);
      pin.delete();
      expect(pin.isDeleted()).toBe(true);
      router.processTransaction();
      expect(routeOf(conn)).not.toEqual([[40, 30], [200, 30]]);
    });

    it.for([
      ["pin.delete()", (pin) => pin.delete()],
      ["pin[Symbol.dispose]()", (pin) => pin[Symbol.dispose]()],
    ])("after processTransaction, %s: the connector no longer attaches to the pin", ([, remove], { newRouter }) => {
      const router = newRouter();
      const { pin, conn } = pinScene(router);
      router.processTransaction();
      expect(routeOf(conn)).toEqual([[40, 30], [200, 30]]);

      remove(pin);
      expect(pin.isDeleted()).toBe(true);
      router.processTransaction();
      expect(routeOf(conn)).not.toEqual([[40, 30], [200, 30]]);
    });

    it("deleting twice throws instead of freeing twice", ({ newRouter }) => {
      const pin = newRouter().addShape(makeRect(0, 0, 10, 20).rect).addPin({ classId: 1, x: 0.5, y: 0.5 });
      pin.delete();
      expect(() => pin.delete()).toThrow(/ShapeConnectionPin\.delete: the object was already deleted/);
    });

    it("methods of a deleted pin throw instead of touching freed memory", ({ newRouter }) => {
      const pin = newRouter().addShape(makeRect(0, 0, 10, 20).rect).addPin({ classId: 1, x: 0.5, y: 0.5 });
      pin.delete();
      expect(() => pin.position()).toThrow(/ShapeConnectionPin\.position: the object was already deleted/);
    });
  });

  describe("ShapeConnectionPin.clone", () => {
    it("throws, the shape owns the pin", ({ newRouter }) => {
      const pin = newRouter().addShape(makeRect(0, 0, 10, 20).rect).addPin({ classId: 1, x: 0.5, y: 0.5 });
      expect(() => pin.clone()).toThrow(/ShapeConnectionPin\.clone: not supported/);
    });
  });

  describe("Router.addJunction", () => {
    it("options.id reaches the junction", ({ newRouter }) => {
      const router = newRouter();
      const junction = router.addJunction({ x: 50, y: 50 }, { id: 77 });
      expect(junction.id()).toBe(77);
    });

    it("without options.id, libavoid assigns each junction its own id", ({ newRouter }) => {
      // Only check that the ids are usable and distinct; their values are libavoid's.
      const router = newRouter();
      const a = router.addJunction({ x: 50, y: 50 });
      const b = router.addJunction({ x: 80, y: 20 });
      expect(a.id()).toBeGreaterThan(0);
      expect(b.id()).not.toBe(a.id());
    });

    it.for(INVALID_ADD_OPTIONS)("rejects %s", ([, options, ErrorType], { newRouter }) => {
      const router = newRouter();
      expect(() => router.addJunction({ x: 0, y: 0 }, options)).toThrow(ErrorType);
    });
  });

  describe("Router.moveJunction", () => {
    it("two numbers -> a delta", ({ Avoid, newRouter }) => {
      const router = newRouter();
      const junction = router.addJunction({ x: 10, y: 20 });
      router.moveJunction(junction, 3, 4);
      router.processTransaction();
      expect(junction.position()).toEqual(new Avoid.Point(13, 24));
    });

    it("an object -> a point", ({ Avoid, newRouter }) => {
      const router = newRouter();
      const junction = router.addJunction({ x: 0, y: 0 });
      router.moveJunction(junction, { x: 10, y: 20 });
      router.processTransaction();
      expect(junction.position()).toEqual(new Avoid.Point(10, 20));
    });

    it("rejects a point without y", ({ newRouter }) => {
      const router = newRouter();
      const junction = router.addJunction({ x: 0, y: 0 });
      expect(() => router.moveJunction(junction, { x: 1 })).toThrow(/position\.y must be a finite number/);
    });

    it("rejects a deleted junction", ({ newRouter }) => {
      const router = newRouter();
      const junction = router.addJunction({ x: 5, y: 7 });
      router.processTransaction();
      junction.delete();
      expect(() => router.moveJunction(junction, 1, 2)).toThrow(/Router\.moveJunction: junction was already deleted/);
    });

    it("rejects a junction of another router", ({ newRouter }) => {
      const junction = newRouter().addJunction({ x: 5, y: 7 });
      expect(() => newRouter().moveJunction(junction, 1, 2)).toThrow(
        /Router\.moveJunction: junction belongs to a different Router/,
      );
    });
  });

  describe("Router.deleteJunction, JunctionRef.delete, JunctionRef[Symbol.dispose]", () => {
    // Connectors keep their last route when their junction is deleted, so the
    // removal is observed through processTransaction(), which returns whether
    // there was anything to process (libavoid): false for an empty
    // transaction, true once the deletion is queued.
    it.for([
      ["router.deleteJunction(junction)", (router, junction) => router.deleteJunction(junction)],
      ["junction.delete()", (router, junction) => junction.delete()],
      ["junction[Symbol.dispose]()", (router, junction) => junction[Symbol.dispose]()],
    ])("%s removes the junction from the router", ([, remove], { newRouter }) => {
      const router = newRouter();
      const junction = router.addJunction({ x: 5, y: 7 });
      router.processTransaction();
      expect(router.processTransaction()).toBe(false);

      remove(router, junction);
      expect(junction.isDeleted()).toBe(true);
      expect(router.processTransaction()).toBe(true);
    });

    // libavoid aborts the module when a junction is deleted in the transaction
    // that added it.
    it("throws in the transaction that added the junction, works after processTransaction", ({ newRouter }) => {
      const router = newRouter();
      const junction = router.addJunction({ x: 5, y: 7 });
      expect(() => junction.delete()).toThrow(
        /Router\.deleteJunction: the junction was added in the current transaction; call processTransaction\(\) before deleting it/,
      );
      expect(junction.isDeleted()).toBe(false);

      router.processTransaction();
      junction.delete();
      expect(junction.isDeleted()).toBe(true);
    });

    it("removes the junction's pins", ({ newRouter }) => {
      const router = newRouter();
      const junction = router.addJunction({ x: 5, y: 7 });
      const pin = junction.addPin({ classId: 1 });
      router.processTransaction();
      junction.delete();
      expect(pin.isDeleted()).toBe(true);
      expect(() => pin.delete()).toThrow(/ShapeConnectionPin\.delete: the object was already deleted/);
    });

    it("deleting twice throws instead of freeing twice", ({ newRouter }) => {
      const router = newRouter();
      const junction = router.addJunction({ x: 5, y: 7 });
      router.processTransaction();
      junction.delete();
      expect(() => junction.delete()).toThrow(/JunctionRef\.delete: the object was already deleted/);
      expect(() => router.deleteJunction(junction)).toThrow(/Router\.deleteJunction: junction was already deleted/);
    });

    it("methods of a deleted junction throw instead of touching freed memory", ({ newRouter }) => {
      const router = newRouter();
      const junction = router.addJunction({ x: 5, y: 7 });
      router.processTransaction();
      junction.delete();
      expect(() => junction.position()).toThrow(/JunctionRef\.position: the object was already deleted/);
    });

    it("rejects a junction of another router", ({ newRouter }) => {
      const junction = newRouter().addJunction({ x: 5, y: 7 });
      expect(() => newRouter().deleteJunction(junction)).toThrow(
        /Router\.deleteJunction: junction belongs to a different Router/,
      );
    });
  });

  describe("JunctionRef.clone", () => {
    it("throws, the router owns the junction", ({ newRouter }) => {
      const junction = newRouter().addJunction({ x: 5, y: 7 });
      expect(() => junction.clone()).toThrow(/JunctionRef\.clone: not supported/);
    });
  });

  describe("JunctionRef.setPositionFixed, JunctionRef.positionFixed", () => {
    it("round-trips", ({ newRouter }) => {
      const router = newRouter();
      const junction = router.addJunction({ x: 50, y: 50 });
      junction.setPositionFixed(true);
      expect(junction.positionFixed()).toBe(true);
      junction.setPositionFixed(false);
      expect(junction.positionFixed()).toBe(false);
    });
  });

  describe("JunctionRef.recommendedPosition", () => {
    it("returns a Point", ({ Avoid, newRouter }) => {
      // Computed by libavoid's hyperedge improvement: one simple case checks the conversion only.
      const router = newRouter();
      const junction = router.addJunction({ x: 50, y: 50 });
      expect(junction.recommendedPosition()).toBeInstanceOf(Avoid.Point);
    });
  });

  describe("JunctionRef.addPin", () => {
    it("the pin sits at the junction with its directions", ({ Avoid, newRouter }) => {
      const router = newRouter();
      const junction = router.addJunction({ x: 30, y: 70 });
      const pin = junction.addPin({ classId: 3, directions: Avoid.ConnDirFlag.ConnDirUp });
      expect(pin.position()).toEqual(new Avoid.Point(30, 70));
      expect(pin.directions()).toBe(Avoid.ConnDirFlag.ConnDirUp);
    });

    it("rejects classId 0", ({ newRouter }) => {
      const router = newRouter();
      const junction = router.addJunction({ x: 0, y: 0 });
      expect(() => junction.addPin({ classId: 0 })).toThrow(/JunctionRef\.addPin: pin\.classId must be an integer from 1/);
    });
  });

  describe("ConnRef.setRoutingCheckpoints, ConnRef.routingCheckpoints", () => {
    it("the route passes through the checkpoints", ({ newRouter }) => {
      const router = newRouter();
      const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 0 });
      conn.setRoutingCheckpoints([{ x: 50, y: 30 }]);
      router.processTransaction();
      expect(routeOf(conn)).toEqual([[0, 0], [50, 30], [100, 0]]);
    });

    it("round-trip: coordinates, arrival and departure, in order", ({ Avoid, newRouter }) => {
      const router = newRouter();
      const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 0 });
      const { ConnDirUp, ConnDirDown, ConnDirLeft, ConnDirRight } = Avoid.ConnDirFlag;
      const checkpoints = [
        { x: 30, y: 60, arrival: ConnDirUp, departure: ConnDirLeft },
        { x: 70, y: 20, arrival: ConnDirDown, departure: ConnDirRight },
      ];
      conn.setRoutingCheckpoints(checkpoints);
      expect(conn.routingCheckpoints()).toEqual(checkpoints);
    });

    it("arrival and departure default to ConnDirAll", ({ Avoid, newRouter }) => {
      const router = newRouter();
      const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 0 });
      conn.setRoutingCheckpoints([{ x: 30, y: 60 }]);
      const all = Avoid.ConnDirFlag.ConnDirAll;
      expect(conn.routingCheckpoints()).toEqual([{ x: 30, y: 60, arrival: all, departure: all }]);
    });

    it("an empty array clears the checkpoints", ({ newRouter }) => {
      const router = newRouter();
      const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 0 });
      conn.setRoutingCheckpoints([{ x: 30, y: 60 }]);
      conn.setRoutingCheckpoints([]);
      expect(conn.routingCheckpoints()).toEqual([]);
    });

    it.for([
      ["a single checkpoint instead of an array", { x: 1, y: 1 }, /expected an array of checkpoints/],
      ["a checkpoint without y", [{ x: 1 }], /checkpoint 0\.y must be a finite number/],
      ["bad arrival directions", [{ x: 1, y: 1, arrival: 99 }], /checkpoint 0\.arrival must be an integer/],
    ])("rejects %s", ([, checkpoints, message], { newRouter }) => {
      const router = newRouter();
      const conn = router.addConnector({ x: 0, y: 0 }, { x: 1, y: 1 });
      expect(() => conn.setRoutingCheckpoints(checkpoints)).toThrow(message);
    });
  });

  describe("ConnRef.setHateCrossings, ConnRef.doesHateCrossings", () => {
    it("round-trips", ({ newRouter }) => {
      const router = newRouter();
      const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 0 });
      expect(conn.doesHateCrossings()).toBe(false);
      conn.setHateCrossings(true);
      expect(conn.doesHateCrossings()).toBe(true);
    });
  });
});
