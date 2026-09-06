import { AvoidLib } from '../dist/index-node.mjs';

function printRoutes(conns) {
  for (const [name, conn] of conns) {
    const route = conn.displayRoute();
    const points = [];
    for (let i = 0; i < route.size(); i++) {
      points.push(`(${route.at(i).x}, ${route.at(i).y})`);
    }
    console.log(`  ${name} route:`, points.join(' -> '));
  }
}

function createScenario(Avoid, { fixedJunction = false } = {}) {
  const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting.value);
  router.setRoutingParameter(Avoid.RoutingParameter.segmentPenalty.value, 50);
  router.setRoutingParameter(Avoid.RoutingParameter.idealNudgingDistance.value, 25);

  const shape1 = new Avoid.ShapeRef(router,
    new Avoid.Rectangle(new Avoid.Point(100, 100), new Avoid.Point(200, 200)), 1);
  const shape2 = new Avoid.ShapeRef(router,
    new Avoid.Rectangle(new Avoid.Point(400, 100), new Avoid.Point(500, 200)), 2);
  const shape3 = new Avoid.ShapeRef(router,
    new Avoid.Rectangle(new Avoid.Point(400, 300), new Avoid.Point(500, 400)), 3);

  const junction = new Avoid.JunctionRef(router, new Avoid.Point(300, 200), 100);
  if (fixedJunction) {
    junction.setPositionFixed(true);
  }

  const conn1 = new Avoid.ConnRef(router,
    new Avoid.ConnEnd(new Avoid.Point(150, 150)),
    Avoid.ConnEnd.createConnEndFromJunctionRef(junction), 201);
  const conn2 = new Avoid.ConnRef(router,
    Avoid.ConnEnd.createConnEndFromJunctionRef(junction),
    new Avoid.ConnEnd(new Avoid.Point(450, 150)), 202);
  const conn3 = new Avoid.ConnRef(router,
    Avoid.ConnEnd.createConnEndFromJunctionRef(junction),
    new Avoid.ConnEnd(new Avoid.Point(450, 350)), 203);

  router.processTransaction();

  const pos = junction.position();
  const rec = junction.recommendedPosition();
  console.log(`  Junction position: (${pos.x}, ${pos.y})`);
  console.log(`  Recommended position: (${rec.x}, ${rec.y})`);
  console.log(`  Position fixed: ${junction.positionFixed()}`);
  printRoutes([['conn1', conn1], ['conn2', conn2], ['conn3', conn3]]);

  // Cleanup
  router.deleteConnector(conn1);
  router.deleteConnector(conn2);
  router.deleteConnector(conn3);
  router.deleteJunction(junction);
  router.processTransaction();
  router.delete();
}

async function main() {
  await AvoidLib.load();
  const Avoid = AvoidLib.getInstance();

  console.log("=== 1. Router-optimized junction (default) ===");
  createScenario(Avoid);

  console.log("\n=== 2. Fixed junction at (300, 200) ===");
  createScenario(Avoid, { fixedJunction: true });

  console.log("\nDone!");
}

main();
