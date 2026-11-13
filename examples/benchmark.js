// Benchmark scene recorded from a real diagram (libavoid debug output).
import { AvoidLib } from './dist/index.js';

let Avoid;

function prepareRouter() {
  const router = new Avoid.Router(
    Avoid.RouterFlag.PolyLineRouting | Avoid.RouterFlag.OrthogonalRouting
  );
  router.setRoutingParameter(Avoid.RoutingParameter.segmentPenalty, 50);
  router.setRoutingParameter(Avoid.RoutingParameter.anglePenalty, 0);
  router.setRoutingParameter(Avoid.RoutingParameter.crossingPenalty, 200);
  router.setRoutingParameter(Avoid.RoutingParameter.clusterCrossingPenalty, 4000);
  router.setRoutingParameter(Avoid.RoutingParameter.fixedSharedPathPenalty, 110);
  router.setRoutingParameter(Avoid.RoutingParameter.idealNudgingDistance, 25);

  const poly219926511 = [{ x: 50760, y: 51240 }, { x: 50760, y: 51260 }, { x: 50740, y: 51260 }, { x: 50740, y: 51240 }];
  const shapeRef219926511 = router.addShape(poly219926511, { id: 219926511 });
  const pin1 = shapeRef219926511.addPin({ classId: 2147483646, x: 0.5, y: 0.5, proportional: true, insideOffset: 0, directions: 4 });
  pin1.setExclusive(false);
  const pin2 = shapeRef219926511.addPin({ classId: 2147483646, x: 0.5, y: 0.5, proportional: true, insideOffset: 0, directions: 1 });
  pin2.setExclusive(false);
  const pin3 = shapeRef219926511.addPin({ classId: 2147483646, x: 0.5, y: 0.5, proportional: true, insideOffset: 0, directions: 8 });
  pin3.setExclusive(false);
  const pin4 = shapeRef219926511.addPin({ classId: 2147483646, x: 0.5, y: 0.5, proportional: true, insideOffset: 0, directions: 2 });
  pin4.setExclusive(false);

  const poly878674 = [{ x: 51454, y: 51200 }, { x: 51454, y: 51285 }, { x: 51396, y: 51285 }, { x: 51396, y: 51200 }];
  router.addShape(poly878674, { id: 878674 });

  const poly286906544 = [{ x: 50704, y: 51250 }, { x: 50704, y: 51335 }, { x: 50646, y: 51335 }, { x: 50646, y: 51250 }];
  router.addShape(poly286906544, { id: 286906544 });

  const poly170813081 = [{ x: 51104, y: 51090 }, { x: 51104, y: 51175 }, { x: 51046, y: 51175 }, { x: 51046, y: 51090 }];
  router.addShape(poly170813081, { id: 170813081 });

  const poly342721632 = [{ x: 51910, y: 50946 }, { x: 51910, y: 51004 }, { x: 51825, y: 51004 }, { x: 51825, y: 50946 }];
  router.addShape(poly342721632, { id: 342721632 });

  const poly223927132 = [{ x: 51510, y: 51190 }, { x: 51510, y: 51210 }, { x: 51490, y: 51210 }, { x: 51490, y: 51190 }];
  const shapeRef223927132 = router.addShape(poly223927132, { id: 223927132 });
  const pin1s = shapeRef223927132.addPin({ classId: 2147483646, x: 0.5, y: 0.5, proportional: true, insideOffset: 0, directions: 4 });
  pin1s.setExclusive(false);
  const pin2s = shapeRef223927132.addPin({ classId: 2147483646, x: 0.5, y: 0.5, proportional: true, insideOffset: 0, directions: 1 });
  pin2s.setExclusive(false);
  const pin3s = shapeRef223927132.addPin({ classId: 2147483646, x: 0.5, y: 0.5, proportional: true, insideOffset: 0, directions: 8 });
  pin3s.setExclusive(false);
  const pin4s = shapeRef223927132.addPin({ classId: 2147483646, x: 0.5, y: 0.5, proportional: true, insideOffset: 0, directions: 2 });
  pin4s.setExclusive(false);

  const poly11057158 = [{ x: 51679, y: 51200 }, { x: 51679, y: 51285 }, { x: 51621, y: 51285 }, { x: 51621, y: 51200 }];
  router.addShape(poly11057158, { id: 11057158 });

  const poly322446045 = [{ x: 50779, y: 51240 }, { x: 50779, y: 51335 }, { x: 50721, y: 51335 }, { x: 50721, y: 51240 }];
  router.addShape(poly322446045, { id: 322446045 });

  const poly767565928 = [{ x: 51004, y: 50741 }, { x: 51004, y: 50826 }, { x: 50946, y: 50826 }, { x: 50946, y: 50741 }];
  router.addShape(poly767565928, { id: 767565928 });

  const poly280939374 = [{ x: 51085, y: 50971 }, { x: 51085, y: 51029 }, { x: 51000, y: 51029 }, { x: 51000, y: 50971 }];
  router.addShape(poly280939374, { id: 280939374 });

  const poly630623707 = [{ x: 51279, y: 50925 }, { x: 51279, y: 51010 }, { x: 51221, y: 51010 }, { x: 51221, y: 50925 }];
  router.addShape(poly630623707, { id: 630623707 });

  const poly28160455 = [{ x: 50879, y: 51250 }, { x: 50879, y: 51335 }, { x: 50821, y: 51335 }, { x: 50821, y: 51250 }];
  router.addShape(poly28160455, { id: 28160455 });

  const poly525890448 = [{ x: 51174, y: 50721 }, { x: 51174, y: 50779 }, { x: 51089, y: 50779 }, { x: 51089, y: 50721 }];
  router.addShape(poly525890448, { id: 525890448 });

  const poly157182552 = [{ x: 51529, y: 51190 }, { x: 51529, y: 51285 }, { x: 51471, y: 51285 }, { x: 51471, y: 51190 }];
  router.addShape(poly157182552, { id: 157182552 });

  const poly799637520 = [{ x: 50625, y: 50896 }, { x: 50625, y: 50954 }, { x: 50540, y: 50954 }, { x: 50540, y: 50896 }];
  router.addShape(poly799637520, { id: 799637520 });

  const poly60349320 = [{ x: 50904, y: 51025 }, { x: 50904, y: 51110 }, { x: 50846, y: 51110 }, { x: 50846, y: 51025 }];
  router.addShape(poly60349320, { id: 60349320 });

  const poly119851894 = [{ x: 51179, y: 51225 }, { x: 51179, y: 51310 }, { x: 51121, y: 51310 }, { x: 51121, y: 51225 }];
  router.addShape(poly119851894, { id: 119851894 });

  const poly233164275 = [{ x: 51604, y: 51200 }, { x: 51604, y: 51285 }, { x: 51546, y: 51285 }, { x: 51546, y: 51200 }];
  router.addShape(poly233164275, { id: 233164275 });

  const poly807558175 = [{ x: 51604, y: 51000 }, { x: 51604, y: 51085 }, { x: 51546, y: 51085 }, { x: 51546, y: 51000 }];
  router.addShape(poly807558175, { id: 807558175 });

  const poly108859552 = [{ x: 51560, y: 50721 }, { x: 51560, y: 50779 }, { x: 51475, y: 50779 }, { x: 51475, y: 50721 }];
  router.addShape(poly108859552, { id: 108859552 });

  const poly404900496 = [{ x: 51525, y: 50946 }, { x: 51525, y: 51004 }, { x: 51440, y: 51004 }, { x: 51440, y: 50946 }];
  router.addShape(poly404900496, { id: 404900496 });

  const poly620445000 = [{ x: 51029, y: 51225 }, { x: 51029, y: 51310 }, { x: 50971, y: 51310 }, { x: 50971, y: 51225 }];
  router.addShape(poly620445000, { id: 620445000 });

  const srcPt450684531 = { x: 51165, y: 50750 };
  const dstPt450684531 = { shape: shapeRef223927132, pin: 2147483646 };
  const connRef450684531 = router.addConnector(srcPt450684531, dstPt450684531);
  connRef450684531.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);

  const srcPt135371350 = { shape: shapeRef223927132, pin: 2147483646 };
  const dstPt135371350 = { x: 51250, y: 50935 };
  const connRef135371350 = router.addConnector(srcPt135371350, dstPt135371350);
  connRef135371350.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);

  const srcPt143333770 = { x: 51485, y: 50750 };
  const dstPt143333770 = { shape: shapeRef223927132, pin: 2147483646 };
  const connRef143333770 = router.addConnector(srcPt143333770, dstPt143333770);
  connRef143333770.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);

  const srcPt102966575 = { x: 50615, y: 50925 };
  const dstPt102966575 = { shape: shapeRef223927132, pin: 2147483646 };
  const connRef102966575 = router.addConnector(srcPt102966575, dstPt102966575);
  connRef102966575.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);

  const srcPt68998920 = { shape: shapeRef223927132, pin: 2147483646 };
  const dstPt68998920 = { x: 50975, y: 50815 };
  const connRef68998920 = router.addConnector(srcPt68998920, dstPt68998920);
  connRef68998920.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);

  const srcPt1625709 = { shape: shapeRef223927132, pin: 2147483646 };
  const dstPt1625709 = { x: 50875, y: 51035 };
  const connRef1625709 = router.addConnector(srcPt1625709, dstPt1625709);
  connRef1625709.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);

  const srcPt34178450 = { shape: shapeRef223927132, pin: 2147483646 };
  const dstPt34178450 = { x: 51010, y: 51000 };
  const connRef34178450 = router.addConnector(srcPt34178450, dstPt34178450);
  connRef34178450.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);

  const srcPt7982176 = { x: 50675, y: 51260 };
  const dstPt7982176 = { shape: shapeRef219926511, pin: 2147483646 };
  const connRef7982176 = router.addConnector(srcPt7982176, dstPt7982176);
  connRef7982176.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);

  const srcPt197177982 = { x: 50750, y: 51250 };
  const dstPt197177982 = { x: 50750, y: 51260 };
  const connRef197177982 = router.addConnector(srcPt197177982, dstPt197177982);
  connRef197177982.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);

  const srcPt398066432 = { shape: shapeRef219926511, pin: 2147483646 };
  const dstPt398066432 = { x: 50850, y: 51260 };
  const connRef398066432 = router.addConnector(srcPt398066432, dstPt398066432);
  connRef398066432.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);

  const srcPt314512308 = { x: 51000, y: 51235 };
  const dstPt314512308 = { shape: shapeRef219926511, pin: 2147483646 };
  const connRef314512308 = router.addConnector(srcPt314512308, dstPt314512308);
  connRef314512308.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);

  const srcPt182776308 = { x: 51075, y: 51225 };
  const dstPt182776308 = { x: 51075, y: 51165 };
  const connRef182776308 = router.addConnector(srcPt182776308, dstPt182776308);
  connRef182776308.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);

  const srcPt96504835 = { x: 51150, y: 51235 };
  const dstPt96504835 = { shape: shapeRef219926511, pin: 2147483646 };
  const connRef96504835 = router.addConnector(srcPt96504835, dstPt96504835);
  connRef96504835.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);

  const srcPt118099300 = { x: 51425, y: 51210 };
  const dstPt118099300 = { shape: shapeRef223927132, pin: 2147483646 };
  const connRef118099300 = router.addConnector(srcPt118099300, dstPt118099300);
  connRef118099300.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);

  const srcPt176080410 = { shape: shapeRef223927132, pin: 2147483646 };
  const dstPt176080410 = { x: 51575, y: 51210 };
  const connRef176080410 = router.addConnector(srcPt176080410, dstPt176080410);
  connRef176080410.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);

  const srcPt426666001 = { x: 51500, y: 51210 };
  const dstPt426666001 = { x: 51500, y: 51200 };
  const connRef426666001 = router.addConnector(srcPt426666001, dstPt426666001);
  connRef426666001.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);

  const srcPt795762792 = { x: 51650, y: 51210 };
  const dstPt795762792 = { shape: shapeRef223927132, pin: 2147483646 };
  const connRef795762792 = router.addConnector(srcPt795762792, dstPt795762792);
  connRef795762792.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);

  const srcPt467016913 = { shape: shapeRef219926511, pin: 2147483646 } /* was ConnEnd(shapeRef) without a pin class */;
  const dstPt467016913 = { x: 51575, y: 51010 };
  const connRef467016913 = router.addConnector(srcPt467016913, dstPt467016913);
  connRef467016913.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);

  const srcPt45740440 = { x: 51835, y: 50975 };
  const dstPt45740440 = { shape: shapeRef219926511, pin: 2147483646 };
  const connRef45740440 = router.addConnector(srcPt45740440, dstPt45740440);
  connRef45740440.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);

  const srcPt985644192 = { x: 51515, y: 50975 };
  const dstPt985644192 = { shape: shapeRef219926511, pin: 2147483646 };
  const connRef985644192 = router.addConnector(srcPt985644192, dstPt985644192);
  connRef985644192.setRoutingType(Avoid.ConnType.ConnType_Orthogonal);

  return [router, shapeRef219926511];
}

function route() {
  const [router] = prepareRouter();
  router.processTransaction();
  router.delete();
}

/* Test 1: full router creation & routing */
async function test_1() {
  await AvoidLib.load();
  Avoid = AvoidLib.getInstance();

  const measurements = [];
  for (let i = 0; i < 100; i++) {
    const startTime = performance.now();
    route();
    const endTime = performance.now();
    measurements.push(endTime - startTime);
    console.log("Test 1, measurement", measurements[i]);
  }

  const mean =
    measurements.reduce((acc, val) => acc + val, 0) / measurements.length;
  console.log("Test 1, mean: ", mean);
}

function moveShape(router, shape) {
  router.moveShape(shape, 120, 200);
  router.processTransaction();
}

/* Test 2: create router once and move one shape repeatedly */
async function test_2() {
  await AvoidLib.load();
  Avoid = AvoidLib.getInstance();

  const measurements = [];
  const [router, shape] = prepareRouter();
  for (let i = 0; i < 100; i++) {
    const startTime = performance.now();
    moveShape(router, shape);
    const endTime = performance.now();
    measurements.push(endTime - startTime);
    console.log("Test 2, measurement", measurements[i]);

    // reset moving
    router.moveShape(shape, -120, -200);
    router.processTransaction();
  }
  router.delete();

  const mean =
    measurements.reduce((acc, val) => acc + val, 0) / measurements.length;
  console.log("Test 2, mean: ", mean);
}

/* Test 3: measure processing transactions without actions */
async function test_3() {
  await AvoidLib.load();
  Avoid = AvoidLib.getInstance();

  const measurements = [];
  const [router] = prepareRouter();
  for (let i = 0; i < 100; i++) {
    const startTime = performance.now();
    router.processTransaction();
    const endTime = performance.now();
    measurements.push(endTime - startTime);
    console.log("Test 3, measurement", measurements[i]);
  }
  router.delete();

  const mean =
    measurements.reduce((acc, val) => acc + val, 0) / measurements.length;
  console.log("Test 3, mean: ", mean);
}

// wait for page loading and run benchmark
setTimeout(() => test_1(), 2000);
// setTimeout(() => test_2(), 2000);
// setTimeout(() => test_3(), 2000);
