// Enums are exposed as plain numbers (embind enum_value_type::number). Their
// values must match the C++ definitions in libavoid (router.h, connector.h,
// connend.h), because users and serialized data rely on them.
import { describe, expect, it } from "vitest";
import { BUILDS, loadAvoid, makeRect, pointEnd, routeOf } from "./helpers.mjs";

const EXPECTED = {
  RouterFlag: { PolyLineRouting: 1, OrthogonalRouting: 2 },
  ConnType: { ConnType_None: 0, ConnType_PolyLine: 1, ConnType_Orthogonal: 2 },
  ConnDirFlag: {
    ConnDirNone: 0,
    ConnDirUp: 1,
    ConnDirDown: 2,
    ConnDirLeft: 4,
    ConnDirRight: 8,
    ConnDirAll: 15,
  },
  RoutingParameter: {
    segmentPenalty: 0,
    anglePenalty: 1,
    crossingPenalty: 2,
    clusterCrossingPenalty: 3,
    fixedSharedPathPenalty: 4,
    portDirectionPenalty: 5,
    shapeBufferDistance: 6,
    idealNudgingDistance: 7,
    reverseDirectionPenalty: 8,
  },
  RoutingOption: {
    nudgeOrthogonalSegmentsConnectedToShapes: 0,
    improveHyperedgeRoutesMovingJunctions: 1,
    penaliseOrthogonalSharedPathsAtConnEnds: 2,
    nudgeOrthogonalTouchingColinearSegments: 3,
    performUnifyingNudgingPreprocessingStep: 4,
    improveHyperedgeRoutesMovingAddingAndDeletingJunctions: 5,
    nudgeSharedPathsWithCommonEndPoint: 6,
  },
};

// Values that are not numbers at all: rejected with a TypeError.
const NOT_NUMBERS = [
  ["undefined (e.g. a typo in the enum key)", undefined],
  ["null", null],
  ["a numeric string", "6"],
  ["a boolean", true],
  ["an object with a value property", { value: 6 }],
];

describe.each(BUILDS)("$name build: enums", (build) => {
  it.each(Object.entries(EXPECTED))("%s is a plain object of the C++ values", async (enumName, values) => {
    const Avoid = await loadAvoid(build);
    expect({ ...Avoid[enumName] }).toEqual(values);
  });

  it("RouterFlag values combine with |", async () => {
    const Avoid = await loadAvoid(build);
    const { PolyLineRouting, OrthogonalRouting } = Avoid.RouterFlag;
    const router = new Avoid.Router(PolyLineRouting | OrthogonalRouting);
    const conn = new Avoid.ConnRef(router, pointEnd(Avoid, 0, 0), pointEnd(Avoid, 100, 50));
    conn.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);
    router.processTransaction();
    expect(routeOf(conn).length).toBeGreaterThan(2);
    router.delete();
  });

  it("routingType() returns a plain number", async () => {
    const Avoid = await loadAvoid(build);
    const router = new Avoid.Router(Avoid.RouterFlag.PolyLineRouting);
    const conn = new Avoid.ConnRef(router, pointEnd(Avoid, 0, 0), pointEnd(Avoid, 1, 1));
    expect(conn.routingType()).toBe(Avoid.ConnType.ConnType_PolyLine);
    expect(conn.routingType()).toBe(1);
    router.delete();
  });

  it("setRoutingParameter applies the value to the given parameter", async () => {
    // routingBox() = shape bounds grown by shapeBufferDistance, so it shows
    // which parameter was set (a wrong conversion to 0 would set segmentPenalty).
    const Avoid = await loadAvoid(build);
    const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
    const rect = makeRect(Avoid, 0, 0, 20, 10).poly;
    const shape = new Avoid.ShapeRef(router, rect);
    rect.delete();
    const widthWithBuffer = (buffer) => {
      router.setRoutingParameter(Avoid.RoutingParameter.shapeBufferDistance, buffer);
      const box = shape.routingBox();
      const width = box.width();
      box.delete();
      return width;
    };
    expect(widthWithBuffer(7)).toBe(34);

    // The literal number is equivalent to the enum key.
    router.setRoutingParameter(6, 3);
    const box = shape.routingBox();
    expect(box.width()).toBe(26);
    box.delete();
    router.delete();
  });

  describe("invalid enum arguments throw instead of being converted to 0", () => {
    const withRouter = async (fn) => {
      const Avoid = await loadAvoid(build);
      const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
      const conn = new Avoid.ConnRef(router, pointEnd(Avoid, 0, 0), pointEnd(Avoid, 1, 1));
      try {
        fn(Avoid, router, conn);
      } finally {
        router.delete();
      }
    };

    it.each(NOT_NUMBERS)("TypeError for %s", async (_label, arg) => {
      await withRouter((Avoid, router, conn) => {
        expect(() => router.setRoutingParameter(arg, 4)).toThrow(TypeError);
        expect(() => router.setRoutingOption(arg, true)).toThrow(TypeError);
        expect(() => conn.setRoutingType(arg)).toThrow(TypeError);
      });
    });

    it("the TypeError names the enum", async () => {
      await withRouter((Avoid, router) => {
        expect(() => router.setRoutingParameter(Avoid.RoutingParameter.shapeBuferDistance, 4)).toThrow(
          /RoutingParameter must be a number.*got undefined/,
        );
      });
    });

    it.each([
      ["negative", -1],
      ["one past the last value", undefined],
      ["not an integer", 1.5],
      ["NaN", NaN],
      ["Infinity", Infinity],
    ])("RangeError for a number that is %s", async (label, arg) => {
      await withRouter((Avoid, router, conn) => {
        const pastLast = (e) => Math.max(...Object.values(e)) + 1;
        const value = (e) => (arg === undefined ? pastLast(e) : arg);
        expect(() => router.setRoutingParameter(value(Avoid.RoutingParameter), 4)).toThrow(RangeError);
        expect(() => router.setRoutingOption(value(Avoid.RoutingOption), true)).toThrow(RangeError);
        expect(() => conn.setRoutingType(value(Avoid.ConnType))).toThrow(RangeError);
      });
    });

    it("a rejected call changes nothing and the module keeps working", async () => {
      const Avoid = await loadAvoid(build);
      const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
      router.setRoutingParameter(Avoid.RoutingParameter.shapeBufferDistance, 5);
      const rect = makeRect(Avoid, 40, -10, 60, 10).poly;
      const shape = new Avoid.ShapeRef(router, rect);
      rect.delete();
      const conn = new Avoid.ConnRef(router, pointEnd(Avoid, 0, 0), pointEnd(Avoid, 100, 0));
      conn.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);

      expect(() => router.setRoutingParameter(9, 100)).toThrow(RangeError);
      expect(() => router.setRoutingParameter(undefined, 100)).toThrow(TypeError);
      expect(() => conn.setRoutingType(3)).toThrow(RangeError);

      const box = shape.routingBox();
      expect(box.width()).toBe(30);
      box.delete();
      expect(conn.routingType()).toBe(Avoid.ConnType.ConnType_Orthogonal);
      router.processTransaction();
      expect(routeOf(conn).length).toBeGreaterThan(2);
      router.delete();

      // A fresh router still works too.
      const other = new Avoid.Router(Avoid.RouterFlag.PolyLineRouting);
      const c = new Avoid.ConnRef(other, pointEnd(Avoid, 0, 0), pointEnd(Avoid, 10, 0));
      other.processTransaction();
      expect(routeOf(c)).toEqual([[0, 0], [10, 0]]);
      other.delete();
    });
  });
});
