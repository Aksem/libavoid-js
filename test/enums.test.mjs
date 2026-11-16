// Enums are exposed as plain objects of numbers. embind/bindings.cpp binds
// each name directly to its C++ constant, so the values cannot drift from
// libavoid by themselves. The snapshot below still pins them because it
// catches:
//  - a name bound to the wrong constant (a copy-paste slip in bindings.cpp),
//  - keys that are missing, extra or misspelt compared to typings/libavoid.d.ts,
//  - values changed upstream when libavoid is updated. Users may pass or store
//    the plain numbers, so that is a breaking change: update the snapshot with
//    `vitest -u` only together with a CHANGELOG entry.
import { describe, expect } from "vitest";
import { BUILDS, bindingTest, makeRect, routeOf } from "./helpers.mjs";

const ENUM_NAMES = ["RouterFlag", "ConnType", "ConnDirFlag", "RoutingParameter", "RoutingOption"];

// Values that are not numbers at all: rejected with a TypeError.
const NOT_NUMBERS = [
  ["undefined (e.g. a typo in the enum key)", undefined],
  ["null", null],
  ["a numeric string", "6"],
  ["a boolean", true],
  ["an object with a value property", { value: 6 }],
];

describe.each(BUILDS)("$name build: enums", (build) => {
  const it = bindingTest(build);

  it("enum names and values are unchanged", ({ Avoid }) => {
    const enums = Object.fromEntries(ENUM_NAMES.map((name) => [name, { ...Avoid[name] }]));
    expect(enums).toMatchInlineSnapshot(`
      {
        "ConnDirFlag": {
          "ConnDirAll": 15,
          "ConnDirDown": 2,
          "ConnDirLeft": 4,
          "ConnDirNone": 0,
          "ConnDirRight": 8,
          "ConnDirUp": 1,
        },
        "ConnType": {
          "ConnType_None": 0,
          "ConnType_Orthogonal": 2,
          "ConnType_PolyLine": 1,
        },
        "RouterFlag": {
          "OrthogonalRouting": 2,
          "PolyLineRouting": 1,
        },
        "RoutingOption": {
          "improveHyperedgeRoutesMovingAddingAndDeletingJunctions": 5,
          "improveHyperedgeRoutesMovingJunctions": 1,
          "nudgeOrthogonalSegmentsConnectedToShapes": 0,
          "nudgeOrthogonalTouchingColinearSegments": 3,
          "nudgeSharedPathsWithCommonEndPoint": 6,
          "penaliseOrthogonalSharedPathsAtConnEnds": 2,
          "performUnifyingNudgingPreprocessingStep": 4,
        },
        "RoutingParameter": {
          "anglePenalty": 1,
          "clusterCrossingPenalty": 3,
          "crossingPenalty": 2,
          "fixedSharedPathPenalty": 4,
          "idealNudgingDistance": 7,
          "portDirectionPenalty": 5,
          "reverseDirectionPenalty": 8,
          "segmentPenalty": 0,
          "shapeBufferDistance": 6,
        },
      }
    `);
  });

  it("RouterFlag values combine with |", ({ Avoid, newRouter }) => {
    const { PolyLineRouting, OrthogonalRouting } = Avoid.RouterFlag;
    const router = newRouter(PolyLineRouting | OrthogonalRouting);
    const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 50 });
    conn.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);
    router.processTransaction();
    expect(routeOf(conn).length).toBeGreaterThan(2);
  });

  it("routingType() returns a plain number", ({ Avoid, newRouter }) => {
    const router = newRouter(Avoid.RouterFlag.PolyLineRouting);
    const conn = router.addConnector({ x: 0, y: 0 }, { x: 1, y: 1 });
    expect(conn.routingType()).toBe(Avoid.ConnType.ConnType_PolyLine);
    expect(conn.routingType()).toBe(1);
  });

  it("setRoutingParameter applies the value to the given parameter", ({ Avoid, newRouter }) => {
    // routingBox() = shape bounds grown by shapeBufferDistance, so it shows
    // which parameter was set (a wrong conversion to 0 would set segmentPenalty).
    const router = newRouter(Avoid.RouterFlag.OrthogonalRouting);
    const shape = router.addShape(makeRect(0, 0, 20, 10).rect);
    router.setRoutingParameter(Avoid.RoutingParameter.shapeBufferDistance, 7);
    expect(shape.routingBox().width).toBe(34);

    // The literal number is equivalent to the enum key.
    router.setRoutingParameter(6, 3);
    expect(shape.routingBox().width).toBe(26);
  });

  describe("invalid enum arguments throw instead of being converted to 0", () => {
    const setUp = ({ Avoid, newRouter }) => {
      const router = newRouter(Avoid.RouterFlag.OrthogonalRouting);
      return { router, conn: router.addConnector({ x: 0, y: 0 }, { x: 1, y: 1 }) };
    };

    it.for(NOT_NUMBERS)("TypeError for %s", ([, arg], { Avoid, newRouter }) => {
      const { router, conn } = setUp({ Avoid, newRouter });
      expect(() => router.setRoutingParameter(arg, 4)).toThrow(TypeError);
      expect(() => router.setRoutingOption(arg, true)).toThrow(TypeError);
      expect(() => conn.setRoutingType(arg)).toThrow(TypeError);
    });

    it("the TypeError names the enum", ({ Avoid, newRouter }) => {
      const { router } = setUp({ Avoid, newRouter });
      expect(() => router.setRoutingParameter(Avoid.RoutingParameter.shapeBuferDistance, 4)).toThrow(
        /RoutingParameter must be a number.*got undefined/,
      );
    });

    it("rejects a non-finite parameter value", ({ Avoid, newRouter }) => {
      const { router } = setUp({ Avoid, newRouter });
      const { shapeBufferDistance } = Avoid.RoutingParameter;
      expect(() => router.setRoutingParameter(shapeBufferDistance, NaN)).toThrow(
        /Router.setRoutingParameter: value must be a finite number, got NaN/,
      );
      expect(() => router.setRoutingParameter(shapeBufferDistance, undefined)).toThrow(TypeError);
    });

    it.for([
      ["negative", -1],
      ["one past the last value", undefined],
      ["not an integer", 1.5],
      ["NaN", NaN],
      ["Infinity", Infinity],
    ])("RangeError for a number that is %s", ([, arg], { Avoid, newRouter }) => {
      const { router, conn } = setUp({ Avoid, newRouter });
      const pastLast = (e) => Math.max(...Object.values(e)) + 1;
      const value = (e) => (arg === undefined ? pastLast(e) : arg);
      expect(() => router.setRoutingParameter(value(Avoid.RoutingParameter), 4)).toThrow(RangeError);
      expect(() => router.setRoutingOption(value(Avoid.RoutingOption), true)).toThrow(RangeError);
      expect(() => conn.setRoutingType(value(Avoid.ConnType))).toThrow(RangeError);
    });

    it("a rejected call leaves the previous value in place", ({ Avoid, newRouter }) => {
      // libavoid turns an unknown ConnType into the router's default, which is
      // ConnType_PolyLine with both flags, so a 3 that reached it would show
      // in routingType().
      const router = newRouter(Avoid.RouterFlag.PolyLineRouting | Avoid.RouterFlag.OrthogonalRouting);
      const { shapeBufferDistance } = Avoid.RoutingParameter;
      router.setRoutingParameter(shapeBufferDistance, 5);
      const shape = router.addShape(makeRect(40, -10, 60, 10).rect);
      const conn = router.addConnector({ x: 0, y: 0 }, { x: 100, y: 0 });
      conn.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);

      expect(() => router.setRoutingParameter(shapeBufferDistance, NaN)).toThrow(TypeError);
      expect(() => conn.setRoutingType(3)).toThrow(RangeError);

      expect(shape.routingBox().width).toBe(30);
      expect(conn.routingType()).toBe(Avoid.ConnType.ConnType_Orthogonal);
    });
  });
});
