// debug web version
import { AvoidLib } from './debug-dist/index.mjs';
// production web version
// import { AvoidLib } from '../dist/index.js';

async function main() {
  // init Avoid module
  await AvoidLib.load();
  const Avoid = AvoidLib.getInstance();

  const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting.value);

  router.setRoutingParameter(Avoid.RoutingParameter.shapeBufferDistance.value, 30);
  router.setRoutingParameter(
    Avoid.RoutingParameter.idealNudgingDistance.value,
    10
  );
  router.setRoutingOption(
    Avoid.RoutingOption.nudgeOrthogonalTouchingColinearSegments.value,
    false
  );

  /*
      This option can be used to control whether the router performs a preprocessing step
      before orthogonal nudging where is tries to unify segments and centre them in free space.
      This generally results in better quality ordering and nudging.
 
      Defaults to true.
 
      You may wish to turn this off for large examples where it can be very slow
      and will make little difference.
      */
  router.setRoutingOption(
    Avoid.RoutingOption.performUnifyingNudgingPreprocessingStep.value,
    true
  );

  router.setRoutingOption(Avoid.RoutingOption.nudgeSharedPathsWithCommonEndPoint.value, true);

  router.setRoutingOption(
    Avoid.RoutingOption.nudgeOrthogonalSegmentsConnectedToShapes.value,
    true
  );

  const w = 120;
  const h = 120;

  let x1 = 0;
  let y1 = 680;
  const rectangle1CentrePoint = new Avoid.Point(50, 50);
  const rectangle1TopLeftPoint = new Avoid.Point(x1, y1);
  const rectangle1BottomRightPoint = new Avoid.Point(x1 + w, y1 + h);
  const rectangle1 = new Avoid.Rectangle(rectangle1TopLeftPoint, rectangle1BottomRightPoint);
  const shapeRef1 = new Avoid.ShapeRef(router, rectangle1);


  let x2 = 320;
  let y2 = 1055;
  const rectangle2CentrePoint = new Avoid.Point(750, 750);
  const rectangle2TopLeftPoint = new Avoid.Point(x2, y2);
  const rectangle2BottomRightPoint = new Avoid.Point(x2 + w, y2 + h);
  const rectangle2 = new Avoid.Rectangle(rectangle2TopLeftPoint, rectangle2BottomRightPoint);
  const shapeRef2 = new Avoid.ShapeRef(router, rectangle2);

  let x3 = 320;
  let y3 = 1225;
  const rectangle3CentrePoint = new Avoid.Point(150, 450);
  const rectangle3TopLeftPoint = new Avoid.Point(x3, y3);
  const rectangle3BottomRightPoint = new Avoid.Point(x3 + w, y3 + h);
  const rectangle3 = new Avoid.Rectangle(rectangle3TopLeftPoint, rectangle3BottomRightPoint);
  const shapeRef3 = new Avoid.ShapeRef(router, rectangle3);


  let x4 = 320;
  let y4 = 1225;
  const rectangle4CentrePoint = new Avoid.Point(50, 50);
  const rectangle4TopLeftPoint = new Avoid.Point(x4, y4);
  const rectangle4BottomRightPoint = new Avoid.Point(x4 + w, y4 + h);
  const rectangle4 = new Avoid.Rectangle(rectangle4TopLeftPoint, rectangle4BottomRightPoint);
  const shapeRef4 = new Avoid.ShapeRef(router, rectangle4);

  let x5 = 320;
  let y5 = 1565;
  const rectangle5CentrePoint = new Avoid.Point(750, 750);
  const rectangle5TopLeftPoint = new Avoid.Point(x5, y5);
  const rectangle5BottomRightPoint = new Avoid.Point(x5 + w, y5 + h);
  const rectangle5 = new Avoid.Rectangle(rectangle5TopLeftPoint, rectangle5BottomRightPoint);
  const shapeRef5 = new Avoid.ShapeRef(router, rectangle5);

  let x6 = 320;
  let y6 = 1735;
  const rectangle6CentrePoint = new Avoid.Point(150, 450);
  const rectangle6TopLeftPoint = new Avoid.Point(x6, y6);
  const rectangle6BottomRightPoint = new Avoid.Point(x6 + w, y6 + h);
  const rectangle6 = new Avoid.Rectangle(rectangle6TopLeftPoint, rectangle6BottomRightPoint);
  const shapeRef6 = new Avoid.ShapeRef(router, rectangle6);


  let x7 = 320;
  let y7 = 1905;
  const rectangle7CentrePoint = new Avoid.Point(50, 50);
  const rectangle7TopLeftPoint = new Avoid.Point(x7, y7);
  const rectangle7BottomRightPoint = new Avoid.Point(x7 + w, y7 + h);
  const rectangle7 = new Avoid.Rectangle(rectangle7TopLeftPoint, rectangle7BottomRightPoint);
  const shapeRef7 = new Avoid.ShapeRef(router, rectangle7);

  let x8 = 320;
  let y8 = 2075;
  const rectangle8CentrePoint = new Avoid.Point(750, 750);
  const rectangle8TopLeftPoint = new Avoid.Point(x8, y8);
  const rectangle8BottomRightPoint = new Avoid.Point(x8 + w, y8 + h);
  const rectangle8 = new Avoid.Rectangle(rectangle8TopLeftPoint, rectangle8BottomRightPoint);
  const shapeRef8 = new Avoid.ShapeRef(router, rectangle8);

  let x9 = 640;
  let y9 = 1605;
  const rectangle9CentrePoint = new Avoid.Point(150, 450);
  const rectangle9TopLeftPoint = new Avoid.Point(x9, y9);
  const rectangle9BottomRightPoint = new Avoid.Point(x9 + w, y9 + h);
  const rectangle9 = new Avoid.Rectangle(rectangle9TopLeftPoint, rectangle9BottomRightPoint);
  const shapeRef9 = new Avoid.ShapeRef(router, rectangle9);

  let x10 = 320;
  let y10 = 2245;
  const rectangle10CentrePoint = new Avoid.Point(150, 450);
  const rectangle10TopLeftPoint = new Avoid.Point(x10, y10);
  const rectangle10BottomRightPoint = new Avoid.Point(x10 + w, y10 + h);
  const rectangle10 = new Avoid.Rectangle(rectangle10TopLeftPoint, rectangle10BottomRightPoint);
  const shapeRef10 = new Avoid.ShapeRef(router, rectangle10);

  let x11 = 640;
  let y11 = 25;
  const rectangle11CentrePoint = new Avoid.Point(150, 450);
  const rectangle11TopLeftPoint = new Avoid.Point(x11, y11);
  const rectangle11BottomRightPoint = new Avoid.Point(x11 + w, y11 + h);
  const rectangle11 = new Avoid.Rectangle(rectangle11TopLeftPoint, rectangle11BottomRightPoint);
  const shapeRef11 = new Avoid.ShapeRef(router, rectangle11);

  let x12 = 320;
  let y12 = 25;
  const rectangle12CentrePoint = new Avoid.Point(150, 450);
  const rectangle12TopLeftPoint = new Avoid.Point(x12, y12);
  const rectangle12BottomRightPoint = new Avoid.Point(x12 + w, y12 + h);
  const rectangle12 = new Avoid.Rectangle(rectangle12TopLeftPoint, rectangle12BottomRightPoint);
  const shapeRef12 = new Avoid.ShapeRef(router, rectangle12);

  function connCallback(connRef) {
    console.log(`Connector ${connRef.id()} needs rerouting!`);
    const route = connRef.displayRoute();
  }

  function connectShapes(shape1, shape2) {
    const shapeConnectionPinSrc1 = new Avoid.ShapeConnectionPin(shape1, 1, 0.5, 0.5, true, 0, 15);
    shapeConnectionPinSrc1.setExclusive(false);
    const connRefSrcConnEnd = new Avoid.ConnEnd(shape1, 1);
    const shapeConnectionPinDest1 = new Avoid.ShapeConnectionPin(shape2, 1, 0.5, 0.5, true, 0, 15);
    shapeConnectionPinDest1.setExclusive(false);
    const connRefDestConnEnd = new Avoid.ConnEnd(shape2, 1);
    const connRef = new Avoid.ConnRef(router, connRefSrcConnEnd, connRefDestConnEnd);
    connRef.setCallback(connCallback);
    return connRef;
  }

  const shapes = [
    shapeRef1, shapeRef2, shapeRef3,
    shapeRef4, shapeRef5, shapeRef6,
    shapeRef7, shapeRef8, shapeRef9,
    shapeRef10, shapeRef11, shapeRef12
  ];
  const connections = [];
  const numConnections = 2;
  for (let i = 0; i < shapes.length; i++) {
    // create two way connections between shapes
    for (let j = 0; j < shapes.length; j++) {
      // Create multiple connections between shape[i] and shape[j]
      for (let k = 0; k < numConnections; k++) {
        console.log(`Creating edge between Shape${i} -> Shape${j} Connection No: ${k}`);
        connections.push(connectShapes(shapes[i], shapes[j]));
      }
    }
  }

  router.processTransaction();
}

main()
