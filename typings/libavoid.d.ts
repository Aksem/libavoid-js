declare module "libavoid-js";

declare interface Point {
  new (x: number, y: number): Point;
  x: number;
  y: number;
}

declare interface Router {
  new (flags: number): Router;

  processTransaction(): void;
  printInfo(): void;
  deleteConnector(connRef: ConnRef): void;

  moveShape(shape: ShapeRef, newPolygon: Polygon);
  moveShape(shape: ShapeRef, xDiff: number, yDiff: number);
  deleteShape(shape: ShapeRef);
  setRoutingParameter(parameter: number, value: number): void;
  setRoutingOption(option: number, value: boolean): void;
}

declare interface PolyLine {
  size(): number;
  get_ps(index: number): Point;
}

declare interface ConnEnd {
  new (point: Point): ConnEnd;
  new (shapeRef: ShapeRef, classId: number): ConnEnd;
  createConnEndFromJunctionRef(JunctionRef: JunctionRef, classId: number): ConnEnd;
}

declare interface ConnRef {
  new (router: Router, srcConnEnd: ConnEnd, dstConnEnd: ConnEnd): ConnRef;

  displayRoute(): PolyLine;
  setSourceEndpoint(srcPoint: ConnEnd): void;
  setDestEndpoint(dstPoint: ConnEnd): void;
  setRoutingType(type: number): void;
  setCallback(callback: (connRef: ConnRef) => void, connRef: ConnRef): void;

  setHateCrossings(value: boolean): void;
  doesHateCrossings(): boolean;
}

declare interface JunctionRef {
  new (router: Router, point: Point, id?: number): JunctionRef;

  position(): Point;
  setPositionFixed(fixed: boolean): void;
  positionFixed(): boolean;
  recommendedPosition(): Point;
}

declare interface Polygon {}

declare interface Rectangle extends Polygon {
  new (centre: Point, width: number, height: number): Rectangle;
  new (topLeft: Point, bottomRight: Point): Rectangle;
}

declare interface Obstacle {
  id(): number;
  polygon(): Polygon;
  router(): Router;
  position(): Point;

  setNewPoly(polygon: Polygon): void;
}

declare interface ShapeRef extends Obstacle {
  new (router: Router, shapePoly: Polygon): ShapeRef;
}

export interface Avoid {
  [x: string]: any;
  PolyLineRouting: number;
  OrthogonalRouting: number;

  ConnEnd: ConnEnd;
  ConnRef: ConnRef;
  Point: Point;
  Rectangle: Rectangle;
  Router: Router;
  Obstacle: Obstacle;
  ShapeRef: ShapeRef;
  JunctionRef: JunctionRef;

  destroy(obj: any): void;
}

export namespace AvoidLib {
  const avoidLib: Avoid | null;
  function load(filePath?: string): Promise<void>;
  function getInstance(): Avoid;
}
