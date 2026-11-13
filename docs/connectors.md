---
title: Connectors
group: Guides
---

# Connectors

A connector is a line between two ends that the router routes around shapes
and junctions. It is created with {@link Router.addConnector} and routed at the
next {@link Router.processTransaction}.

## Transactions

Changes (`add*`, `moveShape`, `moveJunction`, `delete`, routing parameters and
options, ...) are collected and applied together by
`router.processTransaction()`. It re-routes only the connectors affected by the
changes and calls their callbacks:

```js
conn.setCallback((c) => draw(c.displayRoute()));

router.moveShape(a, 10, 0);
router.moveShape(b, 0, 10);
router.processTransaction(); // one routing pass for both moves
```

The callback receives the same {@link ConnRef} object it was registered on.
You can also read {@link ConnRef.displayRoute} directly after
`processTransaction()`.

## Connector ends

An end ({@link ConnEndLike}) is a free point `{ x, y }`, the pins of a shape
`{ shape, pin }` or a junction `{ junction }`, and can be changed later:

```js
const conn = router.addConnector({ x: 0, y: 0 }, { shape: b, pin: 1 });
conn.setDest({ x: 500, y: 300 });
```

To attach a connector to a shape, pass `{ shape, pin }`: the shape's bounds
would be read as a free point at their top-left corner.

## Pins

Pins are the points on a shape where connectors attach. Their position is
given as a fraction of the shape's size by default, so they move and scale
with the shape:

```js
// Right and left middle of the shape, both in class 1.
a.addPin({ classId: 1, x: 1, y: 0.5, directions: Avoid.ConnDirFlag.ConnDirRight });
a.addPin({ classId: 1, x: 0, y: 0.5, directions: Avoid.ConnDirFlag.ConnDirLeft });

router.addConnector({ shape: a, pin: 1 }, { shape: b, pin: 1 });
```

When several pins share a class id, the router picks the best one for each
connector. Use {@link ShapeConnectionPin.setConnectionCost} to prefer some pins
and {@link ShapeConnectionPin.setExclusive} to allow only one connector per pin.
See {@link ShapePinOptions} for absolute offsets and insets.

## Junctions

A junction is a point where several connectors meet, e.g. to draw a
connection between more than two objects as a tree:

```js
const j = router.addJunction({ x: 200, y: 100 });
router.addConnector({ shape: a, pin: 1 }, { junction: j });
router.addConnector({ junction: j }, { shape: b, pin: 1 });
router.addConnector({ junction: j }, { shape: c, pin: 1 });
router.processTransaction();

// The router may suggest a better position for the junction.
router.moveJunction(j, j.recommendedPosition());
router.processTransaction();
```

Use {@link JunctionRef.setPositionFixed} to keep a junction where it is.

## Route quality

Routing parameters and options apply to all connectors of the router, e.g.:

```js
router.setRoutingParameter(Avoid.RoutingParameter.shapeBufferDistance, 10);
router.setRoutingParameter(Avoid.RoutingParameter.segmentPenalty, 50);
router.setRoutingParameter(Avoid.RoutingParameter.crossingPenalty, 200);
```
