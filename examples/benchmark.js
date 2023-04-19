import { AvoidLib } from './dist/index.mjs';

let Avoid;

function prepareRouter() {
  const router = new Avoid.Router(
    Avoid.PolyLineRouting | Avoid.OrthogonalRouting
  );
  router.setRoutingParameter(Avoid.segmentPenalty, 50);
  router.setRoutingParameter(Avoid.anglePenalty, 0);
  router.setRoutingParameter(Avoid.crossingPenalty, 200);
  router.setRoutingParameter(Avoid.clusterCrossingPenalty, 4000);
  router.setRoutingParameter(Avoid.fixedSharedPathPenalty, 110);
  router.setRoutingParameter(Avoid.idealNudgingDistance, 25);

  const poly219926511 = new Avoid.Polygon(4);
  poly219926511.set_ps(0, new Avoid.Point(50760, 51240));
  poly219926511.set_ps(1, new Avoid.Point(50760, 51260));
  poly219926511.set_ps(2, new Avoid.Point(50740, 51260));
  poly219926511.set_ps(3, new Avoid.Point(50740, 51240));
  const shapeRef219926511 = new Avoid.ShapeRef(
    router,
    poly219926511,
    219926511
  );
  const pin1 = new Avoid.ShapeConnectionPin(
    shapeRef219926511,
    2147483646,
    0.5,
    0.5,
    true,
    0,
    4
  );
  pin1.setExclusive(false);
  const pin2 = new Avoid.ShapeConnectionPin(
    shapeRef219926511,
    2147483646,
    0.5,
    0.5,
    true,
    0,
    1
  );
  pin2.setExclusive(false);
  const pin3 = new Avoid.ShapeConnectionPin(
    shapeRef219926511,
    2147483646,
    0.5,
    0.5,
    true,
    0,
    8
  );
  pin3.setExclusive(false);
  const pin4 = new Avoid.ShapeConnectionPin(
    shapeRef219926511,
    2147483646,
    0.5,
    0.5,
    true,
    0,
    2
  );
  pin4.setExclusive(false);

  const poly878674 = new Avoid.Polygon(4);
  poly878674.set_ps(0, new Avoid.Point(51454, 51200));
  poly878674.set_ps(1, new Avoid.Point(51454, 51285));
  poly878674.set_ps(2, new Avoid.Point(51396, 51285));
  poly878674.set_ps(3, new Avoid.Point(51396, 51200));
  new Avoid.ShapeRef(router, poly878674, 878674);

  const poly286906544 = new Avoid.Polygon(4);
  poly286906544.set_ps(0, new Avoid.Point(50704, 51250));
  poly286906544.set_ps(1, new Avoid.Point(50704, 51335));
  poly286906544.set_ps(2, new Avoid.Point(50646, 51335));
  poly286906544.set_ps(3, new Avoid.Point(50646, 51250));
  new Avoid.ShapeRef(router, poly286906544, 286906544);

  const poly170813081 = new Avoid.Polygon(4);
  poly170813081.set_ps(0, new Avoid.Point(51104, 51090));
  poly170813081.set_ps(1, new Avoid.Point(51104, 51175));
  poly170813081.set_ps(2, new Avoid.Point(51046, 51175));
  poly170813081.set_ps(3, new Avoid.Point(51046, 51090));
  new Avoid.ShapeRef(router, poly170813081, 170813081);

  const poly342721632 = new Avoid.Polygon(4);
  poly342721632.set_ps(0, new Avoid.Point(51910, 50946));
  poly342721632.set_ps(1, new Avoid.Point(51910, 51004));
  poly342721632.set_ps(2, new Avoid.Point(51825, 51004));
  poly342721632.set_ps(3, new Avoid.Point(51825, 50946));
  new Avoid.ShapeRef(router, poly342721632, 342721632);

  const poly223927132 = new Avoid.Polygon(4);
  poly223927132.set_ps(0, new Avoid.Point(51510, 51190));
  poly223927132.set_ps(1, new Avoid.Point(51510, 51210));
  poly223927132.set_ps(2, new Avoid.Point(51490, 51210));
  poly223927132.set_ps(3, new Avoid.Point(51490, 51190));
  const shapeRef223927132 = new Avoid.ShapeRef(
    router,
    poly223927132,
    223927132
  );
  const pin1s = new Avoid.ShapeConnectionPin(
    shapeRef223927132,
    2147483646,
    0.5,
    0.5,
    true,
    0,
    4
  );
  pin1s.setExclusive(false);
  const pin2s = new Avoid.ShapeConnectionPin(
    shapeRef223927132,
    2147483646,
    0.5,
    0.5,
    true,
    0,
    1
  );
  pin2s.setExclusive(false);
  const pin3s = new Avoid.ShapeConnectionPin(
    shapeRef223927132,
    2147483646,
    0.5,
    0.5,
    true,
    0,
    8
  );
  pin3s.setExclusive(false);
  const pin4s = new Avoid.ShapeConnectionPin(
    shapeRef223927132,
    2147483646,
    0.5,
    0.5,
    true,
    0,
    2
  );
  pin4s.setExclusive(false);

  const poly11057158 = new Avoid.Polygon(4);
  poly11057158.set_ps(0, new Avoid.Point(51679, 51200));
  poly11057158.set_ps(1, new Avoid.Point(51679, 51285));
  poly11057158.set_ps(2, new Avoid.Point(51621, 51285));
  poly11057158.set_ps(3, new Avoid.Point(51621, 51200));
  new Avoid.ShapeRef(router, poly11057158, 11057158);

  const poly322446045 = new Avoid.Polygon(4);
  poly322446045.set_ps(0, new Avoid.Point(50779, 51240));
  poly322446045.set_ps(1, new Avoid.Point(50779, 51335));
  poly322446045.set_ps(2, new Avoid.Point(50721, 51335));
  poly322446045.set_ps(3, new Avoid.Point(50721, 51240));
  new Avoid.ShapeRef(router, poly322446045, 322446045);

  const poly767565928 = new Avoid.Polygon(4);
  poly767565928.set_ps(0, new Avoid.Point(51004, 50741));
  poly767565928.set_ps(1, new Avoid.Point(51004, 50826));
  poly767565928.set_ps(2, new Avoid.Point(50946, 50826));
  poly767565928.set_ps(3, new Avoid.Point(50946, 50741));
  new Avoid.ShapeRef(router, poly767565928, 767565928);

  const poly280939374 = new Avoid.Polygon(4);
  poly280939374.set_ps(0, new Avoid.Point(51085, 50971));
  poly280939374.set_ps(1, new Avoid.Point(51085, 51029));
  poly280939374.set_ps(2, new Avoid.Point(51000, 51029));
  poly280939374.set_ps(3, new Avoid.Point(51000, 50971));
  new Avoid.ShapeRef(router, poly280939374, 280939374);

  const poly630623707 = new Avoid.Polygon(4);
  poly630623707.set_ps(0, new Avoid.Point(51279, 50925));
  poly630623707.set_ps(1, new Avoid.Point(51279, 51010));
  poly630623707.set_ps(2, new Avoid.Point(51221, 51010));
  poly630623707.set_ps(3, new Avoid.Point(51221, 50925));
  new Avoid.ShapeRef(router, poly630623707, 630623707);

  const poly28160455 = new Avoid.Polygon(4);
  poly28160455.set_ps(0, new Avoid.Point(50879, 51250));
  poly28160455.set_ps(1, new Avoid.Point(50879, 51335));
  poly28160455.set_ps(2, new Avoid.Point(50821, 51335));
  poly28160455.set_ps(3, new Avoid.Point(50821, 51250));
  new Avoid.ShapeRef(router, poly28160455, 28160455);

  const poly525890448 = new Avoid.Polygon(4);
  poly525890448.set_ps(0, new Avoid.Point(51174, 50721));
  poly525890448.set_ps(1, new Avoid.Point(51174, 50779));
  poly525890448.set_ps(2, new Avoid.Point(51089, 50779));
  poly525890448.set_ps(3, new Avoid.Point(51089, 50721));
  new Avoid.ShapeRef(router, poly525890448, 525890448);

  const poly157182552 = new Avoid.Polygon(4);
  poly157182552.set_ps(0, new Avoid.Point(51529, 51190));
  poly157182552.set_ps(1, new Avoid.Point(51529, 51285));
  poly157182552.set_ps(2, new Avoid.Point(51471, 51285));
  poly157182552.set_ps(3, new Avoid.Point(51471, 51190));
  new Avoid.ShapeRef(router, poly157182552, 157182552);

  const poly799637520 = new Avoid.Polygon(4);
  poly799637520.set_ps(0, new Avoid.Point(50625, 50896));
  poly799637520.set_ps(1, new Avoid.Point(50625, 50954));
  poly799637520.set_ps(2, new Avoid.Point(50540, 50954));
  poly799637520.set_ps(3, new Avoid.Point(50540, 50896));
  new Avoid.ShapeRef(router, poly799637520, 799637520);

  const poly60349320 = new Avoid.Polygon(4);
  poly60349320.set_ps(0, new Avoid.Point(50904, 51025));
  poly60349320.set_ps(1, new Avoid.Point(50904, 51110));
  poly60349320.set_ps(2, new Avoid.Point(50846, 51110));
  poly60349320.set_ps(3, new Avoid.Point(50846, 51025));
  new Avoid.ShapeRef(router, poly60349320, 60349320);

  const poly119851894 = new Avoid.Polygon(4);
  poly119851894.set_ps(0, new Avoid.Point(51179, 51225));
  poly119851894.set_ps(1, new Avoid.Point(51179, 51310));
  poly119851894.set_ps(2, new Avoid.Point(51121, 51310));
  poly119851894.set_ps(3, new Avoid.Point(51121, 51225));
  new Avoid.ShapeRef(router, poly119851894, 119851894);

  const poly233164275 = new Avoid.Polygon(4);
  poly233164275.set_ps(0, new Avoid.Point(51604, 51200));
  poly233164275.set_ps(1, new Avoid.Point(51604, 51285));
  poly233164275.set_ps(2, new Avoid.Point(51546, 51285));
  poly233164275.set_ps(3, new Avoid.Point(51546, 51200));
  new Avoid.ShapeRef(router, poly233164275, 233164275);

  const poly807558175 = new Avoid.Polygon(4);
  poly807558175.set_ps(0, new Avoid.Point(51604, 51000));
  poly807558175.set_ps(1, new Avoid.Point(51604, 51085));
  poly807558175.set_ps(2, new Avoid.Point(51546, 51085));
  poly807558175.set_ps(3, new Avoid.Point(51546, 51000));
  new Avoid.ShapeRef(router, poly807558175, 807558175);

  const poly108859552 = new Avoid.Polygon(4);
  poly108859552.set_ps(0, new Avoid.Point(51560, 50721));
  poly108859552.set_ps(1, new Avoid.Point(51560, 50779));
  poly108859552.set_ps(2, new Avoid.Point(51475, 50779));
  poly108859552.set_ps(3, new Avoid.Point(51475, 50721));
  new Avoid.ShapeRef(router, poly108859552, 108859552);

  const poly404900496 = new Avoid.Polygon(4);
  poly404900496.set_ps(0, new Avoid.Point(51525, 50946));
  poly404900496.set_ps(1, new Avoid.Point(51525, 51004));
  poly404900496.set_ps(2, new Avoid.Point(51440, 51004));
  poly404900496.set_ps(3, new Avoid.Point(51440, 50946));
  new Avoid.ShapeRef(router, poly404900496, 404900496);

  const poly620445000 = new Avoid.Polygon(4);
  poly620445000.set_ps(0, new Avoid.Point(51029, 51225));
  poly620445000.set_ps(1, new Avoid.Point(51029, 51310));
  poly620445000.set_ps(2, new Avoid.Point(50971, 51310));
  poly620445000.set_ps(3, new Avoid.Point(50971, 51225));
  new Avoid.ShapeRef(router, poly620445000, 620445000);

  const srcPt450684531 = new Avoid.ConnEnd(new Avoid.Point(51165, 50750));
  const dstPt450684531 = new Avoid.ConnEnd(shapeRef223927132, 2147483646);
  const connRef450684531 = new Avoid.ConnRef(
    router,
    srcPt450684531,
    dstPt450684531
  );
  connRef450684531.setRoutingType(2);

  const srcPt135371350 = new Avoid.ConnEnd(shapeRef223927132, 2147483646);
  const dstPt135371350 = new Avoid.ConnEnd(new Avoid.Point(51250, 50935));
  const connRef135371350 = new Avoid.ConnRef(
    router,
    srcPt135371350,
    dstPt135371350
  );
  connRef135371350.setRoutingType(2);

  const srcPt143333770 = new Avoid.ConnEnd(new Avoid.Point(51485, 50750));
  const dstPt143333770 = new Avoid.ConnEnd(shapeRef223927132, 2147483646);
  const connRef143333770 = new Avoid.ConnRef(
    router,
    srcPt143333770,
    dstPt143333770
  );
  connRef143333770.setRoutingType(2);

  const srcPt102966575 = new Avoid.ConnEnd(new Avoid.Point(50615, 50925));
  const dstPt102966575 = new Avoid.ConnEnd(shapeRef223927132, 2147483646);
  const connRef102966575 = new Avoid.ConnRef(
    router,
    srcPt102966575,
    dstPt102966575
  );
  connRef102966575.setRoutingType(2);

  const srcPt68998920 = new Avoid.ConnEnd(shapeRef223927132, 2147483646);
  const dstPt68998920 = new Avoid.ConnEnd(new Avoid.Point(50975, 50815));
  const connRef68998920 = new Avoid.ConnRef(
    router,
    srcPt68998920,
    dstPt68998920
  );
  connRef68998920.setRoutingType(2);

  const srcPt1625709 = new Avoid.ConnEnd(shapeRef223927132, 2147483646);
  const dstPt1625709 = new Avoid.ConnEnd(new Avoid.Point(50875, 51035));
  const connRef1625709 = new Avoid.ConnRef(router, srcPt1625709, dstPt1625709);
  connRef1625709.setRoutingType(2);

  const srcPt34178450 = new Avoid.ConnEnd(shapeRef223927132, 2147483646);
  const dstPt34178450 = new Avoid.ConnEnd(new Avoid.Point(51010, 51000));
  const connRef34178450 = new Avoid.ConnRef(
    router,
    srcPt34178450,
    dstPt34178450
  );
  connRef34178450.setRoutingType(2);

  const srcPt7982176 = new Avoid.ConnEnd(new Avoid.Point(50675, 51260));
  const dstPt7982176 = new Avoid.ConnEnd(shapeRef219926511, 2147483646);
  const connRef7982176 = new Avoid.ConnRef(router, srcPt7982176, dstPt7982176);
  connRef7982176.setRoutingType(2);

  const srcPt197177982 = new Avoid.ConnEnd(new Avoid.Point(50750, 51250));
  const dstPt197177982 = new Avoid.ConnEnd(new Avoid.Point(50750, 51260));
  const connRef197177982 = new Avoid.ConnRef(
    router,
    srcPt197177982,
    dstPt197177982
  );
  connRef197177982.setRoutingType(2);

  const srcPt398066432 = new Avoid.ConnEnd(shapeRef219926511, 2147483646);
  const dstPt398066432 = new Avoid.ConnEnd(new Avoid.Point(50850, 51260));
  const connRef398066432 = new Avoid.ConnRef(
    router,
    srcPt398066432,
    dstPt398066432
  );
  connRef398066432.setRoutingType(2);

  const srcPt314512308 = new Avoid.ConnEnd(new Avoid.Point(51000, 51235));
  const dstPt314512308 = new Avoid.ConnEnd(shapeRef219926511, 2147483646);
  const connRef314512308 = new Avoid.ConnRef(
    router,
    srcPt314512308,
    dstPt314512308
  );
  connRef314512308.setRoutingType(2);

  const srcPt182776308 = new Avoid.ConnEnd(new Avoid.Point(51075, 51225));
  const dstPt182776308 = new Avoid.ConnEnd(new Avoid.Point(51075, 51165));
  const connRef182776308 = new Avoid.ConnRef(
    router,
    srcPt182776308,
    dstPt182776308
  );
  connRef182776308.setRoutingType(2);

  const srcPt96504835 = new Avoid.ConnEnd(new Avoid.Point(51150, 51235));
  const dstPt96504835 = new Avoid.ConnEnd(shapeRef219926511, 2147483646);
  const connRef96504835 = new Avoid.ConnRef(
    router,
    srcPt96504835,
    dstPt96504835
  );
  connRef96504835.setRoutingType(2);

  const srcPt118099300 = new Avoid.ConnEnd(new Avoid.Point(51425, 51210));
  const dstPt118099300 = new Avoid.ConnEnd(shapeRef223927132, 2147483646);
  const connRef118099300 = new Avoid.ConnRef(
    router,
    srcPt118099300,
    dstPt118099300
  );
  connRef118099300.setRoutingType(2);

  const srcPt176080410 = new Avoid.ConnEnd(shapeRef223927132, 2147483646);
  const dstPt176080410 = new Avoid.ConnEnd(new Avoid.Point(51575, 51210));
  const connRef176080410 = new Avoid.ConnRef(
    router,
    srcPt176080410,
    dstPt176080410
  );
  connRef176080410.setRoutingType(2);

  const srcPt426666001 = new Avoid.ConnEnd(new Avoid.Point(51500, 51210));
  const dstPt426666001 = new Avoid.ConnEnd(new Avoid.Point(51500, 51200));
  const connRef426666001 = new Avoid.ConnRef(
    router,
    srcPt426666001,
    dstPt426666001
  );
  connRef426666001.setRoutingType(2);

  const srcPt795762792 = new Avoid.ConnEnd(new Avoid.Point(51650, 51210));
  const dstPt795762792 = new Avoid.ConnEnd(shapeRef223927132, 2147483646);
  const connRef795762792 = new Avoid.ConnRef(
    router,
    srcPt795762792,
    dstPt795762792
  );
  connRef795762792.setRoutingType(2);

  const srcPt467016913 = new Avoid.ConnEnd(shapeRef219926511);
  const dstPt467016913 = new Avoid.ConnEnd(new Avoid.Point(51575, 51010));
  const connRef467016913 = new Avoid.ConnRef(
    router,
    srcPt467016913,
    dstPt467016913
  );
  connRef467016913.setRoutingType(2);

  const srcPt45740440 = new Avoid.ConnEnd(new Avoid.Point(51835, 50975));
  const dstPt45740440 = new Avoid.ConnEnd(shapeRef219926511, 2147483646);
  const connRef45740440 = new Avoid.ConnRef(
    router,
    srcPt45740440,
    dstPt45740440
  );
  connRef45740440.setRoutingType(2);

  const srcPt985644192 = new Avoid.ConnEnd(new Avoid.Point(51515, 50975));
  const dstPt985644192 = new Avoid.ConnEnd(shapeRef219926511, 2147483646);
  const connRef985644192 = new Avoid.ConnRef(
    router,
    srcPt985644192,
    dstPt985644192
  );
  connRef985644192.setRoutingType(2);

  return [router, shapeRef219926511];
}

function route() {
  const [router] = prepareRouter();
  router.processTransaction();
  Avoid.destroy(router);
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
  Avoid.destroy(router);

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
  Avoid.destroy(router);

  const mean =
    measurements.reduce((acc, val) => acc + val, 0) / measurements.length;
  console.log("Test 3, mean: ", mean);
}

// wait for page loading and run benchmark
setTimeout(() => test_1(), 2000);
// setTimeout(() => test_2(), 2000);
// setTimeout(() => test_3(), 2000);
