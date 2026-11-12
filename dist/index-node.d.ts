// These mirror the embind bindings in embind/bindings.cpp. Keep them in sync
// when bindings change; test/types.test-d.ts type-checks typical usage.

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
 * Value of the libavoid enum `Name`. At runtime it is a plain number (e.g.
 * `Avoid.RoutingParameter.shapeBufferDistance === 6`); the brand only lets
 * TypeScript catch values of the wrong enum. Methods with enum parameters
 * throw a TypeError for non-numbers and a RangeError for numbers that are not
 * a value of the enum.
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

/**
 * Axis-aligned bounding box, given by its top-left (`min`) and bottom-right
 * (`max`) corners.
 */
export interface Box extends EmbindObject {
  /**
   * Top-left corner. The getter returns a copy (call .delete() on it), so
   * `box.min.x = 1` has no effect: assign a whole Point instead.
   */
  min: Point;
  /** Bottom-right corner. Same copy semantics as `min`. */
  max: Point;
  /** Extent along a dimension: 0 for x (width), any other value for y (height). */
  length(dimension: number): number;
  width(): number;
  height(): number;
}
export interface BoxConstructor {
  /** The corners' x/y are uninitialised: assign `min` and `max` before use. */
  new (): Box;
  readonly prototype: Box;
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
  /** Bounding box of the polygon, grown by `offset` on every side. */
  offsetBoundingBox(offset: number): Box;
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
   * @param flags Bitwise OR of RouterFlag values, e.g.
   *   `Avoid.RouterFlag.PolyLineRouting | Avoid.RouterFlag.OrthogonalRouting`.
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
  /**
   * Bounding box of the obstacle's polygon grown by the router's
   * shapeBufferDistance, i.e. the area connectors are routed around.
   */
  routingBox(): Box;
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
  /** libavoid assigns a unique id. */
  new (router: Router, position: Point): JunctionRef;
  /** @param id Unique object id; 0 lets libavoid assign one. */
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
 * The argument is a new handle to the same Router-owned C++ object as the
 * ConnRef the callback was registered on (`connRef.isAliasOf(conn)` is true,
 * but `connRef !== conn`). Like every ConnRef handle, never call .delete() on it.
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
  /** Position on the parent shape's current polygon, or the parent junction's position. */
  position(): Point;
  /**
   * Position the pin would have if the parent shape's polygon were
   * `newPolygon`. An empty polygon means the parent's current polygon.
   */
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
  Box: BoxConstructor;
  Checkpoint: CheckpointConstructor;
  CheckpointVector: CheckpointVectorConstructor;
  ConnEnd: ConnEndConstructor;
  ConnRef: ConnRefConstructor;
  ConnDirFlag: ConnDirFlagEnum;
  ConnType: ConnTypeEnum;
  JunctionRef: JunctionRefConstructor;
  Obstacle: ObstacleConstructor;
  Point: PointConstructor;
  PointVector: PointVectorConstructor;
  Polygon: PolygonConstructor;
  PolygonInterface: PolygonInterfaceConstructor;
  Rectangle: RectangleConstructor;
  Router: RouterConstructor;
  RouterFlag: RouterFlagEnum;
  RoutingOption: RoutingOptionEnum;
  RoutingParameter: RoutingParameterEnum;
  ShapeConnectionPin: ShapeConnectionPinConstructor;
  ShapeRef: ShapeRefConstructor;
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
