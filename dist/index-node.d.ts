// Type definitions for libavoid-js.
//
// These mirror the embind bindings in embind/bindings.cpp. Keep them in sync
// when bindings change; test/types.test-d.ts type-checks typical usage.
//
// Memory management
// -----------------
// Every object created with `new` lives on the wasm heap and is NOT garbage
// collected. Call `.delete()` on JS-owned objects when done with them.
//
// - JS-owned (call .delete()): Router, Point, Polygon, Rectangle, ConnEnd,
//   Checkpoint, CheckpointVector, PointVector, and every Point / Polygon /
//   vector *returned* by a method (they are returned as copies).
// - Router-owned (never call .delete()): ShapeRef, ConnRef, JunctionRef and
//   ShapeConnectionPin. They are freed by Router.deleteShape / deleteConnector
//   / deleteJunction, or when the router itself is deleted. Their JS handles
//   become dangling after that.

declare const enumBrand: unique symbol;

/** Methods embind adds to every bound class instance. */
export interface EmbindObject {
  /** Frees the underlying C++ object. Using the handle afterwards throws. */
  delete(): void;
  isDeleted(): boolean;
  /** Returns true if both handles point to the same C++ object. */
  isAliasOf(other: EmbindObject): boolean;
  /** Returns a new handle to the same C++ object (shares ownership). */
  clone(): this;
  deleteLater(): this;
}

/** A bound std::vector<T>. */
export interface EmbindVector<T> extends EmbindObject {
  size(): number;
  /** Returns a copy of the element, or undefined when out of range. */
  get(index: number): T | undefined;
  /** Returns false when out of range. */
  set(index: number, value: T): boolean;
  push_back(value: T): void;
  resize(count: number, value: T): void;
}

/**
 * Value of an embind enum. Enum parameters must be passed as these objects:
 * a plain number (e.g. `RoutingParameter.shapeBufferDistance.value`) is
 * silently converted to the enum's 0 value.
 */
export interface EnumValue<Name extends string> {
  readonly value: number;
  readonly [enumBrand]: Name;
}

type EmbindEnum<Name extends string, Keys extends string> = {
  readonly [K in Keys]: EnumValue<Name>;
} & {
  readonly values: { readonly [value: number]: EnumValue<Name> };
};

// ---------------------------------------------------------------------------
// Enums

export type RouterFlagValue = EnumValue<"RouterFlag">;
export type RouterFlagEnum = EmbindEnum<"RouterFlag", "PolyLineRouting" | "OrthogonalRouting">;

export type RoutingParameterValue = EnumValue<"RoutingParameter">;
export type RoutingParameterEnum = EmbindEnum<
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
export type RoutingOptionEnum = EmbindEnum<
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
export type ConnTypeEnum = EmbindEnum<
  "ConnType",
  "ConnType_None" | "ConnType_PolyLine" | "ConnType_Orthogonal"
>;

/**
 * Bit flags (libavoid's ConnDirFlag), bound as a plain number. Combine with `|`:
 * ConnDirNone = 0, ConnDirUp = 1, ConnDirDown = 2, ConnDirLeft = 4,
 * ConnDirRight = 8, ConnDirAll = 15.
 */
export type ConnDirFlags = number;

// ---------------------------------------------------------------------------
// Geometry

export interface Point extends EmbindObject {
  x: number;
  y: number;
  id: number;
  vn: number;
  equal(rhs: Point): boolean;
}
export interface PointConstructor {
  new (): Point;
  new (x: number, y: number): Point;
  readonly prototype: Point;
}

/** std::vector<Avoid::Point>. */
export type PointVector = EmbindVector<Point>;
export interface PointVectorConstructor {
  new (): PointVector;
  readonly prototype: PointVector;
}

/** Abstract base of Polygon; cannot be constructed. */
export interface PolygonInterface extends EmbindObject {
  clear(): void;
  empty(): boolean;
  size(): number;
  id(): number;
  /** Returns a copy of the point at `index`. */
  at(index: number): Point;
  boundingRectPolygon(): Polygon;
  /**
   * @deprecated Currently unusable: returns Avoid::Box, which is not bound,
   * so the call always throws "unbound types".
   */
  offsetBoundingBox(offset: number): never;
  offsetPolygon(offset: number): Polygon;
}
export interface PolygonInterfaceConstructor {
  readonly prototype: PolygonInterface;
}

export interface Polygon extends PolygonInterface {
  /** Getter returns a copy of the points; assigning replaces all points. */
  ps: PointVector;
  setPoint(index: number, point: Point): void;
}
export interface PolygonConstructor {
  new (): Polygon;
  new (pointCount: number): Polygon;
  readonly prototype: Polygon;
}

/** In libavoid, PolyLine is a typedef for Polygon. */
export type PolyLine = Polygon;

export interface Rectangle extends Polygon {}
export interface RectangleConstructor {
  new (centre: Point, width: number, height: number): Rectangle;
  new (topLeft: Point, bottomRight: Point): Rectangle;
  readonly prototype: Rectangle;
}

// ---------------------------------------------------------------------------
// Router

export interface Router extends EmbindObject {
  /** Routes all pending changes. Returns true if anything was re-routed. */
  processTransaction(): boolean;
  printInfo(): void;
  deleteConnector(connector: ConnRef): void;
  /** `firstMove` is libavoid's `first_move` flag; pass false normally. */
  moveShape_poly(shape: ShapeRef, newPolygon: Polygon, firstMove: boolean): void;
  moveShape_delta(shape: ShapeRef, xDiff: number, yDiff: number): void;
  deleteShape(shape: ShapeRef): void;
  moveJunction_point(junction: JunctionRef, newPosition: Point): void;
  moveJunction_delta(junction: JunctionRef, xDiff: number, yDiff: number): void;
  deleteJunction(junction: JunctionRef): void;
  setRoutingParameter(parameter: RoutingParameterValue, value: number): void;
  setRoutingOption(option: RoutingOptionValue, value: boolean): void;
}
export interface RouterConstructor {
  /**
   * @param flags Bitwise OR of RouterFlag values, as numbers:
   *   `new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting.value)`.
   */
  new (flags: number): Router;
  readonly prototype: Router;
}

// ---------------------------------------------------------------------------
// Obstacles

/** Abstract base of ShapeRef and JunctionRef; cannot be constructed. */
export interface Obstacle extends EmbindObject {
  id(): number;
  /** Returns a copy of the obstacle's polygon. */
  polygon(): Polygon;
  position(): Point;
  setNewPoly(polygon: Polygon): void;
}
export interface ObstacleConstructor {
  readonly prototype: Obstacle;
}

/** Owned by its Router: remove with Router.deleteShape, never .delete(). */
export interface ShapeRef extends Obstacle {}
export interface ShapeRefConstructor {
  new (router: Router, polygon: Polygon): ShapeRef;
  new (router: Router, polygon: Polygon, id: number): ShapeRef;
  readonly prototype: ShapeRef;
}

/** Owned by its Router: remove with Router.deleteJunction, never .delete(). */
export interface JunctionRef extends Obstacle {
  setPositionFixed(fixed: boolean): void;
  positionFixed(): boolean;
  recommendedPosition(): Point;
}
export interface JunctionRefConstructor {
  /** Pass id 0 to let libavoid assign one. */
  new (router: Router, position: Point, id: number): JunctionRef;
  readonly prototype: JunctionRef;
}

// ---------------------------------------------------------------------------
// Connectors

export interface ConnEnd extends EmbindObject {}
export interface ConnEndConstructor {
  new (point: Point): ConnEnd;
  /** Attaches to the shape's connection pins with the given class id. */
  new (shape: ShapeRef, connectionPinClassId: number): ConnEnd;
  createConnEndFromJunctionRef(junction: JunctionRef): ConnEnd;
  readonly prototype: ConnEnd;
}

export interface Checkpoint extends EmbindObject {}
export interface CheckpointConstructor {
  new (point: Point): Checkpoint;
  new (point: Point, arrivalDirections: ConnDirFlags, departureDirections: ConnDirFlags): Checkpoint;
  readonly prototype: Checkpoint;
}

export type CheckpointVector = EmbindVector<Checkpoint>;
export interface CheckpointVectorConstructor {
  new (): CheckpointVector;
  readonly prototype: CheckpointVector;
}

/**
 * Called after the connector was re-routed during processTransaction.
 *
 * Note: the argument is currently a *copy* of the ConnRef (not an alias of
 * the handle you registered the callback on). Use it only to read the
 * connector (id(), displayRoute(), ...) and never call .delete() on it.
 */
export type ConnRefCallback = (connRef: ConnRef) => void;

/** Owned by its Router: remove with Router.deleteConnector, never .delete(). */
export interface ConnRef extends EmbindObject {
  id(): number;
  setCallback(callback: ConnRefCallback): void;
  setSourceEndpoint(source: ConnEnd): void;
  setDestEndpoint(destination: ConnEnd): void;
  routingType(): ConnTypeValue;
  setRoutingType(type: ConnTypeValue): void;
  setRoutingCheckpoints(checkpoints: CheckpointVector): void;
  /** Returns a copy of the checkpoints. */
  routingCheckpoints(): CheckpointVector;
  /** Returns a copy of the current route; delete it when done. */
  displayRoute(): PolyLine;
  setHateCrossings(value: boolean): void;
  doesHateCrossings(): boolean;
  hasValidRoute(): boolean;
  hasCrossingObstacles(): boolean;
}
export interface ConnRefConstructor {
  new (router: Router, source: ConnEnd, destination: ConnEnd): ConnRef;
  new (router: Router, source: ConnEnd, destination: ConnEnd, id: number): ConnRef;
  readonly prototype: ConnRef;
}

/** Owned by its shape or junction: never call .delete(). */
export interface ShapeConnectionPin extends EmbindObject {
  setConnectionCost(cost: number): void;
  /** Pass `new Avoid.Polygon()` to use the parent's current polygon. */
  position(newPolygon: Polygon): Point;
  directions(): ConnDirFlags;
  setExclusive(exclusive: boolean): void;
  isExclusive(): boolean;
  updatePosition(newPosition: Point): void;
}
export interface ShapeConnectionPinConstructor {
  new (
    shape: ShapeRef,
    classId: number,
    xOffset: number,
    yOffset: number,
    proportional: boolean,
    insideOffset: number,
    visibleDirections: ConnDirFlags,
  ): ShapeConnectionPin;
  /**
   * libavoid's legacy constructor: offsets are always proportional.
   * @deprecated Use the overload with `proportional`.
   */
  new (
    shape: ShapeRef,
    classId: number,
    xOffset: number,
    yOffset: number,
    insideOffset: number,
    visibleDirections: ConnDirFlags,
  ): ShapeConnectionPin;
  new (junction: JunctionRef, classId: number, visibleDirections: ConnDirFlags): ShapeConnectionPin;
  readonly prototype: ShapeConnectionPin;
}

// ---------------------------------------------------------------------------
// Module

/** The initialised wasm module returned by AvoidLib.getInstance(). */
export interface Avoid {
  Checkpoint: CheckpointConstructor;
  CheckpointVector: CheckpointVectorConstructor;
  ConnEnd: ConnEndConstructor;
  ConnRef: ConnRefConstructor;
  ConnType: ConnTypeEnum;
  JunctionRef: JunctionRefConstructor;
  Obstacle: ObstacleConstructor;
  Point: PointConstructor;
  Polygon: PolygonConstructor;
  PolygonInterface: PolygonInterfaceConstructor;
  Rectangle: RectangleConstructor;
  Router: RouterConstructor;
  RouterFlag: RouterFlagEnum;
  RoutingOption: RoutingOptionEnum;
  RoutingParameter: RoutingParameterEnum;
  ShapeConnectionPin: ShapeConnectionPinConstructor;
  ShapeRef: ShapeRefConstructor;
  /** std::vector<Avoid::Point>; emscripten derives this name from "vector<Avoid::Point>". */
  vector$Avoid$$Point$: PointVectorConstructor;
}

export interface AvoidLibType {
  avoidLib: Avoid | undefined;
  /**
   * Loads and initialises the wasm module. Call once before getInstance().
   * @param filePath URL or path of libavoid.wasm, if it is not served next to
   *   the JS bundle.
   */
  load(filePath?: string): Promise<void>;
  /** Throws if load() has not completed. */
  getInstance(): Avoid;
}

export declare const AvoidLib: AvoidLibType;
