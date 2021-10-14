import initAvoid from "./generated/libavoid.js";

export const AvoidLib = {
  avoidLib: undefined,
  async load() {
    if (!this.avoidLib) {
      this.avoidLib = await initAvoid();
    } else {
      console.log("Avoid library is already initialized");
    }
  },

  getInstance() {
    if (!this.avoidLib) {
      throw new Error("Avoid library should be initialized before using");
    }
    return this.avoidLib;
  },
};
