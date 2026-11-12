// Methods whose first parameter is a libavoid enum: [class, method, enum].
const ENUM_PARAMETERS = [
  ["Router", "setRoutingParameter", "RoutingParameter"],
  ["Router", "setRoutingOption", "RoutingOption"],
  ["ConnRef", "setRoutingType", "ConnType"],
];

// Enums are plain numbers, which embind passes to C++ unchecked: `undefined`
// (e.g. a misspelt enum key) would silently become 0, and an out-of-range
// number would index past libavoid's parameter arrays. Validate the enum
// arguments here, before entering wasm: the module is built with
// ABORT_ON_WASM_EXCEPTIONS, so an exception thrown inside wasm would abort it.
function installEnumArgumentChecks(avoid) {
  for (const [className, methodName, enumName] of ENUM_PARAMETERS) {
    // Absent only for stub modules (e.g. in tests); the real module has all.
    if (!avoid[className] || !avoid[enumName]) continue;
    const proto = avoid[className].prototype;
    const original = proto[methodName];
    const validValues = new Set(Object.values(avoid[enumName]));
    proto[methodName] = function (value, ...rest) {
      if (typeof value !== "number") {
        throw new TypeError(
          `${className}.${methodName}: ${enumName} must be a number ` +
            `(e.g. Avoid.${enumName}.<name>), got ${value === null ? "null" : typeof value}`,
        );
      }
      if (!validValues.has(value)) {
        throw new RangeError(`${className}.${methodName}: invalid ${enumName} value ${value}`);
      }
      return original.call(this, value, ...rest);
    };
  }
}

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
        installEnumArgumentChecks(avoidLib);
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
