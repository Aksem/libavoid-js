// debug version
// import { AvoidLib } from '../debug-dist/index.mjs';
// production version
import { AvoidLib } from '../dist/index-node.mjs';

async function main() {
  // init Avoid module
  await AvoidLib.load();
  const Avoid = AvoidLib.getInstance();

  const router = new Avoid.Router(Avoid.PolyLineRouting);

  const srcPt = new Avoid.Point(1.2, 0.5);
  const dstPt = new Avoid.Point(1.5, 4);

  const srcConnEnd = new Avoid.ConnEnd(srcPt);
  const dstConnEnd = new Avoid.ConnEnd(dstPt);
  const connRef = new Avoid.ConnRef(router, srcConnEnd, dstConnEnd);

  function connCallback(connRefPtr) {
    const connRef = Avoid.wrapPointer(connRefPtr, Avoid.ConnRef);
    console.log(`Connector ${connRef.id()} needs rerouting!`);
    const route = connRef.displayRoute();
    console.log('New path: ');
    console.log('----------');
    for (let i = 0; i < route.size(); i++) {
      console.log(`(${route.get_ps(i).x}, ${route.get_ps(i).y})`);
    }
    console.log('----------');
  }

  connRef.setCallback(connCallback, connRef);
  // Force inital callback:
  router.processTransaction();

  console.log("Adding a shape.");
  // Create the ShapeRef:
  const shapePoly = new Avoid.Polygon(3);
  shapePoly.set_ps(0, new Avoid.Point(1, 1));
  shapePoly.set_ps(1, new Avoid.Point(2.5, 1.5));
  shapePoly.set_ps(2, new Avoid.Point(1.5, 2.5));
  const shapeRef = new Avoid.ShapeRef(router, shapePoly);
  router.processTransaction();

  console.log("Shifting endpoint.");
  const dstPt2 = new Avoid.Point(6, 4.5);
  connRef.setDestEndpoint(new Avoid.ConnEnd(dstPt2));
  // It's expected you know the connector needs rerouting, so the callback
  // isn't called.  You can force it to be called though, via:
  router.processTransaction();

  console.log("Moving shape right by 0.5.");
  router.moveShape(shapeRef, 0.5, 0);
  router.processTransaction();
}

main()
