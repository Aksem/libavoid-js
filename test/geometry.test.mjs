// Geometry that goes through wasm: shape polygons, routingBox and the polygon
// utilities. The pure-JS Point / Rect classes are covered by
// geometry-values.test.mjs.
import { describe, expect } from "vitest";
import { BUILDS, bindingTest, makeRect, toPoints } from "./helpers.mjs";

const sortPoints = (points) => [...points].sort(([ax, ay], [bx, by]) => ax - bx || ay - by);
const TRIANGLE = [{ x: 0, y: 0 }, { x: 10, y: 2 }, { x: 4, y: 8 }];

describe.each(BUILDS)("$name build: geometry", (build) => {
  const it = bindingTest(build);

  it("a rect shape's polygon starts at the top-right corner, clockwise", ({ Avoid, newRouter }) => {
    const router = newRouter(Avoid.RouterFlag.OrthogonalRouting);
    const shape = router.addShape({ x: 100, y: 100, width: 20, height: 10 });
    const polygon = shape.polygon();
    expect(polygon[0]).toBeInstanceOf(Avoid.Point);
    expect(toPoints(polygon)).toEqual([[120, 100], [120, 110], [100, 110], [100, 100]]);
    expect(shape.position()).toEqual(new Avoid.Point(110, 105));
  });

  it("a negative size spans the same rectangle (libavoid normalises the corners)", ({ newRouter }) => {
    const shape = newRouter().addShape({ x: 30, y: 40, width: -20, height: -35 });
    expect(sortPoints(toPoints(shape.polygon()))).toEqual([[10, 5], [10, 40], [30, 5], [30, 40]]);
  });

  it("a polygon shape keeps its points in order", ({ Avoid, newRouter }) => {
    const router = newRouter();
    const shape = router.addShape(TRIANGLE);
    expect(shape.polygon()).toEqual(TRIANGLE.map(({ x, y }) => new Avoid.Point(x, y)));
  });

  it("shape.routingBox(): shape bounds grown by shapeBufferDistance, as a Rect", ({ Avoid, newRouter }) => {
    // Catches the {min, max} box converted as if it were (x, y, width, height).
    const router = newRouter(Avoid.RouterFlag.OrthogonalRouting);
    router.setRoutingParameter(Avoid.RoutingParameter.shapeBufferDistance, 5);
    const shape = router.addShape(makeRect(40, -10, 60, 20).rect);

    const box = shape.routingBox();
    expect(box).toBeInstanceOf(Avoid.Rect);
    expect(box).toEqual(new Avoid.Rect(35, -15, 30, 40));
    expect([box.right, box.bottom]).toEqual([65, 25]);
  });

  it("junction.routingBox(): a Rect centred on the junction", ({ Avoid, newRouter }) => {
    const router = newRouter(Avoid.RouterFlag.OrthogonalRouting);
    const junction = router.addJunction({ x: 30, y: 70 });

    // The box size is libavoid's; only its type and centre come from the binding.
    const box = junction.routingBox();
    expect(box).toBeInstanceOf(Avoid.Rect);
    expect([box.x + box.width / 2, box.y + box.height / 2]).toEqual([30, 70]);
  });

  it("boundingRectPolygon", ({ Avoid }) => {
    const bbox = Avoid.boundingRectPolygon(TRIANGLE);
    expect(bbox[0]).toBeInstanceOf(Avoid.Point);
    expect(sortPoints(toPoints(bbox))).toEqual([[0, 0], [0, 8], [10, 0], [10, 8]]);
  });

  it("offsetBoundingBox returns a Rect grown by the offset", ({ Avoid }) => {
    const box = Avoid.offsetBoundingBox(TRIANGLE, 1);
    expect(box).toBeInstanceOf(Avoid.Rect);
    expect(box).toEqual(new Avoid.Rect(-1, -1, 12, 10));
    expect([box.right, box.bottom]).toEqual([11, 9]);
    expect(Avoid.offsetBoundingBox(TRIANGLE, 0)).toEqual(new Avoid.Rect(0, 0, 10, 8));
  });

  it("offsetPolygon grows a polygon", ({ Avoid }) => {
    const square = [{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 10, y: 10 }, { x: 0, y: 10 }];
    expect(Avoid.offsetPolygon(square, 0)).toEqual(square.map(({ x, y }) => new Avoid.Point(x, y)));
    const grown = Avoid.offsetPolygon(square, 2);
    expect(grown.length).toBeGreaterThanOrEqual(4);
    const box = Avoid.offsetBoundingBox(grown, 0);
    // libavoid offsets outwards for its winding order; either way the size changes by 2 * 2.
    expect(Math.abs(box.width - 10)).toBeCloseTo(4);
    expect(Math.abs(box.height - 10)).toBeCloseTo(4);
  });

  it("polygon utilities reject an empty point list", ({ Avoid }) => {
    expect(() => Avoid.offsetBoundingBox([], 0)).toThrow(/offsetBoundingBox: expected at least 1 point, got 0/);
    expect(() => Avoid.boundingRectPolygon([])).toThrow(RangeError);
    expect(() => Avoid.offsetPolygon([], 1)).toThrow(RangeError);
    expect(() => Avoid.offsetPolygon(TRIANGLE, NaN)).toThrow(/offset must be a finite number/);
  });
});
