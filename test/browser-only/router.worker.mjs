// Runs inside a dedicated Web Worker (see worker.test.mjs): loads the browser
// bundle, routes one connector between two shapes and posts the route back.
import { AvoidLib } from "../../dist/index.js";

try {
  await AvoidLib.load();
  const Avoid = AvoidLib.getInstance();
  const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
  const a = router.addShape({ x: 0, y: 0, width: 20, height: 20 });
  const b = router.addShape({ x: 100, y: 60, width: 20, height: 20 });
  a.addPin({ classId: 1, x: 0.5, y: 0.5 }).setExclusive(false);
  b.addPin({ classId: 1, x: 0.5, y: 0.5 }).setExclusive(false);
  const conn = router.addConnector({ shape: a, pin: 1 }, { shape: b, pin: 1 });
  router.processTransaction();
  const route = conn.displayRoute().map((p) => [p.x, p.y]);
  router.delete();
  postMessage({ route });
} catch (error) {
  postMessage({ error: String(error?.message ?? error) });
}
