import { describe, expect, it } from "vitest";
import { BUILDS, loadAvoid, toPoints } from "./helpers.mjs";

const sortPoints = (points) => [...points].sort(([ax, ay], [bx, by]) => ax - bx || ay - by);

describe.each(BUILDS)("$name build: geometry types", (build) => {
  it("Point: constructors, properties and equality", async () => {
    const Avoid = await loadAvoid(build);
    const origin = new Avoid.Point();
    const p = new Avoid.Point(1.5, -2.25);
    expect([p.x, p.y]).toEqual([1.5, -2.25]);

    p.x = 10;
    p.y = 20;
    expect([p.x, p.y]).toEqual([10, 20]);

    expect(p.equal(new Avoid.Point(10, 20))).toBe(true);
    expect(p.equal(new Avoid.Point(10, 21))).toBe(false);
    expect(origin.equal(new Avoid.Point(0, 0))).toBe(true);

    p.delete();
    origin.delete();
    expect(p.isDeleted()).toBe(true);
  });

  it("Polygon: size, setPoint, at and ps", async () => {
    const Avoid = await loadAvoid(build);
    const poly = new Avoid.Polygon(3);
    expect(poly.size()).toBe(3);
    expect(poly.empty()).toBe(false);

    poly.setPoint(0, new Avoid.Point(1, 1));
    poly.setPoint(1, new Avoid.Point(2.5, 1.5));
    poly.setPoint(2, new Avoid.Point(1.5, 2.5));
    expect(toPoints(poly)).toEqual([[1, 1], [2.5, 1.5], [1.5, 2.5]]);

    const ps = poly.ps;
    expect(ps.size()).toBe(3);
    expect([ps.get(1).x, ps.get(1).y]).toEqual([2.5, 1.5]);
    ps.delete();

    expect(new Avoid.Polygon().empty()).toBe(true);
    poly.delete();
  });

  it("PointVector: is the type of ps and can replace a polygon's points", async () => {
    const Avoid = await loadAvoid(build);
    const poly = new Avoid.Polygon(1);
    const current = poly.ps;
    expect(current).toBeInstanceOf(Avoid.PointVector);
    current.delete();

    const vec = new Avoid.PointVector();
    vec.push_back(new Avoid.Point(3, 4));
    vec.push_back(new Avoid.Point(5, 6));
    poly.ps = vec;
    expect(toPoints(poly)).toEqual([[3, 4], [5, 6]]);

    vec.delete();
    poly.delete();
  });

  it("Rectangle from two corners", async () => {
    const Avoid = await loadAvoid(build);
    // Corners given in "wrong" order: libavoid normalises them.
    const rect = new Avoid.Rectangle(new Avoid.Point(10, 40), new Avoid.Point(30, 5));
    expect(rect.size()).toBe(4);
    expect(sortPoints(toPoints(rect))).toEqual([[10, 5], [10, 40], [30, 5], [30, 40]]);
    rect.delete();
  });

  it("Rectangle from centre, width and height", async () => {
    const Avoid = await loadAvoid(build);
    const rect = new Avoid.Rectangle(new Avoid.Point(50, 50), 20, 10);
    expect(sortPoints(toPoints(rect))).toEqual([[40, 45], [40, 55], [60, 45], [60, 55]]);
    rect.delete();
  });

  it("PolygonInterface helpers return polygons", async () => {
    const Avoid = await loadAvoid(build);
    const tri = new Avoid.Polygon(3);
    tri.setPoint(0, new Avoid.Point(0, 0));
    tri.setPoint(1, new Avoid.Point(10, 2));
    tri.setPoint(2, new Avoid.Point(4, 8));

    const bbox = tri.boundingRectPolygon();
    expect(sortPoints(toPoints(bbox))).toEqual([[0, 0], [0, 8], [10, 0], [10, 8]]);

    for (const p of [tri, bbox]) p.delete();
  });

  it("offsetBoundingBox returns a Box grown by the offset", async () => {
    const Avoid = await loadAvoid(build);
    const tri = new Avoid.Polygon(3);
    tri.setPoint(0, new Avoid.Point(0, 0));
    tri.setPoint(1, new Avoid.Point(10, 2));
    tri.setPoint(2, new Avoid.Point(4, 8));

    const box = tri.offsetBoundingBox(1);
    expect(box).toBeInstanceOf(Avoid.Box);
    const [min, max] = [box.min, box.max];
    expect([min.x, min.y, max.x, max.y]).toEqual([-1, -1, 11, 9]);
    expect([box.width(), box.height()]).toEqual([12, 10]);
    expect([box.length(0), box.length(1)]).toEqual([12, 10]);

    const unpadded = tri.offsetBoundingBox(0);
    expect([unpadded.width(), unpadded.height()]).toEqual([10, 8]);

    for (const o of [tri, box, min, max, unpadded]) o.delete();
  });

  it("Box: construct and assign corners", async () => {
    const Avoid = await loadAvoid(build);
    const box = new Avoid.Box();
    const [tl, br] = [new Avoid.Point(2, 3), new Avoid.Point(7, 13)];
    box.min = tl;
    box.max = br;
    expect([box.width(), box.height()]).toEqual([5, 10]);

    // The getter returns a copy, so mutating it leaves the box unchanged.
    const minCopy = box.min;
    minCopy.x = 100;
    expect(box.width()).toBe(5);

    for (const o of [box, tl, br, minCopy]) o.delete();
  });
});
