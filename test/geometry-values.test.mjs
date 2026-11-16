// Pure-JS geometry values (src/geometry.js): no wasm needed.
import { describe, expect, it } from "vitest";
import {
  Point,
  Rect,
  coordsFromPoints,
  finite,
  pointsFromCoords,
  rectFromBox,
} from "../src/geometry.js";

// structuredClone is what postMessage uses (e.g. routing in a worker).
const copies = {
  spread: (v) => ({ ...v }),
  JSON: (v) => JSON.parse(JSON.stringify(v)),
  structuredClone: (v) => structuredClone(v),
};

describe("Point", () => {
  it("stores x and y as own enumerable fields", () => {
    const p = new Point(1.5, -2);
    expect(Object.keys(p)).toEqual(["x", "y"]);
    expect(p).toMatchObject({ x: 1.5, y: -2 });
  });

  it("has no defaults: a missing argument is rejected on use, not silently 0", () => {
    const p = new Point(5);
    expect(p.y).toBeUndefined();
    expect(() => coordsFromPoints([p], "test")).toThrow(/point 0\.y must be a finite number, got undefined/);
  });

  it.each(Object.entries(copies))("keeps {x, y} through %s", (_, copy) => {
    expect(copy(new Point(3, 4))).toEqual({ x: 3, y: 4 });
  });

  it("equals() compares exactly against any {x, y}", () => {
    const p = new Point(1, 2);
    expect(p.equals(new Point(1, 2))).toBe(true);
    expect(p.equals({ x: 1, y: 2 })).toBe(true);
    expect(p.equals({ x: 1, y: 2.0000001 })).toBe(false);
  });

  it("equals(other, epsilon) uses libavoid's strict < epsilon", () => {
    const p = new Point(1, 2);
    expect(p.equals({ x: 1.00005, y: 1.99995 }, 0.0001)).toBe(true);
    expect(p.equals({ x: 1.5, y: 2 }, 0.5)).toBe(false);
    expect(p.equals({ x: 1, y: 2 }, 0)).toBe(false);
  });
});

describe("Rect", () => {
  it("stores x, y, width, height as own enumerable fields", () => {
    const r = new Rect(10, 20, 30, 40);
    expect(Object.keys(r)).toEqual(["x", "y", "width", "height"]);
    expect(r).toMatchObject({ x: 10, y: 20, width: 30, height: 40 });
  });

  it("has no defaults", () => {
    expect(new Rect(1, 2, 3).height).toBeUndefined();
  });

  it("has DOMRect-style edge getters", () => {
    const r = new Rect(10, 20, 30, 40);
    expect([r.left, r.top, r.right, r.bottom]).toEqual([10, 20, 40, 60]);
  });

  it("edge getters normalise a negative size, like DOMRect", () => {
    const r = new Rect(10, 20, -4, -6);
    expect([r.left, r.top, r.right, r.bottom]).toEqual([6, 14, 10, 20]);
  });

  it.each(Object.entries(copies))("stays a RectLike through %s", (_, copy) => {
    expect(copy(new Rect(1, 2, 3, 4))).toEqual({ x: 1, y: 2, width: 3, height: 4 });
  });

  it("matches DOMRect where the platform has one", () => {
    if (typeof DOMRect === "undefined") return; // Node has no DOMRect
    const ours = new Rect(10, 20, -4, -6);
    const dom = new DOMRect(10, 20, -4, -6);
    for (const key of ["x", "y", "width", "height", "left", "top", "right", "bottom"]) {
      expect(ours[key], key).toBe(dom[key]);
    }
  });
});

describe("pointsFromCoords", () => {
  it("unpacks [x0, y0, x1, y1, ...] into Points", () => {
    const points = pointsFromCoords(new Float64Array([1, 2, 3, 4]));
    expect(points).toHaveLength(2);
    expect(points[0]).toBeInstanceOf(Point);
    expect(points.map((p) => [p.x, p.y])).toEqual([[1, 2], [3, 4]]);
  });

  it("returns [] for no coordinates", () => {
    expect(pointsFromCoords(new Float64Array(0))).toEqual([]);
  });
});

describe("coordsFromPoints", () => {
  it("packs any PointLike: plain objects, Points, getters, extra fields", () => {
    class GetterPoint {
      get x() { return 5; }
      get y() { return 6; }
    }
    const points = [{ x: 1, y: 2 }, new Point(3, 4), new GetterPoint(), { x: 7, y: 8, width: 9 }];
    expect(coordsFromPoints(points, "test")).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("round-trips with pointsFromCoords", () => {
    const points = [new Point(1, 2), new Point(-3, 4.5)];
    expect(pointsFromCoords(coordsFromPoints(points, "test"))).toEqual(points);
  });

  it.each([
    ["not an array", { x: 1, y: 2 }, /test: expected an array of points, got object/],
    ["a typed array", new Float64Array([1, 2]), /expected an array of points/],
    ["a null element", [null], /point 0 must be an object with x and y, got null/],
    ["a number element", [1, 2], /point 0 must be an object/],
    ["a missing y", [{ x: 1, y: 2 }, { x: 1 }], /point 1\.y must be a finite number, got undefined/],
    ["a string coordinate", [{ x: "1", y: 2 }], /point 0\.x must be a finite number, got "1"/],
    ["NaN", [{ x: NaN, y: 2 }], /point 0\.x must be a finite number, got NaN/],
    ["Infinity", [{ x: 1, y: -Infinity }], /point 0\.y must be a finite number, got -Infinity/],
  ])("rejects %s with a TypeError", (_, input, message) => {
    expect(() => coordsFromPoints(input, "test")).toThrow(TypeError);
    expect(() => coordsFromPoints(input, "test")).toThrow(message);
  });
});

describe("rectFromBox", () => {
  it("converts libavoid's {min, max} into a Rect", () => {
    const r = rectFromBox({ min: { x: 5, y: 15 }, max: { x: 45, y: 65 } });
    expect(r).toBeInstanceOf(Rect);
    expect(r).toMatchObject({ x: 5, y: 15, width: 40, height: 50 });
    expect([r.right, r.bottom]).toEqual([45, 65]);
  });
});

describe("finite", () => {
  it("returns finite numbers and rejects everything else", () => {
    expect(finite(-0.5, "v", "ctx")).toBe(-0.5);
    for (const bad of [NaN, Infinity, "1", null, undefined, 1n]) {
      expect(() => finite(bad, "v", "ctx")).toThrow(/^ctx: v must be a finite number/);
    }
  });
});
