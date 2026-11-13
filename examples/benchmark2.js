// debug web version
// import { AvoidLib } from './debug-dist/index.mjs';
// production web version
import { AvoidLib } from '../dist/index.js';

async function main() {
    await AvoidLib.load();
    const Avoid = AvoidLib.getInstance();

    const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
    console.log('Router created:', router);

    // Set routing parameters
    // const routingParameters = [
    //     [Avoid.RoutingParameter.shapeBufferDistance, 30],
    //     [Avoid.RoutingParameter.idealNudgingDistance, 10]
    // ];
    // routingParameters.forEach(([param, value]) => router.setRoutingParameter(param, value));

    // // Set routing options
    // const routingOptions = [
    //     [Avoid.RoutingOption.nudgeOrthogonalTouchingColinearSegments, false],
    //     [Avoid.RoutingOption.performUnifyingNudgingPreprocessingStep, true],
    //     [Avoid.RoutingOption.nudgeSharedPathsWithCommonEndPoint, true],
    //     [Avoid.RoutingOption.nudgeOrthogonalSegmentsConnectedToShapes, true]
    // ];
    // routingOptions.forEach(([option, value]) => router.setRoutingOption(option, value));

    // Rectangle dimensions
    const w = 120, h = 120;

    // Define all rectangles' top-left points
    const rectangles = [
        { x: 0, y: 680 },
        { x: 320, y: 1055 },
        { x: 320, y: 1225.5 },
        // 3
        { x: 320, y: 1225 },
        { x: 320, y: 1565 },
        // 5
        { x: 320, y: 1735 },
        { x: 320, y: 1905 },
        { x: 320, y: 2075 },
        // 8
        { x: 640, y: 1605 },
        { x: 320, y: 2245 },
        // 10
        { x: 640, y: 25 },
        { x: 320, y: 25 },
        // 12
        { x: 0, y: 1900 },
        { x: 960, y: 2560 },
        // 14
        { x: 640, y: 2522.5 },
        // you can continue with more...
    ];

    // Create shapes (top-left corner plus size)
    const shapeRefs = rectangles.map(({ x, y }) => router.addShape({ x, y, width: w, height: h }));

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
        // A new centre pin per connection on both shapes, as in the original benchmark.
        shape1.addPin({ classId: 1, x: 0.5, y: 0.5 }).setExclusive(false);
        shape2.addPin({ classId: 1, x: 0.5, y: 0.5 }).setExclusive(false);
        const connRef = router.addConnector({ shape: shape1, pin: 1 }, { shape: shape2, pin: 1 });
        connRef.setCallback(connCallback);
        return connRef;
    }

    const connections = [];
    const numConnections = 2;
    for (let i = 0; i < shapeRefs.length; i++) {
        // create two way connections between shapes
        for (let j = 0; j < shapeRefs.length; j++) {
            // Create multiple connections between shape[i] and shape[j]
            for (let k = 0; k < numConnections; k++) {
                console.log(`Creating edge between Shape${i} -> Shape${j} Connection No: ${k}`);
                connections.push(connectShapes(shapeRefs[i], shapeRefs[j]));
            }
        }
    }
    console.time('Transaction')
    router.processTransaction();
    console.timeEnd('Transaction')
}

main()
