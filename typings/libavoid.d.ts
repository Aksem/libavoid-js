declare module 'libavoid-js';

declare class Point {
  constructor(x: number, y: number);
  x: number;
  y: number;
}

declare class Router {
  constructor(flags: number);

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

declare class ConnRef {
  constructor(router: Router, srcConnEnd: ConnEnd, dstConnEnd: ConnEnd);

  displayRoute(): PolyLine;
  setSourceEndpoint(srcPoint: ConnEnd): void;
  setDestEndpoint(dstPoint: ConnEnd): void;
}

declare class Polygon {

}

declare class Rectangle extends Polygon {
  constructor(centre: Point, width: number, height: number);
}

declare class ShapeRef {
  constructor(router: Router, shapePoly: Polygon);
}

interface Avoid {
  PolyLineRouting: number;
  OrthogonalRouting: number;

  ConnEnd: typeof ConnEnd,
  ConnRef: typeof ConnRef,
  Point: typeof Point,
  Rectangle: typeof Rectangle,
  Router: typeof Router;
  ShapeRef: typeof ShapeRef;
}

interface AvoidLibInterface {
  avoidLib?: Avoid;
  load(): void;
  getInstance(): Avoid;
}
