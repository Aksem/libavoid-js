// Geometry values of the public API: plain JS, no wasm memory, nothing to
// delete. Inputs are structural (any object with the right number fields, see
// PointLike / RectLike in the typings); outputs are instances of these classes.
//
// All data lives in own enumerable fields, so values survive spread,
// JSON.stringify, structuredClone and postMessage unchanged in shape.

/**
 * @typedef {{ readonly x: number, readonly y: number }} PointLike
 * @typedef {{ readonly x: number, readonly y: number,
 *             readonly width: number, readonly height: number }} RectLike
 */

/** A point. libavoid's `Point` without its internal `id`/`vn` fields. */
export class Point {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Without `epsilon`: exact comparison, like libavoid's `Point::operator==`.
   * With `epsilon`: true if both coordinates differ by less than `epsilon`,
   * like libavoid's `Point::equals(rhs, epsilon)`.
   * @param {PointLike} other
   * @param {number} [epsilon]
   * @returns {boolean}
   */
  equals(other, epsilon) {
    if (epsilon === undefined) {
      return this.x === other.x && this.y === other.y;
    }
    return Math.abs(this.x - other.x) < epsilon && Math.abs(this.y - other.y) < epsilon;
  }
}

/**
 * An axis-aligned rectangle: top-left corner plus size, like DOMRect. Replaces
 * libavoid's `Box`: `x`/`y` correspond to `Box.min`, `right`/`bottom` to
 * `Box.max`.
 */
export class Rect {
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   */
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  // As in DOMRect, the edges also hold for a negative width/height.
  get left() {
    return Math.min(this.x, this.x + this.width);
  }

  get top() {
    return Math.min(this.y, this.y + this.height);
  }

  get right() {
    return Math.max(this.x, this.x + this.width);
  }

  get bottom() {
    return Math.max(this.y, this.y + this.height);
  }
}

// ---------------------------------------------------------------------------
// Internal helpers for the adapter (not exported from the package).

/**
 * Converts packed coordinates `[x0, y0, x1, y1, ...]` (as returned by the raw
 * bindings) into points.
 * @param {ArrayLike<number>} coords
 * @returns {Point[]}
 */
export function pointsFromCoords(coords) {
  const points = new Array(coords.length >> 1);
  for (let i = 0; i < points.length; i++) {
    points[i] = new Point(coords[2 * i], coords[2 * i + 1]);
  }
  return points;
}

/**
 * Packs points into `[x0, y0, x1, y1, ...]` for the raw bindings. Validates
 * here, before any wasm call: the module aborts on exceptions thrown inside
 * wasm, and embind lets NaN through.
 * @param {readonly PointLike[]} points
 * @param {string} context Prefix for error messages, e.g. "Router.addShape".
 * @returns {number[]}
 */
export function coordsFromPoints(points, context) {
  if (!Array.isArray(points)) {
    throw new TypeError(`${context}: expected an array of points, got ${describe(points)}`);
  }
  const coords = new Array(points.length * 2);
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    if (typeof p !== "object" || p === null) {
      throw new TypeError(`${context}: point ${i} must be an object with x and y, got ${describe(p)}`);
    }
    coords[2 * i] = finite(p.x, `point ${i}.x`, context);
    coords[2 * i + 1] = finite(p.y, `point ${i}.y`, context);
  }
  return coords;
}

/**
 * Converts libavoid's `Box` (a `{min, max}` value from the raw bindings).
 * @param {{ min: PointLike, max: PointLike }} box
 * @returns {Rect}
 */
export function rectFromBox({ min, max }) {
  return new Rect(min.x, min.y, max.x - min.x, max.y - min.y);
}

/**
 * Returns `value` if it is a finite number, otherwise throws.
 * @param {unknown} value
 * @param {string} name
 * @param {string} context
 * @returns {number}
 */
export function finite(value, name, context) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new TypeError(`${context}: ${name} must be a finite number, got ${describe(value)}`);
  }
  return value;
}

/** @param {unknown} value */
function describe(value) {
  if (value === null) return "null";
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (typeof value === "string") return JSON.stringify(value);
  if (Array.isArray(value)) return "an array";
  return typeof value;
}
