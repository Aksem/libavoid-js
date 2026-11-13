import { createAvoidLibObj } from './common.js';
import initAvoid from "./generated/libavoid.js";

export { Point, Rect } from './geometry.js';
export const AvoidLib = createAvoidLibObj(initAvoid);
