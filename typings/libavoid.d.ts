import { AvoidLib } from "../src/index";

declare module "libavoid-js";

export { AvoidLib };
declare class Point {
  constructor(x: number, y: number);
  x: number;
  y: number;
}

declare interface Router {
  new (flags: number): Router;

  processTransaction(): void;
  printInfo(): void;
  deleteConnector(connRef: ConnRef): void;
}

declare class PolyLine {
  size(): number;
  get_ps(index: number): Point;
}

declare class ConnEnd {
  constructor(point: Point);
}

declare interface ConnRef {
  new (router: Router, srcConnEnd: ConnEnd, dstConnEnd: ConnEnd): ConnRef;

  displayRoute(): PolyLine;
  setSourceEndpoint(srcPoint: ConnEnd): void;
  setDestEndpoint(dstPoint: ConnEnd): void;
  setRoutingType(type: number): void;
}

declare class Polygon {}

declare class Rectangle extends Polygon {
  constructor(centre: Point, width: number, height: number);
}

declare class ShapeRef {
  constructor(router: Router, shapePoly: Polygon);
}

export interface Avoid {
  [x: string]: any;
  PolyLineRouting: number;
  OrthogonalRouting: number;

  ConnEnd: typeof ConnEnd;
  ConnRef: ConnRef;
  Point: typeof Point;
  Rectangle: typeof Rectangle;
  Router: Router;
  ShapeRef: typeof ShapeRef;

  destroy(obj: any): void;
}

interface AvoidLibInterface {
  avoidLib?: Avoid;
  load(): void;
  getInstance(): Avoid;
}

export as namespace libAvoid;
