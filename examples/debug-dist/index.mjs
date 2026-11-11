// examples/debug-src/generated/libavoid.js
async function initAvoidModule(moduleArg = {}) {
  var moduleRtn;
  (function() {
    function b(d) {
      d = d.split("-")[0];
      for (d = d.split(".").slice(0, 3); 3 > d.length; ) {
        d.push("00");
      }
      d = d.map((e) => e.padStart(2, "0"));
      return d.join("");
    }
    var a = "undefined" !== typeof process && process.W?.node ? b(process.W.node) : 2147483647;
    if (2147483647 > a) {
      throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
    }
    if (2147483647 > a) {
      throw Error(`This emscripten-generated code requires node v${"214748.36.47"} (detected v${[a / 1e4 | 0, (a / 100 | 0) % 100, a % 100].join(".")})`);
    }
    if (a = "undefined" !== typeof navigator && navigator.userAgent) {
      var c = a.includes("Safari/") && !a.includes("Chrome/") && a.match(/Version\/(\d+\.?\d*\.?\d*)/) ? b(a.match(/Version\/(\d+\.?\d*\.?\d*)/)[1]) : 2147483647;
      if (150200 > c) {
        throw Error(`This emscripten-generated code requires Safari v${"15.2.0"} (detected v${c})`);
      }
      c = a.match(/Firefox\/(\d+(?:\.\d+)?)/) ? parseFloat(a.match(/Firefox\/(\d+(?:\.\d+)?)/)[1]) : 2147483647;
      if (100 > c) {
        throw Error(`This emscripten-generated code requires Firefox v100 (detected v${c})`);
      }
      a = a.match(/Chrome\/(\d+(?:\.\d+)?)/) ? parseFloat(a.match(/Chrome\/(\d+(?:\.\d+)?)/)[1]) : 2147483647;
      if (95 > a) {
        throw Error(`This emscripten-generated code requires Chrome v95 (detected v${a})`);
      }
    }
  })();
  var k = moduleArg, aa = !!globalThis.window, ba = !!globalThis.WorkerGlobalScope, ca = globalThis.$?.W?.node && "renderer" != globalThis.$?.type, da = !aa && !ca && !ba, ea = "./this.program", fa = import.meta.url, ha = "", ia;
  if (!da) {
    if (aa || ba) {
      try {
        ha = new URL(".", fa).href;
      } catch {
      }
      if (!globalThis.window && !globalThis.WorkerGlobalScope) {
        throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
      }
      ia = async (b) => {
        m(!ja(b), "readAsync does not work with file:// URLs");
        b = await fetch(b, { credentials: "same-origin" });
        if (b.ok) {
          return b.arrayBuffer();
        }
        throw Error(b.status + " : " + b.url);
      };
    } else {
      throw Error("environment detection error");
    }
  }
  var ka = console.log.bind(console), p = console.error.bind(console);
  m(!ba, "worker environment detected but not enabled at build time (add `worker` to `-sENVIRONMENT` to enable)");
  m(!ca, "node environment detected but not enabled at build time (add `node` to `-sENVIRONMENT` to enable)");
  m(!da, "shell environment detected but not enabled at build time (add `shell` to `-sENVIRONMENT` to enable)");
  var t;
  globalThis.WebAssembly || p("no native wasm support detected");
  var la = false;
  function m(b, a) {
    b || w("Assertion failed" + (a ? ": " + a : ""));
  }
  var ja = (b) => b.startsWith("file://");
  function ma() {
    var b = na();
    m(0 == (b & 3));
    0 == b && (b += 4);
    y[b >> 2] = 34821223;
    y[b + 4 >> 2] = 2310721022;
    y[0] = 1668509029;
  }
  function oa() {
    if (!la) {
      var b = na();
      0 == b && (b += 4);
      var a = y[b >> 2], c = y[b + 4 >> 2];
      34821223 == a && 2310721022 == c || w(`Stack overflow! Stack cookie has been overwritten at ${z(b)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${z(c)} ${z(a)}`);
      1668509029 != y[0] && w("Runtime error: The application has corrupted its heap memory area (address zero)!");
    }
  }
  var pa = new Int16Array(1), qa = new Int8Array(pa.buffer);
  pa[0] = 25459;
  115 === qa[0] && 99 === qa[1] || w("Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)");
  function ra(b) {
    Object.getOwnPropertyDescriptor(k, b) || Object.defineProperty(k, b, { configurable: true, set() {
      w(`Attempt to set \`Module.${b}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`);
    } });
  }
  function A(b) {
    return () => m(false, `call to '${b}' via reference taken before Wasm module initialization`);
  }
  function B(b) {
    Object.getOwnPropertyDescriptor(k, b) && w(`\`Module.${b}\` was supplied but \`${b}\` not included in INCOMING_MODULE_JS_API`);
  }
  function sa(b) {
    Object.getOwnPropertyDescriptor(k, b) || Object.defineProperty(k, b, { configurable: true, get() {
      var a = `'${b}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
      "FS_createPath" !== b && "FS_createDataFile" !== b && "FS_createPreloadedFile" !== b && "FS_preloadFile" !== b && "FS_unlink" !== b && "addRunDependency" !== b && "FS_createLazyFile" !== b && "FS_createDevice" !== b && "removeRunDependency" !== b || (a += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you");
      w(a);
    } });
  }
  var ta, ua, va = false;
  function wa() {
    var b = xa.buffer;
    ya = new Int8Array(b);
    za = new Int16Array(b);
    D = new Uint8Array(b);
    F = new Uint16Array(b);
    G = new Int32Array(b);
    y = new Uint32Array(b);
    Aa = new Float32Array(b);
    Ba = new Float64Array(b);
    Ca = new BigInt64Array(b);
    Da = new BigUint64Array(b);
  }
  m(globalThis.Int32Array && globalThis.Float64Array && Int32Array.prototype.subarray && Int32Array.prototype.set, "JS engine does not provide full typed array support");
  function w(b) {
    k.onAbort?.(b);
    b = `Aborted(${b})`;
    p(b);
    la = true;
    va && Ea();
    b = new WebAssembly.RuntimeError(b);
    ua?.(b);
    throw b;
  }
  function Fa() {
    w("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM");
  }
  function Ga(b, a) {
    return (...c) => {
      m(va, `native function \`${b}\` called before runtime initialization`);
      m(true, `native function \`${b}\` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)`);
      var d = H[b];
      m(d, `exported native function \`${b}\` not found`);
      m(c.length <= a, `native function \`${b}\` called with ${c.length} args but expects ${a}`);
      return d(...c);
    };
  }
  var Ha = 0;
  function Ia(b) {
    return (...a) => {
      if (la) {
        throw Error("program has already aborted!");
      }
      Ha++;
      try {
        return b(...a);
      } catch (c) {
        if (la || 1 < Ha || "unwind" === c) {
          throw c;
        }
        w("unhandled exception: " + [c, c.stack]);
      } finally {
        Ha--;
      }
    };
  }
  function Ja() {
    var b = I.get, a = {};
    I.get = (c) => {
      var d = b.call(I, c), e = a[c];
      e && e.Z === d || (e = a[c] = { Z: d, ja: Ia(d) });
      return e.ja;
    };
  }
  var Ka;
  async function La(b) {
    if (!t) {
      try {
        var a = await ia(b);
        return new Uint8Array(a);
      } catch {
      }
    }
    if (b == Ka && t) {
      b = new Uint8Array(t);
    } else {
      throw "both async and sync fetching of the wasm failed";
    }
    return b;
  }
  async function Ma(b, a) {
    try {
      var c = await La(b);
      return await WebAssembly.instantiate(c, a);
    } catch (d) {
      p(`failed to asynchronously prepare wasm: ${d}`), ja(b) && p(`warning: Loading from a file URI (${b}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`), w(d);
    }
  }
  async function Na(b) {
    var a = Ka;
    if (!t) {
      try {
        var c = fetch(a, { credentials: "same-origin" });
        return await WebAssembly.instantiateStreaming(c, b);
      } catch (d) {
        p(`wasm streaming compile failed: ${d}`), p("falling back to ArrayBuffer instantiation");
      }
    }
    return Ma(a, b);
  }
  var za, G, Ca, ya, Aa, Ba, F, y, Da, D, Oa = (b) => {
    for (; 0 < b.length; ) {
      b.shift()(k);
    }
  }, Qa = [], Ra = [], Sa = () => {
    var b = k.preRun.shift();
    Ra.push(b);
  };
  function z(b) {
    m("number" === typeof b, `ptrToString expects a number, got ${typeof b}`);
    return "0x" + (b >>> 0).toString(16).padStart(8, "0");
  }
  var K = (b) => {
    K.P || (K.P = {});
    K.P[b] || (K.P[b] = 1, p(b));
  }, Ta = globalThis.TextDecoder && new TextDecoder(), Ua = (b, a, c, d) => {
    c = a + c;
    if (d) {
      return c;
    }
    for (; b[a] && !(a >= c); ) {
      ++a;
    }
    return a;
  }, Va = (b, a = 0, c, d) => {
    c = Ua(b, a, c, d);
    if (16 < c - a && b.buffer && Ta) {
      return Ta.decode(b.subarray(a, c));
    }
    for (d = ""; a < c; ) {
      var e = b[a++];
      if (e & 128) {
        var g = b[a++] & 63;
        if (192 == (e & 224)) {
          d += String.fromCharCode((e & 31) << 6 | g);
        } else {
          var f = b[a++] & 63;
          224 == (e & 240) ? e = (e & 15) << 12 | g << 6 | f : (240 != (e & 248) && K(`Invalid UTF-8 leading byte ${z(e)} encountered when deserializing a UTF-8 string in wasm memory to a JS string!`), e = (e & 7) << 18 | g << 12 | f << 6 | b[a++] & 63);
          65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023));
        }
      } else {
        d += String.fromCharCode(e);
      }
    }
    return d;
  }, L = (b, a, c) => {
    m("number" == typeof b, `UTF8ToString expects a number (got ${typeof b})`);
    return b ? Va(D, b, a, c) : "";
  }, M = (b) => {
    for (var a = ""; ; ) {
      var c = D[b++];
      if (!c) {
        return a;
      }
      a += String.fromCharCode(c);
    }
  }, P = {}, Q = {}, Wa = {}, R = class extends Error {
    constructor(b) {
      super(b);
      this.name = "BindingError";
    }
  }, Xa = (b) => {
    throw new R(b);
  };
  function Ya(b, a, c = {}) {
    var d = a.name;
    if (!b) {
      throw new R(`type "${d}" must have a positive integer typeid pointer`);
    }
    if (Q.hasOwnProperty(b)) {
      if (c.ca) {
        return;
      }
      throw new R(`Cannot register type '${d}' twice`);
    }
    Q[b] = a;
    delete Wa[b];
    P.hasOwnProperty(b) && (a = P[b], delete P[b], a.forEach((e) => e()));
  }
  function S(b, a, c = {}) {
    return Ya(b, a, c);
  }
  var Za = (b, a, c) => {
    switch (a) {
      case 1:
        return c ? (d) => ya[d] : (d) => D[d];
      case 2:
        return c ? (d) => za[d >> 1] : (d) => F[d >> 1];
      case 4:
        return c ? (d) => G[d >> 2] : (d) => y[d >> 2];
      case 8:
        return c ? (d) => Ca[d >> 3] : (d) => Da[d >> 3];
      default:
        throw new TypeError(`invalid integer width (${a}): ${b}`);
    }
  }, T = (b) => {
    if (null === b) {
      return "null";
    }
    var a = typeof b;
    return "object" === a || "array" === a || "function" === a ? b.toString() : "" + b;
  }, $a = (b, a, c, d) => {
    if (a < c || a > d) {
      throw new TypeError(`Passing a number "${T(a)}" from JS side to C/C++ side to an argument of type "${b}", which is outside the valid range [${c}, ${d}]!`);
    }
  }, ab = (b) => {
    throw new R(b.g.l.h.name + " instance already deleted");
  }, bb = false, cb = () => {
  }, db = (b, a, c) => {
    if (a === c) {
      return b;
    }
    if (void 0 === c.u) {
      return null;
    }
    b = db(b, a, c.u);
    return null === b ? null : c.Y(b);
  }, eb = {}, fb = {}, gb = (b, a) => {
    if (void 0 === a) {
      throw new R("ptr should not be undefined");
    }
    for (; b.u; ) {
      a = b.J(a), b = b.u;
    }
    return fb[a];
  }, hb = class extends Error {
    constructor(b) {
      super(b);
      this.name = "InternalError";
    }
  }, jb = (b, a) => {
    if (!a.l || !a.i) {
      throw new hb("makeClassHandle requires ptr and ptrType");
    }
    if (!!a.B !== !!a.o) {
      throw new hb("Both smartPtrType and smartPtr must be specified");
    }
    a.count = { value: 1 };
    return ib(Object.create(b, { g: { value: a, writable: true } }));
  };
  function kb(b) {
    function a() {
      return this.M ? jb(this.h.D, { l: this.ea, i: c, B: this, o: b }) : jb(this.h.D, { l: this, i: b });
    }
    var c = this.ba(b);
    if (!c) {
      return this.R(b), null;
    }
    var d = gb(this.h, c);
    if (void 0 !== d) {
      if (0 === d.g.count.value) {
        return d.g.i = c, d.g.o = b, d.clone();
      }
      d = d.clone();
      this.R(b);
      return d;
    }
    d = this.h.aa(c);
    d = eb[d];
    if (!d) {
      return a.call(this);
    }
    d = this.L ? d.X : d.pointerType;
    var e = db(c, this.h, d.h);
    return null === e ? a.call(this) : this.M ? jb(d.h.D, { l: d, i: e, B: this, o: b }) : jb(d.h.D, { l: d, i: e });
  }
  var ib = (b) => {
    if (!globalThis.FinalizationRegistry) {
      return ib = (a) => a, b;
    }
    bb = new FinalizationRegistry((a) => {
      console.warn(a.da);
      a = a.g;
      --a.count.value;
      0 === a.count.value && (a.o ? a.B.F(a.o) : a.l.h.F(a.i));
    });
    ib = (a) => {
      var c = a.g;
      if (c.o) {
        var d = { g: c };
        c = Error(`Embind found a leaked C++ instance ${c.l.h.name} <${z(c.i)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);
        "captureStackTrace" in Error && Error.captureStackTrace(c, kb);
        d.da = c.stack.replace(/^Error: /, "");
        bb.register(a, d, a);
      }
      return a;
    };
    cb = (a) => {
      bb.unregister(a);
    };
    return ib(b);
  }, lb = [];
  function mb() {
  }
  var nb = (b, a) => Object.defineProperty(a, "name", { value: b }), ob = (b, a, c) => {
    if (void 0 === b[a].v) {
      var d = b[a];
      b[a] = function(...e) {
        if (!b[a].v.hasOwnProperty(e.length)) {
          throw new R(`Function '${c}' called with an invalid number of arguments (${e.length}) - expects one of (${b[a].v})!`);
        }
        return b[a].v[e.length].apply(this, e);
      };
      b[a].v = [];
      b[a].v[d.C] = d;
    }
  }, pb = (b, a) => {
    if (k.hasOwnProperty(b)) {
      throw new R(`Cannot register public name '${b}' twice`);
    }
    k[b] = a;
    k[b].C = void 0;
  }, qb = (b) => {
    m("string" === typeof b);
    b = b.replace(/[^a-zA-Z0-9_]/g, "$");
    var a = b.charCodeAt(0);
    return 48 <= a && 57 >= a ? `_${b}` : b;
  };
  function rb(b, a, c, d, e, g, f, h) {
    this.name = b;
    this.constructor = a;
    this.D = c;
    this.F = d;
    this.u = e;
    this.aa = g;
    this.J = f;
    this.Y = h;
    this.fa = [];
  }
  var sb = (b, a, c) => {
    for (; a !== c; ) {
      if (!a.J) {
        throw new R(`Expected null or instance of ${c.name}, got an instance of ${a.name}`);
      }
      b = a.J(b);
      a = a.u;
    }
    return b;
  };
  function tb(b, a) {
    if (null === a) {
      if (this.N) {
        throw new R(`null is not a valid ${this.name}`);
      }
      return 0;
    }
    if (!a.g) {
      throw new R(`Cannot pass "${T(a)}" as a ${this.name}`);
    }
    if (!a.g.i) {
      throw new R(`Cannot pass deleted object as a pointer of type ${this.name}`);
    }
    return sb(a.g.i, a.g.l.h, this.h);
  }
  function ub(b, a) {
    if (null === a) {
      if (this.N) {
        throw new R(`null is not a valid ${this.name}`);
      }
      if (this.M) {
        var c = this.ga();
        null !== b && b.push(this.F, c);
        return c;
      }
      return 0;
    }
    if (!a || !a.g) {
      throw new R(`Cannot pass "${T(a)}" as a ${this.name}`);
    }
    if (!a.g.i) {
      throw new R(`Cannot pass deleted object as a pointer of type ${this.name}`);
    }
    if (!this.L && a.g.l.L) {
      throw new R(`Cannot convert argument of type ${a.g.B ? a.g.B.name : a.g.l.name} to parameter type ${this.name}`);
    }
    c = sb(a.g.i, a.g.l.h, this.h);
    if (this.M) {
      if (void 0 === a.g.o) {
        throw new R("Passing raw pointer to smart pointer is illegal");
      }
      switch (this.ia) {
        case 0:
          if (a.g.B === this) {
            c = a.g.o;
          } else {
            throw new R(`Cannot convert argument of type ${a.g.B ? a.g.B.name : a.g.l.name} to parameter type ${this.name}`);
          }
          break;
        case 1:
          c = a.g.o;
          break;
        case 2:
          if (a.g.B === this) {
            c = a.g.o;
          } else {
            var d = a.clone();
            c = this.ha(c, vb(() => d["delete"]()));
            null !== b && b.push(this.F, c);
          }
          break;
        default:
          throw new R("Unsupported sharing policy");
      }
    }
    return c;
  }
  function wb(b, a) {
    if (null === a) {
      if (this.N) {
        throw new R(`null is not a valid ${this.name}`);
      }
      return 0;
    }
    if (!a.g) {
      throw new R(`Cannot pass "${T(a)}" as a ${this.name}`);
    }
    if (!a.g.i) {
      throw new R(`Cannot pass deleted object as a pointer of type ${this.name}`);
    }
    if (a.g.l.L) {
      throw new R(`Cannot convert argument of type ${a.g.l.name} to parameter type ${this.name}`);
    }
    return sb(a.g.i, a.g.l.h, this.h);
  }
  function xb(b) {
    return this.j(y[b >> 2]);
  }
  function yb(b, a, c, d, e, g, f, h, l, r, n) {
    this.name = b;
    this.h = a;
    this.N = c;
    this.L = d;
    this.M = e;
    this.ea = g;
    this.ia = f;
    this.T = h;
    this.ga = l;
    this.ha = r;
    this.F = n;
    e || void 0 !== a.u ? this.m = ub : (this.m = d ? tb : wb, this.s = null);
  }
  var zb = (b, a) => {
    if (!k.hasOwnProperty(b)) {
      throw new hb("Replacing nonexistent public symbol");
    }
    k[b] = a;
    k[b].C = void 0;
  }, Ab = [], U = (b, a, c = false) => {
    m(!c, "async bindings are only supported with JSPI");
    b = M(b);
    (c = Ab[a]) || (Ab[a] = c = I.get(a));
    m(I.get(a) == c, "table mirror is out of date");
    if ("function" != typeof c) {
      throw new R(`unknown function pointer with signature ${b}: ${a}`);
    }
    return c;
  };
  class Bb extends Error {
  }
  var Db = (b) => {
    b = Cb(b);
    var a = M(b);
    V(b);
    return a;
  }, W = (b, a) => {
    function c(g) {
      e[g] || Q[g] || (Wa[g] ? Wa[g].forEach(c) : (d.push(g), e[g] = true));
    }
    var d = [], e = {};
    a.forEach(c);
    throw new Bb(`${b}: ` + d.map(Db).join([", "]));
  }, X = (b, a, c) => {
    function d(h) {
      h = c(h);
      if (h.length !== b.length) {
        throw new hb("Mismatched type converter count");
      }
      for (var l = 0; l < b.length; ++l) {
        S(b[l], h[l]);
      }
    }
    b.forEach((h) => Wa[h] = a);
    var e = Array(a.length), g = [], f = 0;
    for (let [h, l] of a.entries()) {
      Q.hasOwnProperty(l) ? e[h] = Q[l] : (g.push(l), P.hasOwnProperty(l) || (P[l] = []), P[l].push(() => {
        e[h] = Q[l];
        ++f;
        f === g.length && d(e);
      }));
    }
    0 === g.length && d(e);
  }, Eb = (b) => {
    for (; b.length; ) {
      var a = b.pop();
      b.pop()(a);
    }
  };
  function Fb(b) {
    for (var a = 1; a < b.length; ++a) {
      if (null !== b[a] && void 0 === b[a].s) {
        return true;
      }
    }
    return false;
  }
  function Gb(b, a, c, d, e) {
    (b < a || b > c) && e(`function ${d} called with ${b} arguments, expected ${a == c ? a : `${a} to ${c}`}`);
  }
  function Hb(b, a, c, d, e, g) {
    var f = a.length;
    if (2 > f) {
      throw new R("argTypes array size mismatch! Must at least get return value and 'this' types!");
    }
    m(!g, "async bindings are only supported with JSPI");
    var h = null !== a[1] && null !== c, l = Fb(a);
    c = !a[0].S;
    var r = f - 2;
    var n = a.length - 2;
    for (var q = a.length - 1; 2 <= q && a[q].optional; --q) {
      n--;
    }
    q = a[0];
    var u = a[1];
    d = [b, Xa, d, e, Eb, q.j.bind(q), u?.m.bind(u)];
    for (e = 2; e < f; ++e) {
      q = a[e], d.push(q.m.bind(q));
    }
    if (!l) {
      for (e = h ? 1 : 2; e < a.length; ++e) {
        null !== a[e].s && d.push(a[e].s);
      }
    }
    d.push(Gb, n, r);
    l = Fb(a);
    r = a.length - 2;
    n = [];
    e = ["fn"];
    h && e.push("thisWired");
    for (f = 0; f < r; ++f) {
      n.push(`arg${f}`), e.push(`arg${f}Wired`);
    }
    n = n.join(",");
    e = e.join(",");
    n = `return function (${n}) {
checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`;
    l && (n += "var destructors = [];\n");
    u = l ? "destructors" : "null";
    q = "humanName throwBindingError invoker fn runDestructors fromRetWire toClassParamWire".split(" ");
    h && (n += `var thisWired = toClassParamWire(${u}, this);
`);
    for (f = 0; f < r; ++f) {
      var v = `toArg${f}Wire`;
      n += `var arg${f}Wired = ${v}(${u}, arg${f});
`;
      q.push(v);
    }
    n += (c || g ? "var rv = " : "") + `invoker(${e});
`;
    if (l) {
      n += "runDestructors(destructors);\n";
    } else {
      for (f = h ? 1 : 2; f < a.length; ++f) {
        g = 1 === f ? "thisWired" : "arg" + (f - 2) + "Wired", null !== a[f].s && (n += `${g}_dtor(${g});
`, q.push(`${g}_dtor`));
      }
    }
    c && (n += "var ret = fromRetWire(rv);\nreturn ret;\n");
    n += "}\n";
    q.push("checkArgCount", "minArgs", "maxArgs");
    n = `if (arguments.length !== ${q.length}){ throw new Error(humanName + "Expected ${q.length} closure arguments " + arguments.length + " given."); }
${n}`;
    a = new Function(q, n)(...d);
    return nb(b, a);
  }
  var Ib = (b, a) => {
    for (var c = [], d = 0; d < b; d++) {
      c.push(y[a + 4 * d >> 2]);
    }
    return c;
  }, Jb = (b) => {
    b = b.trim();
    const a = b.indexOf("(");
    if (-1 === a) {
      return b;
    }
    m(b.endsWith(")"), "Parentheses for argument names should match.");
    return b.slice(0, a);
  }, Kb = (b, a, c) => {
    if (!(b instanceof Object)) {
      throw new R(`${c} with invalid "this": ${b}`);
    }
    if (!(b instanceof a.h.constructor)) {
      throw new R(`${c} incompatible with "this" of type ${b.constructor.name}`);
    }
    if (!b.g.i) {
      throw new R(`cannot call emscripten binding method ${c} on deleted object`);
    }
    return sb(b.g.i, b.g.l.h, a.h);
  }, Lb = [], Y = [0, 1, , 1, null, 1, true, 1, false, 1], Nb = [], Ob = (b) => {
    if (9 < b && 0 === --Y[b + 1]) {
      m(void 0 !== Y[b], "decref for unallocated handle");
      var a = Y[b];
      Y[b] = void 0;
      var c = Nb[b];
      c && (Nb[b] = void 0, c(a));
      Lb.push(b);
    }
  }, Pb = (b) => {
    if (!b) {
      throw new R(`Cannot use deleted val. handle = ${b}`);
    }
    m(2 === b || void 0 !== Y[b] && 0 === b % 2, `invalid handle: ${b}`);
    return Y[b];
  }, vb = (b) => {
    switch (b) {
      case void 0:
        return 2;
      case null:
        return 4;
      case true:
        return 6;
      case false:
        return 8;
      default:
        const a = Lb.pop() || Y.length;
        Y[a] = b;
        Y[a + 1] = 1;
        return a;
    }
  }, Qb = { name: "emscripten::val", j: (b) => {
    var a = Pb(b);
    Ob(b);
    return a;
  }, m: (b, a) => vb(a), A: xb, s: null }, Rb = (b, a, c) => {
    switch (a) {
      case 1:
        return c ? function(d) {
          return this.j(ya[d]);
        } : function(d) {
          return this.j(D[d]);
        };
      case 2:
        return c ? function(d) {
          return this.j(za[d >> 1]);
        } : function(d) {
          return this.j(F[d >> 1]);
        };
      case 4:
        return c ? function(d) {
          return this.j(G[d >> 2]);
        } : function(d) {
          return this.j(y[d >> 2]);
        };
      default:
        throw new TypeError(`invalid integer width (${a}): ${b}`);
    }
  }, Sb = (b, a) => {
    var c = Q[b];
    if (void 0 === c) {
      throw b = `${a} has unknown type ${Db(b)}`, new R(b);
    }
    return c;
  }, Tb = (b, a) => {
    switch (a) {
      case 4:
        return function(c) {
          return this.j(Aa[c >> 2]);
        };
      case 8:
        return function(c) {
          return this.j(Ba[c >> 3]);
        };
      default:
        throw new TypeError(`invalid float width (${a}): ${b}`);
    }
  }, Ub = (b, a, c) => {
    const d = (e, g) => {
      let f = 0;
      return { next() {
        if (f >= e) {
          return { done: true };
        }
        const h = f;
        f++;
        return { value: g(h), done: false };
      }, [Symbol.iterator]() {
        return this;
      } };
    };
    b[Symbol.iterator] || (b[Symbol.iterator] = function() {
      const e = this[a]();
      return d(e, (g) => this[c](g));
    });
  }, Vb = Object.assign({ optional: true }, Qb), Z = (b, a, c) => {
    m("number" == typeof c, "stringToUTF8 requires a third parameter that specifies the length of the output buffer");
    var d = D;
    m("string" === typeof b, `stringToUTF8Array expects a string (got ${typeof b})`);
    if (0 < c) {
      var e = a;
      c = a + c - 1;
      for (var g = 0; g < b.length; ++g) {
        var f = b.codePointAt(g);
        if (127 >= f) {
          if (a >= c) {
            break;
          }
          d[a++] = f;
        } else if (2047 >= f) {
          if (a + 1 >= c) {
            break;
          }
          d[a++] = 192 | f >> 6;
          d[a++] = 128 | f & 63;
        } else if (65535 >= f) {
          if (a + 2 >= c) {
            break;
          }
          d[a++] = 224 | f >> 12;
          d[a++] = 128 | f >> 6 & 63;
          d[a++] = 128 | f & 63;
        } else {
          if (a + 3 >= c) {
            break;
          }
          1114111 < f && K(`Invalid Unicode code point ${z(f)} encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).`);
          d[a++] = 240 | f >> 18;
          d[a++] = 128 | f >> 12 & 63;
          d[a++] = 128 | f >> 6 & 63;
          d[a++] = 128 | f & 63;
          g++;
        }
      }
      d[a] = 0;
      b = a - e;
    } else {
      b = 0;
    }
    return b;
  }, Wb = (b) => {
    for (var a = 0, c = 0; c < b.length; ++c) {
      var d = b.charCodeAt(c);
      127 >= d ? a++ : 2047 >= d ? a += 2 : 55296 <= d && 57343 >= d ? (a += 4, ++c) : a += 3;
    }
    return a;
  }, Xb = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0, Yb = (b, a, c) => {
    m(0 == b % 2, "pointer passed to UTF16ToString must be 2-byte aligned");
    b >>= 1;
    a = Ua(F, b, a / 2, c);
    if (16 < a - b && Xb) {
      return Xb.decode(F.subarray(b, a));
    }
    for (c = ""; b < a; ++b) {
      c += String.fromCharCode(F[b]);
    }
    return c;
  }, Zb = (b, a, c) => {
    m(0 == a % 2, "pointer passed to stringToUTF16 must be 2-byte aligned");
    m("number" == typeof c, "stringToUTF16 requires a third parameter that specifies the length of the output buffer");
    c ??= 2147483647;
    if (2 > c) {
      return 0;
    }
    c -= 2;
    var d = a;
    c = c < 2 * b.length ? c / 2 : b.length;
    for (var e = 0; e < c; ++e) {
      za[a >> 1] = b.charCodeAt(e), a += 2;
    }
    za[a >> 1] = 0;
    return a - d;
  }, $b = (b) => 2 * b.length, ac = (b, a, c) => {
    m(0 == b % 4, "pointer passed to UTF32ToString must be 2-byte aligned");
    var d = "";
    b >>= 2;
    for (var e = 0; !(e >= a / 4); e++) {
      var g = y[b + e];
      if (!g && !c) {
        break;
      }
      d += String.fromCodePoint(g);
    }
    return d;
  }, bc = (b, a, c) => {
    m(0 == a % 4, "pointer passed to stringToUTF32 must be 4-byte aligned");
    m("number" == typeof c, "stringToUTF32 requires a third parameter that specifies the length of the output buffer");
    c ??= 2147483647;
    if (4 > c) {
      return 0;
    }
    var d = a;
    c = d + c - 4;
    for (var e = 0; e < b.length; ++e) {
      var g = b.codePointAt(e);
      65535 < g && e++;
      G[a >> 2] = g;
      a += 4;
      if (a + 4 > c) {
        break;
      }
    }
    G[a >> 2] = 0;
    return a - d;
  }, cc = (b) => {
    for (var a = 0, c = 0; c < b.length; ++c) {
      65535 < b.codePointAt(c) && c++, a += 4;
    }
    return a;
  }, dc = [], ec = (b) => {
    var a = dc.length;
    dc.push(b);
    return a;
  }, fc = (b, a) => {
    for (var c = Array(b), d = 0; d < b; ++d) {
      c[d] = Sb(y[a + 4 * d >> 2], `parameter ${d}`);
    }
    return c;
  }, gc = (b, a, c) => {
    var d = [];
    b = b(d, c);
    d.length && (y[a >> 2] = vb(d));
    return b;
  }, hc = {}, ic = (b) => {
    var a = hc[b];
    return void 0 === a ? M(b) : a;
  }, jc = {}, lc = () => {
    if (!kc) {
      var b = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (globalThis.navigator?.language ?? "C").replace("-", "_") + ".UTF-8", _: ea || "./this.program" }, a;
      for (a in jc) {
        void 0 === jc[a] ? delete b[a] : b[a] = jc[a];
      }
      var c = [];
      for (a in b) {
        c.push(`${a}=${b[a]}`);
      }
      kc = c;
    }
    return kc;
  }, kc, mc = [null, [], []];
  (() => {
    let b = mb.prototype;
    Object.assign(b, { isAliasOf: function(c) {
      if (!(this instanceof mb && c instanceof mb)) {
        return false;
      }
      var d = this.g.l.h, e = this.g.i;
      c.g = c.g;
      var g = c.g.l.h;
      for (c = c.g.i; d.u; ) {
        e = d.J(e), d = d.u;
      }
      for (; g.u; ) {
        c = g.J(c), g = g.u;
      }
      return d === g && e === c;
    }, clone: function() {
      this.g.i || ab(this);
      if (this.g.I) {
        return this.g.count.value += 1, this;
      }
      var c = ib, d = Object, e = d.create, g = Object.getPrototypeOf(this), f = this.g;
      c = c(e.call(d, g, { g: { value: { count: f.count, H: f.H, I: f.I, i: f.i, l: f.l, o: f.o, B: f.B } } }));
      c.g.count.value += 1;
      c.g.H = false;
      return c;
    }, ["delete"]() {
      this.g.i || ab(this);
      if (this.g.H && !this.g.I) {
        throw new R("Object already scheduled for deletion");
      }
      cb(this);
      var c = this.g;
      --c.count.value;
      0 === c.count.value && (c.o ? c.B.F(c.o) : c.l.h.F(c.i));
      this.g.I || (this.g.o = void 0, this.g.i = void 0);
    }, isDeleted: function() {
      return !this.g.i;
    }, deleteLater: function() {
      this.g.i || ab(this);
      if (this.g.H && !this.g.I) {
        throw new R("Object already scheduled for deletion");
      }
      lb.push(this);
      this.g.H = true;
      return this;
    } });
    const a = Symbol.dispose;
    a && (b[a] = b["delete"]);
  })();
  Object.assign(yb.prototype, { ba(b) {
    this.T && (b = this.T(b));
    return b;
  }, R(b) {
    this.F?.(b);
  }, A: xb, j: kb });
  m(10 === Y.length);
  k.print && (ka = k.print);
  k.printErr && (p = k.printErr);
  k.wasmBinary && (t = k.wasmBinary);
  k.FS_createDataFile = Fa;
  k.FS_createPreloadedFile = Fa;
  B("fetchSettings");
  B("logReadFiles");
  B("loadSplitModule");
  B("onMalloc");
  B("onRealloc");
  B("onFree");
  B("onSbrkGrow");
  k.thisProgram && (ea = k.thisProgram);
  m("undefined" == typeof k.memoryInitializerPrefixURL, "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
  m("undefined" == typeof k.pthreadMainPrefixURL, "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
  m("undefined" == typeof k.cdInitializerPrefixURL, "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
  m("undefined" == typeof k.filePackagePrefixURL, "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
  m("undefined" == typeof k.read, "Module.read option was removed");
  m("undefined" == typeof k.readAsync, "Module.readAsync option was removed (modify readAsync in JS)");
  m("undefined" == typeof k.readBinary, "Module.readBinary option was removed (modify readBinary in JS)");
  m("undefined" == typeof k.setWindowTitle, "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)");
  m("undefined" == typeof k.TOTAL_MEMORY, "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
  m("undefined" == typeof k.ENVIRONMENT, "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");
  m("undefined" == typeof k.STACK_SIZE, "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time");
  m("undefined" == typeof k.wasmMemory, "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally");
  m("undefined" == typeof k.INITIAL_MEMORY, "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");
  if (k.preInit) {
    for ("function" == typeof k.preInit && (k.preInit = [k.preInit]); 0 < k.preInit.length; ) {
      k.preInit.shift()();
    }
  }
  ra("preInit");
  "writeI53ToI64 writeI53ToI64Clamped writeI53ToI64Signaling writeI53ToU64Clamped writeI53ToU64Signaling readI53FromI64 readI53FromU64 convertI32PairToI53 convertI32PairToI53Checked convertU32PairToI53 getTempRet0 setTempRet0 zeroMemory exitJS withStackSave strError inetPton4 inetNtop4 inetPton6 inetNtop6 readSockaddr writeSockaddr readEmAsmArgs jstoi_q autoResumeAudioContext getDynCaller dynCall handleException keepRuntimeAlive runtimeKeepalivePush runtimeKeepalivePop callUserCallback maybeExit asyncLoad asmjsMangle mmapAlloc HandleAllocator getUniqueRunDependency addRunDependency removeRunDependency addOnInit addOnPostCtor addOnPreMain addOnExit STACK_SIZE STACK_ALIGN POINTER_SIZE ASSERTIONS ccall cwrap convertJsFunctionToWasm getEmptyTableSlot updateTableMap getFunctionAddress addFunction removeFunction intArrayFromString intArrayToString stringToAscii stringToNewUTF8 stringToUTF8OnStack writeArrayToMemory registerKeyEventCallback maybeCStringToJsString findEventTarget getBoundingClientRect fillMouseEventData registerMouseEventCallback registerWheelEventCallback registerUiEventCallback registerFocusEventCallback fillDeviceOrientationEventData registerDeviceOrientationEventCallback fillDeviceMotionEventData registerDeviceMotionEventCallback screenOrientation fillOrientationChangeEventData registerOrientationChangeEventCallback fillFullscreenChangeEventData registerFullscreenChangeEventCallback JSEvents_requestFullscreen JSEvents_resizeCanvasForFullscreen registerRestoreOldStyle hideEverythingExceptGivenElement restoreHiddenElements setLetterbox softFullscreenResizeWebGLRenderTarget doRequestFullscreen fillPointerlockChangeEventData registerPointerlockChangeEventCallback registerPointerlockErrorEventCallback requestPointerLock fillVisibilityChangeEventData registerVisibilityChangeEventCallback registerTouchEventCallback fillGamepadEventData registerGamepadEventCallback registerBeforeUnloadEventCallback fillBatteryEventData registerBatteryEventCallback setCanvasElementSize getCanvasElementSize jsStackTrace getCallstack convertPCtoSourceLocation wasiRightsToMuslOFlags wasiOFlagsToMuslOFlags initRandomFill randomFill safeSetTimeout setImmediateWrapped safeRequestAnimationFrame clearImmediateWrapped registerPostMainLoop registerPreMainLoop getPromise makePromise idsToPromises makePromiseCallback Browser_asyncPrepareDataCounter isLeapYear ydayFromDate arraySum addDays getSocketFromFD getSocketAddress heapObjectForWebGLType toTypedArrayIndex webgl_enable_ANGLE_instanced_arrays webgl_enable_OES_vertex_array_object webgl_enable_WEBGL_draw_buffers webgl_enable_WEBGL_multi_draw webgl_enable_EXT_polygon_offset_clamp webgl_enable_EXT_clip_control webgl_enable_WEBGL_polygon_mode emscriptenWebGLGet computeUnpackAlignedImageSize colorChannelsInGlTextureFormat emscriptenWebGLGetTexPixelData emscriptenWebGLGetUniform webglGetUniformLocation webglPrepareUniformLocationsBeforeFirstUse webglGetLeftBracePos emscriptenWebGLGetVertexAttrib __glGetActiveAttribOrUniform writeGLArray registerWebGlEventCallback runAndAbortIfError ALLOC_NORMAL ALLOC_STACK allocate writeStringToMemory writeAsciiToMemory allocateUTF8 allocateUTF8OnStack demangle stackTrace getNativeTypeSize getFunctionArgsName createJsInvokerSignature PureVirtualError registerInheritedInstance unregisterInheritedInstance getInheritedInstanceCount getLiveInheritedInstances setDelayFunction count_emval_handles isCppExceptionObject".split(" ").forEach(function(b) {
    sa(b);
  });
  "run out err callMain abort wasmExports writeStackCookie checkStackCookie INT53_MAX INT53_MIN bigintToI53Checked HEAP8 HEAPU8 HEAP16 HEAPU16 HEAP32 HEAPU32 HEAPF32 HEAPF64 HEAP64 HEAPU64 stackSave stackRestore stackAlloc createNamedFunction ptrToString getHeapMax growMemory ENV ERRNO_CODES DNS Protocols Sockets timers warnOnce readEmAsmArgsArray getExecutableName alignMemory wasmTable wasmMemory noExitRuntime addOnPreRun addOnPostRun freeTableIndexes functionsInTableMap setValue getValue PATH PATH_FS UTF8Decoder UTF8ArrayToString UTF8ToString stringToUTF8Array stringToUTF8 lengthBytesUTF8 AsciiToString UTF16Decoder UTF16ToString stringToUTF16 lengthBytesUTF16 UTF32ToString stringToUTF32 lengthBytesUTF32 JSEvents specialHTMLTargets findCanvasEventTarget currentFullscreenStrategy restoreOldWindowedStyle UNWIND_CACHE ExitStatus getEnvStrings checkWasiClock flush_NO_FILESYSTEM emSetImmediate emClearImmediate_deps emClearImmediate promiseMap getExceptionMessageCommon getCppExceptionTag getCppExceptionThrownObjectFromWebAssemblyException incrementUncaughtExceptionCount decrementUncaughtExceptionCount incrementExceptionRefcount decrementExceptionRefcount getExceptionMessage Browser requestFullscreen requestFullScreen setCanvasSize getUserMedia createContext getPreloadedImageData__data wget MONTH_DAYS_REGULAR MONTH_DAYS_LEAP MONTH_DAYS_REGULAR_CUMULATIVE MONTH_DAYS_LEAP_CUMULATIVE SYSCALLS tempFixedLengthArray miniTempWebGLFloatBuffers miniTempWebGLIntBuffers GL AL GLUT EGL GLEW IDBStore SDL SDL_gfx print printErr jstoi_s InternalError BindingError throwInternalError throwBindingError registeredTypes awaitingDependencies typeDependencies tupleRegistrations structRegistrations sharedRegisterType whenDependentTypesAreResolved getTypeName getFunctionName heap32VectorToArray requireRegisteredType usesDestructorStack checkArgCount getEnumValueType getRequiredArgCount createJsInvoker UnboundTypeError EmValType EmValOptionalType throwUnboundTypeError ensureOverloadTable exposePublicSymbol replacePublicSymbol embindRepr registeredInstances getBasestPointer getInheritedInstance registeredPointers registerType integerReadValueFromPointer enumReadValueFromPointer floatReadValueFromPointer assertIntegerRange readPointer installIndexedIterator runDestructors craftInvokerFunction embind__requireFunction genericPointerToWireType constNoSmartPtrRawPointerToWireType nonConstNoSmartPtrRawPointerToWireType init_RegisteredPointer RegisteredPointer RegisteredPointer_fromWireType runDestructor releaseClassHandle finalizationRegistry detachFinalizer_deps detachFinalizer attachFinalizer makeClassHandle init_ClassHandle ClassHandle throwInstanceAlreadyDeleted deletionQueue flushPendingDeletes delayFunction RegisteredClass shallowCopyInternalPointer downcastPointer upcastPointer validateThis char_0 char_9 makeLegalFunctionName emval_freelist emval_exception_decrefs emval_handles emval_symbols getStringOrSymbol Emval emval_returnValue emval_lookupTypes emval_methodCallers emval_addMethodCaller".split(" ").forEach(sa);
  var Cb = A("___getTypeName"), nc = A("_malloc"), V = A("_free"), na = A("_emscripten_stack_get_end"), Ea = A("___trap"), oc = A("_emscripten_stack_init"), pc = A("__emscripten_stack_restore"), qc = A("__emscripten_stack_alloc"), rc = A("_emscripten_stack_get_current"), sc = A("___thrown_object_from_unwind_exception"), tc = A("___get_exception_message"), uc = A("___cpp_exception"), xa = A("wasmMemory"), I = A("wasmTable"), vc = { __assert_fail: (b, a, c, d) => w(`Assertion failed: ${L(b)}, at: ` + [a ? L(a) : "unknown filename", c, d ? L(d) : "unknown function"]), __throw_exception_with_stack_trace: (b) => {
    b = new WebAssembly.Exception(uc, [b], { traceStack: true });
    var a = b.getArg(uc, 0);
    var c = sc(a);
    a = rc();
    var d = qc(4), e = qc(4);
    tc(c, d, e);
    c = y[d >> 2];
    e = y[e >> 2];
    d = L(c);
    V(c);
    if (e) {
      var g = L(e);
      V(e);
    }
    pc(a);
    b.message = [d, g];
    throw b;
  }, _abort_js: () => w("native code called abort()"), _embind_register_bigint: (b, a, c, d, e) => {
    a = M(a);
    const g = 0n === d;
    let f = (h) => h;
    if (g) {
      const h = 8 * c;
      f = (l) => BigInt.asUintN(h, l);
      e = f(e);
    }
    S(b, { name: a, j: f, m: (h, l) => {
      if ("number" == typeof l) {
        l = BigInt(l);
      } else if ("bigint" != typeof l) {
        throw new TypeError(`Cannot convert "${T(l)}" to ${a}`);
      }
      $a(a, l, d, e);
      return l;
    }, A: Za(a, c, !g), s: null });
  }, _embind_register_bool: (b, a, c, d) => {
    a = M(a);
    S(b, { name: a, j: function(e) {
      return !!e;
    }, m: function(e, g) {
      return g ? c : d;
    }, A: function(e) {
      return this.j(D[e]);
    }, s: null });
  }, _embind_register_class: (b, a, c, d, e, g, f, h, l, r, n, q, u) => {
    n = M(n);
    g = U(e, g);
    h &&= U(f, h);
    r &&= U(l, r);
    u = U(q, u);
    var v = qb(n);
    pb(v, function() {
      W(`Cannot construct ${n} due to unbound types`, [d]);
    });
    X([b, a, c], d ? [d] : [], (x) => {
      x = x[0];
      if (d) {
        var C = x.h;
        var N = C.D;
      } else {
        N = mb.prototype;
      }
      x = nb(n, function(...Pa) {
        if (Object.getPrototypeOf(this) !== O) {
          throw new R(`Use 'new' to construct ${n}`);
        }
        if (void 0 === E.G) {
          throw new R(`${n} has no accessible constructor`);
        }
        var Mb = E.G[Pa.length];
        if (void 0 === Mb) {
          throw new R(`Tried to invoke ctor of ${n} with invalid number of parameters (${Pa.length}) - expected (${Object.keys(E.G).toString()}) parameters instead!`);
        }
        return Mb.apply(this, Pa);
      });
      var O = Object.create(N, { constructor: { value: x } });
      x.prototype = O;
      var E = new rb(n, x, O, u, C, g, h, r);
      if (E.u) {
        var J;
        (J = E.u).K ?? (J.K = []);
        E.u.K.push(E);
      }
      C = new yb(n, E, true, false, false);
      J = new yb(n + "*", E, false, false, false);
      N = new yb(n + " const*", E, false, true, false);
      eb[b] = { pointerType: J, X: N };
      zb(v, x);
      return [C, J, N];
    });
  }, _embind_register_class_class_function: (b, a, c, d, e, g, f, h) => {
    var l = Ib(c, d);
    a = M(a);
    a = Jb(a);
    g = U(e, g, h);
    X([], [b], (r) => {
      function n() {
        W(`Cannot call ${q} due to unbound types`, l);
      }
      r = r[0];
      var q = `${r.name}.${a}`;
      a.startsWith("@@") && (a = Symbol[a.substring(2)]);
      var u = r.h.constructor;
      void 0 === u[a] ? (n.C = c - 1, u[a] = n) : (ob(u, a, q), u[a].v[c - 1] = n);
      X([], l, (v) => {
        v = Hb(q, [v[0], null].concat(v.slice(1)), null, g, f, h);
        void 0 === u[a].v ? (v.C = c - 1, u[a] = v) : u[a].v[c - 1] = v;
        if (r.h.K) {
          for (const x of r.h.K) {
            x.constructor.hasOwnProperty(a) || (x.constructor[a] = v);
          }
        }
        return [];
      });
      return [];
    });
  }, _embind_register_class_constructor: (b, a, c, d, e, g) => {
    m(0 < a);
    var f = Ib(a, c);
    e = U(d, e);
    X([], [b], (h) => {
      h = h[0];
      var l = `constructor ${h.name}`;
      void 0 === h.h.G && (h.h.G = []);
      if (void 0 !== h.h.G[a - 1]) {
        throw new R(`Cannot register multiple constructors with identical number of parameters (${a - 1}) for class '${h.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
      }
      h.h.G[a - 1] = () => {
        W(`Cannot construct ${h.name} due to unbound types`, f);
      };
      X([], f, (r) => {
        r.splice(1, 0, null);
        h.h.G[a - 1] = Hb(l, r, null, e, g);
        return [];
      });
      return [];
    });
  }, _embind_register_class_function: (b, a, c, d, e, g, f, h, l) => {
    var r = Ib(c, d);
    a = M(a);
    a = Jb(a);
    g = U(e, g, l);
    X([], [b], (n) => {
      function q() {
        W(`Cannot call ${u} due to unbound types`, r);
      }
      n = n[0];
      var u = `${n.name}.${a}`;
      a.startsWith("@@") && (a = Symbol[a.substring(2)]);
      h && n.h.fa.push(a);
      var v = n.h.D, x = v[a];
      void 0 === x || void 0 === x.v && x.className !== n.name && x.C === c - 2 ? (q.C = c - 2, q.className = n.name, v[a] = q) : (ob(v, a, u), v[a].v[c - 2] = q);
      X([], r, (C) => {
        C = Hb(u, C, n, g, f, l);
        void 0 === v[a].v ? (C.C = c - 2, v[a] = C) : v[a].v[c - 2] = C;
        return [];
      });
      return [];
    });
  }, _embind_register_class_property: (b, a, c, d, e, g, f, h, l, r) => {
    a = M(a);
    e = U(d, e);
    X([], [b], (n) => {
      n = n[0];
      var q = `${n.name}.${a}`, u = { get() {
        W(`Cannot access ${q} due to unbound types`, [c, f]);
      }, enumerable: true, configurable: true };
      u.set = l ? () => W(`Cannot access ${q} due to unbound types`, [c, f]) : () => {
        throw new R(q + " is a read-only property");
      };
      Object.defineProperty(n.h.D, a, u);
      X([], l ? [c, f] : [c], (v) => {
        var x = v[0], C = { get() {
          var O = Kb(this, n, q + " getter");
          return x.j(e(g, O));
        }, enumerable: true };
        if (l) {
          l = U(h, l);
          var N = v[1];
          C.set = function(O) {
            var E = Kb(this, n, q + " setter"), J = [];
            l(r, E, N.m(J, O));
            Eb(J);
          };
        }
        Object.defineProperty(n.h.D, a, C);
        return [];
      });
      return [];
    });
  }, _embind_register_emval: (b) => S(b, Qb), _embind_register_enum: (b, a, c, d, e) => {
    a = M(a);
    e = 0 === e ? "object" : 1 === e ? "number" : "string";
    switch (e) {
      case "object":
        let f = function() {
        };
        f.values = {};
        S(b, { name: a, constructor: f, valueType: e, j: function(h) {
          return this.constructor.values[h];
        }, m: (h, l) => l.value, A: Rb(a, c, d), s: null });
        pb(a, f);
        break;
      case "number":
        var g = {};
        S(b, { name: a, O: g, valueType: e, j: (h) => h, m: (h, l) => l, A: Rb(a, c, d), s: null });
        pb(a, g);
        delete k[a].C;
        break;
      case "string":
        g = {}, S(b, { name: a, V: {}, U: {}, O: g, valueType: e, j: function(h) {
          return this.U[h];
        }, m: function(h, l) {
          return this.V[l];
        }, A: Rb(a, c, d), s: null }), pb(a, g), delete k[a].C;
    }
  }, _embind_register_enum_value: (b, a, c) => {
    var d = Sb(b, "enum");
    a = M(a);
    switch (d.valueType) {
      case "object":
        b = d.constructor;
        d = Object.create(d.constructor.prototype, { value: { value: c }, constructor: { value: nb(`${d.name}_${a}`, function() {
        }) } });
        b.values[c] = d;
        b[a] = d;
        break;
      case "number":
        d.O[a] = c;
        break;
      case "string":
        d.V[a] = c, d.U[c] = a, d.O[a] = a;
    }
  }, _embind_register_float: (b, a, c) => {
    a = M(a);
    S(b, { name: a, j: (d) => d, m: (d, e) => {
      if ("number" != typeof e && "boolean" != typeof e) {
        throw new TypeError(`Cannot convert ${T(e)} to ${a}`);
      }
      return e;
    }, A: Tb(a, c), s: null });
  }, _embind_register_integer: (b, a, c, d, e) => {
    a = M(a);
    let g = (h) => h;
    if (0 === d) {
      var f = 32 - 8 * c;
      g = (h) => h << f >>> f;
      e = g(e);
    }
    S(b, { name: a, j: g, m: (h, l) => {
      if ("number" != typeof l && "boolean" != typeof l) {
        throw new TypeError(`Cannot convert "${T(l)}" to ${a}`);
      }
      $a(a, l, d, e);
      return l;
    }, A: Za(a, c, 0 !== d), s: null });
  }, _embind_register_iterable: (b, a, c, d) => {
    c = M(c);
    d = M(d);
    X([], [b, a], (e) => {
      Ub(e[0].h.D, c, d);
      return [];
    });
  }, _embind_register_memory_view: (b, a, c) => {
    function d(g) {
      return new e(ya.buffer, y[g + 4 >> 2], y[g >> 2]);
    }
    var e = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array][a];
    c = M(c);
    S(b, { name: c, j: d, A: d }, { ca: true });
  }, _embind_register_optional: (b) => {
    S(b, Vb);
  }, _embind_register_std_string: (b, a) => {
    a = M(a);
    S(b, { name: a, j(c) {
      var d = L(c + 4, y[c >> 2], true);
      V(c);
      return d;
    }, m(c, d) {
      d instanceof ArrayBuffer && (d = new Uint8Array(d));
      var e = "string" == typeof d;
      if (!(e || ArrayBuffer.isView(d) && 1 == d.BYTES_PER_ELEMENT)) {
        throw new R("Cannot pass non-string to std::string");
      }
      var g = e ? Wb(d) : d.length;
      var f = nc(4 + g + 1), h = f + 4;
      y[f >> 2] = g;
      e ? Z(d, h, g + 1) : D.set(d, h);
      null !== c && c.push(V, f);
      return f;
    }, A: xb, s(c) {
      V(c);
    } });
  }, _embind_register_std_wstring: (b, a, c) => {
    c = M(c);
    if (2 === a) {
      var d = Yb;
      var e = Zb;
      var g = $b;
    } else {
      m(4 === a, "only 2-byte and 4-byte strings are currently supported"), d = ac, e = bc, g = cc;
    }
    S(b, { name: c, j: (f) => {
      var h = d(f + 4, y[f >> 2] * a, true);
      V(f);
      return h;
    }, m: (f, h) => {
      if ("string" != typeof h) {
        throw new R(`Cannot pass non-string to C++ string type ${c}`);
      }
      var l = g(h), r = nc(4 + l + a);
      y[r >> 2] = l / a;
      e(h, r + 4, l + a);
      null !== f && f.push(V, r);
      return r;
    }, A: xb, s(f) {
      V(f);
    } });
  }, _embind_register_void: (b, a) => {
    a = M(a);
    S(b, { S: true, name: a, j: () => {
    }, m: () => {
    } });
  }, _emval_create_invoker: (b, a, c) => {
    var [d, ...e] = fc(b, a);
    a = d.m.bind(d);
    var g = e.map((l) => l.A.bind(l));
    b--;
    var f = { toValue: Pb };
    b = g.map((l, r) => {
      var n = `argFromPtr${r}`;
      f[n] = l;
      return `${n}(args${r ? "+" + 8 * r : ""})`;
    });
    switch (c) {
      case 0:
        var h = "toValue(handle)";
        break;
      case 2:
        h = "new (toValue(handle))";
        break;
      case 3:
        h = "";
        break;
      case 1:
        f.getStringOrSymbol = ic, h = "toValue(handle)[getStringOrSymbol(methodName)]";
    }
    h += `(${b})`;
    d.S || (f.toReturnWire = a, f.emval_returnValue = gc, h = `return emval_returnValue(toReturnWire, destructorsRef, ${h})`);
    h = `return function (handle, methodName, destructorsRef, args) {
${h}
}`;
    c = new Function(Object.keys(f), h)(...Object.values(f));
    h = `methodCaller<(${e.map((l) => l.name)}) => ${d.name}>`;
    return ec(nb(h, c));
  }, _emval_decref: Ob, _emval_incref: (b) => {
    9 < b && (Y[b + 1] += 1);
  }, _emval_invoke: (b, a, c, d, e) => dc[b](a, c, d, e), _emval_run_destructors: (b) => {
    var a = Pb(b);
    Eb(a);
    Ob(b);
  }, _tzset_js: (b, a, c, d) => {
    var e = (/* @__PURE__ */ new Date()).getFullYear(), g = new Date(e, 0, 1).getTimezoneOffset();
    e = new Date(e, 6, 1).getTimezoneOffset();
    y[b >> 2] = 60 * Math.max(g, e);
    G[a >> 2] = Number(g != e);
    a = (f) => {
      var h = Math.abs(f);
      return `UTC${0 <= f ? "-" : "+"}${String(Math.floor(h / 60)).padStart(2, "0")}${String(h % 60).padStart(2, "0")}`;
    };
    b = a(g);
    a = a(e);
    m(b);
    m(a);
    m(16 >= Wb(b), `timezone name truncated to fit in TZNAME_MAX (${b})`);
    m(16 >= Wb(a), `timezone name truncated to fit in TZNAME_MAX (${a})`);
    e < g ? (Z(b, c, 17), Z(a, d, 17)) : (Z(b, d, 17), Z(a, c, 17));
  }, clock_time_get: function(b, a, c) {
    if (!(0 <= b && 3 >= b)) {
      return 28;
    }
    Ca[c >> 3] = BigInt(Math.round(1e6 * (0 === b ? Date.now() : performance.now())));
    return 0;
  }, emscripten_resize_heap: (b) => {
    var a = D.length;
    b >>>= 0;
    m(b > a);
    if (2147483648 < b) {
      return p(`Cannot enlarge memory, requested ${b} bytes, but the limit is ${2147483648} bytes!`), false;
    }
    for (var c = 1; 4 >= c; c *= 2) {
      var d = a * (1 + 0.2 / c);
      d = Math.min(d, b + 100663296);
      var e = Math, g = e.min;
      d = Math.max(b, d);
      m(65536, "alignment argument is required");
      e = g.call(e, 2147483648, 65536 * Math.ceil(d / 65536));
      a: {
        g = e;
        d = xa.buffer.byteLength;
        try {
          xa.grow((g - d + 65535) / 65536 | 0);
          wa();
          var f = 1;
          break a;
        } catch (h) {
          p(`growMemory: Attempted to grow heap from ${d} bytes to ${g} bytes, but got error: ${h}`);
        }
        f = void 0;
      }
      if (f) {
        return true;
      }
    }
    p(`Failed to grow the heap from ${a} bytes to ${e} bytes, not enough memory!`);
    return false;
  }, environ_get: (b, a) => {
    var c = 0, d = 0, e;
    for (e of lc()) {
      var g = a + c;
      y[b + d >> 2] = g;
      c += Z(e, g, Infinity) + 1;
      d += 4;
    }
    return 0;
  }, environ_sizes_get: (b, a) => {
    var c = lc();
    y[b >> 2] = c.length;
    b = 0;
    for (var d of c) {
      b += Wb(d) + 1;
    }
    y[a >> 2] = b;
    return 0;
  }, fd_close: () => {
    w("fd_close called without SYSCALLS_REQUIRE_FILESYSTEM");
  }, fd_seek: function() {
    return 70;
  }, fd_write: (b, a, c, d) => {
    for (var e = 0, g = 0; g < c; g++) {
      var f = y[a >> 2], h = y[a + 4 >> 2];
      a += 8;
      for (var l = 0; l < h; l++) {
        var r = b, n = D[f + l], q = mc[r];
        m(q);
        0 === n || 10 === n ? ((1 === r ? ka : p)(Va(q)), q.length = 0) : q.push(n);
      }
      e += h;
    }
    y[d >> 2] = e;
    return 0;
  } }, wc, H;
  H = await async function() {
    function b(d) {
      d = H = d.exports;
      var e = {};
      for (f in d) {
        var g = d[f];
        e[f] = "function" == typeof g ? Ia(g) : g;
      }
      var f = H = e;
      m("undefined" != typeof f.__getTypeName, "missing Wasm export: __getTypeName");
      m("undefined" != typeof f.malloc, "missing Wasm export: malloc");
      m("undefined" != typeof f.free, "missing Wasm export: free");
      m("undefined" != typeof f.fflush, "missing Wasm export: fflush");
      m("undefined" != typeof f.__funcs_on_exit, "missing Wasm export: __funcs_on_exit");
      m("undefined" != typeof f.emscripten_stack_get_end, "missing Wasm export: emscripten_stack_get_end");
      m("undefined" != typeof f.emscripten_stack_get_base, "missing Wasm export: emscripten_stack_get_base");
      m("undefined" != typeof f.__trap, "missing Wasm export: __trap");
      m("undefined" != typeof f.emscripten_stack_init, "missing Wasm export: emscripten_stack_init");
      m("undefined" != typeof f.emscripten_stack_get_free, "missing Wasm export: emscripten_stack_get_free");
      m("undefined" != typeof f._emscripten_stack_restore, "missing Wasm export: _emscripten_stack_restore");
      m("undefined" != typeof f._emscripten_stack_alloc, "missing Wasm export: _emscripten_stack_alloc");
      m("undefined" != typeof f.emscripten_stack_get_current, "missing Wasm export: emscripten_stack_get_current");
      m("undefined" != typeof f.__cxa_decrement_exception_refcount, "missing Wasm export: __cxa_decrement_exception_refcount");
      m("undefined" != typeof f.__cxa_increment_exception_refcount, "missing Wasm export: __cxa_increment_exception_refcount");
      m("undefined" != typeof f.__thrown_object_from_unwind_exception, "missing Wasm export: __thrown_object_from_unwind_exception");
      m("undefined" != typeof f.__get_exception_message, "missing Wasm export: __get_exception_message");
      m("undefined" != typeof f.memory, "missing Wasm export: memory");
      m("undefined" != typeof f.__indirect_function_table, "missing Wasm export: __indirect_function_table");
      m("undefined" != typeof f.__cpp_exception, "missing Wasm export: __cpp_exception");
      Cb = Ga("__getTypeName", 1);
      nc = Ga("malloc", 1);
      V = Ga("free", 1);
      na = f.emscripten_stack_get_end;
      Ea = f.__trap;
      oc = f.emscripten_stack_init;
      pc = f._emscripten_stack_restore;
      qc = f._emscripten_stack_alloc;
      rc = f.emscripten_stack_get_current;
      sc = Ga("__thrown_object_from_unwind_exception", 1);
      tc = Ga("__get_exception_message", 3);
      xa = f.memory;
      I = f.__indirect_function_table;
      uc = f.__cpp_exception;
      Ja();
      wa();
      return H;
    }
    var a = k, c = { env: vc, wasi_snapshot_preview1: vc };
    if (k.instantiateWasm) {
      return new Promise((d, e) => {
        try {
          k.instantiateWasm(c, (g, f) => {
            d(b(g, f));
          });
        } catch (g) {
          p(`Module.instantiateWasm callback failed with error: ${g}`), e(g);
        }
      });
    }
    Ka ??= k.locateFile ? k.locateFile ? k.locateFile("libavoid.wasm", ha) : ha + "libavoid.wasm" : new URL("libavoid.wasm", import.meta.url).href;
    return function(d) {
      m(k === a, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
      a = null;
      return b(d.instance);
    }(await Na(c));
  }();
  (function() {
    function b() {
      m(!wc);
      wc = true;
      k.calledRun = true;
      if (!la) {
        m(!va);
        va = true;
        oa();
        H.__wasm_call_ctors();
        ta?.(k);
        k.onRuntimeInitialized?.();
        ra("onRuntimeInitialized");
        m(!k._main, 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
        oa();
        if (k.postRun) {
          for ("function" == typeof k.postRun && (k.postRun = [k.postRun]); k.postRun.length; ) {
            var a = k.postRun.shift();
            Qa.push(a);
          }
        }
        ra("postRun");
        Oa(Qa);
      }
    }
    oc();
    ma();
    if (k.preRun) {
      for ("function" == typeof k.preRun && (k.preRun = [k.preRun]); k.preRun.length; ) {
        Sa();
      }
    }
    ra("preRun");
    Oa(Ra);
    k.setStatus ? (k.setStatus("Running..."), setTimeout(() => {
      setTimeout(() => k.setStatus(""), 1);
      b();
    }, 1)) : b();
    oa();
  })();
  va ? moduleRtn = k : moduleRtn = new Promise((b, a) => {
    ta = b;
    ua = a;
  });
  for (const b of Object.keys(k)) {
    b in moduleArg || Object.defineProperty(moduleArg, b, { configurable: true, get() {
      w(`Access to module property ('${b}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`);
    } });
  }
  ;
  return moduleRtn;
}
var libavoid_default = initAvoidModule;

// src/common.js
var createAvoidLibObj = (initAvoid) => {
  return {
    avoidLib: void 0,
    async load(filePath = void 0) {
      if (!this.avoidLib) {
        let locateFile = function(path, prefix) {
          if (filePath !== void 0 && path.endsWith(".wasm"))
            return filePath;
          return prefix + path;
        };
        this.avoidLib = await initAvoid({ "locateFile": locateFile });
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
  AvoidLib
};
