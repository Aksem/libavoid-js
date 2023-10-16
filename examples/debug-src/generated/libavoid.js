
var initAvoidModule = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(initAvoidModule = {})  {

// include: shell.js
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
var Module = typeof initAvoidModule != 'undefined' ? initAvoidModule : {};

// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
Module['ready'] = new Promise(function(resolve, reject) {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});
["_malloc","getExceptionMessage","___get_exception_message","_free","_fflush","_emscripten_bind_VoidPtr___destroy___0","_emscripten_bind_HyperedgeImprover_HyperedgeImprover_0","_emscripten_bind_HyperedgeImprover_clear_0","_emscripten_bind_HyperedgeImprover_setRouter_1","_emscripten_bind_HyperedgeImprover___destroy___0","_emscripten_bind_Box_Box_0","_emscripten_bind_Box_length_1","_emscripten_bind_Box_width_0","_emscripten_bind_Box_height_0","_emscripten_bind_Box_get_min_0","_emscripten_bind_Box_set_min_1","_emscripten_bind_Box_get_max_0","_emscripten_bind_Box_set_max_1","_emscripten_bind_Box___destroy___0","_emscripten_bind_PolygonInterface_clear_0","_emscripten_bind_PolygonInterface_empty_0","_emscripten_bind_PolygonInterface_size_0","_emscripten_bind_PolygonInterface_id_0","_emscripten_bind_PolygonInterface_at_1","_emscripten_bind_PolygonInterface_boundingRectPolygon_0","_emscripten_bind_PolygonInterface_offsetBoundingBox_1","_emscripten_bind_PolygonInterface_offsetPolygon_1","_emscripten_bind_PolygonInterface___destroy___0","_emscripten_bind_Polygon_Polygon_0","_emscripten_bind_Polygon_Polygon_1","_emscripten_bind_Polygon_setPoint_2","_emscripten_bind_Polygon_size_0","_emscripten_bind_Polygon_get_ps_1","_emscripten_bind_Polygon_set_ps_2","_emscripten_bind_Polygon___destroy___0","_emscripten_bind_Point_Point_0","_emscripten_bind_Point_Point_2","_emscripten_bind_Point_equal_1","_emscripten_bind_Point_get_x_0","_emscripten_bind_Point_set_x_1","_emscripten_bind_Point_get_y_0","_emscripten_bind_Point_set_y_1","_emscripten_bind_Point_get_id_0","_emscripten_bind_Point_set_id_1","_emscripten_bind_Point_get_vn_0","_emscripten_bind_Point_set_vn_1","_emscripten_bind_Point___destroy___0","_emscripten_bind_Rectangle_Rectangle_2","_emscripten_bind_Rectangle_Rectangle_3","_emscripten_bind_Rectangle___destroy___0","_emscripten_bind_HyperedgeTreeNode_HyperedgeTreeNode_0","_emscripten_bind_HyperedgeTreeNode_writeEdgesToConns_2","_emscripten_bind_HyperedgeTreeNode___destroy___0","_emscripten_bind_HyperedgeTreeEdge_HyperedgeTreeEdge_3","_emscripten_bind_HyperedgeTreeEdge___destroy___0","_emscripten_bind_AStarPath_AStarPath_0","_emscripten_bind_AStarPath_search_4","_emscripten_bind_AStarPath___destroy___0","_emscripten_bind_ConnEnd_ConnEnd_1","_emscripten_bind_ConnEnd_ConnEnd_2","_emscripten_bind_ConnEnd_createConnEndFromJunctionRef_1","_emscripten_bind_ConnEnd___destroy___0","_emscripten_bind_ActionInfo_ActionInfo_2","_emscripten_bind_ActionInfo_ActionInfo_3","_emscripten_bind_ActionInfo_ActionInfo_4","_emscripten_bind_ActionInfo_obstacle_0","_emscripten_bind_ActionInfo_shape_0","_emscripten_bind_ActionInfo_conn_0","_emscripten_bind_ActionInfo_junction_0","_emscripten_bind_ActionInfo_addConnEndUpdate_3","_emscripten_bind_ActionInfo_get_type_0","_emscripten_bind_ActionInfo_set_type_1","_emscripten_bind_ActionInfo_get_objPtr_0","_emscripten_bind_ActionInfo_set_objPtr_1","_emscripten_bind_ActionInfo_get_newPoly_0","_emscripten_bind_ActionInfo_set_newPoly_1","_emscripten_bind_ActionInfo_get_newPosition_0","_emscripten_bind_ActionInfo_set_newPosition_1","_emscripten_bind_ActionInfo_get_firstMove_0","_emscripten_bind_ActionInfo_set_firstMove_1","_emscripten_bind_ActionInfo___destroy___0","_emscripten_bind_ShapeConnectionPin_ShapeConnectionPin_2","_emscripten_bind_ShapeConnectionPin_ShapeConnectionPin_3","_emscripten_bind_ShapeConnectionPin_ShapeConnectionPin_6","_emscripten_bind_ShapeConnectionPin_ShapeConnectionPin_7","_emscripten_bind_ShapeConnectionPin_setConnectionCost_1","_emscripten_bind_ShapeConnectionPin_position_0","_emscripten_bind_ShapeConnectionPin_position_1","_emscripten_bind_ShapeConnectionPin_directions_0","_emscripten_bind_ShapeConnectionPin_setExclusive_1","_emscripten_bind_ShapeConnectionPin_isExclusive_0","_emscripten_bind_ShapeConnectionPin_updatePosition_1","_emscripten_bind_ShapeConnectionPin___destroy___0","_emscripten_bind_Obstacle_id_0","_emscripten_bind_Obstacle_polygon_0","_emscripten_bind_Obstacle_router_0","_emscripten_bind_Obstacle_position_0","_emscripten_bind_Obstacle_setNewPoly_1","_emscripten_bind_Obstacle___destroy___0","_emscripten_bind_JunctionRef_JunctionRef_2","_emscripten_bind_JunctionRef_JunctionRef_3","_emscripten_bind_JunctionRef_position_0","_emscripten_bind_JunctionRef_setPositionFixed_1","_emscripten_bind_JunctionRef_positionFixed_0","_emscripten_bind_JunctionRef_recommendedPosition_0","_emscripten_bind_JunctionRef___destroy___0","_emscripten_bind_ShapeRef_ShapeRef_2","_emscripten_bind_ShapeRef_ShapeRef_3","_emscripten_bind_ShapeRef_polygon_0","_emscripten_bind_ShapeRef_position_0","_emscripten_bind_ShapeRef_setNewPoly_1","_emscripten_bind_ShapeRef___destroy___0","_emscripten_bind_HyperedgeNewAndDeletedObjectLists___destroy___0","_emscripten_bind_HyperedgeRerouter_HyperedgeRerouter_0","_emscripten_bind_HyperedgeRerouter_registerHyperedgeForRerouting_1","_emscripten_bind_HyperedgeRerouter___destroy___0","_emscripten_bind_VertInf___destroy___0","_emscripten_bind_VertID_VertID_0","_emscripten_bind_VertID_VertID_2","_emscripten_bind_VertID_VertID_3","_emscripten_bind_VertID_get_objID_0","_emscripten_bind_VertID_set_objID_1","_emscripten_bind_VertID_get_vn_0","_emscripten_bind_VertID_set_vn_1","_emscripten_bind_VertID_get_props_0","_emscripten_bind_VertID_set_props_1","_emscripten_bind_VertID_get_src_0","_emscripten_bind_VertID_get_tar_0","_emscripten_bind_VertID_get_PROP_ConnPoint_0","_emscripten_bind_VertID_get_PROP_OrthShapeEdge_0","_emscripten_bind_VertID_get_PROP_ConnectionPin_0","_emscripten_bind_VertID_get_PROP_ConnCheckpoint_0","_emscripten_bind_VertID_get_PROP_DummyPinHelper_0","_emscripten_bind_VertID___destroy___0","_emscripten_bind_MinimumTerminalSpanningTree___destroy___0","_emscripten_bind_Checkpoint_Checkpoint_1","_emscripten_bind_Checkpoint___destroy___0","_emscripten_bind_ConnRef_ConnRef_3","_emscripten_bind_ConnRef_ConnRef_4","_emscripten_bind_ConnRef_id_0","_emscripten_bind_ConnRef_setCallback_2","_emscripten_bind_ConnRef_setSourceEndpoint_1","_emscripten_bind_ConnRef_setDestEndpoint_1","_emscripten_bind_ConnRef_routingType_0","_emscripten_bind_ConnRef_setRoutingType_1","_emscripten_bind_ConnRef_displayRoute_0","_emscripten_bind_ConnRef_setHateCrossings_1","_emscripten_bind_ConnRef_doesHateCrossings_0","_emscripten_bind_ConnRef___destroy___0","_emscripten_bind_EdgeInf_EdgeInf_2","_emscripten_bind_EdgeInf_EdgeInf_3","_emscripten_bind_EdgeInf___destroy___0","_emscripten_bind_LineRep_get_begin_0","_emscripten_bind_LineRep_set_begin_1","_emscripten_bind_LineRep_get_end_0","_emscripten_bind_LineRep_set_end_1","_emscripten_bind_LineRep___destroy___0","_emscripten_bind_Router_Router_1","_emscripten_bind_Router_processTransaction_0","_emscripten_bind_Router_printInfo_0","_emscripten_bind_Router_deleteConnector_1","_emscripten_bind_Router_moveShape_2","_emscripten_bind_Router_moveShape_3","_emscripten_bind_Router_deleteShape_1","_emscripten_bind_Router_moveJunction_2","_emscripten_bind_Router_moveJunction_3","_emscripten_bind_Router_setRoutingParameter_2","_emscripten_bind_Router_setRoutingOption_2","_emscripten_bind_Router___destroy___0","_emscripten_enum_Avoid_ConnDirFlag_ConnDirNone","_emscripten_enum_Avoid_ConnDirFlag_ConnDirUp","_emscripten_enum_Avoid_ConnDirFlag_ConnDirDown","_emscripten_enum_Avoid_ConnDirFlag_ConnDirLeft","_emscripten_enum_Avoid_ConnDirFlag_ConnDirRight","_emscripten_enum_Avoid_ConnDirFlag_ConnDirAll","_emscripten_enum_Avoid_ConnEndType_ConnEndPoint","_emscripten_enum_Avoid_ConnEndType_ConnEndShapePin","_emscripten_enum_Avoid_ConnEndType_ConnEndJunction","_emscripten_enum_Avoid_ConnEndType_ConnEndEmpty","_emscripten_enum_Avoid_ActionType_ShapeMove","_emscripten_enum_Avoid_ActionType_ShapeAdd","_emscripten_enum_Avoid_ActionType_ShapeRemove","_emscripten_enum_Avoid_ActionType_JunctionMove","_emscripten_enum_Avoid_ActionType_JunctionAdd","_emscripten_enum_Avoid_ActionType_JunctionRemove","_emscripten_enum_Avoid_ActionType_ConnChange","_emscripten_enum_Avoid_ActionType_ConnectionPinChange","_emscripten_enum_Avoid_ShapeTransformationType_TransformationType_CW90","_emscripten_enum_Avoid_ShapeTransformationType_TransformationType_CW180","_emscripten_enum_Avoid_ShapeTransformationType_TransformationType_CW270","_emscripten_enum_Avoid_ShapeTransformationType_TransformationType_FlipX","_emscripten_enum_Avoid_ShapeTransformationType_TransformationType_FlipY","_emscripten_enum_Avoid_ConnType_ConnType_None","_emscripten_enum_Avoid_ConnType_ConnType_PolyLine","_emscripten_enum_Avoid_ConnType_ConnType_Orthogonal","_emscripten_enum_Avoid_RouterFlag_PolyLineRouting","_emscripten_enum_Avoid_RouterFlag_OrthogonalRouting","_emscripten_enum_Avoid_RoutingParameter_segmentPenalty","_emscripten_enum_Avoid_RoutingParameter_anglePenalty","_emscripten_enum_Avoid_RoutingParameter_crossingPenalty","_emscripten_enum_Avoid_RoutingParameter_clusterCrossingPenalty","_emscripten_enum_Avoid_RoutingParameter_fixedSharedPathPenalty","_emscripten_enum_Avoid_RoutingParameter_portDirectionPenalty","_emscripten_enum_Avoid_RoutingParameter_shapeBufferDistance","_emscripten_enum_Avoid_RoutingParameter_idealNudgingDistance","_emscripten_enum_Avoid_RoutingParameter_reverseDirectionPenalty","_emscripten_enum_Avoid_RoutingOption_nudgeOrthogonalSegmentsConnectedToShapes","_emscripten_enum_Avoid_RoutingOption_improveHyperedgeRoutesMovingJunctions","_emscripten_enum_Avoid_RoutingOption_penaliseOrthogonalSharedPathsAtConnEnds","_emscripten_enum_Avoid_RoutingOption_nudgeOrthogonalTouchingColinearSegments","_emscripten_enum_Avoid_RoutingOption_performUnifyingNudgingPreprocessingStep","_emscripten_enum_Avoid_RoutingOption_improveHyperedgeRoutesMovingAddingAndDeletingJunctions","_emscripten_enum_Avoid_RoutingOption_nudgeSharedPathsWithCommonEndPoint","onRuntimeInitialized"].forEach((prop) => {
  if (!Object.getOwnPropertyDescriptor(Module['ready'], prop)) {
    Object.defineProperty(Module['ready'], prop, {
      get: () => abort('You are getting ' + prop + ' on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'),
      set: () => abort('You are setting ' + prop + ' on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'),
    });
  }
});

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = Object.assign({}, Module);

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = (status, toThrow) => {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = true;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;

if (Module['ENVIRONMENT']) {
  throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)');
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

if (ENVIRONMENT_IS_SHELL) {

  if ((typeof process == 'object' && typeof require === 'function') || typeof window == 'object' || typeof importScripts == 'function') throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  if (typeof read != 'undefined') {
    read_ = function shell_read(f) {
      return read(f);
    };
  }

  readBinary = function readBinary(f) {
    let data;
    if (typeof readbuffer == 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data == 'object');
    return data;
  };

  readAsync = function readAsync(f, onload, onerror) {
    setTimeout(() => onload(readBinary(f)), 0);
  };

  if (typeof clearTimeout == 'undefined') {
    globalThis.clearTimeout = (id) => {};
  }

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit == 'function') {
    quit_ = (status, toThrow) => {
      // Unlike node which has process.exitCode, d8 has no such mechanism. So we
      // have no way to set the exit code and then let the program exit with
      // that code when it naturally stops running (say, when all setTimeouts
      // have completed). For that reason, we must call `quit` - the only way to
      // set the exit code - but quit also halts immediately.  To increase
      // consistency with node (and the web) we schedule the actual quit call
      // using a setTimeout to give the current stack and any exception handlers
      // a chance to run.  This enables features such as addOnPostRun (which
      // expected to be able to run code after main returns).
      setTimeout(() => {
        if (!(toThrow instanceof ExitStatus)) {
          let toLog = toThrow;
          if (toThrow && typeof toThrow == 'object' && toThrow.stack) {
            toLog = [toThrow, toThrow.stack];
          }
          err('exiting due to exception: ' + toLog);
        }
        quit(status);
      });
      throw toThrow;
    };
  }

  if (typeof print != 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console == 'undefined') console = /** @type{!Console} */({});
    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);
    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr != 'undefined' ? printErr : print);
  }

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document != 'undefined' && document.currentScript) { // web
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
  // If scriptDirectory contains a query (starting with ?) or a fragment (starting with #),
  // they are removed because they could contain a slash.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  if (!(typeof window == 'object' || typeof importScripts == 'function')) throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {
// include: web_or_worker_shell_read.js
read_ = (url) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
  }

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = (url) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = (url, onload, onerror) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = () => {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  }

// end include: web_or_worker_shell_read.js
  }

  setWindowTitle = (title) => document.title = title;
} else
{
  throw new Error('environment detection error');
}

var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
Object.assign(Module, moduleOverrides);
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;
checkIncomingModuleAPI();

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.

if (Module['arguments']) arguments_ = Module['arguments'];legacyModuleProp('arguments', 'arguments_');

if (Module['thisProgram']) thisProgram = Module['thisProgram'];legacyModuleProp('thisProgram', 'thisProgram');

if (Module['quit']) quit_ = Module['quit'];legacyModuleProp('quit', 'quit_');

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
// Assertions on removed incoming Module JS APIs.
assert(typeof Module['memoryInitializerPrefixURL'] == 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['pthreadMainPrefixURL'] == 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['cdInitializerPrefixURL'] == 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['filePackagePrefixURL'] == 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['read'] == 'undefined', 'Module.read option was removed (modify read_ in JS)');
assert(typeof Module['readAsync'] == 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
assert(typeof Module['readBinary'] == 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
assert(typeof Module['setWindowTitle'] == 'undefined', 'Module.setWindowTitle option was removed (modify setWindowTitle in JS)');
assert(typeof Module['TOTAL_MEMORY'] == 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');
legacyModuleProp('read', 'read_');
legacyModuleProp('readAsync', 'readAsync');
legacyModuleProp('readBinary', 'readBinary');
legacyModuleProp('setWindowTitle', 'setWindowTitle');
var IDBFS = 'IDBFS is no longer included by default; build with -lidbfs.js';
var PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';
var WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';
var NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';

assert(!ENVIRONMENT_IS_WORKER, "worker environment detected but not enabled at build time.  Add 'worker' to `-sENVIRONMENT` to enable.");

assert(!ENVIRONMENT_IS_NODE, "node environment detected but not enabled at build time.  Add 'node' to `-sENVIRONMENT` to enable.");

assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.");


// end include: shell.js
// include: preamble.js
// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;
if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];legacyModuleProp('wasmBinary', 'wasmBinary');
var noExitRuntime = Module['noExitRuntime'] || true;legacyModuleProp('noExitRuntime', 'noExitRuntime');

if (typeof WebAssembly != 'object') {
  abort('no native wasm support detected');
}

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
    abort('Assertion failed' + (text ? ': ' + text : ''));
  }
}

// We used to include malloc/free by default in the past. Show a helpful error in
// builds with assertions.

// Memory management

var HEAP,
/** @type {!Int8Array} */
  HEAP8,
/** @type {!Uint8Array} */
  HEAPU8,
/** @type {!Int16Array} */
  HEAP16,
/** @type {!Uint16Array} */
  HEAPU16,
/** @type {!Int32Array} */
  HEAP32,
/** @type {!Uint32Array} */
  HEAPU32,
/** @type {!Float32Array} */
  HEAPF32,
/** @type {!Float64Array} */
  HEAPF64;

function updateMemoryViews() {
  var b = wasmMemory.buffer;
  Module['HEAP8'] = HEAP8 = new Int8Array(b);
  Module['HEAP16'] = HEAP16 = new Int16Array(b);
  Module['HEAP32'] = HEAP32 = new Int32Array(b);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(b);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(b);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(b);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(b);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(b);
}

assert(!Module['STACK_SIZE'], 'STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time')

assert(typeof Int32Array != 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray != undefined && Int32Array.prototype.set != undefined,
       'JS engine does not provide full typed array support');

// If memory is defined in wasm, the user can't provide it, or set INITIAL_MEMORY
assert(!Module['wasmMemory'], 'Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally');
assert(!Module['INITIAL_MEMORY'], 'Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically');

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
  // If the stack ends at address zero we write our cookies 4 bytes into the
  // stack.  This prevents interference with the (separate) address-zero check
  // below.
  if (max == 0) {
    max += 4;
  }
  // The stack grow downwards towards _emscripten_stack_get_end.
  // We write cookies to the final two words in the stack and detect if they are
  // ever overwritten.
  HEAPU32[((max)>>2)] = 0x02135467;
  HEAPU32[(((max)+(4))>>2)] = 0x89BACDFE;
  // Also test the global address 0 for integrity.
  HEAPU32[0] = 0x63736d65; /* 'emsc' */
}

function checkStackCookie() {
  if (ABORT) return;
  var max = _emscripten_stack_get_end();
  // See writeStackCookie().
  if (max == 0) {
    max += 4;
  }
  var cookie1 = HEAPU32[((max)>>2)];
  var cookie2 = HEAPU32[(((max)+(4))>>2)];
  if (cookie1 != 0x02135467 || cookie2 != 0x89BACDFE) {
    abort('Stack overflow! Stack cookie has been overwritten at ' + ptrToString(max) + ', expected hex dwords 0x89BACDFE and 0x2135467, but received ' + ptrToString(cookie2) + ' ' + ptrToString(cookie1));
  }
  // Also test the global address 0 for integrity.
  if (HEAPU32[0] !== 0x63736d65 /* 'emsc' */) {
    abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
  }
}

// end include: runtime_stack_check.js
// include: runtime_assertions.js
// Endianness check
(function() {
  var h16 = new Int16Array(1);
  var h8 = new Int8Array(h16.buffer);
  h16[0] = 0x6373;
  if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)';
})();

// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;

var runtimeKeepaliveCounter = 0;

function keepRuntimeAlive() {
  return noExitRuntime || runtimeKeepaliveCounter > 0;
}

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
  assert(!runtimeInitialized);
  runtimeInitialized = true;

  checkStackCookie();

  
  callRuntimeCallbacks(__ATINIT__);
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
    if (runDependencyWatcher === null && typeof setInterval != 'undefined') {
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

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what = 'Aborted(' + what + ')';
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  // FIXME This approach does not work in Wasm EH because it currently does not assume
  // all RuntimeErrors are from traps; it decides whether a RuntimeError is from
  // a trap or not based on a hidden field within the object. So at the moment
  // we don't have a way of throwing a wasm trap from JS. TODO Make a JS API that
  // allows this in the wasm spec.

  // Suppress closure compiler warning here. Closure compiler's builtin extern
  // defintion for WebAssembly.RuntimeError claims it takes no arguments even
  // though it can.
  // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure gets fixed.
  /** @suppress {checkTypes} */
  var e = new WebAssembly.RuntimeError(what);

  readyPromiseReject(e);
  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// include: memoryprofiler.js
// end include: memoryprofiler.js
// show errors on likely calls to FS when it was not included
var FS = {
  error: function() {
    abort('Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM');
  },
  init: function() { FS.error() },
  createDataFile: function() { FS.error() },
  createPreloadedFile: function() { FS.error() },
  createLazyFile: function() { FS.error() },
  open: function() { FS.error() },
  mkdev: function() { FS.error() },
  registerDevice: function() { FS.error() },
  analyzePath: function() { FS.error() },

  ErrnoError: function ErrnoError() { FS.error() },
};
Module['FS_createDataFile'] = FS.createDataFile;
Module['FS_createPreloadedFile'] = FS.createPreloadedFile;

// include: URIUtils.js
// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  // Prefix of data URIs emitted by SINGLE_FILE and related options.
  return filename.startsWith(dataURIPrefix);
}

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return filename.startsWith('file://');
}

// end include: URIUtils.js
/** @param {boolean=} fixedasm */
function createExportWrapper(name, fixedasm) {
  return function() {
    var displayName = name;
    var asm = fixedasm;
    if (!fixedasm) {
      asm = Module['asm'];
    }
    assert(runtimeInitialized, 'native function `' + displayName + '` called before runtime initialization');
    if (!asm[name]) {
      assert(asm[name], 'exported native function `' + displayName + '` not found');
    }
    return asm[name].apply(null, arguments);
  };
}

// include: runtime_exceptions.js
// Base Emscripten EH error class
class EmscriptenEH extends Error {}

class EmscriptenSjLj extends EmscriptenEH {}

class CppException extends EmscriptenEH {
  constructor(excPtr) {
    super(excPtr);
    this.excPtr = excPtr;
    const excInfo = getExceptionMessage(excPtr);
    this.name = excInfo[0];
    this.message = excInfo[1];
  }
}

// end include: runtime_exceptions.js
// `abortWrapperDepth` counts the recursion level of the wrapper function so
// that we only handle exceptions at the top level letting the exception
// mechanics work uninterrupted at the inner level.  Additionally,
// `abortWrapperDepth` is also manually incremented in callMain so that we know
// to ignore exceptions from there since they're handled by callMain directly.
var abortWrapperDepth = 0;

// Creates a wrapper in a closure so that each wrapper gets it's own copy of 'original'
function makeAbortWrapper(original) {
  return function() {
    // Don't allow this function to be called if we're aborted!
    if (ABORT) {
      throw "program has already aborted!";
    }

    abortWrapperDepth += 1;
    try {
      return original.apply(null, arguments);
    } catch (e) {
      if (
        ABORT // rethrow exception if abort() was called in the original function call above
        || abortWrapperDepth > 1 // rethrow exceptions not caught at the top level if exception catching is enabled; rethrow from exceptions from within callMain
        || e instanceof EmscriptenSjLj // EXCEPTION_STACK_TRACES=1 will throw an instance of EmscriptenSjLj
        || e === 'unwind'
      ) {
        throw e;
      }

      abort("unhandled exception: " + [e, e.stack]);
    }
    finally {
      abortWrapperDepth -= 1;
    }
  }
}

// Instrument all the exported functions to:
// - abort if an unhandled exception occurs
// - throw an exception if someone tries to call them after the program has aborted
// See settings.ABORT_ON_WASM_EXCEPTIONS for more info.
function instrumentWasmExportsWithAbort(exports) {
  // Override the exported functions with the wrappers and copy over any other symbols
  var instExports = {};
  for (var name in exports) {
      var original = exports[name];
      if (typeof original == 'function') {
        instExports[name] = makeAbortWrapper(original);
      } else {
        instExports[name] = original;
      }
  }

  return instExports;
}

function instrumentWasmTableWithAbort() {
  // Override the wasmTable get function to return the wrappers
  var realGet = wasmTable.get;
  var wrapperCache = {};
  wasmTable.get = (i) => {
    var func = realGet.call(wasmTable, i);
    var cached = wrapperCache[i];
    if (!cached || cached.func !== func) {
      cached = wrapperCache[i] = {
        func: func,
        wrapper: makeAbortWrapper(func)
      }
    }
    return cached.wrapper;
  };
}

var wasmBinaryFile;
  wasmBinaryFile = 'libavoid.wasm';
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
    }
    throw "both async and sync fetching of the wasm failed";
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise(binaryFile) {
  // If we don't have the binary yet, try to load it asynchronously.
  // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
  // See https://github.com/github/fetch/pull/92#issuecomment-140665932
  // Cordova or Electron apps are typically loaded from a file:// url.
  // So use fetch if it is available and the url is not a file, otherwise fall back to XHR.
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
    if (typeof fetch == 'function'
    ) {
      return fetch(binaryFile, { credentials: 'same-origin' }).then(function(response) {
        if (!response['ok']) {
          throw "failed to load wasm binary file at '" + binaryFile + "'";
        }
        return response['arrayBuffer']();
      }).catch(function () {
          return getBinary(binaryFile);
      });
    }
  }

  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(function() { return getBinary(binaryFile); });
}

function instantiateArrayBuffer(binaryFile, imports, receiver) {
  return getBinaryPromise(binaryFile).then(function(binary) {
    return WebAssembly.instantiate(binary, imports);
  }).then(function (instance) {
    return instance;
  }).then(receiver, function(reason) {
    err('failed to asynchronously prepare wasm: ' + reason);

    // Warn on some common problems.
    if (isFileURI(wasmBinaryFile)) {
      err('warning: Loading from a file URI (' + wasmBinaryFile + ') is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing');
    }
    abort(reason);
  });
}

function instantiateAsync(binary, binaryFile, imports, callback) {
  if (!binary &&
      typeof WebAssembly.instantiateStreaming == 'function' &&
      !isDataURI(binaryFile) &&
      typeof fetch == 'function') {
    return fetch(binaryFile, { credentials: 'same-origin' }).then(function(response) {
      // Suppress closure warning here since the upstream definition for
      // instantiateStreaming only allows Promise<Repsponse> rather than
      // an actual Response.
      // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure is fixed.
      /** @suppress {checkTypes} */
      var result = WebAssembly.instantiateStreaming(response, imports);

      return result.then(
        callback,
        function(reason) {
          // We expect the most common failure cause to be a bad MIME type for the binary,
          // in which case falling back to ArrayBuffer instantiation should work.
          err('wasm streaming compile failed: ' + reason);
          err('falling back to ArrayBuffer instantiation');
          return instantiateArrayBuffer(binaryFile, imports, callback);
        });
    });
  } else {
    return instantiateArrayBuffer(binaryFile, imports, callback);
  }
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': wasmImports,
    'wasi_snapshot_preview1': wasmImports,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    exports = instrumentWasmExportsWithAbort(exports);

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    assert(wasmMemory, "memory not found in wasm exports");
    // This assertion doesn't hold when emscripten is run in --post-link
    // mode.
    // TODO(sbc): Read INITIAL_MEMORY out of the wasm file in post-link mode.
    //assert(wasmMemory.buffer.byteLength === 16777216);
    updateMemoryViews();

    wasmTable = Module['asm']['__indirect_function_table'];
    assert(wasmTable, "table not found in wasm exports");

    addOnInit(Module['asm']['__wasm_call_ctors']);

    instrumentWasmTableWithAbort();

    removeRunDependency('wasm-instantiate');

    return exports;
  }
  // wait for the pthread pool (if any)
  addRunDependency('wasm-instantiate');

  // Prefer streaming instantiation if available.
  // Async compilation can be confusing when an error on the page overwrites Module
  // (for example, if the order of elements is wrong, and the one defining Module is
  // later), so we save Module and check it later.
  var trueModule = Module;
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
    trueModule = null;
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above PTHREADS-enabled path.
    receiveInstance(result['instance']);
  }

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to
  // run the instantiation parallel to any other async startup actions they are
  // performing.
  // Also pthreads and wasm workers initialize the wasm instance through this
  // path.
  if (Module['instantiateWasm']) {

    try {
      return Module['instantiateWasm'](info, receiveInstance);
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
        // If instantiation fails, reject the module ready promise.
        readyPromiseReject(e);
    }
  }

  err('asynchronously preparing wasm');
  // If instantiation fails, reject the module ready promise.
  instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(readyPromiseReject);
  return {}; // no exports yet; we'll fill them in later
}

// Globals used by JS i64 conversions (see makeSetValue)
var tempDouble;
var tempI64;

// include: runtime_debug.js
function legacyModuleProp(prop, newName) {
  if (!Object.getOwnPropertyDescriptor(Module, prop)) {
    Object.defineProperty(Module, prop, {
      configurable: true,
      get: function() {
        abort('Module.' + prop + ' has been replaced with plain ' + newName + ' (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)');
      }
    });
  }
}

function ignoredModuleProp(prop) {
  if (Object.getOwnPropertyDescriptor(Module, prop)) {
    abort('`Module.' + prop + '` was supplied but `' + prop + '` not included in INCOMING_MODULE_JS_API');
  }
}

// forcing the filesystem exports a few things by default
function isExportedByForceFilesystem(name) {
  return name === 'FS_createPath' ||
         name === 'FS_createDataFile' ||
         name === 'FS_createPreloadedFile' ||
         name === 'FS_unlink' ||
         name === 'addRunDependency' ||
         // The old FS has some functionality that WasmFS lacks.
         name === 'FS_createLazyFile' ||
         name === 'FS_createDevice' ||
         name === 'removeRunDependency';
}

function missingGlobal(sym, msg) {
  if (typeof globalThis !== 'undefined') {
    Object.defineProperty(globalThis, sym, {
      configurable: true,
      get: function() {
        warnOnce('`' + sym + '` is not longer defined by emscripten. ' + msg);
        return undefined;
      }
    });
  }
}

missingGlobal('buffer', 'Please use HEAP8.buffer or wasmMemory.buffer');

function missingLibrarySymbol(sym) {
  if (typeof globalThis !== 'undefined' && !Object.getOwnPropertyDescriptor(globalThis, sym)) {
    Object.defineProperty(globalThis, sym, {
      configurable: true,
      get: function() {
        // Can't `abort()` here because it would break code that does runtime
        // checks.  e.g. `if (typeof SDL === 'undefined')`.
        var msg = '`' + sym + '` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line';
        // DEFAULT_LIBRARY_FUNCS_TO_INCLUDE requires the name as it appears in
        // library.js, which means $name for a JS name with no prefix, or name
        // for a JS name like _name.
        var librarySymbol = sym;
        if (!librarySymbol.startsWith('_')) {
          librarySymbol = '$' + sym;
        }
        msg += " (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE=" + librarySymbol + ")";
        if (isExportedByForceFilesystem(sym)) {
          msg += '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you';
        }
        warnOnce(msg);
        return undefined;
      }
    });
  }
  // Any symbol that is not included from the JS libary is also (by definition)
  // not exported on the Module object.
  unexportedRuntimeSymbol(sym);
}

function unexportedRuntimeSymbol(sym) {
  if (!Object.getOwnPropertyDescriptor(Module, sym)) {
    Object.defineProperty(Module, sym, {
      configurable: true,
      get: function() {
        var msg = "'" + sym + "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)";
        if (isExportedByForceFilesystem(sym)) {
          msg += '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you';
        }
        abort(msg);
      }
    });
  }
}

// Used by XXXXX_DEBUG settings to output debug messages.
function dbg(text) {
  // TODO(sbc): Make this configurable somehow.  Its not always convenient for
  // logging to show up as errors.
  console.error.apply(console, arguments);
}

// end include: runtime_debug.js
// === Body ===

function array_bounds_check_error(idx,size) { throw 'Array index ' + idx + ' out of bounds: [0,' + size + ')'; }



// end include: preamble.js

  /** @constructor */
  function ExitStatus(status) {
      this.name = 'ExitStatus';
      this.message = 'Program terminated with exit(' + status + ')';
      this.status = status;
    }

  function uleb128Encode(n, target) {
      assert(n < 16384);
      if (n < 128) {
        target.push(n);
      } else {
        target.push((n % 128) | 128, n >> 7);
      }
    }
  
  function sigToWasmTypes(sig) {
      var typeNames = {
        'i': 'i32',
        // i64 values will be split into two i32s.
        'j': 'i32',
        'f': 'f32',
        'd': 'f64',
        'p': 'i32',
      };
      var type = {
        parameters: [],
        results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
      };
      for (var i = 1; i < sig.length; ++i) {
        assert(sig[i] in typeNames, 'invalid signature char: ' + sig[i]);
        type.parameters.push(typeNames[sig[i]]);
        if (sig[i] === 'j') {
          type.parameters.push('i32');
        }
      }
      return type;
    }
  
  function generateFuncType(sig, target){
      var sigRet = sig.slice(0, 1);
      var sigParam = sig.slice(1);
      var typeCodes = {
        'i': 0x7f, // i32
        'p': 0x7f, // i32
        'j': 0x7e, // i64
        'f': 0x7d, // f32
        'd': 0x7c, // f64
      };
    
      // Parameters, length + signatures
      target.push(0x60 /* form: func */);
      uleb128Encode(sigParam.length, target);
      for (var i = 0; i < sigParam.length; ++i) {
        assert(sigParam[i] in typeCodes, 'invalid signature char: ' + sigParam[i]);
    target.push(typeCodes[sigParam[i]]);
      }
    
      // Return values, length + signatures
      // With no multi-return in MVP, either 0 (void) or 1 (anything else)
      if (sigRet == 'v') {
        target.push(0x00);
      } else {
        target.push(0x01, typeCodes[sigRet]);
      }
    }
  function convertJsFunctionToWasm(func, sig) {
  
      // If the type reflection proposal is available, use the new
      // "WebAssembly.Function" constructor.
      // Otherwise, construct a minimal wasm module importing the JS function and
      // re-exporting it.
      if (typeof WebAssembly.Function == "function") {
        return new WebAssembly.Function(sigToWasmTypes(sig), func);
      }
  
      // The module is static, with the exception of the type section, which is
      // generated based on the signature passed in.
      var typeSectionBody = [
        0x01, // count: 1
      ];
      generateFuncType(sig, typeSectionBody);
  
      // Rest of the module is static
      var bytes = [
        0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
        0x01, 0x00, 0x00, 0x00, // version: 1
        0x01, // Type section code
      ];
      // Write the overall length of the type section followed by the body
      uleb128Encode(typeSectionBody.length, bytes);
      bytes.push.apply(bytes, typeSectionBody);
  
      // The rest of the module is static
      bytes.push(
        0x02, 0x07, // import section
          // (import "e" "f" (func 0 (type 0)))
          0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
        0x07, 0x05, // export section
          // (export "f" (func 0 (type 0)))
          0x01, 0x01, 0x66, 0x00, 0x00,
      );
  
      // We can compile this wasm module synchronously because it is very small.
      // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
      var module = new WebAssembly.Module(new Uint8Array(bytes));
      var instance = new WebAssembly.Instance(module, { 'e': { 'f': func } });
      var wrappedFunc = instance.exports['f'];
      return wrappedFunc;
    }
  
  var wasmTableMirror = [];
  
  function getWasmTableEntry(funcPtr) {
      var func = wasmTableMirror[funcPtr];
      if (!func) {
        if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
      }
      assert(wasmTable.get(funcPtr) == func, "JavaScript-side Wasm function table mirror is out of date!");
      return func;
    }
  
  function updateTableMap(offset, count) {
      if (functionsInTableMap) {
        for (var i = offset; i < offset + count; i++) {
          var item = getWasmTableEntry(i);
          // Ignore null values.
          if (item) {
            functionsInTableMap.set(item, i);
          }
        }
      }
    }
  
  var functionsInTableMap = undefined;
  function getFunctionAddress(func) {
      // First, create the map if this is the first use.
      if (!functionsInTableMap) {
        functionsInTableMap = new WeakMap();
        updateTableMap(0, wasmTable.length);
      }
      return functionsInTableMap.get(func) || 0;
    }
  
  
  var freeTableIndexes = [];
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
  
  
  function setWasmTableEntry(idx, func) {
      wasmTable.set(idx, func);
      // With ABORT_ON_WASM_EXCEPTIONS wasmTable.get is overriden to return wrapped
      // functions so we need to call it here to retrieve the potential wrapper correctly
      // instead of just storing 'func' directly into wasmTableMirror
      wasmTableMirror[idx] = wasmTable.get(idx);
    }
  /** @param {string=} sig */
  function addFunction(func, sig) {
      assert(typeof func != 'undefined');
      // Check if the function is already in the table, to ensure each function
      // gets a unique index.
      var rtn = getFunctionAddress(func);
      if (rtn) {
        return rtn;
      }
  
      // It's not in the table, add it now.
  
      var ret = getEmptyTableSlot();
  
      // Set the new value.
      try {
        // Attempting to call this with JS function will cause of table.set() to fail
        setWasmTableEntry(ret, func);
      } catch (err) {
        if (!(err instanceof TypeError)) {
          throw err;
        }
        assert(typeof sig != 'undefined', 'Missing signature argument to addFunction: ' + func);
        var wrapped = convertJsFunctionToWasm(func, sig);
        setWasmTableEntry(ret, wrapped);
      }
  
      functionsInTableMap.set(func, ret);
  
      return ret;
    }

  function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        // Pass the module as the first argument.
        callbacks.shift()(Module);
      }
    }

  function decrementExceptionRefcount(ptr) {
      ___cxa_decrement_exception_refcount(ptr);
    }

  
  
  function withStackSave(f) {
      var stack = stackSave();
      var ret = f();
      stackRestore(stack);
      return ret;
    }
  
  var UTF8Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder('utf8') : undefined;
  
    /**
     * Given a pointer 'idx' to a null-terminated UTF8-encoded string in the given
     * array that contains uint8 values, returns a copy of that string as a
     * Javascript String object.
     * heapOrArray is either a regular array, or a JavaScript typed array view.
     * @param {number} idx
     * @param {number=} maxBytesToRead
     * @return {string}
     */
  function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      // TextDecoder needs to know the byte length in advance, it doesn't stop on
      // null terminator by itself.  Also, use the length info to avoid running tiny
      // strings through TextDecoder, since .subarray() allocates garbage.
      // (As a tiny code save trick, compare endPtr against endIdx using a negation,
      // so that undefined means Infinity)
      while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
  
      if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
      }
      var str = '';
      // If building with TextDecoder, we have already computed the string length
      // above, so test loop end condition against that
      while (idx < endPtr) {
        // For UTF8 byte structure, see:
        // http://en.wikipedia.org/wiki/UTF-8#Description
        // https://www.ietf.org/rfc/rfc2279.txt
        // https://tools.ietf.org/html/rfc3629
        var u0 = heapOrArray[idx++];
        if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 0xF0) == 0xE0) {
          u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
        } else {
          if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte ' + ptrToString(u0) + ' encountered when deserializing a UTF-8 string in wasm memory to a JS string!');
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
        }
  
        if (u0 < 0x10000) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 0x10000;
          str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
        }
      }
      return str;
    }
  
  
    /**
     * Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the
     * emscripten HEAP, returns a copy of that string as a Javascript String object.
     *
     * @param {number} ptr
     * @param {number=} maxBytesToRead - An optional length that specifies the
     *   maximum number of bytes to read. You can omit this parameter to scan the
     *   string until the first   byte. If maxBytesToRead is passed, and the string
     *   at [ptr, ptr+maxBytesToReadr[ contains a null byte in the middle, then the
     *   string will cut short at that byte index (i.e. maxBytesToRead will not
     *   produce a string of exact length [ptr, ptr+maxBytesToRead[) N.B. mixing
     *   frequent uses of UTF8ToString() with and without maxBytesToRead may throw
     *   JS JIT optimizations off, so it is worth to consider consistently using one
     * @return {string}
     */
  function UTF8ToString(ptr, maxBytesToRead) {
      assert(typeof ptr == 'number');
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
    }
  function getExceptionMessageCommon(ptr) {
      return withStackSave(function() {
        var type_addr_addr = stackAlloc(4);
        var message_addr_addr = stackAlloc(4);
        ___get_exception_message(ptr, type_addr_addr, message_addr_addr);
        var type_addr = HEAPU32[((type_addr_addr)>>2)];
        var message_addr = HEAPU32[((message_addr_addr)>>2)];
        var type = UTF8ToString(type_addr);
        _free(type_addr);
        var message;
        if (message_addr) {
          message = UTF8ToString(message_addr);
          _free(message_addr);
        }
        return [type, message];
      });
    }
  function getExceptionMessage(ptr) {
      return getExceptionMessageCommon(ptr);
    }
  Module["getExceptionMessage"] = getExceptionMessage;

  
    /**
     * @param {number} ptr
     * @param {string} type
     */
  function getValue(ptr, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      case '*': return HEAPU32[((ptr)>>2)];
      default: abort('invalid type for getValue: ' + type);
    }
  }

  function incrementExceptionRefcount(ptr) {
      ___cxa_increment_exception_refcount(ptr);
    }

  function ptrToString(ptr) {
      assert(typeof ptr === 'number');
      return '0x' + ptr.toString(16).padStart(8, '0');
    }

  
    /**
     * @param {number} ptr
     * @param {number} value
     * @param {string} type
     */
  function setValue(ptr, value, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': HEAP8[((ptr)>>0)] = value; break;
      case 'i8': HEAP8[((ptr)>>0)] = value; break;
      case 'i16': HEAP16[((ptr)>>1)] = value; break;
      case 'i32': HEAP32[((ptr)>>2)] = value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)] = tempI64[0],HEAP32[(((ptr)+(4))>>2)] = tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)] = value; break;
      case 'double': HEAPF64[((ptr)>>3)] = value; break;
      case '*': HEAPU32[((ptr)>>2)] = value; break;
      default: abort('invalid type for setValue: ' + type);
    }
  }

  function warnOnce(text) {
      if (!warnOnce.shown) warnOnce.shown = {};
      if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        err(text);
      }
    }

  function ___assert_fail(condition, filename, line, func) {
      abort('Assertion failed: ' + UTF8ToString(condition) + ', at: ' + [filename ? UTF8ToString(filename) : 'unknown filename', line, func ? UTF8ToString(func) : 'unknown function']);
    }

  var exceptionCaught =  [];
  
  
  var uncaughtExceptionCount = 0;
  function ___cxa_begin_catch(ptr) {
      var info = new ExceptionInfo(ptr);
      if (!info.get_caught()) {
        info.set_caught(true);
        uncaughtExceptionCount--;
      }
      info.set_rethrown(false);
      exceptionCaught.push(info);
      ___cxa_increment_exception_refcount(info.excPtr);
      return info.get_exception_ptr();
    }

  
  var exceptionLast = 0;
  
  
  function ___cxa_end_catch() {
      // Clear state flag.
      _setThrew(0);
      assert(exceptionCaught.length > 0);
      // Call destructor if one is registered then clear it.
      var info = exceptionCaught.pop();
  
      ___cxa_decrement_exception_refcount(info.excPtr);
      exceptionLast = 0; // XXX in decRef?
    }

  
  /** @constructor */
  function ExceptionInfo(excPtr) {
      this.excPtr = excPtr;
      this.ptr = excPtr - 24;
  
      this.set_type = function(type) {
        HEAPU32[(((this.ptr)+(4))>>2)] = type;
      };
  
      this.get_type = function() {
        return HEAPU32[(((this.ptr)+(4))>>2)];
      };
  
      this.set_destructor = function(destructor) {
        HEAPU32[(((this.ptr)+(8))>>2)] = destructor;
      };
  
      this.get_destructor = function() {
        return HEAPU32[(((this.ptr)+(8))>>2)];
      };
  
      this.set_caught = function (caught) {
        caught = caught ? 1 : 0;
        HEAP8[(((this.ptr)+(12))>>0)] = caught;
      };
  
      this.get_caught = function () {
        return HEAP8[(((this.ptr)+(12))>>0)] != 0;
      };
  
      this.set_rethrown = function (rethrown) {
        rethrown = rethrown ? 1 : 0;
        HEAP8[(((this.ptr)+(13))>>0)] = rethrown;
      };
  
      this.get_rethrown = function () {
        return HEAP8[(((this.ptr)+(13))>>0)] != 0;
      };
  
      // Initialize native structure fields. Should be called once after allocated.
      this.init = function(type, destructor) {
        this.set_adjusted_ptr(0);
        this.set_type(type);
        this.set_destructor(destructor);
      }
  
      this.set_adjusted_ptr = function(adjustedPtr) {
        HEAPU32[(((this.ptr)+(16))>>2)] = adjustedPtr;
      };
  
      this.get_adjusted_ptr = function() {
        return HEAPU32[(((this.ptr)+(16))>>2)];
      };
  
      // Get pointer which is expected to be received by catch clause in C++ code. It may be adjusted
      // when the pointer is casted to some of the exception object base classes (e.g. when virtual
      // inheritance is used). When a pointer is thrown this method should return the thrown pointer
      // itself.
      this.get_exception_ptr = function() {
        // Work around a fastcomp bug, this code is still included for some reason in a build without
        // exceptions support.
        var isPointer = ___cxa_is_pointer_type(this.get_type());
        if (isPointer) {
          return HEAPU32[((this.excPtr)>>2)];
        }
        var adjusted = this.get_adjusted_ptr();
        if (adjusted !== 0) return adjusted;
        return this.excPtr;
      };
    }
  
  function ___resumeException(ptr) {
      if (!exceptionLast) { 
        exceptionLast = new CppException(ptr);
      }
      throw exceptionLast;
    }
  
  
  /** @suppress {duplicate } */
  function ___cxa_find_matching_catch() {
      var thrown = 
        exceptionLast && exceptionLast.excPtr;
      if (!thrown) {
        // just pass through the null ptr
        setTempRet0(0);
        return 0;
      }
      var info = new ExceptionInfo(thrown);
      info.set_adjusted_ptr(thrown);
      var thrownType = info.get_type();
      if (!thrownType) {
        // just pass through the thrown ptr
        setTempRet0(0);
        return thrown;
      }
  
      // can_catch receives a **, add indirection
      // The different catch blocks are denoted by different types.
      // Due to inheritance, those types may not precisely match the
      // type of the thrown object. Find one which matches, and
      // return the type of the catch block which should be called.
      for (var i = 0; i < arguments.length; i++) {
        var caughtType = arguments[i];
        if (caughtType === 0 || caughtType === thrownType) {
          // Catch all clause matched or exactly the same type is caught
          break;
        }
        var adjusted_ptr_addr = info.ptr + 16;
        if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
          setTempRet0(caughtType);
          return thrown;
        }
      }
      setTempRet0(thrownType);
      return thrown;
    }
  var ___cxa_find_matching_catch_2 = ___cxa_find_matching_catch;

  var ___cxa_find_matching_catch_3 = ___cxa_find_matching_catch;

  function ___cxa_get_exception_ptr(ptr) {
      var rtn = new ExceptionInfo(ptr).get_exception_ptr();
      return rtn;
    }

  
  
  function ___cxa_rethrow() {
      var info = exceptionCaught.pop();
      if (!info) {
        abort('no exception to throw');
      }
      var ptr = info.excPtr;
      if (!info.get_rethrown()) {
        // Only pop if the corresponding push was through rethrow_primary_exception
        exceptionCaught.push(info);
        info.set_rethrown(true);
        info.set_caught(false);
        uncaughtExceptionCount++;
      }
      exceptionLast = new CppException(ptr);
      throw exceptionLast;
    }

  
  
  function ___cxa_throw(ptr, type, destructor) {
      var info = new ExceptionInfo(ptr);
      // Initialize ExceptionInfo content after it was allocated in __cxa_allocate_exception.
      info.init(type, destructor);
      exceptionLast = new CppException(ptr);
      uncaughtExceptionCount++;
      throw exceptionLast;
    }

  function ___cxa_uncaught_exceptions() {
      return uncaughtExceptionCount;
    }


  function _abort() {
      abort('native code called abort()');
    }

  function _emscripten_date_now() {
      return Date.now();
    }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  function getHeapMax() {
      // Stay one Wasm page short of 4GB: while e.g. Chrome is able to allocate
      // full 4GB Wasm memories, the size will wrap back to 0 bytes in Wasm side
      // for any code that deals with heap sizes, which would require special
      // casing all heap size related code to treat 0 specially.
      return 2147483648;
    }
  
  function emscripten_realloc_buffer(size) {
      var b = wasmMemory.buffer;
      try {
        // round size grow request up to wasm page size (fixed 64KB per spec)
        wasmMemory.grow((size - b.byteLength + 65535) >>> 16); // .grow() takes a delta compared to the previous size
        updateMemoryViews();
        return 1 /*success*/;
      } catch(e) {
        err('emscripten_realloc_buffer: Attempted to grow heap from ' + b.byteLength  + ' bytes to ' + size + ' bytes, but got error: ' + e);
      }
      // implicit 0 return to save code size (caller will cast "undefined" into 0
      // anyhow)
    }
  function _emscripten_resize_heap(requestedSize) {
      var oldSize = HEAPU8.length;
      requestedSize = requestedSize >>> 0;
      // With multithreaded builds, races can happen (another thread might increase the size
      // in between), so return a failure, and let the caller retry.
      assert(requestedSize > oldSize);
  
      // Memory resize rules:
      // 1.  Always increase heap size to at least the requested size, rounded up
      //     to next page multiple.
      // 2a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap
      //     geometrically: increase the heap size according to
      //     MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%), At most
      //     overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
      // 2b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap
      //     linearly: increase the heap size by at least
      //     MEMORY_GROWTH_LINEAR_STEP bytes.
      // 3.  Max size for the heap is capped at 2048MB-WASM_PAGE_SIZE, or by
      //     MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
      // 4.  If we were unable to allocate as much memory, it may be due to
      //     over-eager decision to excessively reserve due to (3) above.
      //     Hence if an allocation fails, cut down on the amount of excess
      //     growth, in an attempt to succeed to perform a smaller allocation.
  
      // A limit is set for how much we can grow. We should not exceed that
      // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
      var maxHeapSize = getHeapMax();
      if (requestedSize > maxHeapSize) {
        err('Cannot enlarge memory, asked to go up to ' + requestedSize + ' bytes, but the limit is ' + maxHeapSize + ' bytes!');
        return false;
      }
  
      let alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
  
      // Loop through potential heap size increases. If we attempt a too eager
      // reservation that fails, cut down on the attempted size and reserve a
      // smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown); // ensure geometric growth
        // but limit overreserving (default to capping at +96MB overgrowth at most)
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296 );
  
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
  
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
  
          return true;
        }
      }
      err('Failed to grow the heap from ' + oldSize + ' bytes to ' + newSize + ' bytes, not enough memory!');
      return false;
    }

  var ENV = {};
  
  function getExecutableName() {
      return thisProgram || './this.program';
    }
  function getEnvStrings() {
      if (!getEnvStrings.strings) {
        // Default values.
        // Browser language detection #8751
        var lang = ((typeof navigator == 'object' && navigator.languages && navigator.languages[0]) || 'C').replace('-', '_') + '.UTF-8';
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
          // x is a key in ENV; if ENV[x] is undefined, that means it was
          // explicitly set to be so. We allow user code to do that to
          // force variables with default values to remain unset.
          if (ENV[x] === undefined) delete env[x];
          else env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(x + '=' + env[x]);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    }
  
  function stringToAscii(str, buffer) {
      for (var i = 0; i < str.length; ++i) {
        assert(str.charCodeAt(i) === (str.charCodeAt(i) & 0xff));
        HEAP8[((buffer++)>>0)] = str.charCodeAt(i);
      }
      // Null-terminate the string
      HEAP8[((buffer)>>0)] = 0;
    }
  
  var SYSCALLS = {varargs:undefined,get:function() {
        assert(SYSCALLS.varargs != undefined);
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      }};
  function _environ_get(__environ, environ_buf) {
      var bufSize = 0;
      getEnvStrings().forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        HEAPU32[(((__environ)+(i*4))>>2)] = ptr;
        stringToAscii(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    }

  
  function _environ_sizes_get(penviron_count, penviron_buf_size) {
      var strings = getEnvStrings();
      HEAPU32[((penviron_count)>>2)] = strings.length;
      var bufSize = 0;
      strings.forEach(function(string) {
        bufSize += string.length + 1;
      });
      HEAPU32[((penviron_buf_size)>>2)] = bufSize;
      return 0;
    }

  function _fd_close(fd) {
      abort('fd_close called without SYSCALLS_REQUIRE_FILESYSTEM');
    }

  function convertI32PairToI53Checked(lo, hi) {
      assert(lo == (lo >>> 0) || lo == (lo|0)); // lo should either be a i32 or a u32
      assert(hi === (hi|0));                    // hi should be a i32
      return ((hi + 0x200000) >>> 0 < 0x400001 - !!lo) ? (lo >>> 0) + hi * 4294967296 : NaN;
    }
  
  
  
  
  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
      return 70;
    }

  var printCharBuffers = [null,[],[]];
  
  function printChar(stream, curr) {
      var buffer = printCharBuffers[stream];
      assert(buffer);
      if (curr === 0 || curr === 10) {
        (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
        buffer.length = 0;
      } else {
        buffer.push(curr);
      }
    }
  
  function flush_NO_FILESYSTEM() {
      // flush anything remaining in the buffers during shutdown
      _fflush(0);
      if (printCharBuffers[1].length) printChar(1, 10);
      if (printCharBuffers[2].length) printChar(2, 10);
    }
  
  
  function _fd_write(fd, iov, iovcnt, pnum) {
      // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        for (var j = 0; j < len; j++) {
          printChar(fd, HEAPU8[ptr+j]);
        }
        num += len;
      }
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    }

  function _llvm_eh_typeid_for(type) {
      return type;
    }

  function isLeapYear(year) {
        return year%4 === 0 && (year%100 !== 0 || year%400 === 0);
    }
  
  function arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {
        // no-op
      }
      return sum;
    }
  
  
  var MONTH_DAYS_LEAP = [31,29,31,30,31,30,31,31,30,31,30,31];
  
  var MONTH_DAYS_REGULAR = [31,28,31,30,31,30,31,31,30,31,30,31];
  function addDays(date, days) {
      var newDate = new Date(date.getTime());
      while (days > 0) {
        var leap = isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR)[currentMonth];
  
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
  
  
  
  function lengthBytesUTF8(str) {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
        // unit, not a Unicode code point of the character! So decode
        // UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        var c = str.charCodeAt(i); // possibly a lead surrogate
        if (c <= 0x7F) {
          len++;
        } else if (c <= 0x7FF) {
          len += 2;
        } else if (c >= 0xD800 && c <= 0xDFFF) {
          len += 4; ++i;
        } else {
          len += 3;
        }
      }
      return len;
    }
  
  function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
      assert(typeof str === 'string');
      // Parameter maxBytesToWrite is not optional. Negative values, 0, null,
      // undefined and false each don't write out any bytes.
      if (!(maxBytesToWrite > 0))
        return 0;
  
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
        // unit, not a Unicode code point of the character! So decode
        // UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description
        // and https://www.ietf.org/rfc/rfc2279.txt
        // and https://tools.ietf.org/html/rfc3629
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
          if (u > 0x10FFFF) warnOnce('Invalid Unicode code point ' + ptrToString(u) + ' encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).');
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
  /** @type {function(string, boolean=, number=)} */
  function intArrayFromString(stringy, dontAddNull, length) {
    var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
    var u8array = new Array(len);
    var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
    if (dontAddNull) u8array.length = numBytesWritten;
    return u8array;
  }
  
  function writeArrayToMemory(array, buffer) {
      assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
      HEAP8.set(array, buffer);
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
        var str = typeof value == 'number' ? value.toString() : (value || '');
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
          var thisDate = addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
          var janFourthNextYear = new Date(thisDate.getFullYear()+1, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
            // this date is after the start of the first week of this year
            if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
              return thisDate.getFullYear()+1;
            }
            return thisDate.getFullYear();
          }
          return thisDate.getFullYear()-1;
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
          return leadingNulls(date.tm_mday + arraySum(isLeapYear(date.tm_year+1900) ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR, date.tm_mon-1), 3);
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
          }
          return 'PM';
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
          var days = date.tm_yday + 7 - date.tm_wday;
          return leadingNulls(Math.floor(days / 7), 2);
        },
        '%V': function(date) {
          // Replaced by the week number of the year (Monday as the first day of the week)
          // as a decimal number [01,53]. If the week containing 1 January has four
          // or more days in the new year, then it is considered week 1.
          // Otherwise, it is the last week of the previous year, and the next week is week 1.
          // Both January 4th and the first Thursday of January are always in week 1. [ tm_year, tm_wday, tm_yday]
          var val = Math.floor((date.tm_yday + 7 - (date.tm_wday + 6) % 7 ) / 7);
          // If 1 Jan is just 1-3 days past Monday, the previous week
          // is also in this year.
          if ((date.tm_wday + 371 - date.tm_yday - 2) % 7 <= 2) {
            val++;
          }
          if (!val) {
            val = 52;
            // If 31 December of prev year a Thursday, or Friday of a
            // leap year, then the prev year has 53 weeks.
            var dec31 = (date.tm_wday + 7 - date.tm_yday - 1) % 7;
            if (dec31 == 4 || (dec31 == 5 && isLeapYear(date.tm_year%400-1))) {
              val++;
            }
          } else if (val == 53) {
            // If 1 January is not a Thursday, and not a Wednesday of a
            // leap year, then this year has only 52 weeks.
            var jan1 = (date.tm_wday + 371 - date.tm_yday) % 7;
            if (jan1 != 4 && (jan1 != 3 || !isLeapYear(date.tm_year)))
              val = 1;
          }
          return leadingNulls(val, 2);
        },
        '%w': function(date) {
          return date.tm_wday;
        },
        '%W': function(date) {
          var days = date.tm_yday + 7 - ((date.tm_wday + 6) % 7);
          return leadingNulls(Math.floor(days / 7), 2);
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
  
      // Replace %% with a pair of NULLs (which cannot occur in a C string), then
      // re-inject them after processing.
      pattern = pattern.replace(/%%/g, '\0\0')
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.includes(rule)) {
          pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_2[rule](date));
        }
      }
      pattern = pattern.replace(/\0\0/g, '%')
  
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
  
      writeArrayToMemory(bytes, s);
      return bytes.length-1;
    }
  function _strftime_l(s, maxsize, format, tm, loc) {
      return _strftime(s, maxsize, format, tm); // no locale support yet
    }

function checkIncomingModuleAPI() {
  ignoredModuleProp('fetchSettings');
}
var wasmImports = {
  "__assert_fail": ___assert_fail,
  "__cxa_begin_catch": ___cxa_begin_catch,
  "__cxa_end_catch": ___cxa_end_catch,
  "__cxa_find_matching_catch_2": ___cxa_find_matching_catch_2,
  "__cxa_find_matching_catch_3": ___cxa_find_matching_catch_3,
  "__cxa_get_exception_ptr": ___cxa_get_exception_ptr,
  "__cxa_rethrow": ___cxa_rethrow,
  "__cxa_throw": ___cxa_throw,
  "__cxa_uncaught_exceptions": ___cxa_uncaught_exceptions,
  "__resumeException": ___resumeException,
  "abort": _abort,
  "emscripten_date_now": _emscripten_date_now,
  "emscripten_memcpy_big": _emscripten_memcpy_big,
  "emscripten_resize_heap": _emscripten_resize_heap,
  "environ_get": _environ_get,
  "environ_sizes_get": _environ_sizes_get,
  "fd_close": _fd_close,
  "fd_seek": _fd_seek,
  "fd_write": _fd_write,
  "invoke_di": invoke_di,
  "invoke_didiii": invoke_didiii,
  "invoke_dii": invoke_dii,
  "invoke_diii": invoke_diii,
  "invoke_diiii": invoke_diiii,
  "invoke_fiii": invoke_fiii,
  "invoke_i": invoke_i,
  "invoke_ii": invoke_ii,
  "invoke_iid": invoke_iid,
  "invoke_iidd": invoke_iidd,
  "invoke_iii": invoke_iii,
  "invoke_iiid": invoke_iiid,
  "invoke_iiidd": invoke_iiidd,
  "invoke_iiii": invoke_iiii,
  "invoke_iiiid": invoke_iiiid,
  "invoke_iiiidddi": invoke_iiiidddi,
  "invoke_iiiiddidi": invoke_iiiiddidi,
  "invoke_iiiidi": invoke_iiiidi,
  "invoke_iiiii": invoke_iiiii,
  "invoke_iiiiid": invoke_iiiiid,
  "invoke_iiiiii": invoke_iiiiii,
  "invoke_iiiiiii": invoke_iiiiiii,
  "invoke_iiiiiiii": invoke_iiiiiiii,
  "invoke_iiiiiiiidd": invoke_iiiiiiiidd,
  "invoke_iiiiiiiiiii": invoke_iiiiiiiiiii,
  "invoke_iiiiiiiiiiii": invoke_iiiiiiiiiiii,
  "invoke_iiiiiiiiiiiii": invoke_iiiiiiiiiiiii,
  "invoke_jiiii": invoke_jiiii,
  "invoke_v": invoke_v,
  "invoke_vi": invoke_vi,
  "invoke_vid": invoke_vid,
  "invoke_vidd": invoke_vidd,
  "invoke_vii": invoke_vii,
  "invoke_viid": invoke_viid,
  "invoke_viii": invoke_viii,
  "invoke_viiid": invoke_viiid,
  "invoke_viiii": invoke_viiii,
  "invoke_viiiii": invoke_viiiii,
  "invoke_viiiiiii": invoke_viiiiiii,
  "invoke_viiiiiiiiii": invoke_viiiiiiiiii,
  "invoke_viiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiii,
  "llvm_eh_typeid_for": _llvm_eh_typeid_for,
  "strftime_l": _strftime_l
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = createExportWrapper("__wasm_call_ctors");
/** @type {function(...*):?} */
var getTempRet0 = createExportWrapper("getTempRet0");
/** @type {function(...*):?} */
var ___cxa_free_exception = createExportWrapper("__cxa_free_exception");
/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = createExportWrapper("malloc");
/** @type {function(...*):?} */
var _free = Module["_free"] = createExportWrapper("free");
/** @type {function(...*):?} */
var _fflush = Module["_fflush"] = createExportWrapper("fflush");
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
var _emscripten_bind_Rectangle_Rectangle_2 = Module["_emscripten_bind_Rectangle_Rectangle_2"] = createExportWrapper("emscripten_bind_Rectangle_Rectangle_2");
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
var _emscripten_bind_ConnEnd_createConnEndFromJunctionRef_1 = Module["_emscripten_bind_ConnEnd_createConnEndFromJunctionRef_1"] = createExportWrapper("emscripten_bind_ConnEnd_createConnEndFromJunctionRef_1");
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
var _emscripten_bind_ShapeConnectionPin_updatePosition_1 = Module["_emscripten_bind_ShapeConnectionPin_updatePosition_1"] = createExportWrapper("emscripten_bind_ShapeConnectionPin_updatePosition_1");
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
var _emscripten_bind_Obstacle_setNewPoly_1 = Module["_emscripten_bind_Obstacle_setNewPoly_1"] = createExportWrapper("emscripten_bind_Obstacle_setNewPoly_1");
/** @type {function(...*):?} */
var _emscripten_bind_Obstacle___destroy___0 = Module["_emscripten_bind_Obstacle___destroy___0"] = createExportWrapper("emscripten_bind_Obstacle___destroy___0");
/** @type {function(...*):?} */
var _emscripten_bind_JunctionRef_JunctionRef_2 = Module["_emscripten_bind_JunctionRef_JunctionRef_2"] = createExportWrapper("emscripten_bind_JunctionRef_JunctionRef_2");
/** @type {function(...*):?} */
var _emscripten_bind_JunctionRef_JunctionRef_3 = Module["_emscripten_bind_JunctionRef_JunctionRef_3"] = createExportWrapper("emscripten_bind_JunctionRef_JunctionRef_3");
/** @type {function(...*):?} */
var _emscripten_bind_JunctionRef_position_0 = Module["_emscripten_bind_JunctionRef_position_0"] = createExportWrapper("emscripten_bind_JunctionRef_position_0");
/** @type {function(...*):?} */
var _emscripten_bind_JunctionRef_setPositionFixed_1 = Module["_emscripten_bind_JunctionRef_setPositionFixed_1"] = createExportWrapper("emscripten_bind_JunctionRef_setPositionFixed_1");
/** @type {function(...*):?} */
var _emscripten_bind_JunctionRef_positionFixed_0 = Module["_emscripten_bind_JunctionRef_positionFixed_0"] = createExportWrapper("emscripten_bind_JunctionRef_positionFixed_0");
/** @type {function(...*):?} */
var _emscripten_bind_JunctionRef_recommendedPosition_0 = Module["_emscripten_bind_JunctionRef_recommendedPosition_0"] = createExportWrapper("emscripten_bind_JunctionRef_recommendedPosition_0");
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
var _emscripten_bind_ShapeRef_setNewPoly_1 = Module["_emscripten_bind_ShapeRef_setNewPoly_1"] = createExportWrapper("emscripten_bind_ShapeRef_setNewPoly_1");
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
var _emscripten_bind_ConnRef_setHateCrossings_1 = Module["_emscripten_bind_ConnRef_setHateCrossings_1"] = createExportWrapper("emscripten_bind_ConnRef_setHateCrossings_1");
/** @type {function(...*):?} */
var _emscripten_bind_ConnRef_doesHateCrossings_0 = Module["_emscripten_bind_ConnRef_doesHateCrossings_0"] = createExportWrapper("emscripten_bind_ConnRef_doesHateCrossings_0");
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
var _emscripten_bind_Router_moveShape_2 = Module["_emscripten_bind_Router_moveShape_2"] = createExportWrapper("emscripten_bind_Router_moveShape_2");
/** @type {function(...*):?} */
var _emscripten_bind_Router_moveShape_3 = Module["_emscripten_bind_Router_moveShape_3"] = createExportWrapper("emscripten_bind_Router_moveShape_3");
/** @type {function(...*):?} */
var _emscripten_bind_Router_deleteShape_1 = Module["_emscripten_bind_Router_deleteShape_1"] = createExportWrapper("emscripten_bind_Router_deleteShape_1");
/** @type {function(...*):?} */
var _emscripten_bind_Router_moveJunction_2 = Module["_emscripten_bind_Router_moveJunction_2"] = createExportWrapper("emscripten_bind_Router_moveJunction_2");
/** @type {function(...*):?} */
var _emscripten_bind_Router_moveJunction_3 = Module["_emscripten_bind_Router_moveJunction_3"] = createExportWrapper("emscripten_bind_Router_moveJunction_3");
/** @type {function(...*):?} */
var _emscripten_bind_Router_setRoutingParameter_2 = Module["_emscripten_bind_Router_setRoutingParameter_2"] = createExportWrapper("emscripten_bind_Router_setRoutingParameter_2");
/** @type {function(...*):?} */
var _emscripten_bind_Router_setRoutingOption_2 = Module["_emscripten_bind_Router_setRoutingOption_2"] = createExportWrapper("emscripten_bind_Router_setRoutingOption_2");
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
var _emscripten_enum_Avoid_RoutingParameter_segmentPenalty = Module["_emscripten_enum_Avoid_RoutingParameter_segmentPenalty"] = createExportWrapper("emscripten_enum_Avoid_RoutingParameter_segmentPenalty");
/** @type {function(...*):?} */
var _emscripten_enum_Avoid_RoutingParameter_anglePenalty = Module["_emscripten_enum_Avoid_RoutingParameter_anglePenalty"] = createExportWrapper("emscripten_enum_Avoid_RoutingParameter_anglePenalty");
/** @type {function(...*):?} */
var _emscripten_enum_Avoid_RoutingParameter_crossingPenalty = Module["_emscripten_enum_Avoid_RoutingParameter_crossingPenalty"] = createExportWrapper("emscripten_enum_Avoid_RoutingParameter_crossingPenalty");
/** @type {function(...*):?} */
var _emscripten_enum_Avoid_RoutingParameter_clusterCrossingPenalty = Module["_emscripten_enum_Avoid_RoutingParameter_clusterCrossingPenalty"] = createExportWrapper("emscripten_enum_Avoid_RoutingParameter_clusterCrossingPenalty");
/** @type {function(...*):?} */
var _emscripten_enum_Avoid_RoutingParameter_fixedSharedPathPenalty = Module["_emscripten_enum_Avoid_RoutingParameter_fixedSharedPathPenalty"] = createExportWrapper("emscripten_enum_Avoid_RoutingParameter_fixedSharedPathPenalty");
/** @type {function(...*):?} */
var _emscripten_enum_Avoid_RoutingParameter_portDirectionPenalty = Module["_emscripten_enum_Avoid_RoutingParameter_portDirectionPenalty"] = createExportWrapper("emscripten_enum_Avoid_RoutingParameter_portDirectionPenalty");
/** @type {function(...*):?} */
var _emscripten_enum_Avoid_RoutingParameter_shapeBufferDistance = Module["_emscripten_enum_Avoid_RoutingParameter_shapeBufferDistance"] = createExportWrapper("emscripten_enum_Avoid_RoutingParameter_shapeBufferDistance");
/** @type {function(...*):?} */
var _emscripten_enum_Avoid_RoutingParameter_idealNudgingDistance = Module["_emscripten_enum_Avoid_RoutingParameter_idealNudgingDistance"] = createExportWrapper("emscripten_enum_Avoid_RoutingParameter_idealNudgingDistance");
/** @type {function(...*):?} */
var _emscripten_enum_Avoid_RoutingParameter_reverseDirectionPenalty = Module["_emscripten_enum_Avoid_RoutingParameter_reverseDirectionPenalty"] = createExportWrapper("emscripten_enum_Avoid_RoutingParameter_reverseDirectionPenalty");
/** @type {function(...*):?} */
var _emscripten_enum_Avoid_RoutingOption_nudgeOrthogonalSegmentsConnectedToShapes = Module["_emscripten_enum_Avoid_RoutingOption_nudgeOrthogonalSegmentsConnectedToShapes"] = createExportWrapper("emscripten_enum_Avoid_RoutingOption_nudgeOrthogonalSegmentsConnectedToShapes");
/** @type {function(...*):?} */
var _emscripten_enum_Avoid_RoutingOption_improveHyperedgeRoutesMovingJunctions = Module["_emscripten_enum_Avoid_RoutingOption_improveHyperedgeRoutesMovingJunctions"] = createExportWrapper("emscripten_enum_Avoid_RoutingOption_improveHyperedgeRoutesMovingJunctions");
/** @type {function(...*):?} */
var _emscripten_enum_Avoid_RoutingOption_penaliseOrthogonalSharedPathsAtConnEnds = Module["_emscripten_enum_Avoid_RoutingOption_penaliseOrthogonalSharedPathsAtConnEnds"] = createExportWrapper("emscripten_enum_Avoid_RoutingOption_penaliseOrthogonalSharedPathsAtConnEnds");
/** @type {function(...*):?} */
var _emscripten_enum_Avoid_RoutingOption_nudgeOrthogonalTouchingColinearSegments = Module["_emscripten_enum_Avoid_RoutingOption_nudgeOrthogonalTouchingColinearSegments"] = createExportWrapper("emscripten_enum_Avoid_RoutingOption_nudgeOrthogonalTouchingColinearSegments");
/** @type {function(...*):?} */
var _emscripten_enum_Avoid_RoutingOption_performUnifyingNudgingPreprocessingStep = Module["_emscripten_enum_Avoid_RoutingOption_performUnifyingNudgingPreprocessingStep"] = createExportWrapper("emscripten_enum_Avoid_RoutingOption_performUnifyingNudgingPreprocessingStep");
/** @type {function(...*):?} */
var _emscripten_enum_Avoid_RoutingOption_improveHyperedgeRoutesMovingAddingAndDeletingJunctions = Module["_emscripten_enum_Avoid_RoutingOption_improveHyperedgeRoutesMovingAddingAndDeletingJunctions"] = createExportWrapper("emscripten_enum_Avoid_RoutingOption_improveHyperedgeRoutesMovingAddingAndDeletingJunctions");
/** @type {function(...*):?} */
var _emscripten_enum_Avoid_RoutingOption_nudgeSharedPathsWithCommonEndPoint = Module["_emscripten_enum_Avoid_RoutingOption_nudgeSharedPathsWithCommonEndPoint"] = createExportWrapper("emscripten_enum_Avoid_RoutingOption_nudgeSharedPathsWithCommonEndPoint");
/** @type {function(...*):?} */
var ___errno_location = createExportWrapper("__errno_location");
/** @type {function(...*):?} */
var _setThrew = createExportWrapper("setThrew");
/** @type {function(...*):?} */
var setTempRet0 = createExportWrapper("setTempRet0");
/** @type {function(...*):?} */
var _emscripten_stack_init = function() {
  return (_emscripten_stack_init = Module["asm"]["emscripten_stack_init"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_get_free = function() {
  return (_emscripten_stack_get_free = Module["asm"]["emscripten_stack_get_free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_get_base = function() {
  return (_emscripten_stack_get_base = Module["asm"]["emscripten_stack_get_base"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_get_end = function() {
  return (_emscripten_stack_get_end = Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackSave = createExportWrapper("stackSave");
/** @type {function(...*):?} */
var stackRestore = createExportWrapper("stackRestore");
/** @type {function(...*):?} */
var stackAlloc = createExportWrapper("stackAlloc");
/** @type {function(...*):?} */
var _emscripten_stack_get_current = function() {
  return (_emscripten_stack_get_current = Module["asm"]["emscripten_stack_get_current"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var ___cxa_decrement_exception_refcount = createExportWrapper("__cxa_decrement_exception_refcount");
/** @type {function(...*):?} */
var ___cxa_increment_exception_refcount = createExportWrapper("__cxa_increment_exception_refcount");
/** @type {function(...*):?} */
var ___get_exception_message = Module["___get_exception_message"] = createExportWrapper("__get_exception_message");
/** @type {function(...*):?} */
var ___cxa_can_catch = createExportWrapper("__cxa_can_catch");
/** @type {function(...*):?} */
var ___cxa_is_pointer_type = createExportWrapper("__cxa_is_pointer_type");
/** @type {function(...*):?} */
var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji");
/** @type {function(...*):?} */
var dynCall_viijii = Module["dynCall_viijii"] = createExportWrapper("dynCall_viijii");
/** @type {function(...*):?} */
var dynCall_jiiii = Module["dynCall_jiiii"] = createExportWrapper("dynCall_jiiii");
/** @type {function(...*):?} */
var dynCall_iiiiij = Module["dynCall_iiiiij"] = createExportWrapper("dynCall_iiiiij");
/** @type {function(...*):?} */
var dynCall_iiiiijj = Module["dynCall_iiiiijj"] = createExportWrapper("dynCall_iiiiijj");
/** @type {function(...*):?} */
var dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = createExportWrapper("dynCall_iiiiiijj");
var ___start_em_js = Module['___start_em_js'] = 109896;
var ___stop_em_js = Module['___stop_em_js'] = 109994;
function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iii(index,a1,a2) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_v(index) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)();
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_ii(index,a1) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vii(index,a1,a2) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiid(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vi(index,a1) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iidd(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_diiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_dii(index,a1,a2) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_didiii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_diii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vid(index,a1,a2) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiid(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_di(index,a1) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vidd(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viid(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiidd(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiidddi(index,a1,a2,a3,a4,a5,a6,a7) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiddidi(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiiidd(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiidi(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiid(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iid(index,a1,a2) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiid(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_fiii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_i(index) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)();
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_jiiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return dynCall_jiiii(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}


// include: postamble.js
// === Auto-generated postamble setup entry stuff ===

var missingLibrarySymbols = [
  'zeroMemory',
  'exitJS',
  'ydayFromDate',
  'setErrNo',
  'inetPton4',
  'inetNtop4',
  'inetPton6',
  'inetNtop6',
  'readSockaddr',
  'writeSockaddr',
  'getHostByName',
  'initRandomFill',
  'randomFill',
  'traverseStack',
  'getCallstack',
  'emscriptenLog',
  'convertPCtoSourceLocation',
  'readEmAsmArgs',
  'jstoi_q',
  'jstoi_s',
  'listenOnce',
  'autoResumeAudioContext',
  'dynCallLegacy',
  'getDynCaller',
  'dynCall',
  'handleException',
  'runtimeKeepalivePush',
  'runtimeKeepalivePop',
  'callUserCallback',
  'maybeExit',
  'safeSetTimeout',
  'asmjsMangle',
  'asyncLoad',
  'alignMemory',
  'mmapAlloc',
  'HandleAllocator',
  'getNativeTypeSize',
  'STACK_SIZE',
  'STACK_ALIGN',
  'POINTER_SIZE',
  'ASSERTIONS',
  'writeI53ToI64',
  'writeI53ToI64Clamped',
  'writeI53ToI64Signaling',
  'writeI53ToU64Clamped',
  'writeI53ToU64Signaling',
  'readI53FromI64',
  'readI53FromU64',
  'convertI32PairToI53',
  'convertU32PairToI53',
  'getCFunc',
  'ccall',
  'cwrap',
  'removeFunction',
  'reallyNegative',
  'unSign',
  'strLen',
  'reSign',
  'formatString',
  'stringToUTF8',
  'intArrayToString',
  'AsciiToString',
  'UTF16ToString',
  'stringToUTF16',
  'lengthBytesUTF16',
  'UTF32ToString',
  'stringToUTF32',
  'lengthBytesUTF32',
  'stringToNewUTF8',
  'stringToUTF8OnStack',
  'getSocketFromFD',
  'getSocketAddress',
  'registerKeyEventCallback',
  'maybeCStringToJsString',
  'findEventTarget',
  'findCanvasEventTarget',
  'getBoundingClientRect',
  'fillMouseEventData',
  'registerMouseEventCallback',
  'registerWheelEventCallback',
  'registerUiEventCallback',
  'registerFocusEventCallback',
  'fillDeviceOrientationEventData',
  'registerDeviceOrientationEventCallback',
  'fillDeviceMotionEventData',
  'registerDeviceMotionEventCallback',
  'screenOrientation',
  'fillOrientationChangeEventData',
  'registerOrientationChangeEventCallback',
  'fillFullscreenChangeEventData',
  'registerFullscreenChangeEventCallback',
  'JSEvents_requestFullscreen',
  'JSEvents_resizeCanvasForFullscreen',
  'registerRestoreOldStyle',
  'hideEverythingExceptGivenElement',
  'restoreHiddenElements',
  'setLetterbox',
  'softFullscreenResizeWebGLRenderTarget',
  'doRequestFullscreen',
  'fillPointerlockChangeEventData',
  'registerPointerlockChangeEventCallback',
  'registerPointerlockErrorEventCallback',
  'requestPointerLock',
  'fillVisibilityChangeEventData',
  'registerVisibilityChangeEventCallback',
  'registerTouchEventCallback',
  'fillGamepadEventData',
  'registerGamepadEventCallback',
  'registerBeforeUnloadEventCallback',
  'fillBatteryEventData',
  'battery',
  'registerBatteryEventCallback',
  'setCanvasElementSize',
  'getCanvasElementSize',
  'demangle',
  'demangleAll',
  'jsStackTrace',
  'stackTrace',
  'checkWasiClock',
  'wasiRightsToMuslOFlags',
  'wasiOFlagsToMuslOFlags',
  'createDyncallWrapper',
  'setImmediateWrapped',
  'clearImmediateWrapped',
  'polyfillSetImmediate',
  'getPromise',
  'makePromise',
  'idsToPromises',
  'makePromiseCallback',
  'setMainLoop',
  'heapObjectForWebGLType',
  'heapAccessShiftForWebGLHeap',
  'webgl_enable_ANGLE_instanced_arrays',
  'webgl_enable_OES_vertex_array_object',
  'webgl_enable_WEBGL_draw_buffers',
  'webgl_enable_WEBGL_multi_draw',
  'emscriptenWebGLGet',
  'computeUnpackAlignedImageSize',
  'colorChannelsInGlTextureFormat',
  'emscriptenWebGLGetTexPixelData',
  '__glGenObject',
  'emscriptenWebGLGetUniform',
  'webglGetUniformLocation',
  'webglPrepareUniformLocationsBeforeFirstUse',
  'webglGetLeftBracePos',
  'emscriptenWebGLGetVertexAttrib',
  '__glGetActiveAttribOrUniform',
  'writeGLArray',
  'registerWebGlEventCallback',
  'runAndAbortIfError',
  'SDL_unicode',
  'SDL_ttfContext',
  'SDL_audio',
  'GLFW_Window',
  'ALLOC_NORMAL',
  'ALLOC_STACK',
  'allocate',
  'writeStringToMemory',
  'writeAsciiToMemory',
];
missingLibrarySymbols.forEach(missingLibrarySymbol)

var unexportedSymbols = [
  'run',
  'addOnPreRun',
  'addOnInit',
  'addOnPreMain',
  'addOnExit',
  'addOnPostRun',
  'addRunDependency',
  'removeRunDependency',
  'FS_createFolder',
  'FS_createPath',
  'FS_createDataFile',
  'FS_createPreloadedFile',
  'FS_createLazyFile',
  'FS_createLink',
  'FS_createDevice',
  'FS_unlink',
  'out',
  'err',
  'callMain',
  'abort',
  'keepRuntimeAlive',
  'wasmMemory',
  'stackAlloc',
  'stackSave',
  'stackRestore',
  'getTempRet0',
  'setTempRet0',
  'writeStackCookie',
  'checkStackCookie',
  'ptrToString',
  'getHeapMax',
  'emscripten_realloc_buffer',
  'ENV',
  'MONTH_DAYS_REGULAR',
  'MONTH_DAYS_LEAP',
  'MONTH_DAYS_REGULAR_CUMULATIVE',
  'MONTH_DAYS_LEAP_CUMULATIVE',
  'isLeapYear',
  'arraySum',
  'addDays',
  'ERRNO_CODES',
  'ERRNO_MESSAGES',
  'DNS',
  'Protocols',
  'Sockets',
  'timers',
  'warnOnce',
  'UNWIND_CACHE',
  'readEmAsmArgsArray',
  'getExecutableName',
  'convertI32PairToI53Checked',
  'uleb128Encode',
  'sigToWasmTypes',
  'generateFuncType',
  'convertJsFunctionToWasm',
  'freeTableIndexes',
  'functionsInTableMap',
  'getEmptyTableSlot',
  'updateTableMap',
  'getFunctionAddress',
  'addFunction',
  'setValue',
  'getValue',
  'PATH',
  'PATH_FS',
  'UTF8Decoder',
  'UTF8ArrayToString',
  'UTF8ToString',
  'stringToUTF8Array',
  'lengthBytesUTF8',
  'intArrayFromString',
  'stringToAscii',
  'UTF16Decoder',
  'writeArrayToMemory',
  'SYSCALLS',
  'JSEvents',
  'specialHTMLTargets',
  'currentFullscreenStrategy',
  'restoreOldWindowedStyle',
  'ExitStatus',
  'getEnvStrings',
  'flush_NO_FILESYSTEM',
  'dlopenMissingError',
  'promiseMap',
  'uncaughtExceptionCount',
  'exceptionLast',
  'exceptionCaught',
  'ExceptionInfo',
  'getExceptionMessageCommon',
  'incrementExceptionRefcount',
  'decrementExceptionRefcount',
  'getExceptionMessage',
  'Browser',
  'wget',
  'tempFixedLengthArray',
  'miniTempWebGLFloatBuffers',
  'miniTempWebGLIntBuffers',
  'GL',
  'emscripten_webgl_power_preferences',
  'AL',
  'GLUT',
  'EGL',
  'GLEW',
  'IDBStore',
  'SDL',
  'SDL_gfx',
  'GLFW',
  'allocateUTF8',
  'allocateUTF8OnStack',
];
unexportedSymbols.forEach(unexportedRuntimeSymbol);



var calledRun;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function stackCheckInit() {
  // This is normally called automatically during __wasm_call_ctors but need to
  // get these values before even running any of the ctors so we call it redundantly
  // here.
  _emscripten_stack_init();
  // TODO(sbc): Move writeStackCookie to native to to avoid this.
  writeStackCookie();
}

function run() {

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
  out = err = (x) => {
    has = true;
  }
  try { // it doesn't matter if it fails
    flush_NO_FILESYSTEM();
  } catch(e) {}
  out = oldOut;
  err = oldErr;
  if (has) {
    warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.');
    warnOnce('(this may also be due to not including full filesystem support - try building with -sFORCE_FILESYSTEM)');
  }
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

run();


// end include: postamble.js
// include: /src/generated_debug/glue.js

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
  if (height === undefined) { this.ptr = _emscripten_bind_Rectangle_Rectangle_2(centre, width); getCache(Rectangle)[this.ptr] = this;return }
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
function ConnEnd(shapeRef, connectionPinClassID) {
  if (shapeRef && typeof shapeRef === 'object') shapeRef = shapeRef.ptr;
  if (connectionPinClassID && typeof connectionPinClassID === 'object') connectionPinClassID = connectionPinClassID.ptr;
  if (connectionPinClassID === undefined) { this.ptr = _emscripten_bind_ConnEnd_ConnEnd_1(shapeRef); getCache(ConnEnd)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_ConnEnd_ConnEnd_2(shapeRef, connectionPinClassID);
  getCache(ConnEnd)[this.ptr] = this;
};;
ConnEnd.prototype = Object.create(WrapperObject.prototype);
ConnEnd.prototype.constructor = ConnEnd;
ConnEnd.prototype.__class__ = ConnEnd;
ConnEnd.__cache__ = {};
Module['ConnEnd'] = ConnEnd;

/**
 * @method
 * @param {JunctionRef} junctionRef
 * @returns {ConnEnd}
 */
ConnEnd.prototype['createConnEndFromJunctionRef'] = ConnEnd.prototype.createConnEndFromJunctionRef = function(junctionRef) {
  var self = this.ptr;
  if (junctionRef && typeof junctionRef === 'object') junctionRef = junctionRef.ptr;
  return wrapPointer(_emscripten_bind_ConnEnd_createConnEndFromJunctionRef_1(self, junctionRef), ConnEnd);
};;

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

/**
 * @method
 * @param {Point} newPosition
 */
ShapeConnectionPin.prototype['updatePosition'] = ShapeConnectionPin.prototype.updatePosition = function(newPosition) {
  var self = this.ptr;
  if (newPosition && typeof newPosition === 'object') newPosition = newPosition.ptr;
  _emscripten_bind_ShapeConnectionPin_updatePosition_1(self, newPosition);
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

/**
 * @method
 * @param {Polygon} poly
 */
Obstacle.prototype['setNewPoly'] = Obstacle.prototype.setNewPoly = function(poly) {
  var self = this.ptr;
  if (poly && typeof poly === 'object') poly = poly.ptr;
  _emscripten_bind_Obstacle_setNewPoly_1(self, poly);
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

/**
 * @method
 * @param {Boolean} fixed
 */
JunctionRef.prototype['setPositionFixed'] = JunctionRef.prototype.setPositionFixed = function(fixed) {
  var self = this.ptr;
  if (fixed && typeof fixed === 'object') fixed = fixed.ptr;
  _emscripten_bind_JunctionRef_setPositionFixed_1(self, fixed);
};;

/**
 * @method
 * 
 * @returns {Boolean}
 */
JunctionRef.prototype['positionFixed'] = JunctionRef.prototype.positionFixed = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_JunctionRef_positionFixed_0(self));
};;

/**
 * @method
 * 
 * @returns {Point}
 */
JunctionRef.prototype['recommendedPosition'] = JunctionRef.prototype.recommendedPosition = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_JunctionRef_recommendedPosition_0(self), Point);
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

/**
 * @method
 * @param {Polygon} poly
 */
ShapeRef.prototype['setNewPoly'] = ShapeRef.prototype.setNewPoly = function(poly) {
  var self = this.ptr;
  if (poly && typeof poly === 'object') poly = poly.ptr;
  _emscripten_bind_ShapeRef_setNewPoly_1(self, poly);
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

/**
 * @method
 * @param {Boolean} value
 */
ConnRef.prototype['setHateCrossings'] = ConnRef.prototype.setHateCrossings = function(value) {
  var self = this.ptr;
  if (value && typeof value === 'object') value = value.ptr;
  _emscripten_bind_ConnRef_setHateCrossings_1(self, value);
};;

/**
 * @method
 * 
 * @returns {Boolean}
 */
ConnRef.prototype['doesHateCrossings'] = ConnRef.prototype.doesHateCrossings = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_ConnRef_doesHateCrossings_0(self));
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
 * @param {Polygon} newPolygon
 */
Router.prototype['moveShape'] = Router.prototype.moveShape = function(shape, xDiff, yDiff) {
  var self = this.ptr;
  if (shape && typeof shape === 'object') shape = shape.ptr;
  if (xDiff && typeof xDiff === 'object') xDiff = xDiff.ptr;
  if (yDiff && typeof yDiff === 'object') yDiff = yDiff.ptr;
  if (yDiff === undefined) { _emscripten_bind_Router_moveShape_2(self, shape, xDiff);  return }
  _emscripten_bind_Router_moveShape_3(self, shape, xDiff, yDiff);
};;

/**
 * @method
 * @param {ShapeRef} shape
 */
Router.prototype['deleteShape'] = Router.prototype.deleteShape = function(shape) {
  var self = this.ptr;
  if (shape && typeof shape === 'object') shape = shape.ptr;
  _emscripten_bind_Router_deleteShape_1(self, shape);
};;

/**
 * @method
 * @param {JunctionRef} junction
 * @param {Point} point
 */
Router.prototype['moveJunction'] = Router.prototype.moveJunction = function(junction, xDiff, yDiff) {
  var self = this.ptr;
  if (junction && typeof junction === 'object') junction = junction.ptr;
  if (xDiff && typeof xDiff === 'object') xDiff = xDiff.ptr;
  if (yDiff && typeof yDiff === 'object') yDiff = yDiff.ptr;
  if (yDiff === undefined) { _emscripten_bind_Router_moveJunction_2(self, junction, xDiff);  return }
  _emscripten_bind_Router_moveJunction_3(self, junction, xDiff, yDiff);
};;

/**
 * @method
 * @param {Avoid_RoutingParameter} parameter
 * @param {number} value
 */
Router.prototype['setRoutingParameter'] = Router.prototype.setRoutingParameter = function(parameter, value) {
  var self = this.ptr;
  if (parameter && typeof parameter === 'object') parameter = parameter.ptr;
  if (value && typeof value === 'object') value = value.ptr;
  _emscripten_bind_Router_setRoutingParameter_2(self, parameter, value);
};;

/**
 * @method
 * @param {Avoid_RoutingOption} option
 * @param {Boolean} value
 */
Router.prototype['setRoutingOption'] = Router.prototype.setRoutingOption = function(option, value) {
  var self = this.ptr;
  if (option && typeof option === 'object') option = option.ptr;
  if (value && typeof value === 'object') value = value.ptr;
  _emscripten_bind_Router_setRoutingOption_2(self, option, value);
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

    

    // Avoid_RoutingParameter

    Module['segmentPenalty'] = _emscripten_enum_Avoid_RoutingParameter_segmentPenalty();

    Module['anglePenalty'] = _emscripten_enum_Avoid_RoutingParameter_anglePenalty();

    Module['crossingPenalty'] = _emscripten_enum_Avoid_RoutingParameter_crossingPenalty();

    Module['clusterCrossingPenalty'] = _emscripten_enum_Avoid_RoutingParameter_clusterCrossingPenalty();

    Module['fixedSharedPathPenalty'] = _emscripten_enum_Avoid_RoutingParameter_fixedSharedPathPenalty();

    Module['portDirectionPenalty'] = _emscripten_enum_Avoid_RoutingParameter_portDirectionPenalty();

    Module['shapeBufferDistance'] = _emscripten_enum_Avoid_RoutingParameter_shapeBufferDistance();

    Module['idealNudgingDistance'] = _emscripten_enum_Avoid_RoutingParameter_idealNudgingDistance();

    Module['reverseDirectionPenalty'] = _emscripten_enum_Avoid_RoutingParameter_reverseDirectionPenalty();

    

    // Avoid_RoutingOption

    Module['nudgeOrthogonalSegmentsConnectedToShapes'] = _emscripten_enum_Avoid_RoutingOption_nudgeOrthogonalSegmentsConnectedToShapes();

    Module['improveHyperedgeRoutesMovingJunctions'] = _emscripten_enum_Avoid_RoutingOption_improveHyperedgeRoutesMovingJunctions();

    Module['penaliseOrthogonalSharedPathsAtConnEnds'] = _emscripten_enum_Avoid_RoutingOption_penaliseOrthogonalSharedPathsAtConnEnds();

    Module['nudgeOrthogonalTouchingColinearSegments'] = _emscripten_enum_Avoid_RoutingOption_nudgeOrthogonalTouchingColinearSegments();

    Module['performUnifyingNudgingPreprocessingStep'] = _emscripten_enum_Avoid_RoutingOption_performUnifyingNudgingPreprocessingStep();

    Module['improveHyperedgeRoutesMovingAddingAndDeletingJunctions'] = _emscripten_enum_Avoid_RoutingOption_improveHyperedgeRoutesMovingAddingAndDeletingJunctions();

    Module['nudgeSharedPathsWithCommonEndPoint'] = _emscripten_enum_Avoid_RoutingOption_nudgeSharedPathsWithCommonEndPoint();

  }
  if (runtimeInitialized) setupEnums();
  else addOnInit(setupEnums);
})();

// end include: /src/generated_debug/glue.js


  return initAvoidModule.ready
}

);
})();
export default initAvoidModule;