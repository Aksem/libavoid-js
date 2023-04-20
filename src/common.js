export const createAvoidLibObj = (initAvoid) => {
  return {
    avoidLib: undefined,
    async load(filePath = undefined) {
      if (!this.avoidLib) {
        function locateFile(path, prefix) {
          if (filePath !== undefined && path.endsWith(".wasm")) return filePath
          return prefix + path
        }
        this.avoidLib = await initAvoid({'locateFile' : locateFile});
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
