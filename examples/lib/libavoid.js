
var initAvoidModule = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(initAvoidModule) {
  initAvoidModule = initAvoidModule || {};



// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof initAvoidModule !== 'undefined' ? initAvoidModule : {};

// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
Module['ready'] = new Promise(function(resolve, reject) {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_stack_get_end')) {
        Object.defineProperty(Module['ready'], '_emscripten_stack_get_end', { configurable: true, get: function() { abort('You are getting _emscripten_stack_get_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_emscripten_stack_get_end', { configurable: true, set: function() { abort('You are setting _emscripten_stack_get_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_stack_get_free')) {
        Object.defineProperty(Module['ready'], '_emscripten_stack_get_free', { configurable: true, get: function() { abort('You are getting _emscripten_stack_get_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_emscripten_stack_get_free', { configurable: true, set: function() { abort('You are setting _emscripten_stack_get_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_stack_init')) {
        Object.defineProperty(Module['ready'], '_emscripten_stack_init', { configurable: true, get: function() { abort('You are getting _emscripten_stack_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_emscripten_stack_init', { configurable: true, set: function() { abort('You are setting _emscripten_stack_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackSave')) {
        Object.defineProperty(Module['ready'], '_stackSave', { configurable: true, get: function() { abort('You are getting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_stackSave', { configurable: true, set: function() { abort('You are setting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackRestore')) {
        Object.defineProperty(Module['ready'], '_stackRestore', { configurable: true, get: function() { abort('You are getting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_stackRestore', { configurable: true, set: function() { abort('You are setting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackAlloc')) {
        Object.defineProperty(Module['ready'], '_stackAlloc', { configurable: true, get: function() { abort('You are getting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_stackAlloc', { configurable: true, set: function() { abort('You are setting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___wasm_call_ctors')) {
        Object.defineProperty(Module['ready'], '___wasm_call_ctors', { configurable: true, get: function() { abort('You are getting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___wasm_call_ctors', { configurable: true, set: function() { abort('You are setting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___errno_location')) {
        Object.defineProperty(Module['ready'], '___errno_location', { configurable: true, get: function() { abort('You are getting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___errno_location', { configurable: true, set: function() { abort('You are setting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_malloc')) {
        Object.defineProperty(Module['ready'], '_malloc', { configurable: true, get: function() { abort('You are getting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_malloc', { configurable: true, set: function() { abort('You are setting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_free')) {
        Object.defineProperty(Module['ready'], '_free', { configurable: true, get: function() { abort('You are getting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_free', { configurable: true, set: function() { abort('You are setting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_setThrew')) {
        Object.defineProperty(Module['ready'], '_setThrew', { configurable: true, get: function() { abort('You are getting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_setThrew', { configurable: true, set: function() { abort('You are setting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], 'onRuntimeInitialized')) {
        Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, get: function() { abort('You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, set: function() { abort('You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;
ENVIRONMENT_IS_WEB = typeof window === 'object';
ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (Module['ENVIRONMENT']) {
  throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)');
}

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

var nodeFS;
var nodePath;

if (ENVIRONMENT_IS_NODE) {
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = require('path').dirname(scriptDirectory) + '/';
  } else {
    scriptDirectory = __dirname + '/';
  }

// include: node_shell_read.js


read_ = function shell_read(filename, binary) {
  if (!nodeFS) nodeFS = require('fs');
  if (!nodePath) nodePath = require('path');
  filename = nodePath['normalize'](filename);
  return nodeFS['readFileSync'](filename, binary ? null : 'utf8');
};

readBinary = function readBinary(filename) {
  var ret = read_(filename, true);
  if (!ret.buffer) {
    ret = new Uint8Array(ret);
  }
  assert(ret.buffer);
  return ret;
};

// end include: node_shell_read.js
  if (process['argv'].length > 1) {
    thisProgram = process['argv'][1].replace(/\\/g, '/');
  }

  arguments_ = process['argv'].slice(2);

  // MODULARIZE will export the module in the proper place outside, we don't need to export here

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  process['on']('unhandledRejection', abort);

  quit_ = function(status) {
    process['exit'](status);
  };

  Module['inspect'] = function () { return '[Emscripten Module object]'; };

} else
if (ENVIRONMENT_IS_SHELL) {

  if (typeof read != 'undefined') {
    read_ = function shell_read(f) {
      return read(f);
    };
  }

  readBinary = function readBinary(f) {
    var data;
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit === 'function') {
    quit_ = function(status) {
      quit(status);
    };
  }

  if (typeof print !== 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console === 'undefined') console = /** @type{!Console} */({});
    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);
    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr !== 'undefined' ? printErr : print);
  }

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document !== 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // When MODULARIZE, this JS may be executed later, after document.currentScript
  // is gone, so we saved it, and we use it here instead of any other info.
  if (_scriptDir) {
    scriptDirectory = _scriptDir;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {

// include: web_or_worker_shell_read.js


  read_ = function(url) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
  };

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = function(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = function(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

// end include: web_or_worker_shell_read.js
  }

  setWindowTitle = function(title) { document.title = title };
} else
{
  throw new Error('environment detection error');
}

// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.

if (Module['arguments']) arguments_ = Module['arguments'];
if (!Object.getOwnPropertyDescriptor(Module, 'arguments')) {
  Object.defineProperty(Module, 'arguments', {
    configurable: true,
    get: function() {
      abort('Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (Module['thisProgram']) thisProgram = Module['thisProgram'];
if (!Object.getOwnPropertyDescriptor(Module, 'thisProgram')) {
  Object.defineProperty(Module, 'thisProgram', {
    configurable: true,
    get: function() {
      abort('Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (Module['quit']) quit_ = Module['quit'];
if (!Object.getOwnPropertyDescriptor(Module, 'quit')) {
  Object.defineProperty(Module, 'quit', {
    configurable: true,
    get: function() {
      abort('Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
// Assertions on removed incoming Module JS APIs.
assert(typeof Module['memoryInitializerPrefixURL'] === 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['pthreadMainPrefixURL'] === 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['cdInitializerPrefixURL'] === 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['filePackagePrefixURL'] === 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['read'] === 'undefined', 'Module.read option was removed (modify read_ in JS)');
assert(typeof Module['readAsync'] === 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
assert(typeof Module['readBinary'] === 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
assert(typeof Module['setWindowTitle'] === 'undefined', 'Module.setWindowTitle option was removed (modify setWindowTitle in JS)');
assert(typeof Module['TOTAL_MEMORY'] === 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');

if (!Object.getOwnPropertyDescriptor(Module, 'read')) {
  Object.defineProperty(Module, 'read', {
    configurable: true,
    get: function() {
      abort('Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (!Object.getOwnPropertyDescriptor(Module, 'readAsync')) {
  Object.defineProperty(Module, 'readAsync', {
    configurable: true,
    get: function() {
      abort('Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (!Object.getOwnPropertyDescriptor(Module, 'readBinary')) {
  Object.defineProperty(Module, 'readBinary', {
    configurable: true,
    get: function() {
      abort('Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (!Object.getOwnPropertyDescriptor(Module, 'setWindowTitle')) {
  Object.defineProperty(Module, 'setWindowTitle', {
    configurable: true,
    get: function() {
      abort('Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}
var IDBFS = 'IDBFS is no longer included by default; build with -lidbfs.js';
var PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';
var WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';
var NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';




var STACK_ALIGN = 16;

function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
  return Math.ceil(size / factor) * factor;
}

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}

// include: runtime_functions.js


// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // "WebAssembly.Function" constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === "function") {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import "e" "f" (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export "f" (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

function getEmptyTableSlot() {
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    return freeTableIndexes.pop();
  }
  // Grow the table
  try {
    wasmTable.grow(1);
  } catch (err) {
    if (!(err instanceof RangeError)) {
      throw err;
    }
    throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
  }
  return wasmTable.length - 1;
}

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < wasmTable.length; i++) {
      var item = wasmTable.get(i);
      // Ignore null values.
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.

  var ret = getEmptyTableSlot();

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    wasmTable.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    assert(typeof sig !== 'undefined', 'Missing signature argument to addFunction: ' + func);
    var wrapped = convertJsFunctionToWasm(func, sig);
    wasmTable.set(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunction(index) {
  functionsInTableMap.delete(wasmTable.get(index));
  freeTableIndexes.push(index);
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {
  assert(typeof func !== 'undefined');

  return addFunctionWasm(func, sig);
}

// end include: runtime_functions.js
// include: runtime_debug.js


// end include: runtime_debug.js
function makeBigInt(low, high, unsigned) {
  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};

function getCompilerSetting(name) {
  throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for getCompilerSetting or emscripten_get_compiler_setting to work';
}



// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;
if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
if (!Object.getOwnPropertyDescriptor(Module, 'wasmBinary')) {
  Object.defineProperty(Module, 'wasmBinary', {
    configurable: true,
    get: function() {
      abort('Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}
var noExitRuntime = Module['noExitRuntime'] || true;
if (!Object.getOwnPropertyDescriptor(Module, 'noExitRuntime')) {
  Object.defineProperty(Module, 'noExitRuntime', {
    configurable: true,
    get: function() {
      abort('Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (typeof WebAssembly !== 'object') {
  abort('no native wasm support detected');
}

// include: runtime_safe_heap.js


// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)] = value; break;
      case 'i8': HEAP8[((ptr)>>0)] = value; break;
      case 'i16': HEAP16[((ptr)>>1)] = value; break;
      case 'i32': HEAP32[((ptr)>>2)] = value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)] = tempI64[0],HEAP32[(((ptr)+(4))>>2)] = tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)] = value; break;
      case 'double': HEAPF64[((ptr)>>3)] = value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}

// end include: runtime_safe_heap.js
// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  assert(returnType !== 'array', 'Return type should not be "array".');
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);

  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

// We used to include malloc/free by default in the past. Show a helpful error in
// builds with assertions.

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((Uint8Array|Array<number>), number)} */
function allocate(slab, allocator) {
  var ret;
  assert(typeof allocator === 'number', 'allocate no longer takes a type argument')
  assert(typeof slab !== 'number', 'allocate no longer takes a number as arg0')

  if (allocator == ALLOC_STACK) {
    ret = stackAlloc(slab.length);
  } else {
    ret = _malloc(slab.length);
  }

  if (slab.subarray || slab.slice) {
    HEAPU8.set(/** @type {!Uint8Array} */(slab), ret);
  } else {
    HEAPU8.set(new Uint8Array(slab), ret);
  }
  return ret;
}

// include: runtime_strings.js


// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte 0x' + u0.toString(16) + ' encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!');
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      if (u >= 0x200000) warnOnce('Invalid Unicode code point 0x' + u.toString(16) + ' encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF).');
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}

// end include: runtime_strings.js
// include: runtime_strings_extra.js


// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var str = '';

    // If maxBytesToRead is not passed explicitly, it will be undefined, and the for-loop's condition
    // will always evaluate to true. The loop is then terminated on the first null char.
    for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) break;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }

    return str;
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)] = codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)] = 0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)] = codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)] = 0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    assert(str.charCodeAt(i) === str.charCodeAt(i)&0xff);
    HEAP8[((buffer++)>>0)] = str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)] = 0;
}

// end include: runtime_strings_extra.js
// Memory management

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;
if (Module['TOTAL_STACK']) assert(TOTAL_STACK === Module['TOTAL_STACK'], 'the stack size can no longer be determined at runtime')

var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;
if (!Object.getOwnPropertyDescriptor(Module, 'INITIAL_MEMORY')) {
  Object.defineProperty(Module, 'INITIAL_MEMORY', {
    configurable: true,
    get: function() {
      abort('Module.INITIAL_MEMORY has been replaced with plain INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

assert(INITIAL_MEMORY >= TOTAL_STACK, 'INITIAL_MEMORY should be larger than TOTAL_STACK, was ' + INITIAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')');

// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray !== undefined && Int32Array.prototype.set !== undefined,
       'JS engine does not provide full typed array support');

// If memory is defined in wasm, the user can't provide it.
assert(!Module['wasmMemory'], 'Use of `wasmMemory` detected.  Use -s IMPORTED_MEMORY to define wasmMemory externally');
assert(INITIAL_MEMORY == 16777216, 'Detected runtime INITIAL_MEMORY setting.  Use -s IMPORTED_MEMORY to define wasmMemory dynamically');

// include: runtime_init_table.js
// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;

// end include: runtime_init_table.js
// include: runtime_stack_check.js


// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  var max = _emscripten_stack_get_end();
  assert((max & 3) == 0);
  // The stack grows downwards
  HEAPU32[(max >> 2)+1] = 0x2135467;
  HEAPU32[(max >> 2)+2] = 0x89BACDFE;
  // Also test the global address 0 for integrity.
  HEAP32[0] = 0x63736d65; /* 'emsc' */
}

function checkStackCookie() {
  if (ABORT) return;
  var max = _emscripten_stack_get_end();
  var cookie1 = HEAPU32[(max >> 2)+1];
  var cookie2 = HEAPU32[(max >> 2)+2];
  if (cookie1 != 0x2135467 || cookie2 != 0x89BACDFE) {
    abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x' + cookie2.toString(16) + ' ' + cookie1.toString(16));
  }
  // Also test the global address 0 for integrity.
  if (HEAP32[0] !== 0x63736d65 /* 'emsc' */) abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
}

// end include: runtime_stack_check.js
// include: runtime_assertions.js


// Endianness check (note: assumes compiler arch was little-endian)
(function() {
  var h16 = new Int16Array(1);
  var h8 = new Int8Array(h16.buffer);
  h16[0] = 0x6373;
  if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian!';
})();

function abortFnPtrError(ptr, sig) {
	abort("Invalid function pointer " + ptr + " called with signature '" + sig + "'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this). Build with ASSERTIONS=2 for more info.");
}

// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;

__ATINIT__.push({ func: function() { ___wasm_call_ctors() } });

function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  checkStackCookie();
  assert(!runtimeInitialized);
  runtimeInitialized = true;
  
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  checkStackCookie();
  
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  checkStackCookie();
  runtimeExited = true;
}

function postRun() {
  checkStackCookie();

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

assert(Math.imul, 'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.fround, 'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.clz32, 'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.trunc, 'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(function() {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            err('still waiting on run dependencies:');
          }
          err('dependency: ' + dep);
        }
        if (shown) {
          err('(end of list)');
        }
      }, 10000);
    }
  } else {
    err('warning: run dependency added without ID');
  }
}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    err('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what += '';
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  var output = 'abort(' + what + ') at ' + stackTrace();
  what = output;

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  var e = new WebAssembly.RuntimeError(what);

  readyPromiseReject(e);
  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// {{MEM_INITIALIZER}}

// include: memoryprofiler.js


// end include: memoryprofiler.js
// show errors on likely calls to FS when it was not included
var FS = {
  error: function() {
    abort('Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1');
  },
  init: function() { FS.error() },
  createDataFile: function() { FS.error() },
  createPreloadedFile: function() { FS.error() },
  createLazyFile: function() { FS.error() },
  open: function() { FS.error() },
  mkdev: function() { FS.error() },
  registerDevice: function() { FS.error() },
  analyzePath: function() { FS.error() },
  loadFilesFromDB: function() { FS.error() },

  ErrnoError: function ErrnoError() { FS.error() },
};
Module['FS_createDataFile'] = FS.createDataFile;
Module['FS_createPreloadedFile'] = FS.createPreloadedFile;

// include: URIUtils.js


function hasPrefix(str, prefix) {
  return String.prototype.startsWith ?
      str.startsWith(prefix) :
      str.indexOf(prefix) === 0;
}

// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  return hasPrefix(filename, dataURIPrefix);
}

var fileURIPrefix = "file://";

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return hasPrefix(filename, fileURIPrefix);
}

// end include: URIUtils.js
function createExportWrapper(name, fixedasm) {
  return function() {
    var displayName = name;
    var asm = fixedasm;
    if (!fixedasm) {
      asm = Module['asm'];
    }
    assert(runtimeInitialized, 'native function `' + displayName + '` called before runtime initialization');
    assert(!runtimeExited, 'native function `' + displayName + '` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    if (!asm[name]) {
      assert(asm[name], 'exported native function `' + displayName + '` not found');
    }
    return asm[name].apply(null, arguments);
  };
}

var wasmBinaryFile = 'libavoid.wasm';
if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinary(file) {
  try {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    if (readBinary) {
      return readBinary(file);
    } else {
      throw "both async and sync fetching of the wasm failed";
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, try to to load it asynchronously.
  // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
  // See https://github.com/github/fetch/pull/92#issuecomment-140665932
  // Cordova or Electron apps are typically loaded from a file:// url.
  // So use fetch if it is available and the url is not a file, otherwise fall back to XHR.
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
    if (typeof fetch === 'function'
      && !isFileURI(wasmBinaryFile)
    ) {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
        if (!response['ok']) {
          throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
        }
        return response['arrayBuffer']();
      }).catch(function () {
          return getBinary(wasmBinaryFile);
      });
    }
    else {
      if (readAsync) {
        // fetch is not available or url is file => try XHR (readAsync uses XHR internally)
        return new Promise(function(resolve, reject) {
          readAsync(wasmBinaryFile, function(response) { resolve(new Uint8Array(/** @type{!ArrayBuffer} */(response))) }, reject)
        });
      }
    }
  }
    
  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(function() { return getBinary(wasmBinaryFile); });
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    assert(wasmMemory, "memory not found in wasm exports");
    // This assertion doesn't hold when emscripten is run in --post-link
    // mode.
    // TODO(sbc): Read INITIAL_MEMORY out of the wasm file in post-link mode.
    //assert(wasmMemory.buffer.byteLength === 16777216);
    updateGlobalBufferAndViews(wasmMemory.buffer);

    wasmTable = Module['asm']['__indirect_function_table'];
    assert(wasmTable, "table not found in wasm exports");

    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');

  // Async compilation can be confusing when an error on the page overwrites Module
  // (for example, if the order of elements is wrong, and the one defining Module is
  // later), so we save Module and check it later.
  var trueModule = Module;
  function receiveInstantiatedSource(output) {
    // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
    trueModule = null;
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(output['instance']);
  }

  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);

      // Warn on some common problems.
      if (isFileURI(wasmBinaryFile)) {
        err('warning: Loading from a file URI (' + wasmBinaryFile + ') is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing');
      }
      abort(reason);
    });
  }

  // Prefer streaming instantiation if available.
  function instantiateAsync() {
    if (!wasmBinary &&
        typeof WebAssembly.instantiateStreaming === 'function' &&
        !isDataURI(wasmBinaryFile) &&
        // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
        !isFileURI(wasmBinaryFile) &&
        typeof fetch === 'function') {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
        var result = WebAssembly.instantiateStreaming(response, info);
        return result.then(receiveInstantiatedSource, function(reason) {
            // We expect the most common failure cause to be a bad MIME type for the binary,
            // in which case falling back to ArrayBuffer instantiation should work.
            err('wasm streaming compile failed: ' + reason);
            err('falling back to ArrayBuffer instantiation');
            return instantiateArrayBuffer(receiveInstantiatedSource);
          });
      });
    } else {
      return instantiateArrayBuffer(receiveInstantiatedSource);
    }
  }

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  err('asynchronously preparing wasm');
  // If instantiation fails, reject the module ready promise.
  instantiateAsync().catch(readyPromiseReject);
  return {}; // no exports yet; we'll fill them in later
}

// Globals used by JS i64 conversions (see makeSetValue)
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  
};
function array_bounds_check_error(idx,size){ throw 'Array index ' + idx + ' out of bounds: [0,' + size + ')'; }





  function abortStackOverflow(allocSize) {
      abort('Stack overflow! Attempted to allocate ' + allocSize + ' bytes on the stack, but stack has only ' + (_emscripten_stack_get_free() + allocSize) + ' bytes available!');
    }

  function callRuntimeCallbacks(callbacks) {
      while(callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == 'function') {
          callback(Module); // Pass the module as the first argument.
          continue;
        }
        var func = callback.func;
        if (typeof func === 'number') {
          if (callback.arg === undefined) {
            wasmTable.get(func)();
          } else {
            wasmTable.get(func)(callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

  function demangle(func) {
      warnOnce('warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling');
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          error = e;
        }
        if (!error.stack) {
          return '(no stack trace available)';
        }
      }
      return error.stack.toString();
    }

  function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }

  function ___assert_fail(condition, filename, line, func) {
      abort('Assertion failed: ' + UTF8ToString(condition) + ', at: ' + [filename ? UTF8ToString(filename) : 'unknown filename', line, func ? UTF8ToString(func) : 'unknown function']);
    }

  var ExceptionInfoAttrs={DESTRUCTOR_OFFSET:0,REFCOUNT_OFFSET:4,TYPE_OFFSET:8,CAUGHT_OFFSET:12,RETHROWN_OFFSET:13,SIZE:16};
  function ___cxa_allocate_exception(size) {
      // Thrown object is prepended by exception metadata block
      return _malloc(size + ExceptionInfoAttrs.SIZE) + ExceptionInfoAttrs.SIZE;
    }

  function _atexit(func, arg) {
    }
  function ___cxa_atexit(a0,a1
  ) {
  return _atexit(a0,a1);
  }

  function ExceptionInfo(excPtr) {
      this.excPtr = excPtr;
      this.ptr = excPtr - ExceptionInfoAttrs.SIZE;
  
      this.set_type = function(type) {
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.TYPE_OFFSET))>>2)] = type;
      };
  
      this.get_type = function() {
        return HEAP32[(((this.ptr)+(ExceptionInfoAttrs.TYPE_OFFSET))>>2)];
      };
  
      this.set_destructor = function(destructor) {
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.DESTRUCTOR_OFFSET))>>2)] = destructor;
      };
  
      this.get_destructor = function() {
        return HEAP32[(((this.ptr)+(ExceptionInfoAttrs.DESTRUCTOR_OFFSET))>>2)];
      };
  
      this.set_refcount = function(refcount) {
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)] = refcount;
      };
  
      this.set_caught = function (caught) {
        caught = caught ? 1 : 0;
        HEAP8[(((this.ptr)+(ExceptionInfoAttrs.CAUGHT_OFFSET))>>0)] = caught;
      };
  
      this.get_caught = function () {
        return HEAP8[(((this.ptr)+(ExceptionInfoAttrs.CAUGHT_OFFSET))>>0)] != 0;
      };
  
      this.set_rethrown = function (rethrown) {
        rethrown = rethrown ? 1 : 0;
        HEAP8[(((this.ptr)+(ExceptionInfoAttrs.RETHROWN_OFFSET))>>0)] = rethrown;
      };
  
      this.get_rethrown = function () {
        return HEAP8[(((this.ptr)+(ExceptionInfoAttrs.RETHROWN_OFFSET))>>0)] != 0;
      };
  
      // Initialize native structure fields. Should be called once after allocated.
      this.init = function(type, destructor) {
        this.set_type(type);
        this.set_destructor(destructor);
        this.set_refcount(0);
        this.set_caught(false);
        this.set_rethrown(false);
      }
  
      this.add_ref = function() {
        var value = HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)];
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)] = value + 1;
      };
  
      // Returns true if last reference released.
      this.release_ref = function() {
        var prev = HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)];
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)] = prev - 1;
        assert(prev > 0);
        return prev === 1;
      };
    }
  
  var exceptionLast=0;
  
  var uncaughtExceptionCount=0;
  function ___cxa_throw(ptr, type, destructor) {
      var info = new ExceptionInfo(ptr);
      // Initialize ExceptionInfo content after it was allocated in __cxa_allocate_exception.
      info.init(type, destructor);
      exceptionLast = ptr;
      uncaughtExceptionCount++;
      throw ptr + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";
    }

  function _abort() {
      abort();
    }

  function _clock() {
      if (_clock.start === undefined) _clock.start = Date.now();
      return ((Date.now() - _clock.start) * (1000000 / 1000))|0;
    }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  function _emscripten_get_heap_size() {
      return HEAPU8.length;
    }
  
  function abortOnCannotGrowMemory(requestedSize) {
      abort('Cannot enlarge memory arrays to size ' + requestedSize + ' bytes (OOM). Either (1) compile with  -s INITIAL_MEMORY=X  with X higher than the current value ' + HEAP8.length + ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ');
    }
  function _emscripten_resize_heap(requestedSize) {
      abortOnCannotGrowMemory(requestedSize);
    }

  var ENV={};
  
  function getExecutableName() {
      return thisProgram || './this.program';
    }
  function getEnvStrings() {
      if (!getEnvStrings.strings) {
        // Default values.
        // Browser language detection #8751
        var lang = ((typeof navigator === 'object' && navigator.languages && navigator.languages[0]) || 'C').replace('-', '_') + '.UTF-8';
        var env = {
          'USER': 'web_user',
          'LOGNAME': 'web_user',
          'PATH': '/',
          'PWD': '/',
          'HOME': '/home/web_user',
          'LANG': lang,
          '_': getExecutableName()
        };
        // Apply the user-provided values, if any.
        for (var x in ENV) {
          env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(x + '=' + env[x]);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    }
  
  var SYSCALLS={mappings:{},buffers:[null,[],[]],printChar:function(stream, curr) {
        var buffer = SYSCALLS.buffers[stream];
        assert(buffer);
        if (curr === 0 || curr === 10) {
          (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
          buffer.length = 0;
        } else {
          buffer.push(curr);
        }
      },varargs:undefined,get:function() {
        assert(SYSCALLS.varargs != undefined);
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },get64:function(low, high) {
        if (low >= 0) assert(high === 0);
        else assert(high === -1);
        return low;
      }};
  function _environ_get(__environ, environ_buf) {
      var bufSize = 0;
      getEnvStrings().forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        HEAP32[(((__environ)+(i * 4))>>2)] = ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    }

  function _environ_sizes_get(penviron_count, penviron_buf_size) {
      var strings = getEnvStrings();
      HEAP32[((penviron_count)>>2)] = strings.length;
      var bufSize = 0;
      strings.forEach(function(string) {
        bufSize += string.length + 1;
      });
      HEAP32[((penviron_buf_size)>>2)] = bufSize;
      return 0;
    }

  function _fd_close(fd) {
      abort('it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM');
      return 0;
    }

  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
  abort('it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM');
  }

  function flush_NO_FILESYSTEM() {
      // flush anything remaining in the buffers during shutdown
      if (typeof _fflush !== 'undefined') _fflush(0);
      var buffers = SYSCALLS.buffers;
      if (buffers[1].length) SYSCALLS.printChar(1, 10);
      if (buffers[2].length) SYSCALLS.printChar(2, 10);
    }
  function _fd_write(fd, iov, iovcnt, pnum) {
      // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[(((iov)+(i*8))>>2)];
        var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
        for (var j = 0; j < len; j++) {
          SYSCALLS.printChar(fd, HEAPU8[ptr+j]);
        }
        num += len;
      }
      HEAP32[((pnum)>>2)] = num
      return 0;
    }

  function _setTempRet0($i) {
      setTempRet0(($i) | 0);
    }

  function __isLeapYear(year) {
        return year%4 === 0 && (year%100 !== 0 || year%400 === 0);
    }
  
  function __arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {
        // no-op
      }
      return sum;
    }
  
  var __MONTH_DAYS_LEAP=[31,29,31,30,31,30,31,31,30,31,30,31];
  
  var __MONTH_DAYS_REGULAR=[31,28,31,30,31,30,31,31,30,31,30,31];
  function __addDays(date, days) {
      var newDate = new Date(date.getTime());
      while(days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
  
        if (days > daysInCurrentMonth-newDate.getDate()) {
          // we spill over to next month
          days -= (daysInCurrentMonth-newDate.getDate()+1);
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth+1)
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear()+1);
          }
        } else {
          // we stay in current month
          newDate.setDate(newDate.getDate()+days);
          return newDate;
        }
      }
  
      return newDate;
    }
  function _strftime(s, maxsize, format, tm) {
      // size_t strftime(char *restrict s, size_t maxsize, const char *restrict format, const struct tm *restrict timeptr);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/strftime.html
  
      var tm_zone = HEAP32[(((tm)+(40))>>2)];
  
      var date = {
        tm_sec: HEAP32[((tm)>>2)],
        tm_min: HEAP32[(((tm)+(4))>>2)],
        tm_hour: HEAP32[(((tm)+(8))>>2)],
        tm_mday: HEAP32[(((tm)+(12))>>2)],
        tm_mon: HEAP32[(((tm)+(16))>>2)],
        tm_year: HEAP32[(((tm)+(20))>>2)],
        tm_wday: HEAP32[(((tm)+(24))>>2)],
        tm_yday: HEAP32[(((tm)+(28))>>2)],
        tm_isdst: HEAP32[(((tm)+(32))>>2)],
        tm_gmtoff: HEAP32[(((tm)+(36))>>2)],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ''
      };
  
      var pattern = UTF8ToString(format);
  
      // expand format
      var EXPANSION_RULES_1 = {
        '%c': '%a %b %d %H:%M:%S %Y',     // Replaced by the locale's appropriate date and time representation - e.g., Mon Aug  3 14:02:01 2013
        '%D': '%m/%d/%y',                 // Equivalent to %m / %d / %y
        '%F': '%Y-%m-%d',                 // Equivalent to %Y - %m - %d
        '%h': '%b',                       // Equivalent to %b
        '%r': '%I:%M:%S %p',              // Replaced by the time in a.m. and p.m. notation
        '%R': '%H:%M',                    // Replaced by the time in 24-hour notation
        '%T': '%H:%M:%S',                 // Replaced by the time
        '%x': '%m/%d/%y',                 // Replaced by the locale's appropriate date representation
        '%X': '%H:%M:%S',                 // Replaced by the locale's appropriate time representation
        // Modified Conversion Specifiers
        '%Ec': '%c',                      // Replaced by the locale's alternative appropriate date and time representation.
        '%EC': '%C',                      // Replaced by the name of the base year (period) in the locale's alternative representation.
        '%Ex': '%m/%d/%y',                // Replaced by the locale's alternative date representation.
        '%EX': '%H:%M:%S',                // Replaced by the locale's alternative time representation.
        '%Ey': '%y',                      // Replaced by the offset from %EC (year only) in the locale's alternative representation.
        '%EY': '%Y',                      // Replaced by the full alternative year representation.
        '%Od': '%d',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading zeros if there is any alternative symbol for zero; otherwise, with leading <space> characters.
        '%Oe': '%e',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading <space> characters.
        '%OH': '%H',                      // Replaced by the hour (24-hour clock) using the locale's alternative numeric symbols.
        '%OI': '%I',                      // Replaced by the hour (12-hour clock) using the locale's alternative numeric symbols.
        '%Om': '%m',                      // Replaced by the month using the locale's alternative numeric symbols.
        '%OM': '%M',                      // Replaced by the minutes using the locale's alternative numeric symbols.
        '%OS': '%S',                      // Replaced by the seconds using the locale's alternative numeric symbols.
        '%Ou': '%u',                      // Replaced by the weekday as a number in the locale's alternative representation (Monday=1).
        '%OU': '%U',                      // Replaced by the week number of the year (Sunday as the first day of the week, rules corresponding to %U ) using the locale's alternative numeric symbols.
        '%OV': '%V',                      // Replaced by the week number of the year (Monday as the first day of the week, rules corresponding to %V ) using the locale's alternative numeric symbols.
        '%Ow': '%w',                      // Replaced by the number of the weekday (Sunday=0) using the locale's alternative numeric symbols.
        '%OW': '%W',                      // Replaced by the week number of the year (Monday as the first day of the week) using the locale's alternative numeric symbols.
        '%Oy': '%y',                      // Replaced by the year (offset from %C ) using the locale's alternative numeric symbols.
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_1[rule]);
      }
  
      var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
      function leadingSomething(value, digits, character) {
        var str = typeof value === 'number' ? value.toString() : (value || '');
        while (str.length < digits) {
          str = character[0]+str;
        }
        return str;
      }
  
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, '0');
      }
  
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : (value > 0 ? 1 : 0);
        }
  
        var compare;
        if ((compare = sgn(date1.getFullYear()-date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth()-date2.getMonth())) === 0) {
            compare = sgn(date1.getDate()-date2.getDate());
          }
        }
        return compare;
      }
  
      function getFirstWeekStartDate(janFourth) {
          switch (janFourth.getDay()) {
            case 0: // Sunday
              return new Date(janFourth.getFullYear()-1, 11, 29);
            case 1: // Monday
              return janFourth;
            case 2: // Tuesday
              return new Date(janFourth.getFullYear(), 0, 3);
            case 3: // Wednesday
              return new Date(janFourth.getFullYear(), 0, 2);
            case 4: // Thursday
              return new Date(janFourth.getFullYear(), 0, 1);
            case 5: // Friday
              return new Date(janFourth.getFullYear()-1, 11, 31);
            case 6: // Saturday
              return new Date(janFourth.getFullYear()-1, 11, 30);
          }
      }
  
      function getWeekBasedYear(date) {
          var thisDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
          var janFourthNextYear = new Date(thisDate.getFullYear()+1, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
            // this date is after the start of the first week of this year
            if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
              return thisDate.getFullYear()+1;
            } else {
              return thisDate.getFullYear();
            }
          } else {
            return thisDate.getFullYear()-1;
          }
      }
  
      var EXPANSION_RULES_2 = {
        '%a': function(date) {
          return WEEKDAYS[date.tm_wday].substring(0,3);
        },
        '%A': function(date) {
          return WEEKDAYS[date.tm_wday];
        },
        '%b': function(date) {
          return MONTHS[date.tm_mon].substring(0,3);
        },
        '%B': function(date) {
          return MONTHS[date.tm_mon];
        },
        '%C': function(date) {
          var year = date.tm_year+1900;
          return leadingNulls((year/100)|0,2);
        },
        '%d': function(date) {
          return leadingNulls(date.tm_mday, 2);
        },
        '%e': function(date) {
          return leadingSomething(date.tm_mday, 2, ' ');
        },
        '%g': function(date) {
          // %g, %G, and %V give values according to the ISO 8601:2000 standard week-based year.
          // In this system, weeks begin on a Monday and week 1 of the year is the week that includes
          // January 4th, which is also the week that includes the first Thursday of the year, and
          // is also the first week that contains at least four days in the year.
          // If the first Monday of January is the 2nd, 3rd, or 4th, the preceding days are part of
          // the last week of the preceding year; thus, for Saturday 2nd January 1999,
          // %G is replaced by 1998 and %V is replaced by 53. If December 29th, 30th,
          // or 31st is a Monday, it and any following days are part of week 1 of the following year.
          // Thus, for Tuesday 30th December 1997, %G is replaced by 1998 and %V is replaced by 01.
  
          return getWeekBasedYear(date).toString().substring(2);
        },
        '%G': function(date) {
          return getWeekBasedYear(date);
        },
        '%H': function(date) {
          return leadingNulls(date.tm_hour, 2);
        },
        '%I': function(date) {
          var twelveHour = date.tm_hour;
          if (twelveHour == 0) twelveHour = 12;
          else if (twelveHour > 12) twelveHour -= 12;
          return leadingNulls(twelveHour, 2);
        },
        '%j': function(date) {
          // Day of the year (001-366)
          return leadingNulls(date.tm_mday+__arraySum(__isLeapYear(date.tm_year+1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon-1), 3);
        },
        '%m': function(date) {
          return leadingNulls(date.tm_mon+1, 2);
        },
        '%M': function(date) {
          return leadingNulls(date.tm_min, 2);
        },
        '%n': function() {
          return '\n';
        },
        '%p': function(date) {
          if (date.tm_hour >= 0 && date.tm_hour < 12) {
            return 'AM';
          } else {
            return 'PM';
          }
        },
        '%S': function(date) {
          return leadingNulls(date.tm_sec, 2);
        },
        '%t': function() {
          return '\t';
        },
        '%u': function(date) {
          return date.tm_wday || 7;
        },
        '%U': function(date) {
          // Replaced by the week number of the year as a decimal number [00,53].
          // The first Sunday of January is the first day of week 1;
          // days in the new year before this are in week 0. [ tm_year, tm_wday, tm_yday]
          var janFirst = new Date(date.tm_year+1900, 0, 1);
          var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7-janFirst.getDay());
          var endDate = new Date(date.tm_year+1900, date.tm_mon, date.tm_mday);
  
          // is target date after the first Sunday?
          if (compareByDay(firstSunday, endDate) < 0) {
            // calculate difference in days between first Sunday and endDate
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth()-1)-31;
            var firstSundayUntilEndJanuary = 31-firstSunday.getDate();
            var days = firstSundayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();
            return leadingNulls(Math.ceil(days/7), 2);
          }
  
          return compareByDay(firstSunday, janFirst) === 0 ? '01': '00';
        },
        '%V': function(date) {
          // Replaced by the week number of the year (Monday as the first day of the week)
          // as a decimal number [01,53]. If the week containing 1 January has four
          // or more days in the new year, then it is considered week 1.
          // Otherwise, it is the last week of the previous year, and the next week is week 1.
          // Both January 4th and the first Thursday of January are always in week 1. [ tm_year, tm_wday, tm_yday]
          var janFourthThisYear = new Date(date.tm_year+1900, 0, 4);
          var janFourthNextYear = new Date(date.tm_year+1901, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          var endDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
            // if given date is before this years first week, then it belongs to the 53rd week of last year
            return '53';
          }
  
          if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
            // if given date is after next years first week, then it belongs to the 01th week of next year
            return '01';
          }
  
          // given date is in between CW 01..53 of this calendar year
          var daysDifference;
          if (firstWeekStartThisYear.getFullYear() < date.tm_year+1900) {
            // first CW of this year starts last year
            daysDifference = date.tm_yday+32-firstWeekStartThisYear.getDate()
          } else {
            // first CW of this year starts this year
            daysDifference = date.tm_yday+1-firstWeekStartThisYear.getDate();
          }
          return leadingNulls(Math.ceil(daysDifference/7), 2);
        },
        '%w': function(date) {
          return date.tm_wday;
        },
        '%W': function(date) {
          // Replaced by the week number of the year as a decimal number [00,53].
          // The first Monday of January is the first day of week 1;
          // days in the new year before this are in week 0. [ tm_year, tm_wday, tm_yday]
          var janFirst = new Date(date.tm_year, 0, 1);
          var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7-janFirst.getDay()+1);
          var endDate = new Date(date.tm_year+1900, date.tm_mon, date.tm_mday);
  
          // is target date after the first Monday?
          if (compareByDay(firstMonday, endDate) < 0) {
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth()-1)-31;
            var firstMondayUntilEndJanuary = 31-firstMonday.getDate();
            var days = firstMondayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();
            return leadingNulls(Math.ceil(days/7), 2);
          }
          return compareByDay(firstMonday, janFirst) === 0 ? '01': '00';
        },
        '%y': function(date) {
          // Replaced by the last two digits of the year as a decimal number [00,99]. [ tm_year]
          return (date.tm_year+1900).toString().substring(2);
        },
        '%Y': function(date) {
          // Replaced by the year as a decimal number (for example, 1997). [ tm_year]
          return date.tm_year+1900;
        },
        '%z': function(date) {
          // Replaced by the offset from UTC in the ISO 8601:2000 standard format ( +hhmm or -hhmm ).
          // For example, "-0430" means 4 hours 30 minutes behind UTC (west of Greenwich).
          var off = date.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          // convert from minutes into hhmm format (which means 60 minutes = 100 units)
          off = (off / 60)*100 + (off % 60);
          return (ahead ? '+' : '-') + String("0000" + off).slice(-4);
        },
        '%Z': function(date) {
          return date.tm_zone;
        },
        '%%': function() {
          return '%';
        }
      };
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.indexOf(rule) >= 0) {
          pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_2[rule](date));
        }
      }
  
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
  
      writeArrayToMemory(bytes, s);
      return bytes.length-1;
    }
  function _strftime_l(s, maxsize, format, tm) {
      return _strftime(s, maxsize, format, tm); // no locale support yet
    }
var ASSERTIONS = true;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


var asmLibraryArg = {
  "__assert_fail": ___assert_fail,
  "__cxa_allocate_exception": ___cxa_allocate_exception,
  "__cxa_atexit": ___cxa_atexit,
  "__cxa_throw": ___cxa_throw,
  "abort": _abort,
  "array_bounds_check_error": array_bounds_check_error,
  "clock": _clock,
  "emscripten_memcpy_big": _emscripten_memcpy_big,
  "emscripten_resize_heap": _emscripten_resize_heap,
  "environ_get": _environ_get,
  "environ_sizes_get": _environ_sizes_get,
  "fd_close": _fd_close,
  "fd_seek": _fd_seek,
  "fd_write": _fd_write,
  "setTempRet0": _setTempRet0,
  "strftime_l": _strftime_l
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = createExportWrapper("__wasm_call_ctors");

/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = createExportWrapper("malloc");

/** @type {function(...*):?} */
var _free = Module["_free"] = createExportWrapper("free");

/** @type {function(...*):?} */
var _emscripten_bind_VoidPtr___destroy___0 = Module["_emscripten_bind_VoidPtr___destroy___0"] = createExportWrapper("emscripten_bind_VoidPtr___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_HyperedgeImprover_HyperedgeImprover_0 = Module["_emscripten_bind_HyperedgeImprover_HyperedgeImprover_0"] = createExportWrapper("emscripten_bind_HyperedgeImprover_HyperedgeImprover_0");

/** @type {function(...*):?} */
var _emscripten_bind_HyperedgeImprover_clear_0 = Module["_emscripten_bind_HyperedgeImprover_clear_0"] = createExportWrapper("emscripten_bind_HyperedgeImprover_clear_0");

/** @type {function(...*):?} */
var _emscripten_bind_HyperedgeImprover_setRouter_1 = Module["_emscripten_bind_HyperedgeImprover_setRouter_1"] = createExportWrapper("emscripten_bind_HyperedgeImprover_setRouter_1");

/** @type {function(...*):?} */
var _emscripten_bind_HyperedgeImprover___destroy___0 = Module["_emscripten_bind_HyperedgeImprover___destroy___0"] = createExportWrapper("emscripten_bind_HyperedgeImprover___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_Box_Box_0 = Module["_emscripten_bind_Box_Box_0"] = createExportWrapper("emscripten_bind_Box_Box_0");

/** @type {function(...*):?} */
var _emscripten_bind_Box_length_1 = Module["_emscripten_bind_Box_length_1"] = createExportWrapper("emscripten_bind_Box_length_1");

/** @type {function(...*):?} */
var _emscripten_bind_Box_width_0 = Module["_emscripten_bind_Box_width_0"] = createExportWrapper("emscripten_bind_Box_width_0");

/** @type {function(...*):?} */
var _emscripten_bind_Box_height_0 = Module["_emscripten_bind_Box_height_0"] = createExportWrapper("emscripten_bind_Box_height_0");

/** @type {function(...*):?} */
var _emscripten_bind_Box_get_min_0 = Module["_emscripten_bind_Box_get_min_0"] = createExportWrapper("emscripten_bind_Box_get_min_0");

/** @type {function(...*):?} */
var _emscripten_bind_Box_set_min_1 = Module["_emscripten_bind_Box_set_min_1"] = createExportWrapper("emscripten_bind_Box_set_min_1");

/** @type {function(...*):?} */
var _emscripten_bind_Box_get_max_0 = Module["_emscripten_bind_Box_get_max_0"] = createExportWrapper("emscripten_bind_Box_get_max_0");

/** @type {function(...*):?} */
var _emscripten_bind_Box_set_max_1 = Module["_emscripten_bind_Box_set_max_1"] = createExportWrapper("emscripten_bind_Box_set_max_1");

/** @type {function(...*):?} */
var _emscripten_bind_Box___destroy___0 = Module["_emscripten_bind_Box___destroy___0"] = createExportWrapper("emscripten_bind_Box___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_PolygonInterface_clear_0 = Module["_emscripten_bind_PolygonInterface_clear_0"] = createExportWrapper("emscripten_bind_PolygonInterface_clear_0");

/** @type {function(...*):?} */
var _emscripten_bind_PolygonInterface_empty_0 = Module["_emscripten_bind_PolygonInterface_empty_0"] = createExportWrapper("emscripten_bind_PolygonInterface_empty_0");

/** @type {function(...*):?} */
var _emscripten_bind_PolygonInterface_size_0 = Module["_emscripten_bind_PolygonInterface_size_0"] = createExportWrapper("emscripten_bind_PolygonInterface_size_0");

/** @type {function(...*):?} */
var _emscripten_bind_PolygonInterface_id_0 = Module["_emscripten_bind_PolygonInterface_id_0"] = createExportWrapper("emscripten_bind_PolygonInterface_id_0");

/** @type {function(...*):?} */
var _emscripten_bind_PolygonInterface_at_1 = Module["_emscripten_bind_PolygonInterface_at_1"] = createExportWrapper("emscripten_bind_PolygonInterface_at_1");

/** @type {function(...*):?} */
var _emscripten_bind_PolygonInterface_boundingRectPolygon_0 = Module["_emscripten_bind_PolygonInterface_boundingRectPolygon_0"] = createExportWrapper("emscripten_bind_PolygonInterface_boundingRectPolygon_0");

/** @type {function(...*):?} */
var _emscripten_bind_PolygonInterface_offsetBoundingBox_1 = Module["_emscripten_bind_PolygonInterface_offsetBoundingBox_1"] = createExportWrapper("emscripten_bind_PolygonInterface_offsetBoundingBox_1");

/** @type {function(...*):?} */
var _emscripten_bind_PolygonInterface_offsetPolygon_1 = Module["_emscripten_bind_PolygonInterface_offsetPolygon_1"] = createExportWrapper("emscripten_bind_PolygonInterface_offsetPolygon_1");

/** @type {function(...*):?} */
var _emscripten_bind_PolygonInterface___destroy___0 = Module["_emscripten_bind_PolygonInterface___destroy___0"] = createExportWrapper("emscripten_bind_PolygonInterface___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_Polygon_Polygon_0 = Module["_emscripten_bind_Polygon_Polygon_0"] = createExportWrapper("emscripten_bind_Polygon_Polygon_0");

/** @type {function(...*):?} */
var _emscripten_bind_Polygon_Polygon_1 = Module["_emscripten_bind_Polygon_Polygon_1"] = createExportWrapper("emscripten_bind_Polygon_Polygon_1");

/** @type {function(...*):?} */
var _emscripten_bind_Polygon_setPoint_2 = Module["_emscripten_bind_Polygon_setPoint_2"] = createExportWrapper("emscripten_bind_Polygon_setPoint_2");

/** @type {function(...*):?} */
var _emscripten_bind_Polygon_size_0 = Module["_emscripten_bind_Polygon_size_0"] = createExportWrapper("emscripten_bind_Polygon_size_0");

/** @type {function(...*):?} */
var _emscripten_bind_Polygon_get_ps_1 = Module["_emscripten_bind_Polygon_get_ps_1"] = createExportWrapper("emscripten_bind_Polygon_get_ps_1");

/** @type {function(...*):?} */
var _emscripten_bind_Polygon_set_ps_2 = Module["_emscripten_bind_Polygon_set_ps_2"] = createExportWrapper("emscripten_bind_Polygon_set_ps_2");

/** @type {function(...*):?} */
var _emscripten_bind_Polygon___destroy___0 = Module["_emscripten_bind_Polygon___destroy___0"] = createExportWrapper("emscripten_bind_Polygon___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_Point_Point_0 = Module["_emscripten_bind_Point_Point_0"] = createExportWrapper("emscripten_bind_Point_Point_0");

/** @type {function(...*):?} */
var _emscripten_bind_Point_Point_2 = Module["_emscripten_bind_Point_Point_2"] = createExportWrapper("emscripten_bind_Point_Point_2");

/** @type {function(...*):?} */
var _emscripten_bind_Point_equal_1 = Module["_emscripten_bind_Point_equal_1"] = createExportWrapper("emscripten_bind_Point_equal_1");

/** @type {function(...*):?} */
var _emscripten_bind_Point_get_x_0 = Module["_emscripten_bind_Point_get_x_0"] = createExportWrapper("emscripten_bind_Point_get_x_0");

/** @type {function(...*):?} */
var _emscripten_bind_Point_set_x_1 = Module["_emscripten_bind_Point_set_x_1"] = createExportWrapper("emscripten_bind_Point_set_x_1");

/** @type {function(...*):?} */
var _emscripten_bind_Point_get_y_0 = Module["_emscripten_bind_Point_get_y_0"] = createExportWrapper("emscripten_bind_Point_get_y_0");

/** @type {function(...*):?} */
var _emscripten_bind_Point_set_y_1 = Module["_emscripten_bind_Point_set_y_1"] = createExportWrapper("emscripten_bind_Point_set_y_1");

/** @type {function(...*):?} */
var _emscripten_bind_Point_get_id_0 = Module["_emscripten_bind_Point_get_id_0"] = createExportWrapper("emscripten_bind_Point_get_id_0");

/** @type {function(...*):?} */
var _emscripten_bind_Point_set_id_1 = Module["_emscripten_bind_Point_set_id_1"] = createExportWrapper("emscripten_bind_Point_set_id_1");

/** @type {function(...*):?} */
var _emscripten_bind_Point_get_vn_0 = Module["_emscripten_bind_Point_get_vn_0"] = createExportWrapper("emscripten_bind_Point_get_vn_0");

/** @type {function(...*):?} */
var _emscripten_bind_Point_set_vn_1 = Module["_emscripten_bind_Point_set_vn_1"] = createExportWrapper("emscripten_bind_Point_set_vn_1");

/** @type {function(...*):?} */
var _emscripten_bind_Point___destroy___0 = Module["_emscripten_bind_Point___destroy___0"] = createExportWrapper("emscripten_bind_Point___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_Rectangle_Rectangle_3 = Module["_emscripten_bind_Rectangle_Rectangle_3"] = createExportWrapper("emscripten_bind_Rectangle_Rectangle_3");

/** @type {function(...*):?} */
var _emscripten_bind_Rectangle___destroy___0 = Module["_emscripten_bind_Rectangle___destroy___0"] = createExportWrapper("emscripten_bind_Rectangle___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_HyperedgeTreeNode_HyperedgeTreeNode_0 = Module["_emscripten_bind_HyperedgeTreeNode_HyperedgeTreeNode_0"] = createExportWrapper("emscripten_bind_HyperedgeTreeNode_HyperedgeTreeNode_0");

/** @type {function(...*):?} */
var _emscripten_bind_HyperedgeTreeNode_writeEdgesToConns_2 = Module["_emscripten_bind_HyperedgeTreeNode_writeEdgesToConns_2"] = createExportWrapper("emscripten_bind_HyperedgeTreeNode_writeEdgesToConns_2");

/** @type {function(...*):?} */
var _emscripten_bind_HyperedgeTreeNode___destroy___0 = Module["_emscripten_bind_HyperedgeTreeNode___destroy___0"] = createExportWrapper("emscripten_bind_HyperedgeTreeNode___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_HyperedgeTreeEdge_HyperedgeTreeEdge_3 = Module["_emscripten_bind_HyperedgeTreeEdge_HyperedgeTreeEdge_3"] = createExportWrapper("emscripten_bind_HyperedgeTreeEdge_HyperedgeTreeEdge_3");

/** @type {function(...*):?} */
var _emscripten_bind_HyperedgeTreeEdge___destroy___0 = Module["_emscripten_bind_HyperedgeTreeEdge___destroy___0"] = createExportWrapper("emscripten_bind_HyperedgeTreeEdge___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_AStarPath_AStarPath_0 = Module["_emscripten_bind_AStarPath_AStarPath_0"] = createExportWrapper("emscripten_bind_AStarPath_AStarPath_0");

/** @type {function(...*):?} */
var _emscripten_bind_AStarPath_search_4 = Module["_emscripten_bind_AStarPath_search_4"] = createExportWrapper("emscripten_bind_AStarPath_search_4");

/** @type {function(...*):?} */
var _emscripten_bind_AStarPath___destroy___0 = Module["_emscripten_bind_AStarPath___destroy___0"] = createExportWrapper("emscripten_bind_AStarPath___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_ConnEnd_ConnEnd_1 = Module["_emscripten_bind_ConnEnd_ConnEnd_1"] = createExportWrapper("emscripten_bind_ConnEnd_ConnEnd_1");

/** @type {function(...*):?} */
var _emscripten_bind_ConnEnd_ConnEnd_2 = Module["_emscripten_bind_ConnEnd_ConnEnd_2"] = createExportWrapper("emscripten_bind_ConnEnd_ConnEnd_2");

/** @type {function(...*):?} */
var _emscripten_bind_ConnEnd___destroy___0 = Module["_emscripten_bind_ConnEnd___destroy___0"] = createExportWrapper("emscripten_bind_ConnEnd___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_ActionInfo_ActionInfo_2 = Module["_emscripten_bind_ActionInfo_ActionInfo_2"] = createExportWrapper("emscripten_bind_ActionInfo_ActionInfo_2");

/** @type {function(...*):?} */
var _emscripten_bind_ActionInfo_ActionInfo_3 = Module["_emscripten_bind_ActionInfo_ActionInfo_3"] = createExportWrapper("emscripten_bind_ActionInfo_ActionInfo_3");

/** @type {function(...*):?} */
var _emscripten_bind_ActionInfo_ActionInfo_4 = Module["_emscripten_bind_ActionInfo_ActionInfo_4"] = createExportWrapper("emscripten_bind_ActionInfo_ActionInfo_4");

/** @type {function(...*):?} */
var _emscripten_bind_ActionInfo_obstacle_0 = Module["_emscripten_bind_ActionInfo_obstacle_0"] = createExportWrapper("emscripten_bind_ActionInfo_obstacle_0");

/** @type {function(...*):?} */
var _emscripten_bind_ActionInfo_shape_0 = Module["_emscripten_bind_ActionInfo_shape_0"] = createExportWrapper("emscripten_bind_ActionInfo_shape_0");

/** @type {function(...*):?} */
var _emscripten_bind_ActionInfo_conn_0 = Module["_emscripten_bind_ActionInfo_conn_0"] = createExportWrapper("emscripten_bind_ActionInfo_conn_0");

/** @type {function(...*):?} */
var _emscripten_bind_ActionInfo_junction_0 = Module["_emscripten_bind_ActionInfo_junction_0"] = createExportWrapper("emscripten_bind_ActionInfo_junction_0");

/** @type {function(...*):?} */
var _emscripten_bind_ActionInfo_addConnEndUpdate_3 = Module["_emscripten_bind_ActionInfo_addConnEndUpdate_3"] = createExportWrapper("emscripten_bind_ActionInfo_addConnEndUpdate_3");

/** @type {function(...*):?} */
var _emscripten_bind_ActionInfo_get_type_0 = Module["_emscripten_bind_ActionInfo_get_type_0"] = createExportWrapper("emscripten_bind_ActionInfo_get_type_0");

/** @type {function(...*):?} */
var _emscripten_bind_ActionInfo_set_type_1 = Module["_emscripten_bind_ActionInfo_set_type_1"] = createExportWrapper("emscripten_bind_ActionInfo_set_type_1");

/** @type {function(...*):?} */
var _emscripten_bind_ActionInfo_get_objPtr_0 = Module["_emscripten_bind_ActionInfo_get_objPtr_0"] = createExportWrapper("emscripten_bind_ActionInfo_get_objPtr_0");

/** @type {function(...*):?} */
var _emscripten_bind_ActionInfo_set_objPtr_1 = Module["_emscripten_bind_ActionInfo_set_objPtr_1"] = createExportWrapper("emscripten_bind_ActionInfo_set_objPtr_1");

/** @type {function(...*):?} */
var _emscripten_bind_ActionInfo_get_newPoly_0 = Module["_emscripten_bind_ActionInfo_get_newPoly_0"] = createExportWrapper("emscripten_bind_ActionInfo_get_newPoly_0");

/** @type {function(...*):?} */
var _emscripten_bind_ActionInfo_set_newPoly_1 = Module["_emscripten_bind_ActionInfo_set_newPoly_1"] = createExportWrapper("emscripten_bind_ActionInfo_set_newPoly_1");

/** @type {function(...*):?} */
var _emscripten_bind_ActionInfo_get_newPosition_0 = Module["_emscripten_bind_ActionInfo_get_newPosition_0"] = createExportWrapper("emscripten_bind_ActionInfo_get_newPosition_0");

/** @type {function(...*):?} */
var _emscripten_bind_ActionInfo_set_newPosition_1 = Module["_emscripten_bind_ActionInfo_set_newPosition_1"] = createExportWrapper("emscripten_bind_ActionInfo_set_newPosition_1");

/** @type {function(...*):?} */
var _emscripten_bind_ActionInfo_get_firstMove_0 = Module["_emscripten_bind_ActionInfo_get_firstMove_0"] = createExportWrapper("emscripten_bind_ActionInfo_get_firstMove_0");

/** @type {function(...*):?} */
var _emscripten_bind_ActionInfo_set_firstMove_1 = Module["_emscripten_bind_ActionInfo_set_firstMove_1"] = createExportWrapper("emscripten_bind_ActionInfo_set_firstMove_1");

/** @type {function(...*):?} */
var _emscripten_bind_ActionInfo___destroy___0 = Module["_emscripten_bind_ActionInfo___destroy___0"] = createExportWrapper("emscripten_bind_ActionInfo___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_ShapeConnectionPin_ShapeConnectionPin_2 = Module["_emscripten_bind_ShapeConnectionPin_ShapeConnectionPin_2"] = createExportWrapper("emscripten_bind_ShapeConnectionPin_ShapeConnectionPin_2");

/** @type {function(...*):?} */
var _emscripten_bind_ShapeConnectionPin_ShapeConnectionPin_3 = Module["_emscripten_bind_ShapeConnectionPin_ShapeConnectionPin_3"] = createExportWrapper("emscripten_bind_ShapeConnectionPin_ShapeConnectionPin_3");

/** @type {function(...*):?} */
var _emscripten_bind_ShapeConnectionPin_ShapeConnectionPin_6 = Module["_emscripten_bind_ShapeConnectionPin_ShapeConnectionPin_6"] = createExportWrapper("emscripten_bind_ShapeConnectionPin_ShapeConnectionPin_6");

/** @type {function(...*):?} */
var _emscripten_bind_ShapeConnectionPin_ShapeConnectionPin_7 = Module["_emscripten_bind_ShapeConnectionPin_ShapeConnectionPin_7"] = createExportWrapper("emscripten_bind_ShapeConnectionPin_ShapeConnectionPin_7");

/** @type {function(...*):?} */
var _emscripten_bind_ShapeConnectionPin_setConnectionCost_1 = Module["_emscripten_bind_ShapeConnectionPin_setConnectionCost_1"] = createExportWrapper("emscripten_bind_ShapeConnectionPin_setConnectionCost_1");

/** @type {function(...*):?} */
var _emscripten_bind_ShapeConnectionPin_position_0 = Module["_emscripten_bind_ShapeConnectionPin_position_0"] = createExportWrapper("emscripten_bind_ShapeConnectionPin_position_0");

/** @type {function(...*):?} */
var _emscripten_bind_ShapeConnectionPin_position_1 = Module["_emscripten_bind_ShapeConnectionPin_position_1"] = createExportWrapper("emscripten_bind_ShapeConnectionPin_position_1");

/** @type {function(...*):?} */
var _emscripten_bind_ShapeConnectionPin_directions_0 = Module["_emscripten_bind_ShapeConnectionPin_directions_0"] = createExportWrapper("emscripten_bind_ShapeConnectionPin_directions_0");

/** @type {function(...*):?} */
var _emscripten_bind_ShapeConnectionPin_setExclusive_1 = Module["_emscripten_bind_ShapeConnectionPin_setExclusive_1"] = createExportWrapper("emscripten_bind_ShapeConnectionPin_setExclusive_1");

/** @type {function(...*):?} */
var _emscripten_bind_ShapeConnectionPin_isExclusive_0 = Module["_emscripten_bind_ShapeConnectionPin_isExclusive_0"] = createExportWrapper("emscripten_bind_ShapeConnectionPin_isExclusive_0");

/** @type {function(...*):?} */
var _emscripten_bind_ShapeConnectionPin___destroy___0 = Module["_emscripten_bind_ShapeConnectionPin___destroy___0"] = createExportWrapper("emscripten_bind_ShapeConnectionPin___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_Obstacle_id_0 = Module["_emscripten_bind_Obstacle_id_0"] = createExportWrapper("emscripten_bind_Obstacle_id_0");

/** @type {function(...*):?} */
var _emscripten_bind_Obstacle_polygon_0 = Module["_emscripten_bind_Obstacle_polygon_0"] = createExportWrapper("emscripten_bind_Obstacle_polygon_0");

/** @type {function(...*):?} */
var _emscripten_bind_Obstacle_router_0 = Module["_emscripten_bind_Obstacle_router_0"] = createExportWrapper("emscripten_bind_Obstacle_router_0");

/** @type {function(...*):?} */
var _emscripten_bind_Obstacle_position_0 = Module["_emscripten_bind_Obstacle_position_0"] = createExportWrapper("emscripten_bind_Obstacle_position_0");

/** @type {function(...*):?} */
var _emscripten_bind_Obstacle___destroy___0 = Module["_emscripten_bind_Obstacle___destroy___0"] = createExportWrapper("emscripten_bind_Obstacle___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_JunctionRef_JunctionRef_2 = Module["_emscripten_bind_JunctionRef_JunctionRef_2"] = createExportWrapper("emscripten_bind_JunctionRef_JunctionRef_2");

/** @type {function(...*):?} */
var _emscripten_bind_JunctionRef_JunctionRef_3 = Module["_emscripten_bind_JunctionRef_JunctionRef_3"] = createExportWrapper("emscripten_bind_JunctionRef_JunctionRef_3");

/** @type {function(...*):?} */
var _emscripten_bind_JunctionRef_position_0 = Module["_emscripten_bind_JunctionRef_position_0"] = createExportWrapper("emscripten_bind_JunctionRef_position_0");

/** @type {function(...*):?} */
var _emscripten_bind_JunctionRef___destroy___0 = Module["_emscripten_bind_JunctionRef___destroy___0"] = createExportWrapper("emscripten_bind_JunctionRef___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_ShapeRef_ShapeRef_2 = Module["_emscripten_bind_ShapeRef_ShapeRef_2"] = createExportWrapper("emscripten_bind_ShapeRef_ShapeRef_2");

/** @type {function(...*):?} */
var _emscripten_bind_ShapeRef_ShapeRef_3 = Module["_emscripten_bind_ShapeRef_ShapeRef_3"] = createExportWrapper("emscripten_bind_ShapeRef_ShapeRef_3");

/** @type {function(...*):?} */
var _emscripten_bind_ShapeRef_polygon_0 = Module["_emscripten_bind_ShapeRef_polygon_0"] = createExportWrapper("emscripten_bind_ShapeRef_polygon_0");

/** @type {function(...*):?} */
var _emscripten_bind_ShapeRef_position_0 = Module["_emscripten_bind_ShapeRef_position_0"] = createExportWrapper("emscripten_bind_ShapeRef_position_0");

/** @type {function(...*):?} */
var _emscripten_bind_ShapeRef___destroy___0 = Module["_emscripten_bind_ShapeRef___destroy___0"] = createExportWrapper("emscripten_bind_ShapeRef___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_HyperedgeNewAndDeletedObjectLists___destroy___0 = Module["_emscripten_bind_HyperedgeNewAndDeletedObjectLists___destroy___0"] = createExportWrapper("emscripten_bind_HyperedgeNewAndDeletedObjectLists___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_HyperedgeRerouter_HyperedgeRerouter_0 = Module["_emscripten_bind_HyperedgeRerouter_HyperedgeRerouter_0"] = createExportWrapper("emscripten_bind_HyperedgeRerouter_HyperedgeRerouter_0");

/** @type {function(...*):?} */
var _emscripten_bind_HyperedgeRerouter_registerHyperedgeForRerouting_1 = Module["_emscripten_bind_HyperedgeRerouter_registerHyperedgeForRerouting_1"] = createExportWrapper("emscripten_bind_HyperedgeRerouter_registerHyperedgeForRerouting_1");

/** @type {function(...*):?} */
var _emscripten_bind_HyperedgeRerouter___destroy___0 = Module["_emscripten_bind_HyperedgeRerouter___destroy___0"] = createExportWrapper("emscripten_bind_HyperedgeRerouter___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_VertInf___destroy___0 = Module["_emscripten_bind_VertInf___destroy___0"] = createExportWrapper("emscripten_bind_VertInf___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_VertID_VertID_0 = Module["_emscripten_bind_VertID_VertID_0"] = createExportWrapper("emscripten_bind_VertID_VertID_0");

/** @type {function(...*):?} */
var _emscripten_bind_VertID_VertID_2 = Module["_emscripten_bind_VertID_VertID_2"] = createExportWrapper("emscripten_bind_VertID_VertID_2");

/** @type {function(...*):?} */
var _emscripten_bind_VertID_VertID_3 = Module["_emscripten_bind_VertID_VertID_3"] = createExportWrapper("emscripten_bind_VertID_VertID_3");

/** @type {function(...*):?} */
var _emscripten_bind_VertID_get_objID_0 = Module["_emscripten_bind_VertID_get_objID_0"] = createExportWrapper("emscripten_bind_VertID_get_objID_0");

/** @type {function(...*):?} */
var _emscripten_bind_VertID_set_objID_1 = Module["_emscripten_bind_VertID_set_objID_1"] = createExportWrapper("emscripten_bind_VertID_set_objID_1");

/** @type {function(...*):?} */
var _emscripten_bind_VertID_get_vn_0 = Module["_emscripten_bind_VertID_get_vn_0"] = createExportWrapper("emscripten_bind_VertID_get_vn_0");

/** @type {function(...*):?} */
var _emscripten_bind_VertID_set_vn_1 = Module["_emscripten_bind_VertID_set_vn_1"] = createExportWrapper("emscripten_bind_VertID_set_vn_1");

/** @type {function(...*):?} */
var _emscripten_bind_VertID_get_props_0 = Module["_emscripten_bind_VertID_get_props_0"] = createExportWrapper("emscripten_bind_VertID_get_props_0");

/** @type {function(...*):?} */
var _emscripten_bind_VertID_set_props_1 = Module["_emscripten_bind_VertID_set_props_1"] = createExportWrapper("emscripten_bind_VertID_set_props_1");

/** @type {function(...*):?} */
var _emscripten_bind_VertID_get_src_0 = Module["_emscripten_bind_VertID_get_src_0"] = createExportWrapper("emscripten_bind_VertID_get_src_0");

/** @type {function(...*):?} */
var _emscripten_bind_VertID_get_tar_0 = Module["_emscripten_bind_VertID_get_tar_0"] = createExportWrapper("emscripten_bind_VertID_get_tar_0");

/** @type {function(...*):?} */
var _emscripten_bind_VertID_get_PROP_ConnPoint_0 = Module["_emscripten_bind_VertID_get_PROP_ConnPoint_0"] = createExportWrapper("emscripten_bind_VertID_get_PROP_ConnPoint_0");

/** @type {function(...*):?} */
var _emscripten_bind_VertID_get_PROP_OrthShapeEdge_0 = Module["_emscripten_bind_VertID_get_PROP_OrthShapeEdge_0"] = createExportWrapper("emscripten_bind_VertID_get_PROP_OrthShapeEdge_0");

/** @type {function(...*):?} */
var _emscripten_bind_VertID_get_PROP_ConnectionPin_0 = Module["_emscripten_bind_VertID_get_PROP_ConnectionPin_0"] = createExportWrapper("emscripten_bind_VertID_get_PROP_ConnectionPin_0");

/** @type {function(...*):?} */
var _emscripten_bind_VertID_get_PROP_ConnCheckpoint_0 = Module["_emscripten_bind_VertID_get_PROP_ConnCheckpoint_0"] = createExportWrapper("emscripten_bind_VertID_get_PROP_ConnCheckpoint_0");

/** @type {function(...*):?} */
var _emscripten_bind_VertID_get_PROP_DummyPinHelper_0 = Module["_emscripten_bind_VertID_get_PROP_DummyPinHelper_0"] = createExportWrapper("emscripten_bind_VertID_get_PROP_DummyPinHelper_0");

/** @type {function(...*):?} */
var _emscripten_bind_VertID___destroy___0 = Module["_emscripten_bind_VertID___destroy___0"] = createExportWrapper("emscripten_bind_VertID___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_MinimumTerminalSpanningTree___destroy___0 = Module["_emscripten_bind_MinimumTerminalSpanningTree___destroy___0"] = createExportWrapper("emscripten_bind_MinimumTerminalSpanningTree___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_Checkpoint_Checkpoint_1 = Module["_emscripten_bind_Checkpoint_Checkpoint_1"] = createExportWrapper("emscripten_bind_Checkpoint_Checkpoint_1");

/** @type {function(...*):?} */
var _emscripten_bind_Checkpoint___destroy___0 = Module["_emscripten_bind_Checkpoint___destroy___0"] = createExportWrapper("emscripten_bind_Checkpoint___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_ConnRef_ConnRef_3 = Module["_emscripten_bind_ConnRef_ConnRef_3"] = createExportWrapper("emscripten_bind_ConnRef_ConnRef_3");

/** @type {function(...*):?} */
var _emscripten_bind_ConnRef_ConnRef_4 = Module["_emscripten_bind_ConnRef_ConnRef_4"] = createExportWrapper("emscripten_bind_ConnRef_ConnRef_4");

/** @type {function(...*):?} */
var _emscripten_bind_ConnRef_id_0 = Module["_emscripten_bind_ConnRef_id_0"] = createExportWrapper("emscripten_bind_ConnRef_id_0");

/** @type {function(...*):?} */
var _emscripten_bind_ConnRef_setCallback_2 = Module["_emscripten_bind_ConnRef_setCallback_2"] = createExportWrapper("emscripten_bind_ConnRef_setCallback_2");

/** @type {function(...*):?} */
var _emscripten_bind_ConnRef_setSourceEndpoint_1 = Module["_emscripten_bind_ConnRef_setSourceEndpoint_1"] = createExportWrapper("emscripten_bind_ConnRef_setSourceEndpoint_1");

/** @type {function(...*):?} */
var _emscripten_bind_ConnRef_setDestEndpoint_1 = Module["_emscripten_bind_ConnRef_setDestEndpoint_1"] = createExportWrapper("emscripten_bind_ConnRef_setDestEndpoint_1");

/** @type {function(...*):?} */
var _emscripten_bind_ConnRef_routingType_0 = Module["_emscripten_bind_ConnRef_routingType_0"] = createExportWrapper("emscripten_bind_ConnRef_routingType_0");

/** @type {function(...*):?} */
var _emscripten_bind_ConnRef_setRoutingType_1 = Module["_emscripten_bind_ConnRef_setRoutingType_1"] = createExportWrapper("emscripten_bind_ConnRef_setRoutingType_1");

/** @type {function(...*):?} */
var _emscripten_bind_ConnRef_displayRoute_0 = Module["_emscripten_bind_ConnRef_displayRoute_0"] = createExportWrapper("emscripten_bind_ConnRef_displayRoute_0");

/** @type {function(...*):?} */
var _emscripten_bind_ConnRef___destroy___0 = Module["_emscripten_bind_ConnRef___destroy___0"] = createExportWrapper("emscripten_bind_ConnRef___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_EdgeInf_EdgeInf_2 = Module["_emscripten_bind_EdgeInf_EdgeInf_2"] = createExportWrapper("emscripten_bind_EdgeInf_EdgeInf_2");

/** @type {function(...*):?} */
var _emscripten_bind_EdgeInf_EdgeInf_3 = Module["_emscripten_bind_EdgeInf_EdgeInf_3"] = createExportWrapper("emscripten_bind_EdgeInf_EdgeInf_3");

/** @type {function(...*):?} */
var _emscripten_bind_EdgeInf___destroy___0 = Module["_emscripten_bind_EdgeInf___destroy___0"] = createExportWrapper("emscripten_bind_EdgeInf___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_LineRep_get_begin_0 = Module["_emscripten_bind_LineRep_get_begin_0"] = createExportWrapper("emscripten_bind_LineRep_get_begin_0");

/** @type {function(...*):?} */
var _emscripten_bind_LineRep_set_begin_1 = Module["_emscripten_bind_LineRep_set_begin_1"] = createExportWrapper("emscripten_bind_LineRep_set_begin_1");

/** @type {function(...*):?} */
var _emscripten_bind_LineRep_get_end_0 = Module["_emscripten_bind_LineRep_get_end_0"] = createExportWrapper("emscripten_bind_LineRep_get_end_0");

/** @type {function(...*):?} */
var _emscripten_bind_LineRep_set_end_1 = Module["_emscripten_bind_LineRep_set_end_1"] = createExportWrapper("emscripten_bind_LineRep_set_end_1");

/** @type {function(...*):?} */
var _emscripten_bind_LineRep___destroy___0 = Module["_emscripten_bind_LineRep___destroy___0"] = createExportWrapper("emscripten_bind_LineRep___destroy___0");

/** @type {function(...*):?} */
var _emscripten_bind_Router_Router_1 = Module["_emscripten_bind_Router_Router_1"] = createExportWrapper("emscripten_bind_Router_Router_1");

/** @type {function(...*):?} */
var _emscripten_bind_Router_processTransaction_0 = Module["_emscripten_bind_Router_processTransaction_0"] = createExportWrapper("emscripten_bind_Router_processTransaction_0");

/** @type {function(...*):?} */
var _emscripten_bind_Router_printInfo_0 = Module["_emscripten_bind_Router_printInfo_0"] = createExportWrapper("emscripten_bind_Router_printInfo_0");

/** @type {function(...*):?} */
var _emscripten_bind_Router_deleteConnector_1 = Module["_emscripten_bind_Router_deleteConnector_1"] = createExportWrapper("emscripten_bind_Router_deleteConnector_1");

/** @type {function(...*):?} */
var _emscripten_bind_Router_moveShape_3 = Module["_emscripten_bind_Router_moveShape_3"] = createExportWrapper("emscripten_bind_Router_moveShape_3");

/** @type {function(...*):?} */
var _emscripten_bind_Router___destroy___0 = Module["_emscripten_bind_Router___destroy___0"] = createExportWrapper("emscripten_bind_Router___destroy___0");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ConnDirFlag_ConnDirNone = Module["_emscripten_enum_Avoid_ConnDirFlag_ConnDirNone"] = createExportWrapper("emscripten_enum_Avoid_ConnDirFlag_ConnDirNone");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ConnDirFlag_ConnDirUp = Module["_emscripten_enum_Avoid_ConnDirFlag_ConnDirUp"] = createExportWrapper("emscripten_enum_Avoid_ConnDirFlag_ConnDirUp");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ConnDirFlag_ConnDirDown = Module["_emscripten_enum_Avoid_ConnDirFlag_ConnDirDown"] = createExportWrapper("emscripten_enum_Avoid_ConnDirFlag_ConnDirDown");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ConnDirFlag_ConnDirLeft = Module["_emscripten_enum_Avoid_ConnDirFlag_ConnDirLeft"] = createExportWrapper("emscripten_enum_Avoid_ConnDirFlag_ConnDirLeft");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ConnDirFlag_ConnDirRight = Module["_emscripten_enum_Avoid_ConnDirFlag_ConnDirRight"] = createExportWrapper("emscripten_enum_Avoid_ConnDirFlag_ConnDirRight");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ConnDirFlag_ConnDirAll = Module["_emscripten_enum_Avoid_ConnDirFlag_ConnDirAll"] = createExportWrapper("emscripten_enum_Avoid_ConnDirFlag_ConnDirAll");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ConnEndType_ConnEndPoint = Module["_emscripten_enum_Avoid_ConnEndType_ConnEndPoint"] = createExportWrapper("emscripten_enum_Avoid_ConnEndType_ConnEndPoint");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ConnEndType_ConnEndShapePin = Module["_emscripten_enum_Avoid_ConnEndType_ConnEndShapePin"] = createExportWrapper("emscripten_enum_Avoid_ConnEndType_ConnEndShapePin");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ConnEndType_ConnEndJunction = Module["_emscripten_enum_Avoid_ConnEndType_ConnEndJunction"] = createExportWrapper("emscripten_enum_Avoid_ConnEndType_ConnEndJunction");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ConnEndType_ConnEndEmpty = Module["_emscripten_enum_Avoid_ConnEndType_ConnEndEmpty"] = createExportWrapper("emscripten_enum_Avoid_ConnEndType_ConnEndEmpty");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ActionType_ShapeMove = Module["_emscripten_enum_Avoid_ActionType_ShapeMove"] = createExportWrapper("emscripten_enum_Avoid_ActionType_ShapeMove");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ActionType_ShapeAdd = Module["_emscripten_enum_Avoid_ActionType_ShapeAdd"] = createExportWrapper("emscripten_enum_Avoid_ActionType_ShapeAdd");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ActionType_ShapeRemove = Module["_emscripten_enum_Avoid_ActionType_ShapeRemove"] = createExportWrapper("emscripten_enum_Avoid_ActionType_ShapeRemove");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ActionType_JunctionMove = Module["_emscripten_enum_Avoid_ActionType_JunctionMove"] = createExportWrapper("emscripten_enum_Avoid_ActionType_JunctionMove");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ActionType_JunctionAdd = Module["_emscripten_enum_Avoid_ActionType_JunctionAdd"] = createExportWrapper("emscripten_enum_Avoid_ActionType_JunctionAdd");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ActionType_JunctionRemove = Module["_emscripten_enum_Avoid_ActionType_JunctionRemove"] = createExportWrapper("emscripten_enum_Avoid_ActionType_JunctionRemove");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ActionType_ConnChange = Module["_emscripten_enum_Avoid_ActionType_ConnChange"] = createExportWrapper("emscripten_enum_Avoid_ActionType_ConnChange");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ActionType_ConnectionPinChange = Module["_emscripten_enum_Avoid_ActionType_ConnectionPinChange"] = createExportWrapper("emscripten_enum_Avoid_ActionType_ConnectionPinChange");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ShapeTransformationType_TransformationType_CW90 = Module["_emscripten_enum_Avoid_ShapeTransformationType_TransformationType_CW90"] = createExportWrapper("emscripten_enum_Avoid_ShapeTransformationType_TransformationType_CW90");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ShapeTransformationType_TransformationType_CW180 = Module["_emscripten_enum_Avoid_ShapeTransformationType_TransformationType_CW180"] = createExportWrapper("emscripten_enum_Avoid_ShapeTransformationType_TransformationType_CW180");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ShapeTransformationType_TransformationType_CW270 = Module["_emscripten_enum_Avoid_ShapeTransformationType_TransformationType_CW270"] = createExportWrapper("emscripten_enum_Avoid_ShapeTransformationType_TransformationType_CW270");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ShapeTransformationType_TransformationType_FlipX = Module["_emscripten_enum_Avoid_ShapeTransformationType_TransformationType_FlipX"] = createExportWrapper("emscripten_enum_Avoid_ShapeTransformationType_TransformationType_FlipX");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ShapeTransformationType_TransformationType_FlipY = Module["_emscripten_enum_Avoid_ShapeTransformationType_TransformationType_FlipY"] = createExportWrapper("emscripten_enum_Avoid_ShapeTransformationType_TransformationType_FlipY");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ConnType_ConnType_None = Module["_emscripten_enum_Avoid_ConnType_ConnType_None"] = createExportWrapper("emscripten_enum_Avoid_ConnType_ConnType_None");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ConnType_ConnType_PolyLine = Module["_emscripten_enum_Avoid_ConnType_ConnType_PolyLine"] = createExportWrapper("emscripten_enum_Avoid_ConnType_ConnType_PolyLine");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_ConnType_ConnType_Orthogonal = Module["_emscripten_enum_Avoid_ConnType_ConnType_Orthogonal"] = createExportWrapper("emscripten_enum_Avoid_ConnType_ConnType_Orthogonal");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_RouterFlag_PolyLineRouting = Module["_emscripten_enum_Avoid_RouterFlag_PolyLineRouting"] = createExportWrapper("emscripten_enum_Avoid_RouterFlag_PolyLineRouting");

/** @type {function(...*):?} */
var _emscripten_enum_Avoid_RouterFlag_OrthogonalRouting = Module["_emscripten_enum_Avoid_RouterFlag_OrthogonalRouting"] = createExportWrapper("emscripten_enum_Avoid_RouterFlag_OrthogonalRouting");

/** @type {function(...*):?} */
var ___errno_location = Module["___errno_location"] = createExportWrapper("__errno_location");

/** @type {function(...*):?} */
var stackSave = Module["stackSave"] = createExportWrapper("stackSave");

/** @type {function(...*):?} */
var stackRestore = Module["stackRestore"] = createExportWrapper("stackRestore");

/** @type {function(...*):?} */
var stackAlloc = Module["stackAlloc"] = createExportWrapper("stackAlloc");

/** @type {function(...*):?} */
var _emscripten_stack_init = Module["_emscripten_stack_init"] = function() {
  return (_emscripten_stack_init = Module["_emscripten_stack_init"] = Module["asm"]["emscripten_stack_init"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = function() {
  return (_emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = Module["asm"]["emscripten_stack_get_free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = function() {
  return (_emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _setThrew = Module["_setThrew"] = createExportWrapper("setThrew");

/** @type {function(...*):?} */
var dynCall_viijii = Module["dynCall_viijii"] = createExportWrapper("dynCall_viijii");

/** @type {function(...*):?} */
var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji");

/** @type {function(...*):?} */
var dynCall_iiiiij = Module["dynCall_iiiiij"] = createExportWrapper("dynCall_iiiiij");

/** @type {function(...*):?} */
var dynCall_iiiiijj = Module["dynCall_iiiiijj"] = createExportWrapper("dynCall_iiiiijj");

/** @type {function(...*):?} */
var dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = createExportWrapper("dynCall_iiiiiijj");





// === Auto-generated postamble setup entry stuff ===

if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromString")) Module["intArrayFromString"] = function() { abort("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "intArrayToString")) Module["intArrayToString"] = function() { abort("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ccall")) Module["ccall"] = function() { abort("'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "cwrap")) Module["cwrap"] = function() { abort("'cwrap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setValue")) Module["setValue"] = function() { abort("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getValue")) Module["getValue"] = function() { abort("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocate")) Module["allocate"] = function() { abort("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF8ArrayToString")) Module["UTF8ArrayToString"] = function() { abort("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF8ToString")) Module["UTF8ToString"] = function() { abort("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array")) Module["stringToUTF8Array"] = function() { abort("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8")) Module["stringToUTF8"] = function() { abort("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF8")) Module["lengthBytesUTF8"] = function() { abort("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPreRun")) Module["addOnPreRun"] = function() { abort("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnInit")) Module["addOnInit"] = function() { abort("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPreMain")) Module["addOnPreMain"] = function() { abort("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnExit")) Module["addOnExit"] = function() { abort("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPostRun")) Module["addOnPostRun"] = function() { abort("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeStringToMemory")) Module["writeStringToMemory"] = function() { abort("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeArrayToMemory")) Module["writeArrayToMemory"] = function() { abort("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory")) Module["writeAsciiToMemory"] = function() { abort("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addRunDependency")) Module["addRunDependency"] = function() { abort("'addRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "removeRunDependency")) Module["removeRunDependency"] = function() { abort("'removeRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createFolder")) Module["FS_createFolder"] = function() { abort("'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createPath")) Module["FS_createPath"] = function() { abort("'FS_createPath' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createDataFile")) Module["FS_createDataFile"] = function() { abort("'FS_createDataFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createPreloadedFile")) Module["FS_createPreloadedFile"] = function() { abort("'FS_createPreloadedFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createLazyFile")) Module["FS_createLazyFile"] = function() { abort("'FS_createLazyFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createLink")) Module["FS_createLink"] = function() { abort("'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createDevice")) Module["FS_createDevice"] = function() { abort("'FS_createDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_unlink")) Module["FS_unlink"] = function() { abort("'FS_unlink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "getLEB")) Module["getLEB"] = function() { abort("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFunctionTables")) Module["getFunctionTables"] = function() { abort("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "alignFunctionTables")) Module["alignFunctionTables"] = function() { abort("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFunctions")) Module["registerFunctions"] = function() { abort("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addFunction")) Module["addFunction"] = function() { abort("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "removeFunction")) Module["removeFunction"] = function() { abort("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "prettyPrint")) Module["prettyPrint"] = function() { abort("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "makeBigInt")) Module["makeBigInt"] = function() { abort("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getCompilerSetting")) Module["getCompilerSetting"] = function() { abort("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "print")) Module["print"] = function() { abort("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "printErr")) Module["printErr"] = function() { abort("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getTempRet0")) Module["getTempRet0"] = function() { abort("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setTempRet0")) Module["setTempRet0"] = function() { abort("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callMain")) Module["callMain"] = function() { abort("'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "abort")) Module["abort"] = function() { abort("'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8")) Module["stringToNewUTF8"] = function() { abort("'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setFileTime")) Module["setFileTime"] = function() { abort("'setFileTime' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "abortOnCannotGrowMemory")) Module["abortOnCannotGrowMemory"] = function() { abort("'abortOnCannotGrowMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer")) Module["emscripten_realloc_buffer"] = function() { abort("'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ENV")) Module["ENV"] = function() { abort("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES")) Module["ERRNO_CODES"] = function() { abort("'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES")) Module["ERRNO_MESSAGES"] = function() { abort("'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setErrNo")) Module["setErrNo"] = function() { abort("'setErrNo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readSockaddr")) Module["readSockaddr"] = function() { abort("'readSockaddr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeSockaddr")) Module["writeSockaddr"] = function() { abort("'writeSockaddr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "DNS")) Module["DNS"] = function() { abort("'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getHostByName")) Module["getHostByName"] = function() { abort("'getHostByName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES")) Module["GAI_ERRNO_MESSAGES"] = function() { abort("'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Protocols")) Module["Protocols"] = function() { abort("'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Sockets")) Module["Sockets"] = function() { abort("'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getRandomDevice")) Module["getRandomDevice"] = function() { abort("'getRandomDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "traverseStack")) Module["traverseStack"] = function() { abort("'traverseStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE")) Module["UNWIND_CACHE"] = function() { abort("'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "withBuiltinMalloc")) Module["withBuiltinMalloc"] = function() { abort("'withBuiltinMalloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgsArray")) Module["readAsmConstArgsArray"] = function() { abort("'readAsmConstArgsArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs")) Module["readAsmConstArgs"] = function() { abort("'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "mainThreadEM_ASM")) Module["mainThreadEM_ASM"] = function() { abort("'mainThreadEM_ASM' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jstoi_q")) Module["jstoi_q"] = function() { abort("'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jstoi_s")) Module["jstoi_s"] = function() { abort("'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getExecutableName")) Module["getExecutableName"] = function() { abort("'getExecutableName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "listenOnce")) Module["listenOnce"] = function() { abort("'listenOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "autoResumeAudioContext")) Module["autoResumeAudioContext"] = function() { abort("'autoResumeAudioContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCallLegacy")) Module["dynCallLegacy"] = function() { abort("'dynCallLegacy' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getDynCaller")) Module["getDynCaller"] = function() { abort("'getDynCaller' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callRuntimeCallbacks")) Module["callRuntimeCallbacks"] = function() { abort("'callRuntimeCallbacks' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "abortStackOverflow")) Module["abortStackOverflow"] = function() { abort("'abortStackOverflow' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "reallyNegative")) Module["reallyNegative"] = function() { abort("'reallyNegative' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "unSign")) Module["unSign"] = function() { abort("'unSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "reSign")) Module["reSign"] = function() { abort("'reSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "formatString")) Module["formatString"] = function() { abort("'formatString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PATH")) Module["PATH"] = function() { abort("'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PATH_FS")) Module["PATH_FS"] = function() { abort("'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SYSCALLS")) Module["SYSCALLS"] = function() { abort("'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "syscallMmap2")) Module["syscallMmap2"] = function() { abort("'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "syscallMunmap")) Module["syscallMunmap"] = function() { abort("'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getSocketFromFD")) Module["getSocketFromFD"] = function() { abort("'getSocketFromFD' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getSocketAddress")) Module["getSocketAddress"] = function() { abort("'getSocketAddress' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "JSEvents")) Module["JSEvents"] = function() { abort("'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerKeyEventCallback")) Module["registerKeyEventCallback"] = function() { abort("'registerKeyEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "specialHTMLTargets")) Module["specialHTMLTargets"] = function() { abort("'specialHTMLTargets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "maybeCStringToJsString")) Module["maybeCStringToJsString"] = function() { abort("'maybeCStringToJsString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "findEventTarget")) Module["findEventTarget"] = function() { abort("'findEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "findCanvasEventTarget")) Module["findCanvasEventTarget"] = function() { abort("'findCanvasEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getBoundingClientRect")) Module["getBoundingClientRect"] = function() { abort("'getBoundingClientRect' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillMouseEventData")) Module["fillMouseEventData"] = function() { abort("'fillMouseEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerMouseEventCallback")) Module["registerMouseEventCallback"] = function() { abort("'registerMouseEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerWheelEventCallback")) Module["registerWheelEventCallback"] = function() { abort("'registerWheelEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerUiEventCallback")) Module["registerUiEventCallback"] = function() { abort("'registerUiEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFocusEventCallback")) Module["registerFocusEventCallback"] = function() { abort("'registerFocusEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceOrientationEventData")) Module["fillDeviceOrientationEventData"] = function() { abort("'fillDeviceOrientationEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceOrientationEventCallback")) Module["registerDeviceOrientationEventCallback"] = function() { abort("'registerDeviceOrientationEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceMotionEventData")) Module["fillDeviceMotionEventData"] = function() { abort("'fillDeviceMotionEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceMotionEventCallback")) Module["registerDeviceMotionEventCallback"] = function() { abort("'registerDeviceMotionEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "screenOrientation")) Module["screenOrientation"] = function() { abort("'screenOrientation' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillOrientationChangeEventData")) Module["fillOrientationChangeEventData"] = function() { abort("'fillOrientationChangeEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerOrientationChangeEventCallback")) Module["registerOrientationChangeEventCallback"] = function() { abort("'registerOrientationChangeEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillFullscreenChangeEventData")) Module["fillFullscreenChangeEventData"] = function() { abort("'fillFullscreenChangeEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFullscreenChangeEventCallback")) Module["registerFullscreenChangeEventCallback"] = function() { abort("'registerFullscreenChangeEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerRestoreOldStyle")) Module["registerRestoreOldStyle"] = function() { abort("'registerRestoreOldStyle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "hideEverythingExceptGivenElement")) Module["hideEverythingExceptGivenElement"] = function() { abort("'hideEverythingExceptGivenElement' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "restoreHiddenElements")) Module["restoreHiddenElements"] = function() { abort("'restoreHiddenElements' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setLetterbox")) Module["setLetterbox"] = function() { abort("'setLetterbox' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "currentFullscreenStrategy")) Module["currentFullscreenStrategy"] = function() { abort("'currentFullscreenStrategy' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "restoreOldWindowedStyle")) Module["restoreOldWindowedStyle"] = function() { abort("'restoreOldWindowedStyle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "softFullscreenResizeWebGLRenderTarget")) Module["softFullscreenResizeWebGLRenderTarget"] = function() { abort("'softFullscreenResizeWebGLRenderTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "doRequestFullscreen")) Module["doRequestFullscreen"] = function() { abort("'doRequestFullscreen' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillPointerlockChangeEventData")) Module["fillPointerlockChangeEventData"] = function() { abort("'fillPointerlockChangeEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockChangeEventCallback")) Module["registerPointerlockChangeEventCallback"] = function() { abort("'registerPointerlockChangeEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockErrorEventCallback")) Module["registerPointerlockErrorEventCallback"] = function() { abort("'registerPointerlockErrorEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "requestPointerLock")) Module["requestPointerLock"] = function() { abort("'requestPointerLock' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillVisibilityChangeEventData")) Module["fillVisibilityChangeEventData"] = function() { abort("'fillVisibilityChangeEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerVisibilityChangeEventCallback")) Module["registerVisibilityChangeEventCallback"] = function() { abort("'registerVisibilityChangeEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerTouchEventCallback")) Module["registerTouchEventCallback"] = function() { abort("'registerTouchEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillGamepadEventData")) Module["fillGamepadEventData"] = function() { abort("'fillGamepadEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerGamepadEventCallback")) Module["registerGamepadEventCallback"] = function() { abort("'registerGamepadEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerBeforeUnloadEventCallback")) Module["registerBeforeUnloadEventCallback"] = function() { abort("'registerBeforeUnloadEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillBatteryEventData")) Module["fillBatteryEventData"] = function() { abort("'fillBatteryEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "battery")) Module["battery"] = function() { abort("'battery' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerBatteryEventCallback")) Module["registerBatteryEventCallback"] = function() { abort("'registerBatteryEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setCanvasElementSize")) Module["setCanvasElementSize"] = function() { abort("'setCanvasElementSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getCanvasElementSize")) Module["getCanvasElementSize"] = function() { abort("'getCanvasElementSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "polyfillSetImmediate")) Module["polyfillSetImmediate"] = function() { abort("'polyfillSetImmediate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "demangle")) Module["demangle"] = function() { abort("'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "demangleAll")) Module["demangleAll"] = function() { abort("'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jsStackTrace")) Module["jsStackTrace"] = function() { abort("'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getEnvStrings")) Module["getEnvStrings"] = function() { abort("'getEnvStrings' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "checkWasiClock")) Module["checkWasiClock"] = function() { abort("'checkWasiClock' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "flush_NO_FILESYSTEM")) Module["flush_NO_FILESYSTEM"] = function() { abort("'flush_NO_FILESYSTEM' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64")) Module["writeI53ToI64"] = function() { abort("'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped")) Module["writeI53ToI64Clamped"] = function() { abort("'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling")) Module["writeI53ToI64Signaling"] = function() { abort("'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped")) Module["writeI53ToU64Clamped"] = function() { abort("'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling")) Module["writeI53ToU64Signaling"] = function() { abort("'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readI53FromI64")) Module["readI53FromI64"] = function() { abort("'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readI53FromU64")) Module["readI53FromU64"] = function() { abort("'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53")) Module["convertI32PairToI53"] = function() { abort("'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53")) Module["convertU32PairToI53"] = function() { abort("'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "uncaughtExceptionCount")) Module["uncaughtExceptionCount"] = function() { abort("'uncaughtExceptionCount' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exceptionLast")) Module["exceptionLast"] = function() { abort("'exceptionLast' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exceptionCaught")) Module["exceptionCaught"] = function() { abort("'exceptionCaught' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfoAttrs")) Module["ExceptionInfoAttrs"] = function() { abort("'ExceptionInfoAttrs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfo")) Module["ExceptionInfo"] = function() { abort("'ExceptionInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "CatchInfo")) Module["CatchInfo"] = function() { abort("'CatchInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exception_addRef")) Module["exception_addRef"] = function() { abort("'exception_addRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exception_decRef")) Module["exception_decRef"] = function() { abort("'exception_decRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Browser")) Module["Browser"] = function() { abort("'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "funcWrappers")) Module["funcWrappers"] = function() { abort("'funcWrappers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setMainLoop")) Module["setMainLoop"] = function() { abort("'setMainLoop' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "tempFixedLengthArray")) Module["tempFixedLengthArray"] = function() { abort("'tempFixedLengthArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "miniTempWebGLFloatBuffers")) Module["miniTempWebGLFloatBuffers"] = function() { abort("'miniTempWebGLFloatBuffers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "heapObjectForWebGLType")) Module["heapObjectForWebGLType"] = function() { abort("'heapObjectForWebGLType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "heapAccessShiftForWebGLHeap")) Module["heapAccessShiftForWebGLHeap"] = function() { abort("'heapAccessShiftForWebGLHeap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GL")) Module["GL"] = function() { abort("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet")) Module["emscriptenWebGLGet"] = function() { abort("'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "computeUnpackAlignedImageSize")) Module["computeUnpackAlignedImageSize"] = function() { abort("'computeUnpackAlignedImageSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetTexPixelData")) Module["emscriptenWebGLGetTexPixelData"] = function() { abort("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform")) Module["emscriptenWebGLGetUniform"] = function() { abort("'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetVertexAttrib")) Module["emscriptenWebGLGetVertexAttrib"] = function() { abort("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeGLArray")) Module["writeGLArray"] = function() { abort("'writeGLArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "AL")) Module["AL"] = function() { abort("'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_unicode")) Module["SDL_unicode"] = function() { abort("'SDL_unicode' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_ttfContext")) Module["SDL_ttfContext"] = function() { abort("'SDL_ttfContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_audio")) Module["SDL_audio"] = function() { abort("'SDL_audio' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL")) Module["SDL"] = function() { abort("'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_gfx")) Module["SDL_gfx"] = function() { abort("'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLUT")) Module["GLUT"] = function() { abort("'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "EGL")) Module["EGL"] = function() { abort("'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLFW_Window")) Module["GLFW_Window"] = function() { abort("'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLFW")) Module["GLFW"] = function() { abort("'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLEW")) Module["GLEW"] = function() { abort("'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "IDBStore")) Module["IDBStore"] = function() { abort("'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError")) Module["runAndAbortIfError"] = function() { abort("'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "warnOnce")) Module["warnOnce"] = function() { abort("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackSave")) Module["stackSave"] = function() { abort("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackRestore")) Module["stackRestore"] = function() { abort("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackAlloc")) Module["stackAlloc"] = function() { abort("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "AsciiToString")) Module["AsciiToString"] = function() { abort("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToAscii")) Module["stringToAscii"] = function() { abort("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF16ToString")) Module["UTF16ToString"] = function() { abort("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF16")) Module["stringToUTF16"] = function() { abort("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16")) Module["lengthBytesUTF16"] = function() { abort("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF32ToString")) Module["UTF32ToString"] = function() { abort("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF32")) Module["stringToUTF32"] = function() { abort("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32")) Module["lengthBytesUTF32"] = function() { abort("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8")) Module["allocateUTF8"] = function() { abort("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack")) Module["allocateUTF8OnStack"] = function() { abort("'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["writeStackCookie"] = writeStackCookie;
Module["checkStackCookie"] = checkStackCookie;
if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL")) Object.defineProperty(Module, "ALLOC_NORMAL", { configurable: true, get: function() { abort("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });
if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK")) Object.defineProperty(Module, "ALLOC_STACK", { configurable: true, get: function() { abort("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });

var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function stackCheckInit() {
  // This is normally called automatically during __wasm_call_ctors but need to
  // get these values before even running any of the ctors so we call it redundantly
  // here.
  // TODO(sbc): Move writeStackCookie to native to to avoid this.
  _emscripten_stack_init();
  writeStackCookie();
}

/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    err('run() called, but dependencies remain, so not running');
    return;
  }

  stackCheckInit();

  preRun();

  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    err('run() called, but dependencies remain, so not running');
    return;
  }

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    preMain();

    readyPromiseResolve(Module);
    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    assert(!Module['_main'], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
  checkStackCookie();
}
Module['run'] = run;

function checkUnflushedContent() {
  // Compiler settings do not allow exiting the runtime, so flushing
  // the streams is not possible. but in ASSERTIONS mode we check
  // if there was something to flush, and if so tell the user they
  // should request that the runtime be exitable.
  // Normally we would not even include flush() at all, but in ASSERTIONS
  // builds we do so just for this check, and here we see if there is any
  // content to flush, that is, we check if there would have been
  // something a non-ASSERTIONS build would have not seen.
  // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
  // mode (which has its own special function for this; otherwise, all
  // the code is inside libc)
  var oldOut = out;
  var oldErr = err;
  var has = false;
  out = err = function(x) {
    has = true;
  }
  try { // it doesn't matter if it fails
    var flush = flush_NO_FILESYSTEM;
    if (flush) flush();
  } catch(e) {}
  out = oldOut;
  err = oldErr;
  if (has) {
    warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.');
    warnOnce('(this may also be due to not including full filesystem support - try building with -s FORCE_FILESYSTEM=1)');
  }
}

/** @param {boolean|number=} implicit */
function exit(status, implicit) {
  checkUnflushedContent();

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && noExitRuntime && status === 0) {
    return;
  }

  if (noExitRuntime) {
    // if exit() was called, we may warn the user if the runtime isn't actually being shut down
    if (!implicit) {
      var msg = 'program exited (with status: ' + status + '), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)';
      readyPromiseReject(msg);
      err(msg);
    }
  } else {

    EXITSTATUS = status;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);

    ABORT = true;
  }

  quit_(status, new ExitStatus(status));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

run();






// Bindings utilities

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function WrapperObject() {
}
WrapperObject.prototype = Object.create(WrapperObject.prototype);
WrapperObject.prototype.constructor = WrapperObject;
WrapperObject.prototype.__class__ = WrapperObject;
WrapperObject.__cache__ = {};
Module['WrapperObject'] = WrapperObject;

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant)
    @param {*=} __class__ */
function getCache(__class__) {
  return (__class__ || WrapperObject).__cache__;
}
Module['getCache'] = getCache;

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant)
    @param {*=} __class__ */
function wrapPointer(ptr, __class__) {
  var cache = getCache(__class__);
  var ret = cache[ptr];
  if (ret) return ret;
  ret = Object.create((__class__ || WrapperObject).prototype);
  ret.ptr = ptr;
  return cache[ptr] = ret;
}
Module['wrapPointer'] = wrapPointer;

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function castObject(obj, __class__) {
  return wrapPointer(obj.ptr, __class__);
}
Module['castObject'] = castObject;

Module['NULL'] = wrapPointer(0);

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function destroy(obj) {
  if (!obj['__destroy__']) throw 'Error: Cannot destroy object. (Did you create it yourself?)';
  obj['__destroy__']();
  // Remove from cache, so the object can be GC'd and refs added onto it released
  delete getCache(obj.__class__)[obj.ptr];
}
Module['destroy'] = destroy;

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function compare(obj1, obj2) {
  return obj1.ptr === obj2.ptr;
}
Module['compare'] = compare;

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function getPointer(obj) {
  return obj.ptr;
}
Module['getPointer'] = getPointer;

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function getClass(obj) {
  return obj.__class__;
}
Module['getClass'] = getClass;

// Converts big (string or array) values into a C-style storage, in temporary space

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
var ensureCache = {
  buffer: 0,  // the main buffer of temporary storage
  size: 0,   // the size of buffer
  pos: 0,    // the next free offset in buffer
  temps: [], // extra allocations
  needed: 0, // the total size we need next time

  prepare: function() {
    if (ensureCache.needed) {
      // clear the temps
      for (var i = 0; i < ensureCache.temps.length; i++) {
        Module['_free'](ensureCache.temps[i]);
      }
      ensureCache.temps.length = 0;
      // prepare to allocate a bigger buffer
      Module['_free'](ensureCache.buffer);
      ensureCache.buffer = 0;
      ensureCache.size += ensureCache.needed;
      // clean up
      ensureCache.needed = 0;
    }
    if (!ensureCache.buffer) { // happens first time, or when we need to grow
      ensureCache.size += 128; // heuristic, avoid many small grow events
      ensureCache.buffer = Module['_malloc'](ensureCache.size);
      assert(ensureCache.buffer);
    }
    ensureCache.pos = 0;
  },
  alloc: function(array, view) {
    assert(ensureCache.buffer);
    var bytes = view.BYTES_PER_ELEMENT;
    var len = array.length * bytes;
    len = (len + 7) & -8; // keep things aligned to 8 byte boundaries
    var ret;
    if (ensureCache.pos + len >= ensureCache.size) {
      // we failed to allocate in the buffer, ensureCache time around :(
      assert(len > 0); // null terminator, at least
      ensureCache.needed += len;
      ret = Module['_malloc'](len);
      ensureCache.temps.push(ret);
    } else {
      // we can allocate in the buffer
      ret = ensureCache.buffer + ensureCache.pos;
      ensureCache.pos += len;
    }
    return ret;
  },
  copy: function(array, view, offset) {
    offset >>>= 0;
    var bytes = view.BYTES_PER_ELEMENT;
    switch (bytes) {
      case 2: offset >>>= 1; break;
      case 4: offset >>>= 2; break;
      case 8: offset >>>= 3; break;
    }
    for (var i = 0; i < array.length; i++) {
      view[offset + i] = array[i];
    }
  },
};

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function ensureString(value) {
  if (typeof value === 'string') {
    var intArray = intArrayFromString(value);
    var offset = ensureCache.alloc(intArray, HEAP8);
    ensureCache.copy(intArray, HEAP8, offset);
    return offset;
  }
  return value;
}
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function ensureInt8(value) {
  if (typeof value === 'object') {
    var offset = ensureCache.alloc(value, HEAP8);
    ensureCache.copy(value, HEAP8, offset);
    return offset;
  }
  return value;
}
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function ensureInt16(value) {
  if (typeof value === 'object') {
    var offset = ensureCache.alloc(value, HEAP16);
    ensureCache.copy(value, HEAP16, offset);
    return offset;
  }
  return value;
}
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function ensureInt32(value) {
  if (typeof value === 'object') {
    var offset = ensureCache.alloc(value, HEAP32);
    ensureCache.copy(value, HEAP32, offset);
    return offset;
  }
  return value;
}
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function ensureFloat32(value) {
  if (typeof value === 'object') {
    var offset = ensureCache.alloc(value, HEAPF32);
    ensureCache.copy(value, HEAPF32, offset);
    return offset;
  }
  return value;
}
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function ensureFloat64(value) {
  if (typeof value === 'object') {
    var offset = ensureCache.alloc(value, HEAPF64);
    ensureCache.copy(value, HEAPF64, offset);
    return offset;
  }
  return value;
}


// VoidPtr

/**
 * @class
 */
function VoidPtr() { throw "cannot construct a VoidPtr, no constructor in IDL" }
VoidPtr.prototype = Object.create(WrapperObject.prototype);
VoidPtr.prototype.constructor = VoidPtr;
VoidPtr.prototype.__class__ = VoidPtr;
VoidPtr.__cache__ = {};
Module['VoidPtr'] = VoidPtr;

  VoidPtr.prototype['__destroy__'] = VoidPtr.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_VoidPtr___destroy___0(self);
};
// HyperedgeImprover

/**
 * @class
 */
function HyperedgeImprover() {
  this.ptr = _emscripten_bind_HyperedgeImprover_HyperedgeImprover_0();
  getCache(HyperedgeImprover)[this.ptr] = this;
};;
HyperedgeImprover.prototype = Object.create(WrapperObject.prototype);
HyperedgeImprover.prototype.constructor = HyperedgeImprover;
HyperedgeImprover.prototype.__class__ = HyperedgeImprover;
HyperedgeImprover.__cache__ = {};
Module['HyperedgeImprover'] = HyperedgeImprover;

/**
 * @method
 * 
 */
HyperedgeImprover.prototype['clear'] = HyperedgeImprover.prototype.clear = function() {
  var self = this.ptr;
  _emscripten_bind_HyperedgeImprover_clear_0(self);
};;

/**
 * @method
 * @param {Router} router
 */
HyperedgeImprover.prototype['setRouter'] = HyperedgeImprover.prototype.setRouter = function(router) {
  var self = this.ptr;
  if (router && typeof router === 'object') router = router.ptr;
  _emscripten_bind_HyperedgeImprover_setRouter_1(self, router);
};;

  HyperedgeImprover.prototype['__destroy__'] = HyperedgeImprover.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_HyperedgeImprover___destroy___0(self);
};
// Box

/**
 * @class
 */
function Box() {
  this.ptr = _emscripten_bind_Box_Box_0();
  getCache(Box)[this.ptr] = this;
};;
Box.prototype = Object.create(WrapperObject.prototype);
Box.prototype.constructor = Box;
Box.prototype.__class__ = Box;
Box.__cache__ = {};
Module['Box'] = Box;

/**
 * @method
 * @param {number} dimension
 * @returns {number}
 */
Box.prototype['length'] = Box.prototype.length = function(dimension) {
  var self = this.ptr;
  if (dimension && typeof dimension === 'object') dimension = dimension.ptr;
  return _emscripten_bind_Box_length_1(self, dimension);
};;

/**
 * @method
 * 
 * @returns {number}
 */
Box.prototype['width'] = Box.prototype.width = function() {
  var self = this.ptr;
  return _emscripten_bind_Box_width_0(self);
};;

/**
 * @method
 * 
 * @returns {number}
 */
Box.prototype['height'] = Box.prototype.height = function() {
  var self = this.ptr;
  return _emscripten_bind_Box_height_0(self);
};;

/* docss */
  Box.prototype['get_min'] = Box.prototype.get_min = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Box_get_min_0(self), Point);
};
/* docsa */
    Box.prototype['set_min'] = Box.prototype.set_min = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_Box_set_min_1(self, arg0);
};
    Object.defineProperty(Box.prototype, 'min', { get: Box.prototype.get_min, set: Box.prototype.set_min });
/* docss */
  Box.prototype['get_max'] = Box.prototype.get_max = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Box_get_max_0(self), Point);
};
/* docsa */
    Box.prototype['set_max'] = Box.prototype.set_max = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_Box_set_max_1(self, arg0);
};
    Object.defineProperty(Box.prototype, 'max', { get: Box.prototype.get_max, set: Box.prototype.set_max });
  Box.prototype['__destroy__'] = Box.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_Box___destroy___0(self);
};
// PolygonInterface

/**
 * @class
 */
function PolygonInterface() { throw "cannot construct a PolygonInterface, no constructor in IDL" }
PolygonInterface.prototype = Object.create(WrapperObject.prototype);
PolygonInterface.prototype.constructor = PolygonInterface;
PolygonInterface.prototype.__class__ = PolygonInterface;
PolygonInterface.__cache__ = {};
Module['PolygonInterface'] = PolygonInterface;

/**
 * @method
 * 
 */
PolygonInterface.prototype['clear'] = PolygonInterface.prototype.clear = function() {
  var self = this.ptr;
  _emscripten_bind_PolygonInterface_clear_0(self);
};;

/**
 * @method
 * 
 * @returns {Boolean}
 */
PolygonInterface.prototype['empty'] = PolygonInterface.prototype.empty = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_PolygonInterface_empty_0(self));
};;

/**
 * @method
 * 
 * @returns {number}
 */
PolygonInterface.prototype['size'] = PolygonInterface.prototype.size = function() {
  var self = this.ptr;
  return _emscripten_bind_PolygonInterface_size_0(self);
};;

/**
 * @method
 * 
 * @returns {Long}
 */
PolygonInterface.prototype['id'] = PolygonInterface.prototype.id = function() {
  var self = this.ptr;
  return _emscripten_bind_PolygonInterface_id_0(self);
};;

/**
 * @method
 * @param {number} index
 * @returns {Point}
 */
PolygonInterface.prototype['at'] = PolygonInterface.prototype.at = function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  return wrapPointer(_emscripten_bind_PolygonInterface_at_1(self, index), Point);
};;

/**
 * @method
 * 
 * @returns {Polygon}
 */
PolygonInterface.prototype['boundingRectPolygon'] = PolygonInterface.prototype.boundingRectPolygon = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_PolygonInterface_boundingRectPolygon_0(self), Polygon);
};;

/**
 * @method
 * @param {number} offset
 * @returns {Box}
 */
PolygonInterface.prototype['offsetBoundingBox'] = PolygonInterface.prototype.offsetBoundingBox = function(offset) {
  var self = this.ptr;
  if (offset && typeof offset === 'object') offset = offset.ptr;
  return wrapPointer(_emscripten_bind_PolygonInterface_offsetBoundingBox_1(self, offset), Box);
};;

/**
 * @method
 * @param {number} offset
 * @returns {Polygon}
 */
PolygonInterface.prototype['offsetPolygon'] = PolygonInterface.prototype.offsetPolygon = function(offset) {
  var self = this.ptr;
  if (offset && typeof offset === 'object') offset = offset.ptr;
  return wrapPointer(_emscripten_bind_PolygonInterface_offsetPolygon_1(self, offset), Polygon);
};;

  PolygonInterface.prototype['__destroy__'] = PolygonInterface.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_PolygonInterface___destroy___0(self);
};
// Polygon

/**
 * @class
 */
function Polygon(n) {
  if (n && typeof n === 'object') n = n.ptr;
  if (n === undefined) { this.ptr = _emscripten_bind_Polygon_Polygon_0(); getCache(Polygon)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_Polygon_Polygon_1(n);
  getCache(Polygon)[this.ptr] = this;
};;
Polygon.prototype = Object.create(WrapperObject.prototype);
Polygon.prototype.constructor = Polygon;
Polygon.prototype.__class__ = Polygon;
Polygon.__cache__ = {};
Module['Polygon'] = Polygon;

/**
 * @method
 * @param {number} index
 * @param {Point} point
 */
Polygon.prototype['setPoint'] = Polygon.prototype.setPoint = function(index, point) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  if (point && typeof point === 'object') point = point.ptr;
  _emscripten_bind_Polygon_setPoint_2(self, index, point);
};;

/**
 * @method
 * 
 * @returns {number}
 */
Polygon.prototype['size'] = Polygon.prototype.size = function() {
  var self = this.ptr;
  return _emscripten_bind_Polygon_size_0(self);
};;

/* docss */
  Polygon.prototype['get_ps'] = Polygon.prototype.get_ps = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  return wrapPointer(_emscripten_bind_Polygon_get_ps_1(self, arg0), Point);
};
/* docsa */
    Polygon.prototype['set_ps'] = Polygon.prototype.set_ps = function(arg0, arg1) {
  var self = this.ptr;
  ensureCache.prepare();
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  _emscripten_bind_Polygon_set_ps_2(self, arg0, arg1);
};
    Object.defineProperty(Polygon.prototype, 'ps', { get: Polygon.prototype.get_ps, set: Polygon.prototype.set_ps });
  Polygon.prototype['__destroy__'] = Polygon.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_Polygon___destroy___0(self);
};
// Point

/**
 * @class
 */
function Point(xv, yv) {
  if (xv && typeof xv === 'object') xv = xv.ptr;
  if (yv && typeof yv === 'object') yv = yv.ptr;
  if (xv === undefined) { this.ptr = _emscripten_bind_Point_Point_0(); getCache(Point)[this.ptr] = this;return }
  if (yv === undefined) { this.ptr = _emscripten_bind_Point_Point_1(xv); getCache(Point)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_Point_Point_2(xv, yv);
  getCache(Point)[this.ptr] = this;
};;
Point.prototype = Object.create(WrapperObject.prototype);
Point.prototype.constructor = Point;
Point.prototype.__class__ = Point;
Point.__cache__ = {};
Module['Point'] = Point;

/**
 * @method
 * @param {Point} rhs
 * @returns {Boolean}
 */
Point.prototype['equal'] = Point.prototype.equal = function(rhs) {
  var self = this.ptr;
  if (rhs && typeof rhs === 'object') rhs = rhs.ptr;
  return !!(_emscripten_bind_Point_equal_1(self, rhs));
};;

/* docss */
  Point.prototype['get_x'] = Point.prototype.get_x = function() {
  var self = this.ptr;
  return _emscripten_bind_Point_get_x_0(self);
};
/* docsa */
    Point.prototype['set_x'] = Point.prototype.set_x = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_Point_set_x_1(self, arg0);
};
    Object.defineProperty(Point.prototype, 'x', { get: Point.prototype.get_x, set: Point.prototype.set_x });
/* docss */
  Point.prototype['get_y'] = Point.prototype.get_y = function() {
  var self = this.ptr;
  return _emscripten_bind_Point_get_y_0(self);
};
/* docsa */
    Point.prototype['set_y'] = Point.prototype.set_y = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_Point_set_y_1(self, arg0);
};
    Object.defineProperty(Point.prototype, 'y', { get: Point.prototype.get_y, set: Point.prototype.set_y });
/* docss */
  Point.prototype['get_id'] = Point.prototype.get_id = function() {
  var self = this.ptr;
  return _emscripten_bind_Point_get_id_0(self);
};
/* docsa */
    Point.prototype['set_id'] = Point.prototype.set_id = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_Point_set_id_1(self, arg0);
};
    Object.defineProperty(Point.prototype, 'id', { get: Point.prototype.get_id, set: Point.prototype.set_id });
/* docss */
  Point.prototype['get_vn'] = Point.prototype.get_vn = function() {
  var self = this.ptr;
  return _emscripten_bind_Point_get_vn_0(self);
};
/* docsa */
    Point.prototype['set_vn'] = Point.prototype.set_vn = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_Point_set_vn_1(self, arg0);
};
    Object.defineProperty(Point.prototype, 'vn', { get: Point.prototype.get_vn, set: Point.prototype.set_vn });
  Point.prototype['__destroy__'] = Point.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_Point___destroy___0(self);
};
// Rectangle

/**
 * @class
 */
function Rectangle(centre, width, height) {
  if (centre && typeof centre === 'object') centre = centre.ptr;
  if (width && typeof width === 'object') width = width.ptr;
  if (height && typeof height === 'object') height = height.ptr;
  this.ptr = _emscripten_bind_Rectangle_Rectangle_3(centre, width, height);
  getCache(Rectangle)[this.ptr] = this;
};;
Rectangle.prototype = Object.create(WrapperObject.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.__class__ = Rectangle;
Rectangle.__cache__ = {};
Module['Rectangle'] = Rectangle;

  Rectangle.prototype['__destroy__'] = Rectangle.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_Rectangle___destroy___0(self);
};
// HyperedgeTreeNode

/**
 * @class
 */
function HyperedgeTreeNode() {
  this.ptr = _emscripten_bind_HyperedgeTreeNode_HyperedgeTreeNode_0();
  getCache(HyperedgeTreeNode)[this.ptr] = this;
};;
HyperedgeTreeNode.prototype = Object.create(WrapperObject.prototype);
HyperedgeTreeNode.prototype.constructor = HyperedgeTreeNode;
HyperedgeTreeNode.prototype.__class__ = HyperedgeTreeNode;
HyperedgeTreeNode.__cache__ = {};
Module['HyperedgeTreeNode'] = HyperedgeTreeNode;

/**
 * @method
 * @param {HyperedgeTreeEdge} ignored
 * @param {number} pass
 */
HyperedgeTreeNode.prototype['writeEdgesToConns'] = HyperedgeTreeNode.prototype.writeEdgesToConns = function(ignored, pass) {
  var self = this.ptr;
  if (ignored && typeof ignored === 'object') ignored = ignored.ptr;
  if (pass && typeof pass === 'object') pass = pass.ptr;
  _emscripten_bind_HyperedgeTreeNode_writeEdgesToConns_2(self, ignored, pass);
};;

  HyperedgeTreeNode.prototype['__destroy__'] = HyperedgeTreeNode.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_HyperedgeTreeNode___destroy___0(self);
};
// HyperedgeTreeEdge

/**
 * @class
 */
function HyperedgeTreeEdge(node1, node2, conn) {
  if (node1 && typeof node1 === 'object') node1 = node1.ptr;
  if (node2 && typeof node2 === 'object') node2 = node2.ptr;
  if (conn && typeof conn === 'object') conn = conn.ptr;
  this.ptr = _emscripten_bind_HyperedgeTreeEdge_HyperedgeTreeEdge_3(node1, node2, conn);
  getCache(HyperedgeTreeEdge)[this.ptr] = this;
};;
HyperedgeTreeEdge.prototype = Object.create(WrapperObject.prototype);
HyperedgeTreeEdge.prototype.constructor = HyperedgeTreeEdge;
HyperedgeTreeEdge.prototype.__class__ = HyperedgeTreeEdge;
HyperedgeTreeEdge.__cache__ = {};
Module['HyperedgeTreeEdge'] = HyperedgeTreeEdge;

  HyperedgeTreeEdge.prototype['__destroy__'] = HyperedgeTreeEdge.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_HyperedgeTreeEdge___destroy___0(self);
};
// AStarPath

/**
 * @class
 */
function AStarPath() {
  this.ptr = _emscripten_bind_AStarPath_AStarPath_0();
  getCache(AStarPath)[this.ptr] = this;
};;
AStarPath.prototype = Object.create(WrapperObject.prototype);
AStarPath.prototype.constructor = AStarPath;
AStarPath.prototype.__class__ = AStarPath;
AStarPath.__cache__ = {};
Module['AStarPath'] = AStarPath;

/**
 * @method
 * @param {ConnRef} lineRef
 * @param {VertInf} src
 * @param {VertInf} tar
 * @param {VertInf} start
 */
AStarPath.prototype['search'] = AStarPath.prototype.search = function(lineRef, src, tar, start) {
  var self = this.ptr;
  if (lineRef && typeof lineRef === 'object') lineRef = lineRef.ptr;
  if (src && typeof src === 'object') src = src.ptr;
  if (tar && typeof tar === 'object') tar = tar.ptr;
  if (start && typeof start === 'object') start = start.ptr;
  _emscripten_bind_AStarPath_search_4(self, lineRef, src, tar, start);
};;

  AStarPath.prototype['__destroy__'] = AStarPath.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_AStarPath___destroy___0(self);
};
// ConnEnd

/**
 * @class
 */
function ConnEnd(point, visDirs) {
  if (point && typeof point === 'object') point = point.ptr;
  if (visDirs && typeof visDirs === 'object') visDirs = visDirs.ptr;
  if (visDirs === undefined) { this.ptr = _emscripten_bind_ConnEnd_ConnEnd_1(point); getCache(ConnEnd)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_ConnEnd_ConnEnd_2(point, visDirs);
  getCache(ConnEnd)[this.ptr] = this;
};;
ConnEnd.prototype = Object.create(WrapperObject.prototype);
ConnEnd.prototype.constructor = ConnEnd;
ConnEnd.prototype.__class__ = ConnEnd;
ConnEnd.__cache__ = {};
Module['ConnEnd'] = ConnEnd;

  ConnEnd.prototype['__destroy__'] = ConnEnd.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_ConnEnd___destroy___0(self);
};
// ActionInfo

/**
 * @class
 */
function ActionInfo(t, s, p, fm) {
  if (t && typeof t === 'object') t = t.ptr;
  if (s && typeof s === 'object') s = s.ptr;
  if (p && typeof p === 'object') p = p.ptr;
  if (fm && typeof fm === 'object') fm = fm.ptr;
  if (p === undefined) { this.ptr = _emscripten_bind_ActionInfo_ActionInfo_2(t, s); getCache(ActionInfo)[this.ptr] = this;return }
  if (fm === undefined) { this.ptr = _emscripten_bind_ActionInfo_ActionInfo_3(t, s, p); getCache(ActionInfo)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_ActionInfo_ActionInfo_4(t, s, p, fm);
  getCache(ActionInfo)[this.ptr] = this;
};;
ActionInfo.prototype = Object.create(WrapperObject.prototype);
ActionInfo.prototype.constructor = ActionInfo;
ActionInfo.prototype.__class__ = ActionInfo;
ActionInfo.__cache__ = {};
Module['ActionInfo'] = ActionInfo;

/**
 * @method
 * 
 * @returns {Obstacle}
 */
ActionInfo.prototype['obstacle'] = ActionInfo.prototype.obstacle = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ActionInfo_obstacle_0(self), Obstacle);
};;

/**
 * @method
 * 
 * @returns {ShapeRef}
 */
ActionInfo.prototype['shape'] = ActionInfo.prototype.shape = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ActionInfo_shape_0(self), ShapeRef);
};;

/**
 * @method
 * 
 * @returns {ConnRef}
 */
ActionInfo.prototype['conn'] = ActionInfo.prototype.conn = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ActionInfo_conn_0(self), ConnRef);
};;

/**
 * @method
 * 
 * @returns {JunctionRef}
 */
ActionInfo.prototype['junction'] = ActionInfo.prototype.junction = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ActionInfo_junction_0(self), JunctionRef);
};;

/**
 * @method
 * @param {number} type
 * @param {ConnEnd} connEnd
 * @param {Boolean} isConnPinMoveUpdate
 */
ActionInfo.prototype['addConnEndUpdate'] = ActionInfo.prototype.addConnEndUpdate = function(type, connEnd, isConnPinMoveUpdate) {
  var self = this.ptr;
  if (type && typeof type === 'object') type = type.ptr;
  if (connEnd && typeof connEnd === 'object') connEnd = connEnd.ptr;
  if (isConnPinMoveUpdate && typeof isConnPinMoveUpdate === 'object') isConnPinMoveUpdate = isConnPinMoveUpdate.ptr;
  _emscripten_bind_ActionInfo_addConnEndUpdate_3(self, type, connEnd, isConnPinMoveUpdate);
};;

/* docss */
  ActionInfo.prototype['get_type'] = ActionInfo.prototype.get_type = function() {
  var self = this.ptr;
  return _emscripten_bind_ActionInfo_get_type_0(self);
};
/* docsa */
    ActionInfo.prototype['set_type'] = ActionInfo.prototype.set_type = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ActionInfo_set_type_1(self, arg0);
};
    Object.defineProperty(ActionInfo.prototype, 'type', { get: ActionInfo.prototype.get_type, set: ActionInfo.prototype.set_type });
/* docss */
  ActionInfo.prototype['get_objPtr'] = ActionInfo.prototype.get_objPtr = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ActionInfo_get_objPtr_0(self), VoidPtr);
};
/* docsa */
    ActionInfo.prototype['set_objPtr'] = ActionInfo.prototype.set_objPtr = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ActionInfo_set_objPtr_1(self, arg0);
};
    Object.defineProperty(ActionInfo.prototype, 'objPtr', { get: ActionInfo.prototype.get_objPtr, set: ActionInfo.prototype.set_objPtr });
/* docss */
  ActionInfo.prototype['get_newPoly'] = ActionInfo.prototype.get_newPoly = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ActionInfo_get_newPoly_0(self), Polygon);
};
/* docsa */
    ActionInfo.prototype['set_newPoly'] = ActionInfo.prototype.set_newPoly = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ActionInfo_set_newPoly_1(self, arg0);
};
    Object.defineProperty(ActionInfo.prototype, 'newPoly', { get: ActionInfo.prototype.get_newPoly, set: ActionInfo.prototype.set_newPoly });
/* docss */
  ActionInfo.prototype['get_newPosition'] = ActionInfo.prototype.get_newPosition = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ActionInfo_get_newPosition_0(self), Point);
};
/* docsa */
    ActionInfo.prototype['set_newPosition'] = ActionInfo.prototype.set_newPosition = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ActionInfo_set_newPosition_1(self, arg0);
};
    Object.defineProperty(ActionInfo.prototype, 'newPosition', { get: ActionInfo.prototype.get_newPosition, set: ActionInfo.prototype.set_newPosition });
/* docss */
  ActionInfo.prototype['get_firstMove'] = ActionInfo.prototype.get_firstMove = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_ActionInfo_get_firstMove_0(self));
};
/* docsa */
    ActionInfo.prototype['set_firstMove'] = ActionInfo.prototype.set_firstMove = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ActionInfo_set_firstMove_1(self, arg0);
};
    Object.defineProperty(ActionInfo.prototype, 'firstMove', { get: ActionInfo.prototype.get_firstMove, set: ActionInfo.prototype.set_firstMove });
  ActionInfo.prototype['__destroy__'] = ActionInfo.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_ActionInfo___destroy___0(self);
};
// ShapeConnectionPin

/**
 * @class
 */
function ShapeConnectionPin(shape, classId, xOffset, yOffset, proportional, insideOffset, visDirs) {
  if (shape && typeof shape === 'object') shape = shape.ptr;
  if (classId && typeof classId === 'object') classId = classId.ptr;
  if (xOffset && typeof xOffset === 'object') xOffset = xOffset.ptr;
  if (yOffset && typeof yOffset === 'object') yOffset = yOffset.ptr;
  if (proportional && typeof proportional === 'object') proportional = proportional.ptr;
  if (insideOffset && typeof insideOffset === 'object') insideOffset = insideOffset.ptr;
  if (visDirs && typeof visDirs === 'object') visDirs = visDirs.ptr;
  if (xOffset === undefined) { this.ptr = _emscripten_bind_ShapeConnectionPin_ShapeConnectionPin_2(shape, classId); getCache(ShapeConnectionPin)[this.ptr] = this;return }
  if (yOffset === undefined) { this.ptr = _emscripten_bind_ShapeConnectionPin_ShapeConnectionPin_3(shape, classId, xOffset); getCache(ShapeConnectionPin)[this.ptr] = this;return }
  if (proportional === undefined) { this.ptr = _emscripten_bind_ShapeConnectionPin_ShapeConnectionPin_4(shape, classId, xOffset, yOffset); getCache(ShapeConnectionPin)[this.ptr] = this;return }
  if (insideOffset === undefined) { this.ptr = _emscripten_bind_ShapeConnectionPin_ShapeConnectionPin_5(shape, classId, xOffset, yOffset, proportional); getCache(ShapeConnectionPin)[this.ptr] = this;return }
  if (visDirs === undefined) { this.ptr = _emscripten_bind_ShapeConnectionPin_ShapeConnectionPin_6(shape, classId, xOffset, yOffset, proportional, insideOffset); getCache(ShapeConnectionPin)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_ShapeConnectionPin_ShapeConnectionPin_7(shape, classId, xOffset, yOffset, proportional, insideOffset, visDirs);
  getCache(ShapeConnectionPin)[this.ptr] = this;
};;
ShapeConnectionPin.prototype = Object.create(WrapperObject.prototype);
ShapeConnectionPin.prototype.constructor = ShapeConnectionPin;
ShapeConnectionPin.prototype.__class__ = ShapeConnectionPin;
ShapeConnectionPin.__cache__ = {};
Module['ShapeConnectionPin'] = ShapeConnectionPin;

/**
 * @method
 * @param {number} cost
 */
ShapeConnectionPin.prototype['setConnectionCost'] = ShapeConnectionPin.prototype.setConnectionCost = function(cost) {
  var self = this.ptr;
  if (cost && typeof cost === 'object') cost = cost.ptr;
  _emscripten_bind_ShapeConnectionPin_setConnectionCost_1(self, cost);
};;

/**
 * @method
 * @param {Polygon} newPoly
 * @returns {Point}
 */
ShapeConnectionPin.prototype['position'] = ShapeConnectionPin.prototype.position = function(newPoly) {
  var self = this.ptr;
  if (newPoly && typeof newPoly === 'object') newPoly = newPoly.ptr;
  if (newPoly === undefined) { return wrapPointer(_emscripten_bind_ShapeConnectionPin_position_0(self), Point) }
  return wrapPointer(_emscripten_bind_ShapeConnectionPin_position_1(self, newPoly), Point);
};;

/**
 * @method
 * 
 * @returns {number}
 */
ShapeConnectionPin.prototype['directions'] = ShapeConnectionPin.prototype.directions = function() {
  var self = this.ptr;
  return _emscripten_bind_ShapeConnectionPin_directions_0(self);
};;

/**
 * @method
 * @param {Boolean} exclusive
 */
ShapeConnectionPin.prototype['setExclusive'] = ShapeConnectionPin.prototype.setExclusive = function(exclusive) {
  var self = this.ptr;
  if (exclusive && typeof exclusive === 'object') exclusive = exclusive.ptr;
  _emscripten_bind_ShapeConnectionPin_setExclusive_1(self, exclusive);
};;

/**
 * @method
 * 
 * @returns {Boolean}
 */
ShapeConnectionPin.prototype['isExclusive'] = ShapeConnectionPin.prototype.isExclusive = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_ShapeConnectionPin_isExclusive_0(self));
};;

  ShapeConnectionPin.prototype['__destroy__'] = ShapeConnectionPin.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_ShapeConnectionPin___destroy___0(self);
};
// Obstacle

/**
 * @class
 */
function Obstacle() { throw "cannot construct a Obstacle, no constructor in IDL" }
Obstacle.prototype = Object.create(WrapperObject.prototype);
Obstacle.prototype.constructor = Obstacle;
Obstacle.prototype.__class__ = Obstacle;
Obstacle.__cache__ = {};
Module['Obstacle'] = Obstacle;

/**
 * @method
 * 
 * @returns {number}
 */
Obstacle.prototype['id'] = Obstacle.prototype.id = function() {
  var self = this.ptr;
  return _emscripten_bind_Obstacle_id_0(self);
};;

/**
 * @method
 * 
 * @returns {Polygon}
 */
Obstacle.prototype['polygon'] = Obstacle.prototype.polygon = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Obstacle_polygon_0(self), Polygon);
};;

/**
 * @method
 * 
 * @returns {Router}
 */
Obstacle.prototype['router'] = Obstacle.prototype.router = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Obstacle_router_0(self), Router);
};;

/**
 * @method
 * 
 * @returns {Point}
 */
Obstacle.prototype['position'] = Obstacle.prototype.position = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Obstacle_position_0(self), Point);
};;

  Obstacle.prototype['__destroy__'] = Obstacle.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_Obstacle___destroy___0(self);
};
// JunctionRef

/**
 * @class
 */
function JunctionRef(router, position, id) {
  if (router && typeof router === 'object') router = router.ptr;
  if (position && typeof position === 'object') position = position.ptr;
  if (id && typeof id === 'object') id = id.ptr;
  if (id === undefined) { this.ptr = _emscripten_bind_JunctionRef_JunctionRef_2(router, position); getCache(JunctionRef)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_JunctionRef_JunctionRef_3(router, position, id);
  getCache(JunctionRef)[this.ptr] = this;
};;
JunctionRef.prototype = Object.create(WrapperObject.prototype);
JunctionRef.prototype.constructor = JunctionRef;
JunctionRef.prototype.__class__ = JunctionRef;
JunctionRef.__cache__ = {};
Module['JunctionRef'] = JunctionRef;

/**
 * @method
 * 
 * @returns {Point}
 */
JunctionRef.prototype['position'] = JunctionRef.prototype.position = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_JunctionRef_position_0(self), Point);
};;

  JunctionRef.prototype['__destroy__'] = JunctionRef.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_JunctionRef___destroy___0(self);
};
// ShapeRef

/**
 * @class
 */
function ShapeRef(router, poly, id) {
  if (router && typeof router === 'object') router = router.ptr;
  if (poly && typeof poly === 'object') poly = poly.ptr;
  if (id && typeof id === 'object') id = id.ptr;
  if (id === undefined) { this.ptr = _emscripten_bind_ShapeRef_ShapeRef_2(router, poly); getCache(ShapeRef)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_ShapeRef_ShapeRef_3(router, poly, id);
  getCache(ShapeRef)[this.ptr] = this;
};;
ShapeRef.prototype = Object.create(WrapperObject.prototype);
ShapeRef.prototype.constructor = ShapeRef;
ShapeRef.prototype.__class__ = ShapeRef;
ShapeRef.__cache__ = {};
Module['ShapeRef'] = ShapeRef;

/**
 * @method
 * 
 * @returns {Polygon}
 */
ShapeRef.prototype['polygon'] = ShapeRef.prototype.polygon = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ShapeRef_polygon_0(self), Polygon);
};;

/**
 * @method
 * 
 * @returns {Point}
 */
ShapeRef.prototype['position'] = ShapeRef.prototype.position = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ShapeRef_position_0(self), Point);
};;

  ShapeRef.prototype['__destroy__'] = ShapeRef.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_ShapeRef___destroy___0(self);
};
// HyperedgeNewAndDeletedObjectLists

/**
 * @class
 */
function HyperedgeNewAndDeletedObjectLists() { throw "cannot construct a HyperedgeNewAndDeletedObjectLists, no constructor in IDL" }
HyperedgeNewAndDeletedObjectLists.prototype = Object.create(WrapperObject.prototype);
HyperedgeNewAndDeletedObjectLists.prototype.constructor = HyperedgeNewAndDeletedObjectLists;
HyperedgeNewAndDeletedObjectLists.prototype.__class__ = HyperedgeNewAndDeletedObjectLists;
HyperedgeNewAndDeletedObjectLists.__cache__ = {};
Module['HyperedgeNewAndDeletedObjectLists'] = HyperedgeNewAndDeletedObjectLists;

  HyperedgeNewAndDeletedObjectLists.prototype['__destroy__'] = HyperedgeNewAndDeletedObjectLists.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_HyperedgeNewAndDeletedObjectLists___destroy___0(self);
};
// HyperedgeRerouter

/**
 * @class
 */
function HyperedgeRerouter() {
  this.ptr = _emscripten_bind_HyperedgeRerouter_HyperedgeRerouter_0();
  getCache(HyperedgeRerouter)[this.ptr] = this;
};;
HyperedgeRerouter.prototype = Object.create(WrapperObject.prototype);
HyperedgeRerouter.prototype.constructor = HyperedgeRerouter;
HyperedgeRerouter.prototype.__class__ = HyperedgeRerouter;
HyperedgeRerouter.__cache__ = {};
Module['HyperedgeRerouter'] = HyperedgeRerouter;

/**
 * @method
 * @param {JunctionRef} junction
 * @returns {number}
 */
HyperedgeRerouter.prototype['registerHyperedgeForRerouting'] = HyperedgeRerouter.prototype.registerHyperedgeForRerouting = function(junction) {
  var self = this.ptr;
  if (junction && typeof junction === 'object') junction = junction.ptr;
  return _emscripten_bind_HyperedgeRerouter_registerHyperedgeForRerouting_1(self, junction);
};;

  HyperedgeRerouter.prototype['__destroy__'] = HyperedgeRerouter.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_HyperedgeRerouter___destroy___0(self);
};
// VertInf

/**
 * @class
 */
function VertInf() { throw "cannot construct a VertInf, no constructor in IDL" }
VertInf.prototype = Object.create(WrapperObject.prototype);
VertInf.prototype.constructor = VertInf;
VertInf.prototype.__class__ = VertInf;
VertInf.__cache__ = {};
Module['VertInf'] = VertInf;

  VertInf.prototype['__destroy__'] = VertInf.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_VertInf___destroy___0(self);
};
// VertID

/**
 * @class
 */
function VertID(id, n, p) {
  if (id && typeof id === 'object') id = id.ptr;
  if (n && typeof n === 'object') n = n.ptr;
  if (p && typeof p === 'object') p = p.ptr;
  if (id === undefined) { this.ptr = _emscripten_bind_VertID_VertID_0(); getCache(VertID)[this.ptr] = this;return }
  if (n === undefined) { this.ptr = _emscripten_bind_VertID_VertID_1(id); getCache(VertID)[this.ptr] = this;return }
  if (p === undefined) { this.ptr = _emscripten_bind_VertID_VertID_2(id, n); getCache(VertID)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_VertID_VertID_3(id, n, p);
  getCache(VertID)[this.ptr] = this;
};;
VertID.prototype = Object.create(WrapperObject.prototype);
VertID.prototype.constructor = VertID;
VertID.prototype.__class__ = VertID;
VertID.__cache__ = {};
Module['VertID'] = VertID;

/* docss */
  VertID.prototype['get_objID'] = VertID.prototype.get_objID = function() {
  var self = this.ptr;
  return _emscripten_bind_VertID_get_objID_0(self);
};
/* docsa */
    VertID.prototype['set_objID'] = VertID.prototype.set_objID = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_VertID_set_objID_1(self, arg0);
};
    Object.defineProperty(VertID.prototype, 'objID', { get: VertID.prototype.get_objID, set: VertID.prototype.set_objID });
/* docss */
  VertID.prototype['get_vn'] = VertID.prototype.get_vn = function() {
  var self = this.ptr;
  return _emscripten_bind_VertID_get_vn_0(self);
};
/* docsa */
    VertID.prototype['set_vn'] = VertID.prototype.set_vn = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_VertID_set_vn_1(self, arg0);
};
    Object.defineProperty(VertID.prototype, 'vn', { get: VertID.prototype.get_vn, set: VertID.prototype.set_vn });
/* docss */
  VertID.prototype['get_props'] = VertID.prototype.get_props = function() {
  var self = this.ptr;
  return _emscripten_bind_VertID_get_props_0(self);
};
/* docsa */
    VertID.prototype['set_props'] = VertID.prototype.set_props = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_VertID_set_props_1(self, arg0);
};
    Object.defineProperty(VertID.prototype, 'props', { get: VertID.prototype.get_props, set: VertID.prototype.set_props });
/* docss */
  VertID.prototype['get_src'] = VertID.prototype.get_src = function() {
  var self = this.ptr;
  return _emscripten_bind_VertID_get_src_0(self);
};
    Object.defineProperty(VertID.prototype, 'src', { get: VertID.prototype.get_src });
/* docss */
  VertID.prototype['get_tar'] = VertID.prototype.get_tar = function() {
  var self = this.ptr;
  return _emscripten_bind_VertID_get_tar_0(self);
};
    Object.defineProperty(VertID.prototype, 'tar', { get: VertID.prototype.get_tar });
/* docss */
  VertID.prototype['get_PROP_ConnPoint'] = VertID.prototype.get_PROP_ConnPoint = function() {
  var self = this.ptr;
  return _emscripten_bind_VertID_get_PROP_ConnPoint_0(self);
};
    Object.defineProperty(VertID.prototype, 'PROP_ConnPoint', { get: VertID.prototype.get_PROP_ConnPoint });
/* docss */
  VertID.prototype['get_PROP_OrthShapeEdge'] = VertID.prototype.get_PROP_OrthShapeEdge = function() {
  var self = this.ptr;
  return _emscripten_bind_VertID_get_PROP_OrthShapeEdge_0(self);
};
    Object.defineProperty(VertID.prototype, 'PROP_OrthShapeEdge', { get: VertID.prototype.get_PROP_OrthShapeEdge });
/* docss */
  VertID.prototype['get_PROP_ConnectionPin'] = VertID.prototype.get_PROP_ConnectionPin = function() {
  var self = this.ptr;
  return _emscripten_bind_VertID_get_PROP_ConnectionPin_0(self);
};
    Object.defineProperty(VertID.prototype, 'PROP_ConnectionPin', { get: VertID.prototype.get_PROP_ConnectionPin });
/* docss */
  VertID.prototype['get_PROP_ConnCheckpoint'] = VertID.prototype.get_PROP_ConnCheckpoint = function() {
  var self = this.ptr;
  return _emscripten_bind_VertID_get_PROP_ConnCheckpoint_0(self);
};
    Object.defineProperty(VertID.prototype, 'PROP_ConnCheckpoint', { get: VertID.prototype.get_PROP_ConnCheckpoint });
/* docss */
  VertID.prototype['get_PROP_DummyPinHelper'] = VertID.prototype.get_PROP_DummyPinHelper = function() {
  var self = this.ptr;
  return _emscripten_bind_VertID_get_PROP_DummyPinHelper_0(self);
};
    Object.defineProperty(VertID.prototype, 'PROP_DummyPinHelper', { get: VertID.prototype.get_PROP_DummyPinHelper });
  VertID.prototype['__destroy__'] = VertID.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_VertID___destroy___0(self);
};
// MinimumTerminalSpanningTree

/**
 * @class
 */
function MinimumTerminalSpanningTree() { throw "cannot construct a MinimumTerminalSpanningTree, no constructor in IDL" }
MinimumTerminalSpanningTree.prototype = Object.create(WrapperObject.prototype);
MinimumTerminalSpanningTree.prototype.constructor = MinimumTerminalSpanningTree;
MinimumTerminalSpanningTree.prototype.__class__ = MinimumTerminalSpanningTree;
MinimumTerminalSpanningTree.__cache__ = {};
Module['MinimumTerminalSpanningTree'] = MinimumTerminalSpanningTree;

  MinimumTerminalSpanningTree.prototype['__destroy__'] = MinimumTerminalSpanningTree.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_MinimumTerminalSpanningTree___destroy___0(self);
};
// Checkpoint

/**
 * @class
 */
function Checkpoint(p) {
  if (p && typeof p === 'object') p = p.ptr;
  this.ptr = _emscripten_bind_Checkpoint_Checkpoint_1(p);
  getCache(Checkpoint)[this.ptr] = this;
};;
Checkpoint.prototype = Object.create(WrapperObject.prototype);
Checkpoint.prototype.constructor = Checkpoint;
Checkpoint.prototype.__class__ = Checkpoint;
Checkpoint.__cache__ = {};
Module['Checkpoint'] = Checkpoint;

  Checkpoint.prototype['__destroy__'] = Checkpoint.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_Checkpoint___destroy___0(self);
};
// ConnRef

/**
 * @class
 */
function ConnRef(router, src, dst, id) {
  if (router && typeof router === 'object') router = router.ptr;
  if (src && typeof src === 'object') src = src.ptr;
  if (dst && typeof dst === 'object') dst = dst.ptr;
  if (id && typeof id === 'object') id = id.ptr;
  if (id === undefined) { this.ptr = _emscripten_bind_ConnRef_ConnRef_3(router, src, dst); getCache(ConnRef)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_ConnRef_ConnRef_4(router, src, dst, id);
  getCache(ConnRef)[this.ptr] = this;
};;
ConnRef.prototype = Object.create(WrapperObject.prototype);
ConnRef.prototype.constructor = ConnRef;
ConnRef.prototype.__class__ = ConnRef;
ConnRef.__cache__ = {};
Module['ConnRef'] = ConnRef;

/**
 * @method
 * 
 * @returns {number}
 */
ConnRef.prototype['id'] = ConnRef.prototype.id = function() {
  var self = this.ptr;
  return _emscripten_bind_ConnRef_id_0(self);
};;

/**
 * @method
 * @param {ConnRefCallback} cb
 * @param {VoidPtr} ptr
 */
ConnRef.prototype['setCallback'] = ConnRef.prototype.setCallback = function(cb, ptr) {
  var self = this.ptr;
  assert(cb instanceof Function, 'Expecting function');
  var callback_val_0 = addFunction(cb, 'vi');
  if (ptr && typeof ptr === 'object') ptr = ptr.ptr;
  _emscripten_bind_ConnRef_setCallback_2(self, callback_val_0, ptr);
};;

/**
 * @method
 * @param {ConnEnd} srcPoint
 */
ConnRef.prototype['setSourceEndpoint'] = ConnRef.prototype.setSourceEndpoint = function(srcPoint) {
  var self = this.ptr;
  if (srcPoint && typeof srcPoint === 'object') srcPoint = srcPoint.ptr;
  _emscripten_bind_ConnRef_setSourceEndpoint_1(self, srcPoint);
};;

/**
 * @method
 * @param {ConnEnd} dstPoint
 */
ConnRef.prototype['setDestEndpoint'] = ConnRef.prototype.setDestEndpoint = function(dstPoint) {
  var self = this.ptr;
  if (dstPoint && typeof dstPoint === 'object') dstPoint = dstPoint.ptr;
  _emscripten_bind_ConnRef_setDestEndpoint_1(self, dstPoint);
};;

/**
 * @method
 * 
 * @returns {Avoid_ConnType}
 */
ConnRef.prototype['routingType'] = ConnRef.prototype.routingType = function() {
  var self = this.ptr;
  return _emscripten_bind_ConnRef_routingType_0(self);
};;

/**
 * @method
 * @param {Avoid_ConnType} type
 */
ConnRef.prototype['setRoutingType'] = ConnRef.prototype.setRoutingType = function(type) {
  var self = this.ptr;
  if (type && typeof type === 'object') type = type.ptr;
  _emscripten_bind_ConnRef_setRoutingType_1(self, type);
};;

/**
 * @method
 * 
 * @returns {Polygon}
 */
ConnRef.prototype['displayRoute'] = ConnRef.prototype.displayRoute = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ConnRef_displayRoute_0(self), Polygon);
};;

  ConnRef.prototype['__destroy__'] = ConnRef.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_ConnRef___destroy___0(self);
};
// EdgeInf

/**
 * @class
 */
function EdgeInf(v1, v2, orthogonal) {
  if (v1 && typeof v1 === 'object') v1 = v1.ptr;
  if (v2 && typeof v2 === 'object') v2 = v2.ptr;
  if (orthogonal && typeof orthogonal === 'object') orthogonal = orthogonal.ptr;
  if (orthogonal === undefined) { this.ptr = _emscripten_bind_EdgeInf_EdgeInf_2(v1, v2); getCache(EdgeInf)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_EdgeInf_EdgeInf_3(v1, v2, orthogonal);
  getCache(EdgeInf)[this.ptr] = this;
};;
EdgeInf.prototype = Object.create(WrapperObject.prototype);
EdgeInf.prototype.constructor = EdgeInf;
EdgeInf.prototype.__class__ = EdgeInf;
EdgeInf.__cache__ = {};
Module['EdgeInf'] = EdgeInf;

  EdgeInf.prototype['__destroy__'] = EdgeInf.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_EdgeInf___destroy___0(self);
};
// LineRep

/**
 * @class
 */
function LineRep() { throw "cannot construct a LineRep, no constructor in IDL" }
LineRep.prototype = Object.create(WrapperObject.prototype);
LineRep.prototype.constructor = LineRep;
LineRep.prototype.__class__ = LineRep;
LineRep.__cache__ = {};
Module['LineRep'] = LineRep;

/* docss */
  LineRep.prototype['get_begin'] = LineRep.prototype.get_begin = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_LineRep_get_begin_0(self), Point);
};
/* docsa */
    LineRep.prototype['set_begin'] = LineRep.prototype.set_begin = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_LineRep_set_begin_1(self, arg0);
};
    Object.defineProperty(LineRep.prototype, 'begin', { get: LineRep.prototype.get_begin, set: LineRep.prototype.set_begin });
/* docss */
  LineRep.prototype['get_end'] = LineRep.prototype.get_end = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_LineRep_get_end_0(self), Point);
};
/* docsa */
    LineRep.prototype['set_end'] = LineRep.prototype.set_end = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_LineRep_set_end_1(self, arg0);
};
    Object.defineProperty(LineRep.prototype, 'end', { get: LineRep.prototype.get_end, set: LineRep.prototype.set_end });
  LineRep.prototype['__destroy__'] = LineRep.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_LineRep___destroy___0(self);
};
// Router

/**
 * @class
 */
function Router(flags) {
  if (flags && typeof flags === 'object') flags = flags.ptr;
  this.ptr = _emscripten_bind_Router_Router_1(flags);
  getCache(Router)[this.ptr] = this;
};;
Router.prototype = Object.create(WrapperObject.prototype);
Router.prototype.constructor = Router;
Router.prototype.__class__ = Router;
Router.__cache__ = {};
Module['Router'] = Router;

/**
 * @method
 * 
 * @returns {Boolean}
 */
Router.prototype['processTransaction'] = Router.prototype.processTransaction = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Router_processTransaction_0(self));
};;

/**
 * @method
 * 
 */
Router.prototype['printInfo'] = Router.prototype.printInfo = function() {
  var self = this.ptr;
  _emscripten_bind_Router_printInfo_0(self);
};;

/**
 * @method
 * @param {ConnRef} connector
 */
Router.prototype['deleteConnector'] = Router.prototype.deleteConnector = function(connector) {
  var self = this.ptr;
  if (connector && typeof connector === 'object') connector = connector.ptr;
  _emscripten_bind_Router_deleteConnector_1(self, connector);
};;

/**
 * @method
 * @param {ShapeRef} shape
 * @param {number} xDiff
 * @param {number} yDiff
 */
Router.prototype['moveShape'] = Router.prototype.moveShape = function(shape, xDiff, yDiff) {
  var self = this.ptr;
  if (shape && typeof shape === 'object') shape = shape.ptr;
  if (xDiff && typeof xDiff === 'object') xDiff = xDiff.ptr;
  if (yDiff && typeof yDiff === 'object') yDiff = yDiff.ptr;
  _emscripten_bind_Router_moveShape_3(self, shape, xDiff, yDiff);
};;

  Router.prototype['__destroy__'] = Router.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_Router___destroy___0(self);
};
(function() {
  function setupEnums() {
    

    // Avoid_ConnDirFlag

    Module['ConnDirNone'] = _emscripten_enum_Avoid_ConnDirFlag_ConnDirNone();

    Module['ConnDirUp'] = _emscripten_enum_Avoid_ConnDirFlag_ConnDirUp();

    Module['ConnDirDown'] = _emscripten_enum_Avoid_ConnDirFlag_ConnDirDown();

    Module['ConnDirLeft'] = _emscripten_enum_Avoid_ConnDirFlag_ConnDirLeft();

    Module['ConnDirRight'] = _emscripten_enum_Avoid_ConnDirFlag_ConnDirRight();

    Module['ConnDirAll'] = _emscripten_enum_Avoid_ConnDirFlag_ConnDirAll();

    

    // Avoid_ConnEndType

    Module['ConnEndPoint'] = _emscripten_enum_Avoid_ConnEndType_ConnEndPoint();

    Module['ConnEndShapePin'] = _emscripten_enum_Avoid_ConnEndType_ConnEndShapePin();

    Module['ConnEndJunction'] = _emscripten_enum_Avoid_ConnEndType_ConnEndJunction();

    Module['ConnEndEmpty'] = _emscripten_enum_Avoid_ConnEndType_ConnEndEmpty();

    

    // Avoid_ActionType

    Module['ShapeMove'] = _emscripten_enum_Avoid_ActionType_ShapeMove();

    Module['ShapeAdd'] = _emscripten_enum_Avoid_ActionType_ShapeAdd();

    Module['ShapeRemove'] = _emscripten_enum_Avoid_ActionType_ShapeRemove();

    Module['JunctionMove'] = _emscripten_enum_Avoid_ActionType_JunctionMove();

    Module['JunctionAdd'] = _emscripten_enum_Avoid_ActionType_JunctionAdd();

    Module['JunctionRemove'] = _emscripten_enum_Avoid_ActionType_JunctionRemove();

    Module['ConnChange'] = _emscripten_enum_Avoid_ActionType_ConnChange();

    Module['ConnectionPinChange'] = _emscripten_enum_Avoid_ActionType_ConnectionPinChange();

    

    // Avoid_ShapeTransformationType

    Module['TransformationType_CW90'] = _emscripten_enum_Avoid_ShapeTransformationType_TransformationType_CW90();

    Module['TransformationType_CW180'] = _emscripten_enum_Avoid_ShapeTransformationType_TransformationType_CW180();

    Module['TransformationType_CW270'] = _emscripten_enum_Avoid_ShapeTransformationType_TransformationType_CW270();

    Module['TransformationType_FlipX'] = _emscripten_enum_Avoid_ShapeTransformationType_TransformationType_FlipX();

    Module['TransformationType_FlipY'] = _emscripten_enum_Avoid_ShapeTransformationType_TransformationType_FlipY();

    

    // Avoid_ConnType

    Module['ConnType_None'] = _emscripten_enum_Avoid_ConnType_ConnType_None();

    Module['ConnType_PolyLine'] = _emscripten_enum_Avoid_ConnType_ConnType_PolyLine();

    Module['ConnType_Orthogonal'] = _emscripten_enum_Avoid_ConnType_ConnType_Orthogonal();

    

    // Avoid_RouterFlag

    Module['PolyLineRouting'] = _emscripten_enum_Avoid_RouterFlag_PolyLineRouting();

    Module['OrthogonalRouting'] = _emscripten_enum_Avoid_RouterFlag_OrthogonalRouting();

  }
  if (runtimeInitialized) setupEnums();
  else addOnPreMain(setupEnums);
})();



  return initAvoidModule.ready
}
);
})();
export default initAvoidModule;