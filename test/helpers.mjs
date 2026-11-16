// Shared helpers for libavoid-js tests.
import { test } from "vitest";

export const IS_BROWSER = typeof window !== "undefined" && typeof document !== "undefined";

// Binding tests run against the published bundle, the one users get from npm:
//  - Node ("node" vitest project): dist/index-node.mjs
//  - Browser ("browser" vitest project, Chromium): dist/index.js
// test/global-setup.mjs rebuilds dist/ before the run.
export const BUILDS = IS_BROWSER
  ? [{ name: "dist", load: () => import("../dist/index.js") }]
  : [{ name: "dist", load: () => import("../dist/index-node.mjs") }];

export async function loadAvoid(build) {
  const { AvoidLib } = await build.load();
  if (!AvoidLib.avoidLib) {
    await AvoidLib.load();
  }
  return AvoidLib.getInstance();
}

/**
 * `it` for binding tests of one build, with per-test fixtures:
 *
 * - `Avoid`: the loaded module.
 * - `newRouter(flags = Avoid.RouterFlag.PolyLineRouting)`: `new
 *   Avoid.Router(flags)`, taking the same flags as the public API. Every
 *   router a test creates is deleted after the test, also when an assertion
 *   fails.
 *
 * Nothing is shared between tests, so they stay independent even if run
 * concurrently. Usage:
 *
 *   describe.each(BUILDS)("$name build: ...", (build) => {
 *     const it = bindingTest(build);
 *     it("...", ({ Avoid, newRouter }) => {
 *       const router = newRouter(Avoid.RouterFlag.OrthogonalRouting);
 *     });
 *   });
 */
export function bindingTest(build) {
  return test.extend({
    // eslint-disable-next-line no-empty-pattern -- Vitest requires a destructuring pattern.
    Avoid: async ({}, use) => {
      await use(await loadAvoid(build));
    },
    newRouter: async ({ Avoid }, use) => {
      const routers = [];
      await use((flags = Avoid.RouterFlag.PolyLineRouting) => {
        const router = new Avoid.Router(flags);
        routers.push(router);
        return router;
      });
      for (const router of routers) {
        if (!router.isDeleted()) router.delete();
      }
    },
  });
}

/** Converts Point[] (e.g. a route or polygon) into a plain array of [x, y]. */
export function toPoints(points) {
  return points.map((p) => [p.x, p.y]);
}

/** Plain [x, y][] of the connector's current display route. */
export function routeOf(connRef) {
  return toPoints(connRef.displayRoute());
}

export function segmentsOf(points) {
  const segments = [];
  for (let i = 0; i + 1 < points.length; i++) {
    segments.push([points[i], points[i + 1]]);
  }
  return segments;
}

export function isOrthogonal(points) {
  return segmentsOf(points).every(
    ([[x1, y1], [x2, y2]]) => x1 === x2 || y1 === y2,
  );
}

/** A RectLike for addShape/moveShape from two corners, plus its bounds. */
export function makeRect(minX, minY, maxX, maxY) {
  return {
    rect: { x: minX, y: minY, width: maxX - minX, height: maxY - minY },
    bounds: { minX, minY, maxX, maxY },
  };
}

/**
 * The highest pin class id allowed: libavoid's CONNECTIONPIN_CENTRE
 * (INT_MAX - 1).
 * One above it, INT_MAX, is CONNECTIONPIN_UNSET and is rejected.
 */
export const MAX_PIN_CLASS_ID = 2 ** 31 - 2;

/**
 * Invalid `AddOptions`, the `options` argument of addShape, addJunction and
 * addConnector, as `[name, options, ErrorType]` rows for `it.for`. Each method
 * runs the table in its own test.
 */
export const INVALID_ADD_OPTIONS = [
  ["a negative id", { id: -1 }, RangeError],
  ["a fractional id", { id: 1.5 }, RangeError],
  ["an id above 2^32 - 1", { id: 2 ** 32 }, RangeError],
  ["options that are not an object", 42, TypeError],
];
