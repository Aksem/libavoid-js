import initAvoid from "./generated/libavoid.js";
import { createAvoidLibObj } from "../../src/common.js";

export { Point, Rect } from "../../src/geometry.js";
export const AvoidLib = createAvoidLibObj(initAvoid);
