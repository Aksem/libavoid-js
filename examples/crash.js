// debug web version
// import { AvoidLib } from './debug-dist/index.mjs';
// production web version
import { AvoidLib } from './dist/index.js';

async function main() {
  // init Avoid module
  await AvoidLib.load();
  const Avoid = AvoidLib.getInstance();

  const router = new Avoid.Router(Avoid.PolyLineRouting);
  router.setRoutingParameter(6, 30); // shapeBufferDistance = 30

  const rectangleACentrePoint = new Avoid.Point(50, 50);
  const rectangleA = new Avoid.Rectangle(rectangleACentrePoint, 200, 200);
  const shapeRefA = new Avoid.ShapeRef(router, rectangleA);

  const rectangleBCentrePoint = new Avoid.Point(750, 750);
  const rectangleB = new Avoid.Rectangle(rectangleBCentrePoint, 200, 200);
  const shapeRefB = new Avoid.ShapeRef(router, rectangleB);

  const rectangleCCentrePoint = new Avoid.Point(150, 450);
  const rectangleC = new Avoid.Rectangle(rectangleCCentrePoint, 200, 200);
  const shapeRefC = new Avoid.ShapeRef(router, rectangleC);

  function connCallback(connRefPtr) {
    console.log(1);
    const connRef = Avoid.wrapPointer(connRefPtr, Avoid.ConnRef);
    console.log(connRefPtr, Avoid.getPointer(connRef));
    console.log(`Connector ${connRef.id()} needs rerouting!`);
    const route = connRef.displayRoute();
    console.log('New path: ');
    console.log('----------');
    for (let i = 0; i < route.size(); i++) {
      console.log(`(${route.get_ps(i).x}, ${route.get_ps(i).y})`);
    }
    console.log('----------');
  }

  function connectShapes(shape1, shape2) {
    const shapeConnectionPinSrc1 = new Avoid.ShapeConnectionPin(shape1, 1, 0, 0, false, 0, 15);
    const connRefSrcConnEnd = new Avoid.ConnEnd(shape1, 1);
    const shapeConnectionPinDest1 = new Avoid.ShapeConnectionPin(shape2, 1, 0, 0, false, 0, 15);
    const connRefDestConnEnd = new Avoid.ConnEnd(shape2, 1);
    const connRef = new Avoid.ConnRef(router, connRefSrcConnEnd, connRefDestConnEnd);
    connRef.setCallback(connCallback, connRef);
    return connRef;
  }

  const connRef761 = connectShapes(shapeRefA, shapeRefB);
  const connRef762 = connectShapes(shapeRefB, shapeRefA);
  const connRef763 = connectShapes(shapeRefC, shapeRefA);
  const connRef764 = connectShapes(shapeRefC, shapeRefB);
  const connRef765 = connectShapes(shapeRefA, shapeRefC);
  const connRef766 = connectShapes(shapeRefA, shapeRefB);
  const connRef767 = connectShapes(shapeRefB, shapeRefA);
  const connRef768 = connectShapes(shapeRefC, shapeRefA);
  const connRef769 = connectShapes(shapeRefC, shapeRefB);
  const connRef770 = connectShapes(shapeRefA, shapeRefC);
  const connRef771 = connectShapes(shapeRefA, shapeRefB);
  const connRef772 = connectShapes(shapeRefB, shapeRefA);
  const connRef773 = connectShapes(shapeRefC, shapeRefA);
  const connRef774 = connectShapes(shapeRefC, shapeRefB);
  const connRef775 = connectShapes(shapeRefA, shapeRefC);
  const connRef776 = connectShapes(shapeRefA, shapeRefB);
  const connRef777 = connectShapes(shapeRefB, shapeRefA);
  const connRef778 = connectShapes(shapeRefC, shapeRefA);
  const connRef779 = connectShapes(shapeRefC, shapeRefB);
  const connRef780 = connectShapes(shapeRefA, shapeRefC);
  const connRef781 = connectShapes(shapeRefA, shapeRefB);
  const connRef782 = connectShapes(shapeRefA, shapeRefB);
  const connRef783 = connectShapes(shapeRefC, shapeRefA);
  const connRef784 = connectShapes(shapeRefC, shapeRefB);
  const connRef785 = connectShapes(shapeRefA, shapeRefC);
  const connRef786 = connectShapes(shapeRefA, shapeRefB);
  const connRef787 = connectShapes(shapeRefB, shapeRefA);
  const connRef788 = connectShapes(shapeRefC, shapeRefA);
  const connRef789 = connectShapes(shapeRefC, shapeRefB);
  const connRef790 = connectShapes(shapeRefA, shapeRefC);
  const connRef791 = connectShapes(shapeRefA, shapeRefB);
  const connRef792 = connectShapes(shapeRefB, shapeRefA);
  const connRef793 = connectShapes(shapeRefC, shapeRefA);
  const connRef794 = connectShapes(shapeRefC, shapeRefB);
  const connRef795 = connectShapes(shapeRefA, shapeRefC);
  const connRef796 = connectShapes(shapeRefA, shapeRefB);
  const connRef797 = connectShapes(shapeRefB, shapeRefA);
  const connRef798 = connectShapes(shapeRefC, shapeRefA);
  const connRef799 = connectShapes(shapeRefC, shapeRefB);
  const connRef800 = connectShapes(shapeRefA, shapeRefC);
  const connRef801 = connectShapes(shapeRefA, shapeRefB);
  const connRef802 = connectShapes(shapeRefB, shapeRefA);
  const connRef803 = connectShapes(shapeRefC, shapeRefA);
  const connRef804 = connectShapes(shapeRefC, shapeRefB);
  const connRef805 = connectShapes(shapeRefA, shapeRefC);
  const connRef806 = connectShapes(shapeRefA, shapeRefB);
  const connRef807 = connectShapes(shapeRefB, shapeRefA);
  const connRef808 = connectShapes(shapeRefC, shapeRefA);
  const connRef809 = connectShapes(shapeRefC, shapeRefB);
  const connRef810 = connectShapes(shapeRefA, shapeRefC);

  router.processTransaction();
}

main()
