import { installApi } from "./api.js";

export const createAvoidLibObj = (initAvoid) => {
  return {
    avoidLib: undefined,
    async load(filePath = undefined) {
      if (!this.avoidLib) {
        function locateFile(path, prefix) {
          if (filePath !== undefined && path.endsWith(".wasm")) return filePath
          return prefix + path
        }
        const avoidLib = await initAvoid({'locateFile' : locateFile});
        installApi(avoidLib);
        this.avoidLib = avoidLib;
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
};
