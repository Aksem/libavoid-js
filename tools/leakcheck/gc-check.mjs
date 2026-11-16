// JS-side leak check, run with `node --expose-gc` (see run.mjs): callbacks held
// by C++ (emval) and the adapter's ownership records must not keep objects
// alive after they are deleted. Uses the sanitizer build like the scenarios:
// it is the one `npm run leakcheck` rebuilds from the current bindings, while
// src/generated may be stale.
import { createAvoidLibObj } from "../../src/common.js";

const sanitizerBuild = new URL("../../build/dist_sanitizer/libavoid.mjs", import.meta.url);
const { default: initAvoid } = await import(sanitizerBuild.href);
const AvoidLib = createAvoidLibObj(initAvoid);
await AvoidLib.load();
const Avoid = AvoidLib.getInstance();

const collected = new Set();
const registry = new FinalizationRegistry((label) => collected.add(label));
let failures = 0;

async function expectCollected(labels, title) {
  // Finalizers run in a later task than the GC that freed their objects, so
  // wait after each gc() before checking again.
  for (let i = 0; i < 20 && labels.some((l) => !collected.has(l)); i++) {
    globalThis.gc();
    await new Promise((resolve) => setTimeout(resolve, 10));
  }
  const retained = labels.filter((l) => !collected.has(l));
  if (retained.length) failures++;
  console.log(`${retained.length ? "RETAINED" : "ok      "}  ${title}${retained.length ? `: ${retained.join(", ")}` : ""}`);
}

// Each block runs in its own function so that nothing but the registry refers
// to the objects afterwards.
(() => {
  const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
  const shape = router.addShape({ x: 0, y: 0, width: 10, height: 10 });
  const pin = shape.addPin({ classId: 1, x: 0.5, y: 0.5 });
  const junction = router.addJunction({ x: 50, y: 50 });
  const conn = router.addConnector({ shape, pin: 1 }, { junction });
  const callback = () => conn.displayRoute();
  conn.setCallback(callback);
  router.processTransaction();
  router.delete();
  for (const [object, label] of [[router, "router"], [shape, "shape"], [pin, "pin"],
    [junction, "junction"], [conn, "connector"], [callback, "callback"]]) {
    registry.register(object, `delete:${label}`);
  }
})();
await expectCollected(["router", "shape", "pin", "junction", "connector", "callback"].map((l) => `delete:${l}`),
  "router.delete() releases handles and callbacks");

const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);

(() => {
  const conn = router.addConnector({ x: 0, y: 0 }, { x: 10, y: 10 });
  const callback = () => {};
  conn.setCallback(callback);
  router.processTransaction();
  conn.delete();
  registry.register(conn, "conn:connector");
  registry.register(callback, "conn:callback");
})();
await expectCollected(["conn:connector", "conn:callback"], "connector.delete() releases its handle and callback");

const keptConn = router.addConnector({ x: 0, y: 0 }, { x: 10, y: 10 });
(() => {
  const old = () => {};
  keptConn.setCallback(old);
  keptConn.setCallback(() => {});
  registry.register(old, "replace:callback");
})();
await expectCollected(["replace:callback"], "setCallback() releases the replaced callback");

(() => {
  for (let i = 0; i < 200; i++) {
    const shape = router.addShape({ x: i, y: 0, width: 5, height: 5 });
    const pin = shape.addPin({ classId: 1, x: 0, y: 0 });
    router.processTransaction();
    shape.delete();
    registry.register(shape, `churn:shape${i}`);
    registry.register(pin, `churn:pin${i}`);
  }
  router.processTransaction();
})();
await expectCollected(Array.from({ length: 200 }, (_, i) => [`churn:shape${i}`, `churn:pin${i}`]).flat(),
  "deleted shapes and pins are collectable on a long-lived router");

// Added but never processed: must be released by router.delete() even while
// the (deleted) router object itself is still referenced.
(() => {
  const shape = router.addShape({ x: 0, y: 0, width: 1, height: 1 });
  registry.register(shape, "pending:shape");
})();
router.delete();
await expectCollected(["pending:shape"], "router.delete() releases objects whose add was still pending");

process.exitCode = failures ? 1 : 0;
