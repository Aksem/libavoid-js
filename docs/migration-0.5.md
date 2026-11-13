---
title: Migrating to 0.5
group: Releases
---

# Migrating to libavoid-js 0.5

0.5 replaces the WebIDL bindings of 0.4.x with embind and a JS-native API. You
add objects through the router and pass geometry as plain objects, and no
object needs `.delete()` except the router itself. This guide covers 0.4.x and
the earlier 0.5 betas (`0.5.0-beta.1` to `beta.5`), which exposed libavoid's
classes 1:1.

## The new model in short

```js
const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);

const a = router.addShape({ x: 0, y: 0, width: 100, height: 50 });   // top-left + size
const b = router.addShape([{ x: 300, y: 0 }, { x: 360, y: 40 }, { x: 300, y: 80 }]);
a.addPin({ classId: 1, x: 1, y: 0.5, directions: Avoid.ConnDirFlag.ConnDirRight });

const conn = router.addConnector({ shape: a, pin: 1 }, { x: 400, y: 200 });
conn.setCallback((c) => draw(c.displayRoute()));                     // Point[]

router.processTransaction();
router.moveShape(b, 10, 0);
router.processTransaction();

router.delete();                                                      // frees everything
```

- **Geometry in:** any object with the right fields: `{x, y}` for points,
  `{x, y, width, height}` for rectangles (DOMRect, sprotty `Bounds` and ELK nodes
  work as is), and arrays of points for polygons.
- **Geometry out:** `Point` and `Rect` instances. They are plain JS: no
  `.delete()`, and they survive spread, `JSON.stringify` and `postMessage`.
- **Objects:** created by `router.addShape` / `addJunction` / `addConnector` and
  `shape.addPin` / `junction.addPin`, and owned by the router. `obj.delete()` (or
  `using`) removes one; `router.delete()` frees everything. Using a deleted object
  throws.

## From 0.5 betas (embind, 1:1 libavoid classes)

### Geometry

| Before | Now |
|---|---|
| `new Avoid.Point(x, y)` (+ `.delete()`) | `{ x, y }` or `new Avoid.Point(x, y)`; no delete |
| `point.equal(other)` | `point.equals(other)`; `point.equals(other, epsilon)` for libavoid's `Point::equals` |
| `point.id`, `point.vn` | removed |
| `new Avoid.Rectangle(topLeft, bottomRight)` | `{ x, y, width, height }` (top-left + size) |
| `new Avoid.Rectangle(centre, w, h)` | `{ x: cx - w / 2, y: cy - h / 2, width: w, height: h }`; **the API takes the top-left corner, not the centre** |
| `new Avoid.Polygon(n)` + `setPoint` / `ps` | an array of points `[{ x, y }, ...]` |
| `Box` (`min`, `max`, `width()`, `height()`, `length(d)`) | `Rect` (`x`, `y`, `width`, `height` fields; `left`, `top`, `right`, `bottom` getters) |
| `box.min` / `box.max` | `{ x: rect.x, y: rect.y }` / `{ x: rect.right, y: rect.bottom }` |
| `PointVector`, `CheckpointVector` | arrays |
| `polygon.offsetPolygon(d)`, `boundingRectPolygon()`, `offsetBoundingBox(d)` | `Avoid.offsetPolygon(points, d)`, `Avoid.boundingRectPolygon(points)`, `Avoid.offsetBoundingBox(points, d)` |

### Router, shapes, junctions

| Before | Now |
|---|---|
| `new Avoid.ShapeRef(router, polygon[, id])` | `router.addShape(rectOrPoints, { id })` |
| `router.moveShape_poly(shape, polygon, false)` | `router.moveShape(shape, rectOrPoints)` |
| `router.moveShape_delta(shape, dx, dy)` | `router.moveShape(shape, dx, dy)` |
| `shape.setNewPoly(polygon)` | `router.moveShape(shape, points)` |
| `new Avoid.JunctionRef(router, point[, id])` | `router.addJunction({ x, y }, { id })` |
| `router.moveJunction_point(j, point)` | `router.moveJunction(j, { x, y })` |
| `router.moveJunction_delta(j, dx, dy)` | `router.moveJunction(j, dx, dy)` |
| `shape.polygon()` → `Polygon` | `shape.polygon()` → `Point[]` |
| `shape.position()` / `routingBox()` → handles to delete | `Point` / `Rect` |

### Pins, connectors, checkpoints

| Before | Now |
|---|---|
| `new Avoid.ShapeConnectionPin(shape, classId, x, y, proportional, insideOffset, dirs)` | `shape.addPin({ classId, x, y, proportional, insideOffset, directions })`; `proportional` defaults to `true`, `insideOffset` to `0`, `directions` to `ConnDirAll` |
| 6-argument `ShapeConnectionPin(shape, classId, x, y, insideOffset, dirs)` | `shape.addPin({ classId, x, y, insideOffset, directions })` |
| `new Avoid.ShapeConnectionPin(junction, classId, dirs)` | `junction.addPin({ classId, directions })` |
| `pin.position(polygon)` | removed; `pin.position()` returns the position on the current shape |
| `pin.updatePosition(point)` | `pin.updatePosition({ x, y })` |
| `new Avoid.ConnEnd(point)` | `{ x, y }` (optionally `directions`) |
| `new Avoid.ConnEnd(shape, classId)` | `{ shape, pin: classId }` |
| `Avoid.ConnEnd.createConnEndFromJunctionRef(j)` | `{ junction: j }` |
| `new Avoid.ConnRef(router, src, dst[, id])` | `router.addConnector(src, dst, { id })` |
| `conn.setSourceEndpoint(end)` / `setDestEndpoint(end)` | `conn.setSource(end)` / `conn.setDest(end)` |
| `conn.displayRoute()` → `PolyLine` (+ `at(i)`, deletes) | `conn.displayRoute()` → `Point[]` |
| `new Avoid.Checkpoint(point[, arrival, departure])` in a `CheckpointVector` | `conn.setRoutingCheckpoints([{ x, y, arrival, departure }])` |
| `conn.routingCheckpoints()` → `CheckpointVector` | `[{ x, y, arrival, departure }]` |
| callback argument: a new handle (`isAliasOf(conn)`, `!==`) | the same `ConnRef` object (`===`) |

### Memory management

| Before | Now |
|---|---|
| `.delete()` every `Point`, `Polygon`, `Rectangle`, `ConnEnd`, `Checkpoint`, vector and returned copy | nothing to delete: these are plain JS values |
| never `.delete()` a `ShapeRef` / `ConnRef` / `JunctionRef` / pin | `.delete()` (or `using`) removes it through its owner, the same as `router.deleteShape(shape)` |
| handles dangle after `router.delete()` | `isDeleted()` is true and use throws |
| `clone()`, `deleteLater()` | removed from the typings; `clone()` throws for router-owned objects |

## From 0.4.x (WebIDL)

Everything in the previous section applies, plus:

| 0.4.x | Now |
|---|---|
| `Avoid.PolyLineRouting`, `Avoid.OrthogonalRouting` | `Avoid.RouterFlag.PolyLineRouting`, `Avoid.RouterFlag.OrthogonalRouting` |
| `Avoid.shapeBufferDistance` and other routing parameters | `Avoid.RoutingParameter.shapeBufferDistance` |
| `Avoid.nudgeOrthogonalSegmentsConnectedToShapes` and other options | `Avoid.RoutingOption.nudgeOrthogonalSegmentsConnectedToShapes` |
| `Avoid.ConnType_Orthogonal` / bare numbers for `setRoutingType` | `Avoid.ConnType.ConnType_Orthogonal` |
| `Avoid.ConnDirUp` and other directions | `Avoid.ConnDirFlag.ConnDirUp` |
| `polygon.set_ps(i, point)`, `route.get_ps(i)` | arrays of points |
| `Avoid.destroy(obj)` | `obj.delete()` (only the router needs it) |
| `setCallback((ptr) => { const c = Avoid.wrapPointer(ptr, Avoid.ConnRef); ... }, conn)` | `conn.setCallback((c) => { ... })` |
| `Avoid.getPointer`, `Avoid.wrapPointer` | removed |

The enum values are the same numbers as before. Enum arguments are validated:
a misspelt name (`undefined`) throws a `TypeError`, and a number outside the
enum throws a `RangeError`.

## New errors instead of crashes

Arguments are validated in JS before they reach wasm. A wrong argument throws a
`TypeError` or `RangeError` naming the method and the argument, e.g.
`Router.addShape: shape.height must be a finite number, got undefined`. Before,
it could abort the whole module or silently produce a wrong route. Two libavoid
restrictions that used to abort the module are now errors:

- A shape or junction cannot be deleted in the transaction that added it: call
  `router.processTransaction()` first.
- `moveShape` cannot change a shape's number of points (a rectangle has 4).
  Delete it and add a new shape instead.

## Requirements

The wasm is built with emsdk 7.0.0, which requires Chrome 93, Firefox 92,
Safari 15.4 or Node 18.3.0 or newer. The typings use
`/// <reference lib="esnext.disposable" />` for `Symbol.dispose` (TypeScript ≥ 5.2).
