---
title: Changelog
group: Releases
---

# Changelog

## 0.5.0 (unreleased)

0.5 is a rewrite of the bindings: embind instead of WebIDL, emsdk 7.0.0, and a
JS/TS-native API on top. Code written for 0.4.x or the 0.5 betas needs
changes; see the [migration guide](docs/migration-0.5.md) for a table from
every old call to the new one.

### Breaking changes

- **Objects are created through the router:** `router.addShape`,
  `router.addJunction`, `router.addConnector`, `shape.addPin`,
  `junction.addPin`. `ShapeRef`, `JunctionRef`, `ConnRef` and
  `ShapeConnectionPin` can no longer be constructed with `new`.
- **Geometry is plain JS.**
  - Inputs are any `{x, y}` / `{x, y, width, height}` objects and arrays of
    points. Rectangles are given by their **top-left corner** and size, not
    libavoid's centre.
  - Outputs are the new `Point` and `Rect` classes, also exported from the
    package. They have no `.delete()`.
  - `Box` is replaced by `Rect`: `x`/`y`/`width`/`height` fields instead of
    `min`/`max` and `width()`/`height()`/`length()`.
- **Removed:** `Avoid.Polygon`, `Rectangle`, `PolygonInterface`, `ConnEnd`,
  `Checkpoint`, `CheckpointVector`, `PointVector` and `Box`; `Point.id`/`vn`;
  `ShapeRef.setNewPoly`; `ShapeConnectionPin.position(polygon)`.
- **Renamed or merged:**
  - `moveShape_poly` / `moveShape_delta` → `moveShape`;
  - `moveJunction_point` / `moveJunction_delta` → `moveJunction`;
  - `setSourceEndpoint` / `setDestEndpoint` → `setSource` / `setDest`, which
    take `{x, y}`, `{shape, pin}` or `{junction}`;
  - `Point.equal` → `Point.equals`.
- **Return values are arrays and values:**
  - `displayRoute()` and `polygon()` return `Point[]`;
  - `position()` and `recommendedPosition()` return a `Point`;
  - `routingBox()` returns a `Rect`;
  - `routingCheckpoints()` returns `{x, y, arrival, departure}[]`.
- **Ids** are passed as an option: `{ id }`.
- **Connector callbacks** receive the same `ConnRef` object they were
  registered on (no `wrapPointer`, no new handle per call).
- **Enums** are grouped and plain numbers: `Avoid.RouterFlag.OrthogonalRouting`,
  `Avoid.RoutingParameter.shapeBufferDistance`, `Avoid.ConnDirFlag.ConnDirUp`,
  and so on. The numeric values are unchanged.
- **`Avoid.destroy`, `wrapPointer` and `getPointer` are removed.**
  `deleteLater()` is no longer in the typings, and `clone()` throws for
  router-owned objects.
- **Minimum runtimes** (emsdk 7.0.0): Chrome 93, Firefox 92, Safari 15.4, Node
  18.3.0. The typings need TypeScript ≥ 5.2 (`esnext.disposable`).

### Memory management

Only the router needs `.delete()`. All other objects are owned by it:
`obj.delete()` or `using` removes one, the same as `router.deleteShape(obj)` etc.,
and `router.delete()` frees everything. A deleted object reports
`isDeleted() === true`, and using it throws instead of reading freed memory.
Before, values needed `.delete()`, temporaries such as
`new Rectangle(new Point(...))` leaked silently, and calling `.delete()` on a
router-owned object bypassed the router.

### Validation

Every argument is validated before it reaches wasm. A misspelt enum name, a
missing coordinate, `NaN`, a bad id or an object of another router throws a
`TypeError` / `RangeError` that names the method and argument. Before, these
could abort the whole module or produce wrong routes silently. These libavoid
restrictions that aborted the module now throw:

- a shape or junction cannot be deleted in the transaction that added it;
- `moveShape` cannot change a shape's number of points;
- `pin.setConnectionCost` needs a cost >= 0;
- `pin.updatePosition` works only on a shape's pin, not on a junction's.

### Other

- New: `Avoid.offsetPolygon`, `Avoid.boundingRectPolygon` and
  `Avoid.offsetBoundingBox` as functions on point arrays;
  `connector.hasValidRoute()` and `hasCrossingObstacles()`; junctions and
  `router.deleteJunction`; routing checkpoints.
- Faster bindings: reading a route, moving a shape or reading a position is
  3–20× cheaper than with the 0.5 betas, because no temporary C++ objects are
  created. Routing itself is unchanged.
- TypeScript typings for the whole API, checked by tests against the runtime.
- API documentation is generated from the typings with TypeDoc.
