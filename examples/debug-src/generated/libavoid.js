// This code implements the `-sMODULARIZE` settings by taking the generated
// JS program code (INNER_JS_CODE) and wrapping it in a factory function.

// When targeting node and ES6 we use `await import ..` in the generated code
// so the outer function needs to be marked as async.
async function initAvoidModule(moduleArg = {}) {
  var Module = moduleArg;
(function() {
  function b(d) {
    d = d.split("-")[0];
    for (d = d.split(".").slice(0, 3); d.length < 3;) {
      d.push("00");
    }
    d = d.map(e => e.padStart(2, "0"));
    return d.join("");
  }
  if (typeof process !== "undefined" && !process.T?.na && typeof Deno === "undefined") {
    var a = process.T?.node ? b(process.T.node) : 2147483647;
    if (a < 2147483647) {
      throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
    }
    if (a < 2147483647) {
      throw Error(`This emscripten-generated code requires node v214748.36.47 (detected v${[a / 1E4 | 0, (a / 100 | 0) % 100, a % 100].join(".")})`);
    }
  }
  if (a = typeof navigator !== "undefined" && navigator.userAgent) {
    var c = a.includes("Safari/") && !a.includes("Chrome/") && a.match(/Version\/(\d+\.?\d*\.?\d*)/) ? b(a.match(/Version\/(\d+\.?\d*\.?\d*)/)[1]) : 2147483647;
    if (c < 150200) {
      throw Error(`This emscripten-generated code requires Safari v15.2.0 (detected v${c})`);
    }
    c = a.match(/Firefox\/(\d+(?:\.\d+)?)/) ? parseFloat(a.match(/Firefox\/(\d+(?:\.\d+)?)/)[1]) : 2147483647;
    if (c < 100) {
      throw Error(`This emscripten-generated code requires Firefox v100 (detected v${c})`);
    }
    a = a.match(/Chrome\/(\d+(?:\.\d+)?)/) ? parseFloat(a.match(/Chrome\/(\d+(?:\.\d+)?)/)[1]) : 2147483647;
    if (a < 95) {
      throw Error(`This emscripten-generated code requires Chrome v95 (detected v${a})`);
    }
  }
})();
var aa = !!globalThis.window, ba = !!globalThis.WorkerGlobalScope, ca = globalThis.da?.T?.node && globalThis.da?.type != "renderer", da = !aa && !ca && !ba, ea = "./this.program", fa = import.meta.url, ha = "", ia;
if (!da) {
  if (aa || ba) {
    try {
      ha = (new URL(".", fa)).href;
    } catch {
    }
    if (!globalThis.window && !globalThis.WorkerGlobalScope) {
      throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
    }
    ia = async b => {
      k(!ja(b), "readAsync does not work with file:// URLs");
      b = await fetch(b, {credentials:"same-origin"});
      if (b.ok) {
        return b.arrayBuffer();
      }
      throw Error(b.status + " : " + b.url);
    };
  } else {
    throw Error("environment detection error");
  }
}
var ka = console.log.bind(console), q = console.error.bind(console);
k(!ba, "worker environment detected but not enabled at build time (add `worker` to `-sENVIRONMENT` to enable)");
k(!ca, "node environment detected but not enabled at build time (add `node` to `-sENVIRONMENT` to enable)");
k(!da, "shell environment detected but not enabled at build time (add `shell` to `-sENVIRONMENT` to enable)");
globalThis.WebAssembly || q("no native wasm support detected");
var t = !1;
function k(b, a) {
  b || u("Assertion failed" + (a ? ": " + a : ""));
}
var ja = b => b.startsWith("file://"), la = new Int16Array(1), ma = new Int8Array(la.buffer);
la[0] = 25459;
ma[0] === 115 && ma[1] === 99 || u("Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)");
function na(b) {
  var a = Module[b], c = `Attempt to modify \`Module.${b}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`;
  Array.isArray(a) && (a = new Proxy(a, {set() {
    u(c);
    return !1;
  }, defineProperty() {
    u(c);
    return !1;
  }, deleteProperty() {
    u(c);
    return !1;
  }}));
  Object.defineProperty(Module, b, {configurable:!0, get() {
    return a;
  }, set() {
    u(c);
  }});
}
function x(b) {
  return () => k(!1, `call to '${b}' via reference taken before Wasm module initialization`);
}
function y(b) {
  Object.getOwnPropertyDescriptor(Module, b) && u(`\`Module.${b}\` was supplied but \`${b}\` not included in INCOMING_MODULE_JS_API`);
}
function oa(b) {
  Object.getOwnPropertyDescriptor(Module, b) || Object.defineProperty(Module, b, {configurable:!0, get() {
    var a = `'${b}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
    b !== "FS_createPath" && b !== "FS_createDataFile" && b !== "FS_createPreloadedFile" && b !== "FS_preloadFile" && b !== "FS_unlink" && b !== "addRunDependency" && b !== "FS_createLazyFile" && b !== "FS_createDevice" && b !== "removeRunDependency" || (a += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you");
    u(a);
  }});
}
function pa() {
  var b = qa();
  k((b & 3) == 0);
  b == 0 && (b += 4);
  z[b >> 2] = 34821223;
  z[b + 4 >> 2] = 2310721022;
  z[0] = 1668509029;
}
function ra(b) {
  return "0x" + (b >>> 0).toString(16).padStart(8, "0");
}
function sa() {
  if (!t) {
    var b = qa();
    b == 0 && (b += 4);
    var a = z[b >> 2], c = z[b + 4 >> 2];
    a == 34821223 && c == 2310721022 || u(`Stack overflow! Stack cookie has been overwritten at ${ta(b)}, expected hex dwords ${ra(2310721022)} and ${ra(34821223)}, but received ${ra(c)} ${ra(a)}`);
    z[0] != 1668509029 && u("Runtime error: The application has corrupted its heap memory area (address zero)!");
  }
}
var ua = !1;
function va() {
  if (!A?.buffer?.resizable) {
    var b = wa.buffer;
    A = new Int8Array(b);
    xa = new Int16Array(b);
    B = new Uint8Array(b);
    D = new Uint16Array(b);
    F = new Int32Array(b);
    z = new Uint32Array(b);
    ya = new Float32Array(b);
    za = new Float64Array(b);
    Aa = new BigInt64Array(b);
    Ba = new BigUint64Array(b);
  }
}
k(globalThis.Int32Array && globalThis.Float64Array && Int32Array.prototype.subarray && Int32Array.prototype.set, "JS engine does not provide full typed array support");
function Ca() {
  var b = Module.preRun;
  b && (typeof b === "function" && (b = [b]), Da.push(...b));
  na("preRun");
  for (b = Da; b.length > 0;) {
    b.shift()(Module);
  }
}
function Ea() {
  sa();
  var b = Module.postRun;
  b && (typeof b === "function" && (b = [b]), Fa.push(...b));
  na("postRun");
  for (b = Fa; b.length > 0;) {
    b.shift()(Module);
  }
}
function u(b) {
  Module.onAbort?.(b);
  b = `Aborted(${b})`;
  q(b);
  t = !0;
  ua && Ga();
  throw new WebAssembly.RuntimeError(b);
}
function Ha() {
  u("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM");
}
function G(b, a, c) {
  k(a);
  return (...d) => {
    k(ua, `native function \`${b}\` called before runtime initialization`);
    k(!0, `native function \`${b}\` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)`);
    k(d.length <= c, `native function \`${b}\` called with ${d.length} args but expects ${c}`);
    return a(...d);
  };
}
var Ia = 0;
function Ja(b) {
  return (...a) => {
    if (t) {
      throw Error("program has already aborted!");
    }
    Ia++;
    try {
      return b(...a);
    } catch (c) {
      if (t || Ia > 1 || c === "unwind") {
        throw c;
      }
      u("unhandled exception: " + [c, c.stack]);
    } finally {
      Ia--;
    }
  };
}
function Ka() {
  var b = H.get, a = {};
  H.get = c => {
    var d = b.call(H, c), e = a[c];
    e && e.aa === d || (e = a[c] = {aa:d, la:Ja(d)});
    return e.la;
  };
}
var La;
async function Ma(b) {
  try {
    var a = await ia(b);
    return new Uint8Array(a);
  } catch {
  }
  throw "both async and sync fetching of the wasm failed";
}
async function Na(b, a) {
  try {
    var c = await Ma(b);
    return await WebAssembly.instantiate(c, a);
  } catch (d) {
    q(`failed to asynchronously prepare wasm: ${d}`), ja(b) && q(`warning: Loading from a file URI (${b}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`), u(d);
  }
}
async function Oa(b) {
  var a = La;
  try {
    var c = fetch(a, {credentials:"same-origin"});
    return await WebAssembly.instantiateStreaming(c, b);
  } catch (d) {
    q(`wasm streaming compile failed: ${d}`), q("falling back to ArrayBuffer instantiation");
  }
  return Na(a, b);
}
var F, A, z, Fa = [], Da = [];
function ta(b) {
  k(typeof b === "number", `ptrToString expects a number, got ${typeof b}`);
  return "0x" + (b >>> 0).toString(16).padStart(8, "0");
}
var I = b => {
  I.S || (I.S = {});
  I.S[b] || (I.S[b] = 1, q(b));
}, Pa = globalThis.TextDecoder && new TextDecoder(), Ra = (b, a, c, d) => {
  c = a + c;
  if (d) {
    return c;
  }
  for (; b[a] && !(a >= c);) {
    ++a;
  }
  return a;
}, Sa = (b, a = 0, c, d) => {
  c = Ra(b, a, c, d);
  if (c - a > 16 && b.buffer && Pa) {
    return Pa.decode(b.subarray(a, c));
  }
  for (d = ""; a < c;) {
    var e = b[a++];
    if (e & 128) {
      var g = b[a++] & 63;
      if ((e & 224) == 192) {
        d += String.fromCharCode((e & 31) << 6 | g);
      } else {
        var h = b[a++] & 63;
        (e & 240) == 224 ? e = (e & 15) << 12 | g << 6 | h : ((e & 248) != 240 && I(`Invalid UTF-8 leading byte ${ta(e)} encountered when deserializing a UTF-8 string in wasm memory to a JS string!`), e = (e & 7) << 18 | g << 12 | h << 6 | b[a++] & 63);
        e < 65536 ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023));
      }
    } else {
      d += String.fromCharCode(e);
    }
  }
  return d;
}, B, J = (b, a, c) => {
  k(typeof b === "number", `UTF8ToString expects a number (got ${typeof b})`);
  return b ? Sa(B, b, a, c) : "";
}, Ua = () => Ta(), Wa = b => Va(b), L = b => {
  for (var a = "";;) {
    var c = B[b++];
    if (!c) {
      return a;
    }
    a += String.fromCharCode(c);
  }
}, M = {}, P = {}, Xa = {};
class Q extends Error {
  constructor(b) {
    super(b);
    this.name = "BindingError";
  }
}
var Ya = b => {
  throw new Q(b);
};
function Za(b, a, c = {}) {
  var d = a.name;
  if (!b) {
    throw new Q(`type "${d}" must have a positive integer typeid pointer`);
  }
  if (P.hasOwnProperty(b)) {
    if (c.ea) {
      return;
    }
    throw new Q(`Cannot register type '${d}' twice`);
  }
  P[b] = a;
  delete Xa[b];
  M.hasOwnProperty(b) && (a = M[b], delete M[b], a.forEach(e => e()));
}
function R(b, a, c = {}) {
  return Za(b, a, c);
}
var xa, D, Aa, Ba, $a = (b, a, c) => {
  switch(a) {
    case 1:
      return c ? d => A[d] : d => B[d];
    case 2:
      return c ? d => xa[d >> 1] : d => D[d >> 1];
    case 4:
      return c ? d => F[d >> 2] : d => z[d >> 2];
    case 8:
      return c ? d => Aa[d >> 3] : d => Ba[d >> 3];
    default:
      throw new TypeError(`invalid integer width (${a}): ${b}`);
  }
}, S = b => {
  if (b === null) {
    return "null";
  }
  var a = typeof b;
  return a === "object" || a === "array" || a === "function" ? b.toString() : "" + b;
}, ab = (b, a, c, d) => {
  if (a < c || a > d) {
    throw new TypeError(`Passing a number "${S(a)}" from JS side to C/C++ side to an argument of type "${b}", which is outside the valid range [${c}, ${d}]!`);
  }
}, bb = b => {
  throw new Q(b.h.m.i.name + " instance already deleted");
}, cb = !1, db = () => {
}, eb = (b, a, c) => {
  if (a === c) {
    return b;
  }
  if (void 0 === c.A) {
    return null;
  }
  b = eb(b, a, c.A);
  return b === null ? null : c.$(b);
}, fb = {}, gb = {}, hb = (b, a) => {
  if (a === void 0) {
    throw new Q("ptr should not be undefined");
  }
  for (; b.A;) {
    a = b.L(a), b = b.A;
  }
  return gb[a];
};
class ib extends Error {
  constructor(b) {
    super(b);
    this.name = "InternalError";
  }
}
var kb = (b, a) => {
  if (!a.m || !a.j) {
    throw new ib("makeClassHandle requires ptr and ptrType");
  }
  if (!!a.D !== !!a.u) {
    throw new ib("Both smartPtrType and smartPtr must be specified");
  }
  a.count = {value:1};
  return jb(Object.create(b, {h:{value:a, writable:!0}}));
};
function lb(b) {
  function a() {
    return this.O ? kb(this.i.G, {m:this.ga, j:c, D:this, u:b}) : kb(this.i.G, {m:this, j:b});
  }
  var c = this.ca(b);
  if (!c) {
    return this.U(b), null;
  }
  var d = hb(this.i, c);
  if (void 0 !== d) {
    if (0 === d.h.count.value) {
      return d.h.j = c, d.h.u = b, d.clone();
    }
    d = d.clone();
    this.U(b);
    return d;
  }
  d = this.i.ba(c);
  d = fb[d];
  if (!d) {
    return a.call(this);
  }
  d = this.N ? d.Z : d.pointerType;
  var e = eb(c, this.i, d.i);
  return e === null ? a.call(this) : this.O ? kb(d.i.G, {m:d, j:e, D:this, u:b}) : kb(d.i.G, {m:d, j:e});
}
var jb = b => {
  if (!globalThis.FinalizationRegistry) {
    return jb = a => a, b;
  }
  cb = new FinalizationRegistry(a => {
    console.warn(a.fa);
    a = a.h;
    --a.count.value;
    0 === a.count.value && (a.u ? a.D.H(a.u) : a.m.i.H(a.j));
  });
  jb = a => {
    var c = a.h;
    if (c.u) {
      var d = {h:c};
      c = Error(`Embind found a leaked C++ instance ${c.m.i.name} <${ta(c.j)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);
      "captureStackTrace" in Error && Error.captureStackTrace(c, lb);
      d.fa = c.stack.replace(/^Error: /, "");
      cb.register(a, d, a);
    }
    return a;
  };
  db = a => {
    cb.unregister(a);
  };
  return jb(b);
}, mb = [];
function nb() {
}
var ob = (b, a) => Object.defineProperty(a, "name", {value:b}), pb = (b, a, c) => {
  if (void 0 === b[a].B) {
    var d = b[a];
    b[a] = function(...e) {
      if (!b[a].B.hasOwnProperty(e.length)) {
        throw new Q(`Function '${c}' called with an invalid number of arguments (${e.length}) - expects one of (${b[a].B})!`);
      }
      return b[a].B[e.length].apply(this, e);
    };
    b[a].B = [];
    b[a].B[d.F] = d;
  }
}, qb = (b, a) => {
  if (Module.hasOwnProperty(b)) {
    throw new Q(`Cannot register public name '${b}' twice`);
  }
  Module[b] = a;
  Module[b].F = void 0;
}, rb = b => {
  k(typeof b === "string");
  b = b.replace(/[^a-zA-Z0-9_]/g, "$");
  var a = b.charCodeAt(0);
  return a >= 48 && a <= 57 ? `_${b}` : b;
};
function sb(b, a, c, d, e, g, h, f) {
  this.name = b;
  this.constructor = a;
  this.G = c;
  this.H = d;
  this.A = e;
  this.ba = g;
  this.L = h;
  this.$ = f;
  this.ha = [];
}
var tb = (b, a, c) => {
  for (; a !== c;) {
    if (!a.L) {
      throw new Q(`Expected null or instance of ${c.name}, got an instance of ${a.name}`);
    }
    b = a.L(b);
    a = a.A;
  }
  return b;
};
function ub(b, a) {
  if (a === null) {
    if (this.P) {
      throw new Q(`null is not a valid ${this.name}`);
    }
    return 0;
  }
  if (!a.h) {
    throw new Q(`Cannot pass "${S(a)}" as a ${this.name}`);
  }
  if (!a.h.j) {
    throw new Q(`Cannot pass deleted object as a pointer of type ${this.name}`);
  }
  return tb(a.h.j, a.h.m.i, this.i);
}
function vb(b, a) {
  if (a === null) {
    if (this.P) {
      throw new Q(`null is not a valid ${this.name}`);
    }
    if (this.O) {
      var c = this.ia();
      b !== null && b.push(this.H, c);
      return c;
    }
    return 0;
  }
  if (!a || !a.h) {
    throw new Q(`Cannot pass "${S(a)}" as a ${this.name}`);
  }
  if (!a.h.j) {
    throw new Q(`Cannot pass deleted object as a pointer of type ${this.name}`);
  }
  if (!this.N && a.h.m.N) {
    throw new Q(`Cannot convert argument of type ${a.h.D ? a.h.D.name : a.h.m.name} to parameter type ${this.name}`);
  }
  c = tb(a.h.j, a.h.m.i, this.i);
  if (this.O) {
    if (void 0 === a.h.u) {
      throw new Q("Passing raw pointer to smart pointer is illegal");
    }
    switch(this.ka) {
      case 0:
        if (a.h.D === this) {
          c = a.h.u;
        } else {
          throw new Q(`Cannot convert argument of type ${a.h.D ? a.h.D.name : a.h.m.name} to parameter type ${this.name}`);
        }
        break;
      case 1:
        c = a.h.u;
        break;
      case 2:
        if (a.h.D === this) {
          c = a.h.u;
        } else {
          var d = a.clone();
          c = this.ja(c, wb(() => d["delete"]()));
          b !== null && b.push(this.H, c);
        }
        break;
      default:
        throw new Q("Unsupported sharing policy");
    }
  }
  return c;
}
function xb(b, a) {
  if (a === null) {
    if (this.P) {
      throw new Q(`null is not a valid ${this.name}`);
    }
    return 0;
  }
  if (!a.h) {
    throw new Q(`Cannot pass "${S(a)}" as a ${this.name}`);
  }
  if (!a.h.j) {
    throw new Q(`Cannot pass deleted object as a pointer of type ${this.name}`);
  }
  if (a.h.m.N) {
    throw new Q(`Cannot convert argument of type ${a.h.m.name} to parameter type ${this.name}`);
  }
  return tb(a.h.j, a.h.m.i, this.i);
}
function yb(b) {
  return this.l(z[b >> 2]);
}
function zb(b, a, c, d, e, g, h, f, l, n, m) {
  this.name = b;
  this.i = a;
  this.P = c;
  this.N = d;
  this.O = e;
  this.ga = g;
  this.ka = h;
  this.W = f;
  this.ia = l;
  this.ja = n;
  this.H = m;
  e || a.A !== void 0 ? this.o = vb : (this.o = d ? ub : xb, this.v = null);
}
var Ab = (b, a) => {
  if (!Module.hasOwnProperty(b)) {
    throw new ib("Replacing nonexistent public symbol");
  }
  Module[b] = a;
  Module[b].F = void 0;
}, Bb = [], T = (b, a, c = !1) => {
  k(!c, "async bindings are only supported with JSPI");
  b = L(b);
  (c = Bb[a]) || (Bb[a] = c = H.get(a));
  k(H.get(a) == c, "table mirror is out of date");
  if (typeof c !== "function") {
    throw new Q(`unknown function pointer with signature ${b}: ${a}`);
  }
  return c;
};
class Cb extends Error {
}
var Eb = b => {
  b = Db(b);
  var a = L(b);
  U(b);
  return a;
}, V = (b, a) => {
  function c(g) {
    e[g] || P[g] || (Xa[g] ? Xa[g].forEach(c) : (d.push(g), e[g] = !0));
  }
  var d = [], e = {};
  a.forEach(c);
  throw new Cb(`${b}: ` + d.map(Eb).join([", "]));
}, W = (b, a, c) => {
  function d(f) {
    f = c(f);
    if (f.length !== b.length) {
      throw new ib("Mismatched type converter count");
    }
    for (var l = 0; l < b.length; ++l) {
      R(b[l], f[l]);
    }
  }
  b.forEach(f => Xa[f] = a);
  var e = Array(a.length), g = [], h = 0;
  for (let [f, l] of a.entries()) {
    P.hasOwnProperty(l) ? e[f] = P[l] : (g.push(l), M.hasOwnProperty(l) || (M[l] = []), M[l].push(() => {
      e[f] = P[l];
      ++h;
      h === g.length && d(e);
    }));
  }
  0 === g.length && d(e);
}, Fb = b => {
  for (; b.length;) {
    var a = b.pop();
    b.pop()(a);
  }
};
function Gb(b) {
  for (var a = 1; a < b.length; ++a) {
    if (b[a] !== null && b[a].v === void 0) {
      return !0;
    }
  }
  return !1;
}
function Hb(b) {
  for (var a = 1; a < b.length; ++a) {
    if (b[a] !== null && b[a].ma) {
      return !0;
    }
  }
  return !1;
}
function Ib(b, a, c, d, e) {
  (b < a || b > c) && e(`function ${d} called with ${b} arguments, expected ${a == c ? a : `${a} to ${c}`}`);
}
function Jb(b, a, c, d, e, g) {
  var h = a.length;
  if (h < 2) {
    throw new Q("argTypes array size mismatch! Must at least get return value and receiver (this) types!");
  }
  k(!g, "async bindings are only supported with JSPI");
  c = a[1] !== null && c !== null;
  var f = Gb(a), l = Hb(a), n = l && !g && !f;
  l && !n && (f = !0);
  l = !a[0].V;
  var m = h - 2;
  var p = a.length - 2;
  for (var r = a.length - 1; r >= 2 && a[r].optional; --r) {
    p--;
  }
  r = a[0];
  var v = a[1];
  d = [b, Ya, d, e, Fb, r.l.bind(r), v?.o.bind(v)];
  n && d.push(Ua, Wa);
  for (e = 2; e < h; ++e) {
    n = a[e], d.push(n.o.bind(n));
  }
  if (!f) {
    for (e = c ? 1 : 2; e < a.length; ++e) {
      a[e].v !== null && d.push(a[e].v);
    }
  }
  d.push(Ib, p, m);
  h = Gb(a);
  f = (m = Hb(a)) && !g && !h;
  m && !f && (h = !0);
  e = a.length - 2;
  p = [];
  n = ["fn"];
  c && n.push("thisWired");
  for (m = 0; m < e; ++m) {
    p.push(`arg${m}`), n.push(`arg${m}Wired`);
  }
  p = p.join();
  n = n.join();
  p = `return function (${p}) {\n` + "checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);\n";
  h && (p += "var destructors = [];\n");
  f && (p += "var sp = stackSave();\ntry {\n");
  v = h ? "destructors" : "null";
  r = "humanName throwBindingError invoker fn runDestructors fromRetWire toClassParamWire".split(" ");
  f && r.push("stackSave", "stackRestore");
  c && (p += `var thisWired = toClassParamWire(${v}, this);\n`);
  for (m = 0; m < e; ++m) {
    var w = `toArg${m}Wire`;
    p += `var arg${m}Wired = ${w}(${v}, arg${m});\n`;
    r.push(w);
  }
  p += (l || g ? "var rv = " : "") + `invoker(${n});\n`;
  f && (p += "} finally {\nstackRestore(sp);\n}\n");
  if (h) {
    p += "runDestructors(destructors);\n";
  } else {
    for (m = c ? 1 : 2; m < a.length; ++m) {
      g = m === 1 ? "thisWired" : `arg${m - 2}Wired`, a[m].v !== null && (p += `${g}_dtor(${g});\n`, r.push(`${g}_dtor`));
    }
  }
  l && (p += "var ret = fromRetWire(rv);\nreturn ret;\n");
  p += "}\n";
  r.push("checkArgCount", "minArgs", "maxArgs");
  p = `if (arguments.length !== ${r.length}){ throw new Error(humanName + "Expected ${r.length} closure arguments " + arguments.length + " given."); }\n${p}`;
  a = (new Function(r, p))(...d);
  return ob(b, a);
}
var Lb = (b, a) => {
  for (var c = [], d = 0; d < b; d++) {
    c.push(z[a + d * 4 >> 2]);
  }
  return c;
}, Mb = b => {
  b = b.trim();
  var a = b.indexOf("(");
  if (a === -1) {
    return b;
  }
  k(b.endsWith(")"), "Parentheses for argument names should match.");
  return b.slice(0, a);
}, Nb = (b, a, c) => {
  if (!(b instanceof Object)) {
    throw new Q(`${c} with invalid "this": ${b}`);
  }
  if (!(b instanceof a.i.constructor)) {
    throw new Q(`${c} incompatible with "this" of type ${b.constructor.name}`);
  }
  if (!b.h.j) {
    throw new Q(`cannot call emscripten binding method ${c} on deleted object`);
  }
  return tb(b.h.j, b.h.m.i, a.i);
}, Ob = [], X = [0, 1, , 1, null, 1, !0, 1, !1, 1], Pb = [], Qb = b => {
  if (b > 9 && 0 === --X[b + 1]) {
    k(X[b] !== void 0, "decref for unallocated handle");
    var a = X[b];
    X[b] = void 0;
    var c = Pb[b];
    c && (Pb[b] = void 0, c(a));
    Ob.push(b);
  }
}, Rb = b => {
  if (!b) {
    throw new Q(`Cannot use deleted val. handle = ${b}`);
  }
  k(b === 2 || X[b] !== void 0 && b % 2 === 0, `invalid handle: ${b}`);
  return X[b];
}, wb = b => {
  switch(b) {
    case void 0:
      return 2;
    case null:
      return 4;
    case !0:
      return 6;
    case !1:
      return 8;
    default:
      let a = Ob.pop() || X.length;
      X[a] = b;
      X[a + 1] = 1;
      return a;
  }
}, Sb = {name:"emscripten::val", l:b => {
  var a = Rb(b);
  Qb(b);
  return a;
}, o:(b, a) => wb(a), C:yb, v:null}, Tb = (b, a, c) => {
  switch(a) {
    case 1:
      return c ? function(d) {
        return this.l(A[d]);
      } : function(d) {
        return this.l(B[d]);
      };
    case 2:
      return c ? function(d) {
        return this.l(xa[d >> 1]);
      } : function(d) {
        return this.l(D[d >> 1]);
      };
    case 4:
      return c ? function(d) {
        return this.l(F[d >> 2]);
      } : function(d) {
        return this.l(z[d >> 2]);
      };
    default:
      throw new TypeError(`invalid integer width (${a}): ${b}`);
  }
}, Ub = (b, a) => {
  var c = P[b];
  if (void 0 === c) {
    throw b = `${a} has unknown type ${Eb(b)}`, new Q(b);
  }
  return c;
}, ya, za, Vb = (b, a) => {
  switch(a) {
    case 4:
      return function(c) {
        return this.l(ya[c >> 2]);
      };
    case 8:
      return function(c) {
        return this.l(za[c >> 3]);
      };
    default:
      throw new TypeError(`invalid float width (${a}): ${b}`);
  }
}, Wb = (b, a, c) => {
  var d = (e, g) => {
    var h = 0;
    return {next() {
      if (h >= e) {
        return {done:!0};
      }
      var f = h;
      h++;
      return {value:g(f), done:!1};
    }, [Symbol.iterator]() {
      return this;
    }};
  };
  b[Symbol.iterator] || (b[Symbol.iterator] = function() {
    var e = this[a]();
    return d(e, g => this[c](g));
  });
}, Xb = Object.assign({optional:!0}, Sb), Y = (b, a, c) => {
  k(typeof c === "number", "stringToUTF8 requires a third parameter that specifies the length of the output buffer");
  var d = B;
  k(typeof b === "string", `stringToUTF8Array expects a string (got ${typeof b})`);
  if (c > 0) {
    var e = a;
    c = a + c - 1;
    for (var g = 0; g < b.length; ++g) {
      var h = b.codePointAt(g);
      if (h <= 127) {
        if (a >= c) {
          break;
        }
        d[a++] = h;
      } else if (h <= 2047) {
        if (a + 1 >= c) {
          break;
        }
        d[a++] = 192 | h >> 6;
        d[a++] = 128 | h & 63;
      } else if (h <= 65535) {
        if (a + 2 >= c) {
          break;
        }
        d[a++] = 224 | h >> 12;
        d[a++] = 128 | h >> 6 & 63;
        d[a++] = 128 | h & 63;
      } else {
        if (a + 3 >= c) {
          break;
        }
        h > 1114111 && I(`Invalid Unicode code point ${ta(h)} encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).`);
        d[a++] = 240 | h >> 18;
        d[a++] = 128 | h >> 12 & 63;
        d[a++] = 128 | h >> 6 & 63;
        d[a++] = 128 | h & 63;
        g++;
      }
    }
    d[a] = 0;
    b = a - e;
  } else {
    b = 0;
  }
  return b;
}, Yb = b => {
  for (var a = 0, c = 0; c < b.length; ++c) {
    var d = b.charCodeAt(c);
    d <= 127 ? a++ : d <= 2047 ? a += 2 : d >= 55296 && d <= 57343 ? (a += 4, ++c) : a += 3;
  }
  return a;
}, Zb = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0, $b = (b, a, c) => {
  k(b % 2 == 0, "pointer passed to UTF16ToString must be 2-byte aligned");
  b >>= 1;
  a = Ra(D, b, a / 2, c);
  if (a - b > 16 && Zb) {
    return Zb.decode(D.subarray(b, a));
  }
  for (c = ""; b < a; ++b) {
    c += String.fromCharCode(D[b]);
  }
  return c;
}, ac = (b, a, c = 2147483647) => {
  k(a % 2 == 0, "pointer passed to stringToUTF16 must be 2-byte aligned");
  k(typeof c === "number", "stringToUTF16 requires a third parameter that specifies the length of the output buffer");
  if (c < 2) {
    return 0;
  }
  c -= 2;
  var d = a;
  c = c < b.length * 2 ? c / 2 : b.length;
  for (var e = 0; e < c; ++e) {
    xa[a >> 1] = b.charCodeAt(e), a += 2;
  }
  xa[a >> 1] = 0;
  return a - d;
}, bc = b => b.length * 2, cc = (b, a, c) => {
  k(b % 4 == 0, "pointer passed to UTF32ToString must be 2-byte aligned");
  var d = "";
  b >>= 2;
  for (var e = 0; !(e >= a / 4); e++) {
    var g = z[b + e];
    if (!g && !c) {
      break;
    }
    d += String.fromCodePoint(g);
  }
  return d;
}, dc = (b, a, c = 2147483647) => {
  k(a % 4 == 0, "pointer passed to stringToUTF32 must be 4-byte aligned");
  k(typeof c === "number", "stringToUTF32 requires a third parameter that specifies the length of the output buffer");
  if (c < 4) {
    return 0;
  }
  var d = a;
  c = d + c - 4;
  for (var e = 0; e < b.length; ++e) {
    var g = b.codePointAt(e);
    g > 65535 && e++;
    F[a >> 2] = g;
    a += 4;
    if (a + 4 > c) {
      break;
    }
  }
  F[a >> 2] = 0;
  return a - d;
}, ec = b => {
  for (var a = 0, c = 0; c < b.length; ++c) {
    b.codePointAt(c) > 65535 && c++, a += 4;
  }
  return a;
}, fc = [], hc = b => {
  var a = fc.length;
  fc.push(b);
  return a;
}, ic = (b, a) => {
  for (var c = Array(b), d = 0; d < b; ++d) {
    c[d] = Ub(z[a + d * 4 >> 2], `parameter ${d}`);
  }
  return c;
}, jc = (b, a, c) => {
  var d = [];
  b = b(d, c);
  d.length && (z[a >> 2] = wb(d));
  return b;
}, kc = {}, lc = b => {
  var a = kc[b];
  return a === void 0 ? L(b) : a;
}, mc = {}, oc = () => {
  if (!nc) {
    var b = {USER:"web_user", LOGNAME:"web_user", PATH:"/", PWD:"/", HOME:"/home/web_user", LANG:(globalThis.navigator?.language ?? "C").replace("-", "_") + ".UTF-8", _:ea}, a;
    for (a in mc) {
      mc[a] === void 0 ? delete b[a] : b[a] = mc[a];
    }
    var c = [];
    for (a in b) {
      c.push(`${a}=${b[a]}`);
    }
    nc = c;
  }
  return nc;
}, nc, pc = [null, [], []];
(() => {
  var b = nb.prototype;
  Object.assign(b, {isAliasOf:function(c) {
    if (!(this instanceof nb && c instanceof nb)) {
      return !1;
    }
    var d = this.h.m.i, e = this.h.j;
    c.h = c.h;
    var g = c.h.m.i;
    for (c = c.h.j; d.A;) {
      e = d.L(e), d = d.A;
    }
    for (; g.A;) {
      c = g.L(c), g = g.A;
    }
    return d === g && e === c;
  }, clone:function() {
    this.h.j || bb(this);
    if (this.h.K) {
      return this.h.count.value += 1, this;
    }
    var c = jb, d = Object, e = d.create, g = Object.getPrototypeOf(this), h = this.h;
    c = c(e.call(d, g, {h:{value:{count:h.count, J:h.J, K:h.K, j:h.j, m:h.m, u:h.u, D:h.D}}}));
    c.h.count.value += 1;
    c.h.J = !1;
    return c;
  }, ["delete"]() {
    this.h.j || bb(this);
    if (this.h.J && !this.h.K) {
      throw new Q("Object already scheduled for deletion");
    }
    db(this);
    var c = this.h;
    --c.count.value;
    0 === c.count.value && (c.u ? c.D.H(c.u) : c.m.i.H(c.j));
    this.h.K || (this.h.u = void 0, this.h.j = void 0);
  }, isDeleted:function() {
    return !this.h.j;
  }, deleteLater:function() {
    this.h.j || bb(this);
    if (this.h.J && !this.h.K) {
      throw new Q("Object already scheduled for deletion");
    }
    mb.push(this);
    this.h.J = !0;
    return this;
  }});
  var a = Symbol.dispose;
  a && (b[a] = b["delete"]);
})();
Object.assign(zb.prototype, {ca(b) {
  this.W && (b = this.W(b));
  return b;
}, U(b) {
  this.H?.(b);
}, C:yb, l:lb});
k(X.length === 10);
Module.print && (ka = Module.print);
Module.printErr && (q = Module.printErr);
Module.FS_createDataFile = Ha;
Module.FS_createPreloadedFile = Ha;
y("fetchSettings");
y("logReadFiles");
y("loadSplitModule");
y("onMalloc");
y("onRealloc");
y("onFree");
y("onSbrkGrow");
y("onCOSCacheHit");
y("onCOSCacheMiss");
y("onCOSStore");
y("GL_MAX_TEXTURE_IMAGE_UNITS");
y("SDL_canPlayWithWebAudio");
y("SDL_numSimultaneouslyQueuedBuffers");
y("freePreloadedMediaOnUse");
y("preinitializedWebGLContext");
y("keyboardListeningElement");
y("doNotCaptureKeyboard");
y("extraStackTrace");
y("preloadPlugins");
y("preMainLoop");
y("postMainLoop");
y("forcedAspectRatio");
y("mainScriptUrlOrBlob");
y("onFullScreen");
y("INITIAL_MEMORY");
y("wasmMemory");
y("wasmBinary");
Module.thisProgram && (ea = Module.thisProgram);
k(typeof Module.memoryInitializerPrefixURL === "undefined", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
k(typeof Module.pthreadMainPrefixURL === "undefined", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
k(typeof Module.cdInitializerPrefixURL === "undefined", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
k(typeof Module.filePackagePrefixURL === "undefined", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
k(typeof Module.read === "undefined", "Module.read option was removed");
k(typeof Module.readAsync === "undefined", "Module.readAsync option was removed (modify readAsync in JS)");
k(typeof Module.readBinary === "undefined", "Module.readBinary option was removed (modify readBinary in JS)");
k(typeof Module.setWindowTitle === "undefined", "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)");
k(typeof Module.TOTAL_MEMORY === "undefined", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
k(typeof Module.ENVIRONMENT === "undefined", "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");
k(typeof Module.STACK_SIZE === "undefined", "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time");
k(typeof Module.wasmMemory === "undefined", "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally");
k(typeof Module.INITIAL_MEMORY === "undefined", "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");
var Z = Module.preInit;
if (Z) {
  for (typeof Z === "function" && (Module.preInit = Z = [Z]); Z.length > 0;) {
    Z.shift()();
  }
}
na("preInit");
"writeI53ToI64 writeI53ToI64Clamped writeI53ToI64Signaling writeI53ToU64Clamped writeI53ToU64Signaling readI53FromI64 readI53FromU64 convertI32PairToI53 convertI32PairToI53Checked convertU32PairToI53 getTempRet0 setTempRet0 zeroMemory exitJS withStackSave strError inetPton4 inetNtop4 inetPton6 inetNtop6 readSockaddr writeSockaddr readEmAsmArgs jstoi_q autoResumeAudioContext getDynCaller dynCall handleException keepRuntimeAlive runtimeKeepalivePush runtimeKeepalivePop callUserCallback maybeExit asyncLoad asmjsMangle mmapAlloc HandleAllocator getUniqueRunDependency addRunDependency removeRunDependency addOnInit addOnPostCtor addOnPreMain addOnExit STACK_SIZE STACK_ALIGN POINTER_SIZE ASSERTIONS ccall cwrap convertJsFunctionToWasm getEmptyTableSlot updateTableMap getFunctionAddress addFunction removeFunction setValue intArrayFromString intArrayToString stringToAscii stringToNewUTF8 stringToUTF8OnStack writeArrayToMemory registerKeyEventCallback maybeCStringToJsString findEventTarget getBoundingClientRect fillMouseEventData registerMouseEventCallback registerWheelEventCallback registerUiEventCallback registerFocusEventCallback fillDeviceOrientationEventData registerDeviceOrientationEventCallback fillDeviceMotionEventData registerDeviceMotionEventCallback screenOrientation fillOrientationChangeEventData registerOrientationChangeEventCallback fillFullscreenChangeEventData registerFullscreenChangeEventCallback callCanvasResizedCallback JSEvents_requestFullscreen JSEvents_resizeCanvasForFullscreen registerRestoreOldStyle hideEverythingExceptGivenElement restoreHiddenElements setLetterbox currentFullscreenStrategy softFullscreenResizeWebGLRenderTarget doRequestFullscreen fillPointerlockChangeEventData registerPointerlockChangeEventCallback registerPointerlockErrorEventCallback requestPointerLock fillVisibilityChangeEventData registerVisibilityChangeEventCallback registerTouchEventCallback fillGamepadEventData registerGamepadEventCallback registerBeforeUnloadEventCallback fillBatteryEventData registerBatteryEventCallback setCanvasElementSize getCanvasElementSize jsStackTrace getCallstack convertPCtoSourceLocation wasiRightsToMuslOFlags wasiOFlagsToMuslOFlags initRandomFill randomFill safeSetTimeout safeClearTimeout setImmediateWrapped safeRequestAnimationFrame clearImmediateWrapped registerPostMainLoop registerPreMainLoop getPromise makePromise addPromise idsToPromises makePromiseCallback Browser_asyncPrepareDataCounter isLeapYear ydayFromDate arraySum addDays getSocketFromFD getSocketAddress heapObjectForWebGLType toTypedArrayIndex webgl_enable_ANGLE_instanced_arrays webgl_enable_OES_vertex_array_object webgl_enable_WEBGL_draw_buffers webgl_enable_WEBGL_multi_draw webgl_enable_EXT_polygon_offset_clamp webgl_enable_EXT_clip_control webgl_enable_WEBGL_polygon_mode emscriptenWebGLGet computeUnpackAlignedImageSize colorChannelsInGlTextureFormat emscriptenWebGLGetTexPixelData emscriptenWebGLGetUniform webglGetProgramUniformLocation webglGetUniformLocation webglPrepareUniformLocationsBeforeFirstUse webglGetLeftBracePos emscriptenWebGLGetVertexAttrib __glGetActiveAttribOrUniform writeGLArray registerWebGlEventCallback runAndAbortIfError writeStringToMemory writeAsciiToMemory allocateUTF8 allocateUTF8OnStack demangle stackTrace getNativeTypeSize getInheritedInstanceCount getLiveInheritedInstances getFunctionArgsName createJsInvokerSignature PureVirtualError registerInheritedInstance unregisterInheritedInstance setDelayFunction count_emval_handles isCppExceptionObject".split(" ").forEach(function(b) {
  oa(b);
});
"run out err callMain abort wasmExports writeStackCookie checkStackCookie INT53_MAX INT53_MIN bigintToI53Checked HEAP8 HEAPU8 HEAP16 HEAPU16 HEAP32 HEAPU32 HEAPF32 HEAPF64 HEAP64 HEAPU64 stackSave stackRestore stackAlloc createNamedFunction ptrToString getHeapMax growMemory ENV ERRNO_CODES DNS Protocols timers warnOnce readEmAsmArgsArray getExecutableName alignMemory wasmTable wasmMemory noExitRuntime addOnPreRun addOnPostRun freeTableIndexes functionsInTableMap getValue PATH PATH_FS UTF8Decoder UTF8ArrayToString UTF8ToString stringToUTF8Array stringToUTF8 lengthBytesUTF8 AsciiToString UTF16Decoder UTF16ToString stringToUTF16 lengthBytesUTF16 UTF32ToString stringToUTF32 lengthBytesUTF32 JSEvents specialHTMLTargets findCanvasEventTarget restoreOldWindowedStyle UNWIND_CACHE ExitStatus getEnvStrings checkWasiClock flush_NO_FILESYSTEM emSetImmediate emClearImmediate promiseMap getExceptionMessageCommon getCppExceptionTag getCppExceptionThrownObjectFromWebAssemblyException incrementUncaughtExceptionCount decrementUncaughtExceptionCount incrementExceptionRefcount decrementExceptionRefcount getExceptionMessage Browser requestFullscreen setCanvasSize createContext wget MONTH_DAYS_REGULAR MONTH_DAYS_LEAP MONTH_DAYS_REGULAR_CUMULATIVE MONTH_DAYS_LEAP_CUMULATIVE SYSCALLS tempFixedLengthArray miniTempWebGLFloatBuffers miniTempWebGLIntBuffers GL AL GLUT EGL GLEW IDBStore SDL SDL_gfx print printErr jstoi_s InternalError BindingError throwInternalError throwBindingError registeredTypes awaitingDependencies typeDependencies tupleRegistrations structRegistrations sharedRegisterType whenDependentTypesAreResolved getTypeName getFunctionName heap32VectorToArray requireRegisteredType usesDestructorStack argsUseStackAlloc checkArgCount getEnumValueType getRequiredArgCount createJsInvoker UnboundTypeError EmValType EmValOptionalType throwUnboundTypeError ensureOverloadTable exposePublicSymbol replacePublicSymbol embindRepr registeredInstances getBasestPointer getInheritedInstance registeredPointers registerType integerReadValueFromPointer enumReadValueFromPointer floatReadValueFromPointer assertIntegerRange readPointer installIndexedIterator runDestructors craftInvokerFunction embind__requireFunction genericPointerToWireType constNoSmartPtrRawPointerToWireType nonConstNoSmartPtrRawPointerToWireType init_RegisteredPointer RegisteredPointer RegisteredPointer_fromWireType runDestructor releaseClassHandle finalizationRegistry detachFinalizer attachFinalizer makeClassHandle init_ClassHandle ClassHandle throwInstanceAlreadyDeleted deletionQueue flushPendingDeletes delayFunction RegisteredClass shallowCopyInternalPointer downcastPointer upcastPointer validateThis char_0 char_9 makeLegalFunctionName emval_freelist emval_exception_decrefs emval_handles emval_symbols getStringOrSymbol Emval emval_returnValue emval_lookupTypes emval_methodCallers emval_addMethodCaller".split(" ").forEach(oa);
var Db = x("___getTypeName"), qc = x("_malloc"), U = x("_free"), qa = x("_emscripten_stack_get_end"), Ga = x("___trap"), rc = x("_emscripten_stack_init"), Va = x("__emscripten_stack_restore"), sc = x("__emscripten_stack_alloc"), Ta = x("_emscripten_stack_get_current"), tc = x("___thrown_object_from_unwind_exception"), uc = x("___get_exception_message"), vc = x("___cpp_exception"), wa = x("wasmMemory"), H = x("wasmTable"), wc = {__assert_fail:(b, a, c, d) => u(`Assertion failed: ${J(b)}, at: ` + [a ? 
J(a) : "unknown filename", c, d ? J(d) : "unknown function"]), __throw_exception_with_stack_trace:b => {
  b = new WebAssembly.Exception(vc, [b], {traceStack:!0});
  var a = b.getArg(vc, 0);
  var c = tc(a);
  a = Ta();
  var d = sc(4), e = sc(4);
  uc(c, d, e);
  c = z[d >> 2];
  e = z[e >> 2];
  d = J(c);
  U(c);
  if (e) {
    var g = J(e);
    U(e);
  }
  Va(a);
  b.message = [d, g];
  throw b;
}, _abort_js:() => u("native code called abort()"), _embind_register_bigint:(b, a, c, d, e) => {
  a = L(a);
  var g = d === 0n, h = f => f;
  if (g) {
    let f = c * 8;
    h = l => BigInt.asUintN(f, l);
    e = h(e);
  }
  R(b, {name:a, l:h, o:(f, l) => {
    if (typeof l === "number") {
      l = BigInt(l);
    } else if (typeof l !== "bigint") {
      throw new TypeError(`Cannot convert "${S(l)}" to ${a}`);
    }
    ab(a, l, d, e);
    return l;
  }, C:$a(a, c, !g), v:null});
}, _embind_register_bool:(b, a, c, d) => {
  a = L(a);
  R(b, {name:a, l:function(e) {
    return !!e;
  }, o:function(e, g) {
    return g ? c : d;
  }, C:function(e) {
    return this.l(B[e]);
  }, v:null});
}, _embind_register_class:(b, a, c, d, e, g, h, f, l, n, m, p, r) => {
  m = L(m);
  g = T(e, g);
  f &&= T(h, f);
  n &&= T(l, n);
  r = T(p, r);
  var v = rb(m);
  qb(v, function() {
    V(`Cannot construct ${m} due to unbound types`, [d]);
  });
  W([b, a, c], d ? [d] : [], w => {
    w = w[0];
    if (d) {
      var C = w.i;
      var N = C.G;
    } else {
      N = nb.prototype;
    }
    w = ob(m, function(...Qa) {
      if (Object.getPrototypeOf(this) !== O) {
        throw new Q(`Use 'new' to construct ${m}`);
      }
      if (void 0 === E.I) {
        throw new Q(`${m} has no accessible constructor`);
      }
      var Kb = E.I[Qa.length];
      if (void 0 === Kb) {
        throw new Q(`Tried to invoke ctor of ${m} with invalid number of parameters (${Qa.length}) - expected (${Object.keys(E.I).toString()}) parameters instead!`);
      }
      return Kb.apply(this, Qa);
    });
    var O = Object.create(N, {constructor:{value:w}});
    w.prototype = O;
    var E = new sb(m, w, O, r, C, g, f, n);
    if (E.A) {
      var K;
      (K = E.A).M ?? (K.M = []);
      E.A.M.push(E);
    }
    C = new zb(m, E, !0, !1, !1);
    K = new zb(m + "*", E, !1, !1, !1);
    N = new zb(m + " const*", E, !1, !0, !1);
    fb[b] = {pointerType:K, Z:N};
    Ab(v, w);
    return [C, K, N];
  });
}, _embind_register_class_class_function:(b, a, c, d, e, g, h, f) => {
  var l = Lb(c, d);
  a = L(a);
  a = Mb(a);
  g = T(e, g, f);
  W([], [b], n => {
    function m() {
      V(`Cannot call ${p} due to unbound types`, l);
    }
    n = n[0];
    var p = `${n.name}.${a}`;
    a.startsWith("@@") && (a = Symbol[a.substring(2)]);
    var r = n.i.constructor;
    void 0 === r[a] ? (m.F = c - 1, r[a] = m) : (pb(r, a, p), r[a].B[c - 1] = m);
    W([], l, v => {
      v = Jb(p, [v[0], null].concat(v.slice(1)), null, g, h, f);
      void 0 === r[a].B ? (v.F = c - 1, r[a] = v) : r[a].B[c - 1] = v;
      if (n.i.M) {
        for (let w of n.i.M) {
          w.constructor.hasOwnProperty(a) || (w.constructor[a] = v);
        }
      }
      return [];
    });
    return [];
  });
}, _embind_register_class_constructor:(b, a, c, d, e, g) => {
  k(a > 0);
  var h = Lb(a, c);
  e = T(d, e);
  W([], [b], f => {
    f = f[0];
    var l = `constructor ${f.name}`;
    void 0 === f.i.I && (f.i.I = []);
    if (void 0 !== f.i.I[a - 1]) {
      throw new Q(`Cannot register multiple constructors with identical number of parameters (${a - 1}) for class '${f.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
    }
    f.i.I[a - 1] = () => {
      V(`Cannot construct ${f.name} due to unbound types`, h);
    };
    W([], h, n => {
      n.splice(1, 0, null);
      f.i.I[a - 1] = Jb(l, n, null, e, g);
      return [];
    });
    return [];
  });
}, _embind_register_class_function:(b, a, c, d, e, g, h, f, l) => {
  var n = Lb(c, d);
  a = L(a);
  a = Mb(a);
  g = T(e, g, l);
  W([], [b], m => {
    function p() {
      V(`Cannot call ${r} due to unbound types`, n);
    }
    m = m[0];
    var r = `${m.name}.${a}`;
    a.startsWith("@@") && (a = Symbol[a.substring(2)]);
    f && m.i.ha.push(a);
    var v = m.i.G, w = v[a];
    void 0 === w || void 0 === w.B && w.className !== m.name && w.F === c - 2 ? (p.F = c - 2, p.className = m.name, v[a] = p) : (pb(v, a, r), v[a].B[c - 2] = p);
    W([], n, C => {
      C = Jb(r, C, m, g, h, l);
      void 0 === v[a].B ? (C.F = c - 2, v[a] = C) : v[a].B[c - 2] = C;
      return [];
    });
    return [];
  });
}, _embind_register_class_property:(b, a, c, d, e, g, h, f, l, n) => {
  a = L(a);
  e = T(d, e);
  W([], [b], m => {
    m = m[0];
    var p = `${m.name}.${a}`, r = {get() {
      V(`Cannot access ${p} due to unbound types`, [c, h]);
    }, enumerable:!0, configurable:!0};
    r.set = l ? () => V(`Cannot access ${p} due to unbound types`, [c, h]) : () => {
      throw new Q(p + " is a read-only property");
    };
    Object.defineProperty(m.i.G, a, r);
    W([], l ? [c, h] : [c], v => {
      var w = v[0], C = {get() {
        var O = Nb(this, m, p + " getter");
        return w.l(e(g, O));
      }, enumerable:!0};
      if (l) {
        l = T(f, l);
        var N = v[1];
        C.set = function(O) {
          var E = Nb(this, m, p + " setter"), K = [];
          l(n, E, N.o(K, O));
          Fb(K);
        };
      }
      Object.defineProperty(m.i.G, a, C);
      return [];
    });
    return [];
  });
}, _embind_register_emval:b => R(b, Sb), _embind_register_enum:(b, a, c, d, e) => {
  a = L(a);
  e = e ? e === 1 ? "number" : "string" : "object";
  switch(e) {
    case "object":
      function h() {
      }h.values = {};
      R(b, {name:a, constructor:h, valueType:e, l:function(f) {
        return this.constructor.values[f];
      }, o:(f, l) => l.value, C:Tb(a, c, d), v:null});
      qb(a, h);
      break;
    case "number":
      var g = {};
      R(b, {name:a, R:g, valueType:e, l:f => f, o:(f, l) => l, C:Tb(a, c, d), v:null});
      qb(a, g);
      delete Module[a].F;
      break;
    case "string":
      g = {}, R(b, {name:a, Y:{}, X:{}, R:g, valueType:e, l:function(f) {
        return this.X[f];
      }, o:function(f, l) {
        return this.Y[l];
      }, C:Tb(a, c, d), v:null}), qb(a, g), delete Module[a].F;
  }
}, _embind_register_enum_value:(b, a, c) => {
  var d = Ub(b, "enum");
  a = L(a);
  switch(d.valueType) {
    case "object":
      b = d.constructor;
      d = Object.create(d.constructor.prototype, {value:{value:c}, constructor:{value:ob(`${d.name}_${a}`, function() {
      })}});
      b.values[c] = d;
      b[a] = d;
      break;
    case "number":
      d.R[a] = c;
      break;
    case "string":
      d.Y[a] = c, d.X[c] = a, d.R[a] = a;
  }
}, _embind_register_float:(b, a, c) => {
  a = L(a);
  R(b, {name:a, l:d => d, o:(d, e) => {
    if (typeof e !== "number" && typeof e !== "boolean") {
      throw new TypeError(`Cannot convert ${S(e)} to ${a}`);
    }
    return e;
  }, C:Vb(a, c), v:null});
}, _embind_register_integer:(b, a, c, d, e) => {
  a = L(a);
  var g = f => f;
  if (d === 0) {
    var h = 32 - 8 * c;
    g = f => f << h >>> h;
    e = g(e);
  }
  R(b, {name:a, l:g, o:(f, l) => {
    if (typeof l !== "number" && typeof l !== "boolean") {
      throw new TypeError(`Cannot convert "${S(l)}" to ${a}`);
    }
    ab(a, l, d, e);
    return l;
  }, C:$a(a, c, d !== 0), v:null});
}, _embind_register_iterable:(b, a, c, d) => {
  c = L(c);
  d = L(d);
  W([], [b, a], e => {
    Wb(e[0].i.G, c, d);
    return [];
  });
}, _embind_register_memory_view:(b, a, c) => {
  function d(g) {
    return new e(A.buffer, z[g + 4 >> 2], z[g >> 2]);
  }
  var e = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array][a];
  c = L(c);
  R(b, {name:c, l:d, C:d}, {ea:!0});
}, _embind_register_optional:b => {
  R(b, Xb);
}, _embind_register_std_string:(b, a) => {
  a = L(a);
  R(b, {name:a, l(c) {
    var d = J(c + 4, z[c >> 2], !0);
    U(c);
    return d;
  }, o(c, d) {
    d instanceof ArrayBuffer && (d = new Uint8Array(d));
    var e = typeof d === "string";
    if (!(e || ArrayBuffer.isView(d) && d.BYTES_PER_ELEMENT == 1)) {
      throw new Q("Cannot pass non-string to std::string");
    }
    var g = e ? Yb(d) : d.length;
    var h = qc(4 + g + 1), f = h + 4;
    z[h >> 2] = g;
    e ? Y(d, f, g + 1) : B.set(d, f);
    c !== null && c.push(U, h);
    return h;
  }, C:yb, v(c) {
    U(c);
  }});
}, _embind_register_std_wstring:(b, a, c) => {
  c = L(c);
  if (a === 2) {
    var d = $b;
    var e = ac;
    var g = bc;
  } else {
    k(a === 4, "only 2-byte and 4-byte strings are currently supported"), d = cc, e = dc, g = ec;
  }
  R(b, {name:c, l:h => {
    var f = d(h + 4, z[h >> 2] * a, !0);
    U(h);
    return f;
  }, o:(h, f) => {
    if (typeof f !== "string") {
      throw new Q(`Cannot pass non-string to C++ string type ${c}`);
    }
    var l = g(f), n = qc(4 + l + a);
    z[n >> 2] = l / a;
    e(f, n + 4, l + a);
    h !== null && h.push(U, n);
    return n;
  }, C:yb, v(h) {
    U(h);
  }});
}, _embind_register_void:(b, a) => {
  a = L(a);
  R(b, {V:!0, name:a, l:() => {
  }, o:() => {
  }});
}, _emval_create_invoker:(b, a, c) => {
  var d;
  [a, ...d] = ic(b, a);
  var e = a.o.bind(a), g = d.map(l => l.C.bind(l));
  b--;
  var h = {toValue:Rb};
  b = g.map((l, n) => {
    var m = `argFromPtr${n}`;
    h[m] = l;
    return `${m}(args${n ? "+" + n * 8 : ""})`;
  });
  switch(c) {
    case 0:
      var f = "toValue(handle)";
      break;
    case 2:
      f = "new (toValue(handle))";
      break;
    case 3:
      f = "";
      break;
    case 1:
      h.getStringOrSymbol = lc, f = "toValue(handle)[getStringOrSymbol(methodName)]";
  }
  f += `(${b})`;
  a.V || (h.toReturnWire = e, h.emval_returnValue = jc, f = `return emval_returnValue(toReturnWire, destructorsRef, ${f})`);
  f = `return function (handle, methodName, destructorsRef, args) {
${f}
}`;
  c = (new Function(Object.keys(h), f))(...Object.values(h));
  a = `methodCaller<(${d.map(l => l.name)}) => ${a.name}>`;
  return hc(ob(a, c));
}, _emval_decref:Qb, _emval_incref:b => {
  b > 9 && (X[b + 1] += 1);
}, _emval_invoke:(b, a, c, d, e) => fc[b](a, c, d, e), _emval_run_destructors:b => {
  var a = Rb(b);
  Fb(a);
  Qb(b);
}, _tzset_js:(b, a, c, d) => {
  var e = (new Date()).getFullYear(), g = (new Date(e, 0, 1)).getTimezoneOffset();
  e = (new Date(e, 6, 1)).getTimezoneOffset();
  z[b >> 2] = Math.max(g, e) * 60;
  F[a >> 2] = Number(g != e);
  a = h => {
    var f = Math.abs(h);
    return `UTC${h >= 0 ? "-" : "+"}${String(Math.floor(f / 60)).padStart(2, "0")}${String(f % 60).padStart(2, "0")}`;
  };
  b = a(g);
  a = a(e);
  k(b);
  k(a);
  k(Yb(b) <= 16, `timezone name truncated to fit in TZNAME_MAX (${b})`);
  k(Yb(a) <= 16, `timezone name truncated to fit in TZNAME_MAX (${a})`);
  e < g ? (Y(b, c, 17), Y(a, d, 17)) : (Y(b, d, 17), Y(a, c, 17));
}, clock_time_get:function(b, a, c) {
  if (!(b >= 0 && b <= 3)) {
    return 28;
  }
  Aa[c >> 3] = BigInt(Math.round((b === 0 ? Date.now() : performance.now()) * 1E6));
  return 0;
}, emscripten_resize_heap:b => {
  var a = B.length;
  b >>>= 0;
  k(b > a);
  if (b > 2147483648) {
    return q(`Cannot enlarge memory, requested ${b} bytes, but the limit is 2147483648 bytes!`), !1;
  }
  for (var c = 1; c <= 4; c *= 2) {
    var d = a * (1 + 0.2 / c);
    d = Math.min(d, b + 100663296);
    var e = Math, g = e.min;
    d = Math.max(b, d);
    k(65536, "alignment argument is required");
    e = g.call(e, 2147483648, Math.ceil(d / 65536) * 65536);
    a: {
      g = e;
      d = wa.buffer.byteLength;
      try {
        wa.grow((g - d + 65535) / 65536 | 0);
        va();
        var h = 1;
        break a;
      } catch (f) {
        q(`growMemory: Attempted to grow heap from ${d} bytes to ${g} bytes, but got error: ${f}`);
      }
      h = void 0;
    }
    if (h) {
      return !0;
    }
  }
  q(`Failed to grow the heap from ${a} bytes to ${e} bytes, not enough memory!`);
  return !1;
}, environ_get:(b, a) => {
  var c = 0, d = 0, e;
  for (e of oc()) {
    var g = a + c;
    z[b + d >> 2] = g;
    c += Y(e, g, Infinity) + 1;
    d += 4;
  }
  return 0;
}, environ_sizes_get:(b, a) => {
  var c = oc();
  z[b >> 2] = c.length;
  b = 0;
  for (var d of c) {
    b += Yb(d) + 1;
  }
  z[a >> 2] = b;
  return 0;
}, fd_close:() => {
  u("fd_close called without SYSCALLS_REQUIRE_FILESYSTEM");
}, fd_seek:function() {
  return 70;
}, fd_write:(b, a, c, d) => {
  for (var e = 0, g = 0; g < c; g++) {
    var h = z[a >> 2], f = z[a + 4 >> 2];
    a += 8;
    for (var l = 0; l < f; l++) {
      var n = b, m = B[h + l], p = pc[n];
      k(p);
      m && m !== 10 ? p.push(m) : ((n === 1 ? ka : q)(Sa(p)), p.length = 0);
    }
    e += f;
  }
  z[d >> 2] = e;
  return 0;
}}, xc, yc;
yc = await (async function() {
  function b(e) {
    e = yc = e.exports;
    var g = {};
    for (f in e) {
      var h = e[f];
      g[f] = typeof h === "function" ? Ja(h) : h;
    }
    var f = yc = g;
    k(typeof f.__getTypeName !== "undefined", "missing Wasm export: __getTypeName");
    k(typeof f.malloc !== "undefined", "missing Wasm export: malloc");
    k(typeof f.free !== "undefined", "missing Wasm export: free");
    k(typeof f.fflush !== "undefined", "missing Wasm export: fflush");
    k(typeof f.__funcs_on_exit !== "undefined", "missing Wasm export: __funcs_on_exit");
    k(typeof f.emscripten_stack_get_end !== "undefined", "missing Wasm export: emscripten_stack_get_end");
    k(typeof f.emscripten_stack_get_base !== "undefined", "missing Wasm export: emscripten_stack_get_base");
    k(typeof f.__trap !== "undefined", "missing Wasm export: __trap");
    k(typeof f.emscripten_stack_init !== "undefined", "missing Wasm export: emscripten_stack_init");
    k(typeof f.emscripten_stack_get_free !== "undefined", "missing Wasm export: emscripten_stack_get_free");
    k(typeof f._emscripten_stack_restore !== "undefined", "missing Wasm export: _emscripten_stack_restore");
    k(typeof f._emscripten_stack_alloc !== "undefined", "missing Wasm export: _emscripten_stack_alloc");
    k(typeof f.emscripten_stack_get_current !== "undefined", "missing Wasm export: emscripten_stack_get_current");
    k(typeof f.__cxa_decrement_exception_refcount !== "undefined", "missing Wasm export: __cxa_decrement_exception_refcount");
    k(typeof f.__cxa_increment_exception_refcount !== "undefined", "missing Wasm export: __cxa_increment_exception_refcount");
    k(typeof f.__thrown_object_from_unwind_exception !== "undefined", "missing Wasm export: __thrown_object_from_unwind_exception");
    k(typeof f.__get_exception_message !== "undefined", "missing Wasm export: __get_exception_message");
    k(typeof f.memory !== "undefined", "missing Wasm export: memory");
    k(typeof f.__indirect_function_table !== "undefined", "missing Wasm export: __indirect_function_table");
    k(typeof f.__cpp_exception !== "undefined", "missing Wasm export: __cpp_exception");
    Db = G("__getTypeName", f.__getTypeName, 1);
    qc = G("malloc", f.malloc, 1);
    U = G("free", f.free, 1);
    G("fflush", f.fflush, 1);
    G("__funcs_on_exit", f.__funcs_on_exit, 0);
    qa = f.emscripten_stack_get_end;
    Ga = f.__trap;
    rc = f.emscripten_stack_init;
    Va = f._emscripten_stack_restore;
    sc = f._emscripten_stack_alloc;
    Ta = f.emscripten_stack_get_current;
    G("__cxa_decrement_exception_refcount", f.__cxa_decrement_exception_refcount, 1);
    G("__cxa_increment_exception_refcount", f.__cxa_increment_exception_refcount, 1);
    tc = G("__thrown_object_from_unwind_exception", f.__thrown_object_from_unwind_exception, 1);
    uc = G("__get_exception_message", f.__get_exception_message, 3);
    wa = f.memory;
    H = f.__indirect_function_table;
    vc = f.__cpp_exception;
    va();
    Ka();
    return yc;
  }
  var a = Module, c = {env:wc, wasi_snapshot_preview1:wc}, d = Module.instantiateWasm;
  if (d) {
    return new Promise(e => {
      try {
        d(c, g => e(b(g)));
      } catch (g) {
        throw q(`Module.instantiateWasm callback failed with error: ${g}`), g;
      }
    });
  }
  La ??= Module.locateFile ? Module.locateFile ? Module.locateFile("libavoid.wasm", ha) : ha + "libavoid.wasm" : (new URL("libavoid.wasm", import.meta.url)).href;
  return function(e) {
    k(Module === a, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
    a = null;
    return b(e.instance);
  }(await Oa(c));
}());
await (async function() {
  k(!xc);
  xc = !0;
  rc();
  pa();
  Ca();
  var b = Module.setStatus;
  b && (b("Running..."), await new Promise(a => setTimeout(a, 1)), setTimeout(b, 1, ""));
  t || (k(!ua), ua = !0, sa(), yc.__wasm_call_ctors(), sa(), Module.onRuntimeInitialized?.(), na("onRuntimeInitialized"), k(!Module._main, 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'), Ea());
}());
for (let b of Object.keys(Module)) {
  b in moduleArg || Object.defineProperty(moduleArg, b, {configurable:!0, get() {
    u(`Access to module property ('${b}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`);
  }});
}



  return Module;
}

// Export using a UMD style export, or ES6 exports if selected
export default initAvoidModule;

