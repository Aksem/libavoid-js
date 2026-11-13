// Routing performance benchmarks (port of examples/benchmark2.js).
//
// Run with `npm run bench` (or `npx vitest bench --project "node (bench)"`).
// Vitest picks up *.bench.mjs files only in bench mode; `npm test` ignores them.
import { beforeAll, test } from "vitest";
import { BUILDS, loadAvoid } from "../helpers.mjs";

const SHAPE_SIZE = 120;
// Top-left corners of the shapes from examples/benchmark2.js.
const SHAPES = [
  [0, 680], [320, 1055], [320, 1225.5], [320, 1225], [320, 1565],
  [320, 1735], [320, 1905], [320, 2075], [640, 1605], [320, 2245],
  [640, 25], [320, 25], [0, 1900], [960, 2560], [640, 2522.5],
];

/**
 * Builds an orthogonal router with the first `shapeCount` SHAPES and
 * `connsPerPair` pin-to-pin connectors between every ordered pair of them
 * (including self-loops), i.e. shapeCount^2 * connsPerPair connectors. Nothing is routed yet.
 */
function buildScene(Avoid, shapeCount, connsPerPair) {
  const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
  const shapes = SHAPES.slice(0, shapeCount).map(([x, y]) => {
    const shape = router.addShape({ x, y, width: SHAPE_SIZE, height: SHAPE_SIZE });
    shape.addPin({ classId: 1, x: 0.5, y: 0.5 }).setExclusive(false);
    return shape;
  });
  for (const a of shapes) {
    for (const b of shapes) {
      for (let k = 0; k < connsPerPair; k++) {
        router.addConnector({ shape: a, pin: 1 }, { shape: b, pin: 1 });
      }
    }
  }
  return router;
}

const dist = BUILDS.find((b) => b.name === "dist");

let Avoid;
beforeAll(async () => {
  Avoid = await loadAvoid(dist);
});

// processTransaction() cost grows steeply with the scene (dist build, Node 22):
// ~60 ms for 100 connectors, ~1.6 s for 225 and ~39 s for the full
// examples/benchmark2.js scene (450), so iteration budgets are kept small.
const CASES = [
  { shapes: 10, connsPerPair: 1, iterations: 10, warmupIterations: 2 },
  { shapes: 15, connsPerPair: 1, iterations: 5, warmupIterations: 1 },
  // examples/benchmark2.js
  { shapes: 15, connsPerPair: 2, iterations: 3, warmupIterations: 0, timeout: 300_000 },
];

for (const { shapes, connsPerPair, iterations, warmupIterations, timeout } of CASES) {
  const connectors = shapes ** 2 * connsPerPair;
  test(`orthogonal routing: ${shapes} shapes, ${connectors} connectors`, { timeout }, async ({ bench }) => {
    let router;
    // Scene setup/teardown runs outside the timed window; only
    // processTransaction() is measured.
    await bench(
      `processTransaction (${connectors} connectors)`,
      {
        beforeEach: () => { router = buildScene(Avoid, shapes, connsPerPair); },
        afterEach: () => { router.delete(); },
      },
      () => { router.processTransaction(); },
    ).run({ iterations, time: 0, warmupIterations, warmupTime: 0 });
  });
}
