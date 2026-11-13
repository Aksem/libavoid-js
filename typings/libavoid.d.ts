/**
 * libavoid-js: object-avoiding connector routing for diagrams.
 *
 * @packageDocumentation
 * @document ../docs/connectors.md
 * @document ../docs/troubleshooting.md
 * @document ../docs/migration-0.5.md
 * @document ../CHANGELOG.md
 */
// Public API of libavoid-js. Keep in sync with src/api.js;
// test/types.test-d.ts type-checks typical usage and test/surface.test.mjs
// checks that every method listed here exists at runtime.
//
// Convention for doc comments:
//  - The description says what the member does and how to use it, in terms of
//    this API. Don't assume the reader knows libavoid (C++).
//  - Constraints the caller must respect belong in the description, even when
//    they come from libavoid. Errors this API throws go in `@throws`.
//  - Everything about the C++ side goes in a final `@remarks` paragraph that
//    starts with "libavoid:": the libavoid function or class it maps to,
//    differences from libavoid, where a restriction comes from, behaviour
//    that only matters to someone reading libavoid's code or documentation.
//    Leave it out when the member maps to the libavoid member of the same
//    name and there is nothing else to say.
/// <reference lib="esnext.disposable" />

declare const enumBrand: unique symbol;

/**
 * A value of the enum `Name`, e.g. `Avoid.RoutingParameter.shapeBufferDistance`.
 * At runtime it is a plain number; the brand only lets TypeScript catch values
 * of the wrong enum. Methods with enum parameters throw a TypeError for
 * non-numbers and a RangeError for numbers that are not a value of the enum.
 */
export type EnumValue<Name extends string> = number & { readonly [enumBrand]: Name };

type NumberEnum<Name extends string, Keys extends string> = {
  readonly [K in Keys]: EnumValue<Name>;
};

// ---------------------------------------------------------------------------
// Enums

export type RouterFlagValue = EnumValue<"RouterFlag">;
export type RouterFlagEnum = NumberEnum<"RouterFlag", "PolyLineRouting" | "OrthogonalRouting">;

export type RoutingParameterValue = EnumValue<"RoutingParameter">;
export type RoutingParameterEnum = NumberEnum<
  "RoutingParameter",
  | "segmentPenalty"
  | "anglePenalty"
  | "crossingPenalty"
  | "clusterCrossingPenalty"
  | "fixedSharedPathPenalty"
  | "portDirectionPenalty"
  | "shapeBufferDistance"
  | "idealNudgingDistance"
  | "reverseDirectionPenalty"
>;

export type RoutingOptionValue = EnumValue<"RoutingOption">;
export type RoutingOptionEnum = NumberEnum<
  "RoutingOption",
  | "nudgeOrthogonalSegmentsConnectedToShapes"
  | "improveHyperedgeRoutesMovingJunctions"
  | "penaliseOrthogonalSharedPathsAtConnEnds"
  | "nudgeOrthogonalTouchingColinearSegments"
  | "performUnifyingNudgingPreprocessingStep"
  | "improveHyperedgeRoutesMovingAddingAndDeletingJunctions"
  | "nudgeSharedPathsWithCommonEndPoint"
>;

export type ConnTypeValue = EnumValue<"ConnType">;
export type ConnTypeEnum = NumberEnum<
  "ConnType",
  "ConnType_None" | "ConnType_PolyLine" | "ConnType_Orthogonal"
>;

export type ConnDirFlagValue = EnumValue<"ConnDirFlag">;
export type ConnDirFlagEnum = NumberEnum<
  "ConnDirFlag",
  "ConnDirNone" | "ConnDirUp" | "ConnDirDown" | "ConnDirLeft" | "ConnDirRight" | "ConnDirAll"
>;

/**
 * Bitwise OR of ConnDirFlag values, e.g.
 * `Avoid.ConnDirFlag.ConnDirUp | Avoid.ConnDirFlag.ConnDirDown`.
 */
export type ConnDirFlags = number;


// ---------------------------------------------------------------------------
// Geometry values

/** Any object with numeric `x` and `y` (e.g. a Point, DOMPoint, sprotty Point). */
export interface PointLike {
  readonly x: number;
  readonly y: number;
}

/**
 * Any object with a top-left corner and a size (e.g. a Rect, DOMRect, sprotty
 * Bounds, ELK node).
 *
 * @remarks libavoid: its `Rectangle(centre, width, height)` constructor takes
 * the centre; this API always takes the top-left corner. To convert a
 * centre-based rectangle: `{ x: cx - w / 2, y: cy - h / 2, width: w, height: h }`.
 */
export interface RectLike {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
}

/**
 * A point.
 *
 * @remarks libavoid: `Point`, without its internal `id`/`vn` fields.
 */
export declare class Point {
  constructor(x: number, y: number);
  readonly x: number;
  readonly y: number;
  /**
   * Compares with another point. Without `epsilon`, both coordinates must be
   * exactly equal; with `epsilon`, each must differ by less than `epsilon`.
   *
   * @remarks libavoid: `Point::operator==` without `epsilon`, `Point::equals`
   * with it.
   */
  equals(other: PointLike, epsilon?: number): boolean;
}

/**
 * An axis-aligned rectangle: top-left corner plus size, like DOMRect.
 *
 * @remarks libavoid: replaces `Box`. `x`/`y` correspond to `Box.min`,
 * `right`/`bottom` to `Box.max`. `x + width` may differ from `Box.max.x` in
 * the last bit.
 */
export declare class Rect {
  constructor(x: number, y: number, width: number, height: number);
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  /** As in DOMRect, the edges also hold for a negative width/height. */
  readonly left: number;
  readonly top: number;
  readonly right: number;
  readonly bottom: number;
}

// ---------------------------------------------------------------------------
// Handles to objects in the wasm module

/**
 * Methods of every object that lives in the wasm module (router, shapes,
 * junctions, connectors, pins). This memory is not garbage collected, but the
 * router owns everything added to it: only the router needs delete() (or a
 * `using` declaration), and it frees all of it.
 */
export interface Handle {
  /**
   * For the router: frees it and everything added to it. For other objects:
   * removes the object. Shapes, junctions and connectors are removed through
   * their router, like `router.deleteShape(shape)`, with the same
   * restrictions; a pin is removed from its shape or junction immediately.
   * Everything the object owns goes with it. Using the object afterwards
   * throws.
   */
  delete(): void;
  /** Same as delete(), for `using` declarations. */
  [Symbol.dispose](): void;
  /**
   * True once the object was freed, whether by its own delete() or by
   * deleting its owner (e.g. a pin's shape, or the router).
   */
  isDeleted(): boolean;
  /** True if both handles refer to the same object. */
  isAliasOf(other: Handle): boolean;
}

/** Options of the `add*` methods. */
export interface AddOptions {
  /**
   * Id of the new object, returned by its `id()`. Must be unique within the
   * router. 0 (the default) assigns a new unique id.
   */
  readonly id?: number;
}

// ---------------------------------------------------------------------------
// Router

/**
 * Routes connectors around obstacles (shapes and junctions). Owns everything
 * added to it; `router.delete()` frees all of it.
 *
 * Changes (adding, moving and deleting objects, changing settings) are
 * collected and applied together by processTransaction(), which then
 * re-routes the affected connectors.
 */
export interface Router extends Handle {
  /**
   * Applies all changes made since the last call and re-routes the affected
   * connectors, calling their callbacks (see `ConnRef.setCallback`).
   *
   * @returns False if there was nothing to do: no objects were added, moved
   *   or deleted and no settings were changed since the last call.
   */
  processTransaction(): boolean;
  /**
   * Prints statistics about the router's internal visibility graph (numbers
   * of shapes, vertices and edges) to stdout, which is the console in a
   * browser. For debugging.
   */
  printInfo(): void;
  /**
   * Sets a numeric routing parameter. Parameters are either distances, such
   * as `shapeBufferDistance` (the space kept between connectors and shapes),
   * or penalties, such as `segmentPenalty` (a cost added for every bend, so
   * that routes with fewer bends are preferred). 0 turns a penalty off; a
   * negative value picks a sensible default. Takes effect at the next
   * processTransaction().
   *
   * @throws TypeError or RangeError if `parameter` is not a RoutingParameter
   *   value or `value` is not a finite number.
   * @remarks libavoid: each parameter, with its default, is documented on
   * libavoid's `RoutingParameter` enum.
   */
  setRoutingParameter(parameter: RoutingParameterValue, value: number): void;
  /**
   * Turns a routing option on or off. Takes effect at the next
   * processTransaction().
   *
   * @throws TypeError or RangeError if `option` is not a RoutingOption value.
   * @remarks libavoid: each option, with its default, is documented on
   * libavoid's `RoutingOption` enum.
   */
  setRoutingOption(option: RoutingOptionValue, value: boolean): void;

  /**
   * Adds a shape that connectors are routed around: a rectangle (top-left
   * corner + size) or a polygon of at least 3 points. Connectors attach to a
   * shape through its pins (`shape.addPin`). Takes effect at the next
   * processTransaction().
   *
   * @throws RangeError if a polygon has fewer than 3 points.
   * @remarks libavoid: `new ShapeRef(router, polygon, id)`; a rectangle is
   * passed as a 4-point polygon.
   */
  addShape(shape: RectLike | readonly PointLike[], options?: AddOptions): ShapeRef;
  /**
   * Moves or resizes the shape to a new rectangle or polygon. The number of
   * points cannot change (a rectangle has 4): to change it, delete the shape
   * and add a new one. Takes effect at the next processTransaction().
   *
   * @throws RangeError if the number of points differs from the shape's.
   * @remarks libavoid: `Router::moveShape(shape, polygon)`. The restriction on
   * the number of points comes from libavoid.
   */
  moveShape(shape: ShapeRef, newShape: RectLike | readonly PointLike[]): void;
  /** Moves the shape by `dx`, `dy`. Takes effect at the next processTransaction(). */
  moveShape(shape: ShapeRef, dx: number, dy: number): void;
  /**
   * Removes the shape and its pins at the next processTransaction(). A shape
   * cannot be removed in the transaction that added it: call
   * processTransaction() first.
   *
   * @throws Error if the shape was added in the current transaction.
   * @remarks libavoid: the restriction comes from libavoid, which asserts
   * (and aborts the module) in that case.
   */
  deleteShape(shape: ShapeRef): void;

  /**
   * Adds a junction: a point where several connectors meet, e.g. to draw a
   * connection between more than two objects (a hyperedge) as a tree.
   * Connectors attach to it with `{junction}`. Takes effect at the next
   * processTransaction().
   *
   * @remarks libavoid: `new JunctionRef(router, position, id)`.
   */
  addJunction(position: PointLike, options?: AddOptions): JunctionRef;
  /** Moves the junction to `position`. Takes effect at the next processTransaction(). */
  moveJunction(junction: JunctionRef, position: PointLike): void;
  /** Moves the junction by `dx`, `dy`. Takes effect at the next processTransaction(). */
  moveJunction(junction: JunctionRef, dx: number, dy: number): void;
  /**
   * Removes the junction and its pins at the next processTransaction(). Like
   * a shape, a junction cannot be removed in the transaction that added it.
   *
   * @throws Error if the junction was added in the current transaction.
   */
  deleteJunction(junction: JunctionRef): void;

  /**
   * Adds a connector between two ends, routed at the next
   * processTransaction(). An end is a free point `{x, y}`, a class of a
   * shape's pins `{shape, pin}` or a junction `{junction}`. The connector is
   * routed as a polyline if the router supports polyline routing, otherwise
   * orthogonally; see `ConnRef.setRoutingType`.
   *
   * @remarks libavoid: `new ConnRef(router, id)` followed by
   * `setSourceEndpoint` and `setDestEndpoint`.
   */
  addConnector(source: ConnEndLike, destination: ConnEndLike, options?: AddOptions): ConnRef;
  /** Removes the connector. */
  deleteConnector(connector: ConnRef): void;
}
export interface RouterConstructor {
  /**
   * @param flags The routing types the router supports, as a bitwise OR of
   *   RouterFlag values, e.g.
   *   `Avoid.RouterFlag.PolyLineRouting | Avoid.RouterFlag.OrthogonalRouting`.
   *   Each connector is routed with one of them (`ConnRef.setRoutingType`).
   */
  new (flags: number): Router;
  readonly prototype: Router;
}

// ---------------------------------------------------------------------------
// Obstacles

/** An object connectors are routed around: a ShapeRef or a JunctionRef. */
export interface Obstacle extends Handle {
  /** The unique id: `options.id` given when it was added, or one assigned by the router. */
  id(): number;
  /** The obstacle's polygon, as a new array. */
  polygon(): Point[];
  /** The centre of the shape's routing box, or the junction's position. */
  position(): Point;
  /**
   * Bounding box of the polygon grown by the router's `shapeBufferDistance`,
   * i.e. the area connectors are routed around.
   */
  routingBox(): Rect;
}

/**
 * Options of `ShapeRef.addPin`.
 *
 * @remarks libavoid: the arguments of the 7-argument `ShapeConnectionPin`
 * constructor.
 */
export interface ShapePinOptions {
  /**
   * Pin class id (≥ 1). Connectors attach to a class with
   * `{shape, pin: classId}`. If several pins of the shape share the class, the
   * router picks the best one for each connector.
   */
  readonly classId: number;
  /** Offset from the left side: a fraction of the width if `proportional`. */
  readonly x: number;
  /** Offset from the top side: a fraction of the height if `proportional`. */
  readonly y: number;
  /** Default true. If false, `x`/`y` are absolute offsets. */
  readonly proportional?: boolean;
  /** Distance to move the pin inside the shape. Default 0. */
  readonly insideOffset?: number;
  /** Directions connectors may leave in. Default ConnDirAll. */
  readonly directions?: ConnDirFlags;
}

/** A shape (rectangle or polygon) that connectors are routed around. Created by `router.addShape`. */
export interface ShapeRef extends Obstacle {
  /**
   * Adds a connection pin: a point on the shape that connectors can attach
   * to. The pin moves with the shape and is deleted with it.
   */
  addPin(pin: ShapePinOptions): ShapeConnectionPin;
}

/** Options of `JunctionRef.addPin`. */
export interface JunctionPinOptions {
  /** Pin class id (≥ 1). */
  readonly classId: number;
  /** Directions connectors may leave in. Default ConnDirAll. */
  readonly directions?: ConnDirFlags;
}

/** A point where several connectors meet. Created by `router.addJunction`. */
export interface JunctionRef extends Obstacle {
  /** Adds a connection pin at the junction's position, deleted with the junction. */
  addPin(pin: JunctionPinOptions): ShapeConnectionPin;
  /**
   * Sets whether the junction's position is fixed. If it is not (the
   * default), the router may suggest a better position while improving
   * hyperedge routes; see recommendedPosition(). Takes effect at the next
   * processTransaction().
   *
   * @remarks libavoid: ignored for hyperedge improvement when the
   * `improveHyperedgeRoutesMovingAddingAndDeletingJunctions` option is on and
   * keeping the junction would give a confusing topology (e.g. two overlapping
   * junctions joined by a zero-length connector).
   */
  setPositionFixed(fixed: boolean): void;
  /** Whether the junction's position is fixed; see setPositionFixed(). */
  positionFixed(): boolean;
  /**
   * The position the router suggests for the junction after improving the
   * routes of its connectors, which it does when the
   * `improveHyperedgeRoutesMovingJunctions` option is on (the default).
   * The junction itself is not moved: use `router.moveJunction` to apply the
   * suggestion. Meaningful after processTransaction().
   */
  recommendedPosition(): Point;
}

/** Created only through the router: `router.addShape`, `router.addJunction`. */
export type ObstacleConstructor<T extends Obstacle = Obstacle> = (abstract new () => T) & {
  readonly prototype: T;
};

// ---------------------------------------------------------------------------
// Connectors

/** A free connector end at a point. */
export interface PointEnd extends PointLike {
  /** Directions the connector may leave/enter in. Default ConnDirAll. */
  readonly directions?: ConnDirFlags;
}
/** A connector end attached to a shape's connection pins of a class. */
export interface PinEnd {
  readonly shape: ShapeRef;
  /** Pin class id given to `shape.addPin`. */
  readonly pin: number;
}
/** A connector end attached to a junction. */
export interface JunctionEnd {
  readonly junction: JunctionRef;
}
/**
 * A connector end. Note that a RectLike is also a PointEnd (its top-left
 * corner): pass `{shape, pin}` to attach to a shape.
 */
export type ConnEndLike = PointEnd | PinEnd | JunctionEnd;

/** A point a route must pass through. */
export interface CheckpointLike extends PointLike {
  /** Directions in which the route may arrive at the point. Default ConnDirAll. */
  readonly arrival?: ConnDirFlags;
  /** Directions in which the route may leave the point. Default ConnDirAll. */
  readonly departure?: ConnDirFlags;
}
/** A checkpoint as returned by `ConnRef.routingCheckpoints`, with defaults filled in. */
export interface Checkpoint {
  readonly x: number;
  readonly y: number;
  readonly arrival: ConnDirFlags;
  readonly departure: ConnDirFlags;
}

/**
 * Called after the connector was re-routed during processTransaction, with
 * the same ConnRef object the callback was registered on.
 */
export type ConnRefCallback = (connector: ConnRef) => void;

/** A connector between two ends, routed around obstacles. Created by `router.addConnector`. */
export interface ConnRef extends Handle {
  /** The unique id: `options.id` given when it was added, or one assigned by the router. */
  id(): number;
  /** Changes the source end. Takes effect at the next processTransaction(). */
  setSource(end: ConnEndLike): void;
  /** Changes the destination end. Takes effect at the next processTransaction(). */
  setDest(end: ConnEndLike): void;
  /**
   * The current route from source to destination, as a new array. Updated by
   * processTransaction().
   */
  displayRoute(): Point[];
  /**
   * Sets points the route must pass through, in order. A checkpoint inside an
   * obstacle is skipped. Replaces the previous checkpoints; pass `[]` to
   * remove them. Takes effect at the next processTransaction().
   */
  setRoutingCheckpoints(checkpoints: readonly CheckpointLike[]): void;
  /** The checkpoints given to setRoutingCheckpoints(), with defaults filled in. */
  routingCheckpoints(): Checkpoint[];
  /**
   * Sets a function called each time processTransaction() re-routes this
   * connector, e.g. to redraw it. Replaces the previous callback.
   */
  setCallback(callback: ConnRefCallback): void;
  /**
   * How the connector is routed: `ConnType_PolyLine` (straight segments in
   * any direction) or `ConnType_Orthogonal` (horizontal and vertical segments
   * only).
   */
  routingType(): ConnTypeValue;
  /**
   * Sets how the connector is routed. If the router does not support the
   * type (see the RouterFlag values given to the Router constructor), it
   * uses a type it supports instead. Takes effect at the next
   * processTransaction().
   *
   * @throws TypeError or RangeError if `type` is not a ConnType value.
   */
  setRoutingType(type: ConnTypeValue): void;
  /**
   * Stores a flag that currently has no effect on routing(will be fixed in future
   * versions, now it is just a part of designed public API). To make routes
   * avoid crossings, set the `crossingPenalty` routing parameter.
   *
   * @remarks libavoid: `ConnRef::setHateCrossings` stores the flag, but the
   * router never reads it.
   */
  setHateCrossings(value: boolean): void;
  /** The flag set by setHateCrossings(). */
  doesHateCrossings(): boolean;
  /**
   * False if the router found no route and fell back to a straight line
   * between the ends, e.g. because obstacles block every path or pin
   * directions rule them out. A valid route may still cross obstacles: see
   * hasCrossingObstacles(). Meaningful after processTransaction().
   */
  hasValidRoute(): boolean;
  /** True if the current route crosses at least one obstacle. Meaningful after processTransaction(). */
  hasCrossingObstacles(): boolean;
}

/**
 * A point on a shape or junction that connectors attach to. Created by
 * `shape.addPin` / `junction.addPin` and removed with its shape or junction.
 * To remove a single pin, call its delete(), which takes effect immediately.
 */
export interface ShapeConnectionPin extends Handle {
  /**
   * Sets the cost (≥ 0) of attaching a connector to this pin. Among pins of
   * the same class, cheaper pins are chosen first; without costs, the router
   * chooses only by the length of the resulting route.
   *
   * @throws TypeError if `cost` is not a finite number, RangeError if it is
   *   negative.
   */
  setConnectionCost(cost: number): void;
  /** Position on the parent shape's current polygon, or the junction's position. */
  position(): Point;
  /** Directions connectors may leave the pin in. */
  directions(): ConnDirFlags;
  /**
   * Sets whether only one connector may attach to this pin; further
   * connectors to the same class then use other pins. By default, pins with
   * specific directions are exclusive and pins with ConnDirAll are not.
   */
  setExclusive(exclusive: boolean): void;
  /** Whether only one connector may attach to this pin; see setExclusive(). */
  isExclusive(): boolean;
  /**
   * Moves a shape's pin. `position` is a new offset from the shape's top-left
   * corner, interpreted like `x`/`y` of `ShapeRef.addPin`: a fraction of the
   * size if the pin was created as `proportional`. Only for pins of shapes:
   * a junction's pin is always at the junction's position.
   *
   * @throws TypeError for a junction's pin.
   */
  updatePosition(position: PointLike): void;
}

/** Created only through `shape.addPin` / `router.addConnector`; usable with instanceof. */
export type HandleConstructor<T> = (abstract new () => T) & { readonly prototype: T };

// ---------------------------------------------------------------------------
// Module

/** The initialised wasm module returned by AvoidLib.getInstance(). */
export interface Avoid {
  Router: RouterConstructor;
  Obstacle: ObstacleConstructor;
  ShapeRef: ObstacleConstructor<ShapeRef>;
  JunctionRef: ObstacleConstructor<JunctionRef>;
  ConnRef: HandleConstructor<ConnRef>;
  ShapeConnectionPin: HandleConstructor<ShapeConnectionPin>;
  Point: typeof Point;
  Rect: typeof Rect;
  ConnDirFlag: ConnDirFlagEnum;
  ConnType: ConnTypeEnum;
  RouterFlag: RouterFlagEnum;
  RoutingOption: RoutingOptionEnum;
  RoutingParameter: RoutingParameterEnum;
  /**
   * Moves every edge of a polygon (≥ 1 point) outwards by `offset`, or
   * inwards for a negative `offset`. The points must be in clockwise order on
   * screen (y pointing down), like the corners of a rectangle listed
   * top-left, top-right, bottom-right, bottom-left; other orders give
   * meaningless results.
   *
   * @remarks libavoid: `PolygonInterface::offsetPolygon`.
   */
  offsetPolygon(points: readonly PointLike[], offset: number): Point[];
  /**
   * The bounding rectangle of the points (≥ 1) as a 4-point polygon.
   *
   * @remarks libavoid: `PolygonInterface::boundingRectPolygon`.
   */
  boundingRectPolygon(points: readonly PointLike[]): Point[];
  /**
   * The bounding box of the points (≥ 1), grown by `offset` on every side.
   *
   * @remarks libavoid: `PolygonInterface::offsetBoundingBox`.
   */
  offsetBoundingBox(points: readonly PointLike[], offset: number): Rect;
}

export interface AvoidLibType {
  /** The module once load() has completed, otherwise undefined. */
  avoidLib: Avoid | undefined;
  /**
   * Loads and initialises the wasm module. Call once before getInstance().
   * @param filePath URL or path of libavoid.wasm, if it is not served next to
   *   the JS bundle.
   */
  load(filePath?: string): Promise<void>;
  /**
   * Returns the loaded module.
   *
   * @throws Error if load() has not completed.
   */
  getInstance(): Avoid;
}

export declare const AvoidLib: AvoidLibType;
