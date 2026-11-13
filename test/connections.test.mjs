import { afterEach, describe, expect, it } from "vitest";
import { BUILDS, isOrthogonal, loadAvoid, makeRect, pointEnd, routeOf } from "./helpers.mjs";

describe.each(BUILDS)("$name build: pins, junctions, checkpoints", (build) => {
  let Avoid;
  let router;

  const newRouter = async (flagName) => {
    Avoid = await loadAvoid(build);
    router = new Avoid.Router(Avoid.RouterFlag[flagName]);
  };

  afterEach(() => {
    router?.delete();
    router = undefined;
  });

  it("connectors attach to shape connection pins", async () => {
    await newRouter("OrthogonalRouting");
    const shape = new Avoid.ShapeRef(router, makeRect(Avoid, 0, 0, 40, 20).poly);
    // Bottom-centre pin, proportional offsets, connectors leave downwards.
    const pin = new Avoid.ShapeConnectionPin(shape, 1, 0.5, 1, true, 0, Avoid.ConnDirFlag.ConnDirDown);
    const conn = new Avoid.ConnRef(router, new Avoid.ConnEnd(shape, 1), pointEnd(Avoid, 100, 100));
    router.processTransaction();

    const route = routeOf(conn);
    expect(route[0]).toEqual([20, 20]);
    expect(route.at(-1)).toEqual([100, 100]);
    expect(isOrthogonal(route)).toBe(true);
    // Leaves the pin in its allowed direction.
    expect(route[1][0]).toBe(20);
    expect(route[1][1]).toBeGreaterThan(20);

    const pos = pin.position();
    expect([pos.x, pos.y]).toEqual([20, 20]);
    expect(pin.directions()).toBe(Avoid.ConnDirFlag.ConnDirDown);
  });

  it("pins with absolute offsets", async () => {
    await newRouter("OrthogonalRouting");
    const shape = new Avoid.ShapeRef(router, makeRect(Avoid, 0, 0, 40, 20).poly);
    // proportional = false: offsets in absolute units from the top-left.
    const pin = new Avoid.ShapeConnectionPin(shape, 2, 40, 5, false, 0, Avoid.ConnDirFlag.ConnDirRight);
    const pos = pin.position();
    expect([pos.x, pos.y]).toEqual([40, 5]);
  });

  it("legacy 6-argument pin constructor uses proportional offsets", async () => {
    await newRouter("OrthogonalRouting");
    const shape = new Avoid.ShapeRef(router, makeRect(Avoid, 0, 0, 40, 20).poly);
    // libavoid's "old constructor, provided for compatibility": no
    // `proportional` flag, offsets are always proportional.
    const pin = new Avoid.ShapeConnectionPin(shape, 2, 1, 0.25, 0, Avoid.ConnDirFlag.ConnDirRight);
    const pos = pin.position();
    expect([pos.x, pos.y]).toEqual([40, 5]);
  });

  it("pin position on an explicit polygon", async () => {
    await newRouter("OrthogonalRouting");
    const shape = new Avoid.ShapeRef(router, makeRect(Avoid, 0, 0, 40, 20).poly);
    const pin = new Avoid.ShapeConnectionPin(shape, 2, 1, 0.5, true, 0, Avoid.ConnDirFlag.ConnDirRight);

    // Where the pin would be if the shape had this polygon.
    const moved = makeRect(Avoid, 100, 100, 200, 140).poly;
    const pos = pin.position(moved);
    expect([pos.x, pos.y]).toEqual([200, 120]);
    moved.delete();

    // An empty polygon falls back to the shape's current polygon.
    const empty = new Avoid.Polygon();
    const fallback = pin.position(empty);
    expect([fallback.x, fallback.y]).toEqual([40, 10]);
    empty.delete();
  });

  it("pin exclusivity round-trips", async () => {
    await newRouter("OrthogonalRouting");
    const shape = new Avoid.ShapeRef(router, makeRect(Avoid, 0, 0, 40, 20).poly);
    const pin = new Avoid.ShapeConnectionPin(shape, 1, 0.5, 0.5, true, 0, Avoid.ConnDirFlag.ConnDirAll);
    pin.setExclusive(false);
    expect(pin.isExclusive()).toBe(false);
    pin.setExclusive(true);
    expect(pin.isExclusive()).toBe(true);
  });

  it("connectors meet at a junction", async () => {
    await newRouter("PolyLineRouting");
    const junction = new Avoid.JunctionRef(router, new Avoid.Point(50, 50), 77);
    expect(junction.id()).toBe(77);
    const sources = [[0, 50], [100, 50], [50, 100]];
    const conns = sources.map(
      ([x, y]) =>
        new Avoid.ConnRef(
          router,
          pointEnd(Avoid, x, y),
          Avoid.ConnEnd.createConnEndFromJunctionRef(junction),
        ),
    );
    router.processTransaction();

    const pos = junction.position();
    expect([pos.x, pos.y]).toEqual([50, 50]);
    conns.forEach((conn, i) => {
      const route = routeOf(conn);
      expect(route[0]).toEqual(sources[i]);
      expect(route.at(-1)).toEqual([50, 50]);
    });
  });

  it("moveJunction and setPositionFixed", async () => {
    await newRouter("PolyLineRouting");
    // Without an id argument libavoid assigns a unique non-zero id.
    const junction = new Avoid.JunctionRef(router, new Avoid.Point(50, 50));
    expect(junction.id()).toBeGreaterThan(0);
    const conn = new Avoid.ConnRef(
      router,
      pointEnd(Avoid, 0, 0),
      Avoid.ConnEnd.createConnEndFromJunctionRef(junction),
    );
    router.processTransaction();

    junction.setPositionFixed(true);
    expect(junction.positionFixed()).toBe(true);

    router.moveJunction_delta(junction, 10, 0);
    router.processTransaction();
    expect(routeOf(conn).at(-1)).toEqual([60, 50]);

    router.moveJunction_point(junction, new Avoid.Point(0, 80));
    router.processTransaction();
    expect(routeOf(conn).at(-1)).toEqual([0, 80]);
  });

  it("routes pass through checkpoints", async () => {
    await newRouter("PolyLineRouting");
    const conn = new Avoid.ConnRef(router, pointEnd(Avoid, 0, 0), pointEnd(Avoid, 100, 0));
    const checkpoints = new Avoid.CheckpointVector();
    checkpoints.push_back(new Avoid.Checkpoint(new Avoid.Point(50, 50)));
    conn.setRoutingCheckpoints(checkpoints);
    router.processTransaction();

    expect(routeOf(conn)).toEqual([[0, 0], [50, 50], [100, 0]]);
    const stored = conn.routingCheckpoints();
    expect(stored.size()).toBe(1);
    stored.delete();
    checkpoints.delete();
  });

  it("hate-crossings flag round-trips", async () => {
    await newRouter("OrthogonalRouting");
    const conn = new Avoid.ConnRef(router, pointEnd(Avoid, 0, 0), pointEnd(Avoid, 100, 0));
    expect(conn.doesHateCrossings()).toBe(false);
    conn.setHateCrossings(true);
    expect(conn.doesHateCrossings()).toBe(true);
  });
});
