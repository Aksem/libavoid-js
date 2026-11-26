import { installApi } from "./api.js";

export const createAvoidLibObj = (initAvoid) => {
  return {
    avoidLib: undefined,
    async load(filePath = undefined) {
      if (!this.avoidLib) {
        // Pass `locateFile` only when the caller gives an explicit path.
        // Without it, the Emscripten loader falls back to the literal
        // `new URL("libavoid.wasm", import.meta.url)`, which bundlers
        // recognise: they emit the .wasm as an asset
        // and rewrite the URL to point at it. If `locateFile` is always set,
        // that fallback never runs and the URL is built from the module's
        // script directory instead, which breaks bundled builds
        const moduleArg = filePath === undefined ? {} : {
          locateFile: (path, prefix) => path.endsWith(".wasm") ? filePath : prefix + path
        };
        const avoidLib = await initAvoid(moduleArg);
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
