// debug web version
// import { AvoidLib } from './debug-dist/index.mjs';
// production web version
import { AvoidLib } from '../dist/index.js';

async function main() {
    await AvoidLib.load();
    const Avoid = AvoidLib.getInstance();

    const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting.value);

    // Set routing parameters
    // const routingParameters = [
    //     [Avoid.RoutingParameter.shapeBufferDistance.value, 30],
    //     [Avoid.RoutingParameter.idealNudgingDistance.value, 10]
    // ];
    // routingParameters.forEach(([param, value]) => router.setRoutingParameter(param, value));

    // // Set routing options
    // const routingOptions = [
    //     [Avoid.RoutingOption.nudgeOrthogonalTouchingColinearSegments.value, false],
    //     [Avoid.RoutingOption.performUnifyingNudgingPreprocessingStep.value, true],
    //     [Avoid.RoutingOption.nudgeSharedPathsWithCommonEndPoint.value, true],
    //     [Avoid.RoutingOption.nudgeOrthogonalSegmentsConnectedToShapes.value, true]
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

    // Create shapes
    const shapeRefs = rectangles.map(({ x, y }) => {
        const topLeft = new Avoid.Point(x, y);
        const bottomRight = new Avoid.Point(x + w, y + h);
        const rect = new Avoid.Rectangle(topLeft, bottomRight);
        return new Avoid.ShapeRef(router, rect);
    });


    function connCallback(connRef) {
        console.log(`Connector ${connRef.id()} needs rerouting!`);
        const route = connRef.displayRoute();
        console.log('New path: ', route, route.size());
        console.log('----------');
        for (let i = 0; i < route.size(); i++) {
            console.log(`(${route.ps.get(i).x}, ${route.ps.get(i).y})`);
        }
        console.log('----------');
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
