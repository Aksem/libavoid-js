// LeakSanitizer scenarios. Each one builds something
// with the public API and must leave nothing allocated after router.delete().
// LeakSanitizer cannot see references held by JS, so every scenario deletes
// its routers before the check. run.mjs runs each scenario in its own process
// (LSan reports are cumulative).
//
// Fields: title, run(Avoid), and optionally
//  - expectLeak: the scenario must leak (positive control of the check itself);
//  - known: a known leak that does not fail the run (reason as text).

function fullScene(Avoid, router) {
  const { ConnDirFlag, ConnType, RoutingParameter } = Avoid;
  router.setRoutingParameter(RoutingParameter.shapeBufferDistance, 8);
  const shapes = [];
  for (let i = 0; i < 6; i++) {
    const shape = i % 2
      ? router.addShape({ x: i * 120, y: (i % 3) * 80, width: 60, height: 40 }, { id: 100 + i })
      : router.addShape([{ x: i * 120, y: 0 }, { x: i * 120 + 60, y: 10 }, { x: i * 120 + 30, y: 50 }]);
    shape.addPin({ classId: 1, x: 0.5, y: 0, directions: ConnDirFlag.ConnDirUp });
    shape.addPin({ classId: 2, x: 0.5, y: 1, directions: ConnDirFlag.ConnDirDown });
    shapes.push(shape);
  }
  const junction = router.addJunction({ x: 300, y: 250 });
  const conns = [
    router.addConnector({ shape: shapes[0], pin: 2 }, { shape: shapes[5], pin: 1 }),
    router.addConnector({ x: -50, y: -50, directions: ConnDirFlag.ConnDirRight }, { junction }),
    router.addConnector({ junction }, { shape: shapes[3], pin: 2 }),
    router.addConnector({ shape: shapes[1], pin: 1 }, { x: 700, y: 300 }),
  ];
  for (const conn of conns) conn.setCallback((c) => c.displayRoute());
  conns[0].setRoutingCheckpoints([{ x: 200, y: 200 }, { x: 400, y: 200, arrival: ConnDirFlag.ConnDirLeft }]);
  conns[1].setRoutingType(ConnType.ConnType_PolyLine);
  return { shapes, junction, conns };
}

function readEverything(Avoid, { shapes, junction, conns }) {
  for (const conn of conns) {
    conn.displayRoute();
    conn.routingCheckpoints();
    conn.hasValidRoute();
    conn.hasCrossingObstacles();
  }
  for (const shape of shapes) {
    shape.polygon();
    shape.position();
    shape.routingBox();
  }
  junction.position();
  junction.recommendedPosition();
  Avoid.offsetPolygon(shapes[0].polygon(), 3);
  Avoid.boundingRectPolygon(shapes[1].polygon());
  Avoid.offsetBoundingBox(shapes[2].polygon(), 1);
}

const both = (Avoid) => Avoid.RouterFlag.OrthogonalRouting | Avoid.RouterFlag.PolyLineRouting;

export const scenarios = {
  processed: {
    title: "processed scene: moves of all kinds, everything read",
    run(Avoid) {
      const router = new Avoid.Router(both(Avoid));
      const scene = fullScene(Avoid, router);
      router.processTransaction();
      readEverything(Avoid, scene);
      router.moveShape(scene.shapes[1], 10, 20);
      router.moveShape(scene.shapes[3], { x: 360, y: 100, width: 70, height: 50 });
      router.moveShape(scene.shapes[0], [{ x: 0, y: 0 }, { x: 70, y: 10 }, { x: 35, y: 60 }]);
      router.moveJunction(scene.junction, { x: 320, y: 260 });
      router.moveJunction(scene.junction, 5, 5);
      scene.conns[3].setDest({ x: 800, y: 50 });
      scene.conns[2].setSource({ shape: scene.shapes[4], pin: 1 });
      router.processTransaction();
      readEverything(Avoid, scene);
      router.delete();
    },
  },

  pending: {
    title: "router.delete() with every add still pending",
    run(Avoid) {
      const router = new Avoid.Router(both(Avoid));
      fullScene(Avoid, router);
      router.delete();
    },
  },

  pendingChanges: {
    title: "deletes, moves and adds still pending at router.delete()",
    run(Avoid) {
      const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
      const scene = fullScene(Avoid, router);
      router.processTransaction();
      scene.conns[0].delete();
      scene.shapes[2].delete();
      scene.shapes[4].addPin({ classId: 9, x: 0, y: 0 }).delete();
      router.moveShape(scene.shapes[1], 5, 5);
      router.addShape({ x: 900, y: 900, width: 10, height: 10 });
      router.addConnector({ x: 0, y: 0 }, { x: 1, y: 1 });
      router.delete();
    },
  },

  attachedDeletes: {
    title: "shape and junction deleted while connectors are attached",
    run(Avoid) {
      const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
      const scene = fullScene(Avoid, router);
      router.processTransaction();
      scene.shapes[0].delete();
      scene.junction.delete();
      router.processTransaction();
      readEverything(Avoid, {
        shapes: scene.shapes.slice(1, 4),
        junction: router.addJunction({ x: 1, y: 1 }),
        conns: [scene.conns[3]],
      });
      router.processTransaction();
      router.delete();
    },
  },

  hyperedges: {
    title: "hyperedge rerouting (libavoid adds and removes junctions itself)",
    run(Avoid) {
      const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
      router.setRoutingOption(Avoid.RoutingOption.improveHyperedgeRoutesMovingAddingAndDeletingJunctions, true);
      const shapes = [0, 1, 2, 3].map((i) =>
        router.addShape({ x: i * 150, y: (i % 2) * 200, width: 50, height: 50 }));
      const junction = router.addJunction({ x: 200, y: 100 });
      for (const shape of shapes) {
        shape.addPin({ classId: 1, x: 0.5, y: 0.5 });
        router.addConnector({ shape, pin: 1 }, { junction });
      }
      router.processTransaction();
      router.moveShape(shapes[0], 0, 120);
      router.processTransaction();
      router.delete();
    },
  },

  churn: {
    title: "add/delete churn on a long-lived router",
    run(Avoid) {
      const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
      const anchor = router.addShape({ x: 0, y: 0, width: 20, height: 20 });
      anchor.addPin({ classId: 1, x: 1, y: 0.5 });
      for (let i = 0; i < 50; i++) {
        const shape = router.addShape({ x: 100 + i, y: 0, width: 20, height: 20 });
        const pin = shape.addPin({ classId: 1, x: 0, y: 0.5 });
        const conn = router.addConnector({ shape: anchor, pin: 1 }, { shape, pin: 1 });
        conn.setCallback(() => {});
        router.processTransaction();
        if (i % 3 === 0) pin.delete();
        conn.delete();
        shape.delete();
        router.processTransaction();
      }
      router.delete();
    },
  },

  rejectedCalls: {
    title: "rejected calls never reach wasm",
    run(Avoid) {
      const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
      const shape = router.addShape({ x: 0, y: 0, width: 10, height: 10 });
      // [call, expected error name]. Each must be rejected by the JS
      // validation, whose messages start with "Class.method: ". Anything
      // else (no error, an embind or wasm error) fails the scenario.
      const attempts = [
        [() => router.addShape({ x: 0 }), "TypeError"],
        [() => router.addConnector({}, {}), "TypeError"],
        [() => shape.delete(), "Error"], // added in the same transaction
        [() => router.moveShape(shape, [{ x: 0, y: 0 }]), "RangeError"],
        [() => shape.addPin({ classId: 0, x: 0, y: 0 }), "RangeError"],
        [() => router.setRoutingParameter(99, 1), "RangeError"],
      ];
      for (let i = 0; i < 100; i++) {
        attempts.forEach(([attempt, expected], index) => {
          let error;
          try { attempt(); } catch (e) { error = e; }
          if (error?.name !== expected || !/^\w+\.\w+: /.test(error.message)) {
            throw new Error(`rejectedCalls: attempt #${index} was not rejected by the JS validation`
              + ` (expected ${expected}, got ${error ? `${error.name}: ${error.message}` : "no error"})`);
          }
        });
      }
      router.delete();
    },
  },

  junctionPins: {
    title: "several pins on one junction",
    run(Avoid) {
      const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
      const junction = router.addJunction({ x: 0, y: 0 });
      junction.addPin({ classId: 3 });
      junction.addPin({ classId: 4 });
      router.addConnector({ x: 50, y: 0 }, { junction });
      router.processTransaction();
      router.delete();
    },
  },

  control: {
    title: "positive control: a router that is never deleted",
    expectLeak: true,
    run(Avoid) {
      const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
      router.addShape({ x: 0, y: 0, width: 10, height: 10 });
      router.processTransaction();
    },
  },
};
