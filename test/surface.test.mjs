// The public surface of the package: what it exports, and the class
// hierarchy and ownership rules of the handles the router hands out.
import { describe, expect } from "vitest";
import { BUILDS, bindingTest } from "./helpers.mjs";

describe.each(BUILDS)("$name build: public surface", (build) => {
  const it = bindingTest(build);

  it("the package exports only AvoidLib; everything else is on the module", async () => {
    expect(Object.keys(await build.load())).toEqual(["AvoidLib"]);
  });

  it("router-owned classes cannot be constructed directly", ({ Avoid }) => {
    for (const className of ["ShapeRef", "JunctionRef", "ConnRef", "ShapeConnectionPin", "Obstacle"]) {
      expect(() => new Avoid[className](), className).toThrow();
    }
  });

  it("handles are instances of their classes", ({ Avoid, newRouter }) => {
    const router = newRouter(Avoid.RouterFlag.PolyLineRouting);
    const shape = router.addShape({ x: 0, y: 0, width: 10, height: 10 });
    const junction = router.addJunction({ x: 50, y: 50 });
    expect(shape).toBeInstanceOf(Avoid.ShapeRef);
    expect(shape).toBeInstanceOf(Avoid.Obstacle);
    expect(junction).toBeInstanceOf(Avoid.JunctionRef);
    expect(shape.addPin({ classId: 1, x: 0, y: 0 })).toBeInstanceOf(Avoid.ShapeConnectionPin);
    expect(router.addConnector({ x: 0, y: 0 }, { junction })).toBeInstanceOf(Avoid.ConnRef);
  });
});
