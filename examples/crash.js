// debug web version
import { AvoidLib } from './debug-dist/index.mjs';
// production web version
// import { AvoidLib } from '../dist/index.js';

async function main() {
  // init Avoid module
  await AvoidLib.load();
  const Avoid = AvoidLib.getInstance();

  const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);

  router.setRoutingParameter(Avoid.RoutingParameter.shapeBufferDistance, 0);
  router.setRoutingParameter(
    Avoid.RoutingParameter.idealNudgingDistance,
    4
  );
  router.setRoutingOption(
    Avoid.RoutingOption.nudgeOrthogonalTouchingColinearSegments,
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
    Avoid.RoutingOption.performUnifyingNudgingPreprocessingStep,
    true
  );

  router.setRoutingOption(Avoid.RoutingOption.nudgeSharedPathsWithCommonEndPoint, true);

  router.setRoutingOption(
    Avoid.RoutingOption.nudgeOrthogonalSegmentsConnectedToShapes,
    true
  );

  const w = 120;
  const h = 120;

  // Top-left corners of the shapes (rectangles 3 and 4 overlap almost exactly).
  const corners = [
    [0, 680], [320, 1055], [320, 1225], [320, 1225], [320, 1565], [320, 1735],
    [320, 1905], [320, 2075], [640, 1605], [320, 2245], [640, 25], [320, 25],
  ];
  const [
    shapeRef1, shapeRef2, shapeRef3, shapeRef4, shapeRef5, shapeRef6,
    shapeRef7, shapeRef8, shapeRef9, shapeRef10, shapeRef11, shapeRef12,
  ] = corners.map(([x, y]) => router.addShape({ x, y, width: w, height: h }));

  function connCallback(connRef) {
    console.log(`Connector ${connRef.id()} needs rerouting!`);
    const route = connRef.displayRoute();
    console.log('New path: ', route, route.length);
    console.log('----------');
    for (const { x, y } of route) {
      console.log(`(${x}, ${y})`);
    }
    console.log('----------');
  }

  function connectShapes(shape1, shape2) {
    // A new centre pin per connection on both shapes, as in the original repro.
    shape1.addPin({ classId: 1, x: 0.5, y: 0.5 }).setExclusive(false);
    shape2.addPin({ classId: 1, x: 0.5, y: 0.5 }).setExclusive(false);
    const connRef = router.addConnector({ shape: shape1, pin: 1 }, { shape: shape2, pin: 1 });
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
