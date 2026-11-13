// examples/debug-src/generated/libavoid.js
async function initAvoidModule(moduleArg = {}) {
  var Module = moduleArg;
  (function() {
    function humanReadableVersionToPacked(str) {
      str = str.split("-")[0];
      let vers = str.split(".").slice(0, 3);
      while (vers.length < 3) vers.push("00");
      vers = vers.map((n, i, arr) => n.padStart(2, "0"));
      return vers.join("");
    }
    const packedVersionToHumanReadable = (n) => [n / 1e4 | 0, (n / 100 | 0) % 100, n % 100].join(".");
    const TARGET_NOT_SUPPORTED = 2147483647;
    if (typeof process !== "undefined" && !process.versions?.bun && typeof Deno === "undefined") {
      const currentNodeVersion = process.versions?.node ? humanReadableVersionToPacked(process.versions.node) : TARGET_NOT_SUPPORTED;
      if (currentNodeVersion < TARGET_NOT_SUPPORTED) {
        throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
      }
      if (currentNodeVersion < 2147483647) {
        throw new Error(`This emscripten-generated code requires node v${packedVersionToHumanReadable(2147483647)} (detected v${packedVersionToHumanReadable(currentNodeVersion)})`);
      }
    }
    const userAgent = typeof navigator !== "undefined" && navigator.userAgent;
    if (!userAgent) {
      return;
    }
    const currentSafariVersion = userAgent.includes("Safari/") && !userAgent.includes("Chrome/") && userAgent.match(/Version\/(\d+\.?\d*\.?\d*)/) ? humanReadableVersionToPacked(userAgent.match(/Version\/(\d+\.?\d*\.?\d*)/)[1]) : TARGET_NOT_SUPPORTED;
    if (currentSafariVersion < 150400) {
      throw new Error(`This emscripten-generated code requires Safari v${packedVersionToHumanReadable(150400)} (detected v${currentSafariVersion})`);
    }
    const currentFirefoxVersion = userAgent.match(/Firefox\/(\d+(?:\.\d+)?)/) ? parseFloat(userAgent.match(/Firefox\/(\d+(?:\.\d+)?)/)[1]) : TARGET_NOT_SUPPORTED;
    if (currentFirefoxVersion < 100) {
      throw new Error(`This emscripten-generated code requires Firefox v100 (detected v${currentFirefoxVersion})`);
    }
    const currentChromeVersion = userAgent.match(/Chrome\/(\d+(?:\.\d+)?)/) ? parseFloat(userAgent.match(/Chrome\/(\d+(?:\.\d+)?)/)[1]) : TARGET_NOT_SUPPORTED;
    if (currentChromeVersion < 95) {
      throw new Error(`This emscripten-generated code requires Chrome v95 (detected v${currentChromeVersion})`);
    }
  })();
  var ENVIRONMENT_IS_WEB = !!globalThis.window;
  var ENVIRONMENT_IS_WORKER = !!globalThis.WorkerGlobalScope;
  var ENVIRONMENT_IS_NODE = globalThis.process?.versions?.node && globalThis.process?.type != "renderer";
  var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
  var programArgs = [];
  var thisProgram = "./this.program";
  var quit_ = (status, toThrow) => {
    throw toThrow;
  };
  var _scriptName = import.meta.url;
  var scriptDirectory = "";
  function locateFile(path) {
    if (Module["locateFile"]) {
      return Module["locateFile"](path, scriptDirectory);
    }
    return scriptDirectory + path;
  }
  var readAsync, readBinary;
  if (ENVIRONMENT_IS_SHELL) {
  } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
    try {
      scriptDirectory = new URL(".", _scriptName).href;
    } catch {
    }
    if (!(globalThis.window || globalThis.WorkerGlobalScope)) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
    {
      readAsync = async (url) => {
        assert(!isFileURI(url), "readAsync does not work with file:// URLs");
        var response = await fetch(url, { credentials: "same-origin" });
        if (response.ok) {
          return response.arrayBuffer();
        }
        throw new Error(response.status + " : " + response.url);
      };
    }
  } else {
    throw new Error("environment detection error");
  }
  var out = console.log.bind(console);
  var err = console.error.bind(console);
  var IDBFS = "IDBFS is no longer included by default; build with -lidbfs.js";
  var PROXYFS = "PROXYFS is no longer included by default; build with -lproxyfs.js";
  var WORKERFS = "WORKERFS is no longer included by default; build with -lworkerfs.js";
  var FETCHFS = "FETCHFS is no longer included by default; build with -lfetchfs.js";
  var ICASEFS = "ICASEFS is no longer included by default; build with -licasefs.js";
  var JSFILEFS = "JSFILEFS is no longer included by default; build with -ljsfilefs.js";
  var OPFS = "OPFS is no longer included by default; build with -lopfs.js";
  var NODEFS = "NODEFS is no longer included by default; build with -lnodefs.js";
  assert(!ENVIRONMENT_IS_WORKER, "worker environment detected but not enabled at build time (add `worker` to `-sENVIRONMENT` to enable)");
  assert(!ENVIRONMENT_IS_NODE, "node environment detected but not enabled at build time (add `node` to `-sENVIRONMENT` to enable)");
  assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time (add `shell` to `-sENVIRONMENT` to enable)");
  var wasmBinary;
  if (!globalThis.WebAssembly) {
    err("no native wasm support detected");
  }
  var ABORT = false;
  var EXITSTATUS;
  function assert(condition, text) {
    if (!condition) {
      abort("Assertion failed" + (text ? ": " + text : ""));
    }
  }
  var isFileURI = (filename) => filename.startsWith("file://");
  var runtimeDebug = true;
  function dbg(...args) {
    if (!runtimeDebug && typeof runtimeDebug !== "undefined") return;
    console.warn(...args);
  }
  (() => {
    const h16 = new Int16Array(1);
    const h8 = new Int8Array(h16.buffer);
    h16[0] = 25459;
    if (h8[0] !== 115 || h8[1] !== 99) abort("Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)");
  })();
  function consumedModuleProp(prop) {
    let value = Module[prop];
    const msg = `Attempt to modify \`Module.${prop}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`;
    if (Array.isArray(value)) {
      value = new Proxy(value, {
        set(target, key, val) {
          abort(msg);
          return false;
        },
        defineProperty(target, key, descriptor) {
          abort(msg);
          return false;
        },
        deleteProperty(target, key) {
          abort(msg);
          return false;
        }
      });
    }
    Object.defineProperty(Module, prop, {
      configurable: true,
      get() {
        return value;
      },
      set() {
        abort(msg);
      }
    });
  }
  function makeInvalidEarlyAccess(name) {
    return () => assert(false, `call to '${name}' via reference taken before Wasm module initialization`);
  }
  function ignoredModuleProp(prop) {
    if (Object.getOwnPropertyDescriptor(Module, prop)) {
      abort(`\`Module.${prop}\` was supplied but \`${prop}\` not included in INCOMING_MODULE_JS_API`);
    }
  }
  function isExportedByForceFilesystem(name) {
    return name === "FS_createPath" || name === "FS_createDataFile" || name === "FS_createPreloadedFile" || name === "FS_preloadFile" || name === "FS_unlink" || name === "addRunDependency" || // The old FS has some functionality that WasmFS lacks.
    name === "FS_createLazyFile" || name === "FS_createDevice" || name === "removeRunDependency";
  }
  function missingLibrarySymbol(sym) {
    unexportedRuntimeSymbol(sym);
  }
  function unexportedRuntimeSymbol(sym) {
    if (!Object.getOwnPropertyDescriptor(Module, sym)) {
      Object.defineProperty(Module, sym, {
        configurable: true,
        get() {
          let msg = `'${sym}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
          if (isExportedByForceFilesystem(sym)) {
            msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
          }
          abort(msg);
        }
      });
    }
  }
  const stackCookie1 = 34821223;
  const stackCookie2 = 2310721022;
  function writeStackCookie() {
    let max = _emscripten_stack_get_end();
    assert((max & 3) == 0);
    if (max == 0) {
      max += 4;
    }
    HEAPU32[max >> 2] = stackCookie1;
    HEAPU32[max + 4 >> 2] = stackCookie2;
    HEAPU32[0 >> 2] = 1668509029;
  }
  function u32ToHexString(num) {
    return "0x" + (num >>> 0).toString(16).padStart(8, "0");
  }
  function checkStackCookie() {
    if (ABORT) return;
    let max = _emscripten_stack_get_end();
    if (max == 0) {
      max += 4;
    }
    const val1 = HEAPU32[max >> 2];
    const val2 = HEAPU32[max + 4 >> 2];
    if (val1 != stackCookie1 || val2 != stackCookie2) {
      abort(`Stack overflow! Stack cookie has been overwritten at ${ptrToString(max)}, expected hex dwords ${u32ToHexString(stackCookie2)} and ${u32ToHexString(stackCookie1)}, but received ${u32ToHexString(val2)} ${u32ToHexString(val1)}`);
    }
    if (HEAPU32[0 >> 2] != 1668509029) {
      abort("Runtime error: The application has corrupted its heap memory area (address zero)!");
    }
  }
  var runtimeInitialized = false;
  var runtimeExited = false;
  function getMemoryBuffer() {
    return wasmMemory.buffer;
  }
  function updateMemoryViews() {
    if (HEAP8?.buffer?.resizable) return;
    var b = getMemoryBuffer();
    HEAP8 = new Int8Array(b);
    HEAP16 = new Int16Array(b);
    HEAPU8 = new Uint8Array(b);
    HEAPU16 = new Uint16Array(b);
    HEAP32 = new Int32Array(b);
    HEAPU32 = new Uint32Array(b);
    HEAPF32 = new Float32Array(b);
    HEAPF64 = new Float64Array(b);
    HEAP64 = new BigInt64Array(b);
    HEAPU64 = new BigUint64Array(b);
  }
  assert(
    globalThis.Int32Array && globalThis.Float64Array && Int32Array.prototype.subarray && Int32Array.prototype.set,
    "JS engine does not provide full typed array support"
  );
  function preRun() {
    var preRun2 = Module["preRun"];
    if (preRun2) {
      if (typeof preRun2 === "function") preRun2 = [preRun2];
      onPreRuns.push(...preRun2);
    }
    consumedModuleProp("preRun");
    callRuntimeCallbacks(onPreRuns);
  }
  function initRuntime() {
    assert(!runtimeInitialized);
    runtimeInitialized = true;
    checkStackCookie();
    wasmExports["__wasm_call_ctors"]();
    checkStackCookie();
  }
  var runtimeExiting = false;
  function exitRuntime() {
    assert(!runtimeExited);
    assert(!runtimeExiting, "Re-entrant call to exitRuntime()! This can happen if an atexit() registered callback throws an exception.");
    runtimeExiting = true;
    checkStackCookie();
    ___funcs_on_exit();
    flush_NO_FILESYSTEM();
    runtimeExited = true;
  }
  function postRun() {
    checkStackCookie();
    var postRun2 = Module["postRun"];
    if (postRun2) {
      if (typeof postRun2 === "function") postRun2 = [postRun2];
      onPostRuns.push(...postRun2);
    }
    consumedModuleProp("postRun");
    callRuntimeCallbacks(onPostRuns);
  }
  function abort(what) {
    Module["onAbort"]?.(what);
    what = `Aborted(${what})`;
    err(what);
    ABORT = true;
    if (runtimeInitialized) {
      ___trap();
    }
    throw new WebAssembly.RuntimeError(what);
  }
  function fsMissing() {
    abort("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM");
  }
  var FS = {
    init: fsMissing,
    createDataFile: fsMissing,
    createPreloadedFile: fsMissing,
    createLazyFile: fsMissing,
    open: fsMissing,
    mkdev: fsMissing,
    registerDevice: fsMissing,
    analyzePath: fsMissing,
    ErrnoError: fsMissing
  };
  function createExportWrapper(name, func, nargs) {
    assert(func);
    return (...args) => {
      assert(runtimeInitialized, `native function \`${name}\` called before runtime initialization`);
      assert(!runtimeExited, `native function \`${name}\` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)`);
      assert(args.length <= nargs, `native function \`${name}\` called with ${args.length} args but expects ${nargs}`);
      return func(...args);
    };
  }
  var abortWrapperDepth = 0;
  function makeAbortWrapper(original) {
    return (...args) => {
      if (ABORT) {
        throw new Error("program has already aborted!");
      }
      abortWrapperDepth++;
      try {
        return original(...args);
      } catch (e) {
        if (ABORT || abortWrapperDepth > 1 || e === "unwind") {
          throw e;
        }
        abort("unhandled exception: " + [e, e.stack]);
      } finally {
        abortWrapperDepth--;
      }
    };
  }
  function instrumentWasmExportsWithAbort(exports) {
    var instExports = {};
    for (var name in exports) {
      var original = exports[name];
      if (typeof original === "function") {
        instExports[name] = makeAbortWrapper(original);
      } else {
        instExports[name] = original;
      }
    }
    return instExports;
  }
  function instrumentWasmTableWithAbort() {
    var realGet = wasmTable.get;
    var wrapperCache = {};
    wasmTable.get = (i) => {
      var func = realGet.call(wasmTable, i);
      var cached = wrapperCache[i];
      if (!cached || cached.func !== func) {
        cached = wrapperCache[i] = {
          func,
          wrapper: makeAbortWrapper(func)
        };
      }
      return cached.wrapper;
    };
  }
  var wasmBinaryFile;
  function findWasmBinary() {
    if (Module["locateFile"]) {
      return locateFile("libavoid.wasm");
    }
    return new URL("libavoid.wasm", import.meta.url).href;
  }
  function getBinarySync(file) {
    if (readBinary) {
      return readBinary(file);
    }
    throw "both async and sync fetching of the wasm failed";
  }
  async function getWasmBinary(binaryFile) {
    if (!wasmBinary) {
      try {
        return await readAsync(binaryFile);
      } catch {
      }
    }
    return getBinarySync(binaryFile);
  }
  async function instantiateArrayBuffer(binaryFile, imports) {
    try {
      var binary = await getWasmBinary(binaryFile);
      var instance = await WebAssembly.instantiate(binary, imports);
      return instance;
    } catch (reason) {
      err(`failed to asynchronously prepare wasm: ${reason}`);
      if (isFileURI(binaryFile)) {
        err(`warning: Loading from a file URI (${binaryFile}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`);
      }
      abort(reason);
    }
  }
  async function instantiateAsync(binary, binaryFile, imports) {
    if (!binary) {
      try {
        var response = fetch(binaryFile, { credentials: "same-origin" });
        var instantiationResult = await WebAssembly.instantiateStreaming(response, imports);
        return instantiationResult;
      } catch (reason) {
        err(`wasm streaming compile failed: ${reason}`);
        err("falling back to ArrayBuffer instantiation");
      }
      ;
    }
    return instantiateArrayBuffer(binaryFile, imports);
  }
  function getWasmImports() {
    var imports = {
      "env": wasmImports,
      "wasi_snapshot_preview1": wasmImports
    };
    return imports;
  }
  async function createWasm() {
    function receiveInstance(instance) {
      wasmExports = instance.exports;
      wasmExports = instrumentWasmExportsWithAbort(wasmExports);
      assignWasmExports(wasmExports);
      updateMemoryViews();
      instrumentWasmTableWithAbort();
      return wasmExports;
    }
    var trueModule = Module;
    function receiveInstantiationResult(result2) {
      assert(Module === trueModule, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
      trueModule = null;
      return receiveInstance(result2["instance"]);
    }
    var info = getWasmImports();
    var instantiateWasm = Module["instantiateWasm"];
    if (instantiateWasm) {
      return new Promise((resolve) => {
        try {
          instantiateWasm(info, (inst) => resolve(receiveInstance(inst)));
        } catch (e) {
          err(`Module.instantiateWasm callback failed with error: ${e}`);
          throw e;
        }
      });
    }
    wasmBinaryFile ??= findWasmBinary();
    var result = await instantiateAsync(wasmBinary, wasmBinaryFile, info);
    var exports = receiveInstantiationResult(result);
    return exports;
  }
  class ExitStatus {
    name = "ExitStatus";
    constructor(status) {
      this.message = `Program terminated with exit(${status})`;
      this.status = status;
    }
  }
  var HEAP32;
  var HEAP8;
  var HEAPU32;
  var callRuntimeCallbacks = (callbacks) => {
    while (callbacks.length > 0) {
      callbacks.shift()(Module);
    }
  };
  var onPostRuns = [];
  var addOnPostRun = (cb) => onPostRuns.push(cb);
  var onPreRuns = [];
  var addOnPreRun = (cb) => onPreRuns.push(cb);
  var noExitRuntime = false;
  function ptrToString(ptr) {
    assert(typeof ptr === "number", `ptrToString expects a number, got ${typeof ptr}`);
    ptr >>>= 0;
    return "0x" + ptr.toString(16).padStart(8, "0");
  }
  var warnOnce = (text) => {
    warnOnce.shown ||= {};
    if (!warnOnce.shown[text]) {
      warnOnce.shown[text] = 1;
      err(text);
    }
  };
  var HEAPU8;
  var UTF8Decoder = globalThis.TextDecoder && new TextDecoder();
  var findStringEnd = (heapOrArray, idx, maxBytesToRead, ignoreNul) => {
    var maxIdx = idx + maxBytesToRead;
    if (ignoreNul) return maxIdx;
    while (heapOrArray[idx] && !(idx >= maxIdx)) ++idx;
    return idx;
  };
  var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead, ignoreNul) => {
    var endPtr = findStringEnd(heapOrArray, idx, maxBytesToRead, ignoreNul);
    if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
      return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
    }
    var str = "";
    while (idx < endPtr) {
      var u0 = heapOrArray[idx++];
      if (!(u0 & 128)) {
        str += String.fromCharCode(u0);
        continue;
      }
      var u1 = heapOrArray[idx++] & 63;
      if ((u0 & 224) == 192) {
        str += String.fromCharCode((u0 & 31) << 6 | u1);
        continue;
      }
      var u2 = heapOrArray[idx++] & 63;
      if ((u0 & 240) == 224) {
        u0 = (u0 & 15) << 12 | u1 << 6 | u2;
      } else {
        if ((u0 & 248) != 240) warnOnce(`Invalid UTF-8 leading byte ${ptrToString(u0)} encountered when deserializing a UTF-8 string in wasm memory to a JS string!`);
        u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
      }
      if (u0 < 65536) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 65536;
        str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
      }
    }
    return str;
  };
  var UTF8ToString = (ptr, maxBytesToRead, ignoreNul) => {
    assert(typeof ptr === "number", `UTF8ToString expects a number (got ${typeof ptr})`);
    return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead, ignoreNul) : "";
  };
  var ___assert_fail = (condition, filename, line, func) => abort(`Assertion failed: ${UTF8ToString(condition)}, at: ` + [filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function"]);
  var getCppExceptionTag = () => ___cpp_exception;
  var getCppExceptionThrownObjectFromWebAssemblyException = (ex) => {
    var unwind_header = ex.getArg(getCppExceptionTag(), 0);
    return ___thrown_object_from_unwind_exception(unwind_header);
  };
  var decrementExceptionRefcount = (ex) => {
    var ptr = getCppExceptionThrownObjectFromWebAssemblyException(ex);
    ___cxa_decrement_exception_refcount(ptr);
  };
  var stackAlloc = (sz) => __emscripten_stack_alloc(sz);
  var stackRestore = (val) => __emscripten_stack_restore(val);
  var stackSave = () => _emscripten_stack_get_current();
  var getExceptionMessageCommon = (ptr) => {
    var sp = stackSave();
    var type_addr_addr = stackAlloc(4);
    var message_addr_addr = stackAlloc(4);
    ___get_exception_message(ptr, type_addr_addr, message_addr_addr);
    var type_addr = HEAPU32[type_addr_addr >> 2];
    var message_addr = HEAPU32[message_addr_addr >> 2];
    var type = UTF8ToString(type_addr);
    _free(type_addr);
    var message;
    if (message_addr) {
      message = UTF8ToString(message_addr);
      _free(message_addr);
    }
    stackRestore(sp);
    return [type, message];
  };
  var getExceptionMessage = (ex) => {
    var ptr = getCppExceptionThrownObjectFromWebAssemblyException(ex);
    return getExceptionMessageCommon(ptr);
  };
  var incrementExceptionRefcount = (ex) => {
    var ptr = getCppExceptionThrownObjectFromWebAssemblyException(ex);
    ___cxa_increment_exception_refcount(ptr);
  };
  var ___throw_exception_with_stack_trace = (ex) => {
    var e = new WebAssembly.Exception(getCppExceptionTag(), [ex], { traceStack: true });
    e.message = getExceptionMessage(e);
    throw e;
  };
  var __abort_js = () => abort("native code called abort()");
  function readPointer(pointer) {
    return this.fromWireType(HEAPU32[pointer >> 2]);
  }
  var runDestructors = (destructors) => {
    while (destructors.length) {
      var ptr = destructors.pop();
      var del = destructors.pop();
      del(ptr);
    }
  };
  var structRegistrations = {};
  var awaitingDependencies = {};
  var registeredTypes = {};
  class BindingError extends Error {
    constructor(message) {
      super(message);
      this.name = "BindingError";
    }
  }
  var throwBindingError = (message) => {
    throw new BindingError(message);
  };
  var typeDependencies = {};
  function sharedRegisterType(typeID, registeredInstance, options = {}) {
    var name = registeredInstance.name;
    if (!typeID) {
      throwBindingError(`type "${name}" must have a positive integer typeid pointer`);
    }
    if (registeredTypes[typeID]) {
      if (options.ignoreDuplicateRegistrations) {
        return;
      } else {
        throwBindingError(`Cannot register type '${name}' twice`);
      }
    }
    registeredTypes[typeID] = registeredInstance;
    delete typeDependencies[typeID];
    if (awaitingDependencies[typeID]) {
      var callbacks = awaitingDependencies[typeID];
      delete awaitingDependencies[typeID];
      callbacks.forEach((cb) => cb());
    }
  }
  function registerType(typeID, registeredInstance, options = {}) {
    return sharedRegisterType(typeID, registeredInstance, options);
  }
  class InternalError extends Error {
    constructor(message) {
      super(message);
      this.name = "InternalError";
    }
  }
  var throwInternalError = (message) => {
    throw new InternalError(message);
  };
  var whenDependentTypesAreResolved = (myTypes, dependentTypes, getTypeConverters) => {
    myTypes.forEach((type) => typeDependencies[type] = dependentTypes);
    function onComplete(typeConverters2) {
      var myTypeConverters = getTypeConverters(typeConverters2);
      if (myTypeConverters.length !== myTypes.length) {
        throwInternalError("Mismatched type converter count");
      }
      for (var i = 0; i < myTypes.length; ++i) {
        registerType(myTypes[i], myTypeConverters[i]);
      }
    }
    var typeConverters = new Array(dependentTypes.length);
    var unregisteredTypes = [];
    var registered = 0;
    for (let [i, dt] of dependentTypes.entries()) {
      if (registeredTypes[dt]) {
        typeConverters[i] = registeredTypes[dt];
      } else {
        unregisteredTypes.push(dt);
        (awaitingDependencies[dt] ??= []).push(() => {
          typeConverters[i] = registeredTypes[dt];
          ++registered;
          if (registered === unregisteredTypes.length) {
            onComplete(typeConverters);
          }
        });
      }
    }
    if (0 === unregisteredTypes.length) {
      onComplete(typeConverters);
    }
  };
  var zeroMemory = (ptr, size) => HEAPU8.fill(0, ptr, ptr + size);
  var __embind_finalize_value_object = (structTypeID) => {
    var reg = structRegistrations[structTypeID];
    delete structRegistrations[structTypeID];
    var rawConstructor = reg.rawConstructor;
    var rawDestructor = reg.rawDestructor;
    var valueSize = reg.valueSize;
    var isTrivial = reg.isTrivial;
    var fieldRecords = reg.fields;
    var fieldTypeIDs = fieldRecords.map((field) => field.getterReturnTypeID).concat(fieldRecords.map((field) => field.setterArgumentTypeID));
    whenDependentTypesAreResolved([structTypeID], fieldTypeIDs, (fieldTypes) => {
      var fields = {};
      for (var [i, field] of fieldRecords.entries()) {
        const getterReturnType = fieldTypes[i];
        const getter = field.getter;
        const getterContext = field.getterContext;
        const setterArgumentType = fieldTypes[i + fieldRecords.length];
        const setter = field.setter;
        const setterContext = field.setterContext;
        var write;
        if (setterArgumentType.destructorFunction === null && !setterArgumentType.argStackAlloc) {
          write = (ptr, o) => setter(setterContext, ptr, setterArgumentType.toWireType(null, o));
        } else {
          write = (ptr, o) => {
            var destructors = [];
            setter(setterContext, ptr, setterArgumentType.toWireType(destructors, o));
            runDestructors(destructors);
          };
        }
        fields[field.fieldName] = {
          read: (ptr) => getterReturnType.fromWireType(getter(getterContext, ptr)),
          write,
          optional: getterReturnType.optional
        };
      }
      return [{
        name: reg.name,
        fromWireType: (ptr) => {
          var rv = {};
          for (var i2 in fields) {
            rv[i2] = fields[i2].read(ptr);
          }
          rawDestructor(ptr);
          return rv;
        },
        toWireType: (destructors, o) => {
          for (var fieldName in fields) {
            if (!(fieldName in o) && !fields[fieldName].optional) {
              throw new TypeError(`Missing field: "${fieldName}"`);
            }
          }
          var ptr;
          if (isTrivial && !destructors) {
            ptr = stackAlloc(valueSize);
            zeroMemory(ptr, valueSize);
          } else {
            ptr = rawConstructor();
            if (destructors) {
              destructors.push(rawDestructor, ptr);
            }
          }
          for (fieldName in fields) {
            fields[fieldName].write(ptr, o[fieldName]);
          }
          return ptr;
        },
        readValueFromPointer: readPointer,
        destructorFunction: isTrivial ? null : rawDestructor,
        argStackAlloc: isTrivial
      }];
    });
  };
  var AsciiToString = (ptr) => {
    var str = "";
    while (1) {
      var ch = HEAPU8[ptr++];
      if (!ch) return str;
      str += String.fromCharCode(ch);
    }
  };
  var embindRepr = (v) => {
    if (v === null) {
      return "null";
    }
    var t = typeof v;
    if (t === "object" || t === "array" || t === "function") {
      return v.toString();
    } else {
      return "" + v;
    }
  };
  var assertIntegerRange = (typeName, value, minRange, maxRange) => {
    if (value < minRange || value > maxRange) {
      throw new TypeError(`Passing a number "${embindRepr(value)}" from JS side to C/C++ side to an argument of type "${typeName}", which is outside the valid range [${minRange}, ${maxRange}]!`);
    }
  };
  var HEAP16;
  var HEAP64;
  var HEAPU16;
  var HEAPU64;
  var integerReadValueFromPointer = (name, width, signed) => {
    switch (width) {
      case 1:
        return signed ? (pointer) => HEAP8[pointer] : (pointer) => HEAPU8[pointer];
      case 2:
        return signed ? (pointer) => HEAP16[pointer >> 1] : (pointer) => HEAPU16[pointer >> 1];
      case 4:
        return signed ? (pointer) => HEAP32[pointer >> 2] : (pointer) => HEAPU32[pointer >> 2];
      case 8:
        return signed ? (pointer) => HEAP64[pointer >> 3] : (pointer) => HEAPU64[pointer >> 3];
      default:
        throw new TypeError(`invalid integer width (${width}): ${name}`);
    }
  };
  var __embind_register_bigint = (typeID, name, size, minRange, maxRange) => {
    name = AsciiToString(name);
    const isUnsignedType = minRange === 0n;
    let fromWireType = (value) => value;
    if (isUnsignedType) {
      const bitSize = size * 8;
      fromWireType = (value) => {
        return BigInt.asUintN(bitSize, value);
      };
      maxRange = fromWireType(maxRange);
    }
    registerType(typeID, {
      name,
      fromWireType,
      toWireType: (destructors, value) => {
        if (typeof value === "number") {
          value = BigInt(value);
        } else if (typeof value !== "bigint") {
          throw new TypeError(`Cannot convert "${embindRepr(value)}" to ${name}`);
        }
        assertIntegerRange(name, value, minRange, maxRange);
        return value;
      },
      readValueFromPointer: integerReadValueFromPointer(name, size, !isUnsignedType),
      destructorFunction: null
      // This type does not need a destructor
    });
  };
  var __embind_register_bool = (typeID, name, trueValue, falseValue) => {
    name = AsciiToString(name);
    registerType(typeID, {
      name,
      fromWireType: function(wt) {
        return !!wt;
      },
      toWireType: function(destructors, o) {
        return o ? trueValue : falseValue;
      },
      readValueFromPointer: function(pointer) {
        return this.fromWireType(HEAPU8[pointer]);
      },
      destructorFunction: null
      // This type does not need a destructor
    });
  };
  var downcastPointer = (ptr, ptrClass, desiredClass) => {
    if (ptrClass === desiredClass) {
      return ptr;
    }
    if (void 0 === desiredClass.baseClass) {
      return null;
    }
    var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
    if (rv === null) {
      return null;
    }
    return desiredClass.downcast(rv);
  };
  var getBasestPointer = (class_, ptr) => {
    if (ptr === void 0) {
      throwBindingError("ptr should not be undefined");
    }
    while (class_.baseClass) {
      ptr = class_.upcast(ptr);
      class_ = class_.baseClass;
    }
    return ptr;
  };
  var registeredInstances = {};
  var getInheritedInstance = (class_, ptr) => {
    ptr = getBasestPointer(class_, ptr);
    return registeredInstances[ptr];
  };
  var makeClassHandle = (prototype, record) => {
    if (!record.ptrType || !record.ptr) {
      throwInternalError("makeClassHandle requires ptr and ptrType");
    }
    var hasSmartPtrType = !!record.smartPtrType;
    var hasSmartPtr = !!record.smartPtr;
    if (hasSmartPtrType !== hasSmartPtr) {
      throwInternalError("Both smartPtrType and smartPtr must be specified");
    }
    record.count = { value: 1 };
    return attachFinalizer(Object.create(prototype, {
      $$: {
        value: record,
        writable: true
      }
    }));
  };
  var registeredPointers = {};
  function RegisteredPointer_fromWireType(ptr) {
    var rawPointer = this.getPointee(ptr);
    if (!rawPointer) {
      this.destructor(ptr);
      return null;
    }
    var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);
    if (void 0 !== registeredInstance) {
      if (0 === registeredInstance.$$.count.value) {
        registeredInstance.$$.ptr = rawPointer;
        registeredInstance.$$.smartPtr = ptr;
        return registeredInstance["clone"]();
      } else {
        var rv = registeredInstance["clone"]();
        this.destructor(ptr);
        return rv;
      }
    }
    function makeDefaultHandle() {
      if (this.isSmartPointer) {
        return makeClassHandle(this.registeredClass.instancePrototype, {
          ptrType: this.pointeeType,
          ptr: rawPointer,
          smartPtrType: this,
          smartPtr: ptr
        });
      } else {
        return makeClassHandle(this.registeredClass.instancePrototype, {
          ptrType: this,
          ptr
        });
      }
    }
    var actualType = this.registeredClass.getActualType(rawPointer);
    var registeredPointerRecord = registeredPointers[actualType];
    if (!registeredPointerRecord) {
      return makeDefaultHandle.call(this);
    }
    var toType;
    if (this.isConst) {
      toType = registeredPointerRecord.constPointerType;
    } else {
      toType = registeredPointerRecord.pointerType;
    }
    var dp = downcastPointer(
      rawPointer,
      this.registeredClass,
      toType.registeredClass
    );
    if (dp === null) {
      return makeDefaultHandle.call(this);
    }
    if (this.isSmartPointer) {
      return makeClassHandle(toType.registeredClass.instancePrototype, {
        ptrType: toType,
        ptr: dp,
        smartPtrType: this,
        smartPtr: ptr
      });
    } else {
      return makeClassHandle(toType.registeredClass.instancePrototype, {
        ptrType: toType,
        ptr: dp
      });
    }
  }
  var finalizationRegistry = false;
  var detachFinalizer = (handle) => {
  };
  var runDestructor = ($$) => {
    if ($$.smartPtr) {
      $$.smartPtrType.rawDestructor($$.smartPtr);
    } else {
      $$.ptrType.registeredClass.rawDestructor($$.ptr);
    }
  };
  var releaseClassHandle = ($$) => {
    $$.count.value -= 1;
    var toDelete = 0 === $$.count.value;
    if (toDelete) {
      runDestructor($$);
    }
  };
  var attachFinalizer = (handle) => {
    if (!globalThis.FinalizationRegistry) {
      attachFinalizer = (handle2) => handle2;
      return handle;
    }
    finalizationRegistry = new FinalizationRegistry((info) => {
      console.warn(info.leakWarning);
      releaseClassHandle(info.$$);
    });
    attachFinalizer = (handle2) => {
      var $$ = handle2.$$;
      var hasSmartPtr = !!$$.smartPtr;
      if (hasSmartPtr) {
        var info = { $$ };
        var cls = $$.ptrType.registeredClass;
        var err2 = new Error(`Embind found a leaked C++ instance ${cls.name} <${ptrToString($$.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);
        if ("captureStackTrace" in Error) {
          Error.captureStackTrace(err2, RegisteredPointer_fromWireType);
        }
        info.leakWarning = err2.stack.replace(/^Error: /, "");
        finalizationRegistry.register(handle2, info, handle2);
      }
      return handle2;
    };
    detachFinalizer = (handle2) => finalizationRegistry.unregister(handle2);
    return attachFinalizer(handle);
  };
  var delayFunction;
  var deletionQueue = [];
  var flushPendingDeletes = () => {
    while (deletionQueue.length) {
      var obj = deletionQueue.pop();
      obj.$$.deleteScheduled = false;
      obj["delete"]();
    }
  };
  var shallowCopyInternalPointer = (o) => {
    return {
      count: o.count,
      deleteScheduled: o.deleteScheduled,
      preservePointerOnDelete: o.preservePointerOnDelete,
      ptr: o.ptr,
      ptrType: o.ptrType,
      smartPtr: o.smartPtr,
      smartPtrType: o.smartPtrType
    };
  };
  var throwInstanceAlreadyDeleted = (obj) => {
    function getInstanceTypeName(handle) {
      return handle.$$.ptrType.registeredClass.name;
    }
    throwBindingError(getInstanceTypeName(obj) + " instance already deleted");
  };
  var init_ClassHandle = () => {
    let proto = ClassHandle.prototype;
    Object.assign(proto, {
      "isAliasOf"(other) {
        if (!(this instanceof ClassHandle)) {
          return false;
        }
        if (!(other instanceof ClassHandle)) {
          return false;
        }
        var leftClass = this.$$.ptrType.registeredClass;
        var left = this.$$.ptr;
        other.$$ = /** @type {Object} */
        other.$$;
        var rightClass = other.$$.ptrType.registeredClass;
        var right = other.$$.ptr;
        while (leftClass.baseClass) {
          left = leftClass.upcast(left);
          leftClass = leftClass.baseClass;
        }
        while (rightClass.baseClass) {
          right = rightClass.upcast(right);
          rightClass = rightClass.baseClass;
        }
        return leftClass === rightClass && left === right;
      },
      "clone"() {
        if (!this.$$.ptr) {
          throwInstanceAlreadyDeleted(this);
        }
        if (this.$$.preservePointerOnDelete) {
          this.$$.count.value += 1;
          return this;
        } else {
          var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), {
            $$: {
              value: shallowCopyInternalPointer(this.$$)
            }
          }));
          clone.$$.count.value += 1;
          clone.$$.deleteScheduled = false;
          return clone;
        }
      },
      "delete"() {
        if (!this.$$.ptr) {
          throwInstanceAlreadyDeleted(this);
        }
        if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
          throwBindingError("Object already scheduled for deletion");
        }
        detachFinalizer(this);
        releaseClassHandle(this.$$);
        if (!this.$$.preservePointerOnDelete) {
          this.$$.smartPtr = void 0;
          this.$$.ptr = void 0;
        }
      },
      "isDeleted"() {
        return !this.$$.ptr;
      },
      "deleteLater"() {
        if (!this.$$.ptr) {
          throwInstanceAlreadyDeleted(this);
        }
        if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
          throwBindingError("Object already scheduled for deletion");
        }
        deletionQueue.push(this);
        if (deletionQueue.length === 1 && delayFunction) {
          delayFunction(flushPendingDeletes);
        }
        this.$$.deleteScheduled = true;
        return this;
      }
    });
    const symbolDispose = Symbol.dispose;
    if (symbolDispose) {
      proto[symbolDispose] = proto["delete"];
    }
  };
  function ClassHandle() {
  }
  function RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast) {
    this.name = name;
    this.constructor = constructor;
    this.instancePrototype = instancePrototype;
    this.rawDestructor = rawDestructor;
    this.baseClass = baseClass;
    this.getActualType = getActualType;
    this.upcast = upcast;
    this.downcast = downcast;
    this.pureVirtualFunctions = [];
  }
  var upcastPointer = (ptr, ptrClass, desiredClass) => {
    while (ptrClass !== desiredClass) {
      if (!ptrClass.upcast) {
        throwBindingError(`Expected null or instance of ${desiredClass.name}, got an instance of ${ptrClass.name}`);
      }
      ptr = ptrClass.upcast(ptr);
      ptrClass = ptrClass.baseClass;
    }
    return ptr;
  };
  function constNoSmartPtrRawPointerToWireType(destructors, handle) {
    if (handle === null) {
      if (this.isReference) {
        throwBindingError(`null is not a valid ${this.name}`);
      }
      return 0;
    }
    if (!handle.$$) {
      throwBindingError(`Cannot pass "${embindRepr(handle)}" as a ${this.name}`);
    }
    if (!handle.$$.ptr) {
      throwBindingError(`Cannot pass deleted object as a pointer of type ${this.name}`);
    }
    var handleClass = handle.$$.ptrType.registeredClass;
    var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
    return ptr;
  }
  var emval_freelist = [];
  const EMVAL_RESERVED_HANDLES = 5;
  var emval_handles = [0, 1, , 1, null, 1, true, 1, false, 1];
  var Emval = {
    toValue: (handle) => {
      if (!handle) {
        throwBindingError(`Cannot use deleted val. handle = ${handle}`);
      }
      assert(handle === 2 || emval_handles[handle] !== void 0 && handle % 2 === 0, `invalid handle: ${handle}`);
      return emval_handles[handle];
    },
    toHandle: (value) => {
      switch (value) {
        case void 0:
          return 2;
        case null:
          return 4;
        case true:
          return 6;
        case false:
          return 8;
        default: {
          const handle = emval_freelist.pop() || emval_handles.length;
          emval_handles[handle] = value;
          emval_handles[handle + 1] = 1;
          return handle;
        }
      }
    }
  };
  function genericPointerToWireType(destructors, handle) {
    var ptr;
    if (handle === null) {
      if (this.isReference) {
        throwBindingError(`null is not a valid ${this.name}`);
      }
      if (this.isSmartPointer) {
        ptr = this.rawConstructor();
        if (destructors !== null) {
          destructors.push(this.rawDestructor, ptr);
        }
        return ptr;
      } else {
        return 0;
      }
    }
    if (!handle || !handle.$$) {
      throwBindingError(`Cannot pass "${embindRepr(handle)}" as a ${this.name}`);
    }
    if (!handle.$$.ptr) {
      throwBindingError(`Cannot pass deleted object as a pointer of type ${this.name}`);
    }
    if (!this.isConst && handle.$$.ptrType.isConst) {
      throwBindingError(`Cannot convert argument of type ${handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name} to parameter type ${this.name}`);
    }
    var handleClass = handle.$$.ptrType.registeredClass;
    ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
    if (this.isSmartPointer) {
      if (void 0 === handle.$$.smartPtr) {
        throwBindingError("Passing raw pointer to smart pointer is illegal");
      }
      switch (this.sharingPolicy) {
        case 0:
          if (handle.$$.smartPtrType === this) {
            ptr = handle.$$.smartPtr;
          } else {
            throwBindingError(`Cannot convert argument of type ${handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name} to parameter type ${this.name}`);
          }
          break;
        case 1:
          ptr = handle.$$.smartPtr;
          break;
        case 2:
          if (handle.$$.smartPtrType === this) {
            ptr = handle.$$.smartPtr;
          } else {
            var clonedHandle = handle["clone"]();
            ptr = this.rawShare(
              ptr,
              Emval.toHandle(() => clonedHandle["delete"]())
            );
            if (destructors !== null) {
              destructors.push(this.rawDestructor, ptr);
            }
          }
          break;
        default:
          throwBindingError("Unsupported sharing policy");
      }
    }
    return ptr;
  }
  var init_RegisteredPointer = () => {
    Object.assign(RegisteredPointer.prototype, {
      getPointee(ptr) {
        if (this.rawGetPointee) {
          ptr = this.rawGetPointee(ptr);
        }
        return ptr;
      },
      destructor(ptr) {
        this.rawDestructor?.(ptr);
      },
      readValueFromPointer: readPointer,
      fromWireType: RegisteredPointer_fromWireType
    });
  };
  function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
    if (handle === null) {
      if (this.isReference) {
        throwBindingError(`null is not a valid ${this.name}`);
      }
      return 0;
    }
    if (!handle.$$) {
      throwBindingError(`Cannot pass "${embindRepr(handle)}" as a ${this.name}`);
    }
    if (!handle.$$.ptr) {
      throwBindingError(`Cannot pass deleted object as a pointer of type ${this.name}`);
    }
    if (handle.$$.ptrType.isConst) {
      throwBindingError(`Cannot convert argument of type ${handle.$$.ptrType.name} to parameter type ${this.name}`);
    }
    var handleClass = handle.$$.ptrType.registeredClass;
    var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
    return ptr;
  }
  function RegisteredPointer(name, registeredClass, isReference, isConst, isSmartPointer, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor) {
    this.name = name;
    this.registeredClass = registeredClass;
    this.isReference = isReference;
    this.isConst = isConst;
    this.isSmartPointer = isSmartPointer;
    this.pointeeType = pointeeType;
    this.sharingPolicy = sharingPolicy;
    this.rawGetPointee = rawGetPointee;
    this.rawConstructor = rawConstructor;
    this.rawShare = rawShare;
    this.rawDestructor = rawDestructor;
    if (!isSmartPointer && registeredClass.baseClass === void 0) {
      if (isConst) {
        this.toWireType = constNoSmartPtrRawPointerToWireType;
        this.destructorFunction = null;
      } else {
        this.toWireType = nonConstNoSmartPtrRawPointerToWireType;
        this.destructorFunction = null;
      }
    } else {
      this.toWireType = genericPointerToWireType;
    }
  }
  var createNamedFunction = (name, func) => Object.defineProperty(func, "name", { value: name });
  var wasmTableMirror = [];
  var getWasmTableEntry = (funcPtr) => {
    var func = wasmTableMirror[funcPtr];
    if (!func) {
      wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
    }
    assert(wasmTable.get(funcPtr) == func, "table mirror is out of date");
    return func;
  };
  var embind__requireFunction = (signature, rawFunction, isAsync = false) => {
    assert(!isAsync, "async bindings are only supported with JSPI");
    signature = AsciiToString(signature);
    function makeDynCaller() {
      var rtn = getWasmTableEntry(rawFunction);
      return rtn;
    }
    var fp = makeDynCaller();
    if (typeof fp !== "function") {
      throwBindingError(`unknown function pointer with signature ${signature}: ${rawFunction}`);
    }
    return fp;
  };
  var ensureOverloadTable = (proto, methodName, humanName) => {
    if (void 0 === proto[methodName].overloadTable) {
      var prevFunc = proto[methodName];
      proto[methodName] = function(...args) {
        if (!proto[methodName].overloadTable[args.length]) {
          throwBindingError(`Function '${humanName}' called with an invalid number of arguments (${args.length}) - expects one of (${proto[methodName].overloadTable})!`);
        }
        return proto[methodName].overloadTable[args.length].apply(this, args);
      };
      proto[methodName].overloadTable = [];
      proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
    }
  };
  var hasOwn = Object.hasOwn;
  var exposePublicSymbol = (name, value, numArguments) => {
    if (hasOwn(Module, name)) {
      if (void 0 === numArguments || void 0 !== Module[name].overloadTable && void 0 !== Module[name].overloadTable[numArguments]) {
        throwBindingError(`Cannot register public name '${name}' twice`);
      }
      ensureOverloadTable(Module, name, name);
      if (Module[name].overloadTable[numArguments]) {
        throwBindingError(`Cannot register multiple overloads of a function with the same number of arguments (${numArguments})!`);
      }
      Module[name].overloadTable[numArguments] = value;
    } else {
      Module[name] = value;
      Module[name].argCount = numArguments;
    }
  };
  const char_0 = 48;
  const char_9 = 57;
  var makeLegalFunctionName = (name) => {
    assert(typeof name === "string");
    name = name.replace(/[^a-zA-Z0-9_]/g, "$");
    var f = name.charCodeAt(0);
    if (f >= char_0 && f <= char_9) {
      return `_${name}`;
    }
    return name;
  };
  var replacePublicSymbol = (name, value, numArguments) => {
    if (!hasOwn(Module, name)) {
      throwInternalError("Replacing nonexistent public symbol");
    }
    if (void 0 !== Module[name].overloadTable && void 0 !== numArguments) {
      Module[name].overloadTable[numArguments] = value;
    } else {
      Module[name] = value;
      Module[name].argCount = numArguments;
    }
  };
  class UnboundTypeError extends Error {
  }
  var getTypeName = (typeID) => {
    var ptr = ___getTypeName(typeID);
    var rv = AsciiToString(ptr);
    _free(ptr);
    return rv;
  };
  var throwUnboundTypeError = (message, types) => {
    var unboundTypes = [];
    var seen = {};
    function visit(type) {
      if (seen[type]) {
        return;
      }
      if (registeredTypes[type]) {
        return;
      }
      if (typeDependencies[type]) {
        typeDependencies[type].forEach(visit);
        return;
      }
      unboundTypes.push(type);
      seen[type] = true;
    }
    types.forEach(visit);
    throw new UnboundTypeError(`${message}: ` + unboundTypes.map(getTypeName).join([", "]));
  };
  var __embind_register_class = (typeID, pointerTypeID, constPointerTypeID, baseClassTypeID, getActualTypeSignature, getActualType, upcastSignature, upcast, downcastSignature, downcast, name, destructorSignature, rawDestructor) => {
    name = AsciiToString(name);
    getActualType = embind__requireFunction(getActualTypeSignature, getActualType);
    upcast &&= embind__requireFunction(upcastSignature, upcast);
    downcast &&= embind__requireFunction(downcastSignature, downcast);
    rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
    var legalFunctionName = makeLegalFunctionName(name);
    exposePublicSymbol(legalFunctionName, function() {
      throwUnboundTypeError(`Cannot construct ${name} due to unbound types`, [baseClassTypeID]);
    });
    whenDependentTypesAreResolved(
      [typeID, pointerTypeID, constPointerTypeID],
      baseClassTypeID ? [baseClassTypeID] : [],
      (base) => {
        base = base[0];
        var baseClass;
        var basePrototype;
        if (baseClassTypeID) {
          baseClass = base.registeredClass;
          basePrototype = baseClass.instancePrototype;
        } else {
          basePrototype = ClassHandle.prototype;
        }
        var constructor = createNamedFunction(name, function(...args) {
          if (Object.getPrototypeOf(this) !== instancePrototype) {
            throw new BindingError(`Use 'new' to construct ${name}`);
          }
          if (void 0 === registeredClass.constructor_body) {
            throw new BindingError(`${name} has no accessible constructor`);
          }
          var body = registeredClass.constructor_body[args.length];
          if (void 0 === body) {
            throw new BindingError(`Tried to invoke ctor of ${name} with invalid number of parameters (${args.length}) - expected (${Object.keys(registeredClass.constructor_body).toString()}) parameters instead!`);
          }
          return body.apply(this, args);
        });
        var instancePrototype = Object.create(basePrototype, {
          constructor: { value: constructor }
        });
        constructor.prototype = instancePrototype;
        var registeredClass = new RegisteredClass(
          name,
          constructor,
          instancePrototype,
          rawDestructor,
          baseClass,
          getActualType,
          upcast,
          downcast
        );
        if (registeredClass.baseClass) {
          registeredClass.baseClass.__derivedClasses ??= [];
          registeredClass.baseClass.__derivedClasses.push(registeredClass);
        }
        var referenceConverter = new RegisteredPointer(
          name,
          registeredClass,
          true,
          false,
          false
        );
        var pointerConverter = new RegisteredPointer(
          name + "*",
          registeredClass,
          false,
          false,
          false
        );
        var constPointerConverter = new RegisteredPointer(
          name + " const*",
          registeredClass,
          false,
          true,
          false
        );
        registeredPointers[typeID] = {
          pointerType: pointerConverter,
          constPointerType: constPointerConverter
        };
        replacePublicSymbol(legalFunctionName, constructor);
        return [referenceConverter, pointerConverter, constPointerConverter];
      }
    );
  };
  function argsUseStackAlloc(argTypes) {
    for (var i = 1; i < argTypes.length; ++i) {
      if (argTypes[i] !== null && argTypes[i].argStackAlloc) {
        return true;
      }
    }
    return false;
  }
  function checkArgCount(numArgs, minArgs, maxArgs, humanName, throwBindingError2) {
    if (numArgs < minArgs || numArgs > maxArgs) {
      var argCountMessage = minArgs == maxArgs ? minArgs : `${minArgs} to ${maxArgs}`;
      throwBindingError2(`function ${humanName} called with ${numArgs} arguments, expected ${argCountMessage}`);
    }
  }
  function usesDestructorStack(argTypes) {
    for (var i = 1; i < argTypes.length; ++i) {
      if (argTypes[i] !== null && argTypes[i].destructorFunction === void 0) {
        return true;
      }
    }
    return false;
  }
  function createJsInvoker(argTypes, isClassMethodFunc, returns, isAsync) {
    var needsDestructorStack = usesDestructorStack(argTypes);
    var argsNeedStack = argsUseStackAlloc(argTypes);
    var useStackFrame = argsNeedStack && !isAsync && !needsDestructorStack;
    if (argsNeedStack && !useStackFrame) {
      needsDestructorStack = true;
    }
    var argCount = argTypes.length - 2;
    var argsList = [];
    var argsListWired = ["fn"];
    if (isClassMethodFunc) {
      argsListWired.push("thisWired");
    }
    for (var i = 0; i < argCount; ++i) {
      argsList.push(`arg${i}`);
      argsListWired.push(`arg${i}Wired`);
    }
    argsList = argsList.join();
    argsListWired = argsListWired.join();
    var invokerFnBody = `return function (${argsList}) {
`;
    invokerFnBody += "checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);\n";
    if (needsDestructorStack) {
      invokerFnBody += "var destructors = [];\n";
    }
    if (useStackFrame) {
      invokerFnBody += "var sp = stackSave();\n";
    }
    var dtorStack = needsDestructorStack ? "destructors" : "null";
    var args1 = ["humanName", "throwBindingError", "invoker", "fn", "runDestructors", "fromRetWire", "toClassParamWire"];
    if (useStackFrame) {
      args1.push("stackSave", "stackRestore");
    }
    if (isClassMethodFunc) {
      invokerFnBody += `var thisWired = toClassParamWire(${dtorStack}, this);
`;
    }
    for (var i = 0; i < argCount; ++i) {
      var argName = `toArg${i}Wire`;
      invokerFnBody += `var arg${i}Wired = ${argName}(${dtorStack}, arg${i});
`;
      args1.push(argName);
    }
    invokerFnBody += (returns || isAsync ? "var rv = " : "") + `invoker(${argsListWired});
`;
    if (useStackFrame) {
      invokerFnBody += "stackRestore(sp);\n";
    }
    var returnVal = returns ? "rv" : "";
    if (needsDestructorStack) {
      invokerFnBody += "runDestructors(destructors);\n";
    } else {
      for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
        var paramName = i === 1 ? "thisWired" : `arg${i - 2}Wired`;
        if (argTypes[i].destructorFunction !== null) {
          invokerFnBody += `${paramName}_dtor(${paramName});
`;
          args1.push(`${paramName}_dtor`);
        }
      }
    }
    if (returns) {
      invokerFnBody += "var ret = fromRetWire(rv);\nreturn ret;\n";
    } else {
    }
    invokerFnBody += "}\n";
    args1.push("checkArgCount", "minArgs", "maxArgs");
    invokerFnBody = `if (arguments.length !== ${args1.length}){ throw new Error(humanName + "Expected ${args1.length} closure arguments " + arguments.length + " given."); }
${invokerFnBody}`;
    return new Function(args1, invokerFnBody);
  }
  function getRequiredArgCount(argTypes) {
    var requiredArgCount = argTypes.length - 2;
    for (var i = argTypes.length - 1; i >= 2; --i) {
      if (!argTypes[i].optional) {
        break;
      }
      requiredArgCount--;
    }
    return requiredArgCount;
  }
  function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc, isAsync) {
    var argCount = argTypes.length;
    if (argCount < 2) {
      throwBindingError("argTypes array size mismatch! Must at least get return value and receiver (this) types!");
    }
    assert(!isAsync, "async bindings are only supported with JSPI");
    var isClassMethodFunc = argTypes[1] !== null && classType !== null;
    var needsDestructorStack = usesDestructorStack(argTypes);
    var argsNeedStack = argsUseStackAlloc(argTypes);
    var useStackFrame = argsNeedStack && !isAsync && !needsDestructorStack;
    if (argsNeedStack && !useStackFrame) {
      needsDestructorStack = true;
    }
    var returns = !argTypes[0].isVoid;
    var expectedArgCount = argCount - 2;
    var minArgs = getRequiredArgCount(argTypes);
    var retType = argTypes[0];
    var instType = argTypes[1];
    var closureArgs = [humanName, throwBindingError, cppInvokerFunc, cppTargetFunc, runDestructors, retType.fromWireType.bind(retType), instType?.toWireType.bind(instType)];
    if (useStackFrame) {
      closureArgs.push(stackSave, stackRestore);
    }
    for (var i = 2; i < argCount; ++i) {
      var argType = argTypes[i];
      closureArgs.push(argType.toWireType.bind(argType));
    }
    if (!needsDestructorStack) {
      for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
        if (argTypes[i].destructorFunction !== null) {
          closureArgs.push(argTypes[i].destructorFunction);
        }
      }
    }
    closureArgs.push(checkArgCount, minArgs, expectedArgCount);
    let invokerFactory = createJsInvoker(argTypes, isClassMethodFunc, returns, isAsync);
    var invokerFn = invokerFactory(...closureArgs);
    return createNamedFunction(humanName, invokerFn);
  }
  var heap32VectorToArray = (count, firstElement) => {
    var array = [];
    for (var i = 0; i < count; i++) {
      array.push(HEAPU32[firstElement + i * 4 >> 2]);
    }
    return array;
  };
  var __embind_register_class_constructor = (classTypeID, argCount, rawArgTypesAddr, invokerSignature, invoker, rawConstructor) => {
    assert(argCount > 0);
    var argTypeIDs = heap32VectorToArray(argCount, rawArgTypesAddr);
    invoker = embind__requireFunction(invokerSignature, invoker);
    var args = [rawConstructor];
    var destructors = [];
    whenDependentTypesAreResolved([], [classTypeID], (classType) => {
      classType = classType[0];
      var humanName = `constructor ${classType.name}`;
      if (void 0 === classType.registeredClass.constructor_body) {
        classType.registeredClass.constructor_body = [];
      }
      if (void 0 !== classType.registeredClass.constructor_body[argCount - 1]) {
        throw new BindingError(`Cannot register multiple constructors with identical number of parameters (${argCount - 1}) for class '${classType.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
      }
      classType.registeredClass.constructor_body[argCount - 1] = () => {
        throwUnboundTypeError(`Cannot construct ${classType.name} due to unbound types`, argTypeIDs);
      };
      whenDependentTypesAreResolved([], argTypeIDs, (argTypes) => {
        argTypes.splice(1, 0, null);
        classType.registeredClass.constructor_body[argCount - 1] = craftInvokerFunction(humanName, argTypes, null, invoker, rawConstructor);
        return [];
      });
      return [];
    });
  };
  var getFunctionName = (signature) => {
    signature = signature.trim();
    const argsIndex = signature.indexOf("(");
    if (argsIndex === -1) return signature;
    assert(signature.endsWith(")"), "Parentheses for argument names should match.");
    return signature.slice(0, argsIndex);
  };
  var __embind_register_class_function = (classTypeID, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, context, isPureVirtual, isAsync, isNonnullReturn) => {
    var argTypeIDs = heap32VectorToArray(argCount, rawArgTypesAddr);
    methodName = AsciiToString(methodName);
    methodName = getFunctionName(methodName);
    rawInvoker = embind__requireFunction(invokerSignature, rawInvoker, isAsync);
    whenDependentTypesAreResolved([], [classTypeID], (classType) => {
      classType = classType[0];
      var humanName = `${classType.name}.${methodName}`;
      if (methodName.startsWith("@@")) {
        methodName = Symbol[methodName.substring(2)];
      }
      if (isPureVirtual) {
        classType.registeredClass.pureVirtualFunctions.push(methodName);
      }
      function unboundTypesHandler() {
        throwUnboundTypeError(`Cannot call ${humanName} due to unbound types`, argTypeIDs);
      }
      var proto = classType.registeredClass.instancePrototype;
      var method = proto[methodName];
      if (void 0 === method || void 0 === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2) {
        unboundTypesHandler.argCount = argCount - 2;
        unboundTypesHandler.className = classType.name;
        proto[methodName] = unboundTypesHandler;
      } else {
        ensureOverloadTable(proto, methodName, humanName);
        proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
      }
      whenDependentTypesAreResolved([], argTypeIDs, (argTypes) => {
        var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context, isAsync);
        if (void 0 === proto[methodName].overloadTable) {
          memberFunction.argCount = argCount - 2;
          proto[methodName] = memberFunction;
        } else {
          proto[methodName].overloadTable[argCount - 2] = memberFunction;
        }
        return [];
      });
      return [];
    });
  };
  const EMVAL_LAST_RESERVED_HANDLE = 9;
  var emval_exception_decrefs = [];
  var __emval_decref = (handle) => {
    if (handle > EMVAL_LAST_RESERVED_HANDLE && 0 === --emval_handles[handle + 1]) {
      assert(emval_handles[handle] !== void 0, `decref for unallocated handle`);
      var value = emval_handles[handle];
      emval_handles[handle] = void 0;
      var destructor = emval_exception_decrefs[handle];
      if (destructor) {
        emval_exception_decrefs[handle] = void 0;
        destructor(value);
      }
      emval_freelist.push(handle);
    }
  };
  var EmValType = {
    name: "emscripten::val",
    fromWireType: (handle) => {
      var rv = Emval.toValue(handle);
      __emval_decref(handle);
      return rv;
    },
    toWireType: (destructors, value) => Emval.toHandle(value),
    readValueFromPointer: readPointer,
    destructorFunction: null
    // This type does not need a destructor
    // TODO: do we need a deleteObject here?  write a test where
    // emval is passed into JS via an interface
  };
  var __embind_register_emval = (typeID) => registerType(typeID, EmValType);
  var enumReadValueFromPointer = (name, width, signed) => {
    switch (width) {
      case 1:
        return signed ? function(pointer) {
          return this.fromWireType(HEAP8[pointer]);
        } : function(pointer) {
          return this.fromWireType(HEAPU8[pointer]);
        };
      case 2:
        return signed ? function(pointer) {
          return this.fromWireType(HEAP16[pointer >> 1]);
        } : function(pointer) {
          return this.fromWireType(HEAPU16[pointer >> 1]);
        };
      case 4:
        return signed ? function(pointer) {
          return this.fromWireType(HEAP32[pointer >> 2]);
        } : function(pointer) {
          return this.fromWireType(HEAPU32[pointer >> 2]);
        };
      default:
        throw new TypeError(`invalid integer width (${width}): ${name}`);
    }
  };
  function getEnumValueType(rawValueType) {
    return !rawValueType ? "object" : rawValueType === 1 ? "number" : "string";
  }
  var __embind_register_enum = (typeID, name, size, isSigned, rawValueType) => {
    name = AsciiToString(name);
    const valueType = getEnumValueType(rawValueType);
    switch (valueType) {
      case "object": {
        let ctor2 = function() {
        };
        var ctor = ctor2;
        ctor2.values = {};
        registerType(typeID, {
          name,
          constructor: ctor2,
          valueType,
          fromWireType: function(c) {
            return this.constructor.values[c];
          },
          toWireType: (destructors, c) => c.value,
          readValueFromPointer: enumReadValueFromPointer(name, size, isSigned),
          destructorFunction: null
        });
        exposePublicSymbol(name, ctor2);
        break;
      }
      case "number": {
        var keysMap = {};
        registerType(typeID, {
          name,
          keysMap,
          valueType,
          fromWireType: (c) => c,
          toWireType: (destructors, c) => c,
          readValueFromPointer: enumReadValueFromPointer(name, size, isSigned),
          destructorFunction: null
        });
        exposePublicSymbol(name, keysMap);
        delete Module[name].argCount;
        break;
      }
      case "string": {
        var valuesMap = {};
        var reverseMap = {};
        var keysMap = {};
        registerType(typeID, {
          name,
          valuesMap,
          reverseMap,
          keysMap,
          valueType,
          fromWireType: function(c) {
            return this.reverseMap[c];
          },
          toWireType: function(destructors, c) {
            return this.valuesMap[c];
          },
          readValueFromPointer: enumReadValueFromPointer(name, size, isSigned),
          destructorFunction: null
        });
        exposePublicSymbol(name, keysMap);
        delete Module[name].argCount;
        break;
      }
    }
  };
  var requireRegisteredType = (typeID, humanName) => {
    var impl = registeredTypes[typeID];
    if (void 0 === impl) {
      throwBindingError(`${humanName} has unknown type ${getTypeName(typeID)}`);
    }
    return impl;
  };
  var __embind_register_enum_value = (enumTypeID, name, enumValue) => {
    var enumType = requireRegisteredType(enumTypeID, "enum");
    name = AsciiToString(name);
    switch (enumType.valueType) {
      case "object": {
        var Enum = enumType.constructor;
        var Value = Object.create(enumType.constructor.prototype, {
          value: { value: enumValue },
          constructor: { value: createNamedFunction(`${enumType.name}_${name}`, function() {
          }) }
        });
        Enum.values[enumValue] = Value;
        Enum[name] = Value;
        break;
      }
      case "number": {
        enumType.keysMap[name] = enumValue;
        break;
      }
      case "string": {
        enumType.valuesMap[name] = enumValue;
        enumType.reverseMap[enumValue] = name;
        enumType.keysMap[name] = name;
        break;
      }
    }
  };
  var HEAPF32;
  var HEAPF64;
  var floatReadValueFromPointer = (name, width) => {
    switch (width) {
      case 4:
        return function(pointer) {
          return this.fromWireType(HEAPF32[pointer >> 2]);
        };
      case 8:
        return function(pointer) {
          return this.fromWireType(HEAPF64[pointer >> 3]);
        };
      default:
        throw new TypeError(`invalid float width (${width}): ${name}`);
    }
  };
  var __embind_register_float = (typeID, name, size) => {
    name = AsciiToString(name);
    registerType(typeID, {
      name,
      fromWireType: (value) => value,
      toWireType: (destructors, value) => {
        if (typeof value !== "number" && typeof value !== "boolean") {
          throw new TypeError(`Cannot convert ${embindRepr(value)} to ${name}`);
        }
        return value;
      },
      readValueFromPointer: floatReadValueFromPointer(name, size),
      destructorFunction: null
      // This type does not need a destructor
    });
  };
  var __embind_register_function = (name, argCount, rawArgTypesAddr, signature, rawInvoker, fn, isAsync, isNonnullReturn) => {
    var argTypeIDs = heap32VectorToArray(argCount, rawArgTypesAddr);
    name = AsciiToString(name);
    name = getFunctionName(name);
    rawInvoker = embind__requireFunction(signature, rawInvoker, isAsync);
    exposePublicSymbol(name, function() {
      throwUnboundTypeError(`Cannot call ${name} due to unbound types`, argTypeIDs);
    }, argCount - 1);
    whenDependentTypesAreResolved([], argTypeIDs, (argTypes) => {
      var invokerArgsArray = [
        argTypes[0],
        null
        /* no class 'this'*/
      ].concat(
        argTypes.slice(1)
        /* actual params */
      );
      replacePublicSymbol(name, craftInvokerFunction(name, invokerArgsArray, null, rawInvoker, fn, isAsync), argCount - 1);
      return [];
    });
  };
  var __embind_register_integer = (typeID, name, size, minRange, maxRange) => {
    name = AsciiToString(name);
    const isUnsignedType = minRange === 0;
    let fromWireType = (value) => value;
    if (isUnsignedType) {
      var bitshift = 32 - 8 * size;
      fromWireType = (value) => value << bitshift >>> bitshift;
      maxRange = fromWireType(maxRange);
    }
    registerType(typeID, {
      name,
      fromWireType,
      toWireType: (destructors, value) => {
        if (typeof value !== "number" && typeof value !== "boolean") {
          throw new TypeError(`Cannot convert "${embindRepr(value)}" to ${name}`);
        }
        assertIntegerRange(name, value, minRange, maxRange);
        return value;
      },
      readValueFromPointer: integerReadValueFromPointer(name, size, minRange !== 0),
      destructorFunction: null
      // This type does not need a destructor
    });
  };
  var __embind_register_memory_view = (typeID, dataTypeIndex, name) => {
    var typeMapping = [
      Int8Array,
      Uint8Array,
      Int16Array,
      Uint16Array,
      Int32Array,
      Uint32Array,
      Float32Array,
      Float64Array,
      BigInt64Array,
      BigUint64Array
    ];
    var TA = typeMapping[dataTypeIndex];
    function decodeMemoryView(handle) {
      var size = HEAPU32[handle >> 2];
      var data = HEAPU32[handle + 4 >> 2];
      return new TA(HEAP8.buffer, data, size);
    }
    name = AsciiToString(name);
    registerType(typeID, {
      name,
      fromWireType: decodeMemoryView,
      readValueFromPointer: decodeMemoryView
    }, {
      ignoreDuplicateRegistrations: true
    });
  };
  var lengthBytesUTF8 = (str) => {
    var len = 0;
    for (var i = 0; i < str.length; ++i) {
      var u = str.codePointAt(i);
      if (u <= 127) {
        len++;
      } else if (u <= 2047) {
        len += 2;
      } else if (u <= 65535) {
        len += 3;
      } else {
        len += 4;
        i++;
      }
    }
    return len;
  };
  var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
    assert(typeof str === "string", `stringToUTF8Array expects a string (got ${typeof str})`);
    if (!(maxBytesToWrite > 0))
      return 0;
    var startIdx = outIdx;
    var endIdx = outIdx + maxBytesToWrite - 1;
    for (var i = 0; i < str.length; ++i) {
      var u = str.codePointAt(i);
      if (u <= 127) {
        if (outIdx >= endIdx) break;
        heap[outIdx++] = u;
      } else if (u <= 2047) {
        if (outIdx + 1 >= endIdx) break;
        heap[outIdx++] = 192 | u >> 6;
        heap[outIdx++] = 128 | u & 63;
      } else if (u <= 65535) {
        if (outIdx + 2 >= endIdx) break;
        heap[outIdx++] = 224 | u >> 12;
        heap[outIdx++] = 128 | u >> 6 & 63;
        heap[outIdx++] = 128 | u & 63;
      } else {
        if (outIdx + 3 >= endIdx) break;
        if (u > 1114111) warnOnce(`Invalid Unicode code point ${ptrToString(u)} encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).`);
        heap[outIdx++] = 240 | u >> 18;
        heap[outIdx++] = 128 | u >> 12 & 63;
        heap[outIdx++] = 128 | u >> 6 & 63;
        heap[outIdx++] = 128 | u & 63;
        i++;
      }
    }
    heap[outIdx] = 0;
    return outIdx - startIdx;
  };
  var stringToUTF8 = (str, outPtr, maxBytesToWrite) => {
    assert(typeof maxBytesToWrite === "number", "stringToUTF8 requires a third parameter that specifies the length of the output buffer");
    return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
  };
  var __embind_register_std_string = (typeID, name) => {
    name = AsciiToString(name);
    const stdStringIsUTF8 = true;
    registerType(typeID, {
      name,
      // For some method names we use string keys here since they are part of
      // the public/external API and/or used by the runtime-generated code.
      fromWireType(value) {
        var length = HEAPU32[value >> 2];
        var payload = value + 4;
        var str;
        if (stdStringIsUTF8) {
          str = UTF8ToString(payload, length, true);
        } else {
          str = "";
          for (var i = 0; i < length; ++i) {
            str += String.fromCharCode(HEAPU8[payload + i]);
          }
        }
        _free(value);
        return str;
      },
      toWireType(destructors, value) {
        if (value instanceof ArrayBuffer) {
          value = new Uint8Array(value);
        }
        var length;
        var valueIsOfTypeString = typeof value === "string";
        if (!(valueIsOfTypeString || ArrayBuffer.isView(value) && value.BYTES_PER_ELEMENT == 1)) {
          throwBindingError("Cannot pass non-string to std::string");
        }
        if (stdStringIsUTF8 && valueIsOfTypeString) {
          length = lengthBytesUTF8(value);
        } else {
          length = value.length;
        }
        var base = _malloc(4 + length + 1);
        var ptr = base + 4;
        HEAPU32[base >> 2] = length;
        if (valueIsOfTypeString) {
          if (stdStringIsUTF8) {
            stringToUTF8(value, ptr, length + 1);
          } else {
            for (var i = 0; i < length; ++i) {
              var charCode = value.charCodeAt(i);
              if (charCode > 255) {
                _free(base);
                throwBindingError("String has UTF-16 code units that do not fit in 8 bits");
              }
              HEAPU8[ptr + i] = charCode;
            }
          }
        } else {
          HEAPU8.set(value, ptr);
        }
        if (destructors !== null) {
          destructors.push(_free, base);
        }
        return base;
      },
      readValueFromPointer: readPointer,
      destructorFunction(ptr) {
        _free(ptr);
      }
    });
  };
  var UTF16Decoder = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0;
  ;
  var UTF16ToString = (ptr, maxBytesToRead, ignoreNul) => {
    assert(ptr % 2 == 0, "pointer passed to UTF16ToString must be 2-byte aligned");
    var idx = ptr >> 1;
    var endIdx = findStringEnd(HEAPU16, idx, maxBytesToRead / 2, ignoreNul);
    if (endIdx - idx > 16 && UTF16Decoder)
      return UTF16Decoder.decode(HEAPU16.subarray(idx, endIdx));
    var str = "";
    for (var i = idx; i < endIdx; ++i) {
      var codeUnit = HEAPU16[i];
      str += String.fromCharCode(codeUnit);
    }
    return str;
  };
  var UTF32ToString = (ptr, maxBytesToRead, ignoreNul) => {
    assert(ptr % 4 == 0, "pointer passed to UTF32ToString must be 2-byte aligned");
    var str = "";
    var startIdx = ptr >> 2;
    for (var i = 0; !(i >= maxBytesToRead / 4); i++) {
      var utf32 = HEAPU32[startIdx + i];
      if (!utf32 && !ignoreNul) break;
      str += String.fromCodePoint(utf32);
    }
    return str;
  };
  var lengthBytesUTF16 = (str) => str.length * 2;
  var lengthBytesUTF32 = (str) => {
    var len = 0;
    for (var i = 0; i < str.length; ++i) {
      var codePoint = str.codePointAt(i);
      if (codePoint > 65535) {
        i++;
      }
      len += 4;
    }
    return len;
  };
  var stringToUTF16 = (str, outPtr, maxBytesToWrite = 2147483647) => {
    assert(outPtr % 2 == 0, "pointer passed to stringToUTF16 must be 2-byte aligned");
    assert(typeof maxBytesToWrite === "number", "stringToUTF16 requires a third parameter that specifies the length of the output buffer");
    if (maxBytesToWrite < 2) return 0;
    maxBytesToWrite -= 2;
    var startPtr = outPtr;
    var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
    for (var i = 0; i < numCharsToWrite; ++i) {
      var codeUnit = str.charCodeAt(i);
      HEAP16[outPtr >> 1] = codeUnit;
      outPtr += 2;
    }
    HEAP16[outPtr >> 1] = 0;
    return outPtr - startPtr;
  };
  var stringToUTF32 = (str, outPtr, maxBytesToWrite = 2147483647) => {
    assert(outPtr % 4 == 0, "pointer passed to stringToUTF32 must be 4-byte aligned");
    assert(typeof maxBytesToWrite === "number", "stringToUTF32 requires a third parameter that specifies the length of the output buffer");
    if (maxBytesToWrite < 4) return 0;
    var startPtr = outPtr;
    var endPtr = startPtr + maxBytesToWrite - 4;
    for (var i = 0; i < str.length; ++i) {
      var codePoint = str.codePointAt(i);
      if (codePoint > 65535) {
        i++;
      }
      HEAP32[outPtr >> 2] = codePoint;
      outPtr += 4;
      if (outPtr + 4 > endPtr) break;
    }
    HEAP32[outPtr >> 2] = 0;
    return outPtr - startPtr;
  };
  var __embind_register_std_wstring = (typeID, charSize, name) => {
    name = AsciiToString(name);
    var decodeString, encodeString, lengthBytesUTF;
    if (charSize === 2) {
      decodeString = UTF16ToString;
      encodeString = stringToUTF16;
      lengthBytesUTF = lengthBytesUTF16;
    } else {
      assert(charSize === 4, "only 2-byte and 4-byte strings are currently supported");
      decodeString = UTF32ToString;
      encodeString = stringToUTF32;
      lengthBytesUTF = lengthBytesUTF32;
    }
    registerType(typeID, {
      name,
      fromWireType: (value) => {
        var length = HEAPU32[value >> 2];
        var str = decodeString(value + 4, length * charSize, true);
        _free(value);
        return str;
      },
      toWireType: (destructors, value) => {
        if (!(typeof value === "string")) {
          throwBindingError(`Cannot pass non-string to C++ string type ${name}`);
        }
        var length = lengthBytesUTF(value);
        var ptr = _malloc(4 + length + charSize);
        HEAPU32[ptr >> 2] = length / charSize;
        encodeString(value, ptr + 4, length + charSize);
        if (destructors !== null) {
          destructors.push(_free, ptr);
        }
        return ptr;
      },
      readValueFromPointer: readPointer,
      destructorFunction(ptr) {
        _free(ptr);
      }
    });
  };
  var __embind_register_value_object = (typeID, name, constructorSignature, rawConstructor, destructorSignature, rawDestructor, valueSize, isTrivial) => {
    structRegistrations[typeID] = {
      name: AsciiToString(name),
      rawConstructor: embind__requireFunction(constructorSignature, rawConstructor),
      rawDestructor: embind__requireFunction(destructorSignature, rawDestructor),
      valueSize,
      isTrivial: !!isTrivial,
      fields: []
    };
  };
  var __embind_register_value_object_field = (structTypeID, fieldName, getterReturnTypeID, getterSignature, getter, getterContext, setterArgumentTypeID, setterSignature, setter, setterContext) => {
    structRegistrations[structTypeID].fields.push({
      fieldName: AsciiToString(fieldName),
      getterReturnTypeID,
      getter: embind__requireFunction(getterSignature, getter),
      getterContext,
      setterArgumentTypeID,
      setter: embind__requireFunction(setterSignature, setter),
      setterContext
    });
  };
  var __embind_register_void = (typeID, name) => {
    name = AsciiToString(name);
    registerType(typeID, {
      isVoid: true,
      // void return values can be optimized out sometimes
      name,
      fromWireType: () => void 0,
      // TODO: assert if anything else is given?
      toWireType: (destructors, o) => void 0
    });
  };
  var __emval_array_to_memory_view = (dst, src) => {
    dst = Emval.toValue(dst);
    src = Emval.toValue(src);
    dst.set(src);
  };
  var emval_methodCallers = [];
  var emval_addMethodCaller = (caller) => {
    var id = emval_methodCallers.length;
    emval_methodCallers.push(caller);
    return id;
  };
  var emval_lookupTypes = (argCount, argTypes) => {
    var a = new Array(argCount);
    for (var i = 0; i < argCount; ++i) {
      a[i] = requireRegisteredType(
        HEAPU32[argTypes + i * 4 >> 2],
        `parameter ${i}`
      );
    }
    return a;
  };
  var emval_returnValue = (toReturnWire, destructorsRef, handle) => {
    var destructors = [];
    var result = toReturnWire(destructors, handle);
    if (destructors.length) {
      HEAPU32[destructorsRef >> 2] = Emval.toHandle(destructors);
    }
    return result;
  };
  var emval_symbols = {};
  var getStringOrSymbol = (address) => {
    var symbol = emval_symbols[address];
    if (symbol === void 0) {
      return AsciiToString(address);
    }
    return symbol;
  };
  var __emval_create_invoker = (argCount, argTypesPtr, kind) => {
    const GenericWireTypeSize = 8;
    var [retType, ...argTypes] = emval_lookupTypes(argCount, argTypesPtr);
    var toReturnWire = retType.toWireType.bind(retType);
    var argFromPtr = argTypes.map((type) => type.readValueFromPointer.bind(type));
    argCount--;
    var captures = { "toValue": Emval.toValue };
    var args = argFromPtr.map((argFromPtr2, i) => {
      var captureName = `argFromPtr${i}`;
      captures[captureName] = argFromPtr2;
      return `${captureName}(args${i ? "+" + i * GenericWireTypeSize : ""})`;
    });
    var functionBody;
    switch (kind) {
      case 0:
        functionBody = "toValue(handle)";
        break;
      case 2:
        functionBody = "new (toValue(handle))";
        break;
      case 3:
        functionBody = "";
        break;
      case 1:
        captures["getStringOrSymbol"] = getStringOrSymbol;
        functionBody = "toValue(handle)[getStringOrSymbol(methodName)]";
        break;
    }
    functionBody += `(${args})`;
    if (!retType.isVoid) {
      captures["toReturnWire"] = toReturnWire;
      captures["emval_returnValue"] = emval_returnValue;
      functionBody = `return emval_returnValue(toReturnWire, destructorsRef, ${functionBody})`;
    }
    functionBody = `return function (handle, methodName, destructorsRef, args) {
${functionBody}
}`;
    var invokerFunction = new Function(Object.keys(captures), functionBody)(...Object.values(captures));
    var functionName = `methodCaller<(${argTypes.map((t) => t.name)}) => ${retType.name}>`;
    return emval_addMethodCaller(createNamedFunction(functionName, invokerFunction));
  };
  var __emval_get_global = (name) => {
    if (!name) {
      return Emval.toHandle(globalThis);
    }
    name = getStringOrSymbol(name);
    return Emval.toHandle(globalThis[name]);
  };
  var __emval_get_property = (handle, key) => {
    handle = Emval.toValue(handle);
    key = Emval.toValue(key);
    return Emval.toHandle(handle[key]);
  };
  var __emval_incref = (handle) => {
    if (handle > EMVAL_LAST_RESERVED_HANDLE) {
      emval_handles[handle + 1] += 1;
    }
  };
  var __emval_invoke = (caller, handle, methodName, destructorsRef, args) => {
    return emval_methodCallers[caller](handle, methodName, destructorsRef, args);
  };
  var __emval_new_cstring = (v) => Emval.toHandle(getStringOrSymbol(v));
  var __emval_run_destructors = (handle) => {
    var destructors = Emval.toValue(handle);
    runDestructors(destructors);
    __emval_decref(handle);
  };
  var __tzset_js = (timezone, daylight, std_name, dst_name) => {
    var currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    var winter = new Date(currentYear, 0, 1);
    var summer = new Date(currentYear, 6, 1);
    var winterOffset = winter.getTimezoneOffset();
    var summerOffset = summer.getTimezoneOffset();
    var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
    HEAPU32[timezone >> 2] = stdTimezoneOffset * 60;
    HEAP32[daylight >> 2] = Number(winterOffset != summerOffset);
    var extractZone = (timezoneOffset) => {
      var sign = timezoneOffset >= 0 ? "-" : "+";
      var absOffset = Math.abs(timezoneOffset);
      var hours = String(Math.floor(absOffset / 60)).padStart(2, "0");
      var minutes = String(absOffset % 60).padStart(2, "0");
      return `UTC${sign}${hours}${minutes}`;
    };
    var winterName = extractZone(winterOffset);
    var summerName = extractZone(summerOffset);
    assert(winterName);
    assert(summerName);
    assert(lengthBytesUTF8(winterName) <= 16, `timezone name truncated to fit in TZNAME_MAX (${winterName})`);
    assert(lengthBytesUTF8(summerName) <= 16, `timezone name truncated to fit in TZNAME_MAX (${summerName})`);
    if (summerOffset < winterOffset) {
      stringToUTF8(winterName, std_name, 17);
      stringToUTF8(summerName, dst_name, 17);
    } else {
      stringToUTF8(winterName, dst_name, 17);
      stringToUTF8(summerName, std_name, 17);
    }
  };
  const INT53_MAX = 9007199254740992;
  const INT53_MIN = -9007199254740992;
  var bigintToI53Checked = (num) => num < INT53_MIN || num > INT53_MAX ? NaN : Number(num);
  var checkWasiClock = (clock_id) => clock_id >= 0 && clock_id <= 3;
  const nowIsMonotonic = 1;
  var _emscripten_date_now = () => Date.now();
  var _emscripten_get_now = () => performance.now();
  function _clock_time_get(clk_id, ignored_precision, ptime) {
    ignored_precision = bigintToI53Checked(ignored_precision);
    if (!checkWasiClock(clk_id)) {
      return 28;
    }
    var now;
    if (clk_id === 0) {
      now = _emscripten_date_now();
    } else if (nowIsMonotonic) {
      now = _emscripten_get_now();
    } else {
      return 52;
    }
    var nsec = Math.round(now * 1e6);
    HEAP64[ptime >> 3] = BigInt(nsec);
    return 0;
    ;
  }
  var alignMemory = (size, alignment) => {
    assert(alignment, "alignment argument is required");
    return Math.ceil(size / alignment) * alignment;
  };
  var getHeapMax = () => (
    // Stay one Wasm page short of 4GB: while e.g. Chrome is able to allocate
    // full 4GB Wasm memories, the size will wrap back to 0 bytes in Wasm side
    // for any code that deals with heap sizes, which would require special
    // casing all heap size related code to treat 0 specially.
    2147483648
  );
  var growMemory = (size) => {
    var oldHeapSize = wasmMemory.buffer.byteLength;
    var pages = (size - oldHeapSize + 65535) / 65536 | 0;
    try {
      wasmMemory.grow(pages);
      updateMemoryViews();
      return 1;
    } catch (e) {
      err(`growMemory: Attempted to grow heap from ${oldHeapSize} bytes to ${size} bytes, but got error: ${e}`);
    }
  };
  var _emscripten_resize_heap = (requestedSize) => {
    var oldSize = HEAPU8.length;
    requestedSize >>>= 0;
    assert(requestedSize > oldSize);
    var maxHeapSize = getHeapMax();
    if (requestedSize > maxHeapSize) {
      err(`Cannot enlarge memory, requested ${requestedSize} bytes, but the limit is ${maxHeapSize} bytes!`);
      return false;
    }
    for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
      var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
      overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
      var newSize = Math.min(maxHeapSize, alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536));
      var replacement = growMemory(newSize);
      if (replacement) {
        return true;
      }
    }
    err(`Failed to grow the heap from ${oldSize} bytes to ${newSize} bytes, not enough memory!`);
    return false;
  };
  var ENV = {};
  var getExecutableName = () => thisProgram;
  var getEnvStrings = () => {
    if (!getEnvStrings.strings) {
      var lang = (globalThis.navigator?.language ?? "C").replace("-", "_") + ".UTF-8";
      var env = {
        "USER": "web_user",
        "LOGNAME": "web_user",
        "PATH": "/",
        "PWD": "/",
        "HOME": "/home/web_user",
        "LANG": lang,
        "_": getExecutableName()
      };
      for (var x in ENV) {
        if (ENV[x] === void 0) delete env[x];
        else env[x] = ENV[x];
      }
      var strings = [];
      for (var x in env) {
        strings.push(`${x}=${env[x]}`);
      }
      getEnvStrings.strings = strings;
    }
    return getEnvStrings.strings;
  };
  var _environ_get = (__environ, environ_buf) => {
    var bufSize = 0;
    var envp = 0;
    for (var string of getEnvStrings()) {
      var ptr = environ_buf + bufSize;
      HEAPU32[__environ + envp >> 2] = ptr;
      bufSize += stringToUTF8(string, ptr, Infinity) + 1;
      envp += 4;
    }
    return 0;
  };
  var _environ_sizes_get = (penviron_count, penviron_buf_size) => {
    var strings = getEnvStrings();
    HEAPU32[penviron_count >> 2] = strings.length;
    var bufSize = 0;
    for (var string of strings) {
      bufSize += lengthBytesUTF8(string) + 1;
    }
    HEAPU32[penviron_buf_size >> 2] = bufSize;
    return 0;
  };
  var _fd_close = (fd) => {
    abort("fd_close called without SYSCALLS_REQUIRE_FILESYSTEM");
  };
  function _fd_seek(fd, offset, whence, newOffset) {
    offset = bigintToI53Checked(offset);
    return 70;
    ;
  }
  var printCharBuffers = [null, [], []];
  var printChar = (stream, curr) => {
    var buffer = printCharBuffers[stream];
    assert(buffer);
    if (!curr || curr === 10) {
      (stream === 1 ? out : err)(UTF8ArrayToString(buffer));
      buffer.length = 0;
    } else {
      buffer.push(curr);
    }
  };
  var flush_NO_FILESYSTEM = () => {
    _fflush(0);
    if (printCharBuffers[1].length) printChar(1, 10);
    if (printCharBuffers[2].length) printChar(2, 10);
  };
  var _fd_write = (fd, iov, iovcnt, pnum) => {
    var num = 0;
    for (var i = 0; i < iovcnt; i++) {
      var ptr = HEAPU32[iov >> 2];
      var len = HEAPU32[iov + 4 >> 2];
      iov += 8;
      for (var j = 0; j < len; j++) {
        printChar(fd, HEAPU8[ptr + j]);
      }
      num += len;
    }
    HEAPU32[pnum >> 2] = num;
    return 0;
  };
  init_ClassHandle();
  init_RegisteredPointer();
  assert(emval_handles.length === EMVAL_RESERVED_HANDLES * 2);
  {
    if (Module["noExitRuntime"]) noExitRuntime = Module["noExitRuntime"];
    if (Module["print"]) out = Module["print"];
    if (Module["printErr"]) err = Module["printErr"];
    Module["FS_createDataFile"] = FS.createDataFile;
    Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
    checkIncomingModuleAPI();
    if (Module["arguments"]) programArgs = Module["arguments"];
    if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
    assert(typeof Module["memoryInitializerPrefixURL"] === "undefined", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["pthreadMainPrefixURL"] === "undefined", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["cdInitializerPrefixURL"] === "undefined", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["filePackagePrefixURL"] === "undefined", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["read"] === "undefined", "Module.read option was removed");
    assert(typeof Module["readAsync"] === "undefined", "Module.readAsync option was removed (modify readAsync in JS)");
    assert(typeof Module["readBinary"] === "undefined", "Module.readBinary option was removed (modify readBinary in JS)");
    assert(typeof Module["setWindowTitle"] === "undefined", "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)");
    assert(typeof Module["TOTAL_MEMORY"] === "undefined", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
    assert(typeof Module["ENVIRONMENT"] === "undefined", "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");
    assert(typeof Module["STACK_SIZE"] === "undefined", "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time");
    assert(typeof Module["wasmMemory"] === "undefined", "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally");
    assert(typeof Module["INITIAL_MEMORY"] === "undefined", "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");
    var preInit = Module["preInit"];
    if (preInit) {
      if (typeof preInit === "function") Module["preInit"] = preInit = [preInit];
      while (preInit.length > 0) {
        preInit.shift()();
      }
    }
    consumedModuleProp("preInit");
  }
  var missingLibrarySymbols = [
    "writeI53ToI64",
    "writeI53ToI64Clamped",
    "writeI53ToI64Signaling",
    "writeI53ToU64Clamped",
    "writeI53ToU64Signaling",
    "readI53FromI64",
    "readI53FromU64",
    "convertI32PairToI53",
    "convertI32PairToI53Checked",
    "convertU32PairToI53",
    "getTempRet0",
    "setTempRet0",
    "exitJS",
    "withStackSave",
    "strError",
    "inetPton4",
    "inetNtop4",
    "inetPton6",
    "inetNtop6",
    "readSockaddr",
    "writeSockaddr",
    "readEmAsmArgs",
    "jstoi_q",
    "autoResumeAudioContext",
    "getDynCaller",
    "dynCall",
    "handleException",
    "keepRuntimeAlive",
    "runtimeKeepalivePush",
    "runtimeKeepalivePop",
    "callUserCallback",
    "maybeExit",
    "asyncLoad",
    "asmjsMangle",
    "mmapAlloc",
    "HandleAllocator",
    "getUniqueRunDependency",
    "addRunDependency",
    "removeRunDependency",
    "addOnInit",
    "addOnPostCtor",
    "addOnPreMain",
    "addOnExit",
    "STACK_SIZE",
    "STACK_ALIGN",
    "POINTER_SIZE",
    "ASSERTIONS",
    "ccall",
    "cwrap",
    "convertJsFunctionToWasm",
    "getEmptyTableSlot",
    "updateTableMap",
    "getFunctionAddress",
    "addFunction",
    "removeFunction",
    "setValue",
    "getValue",
    "intArrayFromString",
    "intArrayToString",
    "stringToAscii",
    "stringToNewUTF8",
    "stringToUTF8OnStack",
    "writeArrayToMemory",
    "registerKeyEventCallback",
    "maybeCStringToJsString",
    "findEventTarget",
    "getBoundingClientRect",
    "fillMouseEventData",
    "registerMouseEventCallback",
    "registerWheelEventCallback",
    "registerUiEventCallback",
    "registerFocusEventCallback",
    "fillDeviceOrientationEventData",
    "registerDeviceOrientationEventCallback",
    "fillDeviceMotionEventData",
    "registerDeviceMotionEventCallback",
    "screenOrientation",
    "fillOrientationChangeEventData",
    "registerOrientationChangeEventCallback",
    "fillFullscreenChangeEventData",
    "registerFullscreenChangeEventCallback",
    "callCanvasResizedCallback",
    "JSEvents_requestFullscreen",
    "JSEvents_resizeCanvasForFullscreen",
    "registerRestoreOldStyle",
    "hideEverythingExceptGivenElement",
    "restoreHiddenElements",
    "setLetterbox",
    "currentFullscreenStrategy",
    "softFullscreenResizeWebGLRenderTarget",
    "doRequestFullscreen",
    "fillPointerlockChangeEventData",
    "registerPointerlockChangeEventCallback",
    "registerPointerlockErrorEventCallback",
    "requestPointerLock",
    "fillVisibilityChangeEventData",
    "registerVisibilityChangeEventCallback",
    "registerTouchEventCallback",
    "fillGamepadEventData",
    "registerGamepadEventCallback",
    "registerBeforeUnloadEventCallback",
    "fillBatteryEventData",
    "registerBatteryEventCallback",
    "setCanvasElementSize",
    "getCanvasElementSize",
    "jsStackTrace",
    "getCallstack",
    "convertPCtoSourceLocation",
    "wasiRightsToMuslOFlags",
    "wasiOFlagsToMuslOFlags",
    "initRandomFill",
    "randomFill",
    "safeSetTimeout",
    "safeClearTimeout",
    "setImmediateWrapped",
    "safeRequestAnimationFrame",
    "clearImmediateWrapped",
    "registerPostMainLoop",
    "registerPreMainLoop",
    "getPromise",
    "makePromise",
    "addPromise",
    "idsToPromises",
    "makePromiseCallback",
    "Browser_asyncPrepareDataCounter",
    "isLeapYear",
    "ydayFromDate",
    "arraySum",
    "addDays",
    "getSocketFromFD",
    "getSocketAddress",
    "heapObjectForWebGLType",
    "toTypedArrayIndex",
    "webgl_enable_ANGLE_instanced_arrays",
    "webgl_enable_OES_vertex_array_object",
    "webgl_enable_WEBGL_draw_buffers",
    "webgl_enable_WEBGL_multi_draw",
    "webgl_enable_EXT_polygon_offset_clamp",
    "webgl_enable_EXT_clip_control",
    "webgl_enable_WEBGL_polygon_mode",
    "emscriptenWebGLGet",
    "computeUnpackAlignedImageSize",
    "colorChannelsInGlTextureFormat",
    "emscriptenWebGLGetTexPixelData",
    "emscriptenWebGLGetUniform",
    "webglGetProgramUniformLocation",
    "webglGetUniformLocation",
    "webglPrepareUniformLocationsBeforeFirstUse",
    "webglGetLeftBracePos",
    "emscriptenWebGLGetVertexAttrib",
    "__glGetActiveAttribOrUniform",
    "writeGLArray",
    "registerWebGlEventCallback",
    "runAndAbortIfError",
    "writeStringToMemory",
    "writeAsciiToMemory",
    "allocateUTF8",
    "allocateUTF8OnStack",
    "demangle",
    "stackTrace",
    "getNativeTypeSize",
    "getInheritedInstanceCount",
    "getLiveInheritedInstances",
    "getFunctionArgsName",
    "createJsInvokerSignature",
    "PureVirtualError",
    "registerInheritedInstance",
    "unregisterInheritedInstance",
    "installIndexedIterator",
    "setDelayFunction",
    "validateThis",
    "count_emval_handles",
    "isCppExceptionObject"
  ];
  missingLibrarySymbols.forEach(missingLibrarySymbol);
  var unexportedSymbols = [
    "run",
    "out",
    "err",
    "callMain",
    "abort",
    "wasmExports",
    "writeStackCookie",
    "checkStackCookie",
    "INT53_MAX",
    "INT53_MIN",
    "bigintToI53Checked",
    "HEAP8",
    "HEAPU8",
    "HEAP16",
    "HEAPU16",
    "HEAP32",
    "HEAPU32",
    "HEAPF32",
    "HEAPF64",
    "HEAP64",
    "HEAPU64",
    "stackSave",
    "stackRestore",
    "stackAlloc",
    "createNamedFunction",
    "ptrToString",
    "zeroMemory",
    "getHeapMax",
    "growMemory",
    "ENV",
    "ERRNO_CODES",
    "DNS",
    "Protocols",
    "timers",
    "warnOnce",
    "readEmAsmArgsArray",
    "getExecutableName",
    "getWasmTableEntry",
    "alignMemory",
    "wasmTable",
    "wasmMemory",
    "noExitRuntime",
    "addOnPreRun",
    "addOnPostRun",
    "freeTableIndexes",
    "functionsInTableMap",
    "PATH",
    "PATH_FS",
    "UTF8Decoder",
    "UTF8ArrayToString",
    "UTF8ToString",
    "stringToUTF8Array",
    "stringToUTF8",
    "lengthBytesUTF8",
    "AsciiToString",
    "UTF16Decoder",
    "UTF16ToString",
    "stringToUTF16",
    "lengthBytesUTF16",
    "UTF32ToString",
    "stringToUTF32",
    "lengthBytesUTF32",
    "JSEvents",
    "specialHTMLTargets",
    "findCanvasEventTarget",
    "restoreOldWindowedStyle",
    "UNWIND_CACHE",
    "ExitStatus",
    "getEnvStrings",
    "checkWasiClock",
    "flush_NO_FILESYSTEM",
    "emSetImmediate",
    "emClearImmediate",
    "promiseMap",
    "getExceptionMessageCommon",
    "getCppExceptionTag",
    "getCppExceptionThrownObjectFromWebAssemblyException",
    "incrementUncaughtExceptionCount",
    "decrementUncaughtExceptionCount",
    "incrementExceptionRefcount",
    "decrementExceptionRefcount",
    "getExceptionMessage",
    "Browser",
    "requestFullscreen",
    "setCanvasSize",
    "createContext",
    "wget",
    "MONTH_DAYS_REGULAR",
    "MONTH_DAYS_LEAP",
    "MONTH_DAYS_REGULAR_CUMULATIVE",
    "MONTH_DAYS_LEAP_CUMULATIVE",
    "SYSCALLS",
    "tempFixedLengthArray",
    "miniTempWebGLFloatBuffers",
    "miniTempWebGLIntBuffers",
    "GL",
    "AL",
    "GLUT",
    "EGL",
    "GLEW",
    "IDBStore",
    "SDL",
    "SDL_gfx",
    "print",
    "printErr",
    "jstoi_s",
    "InternalError",
    "BindingError",
    "throwInternalError",
    "throwBindingError",
    "registeredTypes",
    "awaitingDependencies",
    "typeDependencies",
    "tupleRegistrations",
    "structRegistrations",
    "sharedRegisterType",
    "whenDependentTypesAreResolved",
    "getTypeName",
    "getFunctionName",
    "heap32VectorToArray",
    "requireRegisteredType",
    "usesDestructorStack",
    "argsUseStackAlloc",
    "checkArgCount",
    "getEnumValueType",
    "getRequiredArgCount",
    "createJsInvoker",
    "UnboundTypeError",
    "EmValType",
    "EmValOptionalType",
    "throwUnboundTypeError",
    "ensureOverloadTable",
    "exposePublicSymbol",
    "replacePublicSymbol",
    "embindRepr",
    "registeredInstances",
    "getBasestPointer",
    "getInheritedInstance",
    "registeredPointers",
    "registerType",
    "integerReadValueFromPointer",
    "enumReadValueFromPointer",
    "floatReadValueFromPointer",
    "assertIntegerRange",
    "readPointer",
    "runDestructors",
    "craftInvokerFunction",
    "embind__requireFunction",
    "genericPointerToWireType",
    "constNoSmartPtrRawPointerToWireType",
    "nonConstNoSmartPtrRawPointerToWireType",
    "init_RegisteredPointer",
    "RegisteredPointer",
    "RegisteredPointer_fromWireType",
    "runDestructor",
    "releaseClassHandle",
    "finalizationRegistry",
    "detachFinalizer",
    "attachFinalizer",
    "makeClassHandle",
    "init_ClassHandle",
    "ClassHandle",
    "throwInstanceAlreadyDeleted",
    "deletionQueue",
    "flushPendingDeletes",
    "delayFunction",
    "RegisteredClass",
    "shallowCopyInternalPointer",
    "downcastPointer",
    "upcastPointer",
    "makeLegalFunctionName",
    "emval_freelist",
    "emval_exception_decrefs",
    "emval_handles",
    "emval_symbols",
    "getStringOrSymbol",
    "Emval",
    "emval_returnValue",
    "emval_lookupTypes",
    "emval_methodCallers",
    "emval_addMethodCaller"
  ];
  unexportedSymbols.forEach(unexportedRuntimeSymbol);
  function checkIncomingModuleAPI() {
    ignoredModuleProp("fetchSettings");
    ignoredModuleProp("logReadFiles");
    ignoredModuleProp("loadSplitModule");
    ignoredModuleProp("onMalloc");
    ignoredModuleProp("onRealloc");
    ignoredModuleProp("onFree");
    ignoredModuleProp("onSbrkGrow");
    ignoredModuleProp("onCOSCacheHit");
    ignoredModuleProp("onCOSCacheMiss");
    ignoredModuleProp("onCOSStore");
    ignoredModuleProp("GL_MAX_TEXTURE_IMAGE_UNITS");
    ignoredModuleProp("SDL_canPlayWithWebAudio");
    ignoredModuleProp("SDL_numSimultaneouslyQueuedBuffers");
    ignoredModuleProp("freePreloadedMediaOnUse");
    ignoredModuleProp("preinitializedWebGLContext");
    ignoredModuleProp("keyboardListeningElement");
    ignoredModuleProp("doNotCaptureKeyboard");
    ignoredModuleProp("extraStackTrace");
    ignoredModuleProp("preloadPlugins");
    ignoredModuleProp("preMainLoop");
    ignoredModuleProp("postMainLoop");
    ignoredModuleProp("forcedAspectRatio");
    ignoredModuleProp("mainScriptUrlOrBlob");
    ignoredModuleProp("onFullScreen");
    ignoredModuleProp("INITIAL_MEMORY");
    ignoredModuleProp("wasmMemory");
    ignoredModuleProp("wasmBinary");
  }
  var ___getTypeName = makeInvalidEarlyAccess("___getTypeName");
  var _malloc = makeInvalidEarlyAccess("_malloc");
  var _free = makeInvalidEarlyAccess("_free");
  var _fflush = makeInvalidEarlyAccess("_fflush");
  var ___funcs_on_exit = makeInvalidEarlyAccess("___funcs_on_exit");
  var _emscripten_stack_get_end = makeInvalidEarlyAccess("_emscripten_stack_get_end");
  var _emscripten_stack_get_base = makeInvalidEarlyAccess("_emscripten_stack_get_base");
  var ___trap = makeInvalidEarlyAccess("___trap");
  var _emscripten_stack_init = makeInvalidEarlyAccess("_emscripten_stack_init");
  var _emscripten_stack_get_free = makeInvalidEarlyAccess("_emscripten_stack_get_free");
  var __emscripten_stack_restore = makeInvalidEarlyAccess("__emscripten_stack_restore");
  var __emscripten_stack_alloc = makeInvalidEarlyAccess("__emscripten_stack_alloc");
  var _emscripten_stack_get_current = makeInvalidEarlyAccess("_emscripten_stack_get_current");
  var ___cxa_decrement_exception_refcount = makeInvalidEarlyAccess("___cxa_decrement_exception_refcount");
  var ___cxa_increment_exception_refcount = makeInvalidEarlyAccess("___cxa_increment_exception_refcount");
  var ___thrown_object_from_unwind_exception = makeInvalidEarlyAccess("___thrown_object_from_unwind_exception");
  var ___get_exception_message = makeInvalidEarlyAccess("___get_exception_message");
  var memory = makeInvalidEarlyAccess("memory");
  var __indirect_function_table = makeInvalidEarlyAccess("__indirect_function_table");
  var ___cpp_exception = makeInvalidEarlyAccess("___cpp_exception");
  var wasmMemory = makeInvalidEarlyAccess("wasmMemory");
  var wasmTable = makeInvalidEarlyAccess("wasmTable");
  function assignWasmExports(wasmExports2) {
    assert(typeof wasmExports2["__getTypeName"] !== "undefined", "missing Wasm export: __getTypeName");
    assert(typeof wasmExports2["malloc"] !== "undefined", "missing Wasm export: malloc");
    assert(typeof wasmExports2["free"] !== "undefined", "missing Wasm export: free");
    assert(typeof wasmExports2["fflush"] !== "undefined", "missing Wasm export: fflush");
    assert(typeof wasmExports2["__funcs_on_exit"] !== "undefined", "missing Wasm export: __funcs_on_exit");
    assert(typeof wasmExports2["emscripten_stack_get_end"] !== "undefined", "missing Wasm export: emscripten_stack_get_end");
    assert(typeof wasmExports2["emscripten_stack_get_base"] !== "undefined", "missing Wasm export: emscripten_stack_get_base");
    assert(typeof wasmExports2["__trap"] !== "undefined", "missing Wasm export: __trap");
    assert(typeof wasmExports2["emscripten_stack_init"] !== "undefined", "missing Wasm export: emscripten_stack_init");
    assert(typeof wasmExports2["emscripten_stack_get_free"] !== "undefined", "missing Wasm export: emscripten_stack_get_free");
    assert(typeof wasmExports2["_emscripten_stack_restore"] !== "undefined", "missing Wasm export: _emscripten_stack_restore");
    assert(typeof wasmExports2["_emscripten_stack_alloc"] !== "undefined", "missing Wasm export: _emscripten_stack_alloc");
    assert(typeof wasmExports2["emscripten_stack_get_current"] !== "undefined", "missing Wasm export: emscripten_stack_get_current");
    assert(typeof wasmExports2["__cxa_decrement_exception_refcount"] !== "undefined", "missing Wasm export: __cxa_decrement_exception_refcount");
    assert(typeof wasmExports2["__cxa_increment_exception_refcount"] !== "undefined", "missing Wasm export: __cxa_increment_exception_refcount");
    assert(typeof wasmExports2["__thrown_object_from_unwind_exception"] !== "undefined", "missing Wasm export: __thrown_object_from_unwind_exception");
    assert(typeof wasmExports2["__get_exception_message"] !== "undefined", "missing Wasm export: __get_exception_message");
    assert(typeof wasmExports2["memory"] !== "undefined", "missing Wasm export: memory");
    assert(typeof wasmExports2["__indirect_function_table"] !== "undefined", "missing Wasm export: __indirect_function_table");
    assert(typeof wasmExports2["__cpp_exception"] !== "undefined", "missing Wasm export: __cpp_exception");
    ___getTypeName = createExportWrapper("__getTypeName", wasmExports2["__getTypeName"], 1);
    _malloc = createExportWrapper("malloc", wasmExports2["malloc"], 1);
    _free = createExportWrapper("free", wasmExports2["free"], 1);
    _fflush = createExportWrapper("fflush", wasmExports2["fflush"], 1);
    ___funcs_on_exit = createExportWrapper("__funcs_on_exit", wasmExports2["__funcs_on_exit"], 0);
    _emscripten_stack_get_end = wasmExports2["emscripten_stack_get_end"];
    _emscripten_stack_get_base = wasmExports2["emscripten_stack_get_base"];
    ___trap = wasmExports2["__trap"];
    _emscripten_stack_init = wasmExports2["emscripten_stack_init"];
    _emscripten_stack_get_free = wasmExports2["emscripten_stack_get_free"];
    __emscripten_stack_restore = wasmExports2["_emscripten_stack_restore"];
    __emscripten_stack_alloc = wasmExports2["_emscripten_stack_alloc"];
    _emscripten_stack_get_current = wasmExports2["emscripten_stack_get_current"];
    ___cxa_decrement_exception_refcount = createExportWrapper("__cxa_decrement_exception_refcount", wasmExports2["__cxa_decrement_exception_refcount"], 1);
    ___cxa_increment_exception_refcount = createExportWrapper("__cxa_increment_exception_refcount", wasmExports2["__cxa_increment_exception_refcount"], 1);
    ___thrown_object_from_unwind_exception = createExportWrapper("__thrown_object_from_unwind_exception", wasmExports2["__thrown_object_from_unwind_exception"], 1);
    ___get_exception_message = createExportWrapper("__get_exception_message", wasmExports2["__get_exception_message"], 3);
    memory = wasmMemory = wasmExports2["memory"];
    __indirect_function_table = wasmTable = wasmExports2["__indirect_function_table"];
    ___cpp_exception = wasmExports2["__cpp_exception"];
  }
  var wasmImports = {
    /** @export */
    __assert_fail: ___assert_fail,
    /** @export */
    __throw_exception_with_stack_trace: ___throw_exception_with_stack_trace,
    /** @export */
    _abort_js: __abort_js,
    /** @export */
    _embind_finalize_value_object: __embind_finalize_value_object,
    /** @export */
    _embind_register_bigint: __embind_register_bigint,
    /** @export */
    _embind_register_bool: __embind_register_bool,
    /** @export */
    _embind_register_class: __embind_register_class,
    /** @export */
    _embind_register_class_constructor: __embind_register_class_constructor,
    /** @export */
    _embind_register_class_function: __embind_register_class_function,
    /** @export */
    _embind_register_emval: __embind_register_emval,
    /** @export */
    _embind_register_enum: __embind_register_enum,
    /** @export */
    _embind_register_enum_value: __embind_register_enum_value,
    /** @export */
    _embind_register_float: __embind_register_float,
    /** @export */
    _embind_register_function: __embind_register_function,
    /** @export */
    _embind_register_integer: __embind_register_integer,
    /** @export */
    _embind_register_memory_view: __embind_register_memory_view,
    /** @export */
    _embind_register_std_string: __embind_register_std_string,
    /** @export */
    _embind_register_std_wstring: __embind_register_std_wstring,
    /** @export */
    _embind_register_value_object: __embind_register_value_object,
    /** @export */
    _embind_register_value_object_field: __embind_register_value_object_field,
    /** @export */
    _embind_register_void: __embind_register_void,
    /** @export */
    _emval_array_to_memory_view: __emval_array_to_memory_view,
    /** @export */
    _emval_create_invoker: __emval_create_invoker,
    /** @export */
    _emval_decref: __emval_decref,
    /** @export */
    _emval_get_global: __emval_get_global,
    /** @export */
    _emval_get_property: __emval_get_property,
    /** @export */
    _emval_incref: __emval_incref,
    /** @export */
    _emval_invoke: __emval_invoke,
    /** @export */
    _emval_new_cstring: __emval_new_cstring,
    /** @export */
    _emval_run_destructors: __emval_run_destructors,
    /** @export */
    _tzset_js: __tzset_js,
    /** @export */
    clock_time_get: _clock_time_get,
    /** @export */
    emscripten_resize_heap: _emscripten_resize_heap,
    /** @export */
    environ_get: _environ_get,
    /** @export */
    environ_sizes_get: _environ_sizes_get,
    /** @export */
    fd_close: _fd_close,
    /** @export */
    fd_seek: _fd_seek,
    /** @export */
    fd_write: _fd_write
  };
  var calledRun;
  function stackCheckInit() {
    _emscripten_stack_init();
    writeStackCookie();
  }
  async function run() {
    assert(!calledRun);
    calledRun = true;
    stackCheckInit();
    preRun();
    var setStatus = Module["setStatus"];
    if (setStatus) {
      setStatus("Running...");
      await new Promise((resolve) => setTimeout(resolve, 1));
      setTimeout(setStatus, 1, "");
    }
    if (ABORT) return;
    initRuntime();
    Module["onRuntimeInitialized"]?.();
    consumedModuleProp("onRuntimeInitialized");
    assert(!Module["_main"], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
    postRun();
  }
  var wasmExports;
  wasmExports = await createWasm();
  await run();
  for (const prop of Object.keys(Module)) {
    if (!(prop in moduleArg)) {
      Object.defineProperty(moduleArg, prop, {
        configurable: true,
        get() {
          abort(`Access to module property ('${prop}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`);
        }
      });
    }
  }
  return Module;
}
var libavoid_default = initAvoidModule;

// src/geometry.js
var Point = class {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  /**
   * Without `epsilon`: exact comparison, like libavoid's `Point::operator==`.
   * With `epsilon`: true if both coordinates differ by less than `epsilon`,
   * like libavoid's `Point::equals(rhs, epsilon)`.
   * @param {PointLike} other
   * @param {number} [epsilon]
   * @returns {boolean}
   */
  equals(other, epsilon) {
    if (epsilon === void 0) {
      return this.x === other.x && this.y === other.y;
    }
    return Math.abs(this.x - other.x) < epsilon && Math.abs(this.y - other.y) < epsilon;
  }
};
var Rect = class {
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   */
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  // As in DOMRect, the edges also hold for a negative width/height.
  get left() {
    return Math.min(this.x, this.x + this.width);
  }
  get top() {
    return Math.min(this.y, this.y + this.height);
  }
  get right() {
    return Math.max(this.x, this.x + this.width);
  }
  get bottom() {
    return Math.max(this.y, this.y + this.height);
  }
};
function pointsFromCoords(coords) {
  const points = new Array(coords.length >> 1);
  for (let i = 0; i < points.length; i++) {
    points[i] = new Point(coords[2 * i], coords[2 * i + 1]);
  }
  return points;
}
function coordsFromPoints(points, context) {
  if (!Array.isArray(points)) {
    throw new TypeError(`${context}: expected an array of points, got ${describe(points)}`);
  }
  const coords = new Array(points.length * 2);
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    if (typeof p !== "object" || p === null) {
      throw new TypeError(`${context}: point ${i} must be an object with x and y, got ${describe(p)}`);
    }
    coords[2 * i] = finite(p.x, `point ${i}.x`, context);
    coords[2 * i + 1] = finite(p.y, `point ${i}.y`, context);
  }
  return coords;
}
function rectFromBox({ min, max }) {
  return new Rect(min.x, min.y, max.x - min.x, max.y - min.y);
}
function finite(value, name, context) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new TypeError(`${context}: ${name} must be a finite number, got ${describe(value)}`);
  }
  return value;
}
function describe(value) {
  if (value === null) return "null";
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (typeof value === "string") return JSON.stringify(value);
  if (Array.isArray(value)) return "an array";
  return typeof value;
}

// src/api.js
var CONN_DIR_ALL = 15;
var MAX_UINT32 = 4294967295;
var MAX_PIN_CLASS_ID = 2147483647 - 1;
var ENUM_PARAMETERS = [
  ["Router", "setRoutingParameter", "RoutingParameter"],
  ["Router", "setRoutingOption", "RoutingOption"],
  ["ConnRef", "setRoutingType", "ConnType"]
];
function installApi(avoid) {
  if (!avoid.Router) return;
  avoid.Point = Point;
  avoid.Rect = Rect;
  installEnumArgumentChecks(avoid);
  const ownership = createOwnership();
  installRouter(avoid, ownership);
  installObstacles(avoid, ownership);
  installConnRef(avoid, ownership);
  installPin(avoid, ownership);
  installPolygonUtilities(avoid);
  for (const name of ["Obstacle", "ShapeRef", "JunctionRef", "ConnRef", "ShapeConnectionPin"]) {
    guardDeletedUse(avoid[name].prototype, name, ownership);
  }
}
function createOwnership() {
  const removed = /* @__PURE__ */ new WeakSet();
  const children = /* @__PURE__ */ new WeakMap();
  const owners = /* @__PURE__ */ new WeakMap();
  return {
    add(owner, child) {
      let set = children.get(owner);
      if (!set) children.set(owner, set = /* @__PURE__ */ new Set());
      set.add(child);
      owners.set(child, owner);
      return child;
    },
    ownerOf(handle) {
      return owners.get(handle);
    },
    isRemoved(handle) {
      return removed.has(handle);
    },
    /** Marks `handle` and everything it owns as removed. */
    remove(handle) {
      removed.add(handle);
      const owned = children.get(handle);
      children.delete(handle);
      if (owned) for (const child of owned) this.remove(child);
      const owner = owners.get(handle);
      owners.delete(handle);
      children.get(owner)?.delete(handle);
    }
  };
}
function guardDeletedUse(proto, className, ownership) {
  const skip = /* @__PURE__ */ new Set(["constructor", "delete", "isDeleted", "isAliasOf", "clone", "deleteLater"]);
  for (const name of Object.getOwnPropertyNames(proto)) {
    if (skip.has(name) || name.startsWith("_")) continue;
    const fn = Object.getOwnPropertyDescriptor(proto, name).value;
    if (typeof fn !== "function") continue;
    proto[name] = function(...args) {
      if (ownership.isRemoved(this)) {
        throw new Error(`${this.constructor?.name || className}.${name}: the object was already deleted`);
      }
      return fn.apply(this, args);
    };
  }
}
function requireHandle(value, Cls, ownership, name, context) {
  if (!(value instanceof Cls)) {
    throw new TypeError(`${context}: ${name} must be a ${Cls.name}, got ${describeValue(value)}`);
  }
  if (ownership.isRemoved(value) || value.isDeleted()) {
    throw new Error(`${context}: ${name} was already deleted`);
  }
  return value;
}
function requireOwnedBy(handle, owner, ownership, name, context) {
  if (ownership.ownerOf(handle) !== owner) {
    throw new Error(`${context}: ${name} belongs to a different Router`);
  }
}
function notCloneable(className) {
  return function() {
    throw new TypeError(`${className}.clone: not supported, the object is owned by its router`);
  };
}
function describeValue(value) {
  if (value === null) return "null";
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) return "an array";
  if (typeof value === "object") {
    const name = value.constructor?.name;
    return name && name !== "Object" ? `a ${name}` : "an object";
  }
  return typeof value;
}
function requireObject(value, name, context) {
  if (typeof value !== "object" || value === null) {
    throw new TypeError(`${context}: ${name} must be an object, got ${describeValue(value)}`);
  }
  return value;
}
function integerIn(value, min, max, name, context) {
  if (!Number.isInteger(value) || value < min || value > max) {
    throw new RangeError(`${context}: ${name} must be an integer from ${min} to ${max}, got ${describeValue(value)}`);
  }
  return value;
}
function optionalBoolean(value, fallback, name, context) {
  if (value === void 0) return fallback;
  if (typeof value !== "boolean") {
    throw new TypeError(`${context}: ${name} must be a boolean, got ${describeValue(value)}`);
  }
  return value;
}
function directionsOf(value, name, context) {
  return value === void 0 ? CONN_DIR_ALL : integerIn(value, 0, CONN_DIR_ALL, name, context);
}
function idOption(options, context) {
  if (options === void 0) return 0;
  requireObject(options, "options", context);
  return options.id === void 0 ? 0 : integerIn(options.id, 0, MAX_UINT32, "options.id", context);
}
function pointArgs(point, name, context) {
  requireObject(point, name, context);
  return [finite(point.x, `${name}.x`, context), finite(point.y, `${name}.y`, context)];
}
function rectArgs(rect, name, context) {
  requireObject(rect, name, context);
  return [
    finite(rect.x, `${name}.x`, context),
    finite(rect.y, `${name}.y`, context),
    finite(rect.width, `${name}.width`, context),
    finite(rect.height, `${name}.height`, context)
  ];
}
function polygonCoords(points, minPoints, context) {
  const coords = coordsFromPoints(points, context);
  if (points.length < minPoints) {
    throw new RangeError(
      `${context}: expected at least ${minPoints} point${minPoints === 1 ? "" : "s"}, got ${points.length}`
    );
  }
  return coords;
}
function installEnumArgumentChecks(avoid) {
  for (const [className, methodName, enumName] of ENUM_PARAMETERS) {
    const proto = avoid[className].prototype;
    const original = proto[methodName];
    const validValues = new Set(Object.values(avoid[enumName]));
    proto[methodName] = function(value, ...rest) {
      if (typeof value !== "number") {
        throw new TypeError(
          `${className}.${methodName}: ${enumName} must be a number (e.g. Avoid.${enumName}.<name>), got ${value === null ? "null" : typeof value}`
        );
      }
      if (!validValues.has(value)) {
        throw new RangeError(`${className}.${methodName}: invalid ${enumName} value ${value}`);
      }
      return original.call(this, value, ...rest);
    };
  }
  const setRoutingParameter = avoid.Router.prototype.setRoutingParameter;
  avoid.Router.prototype.setRoutingParameter = function(parameter, value) {
    finite(value, "value", "Router.setRoutingParameter");
    return setRoutingParameter.call(this, parameter, value);
  };
}
function installRouter(avoid, ownership) {
  const { Router, ShapeRef, JunctionRef, ConnRef } = avoid;
  const proto = Router.prototype;
  const raw = {
    delete: proto.delete,
    processTransaction: proto.processTransaction,
    deleteShape: proto.deleteShape,
    deleteJunction: proto.deleteJunction,
    deleteConnector: proto.deleteConnector
  };
  const owned = (router, handle, Cls, name, context) => {
    requireHandle(handle, Cls, ownership, name, context);
    requireOwnedBy(handle, router, ownership, name, context);
    return handle;
  };
  const pendingAdds = /* @__PURE__ */ new WeakMap();
  const markPending = (router, handle) => {
    let pending = pendingAdds.get(router);
    if (!pending) pendingAdds.set(router, pending = /* @__PURE__ */ new Set());
    pending.add(handle);
    return handle;
  };
  const pointCounts = /* @__PURE__ */ new WeakMap();
  const requirePointCount = (shape, count, context) => {
    const expected = pointCounts.get(shape);
    if (count !== expected) {
      throw new RangeError(
        `${context}: a shape keeps its number of points (libavoid); this shape has ${expected}, got ${count}. Delete it and add a new shape instead.`
      );
    }
  };
  const requireNotPending = (router, handle, name, context) => {
    if (pendingAdds.get(router)?.has(handle)) {
      throw new Error(
        `${context}: the ${name} was added in the current transaction; call processTransaction() before deleting it`
      );
    }
  };
  Object.assign(proto, {
    processTransaction() {
      const changed = raw.processTransaction.call(this);
      pendingAdds.delete(this);
      return changed;
    },
    addShape(shape, options) {
      const context = "Router.addShape";
      const id = idOption(options, context);
      const created = Array.isArray(shape) ? this._addShapePoly(polygonCoords(shape, 3, context), id) : this._addShapeRect(...rectArgs(shape, "shape", context), id);
      pointCounts.set(created, Array.isArray(shape) ? shape.length : 4);
      return markPending(this, ownership.add(this, created));
    },
    moveShape(shape, rectOrPointsOrDx, dy) {
      const context = "Router.moveShape";
      owned(this, shape, ShapeRef, "shape", context);
      if (typeof rectOrPointsOrDx === "number") {
        this._moveShapeDelta(shape, finite(rectOrPointsOrDx, "dx", context), finite(dy, "dy", context));
      } else if (Array.isArray(rectOrPointsOrDx)) {
        const coords = polygonCoords(rectOrPointsOrDx, 3, context);
        requirePointCount(shape, rectOrPointsOrDx.length, context);
        this._moveShapePoly(shape, coords);
      } else {
        const rect = rectArgs(rectOrPointsOrDx, "rect", context);
        requirePointCount(shape, 4, context);
        this._moveShapeRect(shape, ...rect);
      }
    },
    deleteShape(shape) {
      const context = "Router.deleteShape";
      owned(this, shape, ShapeRef, "shape", context);
      requireNotPending(this, shape, "shape", context);
      raw.deleteShape.call(this, shape);
      ownership.remove(shape);
    },
    addJunction(position, options) {
      const context = "Router.addJunction";
      const id = idOption(options, context);
      return markPending(this, ownership.add(this, this._addJunction(...pointArgs(position, "position", context), id)));
    },
    moveJunction(junction, pointOrDx, dy) {
      const context = "Router.moveJunction";
      owned(this, junction, JunctionRef, "junction", context);
      if (typeof pointOrDx === "number") {
        this._moveJunctionBy(junction, finite(pointOrDx, "dx", context), finite(dy, "dy", context));
      } else {
        this._moveJunctionTo(junction, ...pointArgs(pointOrDx, "position", context));
      }
    },
    deleteJunction(junction) {
      const context = "Router.deleteJunction";
      owned(this, junction, JunctionRef, "junction", context);
      requireNotPending(this, junction, "junction", context);
      raw.deleteJunction.call(this, junction);
      ownership.remove(junction);
    },
    addConnector(source, destination, options) {
      const context = "Router.addConnector";
      const src = connEndOf(avoid, ownership, this, source, "source", context);
      const dst = connEndOf(avoid, ownership, this, destination, "destination", context);
      const id = idOption(options, context);
      const conn = ownership.add(this, this._addConnector(id));
      src(conn, true);
      dst(conn, false);
      return conn;
    },
    deleteConnector(connector) {
      raw.deleteConnector.call(this, owned(this, connector, ConnRef, "connector", "Router.deleteConnector"));
      ownership.remove(connector);
    }
  });
  function deleteRouter() {
    if (!this.isDeleted()) {
      ownership.remove(this);
      pendingAdds.delete(this);
    }
    raw.delete.call(this);
  }
  proto.delete = deleteRouter;
  proto[Symbol.dispose] = deleteRouter;
}
function connEndOf(avoid, ownership, router, end, name, context) {
  const { ShapeRef, JunctionRef } = avoid;
  if (end instanceof ShapeRef) {
    throw new TypeError(`${context}: ${name} must be {shape, pin}, not a ShapeRef (pass the pin class id as well)`);
  }
  if (end instanceof JunctionRef) {
    throw new TypeError(`${context}: ${name} must be {junction}, not a JunctionRef`);
  }
  requireObject(end, name, context);
  if ("shape" in end) {
    const shape = requireHandle(end.shape, ShapeRef, ownership, `${name}.shape`, context);
    requireOwnedBy(shape, router, ownership, `${name}.shape`, context);
    const pin = integerIn(end.pin, 1, MAX_PIN_CLASS_ID, `${name}.pin`, context);
    return (conn, isSource) => conn._setEndPin(isSource, shape, pin);
  }
  if ("junction" in end) {
    const junction = requireHandle(end.junction, JunctionRef, ownership, `${name}.junction`, context);
    requireOwnedBy(junction, router, ownership, `${name}.junction`, context);
    return (conn, isSource) => conn._setEndJunction(isSource, junction);
  }
  if ("x" in end || "y" in end) {
    const [x, y] = pointArgs(end, name, context);
    const directions = directionsOf(end.directions, `${name}.directions`, context);
    return (conn, isSource) => conn._setEndPoint(isSource, x, y, directions);
  }
  throw new TypeError(`${context}: ${name} must be {x, y}, {shape, pin} or {junction}`);
}
function installObstacles(avoid, ownership) {
  const { Obstacle, ShapeRef, JunctionRef } = avoid;
  Object.assign(Obstacle.prototype, {
    polygon() {
      return pointsFromCoords(this._polygon());
    },
    position() {
      const { x, y } = this._position();
      return new Point(x, y);
    },
    routingBox() {
      return rectFromBox(this._routingBox());
    }
  });
  Object.assign(ShapeRef.prototype, {
    addPin(pin) {
      const context = "ShapeRef.addPin";
      requireObject(pin, "pin", context);
      return ownership.add(
        this,
        this._addPin(
          integerIn(pin.classId, 1, MAX_PIN_CLASS_ID, "pin.classId", context),
          finite(pin.x, "pin.x", context),
          finite(pin.y, "pin.y", context),
          optionalBoolean(pin.proportional, true, "pin.proportional", context),
          pin.insideOffset === void 0 ? 0 : finite(pin.insideOffset, "pin.insideOffset", context),
          directionsOf(pin.directions, "pin.directions", context)
        )
      );
    }
  });
  Object.assign(JunctionRef.prototype, {
    addPin(pin) {
      const context = "JunctionRef.addPin";
      requireObject(pin, "pin", context);
      return ownership.add(
        this,
        this._addPin(
          integerIn(pin.classId, 1, MAX_PIN_CLASS_ID, "pin.classId", context),
          directionsOf(pin.directions, "pin.directions", context)
        )
      );
    },
    recommendedPosition() {
      const { x, y } = this._recommendedPosition();
      return new Point(x, y);
    }
  });
  installRouterOwnedDelete(ShapeRef, "deleteShape", ownership);
  installRouterOwnedDelete(JunctionRef, "deleteJunction", ownership);
}
function installRouterOwnedDelete(Cls, routerMethod, ownership) {
  const className = Cls.name;
  function remove() {
    if (ownership.isRemoved(this)) {
      throw new Error(`${className}.delete: the object was already deleted`);
    }
    ownership.ownerOf(this)[routerMethod](this);
  }
  Object.assign(Cls.prototype, {
    delete: remove,
    [Symbol.dispose]: remove,
    isDeleted() {
      return ownership.isRemoved(this);
    },
    clone: notCloneable(className)
  });
}
function installConnRef(avoid, ownership) {
  const { ConnRef } = avoid;
  const context = (method) => `ConnRef.${method}`;
  Object.assign(ConnRef.prototype, {
    setSource(end) {
      connEndOf(avoid, ownership, ownership.ownerOf(this), end, "source", context("setSource"))(this, true);
    },
    setDest(end) {
      connEndOf(avoid, ownership, ownership.ownerOf(this), end, "destination", context("setDest"))(this, false);
    },
    displayRoute() {
      return pointsFromCoords(this._displayRoute());
    },
    setRoutingCheckpoints(checkpoints) {
      const ctx = context("setRoutingCheckpoints");
      if (!Array.isArray(checkpoints)) {
        throw new TypeError(`${ctx}: expected an array of checkpoints, got ${describeValue(checkpoints)}`);
      }
      const packed = new Array(checkpoints.length * 4);
      checkpoints.forEach((cp, i) => {
        const name = `checkpoint ${i}`;
        [packed[4 * i], packed[4 * i + 1]] = pointArgs(cp, name, ctx);
        packed[4 * i + 2] = directionsOf(cp.arrival, `${name}.arrival`, ctx);
        packed[4 * i + 3] = directionsOf(cp.departure, `${name}.departure`, ctx);
      });
      this._setCheckpoints(packed);
    },
    routingCheckpoints() {
      const packed = this._checkpoints();
      const checkpoints = new Array(packed.length / 4);
      for (let i = 0; i < checkpoints.length; i++) {
        checkpoints[i] = {
          x: packed[4 * i],
          y: packed[4 * i + 1],
          arrival: packed[4 * i + 2],
          departure: packed[4 * i + 3]
        };
      }
      return checkpoints;
    },
    setCallback(callback) {
      if (typeof callback !== "function") {
        throw new TypeError(`${context("setCallback")}: callback must be a function, got ${describeValue(callback)}`);
      }
      this._setCallback(() => callback(this));
    }
  });
  installRouterOwnedDelete(ConnRef, "deleteConnector", ownership);
}
function installPin(avoid, ownership) {
  const { ShapeConnectionPin } = avoid;
  const proto = ShapeConnectionPin.prototype;
  const rawDelete = proto.delete;
  const rawIsDeleted = proto.isDeleted;
  const rawSetConnectionCost = proto.setConnectionCost;
  function deletePin() {
    if (ownership.isRemoved(this)) {
      throw new Error("ShapeConnectionPin.delete: the object was already deleted");
    }
    rawDelete.call(this);
    ownership.remove(this);
  }
  Object.assign(proto, {
    position() {
      const { x, y } = this._position();
      return new Point(x, y);
    },
    // libavoid asserts (and the module aborts) on a negative cost.
    setConnectionCost(cost) {
      const context = "ShapeConnectionPin.setConnectionCost";
      if (finite(cost, "cost", context) < 0) {
        throw new RangeError(`${context}: cost must be >= 0, got ${cost}`);
      }
      rawSetConnectionCost.call(this, cost);
    },
    updatePosition(position) {
      const context = "ShapeConnectionPin.updatePosition";
      if (ownership.ownerOf(this) instanceof avoid.JunctionRef) {
        throw new TypeError(`${context}: not supported for a junction's pin, it is always at the junction's position`);
      }
      this._updatePosition(...pointArgs(position, "position", context));
    },
    delete: deletePin,
    [Symbol.dispose]: deletePin,
    isDeleted() {
      return ownership.isRemoved(this) || rawIsDeleted.call(this);
    },
    clone: notCloneable("ShapeConnectionPin")
  });
}
function installPolygonUtilities(avoid) {
  const raw = {
    offsetPolygon: avoid._offsetPolygon,
    boundingRectPolygon: avoid._boundingRectPolygon,
    offsetBoundingBox: avoid._offsetBoundingBox
  };
  avoid.offsetPolygon = (points, offset) => {
    const context = "offsetPolygon";
    const coords = polygonCoords(points, 1, context);
    return pointsFromCoords(raw.offsetPolygon(coords, finite(offset, "offset", context)));
  };
  avoid.boundingRectPolygon = (points) => {
    return pointsFromCoords(raw.boundingRectPolygon(polygonCoords(points, 1, "boundingRectPolygon")));
  };
  avoid.offsetBoundingBox = (points, offset) => {
    const context = "offsetBoundingBox";
    const coords = polygonCoords(points, 1, context);
    return rectFromBox(raw.offsetBoundingBox(coords, finite(offset, "offset", context)));
  };
}

// src/common.js
var createAvoidLibObj = (initAvoid) => {
  return {
    avoidLib: void 0,
    async load(filePath = void 0) {
      if (!this.avoidLib) {
        let locateFile2 = function(path, prefix) {
          if (filePath !== void 0 && path.endsWith(".wasm")) return filePath;
          return prefix + path;
        };
        var locateFile = locateFile2;
        const avoidLib = await initAvoid({ "locateFile": locateFile2 });
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
    }
  };
};

// examples/debug-src/index.js
var AvoidLib = createAvoidLibObj(libavoid_default);
export {
  AvoidLib,
  Point,
  Rect
};
