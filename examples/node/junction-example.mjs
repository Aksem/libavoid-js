import { AvoidLib } from '../dist/index-node.mjs';

function printRoutes(conns) {
  for (const [name, conn] of conns) {
    const points = conn.displayRoute().map(({ x, y }) => `(${x}, ${y})`);
    console.log(`  ${name} route:`, points.join(' -> '));
  }
}

function createScenario(Avoid, { fixedJunction = false } = {}) {
  const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
  router.setRoutingParameter(Avoid.RoutingParameter.segmentPenalty, 50);
  router.setRoutingParameter(Avoid.RoutingParameter.idealNudgingDistance, 25);
  router.setRoutingParameter(Avoid.RoutingParameter.shapeBufferDistance, 40);

  // Shapes: top-left corner plus size.
  router.addShape({ x: 100, y: 100, width: 100, height: 100 }, { id: 1 });
  router.addShape({ x: 400, y: 100, width: 100, height: 100 }, { id: 2 });
  router.addShape({ x: 400, y: 300, width: 100, height: 100 }, { id: 3 });

  const junction = router.addJunction({ x: 300, y: 200 }, { id: 100 });
  if (fixedJunction) {
    junction.setPositionFixed(true);
  }

  const conn1 = router.addConnector({ x: 150, y: 150 }, { junction }, { id: 201 });
  const conn2 = router.addConnector({ junction }, { x: 450, y: 150 }, { id: 202 });
  const conn3 = router.addConnector({ junction }, { x: 450, y: 350 }, { id: 203 });

  router.processTransaction();

  const pos = junction.position();
  const rec = junction.recommendedPosition();
  console.log(`  Junction position: (${pos.x}, ${pos.y})`);
  console.log(`  Recommended position: (${rec.x}, ${rec.y})`);
  console.log(`  Position fixed: ${junction.positionFixed()}`);
  printRoutes([['conn1', conn1], ['conn2', conn2], ['conn3', conn3]]);

  // Cleanup: deleting the router frees the shapes, junction and connectors.
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
