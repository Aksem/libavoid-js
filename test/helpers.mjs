// Shared helpers for libavoid-js tests.
//
// Every binding test runs against each build in BUILDS. The list depends on
// where the tests run:
//  - Node ("node" vitest project):
//    - "src":  src/index-node.mjs -> src/generated/libavoid.mjs (raw emscripten output)
//    - "dist": dist/index-node.mjs (the esbuild bundle that is published to npm)
//  - Browser ("browser" vitest project, Chromium):
//    - "src":  src/index.js -> src/generated/libavoid.js
//    - "dist": dist/index.js
// Run `npm run build` before testing so that dist/ matches src/generated/.

export const IS_BROWSER = typeof window !== "undefined" && typeof document !== "undefined";

export const BUILDS = IS_BROWSER
  ? [
      { name: "src", load: () => import("../src/index.js") },
      { name: "dist", load: () => import("../dist/index.js") },
    ]
  : [
      { name: "src", load: () => import("../src/index-node.mjs") },
      { name: "dist", load: () => import("../dist/index-node.mjs") },
    ];

export async function loadAvoid(build) {
  const { AvoidLib } = await build.load();
  if (!AvoidLib.avoidLib) {
    await AvoidLib.load();
  }
  return AvoidLib.getInstance();
}

/** Converts an Avoid Polygon / PolyLine into a plain array of [x, y]. */
export function toPoints(polygon) {
  const points = [];
  for (let i = 0; i < polygon.size(); i++) {
    const p = polygon.at(i);
    points.push([p.x, p.y]);
  }
  return points;
}

/** Plain [x, y][] of the connector's current display route. */
export function routeOf(connRef) {
  return toPoints(connRef.displayRoute());
}

export function segmentsOf(points) {
  const segments = [];
  for (let i = 0; i + 1 < points.length; i++) {
    segments.push([points[i], points[i + 1]]);
  }
  return segments;
}

export function isOrthogonal(points) {
  return segmentsOf(points).every(
    ([[x1, y1], [x2, y2]]) => x1 === x2 || y1 === y2,
  );
}

/**
 * True if the segment passes through the open interior of the axis-aligned
 * rectangle (touching the border is allowed). Liang-Barsky clipping.
 */
export function segmentCrossesRectInterior([[x1, y1], [x2, y2]], rect) {
  const { minX, minY, maxX, maxY } = rect;
  const eps = 1e-9;
  const dx = x2 - x1;
  const dy = y2 - y1;
  let t0 = 0;
  let t1 = 1;
  const clips = [
    [-dx, x1 - (minX + eps)],
    [dx, maxX - eps - x1],
    [-dy, y1 - (minY + eps)],
    [dy, maxY - eps - y1],
  ];
  for (const [p, q] of clips) {
    if (p === 0) {
      if (q < 0) return false;
    } else {
      const t = q / p;
      if (p < 0) t0 = Math.max(t0, t);
      else t1 = Math.min(t1, t);
      if (t0 > t1) return false;
    }
  }
  return true;
}

export function routeCrossesRect(points, rect) {
  return segmentsOf(points).some((s) => segmentCrossesRectInterior(s, rect));
}

/** Smallest distance from any point of an axis-aligned segment to a rect. */
export function orthogonalSegmentDistanceToRect([[x1, y1], [x2, y2]], rect) {
  const gap = (lo, hi, rMin, rMax) =>
    Math.max(0, rMin - hi, lo - rMax);
  const dx = gap(Math.min(x1, x2), Math.max(x1, x2), rect.minX, rect.maxX);
  const dy = gap(Math.min(y1, y2), Math.max(y1, y2), rect.minY, rect.maxY);
  return Math.hypot(dx, dy);
}

/** Creates an Avoid.Rectangle and returns it with its plain bounds. */
export function makeRect(Avoid, minX, minY, maxX, maxY) {
  const poly = new Avoid.Rectangle(
    new Avoid.Point(minX, minY),
    new Avoid.Point(maxX, maxY),
  );
  return { poly, bounds: { minX, minY, maxX, maxY } };
}

export function pointEnd(Avoid, x, y) {
  return new Avoid.ConnEnd(new Avoid.Point(x, y));
}

