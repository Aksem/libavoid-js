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
    var a = "undefined" !== typeof process && process.ha?.node ? b(process.ha.node) : 2147483647;
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
  var k = moduleArg, aa = "./this.program", ba = import.meta.url, ca = "", da;
  try {
    ca = new URL(".", ba).href;
  } catch {
  }
  if (!globalThis.window && !globalThis.WorkerGlobalScope) {
    throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
  }
  da = async (b) => {
    l(!ea(b), "readAsync does not work with file:// URLs");
    b = await fetch(b, { credentials: "same-origin" });
    if (b.ok) {
      return b.arrayBuffer();
    }
    throw Error(b.status + " : " + b.url);
  };
  var fa = console.log.bind(console), p = console.error.bind(console);
  l(true, "worker environment detected but not enabled at build time.  Add `worker` to `-sENVIRONMENT` to enable.");
  l(true, "node environment detected but not enabled at build time.  Add `node` to `-sENVIRONMENT` to enable.");
  l(true, "shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");
  var t;
  globalThis.WebAssembly || p("no native wasm support detected");
  var ha = false;
  function l(b, a) {
    b || x("Assertion failed" + (a ? ": " + a : ""));
  }
  var ea = (b) => b.startsWith("file://");
  function ia() {
    var b = ja();
    l(0 == (b & 3));
    0 == b && (b += 4);
    y[b >> 2] = 34821223;
    y[b + 4 >> 2] = 2310721022;
    y[0] = 1668509029;
  }
  function ka() {
    if (!ha) {
      var b = ja();
      0 == b && (b += 4);
      var a = y[b >> 2], c = y[b + 4 >> 2];
      34821223 == a && 2310721022 == c || x(`Stack overflow! Stack cookie has been overwritten at ${z(b)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${z(c)} ${z(a)}`);
      1668509029 != y[0] && x("Runtime error: The application has corrupted its heap memory area (address zero)!");
    }
  }
  var la = new Int16Array(1), ma = new Int8Array(la.buffer);
  la[0] = 25459;
  115 === ma[0] && 99 === ma[1] || x("Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)");
  function na(b) {
    Object.getOwnPropertyDescriptor(k, b) || Object.defineProperty(k, b, { configurable: true, set() {
      x(`Attempt to set \`Module.${b}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`);
    } });
  }
  function A(b) {
    return () => l(false, `call to '${b}' via reference taken before Wasm module initialization`);
  }
  function oa(b) {
    Object.getOwnPropertyDescriptor(k, b) || Object.defineProperty(k, b, { configurable: true, get() {
      var a = `'${b}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
      "FS_createPath" !== b && "FS_createDataFile" !== b && "FS_createPreloadedFile" !== b && "FS_preloadFile" !== b && "FS_unlink" !== b && "addRunDependency" !== b && "FS_createLazyFile" !== b && "FS_createDevice" !== b && "removeRunDependency" !== b || (a += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you");
      x(a);
    } });
  }
  var pa, qa, ra, B, sa, E, F, y, ta, ua, va, wa, xa = false;
  function ya() {
    var b = za.buffer;
    ra = new Int8Array(b);
    sa = new Int16Array(b);
    B = new Uint8Array(b);
    E = new Uint16Array(b);
    F = new Int32Array(b);
    y = new Uint32Array(b);
    ta = new Float32Array(b);
    ua = new Float64Array(b);
    va = new BigInt64Array(b);
    wa = new BigUint64Array(b);
  }
  l(globalThis.Int32Array && globalThis.Float64Array && Int32Array.prototype.subarray && Int32Array.prototype.set, "JS engine does not provide full typed array support");
  function x(b) {
    k.onAbort?.(b);
    b = "Aborted(" + b + ")";
    p(b);
    ha = true;
    xa && Aa();
    b = new WebAssembly.RuntimeError(b);
    qa?.(b);
    throw b;
  }
  function Ba() {
    x("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM");
  }
  function G(b, a) {
    return (...c) => {
      l(xa, `native function \`${b}\` called before runtime initialization`);
      l(true, `native function \`${b}\` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)`);
      var d = H[b];
      l(d, `exported native function \`${b}\` not found`);
      l(c.length <= a, `native function \`${b}\` called with ${c.length} args but expects ${a}`);
      return d(...c);
    };
  }
  var Ca = 0;
  function Da(b) {
    return (...a) => {
      if (ha) {
        throw Error("program has already aborted!");
      }
      Ca++;
      try {
        return b(...a);
      } catch (c) {
        if (ha || 1 < Ca || "unwind" === c) {
          throw c;
        }
        x("unhandled exception: " + [c, c.stack]);
      } finally {
        Ca--;
      }
    };
  }
  function Ea() {
    var b = I.get, a = {};
    I.get = (c) => {
      var d = b.call(I, c), e = a[c];
      e && e.Y === d || (e = a[c] = { Y: d, ia: Da(d) });
      return e.ia;
    };
  }
  var Fa;
  async function Ga(b) {
    if (!t) {
      try {
        var a = await da(b);
        return new Uint8Array(a);
      } catch {
      }
    }
    if (b == Fa && t) {
      b = new Uint8Array(t);
    } else {
      throw "both async and sync fetching of the wasm failed";
    }
    return b;
  }
  async function Ha(b, a) {
    try {
      var c = await Ga(b);
      return await WebAssembly.instantiate(c, a);
    } catch (d) {
      p(`failed to asynchronously prepare wasm: ${d}`), ea(b) && p(`warning: Loading from a file URI (${b}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`), x(d);
    }
  }
  async function Ia(b) {
    var a = Fa;
    if (!t) {
      try {
        var c = fetch(a, { credentials: "same-origin" });
        return await WebAssembly.instantiateStreaming(c, b);
      } catch (d) {
        p(`wasm streaming compile failed: ${d}`), p("falling back to ArrayBuffer instantiation");
      }
    }
    return Ha(a, b);
  }
  var Ja = (b) => {
    for (; 0 < b.length; ) {
      b.shift()(k);
    }
  }, Ka = [], La = [], Ma = () => {
    var b = k.preRun.shift();
    La.push(b);
  }, z = (b) => {
    l("number" === typeof b, `ptrToString expects a number, got ${typeof b}`);
    return "0x" + (b >>> 0).toString(16).padStart(8, "0");
  }, K = (b) => {
    K.P || (K.P = {});
    K.P[b] || (K.P[b] = 1, p(b));
  }, Na = globalThis.TextDecoder && new TextDecoder(), Pa = (b, a, c, d) => {
    c = a + c;
    if (d) {
      return c;
    }
    for (; b[a] && !(a >= c); ) {
      ++a;
    }
    return a;
  }, Qa = (b, a = 0, c, d) => {
    c = Pa(b, a, c, d);
    if (16 < c - a && b.buffer && Na) {
      return Na.decode(b.subarray(a, c));
    }
    for (d = ""; a < c; ) {
      var e = b[a++];
      if (e & 128) {
        var g = b[a++] & 63;
        if (192 == (e & 224)) {
          d += String.fromCharCode((e & 31) << 6 | g);
        } else {
          var f = b[a++] & 63;
          224 == (e & 240) ? e = (e & 15) << 12 | g << 6 | f : (240 != (e & 248) && K("Invalid UTF-8 leading byte " + z(e) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"), e = (e & 7) << 18 | g << 12 | f << 6 | b[a++] & 63);
          65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023));
        }
      } else {
        d += String.fromCharCode(e);
      }
    }
    return d;
  }, L = (b, a, c) => {
    l("number" == typeof b, `UTF8ToString expects a number (got ${typeof b})`);
    return b ? Qa(B, b, a, c) : "";
  }, Ta = (b) => {
    b = b.getArg(Ra, 0);
    return Sa(b);
  }, Ya = (b) => {
    var a = Ta(b);
    b = Ua();
    var c = Va(4), d = Va(4);
    Wa(a, c, d);
    a = y[c >> 2];
    d = y[d >> 2];
    c = L(a);
    M(a);
    if (d) {
      var e = L(d);
      M(d);
    }
    Xa(b);
    return [c, e];
  }, P = (b) => {
    for (var a = ""; ; ) {
      var c = B[b++];
      if (!c) {
        return a;
      }
      a += String.fromCharCode(c);
    }
  }, Q = {}, R = {}, Za = {}, S = class extends Error {
    constructor(b) {
      super(b);
      this.name = "BindingError";
    }
  }, $a = (b) => {
    throw new S(b);
  };
  function ab(b, a, c = {}) {
    var d = a.name;
    if (!b) {
      throw new S(`type "${d}" must have a positive integer typeid pointer`);
    }
    if (R.hasOwnProperty(b)) {
      if (c.aa) {
        return;
      }
      throw new S(`Cannot register type '${d}' twice`);
    }
    R[b] = a;
    delete Za[b];
    Q.hasOwnProperty(b) && (a = Q[b], delete Q[b], a.forEach((e) => e()));
  }
  function T(b, a, c = {}) {
    return ab(b, a, c);
  }
  var bb = (b, a, c) => {
    switch (a) {
      case 1:
        return c ? (d) => ra[d] : (d) => B[d];
      case 2:
        return c ? (d) => sa[d >> 1] : (d) => E[d >> 1];
      case 4:
        return c ? (d) => F[d >> 2] : (d) => y[d >> 2];
      case 8:
        return c ? (d) => va[d >> 3] : (d) => wa[d >> 3];
      default:
        throw new TypeError(`invalid integer width (${a}): ${b}`);
    }
  }, U = (b) => {
    if (null === b) {
      return "null";
    }
    var a = typeof b;
    return "object" === a || "array" === a || "function" === a ? b.toString() : "" + b;
  }, cb = (b, a, c, d) => {
    if (a < c || a > d) {
      throw new TypeError(`Passing a number "${U(a)}" from JS side to C/C++ side to an argument of type "${b}", which is outside the valid range [${c}, ${d}]!`);
    }
  }, db = (b) => {
    throw new S(b.g.l.h.name + " instance already deleted");
  }, eb = false, fb = () => {
  }, gb = (b, a, c) => {
    if (a === c) {
      return b;
    }
    if (void 0 === c.u) {
      return null;
    }
    b = gb(b, a, c.u);
    return null === b ? null : c.X(b);
  }, hb = {}, ib = {}, jb = (b, a) => {
    if (void 0 === a) {
      throw new S("ptr should not be undefined");
    }
    for (; b.u; ) {
      a = b.J(a), b = b.u;
    }
    return ib[a];
  }, kb = class extends Error {
    constructor(b) {
      super(b);
      this.name = "InternalError";
    }
  }, mb = (b, a) => {
    if (!a.l || !a.i) {
      throw new kb("makeClassHandle requires ptr and ptrType");
    }
    if (!!a.B !== !!a.o) {
      throw new kb("Both smartPtrType and smartPtr must be specified");
    }
    a.count = { value: 1 };
    return lb(Object.create(b, { g: { value: a, writable: true } }));
  };
  function nb(b) {
    function a() {
      return this.M ? mb(this.h.D, { l: this.ca, i: c, B: this, o: b }) : mb(this.h.D, { l: this, i: b });
    }
    var c = this.$(b);
    if (!c) {
      return this.R(b), null;
    }
    var d = jb(this.h, c);
    if (void 0 !== d) {
      if (0 === d.g.count.value) {
        return d.g.i = c, d.g.o = b, d.clone();
      }
      d = d.clone();
      this.R(b);
      return d;
    }
    d = this.h.Z(c);
    d = hb[d];
    if (!d) {
      return a.call(this);
    }
    d = this.L ? d.W : d.pointerType;
    var e = gb(c, this.h, d.h);
    return null === e ? a.call(this) : this.M ? mb(d.h.D, { l: d, i: e, B: this, o: b }) : mb(d.h.D, { l: d, i: e });
  }
  var lb = (b) => {
    if (!globalThis.FinalizationRegistry) {
      return lb = (a) => a, b;
    }
    eb = new FinalizationRegistry((a) => {
      console.warn(a.ba);
      a = a.g;
      --a.count.value;
      0 === a.count.value && (a.o ? a.B.F(a.o) : a.l.h.F(a.i));
    });
    lb = (a) => {
      var c = a.g;
      if (c.o) {
        var d = { g: c };
        c = Error(`Embind found a leaked C++ instance ${c.l.h.name} <${z(c.i)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);
        "captureStackTrace" in Error && Error.captureStackTrace(c, nb);
        d.ba = c.stack.replace(/^Error: /, "");
        eb.register(a, d, a);
      }
      return a;
    };
    fb = (a) => {
      eb.unregister(a);
    };
    return lb(b);
  }, ob = [];
  function pb() {
  }
  var qb = (b, a) => Object.defineProperty(a, "name", { value: b }), rb = (b, a, c) => {
    if (void 0 === b[a].v) {
      var d = b[a];
      b[a] = function(...e) {
        if (!b[a].v.hasOwnProperty(e.length)) {
          throw new S(`Function '${c}' called with an invalid number of arguments (${e.length}) - expects one of (${b[a].v})!`);
        }
        return b[a].v[e.length].apply(this, e);
      };
      b[a].v = [];
      b[a].v[d.C] = d;
    }
  }, sb = (b, a) => {
    if (k.hasOwnProperty(b)) {
      throw new S(`Cannot register public name '${b}' twice`);
    }
    k[b] = a;
    k[b].C = void 0;
  }, tb = (b) => {
    l("string" === typeof b);
    b = b.replace(/[^a-zA-Z0-9_]/g, "$");
    var a = b.charCodeAt(0);
    return 48 <= a && 57 >= a ? `_${b}` : b;
  };
  function ub(b, a, c, d, e, g, f, h) {
    this.name = b;
    this.constructor = a;
    this.D = c;
    this.F = d;
    this.u = e;
    this.Z = g;
    this.J = f;
    this.X = h;
    this.da = [];
  }
  var vb = (b, a, c) => {
    for (; a !== c; ) {
      if (!a.J) {
        throw new S(`Expected null or instance of ${c.name}, got an instance of ${a.name}`);
      }
      b = a.J(b);
      a = a.u;
    }
    return b;
  };
  function wb(b, a) {
    if (null === a) {
      if (this.N) {
        throw new S(`null is not a valid ${this.name}`);
      }
      return 0;
    }
    if (!a.g) {
      throw new S(`Cannot pass "${U(a)}" as a ${this.name}`);
    }
    if (!a.g.i) {
      throw new S(`Cannot pass deleted object as a pointer of type ${this.name}`);
    }
    return vb(a.g.i, a.g.l.h, this.h);
  }
  function xb(b, a) {
    if (null === a) {
      if (this.N) {
        throw new S(`null is not a valid ${this.name}`);
      }
      if (this.M) {
        var c = this.ea();
        null !== b && b.push(this.F, c);
        return c;
      }
      return 0;
    }
    if (!a || !a.g) {
      throw new S(`Cannot pass "${U(a)}" as a ${this.name}`);
    }
    if (!a.g.i) {
      throw new S(`Cannot pass deleted object as a pointer of type ${this.name}`);
    }
    if (!this.L && a.g.l.L) {
      throw new S(`Cannot convert argument of type ${a.g.B ? a.g.B.name : a.g.l.name} to parameter type ${this.name}`);
    }
    c = vb(a.g.i, a.g.l.h, this.h);
    if (this.M) {
      if (void 0 === a.g.o) {
        throw new S("Passing raw pointer to smart pointer is illegal");
      }
      switch (this.ga) {
        case 0:
          if (a.g.B === this) {
            c = a.g.o;
          } else {
            throw new S(`Cannot convert argument of type ${a.g.B ? a.g.B.name : a.g.l.name} to parameter type ${this.name}`);
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
            c = this.fa(c, yb(() => d["delete"]()));
            null !== b && b.push(this.F, c);
          }
          break;
        default:
          throw new S("Unsupported sharing policy");
      }
    }
    return c;
  }
  function zb(b, a) {
    if (null === a) {
      if (this.N) {
        throw new S(`null is not a valid ${this.name}`);
      }
      return 0;
    }
    if (!a.g) {
      throw new S(`Cannot pass "${U(a)}" as a ${this.name}`);
    }
    if (!a.g.i) {
      throw new S(`Cannot pass deleted object as a pointer of type ${this.name}`);
    }
    if (a.g.l.L) {
      throw new S(`Cannot convert argument of type ${a.g.l.name} to parameter type ${this.name}`);
    }
    return vb(a.g.i, a.g.l.h, this.h);
  }
  function Ab(b) {
    return this.j(y[b >> 2]);
  }
  function Bb(b, a, c, d, e, g, f, h, m, r, n) {
    this.name = b;
    this.h = a;
    this.N = c;
    this.L = d;
    this.M = e;
    this.ca = g;
    this.ga = f;
    this.T = h;
    this.ea = m;
    this.fa = r;
    this.F = n;
    e || void 0 !== a.u ? this.m = xb : (this.m = d ? wb : zb, this.s = null);
  }
  var Cb = (b, a) => {
    if (!k.hasOwnProperty(b)) {
      throw new kb("Replacing nonexistent public symbol");
    }
    k[b] = a;
    k[b].C = void 0;
  }, Db = [], V = (b, a, c = false) => {
    l(!c, "Async bindings are only supported with JSPI.");
    b = P(b);
    (c = Db[a]) || (Db[a] = c = I.get(a));
    l(I.get(a) == c, "JavaScript-side Wasm function table mirror is out of date!");
    if ("function" != typeof c) {
      throw new S(`unknown function pointer with signature ${b}: ${a}`);
    }
    return c;
  };
  class Eb extends Error {
  }
  var Gb = (b) => {
    b = Fb(b);
    var a = P(b);
    M(b);
    return a;
  }, W = (b, a) => {
    function c(g) {
      e[g] || R[g] || (Za[g] ? Za[g].forEach(c) : (d.push(g), e[g] = true));
    }
    var d = [], e = {};
    a.forEach(c);
    throw new Eb(`${b}: ` + d.map(Gb).join([", "]));
  }, X = (b, a, c) => {
    function d(h) {
      h = c(h);
      if (h.length !== b.length) {
        throw new kb("Mismatched type converter count");
      }
      for (var m = 0; m < b.length; ++m) {
        T(b[m], h[m]);
      }
    }
    b.forEach((h) => Za[h] = a);
    var e = Array(a.length), g = [], f = 0;
    for (let [h, m] of a.entries()) {
      R.hasOwnProperty(m) ? e[h] = R[m] : (g.push(m), Q.hasOwnProperty(m) || (Q[m] = []), Q[m].push(() => {
        e[h] = R[m];
        ++f;
        f === g.length && d(e);
      }));
    }
    0 === g.length && d(e);
  }, Hb = (b) => {
    for (; b.length; ) {
      var a = b.pop();
      b.pop()(a);
    }
  };
  function Ib(b) {
    for (var a = 1; a < b.length; ++a) {
      if (null !== b[a] && void 0 === b[a].s) {
        return true;
      }
    }
    return false;
  }
  function Jb(b, a, c, d, e) {
    (b < a || b > c) && e(`function ${d} called with ${b} arguments, expected ${a == c ? a : `${a} to ${c}`}`);
  }
  function Lb(b, a, c, d, e, g) {
    var f = a.length;
    if (2 > f) {
      throw new S("argTypes array size mismatch! Must at least get return value and 'this' types!");
    }
    l(!g, "Async bindings are only supported with JSPI.");
    var h = null !== a[1] && null !== c, m = Ib(a);
    c = !a[0].S;
    var r = f - 2;
    var n = a.length - 2;
    for (var q = a.length - 1; 2 <= q && a[q].optional; --q) {
      n--;
    }
    q = a[0];
    var u = a[1];
    d = [b, $a, d, e, Hb, q.j.bind(q), u?.m.bind(u)];
    for (e = 2; e < f; ++e) {
      q = a[e], d.push(q.m.bind(q));
    }
    if (!m) {
      for (e = h ? 1 : 2; e < a.length; ++e) {
        null !== a[e].s && d.push(a[e].s);
      }
    }
    d.push(Jb, n, r);
    m = Ib(a);
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
    m && (n += "var destructors = [];\n");
    u = m ? "destructors" : "null";
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
    if (m) {
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
    return qb(b, a);
  }
  var Mb = (b, a) => {
    for (var c = [], d = 0; d < b; d++) {
      c.push(y[a + 4 * d >> 2]);
    }
    return c;
  }, Nb = (b) => {
    b = b.trim();
    const a = b.indexOf("(");
    if (-1 === a) {
      return b;
    }
    l(b.endsWith(")"), "Parentheses for argument names should match.");
    return b.slice(0, a);
  }, Ob = (b, a, c) => {
    if (!(b instanceof Object)) {
      throw new S(`${c} with invalid "this": ${b}`);
    }
    if (!(b instanceof a.h.constructor)) {
      throw new S(`${c} incompatible with "this" of type ${b.constructor.name}`);
    }
    if (!b.g.i) {
      throw new S(`cannot call emscripten binding method ${c} on deleted object`);
    }
    return vb(b.g.i, b.g.l.h, a.h);
  }, Pb = [], Y = [0, 1, , 1, null, 1, true, 1, false, 1], Qb = (b) => {
    9 < b && 0 === --Y[b + 1] && (l(void 0 !== Y[b], "Decref for unallocated handle."), Y[b] = void 0, Pb.push(b));
  }, Rb = (b) => {
    if (!b) {
      throw new S(`Cannot use deleted val. handle = ${b}`);
    }
    l(2 === b || void 0 !== Y[b] && 0 === b % 2, `invalid handle: ${b}`);
    return Y[b];
  }, yb = (b) => {
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
        const a = Pb.pop() || Y.length;
        Y[a] = b;
        Y[a + 1] = 1;
        return a;
    }
  }, Sb = { name: "emscripten::val", j: (b) => {
    var a = Rb(b);
    Qb(b);
    return a;
  }, m: (b, a) => yb(a), A: Ab, s: null }, Tb = (b, a, c) => {
    switch (a) {
      case 1:
        return c ? function(d) {
          return this.j(ra[d]);
        } : function(d) {
          return this.j(B[d]);
        };
      case 2:
        return c ? function(d) {
          return this.j(sa[d >> 1]);
        } : function(d) {
          return this.j(E[d >> 1]);
        };
      case 4:
        return c ? function(d) {
          return this.j(F[d >> 2]);
        } : function(d) {
          return this.j(y[d >> 2]);
        };
      default:
        throw new TypeError(`invalid integer width (${a}): ${b}`);
    }
  }, Ub = (b, a) => {
    var c = R[b];
    if (void 0 === c) {
      throw b = `${a} has unknown type ${Gb(b)}`, new S(b);
    }
    return c;
  }, Vb = (b, a) => {
    switch (a) {
      case 4:
        return function(c) {
          return this.j(ta[c >> 2]);
        };
      case 8:
        return function(c) {
          return this.j(ua[c >> 3]);
        };
      default:
        throw new TypeError(`invalid float width (${a}): ${b}`);
    }
  }, Wb = Object.assign({ optional: true }, Sb), Z = (b, a, c) => {
    l("number" == typeof c, "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
    var d = B;
    l("string" === typeof b, `stringToUTF8Array expects a string (got ${typeof b})`);
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
          1114111 < f && K("Invalid Unicode code point " + z(f) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).");
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
  }, Xb = (b) => {
    for (var a = 0, c = 0; c < b.length; ++c) {
      var d = b.charCodeAt(c);
      127 >= d ? a++ : 2047 >= d ? a += 2 : 55296 <= d && 57343 >= d ? (a += 4, ++c) : a += 3;
    }
    return a;
  }, Yb = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0, Zb = (b, a, c) => {
    l(0 == b % 2, "Pointer passed to UTF16ToString must be aligned to two bytes!");
    b >>= 1;
    a = Pa(E, b, a / 2, c);
    if (16 < a - b && Yb) {
      return Yb.decode(E.subarray(b, a));
    }
    for (c = ""; b < a; ++b) {
      c += String.fromCharCode(E[b]);
    }
    return c;
  }, $b = (b, a, c) => {
    l(0 == a % 2, "Pointer passed to stringToUTF16 must be aligned to two bytes!");
    l("number" == typeof c, "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
    c ??= 2147483647;
    if (2 > c) {
      return 0;
    }
    c -= 2;
    var d = a;
    c = c < 2 * b.length ? c / 2 : b.length;
    for (var e = 0; e < c; ++e) {
      sa[a >> 1] = b.charCodeAt(e), a += 2;
    }
    sa[a >> 1] = 0;
    return a - d;
  }, ac = (b) => 2 * b.length, bc = (b, a, c) => {
    l(0 == b % 4, "Pointer passed to UTF32ToString must be aligned to four bytes!");
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
  }, cc = (b, a, c) => {
    l(0 == a % 4, "Pointer passed to stringToUTF32 must be aligned to four bytes!");
    l("number" == typeof c, "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
    c ??= 2147483647;
    if (4 > c) {
      return 0;
    }
    var d = a;
    c = d + c - 4;
    for (var e = 0; e < b.length; ++e) {
      var g = b.codePointAt(e);
      65535 < g && e++;
      F[a >> 2] = g;
      a += 4;
      if (a + 4 > c) {
        break;
      }
    }
    F[a >> 2] = 0;
    return a - d;
  }, dc = (b) => {
    for (var a = 0, c = 0; c < b.length; ++c) {
      65535 < b.codePointAt(c) && c++, a += 4;
    }
    return a;
  }, ec = [], fc = (b) => {
    var a = ec.length;
    ec.push(b);
    return a;
  }, gc = (b, a) => {
    for (var c = Array(b), d = 0; d < b; ++d) {
      c[d] = Ub(y[a + 4 * d >> 2], `parameter ${d}`);
    }
    return c;
  }, hc = (b, a, c) => {
    var d = [];
    b = b(d, c);
    d.length && (y[a >> 2] = yb(d));
    return b;
  }, ic = {}, jc = (b) => {
    var a = ic[b];
    return void 0 === a ? P(b) : a;
  }, kc = {}, mc = () => {
    if (!lc) {
      var b = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (globalThis.navigator?.language ?? "C").replace("-", "_") + ".UTF-8", _: aa || "./this.program" }, a;
      for (a in kc) {
        void 0 === kc[a] ? delete b[a] : b[a] = kc[a];
      }
      var c = [];
      for (a in b) {
        c.push(`${a}=${b[a]}`);
      }
      lc = c;
    }
    return lc;
  }, lc, nc = [null, [], []];
  (() => {
    let b = pb.prototype;
    Object.assign(b, { isAliasOf: function(c) {
      if (!(this instanceof pb && c instanceof pb)) {
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
      this.g.i || db(this);
      if (this.g.I) {
        return this.g.count.value += 1, this;
      }
      var c = lb, d = Object, e = d.create, g = Object.getPrototypeOf(this), f = this.g;
      c = c(e.call(d, g, { g: { value: { count: f.count, H: f.H, I: f.I, i: f.i, l: f.l, o: f.o, B: f.B } } }));
      c.g.count.value += 1;
      c.g.H = false;
      return c;
    }, ["delete"]() {
      this.g.i || db(this);
      if (this.g.H && !this.g.I) {
        throw new S("Object already scheduled for deletion");
      }
      fb(this);
      var c = this.g;
      --c.count.value;
      0 === c.count.value && (c.o ? c.B.F(c.o) : c.l.h.F(c.i));
      this.g.I || (this.g.o = void 0, this.g.i = void 0);
    }, isDeleted: function() {
      return !this.g.i;
    }, deleteLater: function() {
      this.g.i || db(this);
      if (this.g.H && !this.g.I) {
        throw new S("Object already scheduled for deletion");
      }
      ob.push(this);
      this.g.H = true;
      return this;
    } });
    const a = Symbol.dispose;
    a && (b[a] = b["delete"]);
  })();
  Object.assign(Bb.prototype, { $(b) {
    this.T && (b = this.T(b));
    return b;
  }, R(b) {
    this.F?.(b);
  }, A: Ab, j: nb });
  l(10 === Y.length);
  k.print && (fa = k.print);
  k.printErr && (p = k.printErr);
  k.wasmBinary && (t = k.wasmBinary);
  k.FS_createDataFile = function() {
    Ba();
  };
  k.FS_createPreloadedFile = function() {
    Ba();
  };
  Object.getOwnPropertyDescriptor(k, "fetchSettings") && x("`Module.fetchSettings` was supplied but `fetchSettings` not included in INCOMING_MODULE_JS_API");
  k.thisProgram && (aa = k.thisProgram);
  l("undefined" == typeof k.memoryInitializerPrefixURL, "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
  l("undefined" == typeof k.pthreadMainPrefixURL, "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
  l("undefined" == typeof k.cdInitializerPrefixURL, "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
  l("undefined" == typeof k.filePackagePrefixURL, "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
  l("undefined" == typeof k.read, "Module.read option was removed");
  l("undefined" == typeof k.readAsync, "Module.readAsync option was removed (modify readAsync in JS)");
  l("undefined" == typeof k.readBinary, "Module.readBinary option was removed (modify readBinary in JS)");
  l("undefined" == typeof k.setWindowTitle, "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)");
  l("undefined" == typeof k.TOTAL_MEMORY, "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
  l("undefined" == typeof k.ENVIRONMENT, "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");
  l("undefined" == typeof k.STACK_SIZE, "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time");
  l("undefined" == typeof k.wasmMemory, "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally");
  l("undefined" == typeof k.INITIAL_MEMORY, "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");
  if (k.preInit) {
    for ("function" == typeof k.preInit && (k.preInit = [k.preInit]); 0 < k.preInit.length; ) {
      k.preInit.shift()();
    }
  }
  na("preInit");
  "writeI53ToI64 writeI53ToI64Clamped writeI53ToI64Signaling writeI53ToU64Clamped writeI53ToU64Signaling readI53FromI64 readI53FromU64 convertI32PairToI53 convertI32PairToI53Checked convertU32PairToI53 getTempRet0 setTempRet0 zeroMemory exitJS withStackSave strError inetPton4 inetNtop4 inetPton6 inetNtop6 readSockaddr writeSockaddr readEmAsmArgs jstoi_q autoResumeAudioContext getDynCaller dynCall handleException keepRuntimeAlive runtimeKeepalivePush runtimeKeepalivePop callUserCallback maybeExit asyncLoad asmjsMangle mmapAlloc HandleAllocator getUniqueRunDependency addRunDependency removeRunDependency addOnInit addOnPostCtor addOnPreMain addOnExit STACK_SIZE STACK_ALIGN POINTER_SIZE ASSERTIONS ccall cwrap convertJsFunctionToWasm getEmptyTableSlot updateTableMap getFunctionAddress addFunction removeFunction intArrayFromString intArrayToString stringToAscii stringToNewUTF8 stringToUTF8OnStack writeArrayToMemory registerKeyEventCallback maybeCStringToJsString findEventTarget getBoundingClientRect fillMouseEventData registerMouseEventCallback registerWheelEventCallback registerUiEventCallback registerFocusEventCallback fillDeviceOrientationEventData registerDeviceOrientationEventCallback fillDeviceMotionEventData registerDeviceMotionEventCallback screenOrientation fillOrientationChangeEventData registerOrientationChangeEventCallback fillFullscreenChangeEventData registerFullscreenChangeEventCallback JSEvents_requestFullscreen JSEvents_resizeCanvasForFullscreen registerRestoreOldStyle hideEverythingExceptGivenElement restoreHiddenElements setLetterbox softFullscreenResizeWebGLRenderTarget doRequestFullscreen fillPointerlockChangeEventData registerPointerlockChangeEventCallback registerPointerlockErrorEventCallback requestPointerLock fillVisibilityChangeEventData registerVisibilityChangeEventCallback registerTouchEventCallback fillGamepadEventData registerGamepadEventCallback registerBeforeUnloadEventCallback fillBatteryEventData registerBatteryEventCallback setCanvasElementSize getCanvasElementSize jsStackTrace getCallstack convertPCtoSourceLocation wasiRightsToMuslOFlags wasiOFlagsToMuslOFlags initRandomFill randomFill safeSetTimeout setImmediateWrapped safeRequestAnimationFrame clearImmediateWrapped registerPostMainLoop registerPreMainLoop getPromise makePromise idsToPromises makePromiseCallback Browser_asyncPrepareDataCounter isLeapYear ydayFromDate arraySum addDays getSocketFromFD getSocketAddress heapObjectForWebGLType toTypedArrayIndex webgl_enable_ANGLE_instanced_arrays webgl_enable_OES_vertex_array_object webgl_enable_WEBGL_draw_buffers webgl_enable_WEBGL_multi_draw webgl_enable_EXT_polygon_offset_clamp webgl_enable_EXT_clip_control webgl_enable_WEBGL_polygon_mode emscriptenWebGLGet computeUnpackAlignedImageSize colorChannelsInGlTextureFormat emscriptenWebGLGetTexPixelData emscriptenWebGLGetUniform webglGetUniformLocation webglPrepareUniformLocationsBeforeFirstUse webglGetLeftBracePos emscriptenWebGLGetVertexAttrib __glGetActiveAttribOrUniform writeGLArray registerWebGlEventCallback runAndAbortIfError ALLOC_NORMAL ALLOC_STACK allocate writeStringToMemory writeAsciiToMemory allocateUTF8 allocateUTF8OnStack demangle stackTrace getNativeTypeSize getFunctionArgsName createJsInvokerSignature PureVirtualError registerInheritedInstance unregisterInheritedInstance getInheritedInstanceCount getLiveInheritedInstances setDelayFunction count_emval_handles".split(" ").forEach(function(b) {
    oa(b);
  });
  "run out err callMain abort wasmExports HEAPF32 HEAPF64 HEAP8 HEAPU8 HEAP16 HEAPU16 HEAP32 HEAPU32 HEAP64 HEAPU64 writeStackCookie checkStackCookie INT53_MAX INT53_MIN bigintToI53Checked stackSave stackRestore stackAlloc createNamedFunction ptrToString getHeapMax growMemory ENV ERRNO_CODES DNS Protocols Sockets timers warnOnce readEmAsmArgsArray getExecutableName alignMemory wasmTable wasmMemory noExitRuntime addOnPreRun addOnPostRun freeTableIndexes functionsInTableMap setValue getValue PATH PATH_FS UTF8Decoder UTF8ArrayToString UTF8ToString stringToUTF8Array stringToUTF8 lengthBytesUTF8 AsciiToString UTF16Decoder UTF16ToString stringToUTF16 lengthBytesUTF16 UTF32ToString stringToUTF32 lengthBytesUTF32 JSEvents specialHTMLTargets findCanvasEventTarget currentFullscreenStrategy restoreOldWindowedStyle UNWIND_CACHE ExitStatus getEnvStrings checkWasiClock flush_NO_FILESYSTEM emSetImmediate emClearImmediate_deps emClearImmediate promiseMap getExceptionMessageCommon getCppExceptionTag getCppExceptionThrownObjectFromWebAssemblyException Browser requestFullscreen requestFullScreen setCanvasSize getUserMedia createContext getPreloadedImageData__data wget MONTH_DAYS_REGULAR MONTH_DAYS_LEAP MONTH_DAYS_REGULAR_CUMULATIVE MONTH_DAYS_LEAP_CUMULATIVE SYSCALLS tempFixedLengthArray miniTempWebGLFloatBuffers miniTempWebGLIntBuffers GL AL GLUT EGL GLEW IDBStore SDL SDL_gfx print printErr jstoi_s InternalError BindingError throwInternalError throwBindingError registeredTypes awaitingDependencies typeDependencies tupleRegistrations structRegistrations sharedRegisterType whenDependentTypesAreResolved getTypeName getFunctionName heap32VectorToArray requireRegisteredType usesDestructorStack checkArgCount getEnumValueType getRequiredArgCount createJsInvoker UnboundTypeError EmValType EmValOptionalType throwUnboundTypeError ensureOverloadTable exposePublicSymbol replacePublicSymbol embindRepr registeredInstances getBasestPointer getInheritedInstance registeredPointers registerType integerReadValueFromPointer enumReadValueFromPointer floatReadValueFromPointer assertIntegerRange readPointer runDestructors craftInvokerFunction embind__requireFunction genericPointerToWireType constNoSmartPtrRawPointerToWireType nonConstNoSmartPtrRawPointerToWireType init_RegisteredPointer RegisteredPointer RegisteredPointer_fromWireType runDestructor releaseClassHandle finalizationRegistry detachFinalizer_deps detachFinalizer attachFinalizer makeClassHandle init_ClassHandle ClassHandle throwInstanceAlreadyDeleted deletionQueue flushPendingDeletes delayFunction RegisteredClass shallowCopyInternalPointer downcastPointer upcastPointer validateThis char_0 char_9 makeLegalFunctionName emval_freelist emval_handles emval_symbols getStringOrSymbol Emval emval_returnValue emval_lookupTypes emval_methodCallers emval_addMethodCaller".split(" ").forEach(oa);
  k.getExceptionMessage = Ya;
  k.incrementExceptionRefcount = (b) => {
    b = Ta(b);
    oc(b);
  };
  k.decrementExceptionRefcount = (b) => {
    b = Ta(b);
    pc(b);
  };
  var Fb = A("___getTypeName"), qc = A("_malloc"), M = A("_free"), ja = A("_emscripten_stack_get_end"), Aa = A("___trap"), rc = A("_emscripten_stack_init"), Xa = A("__emscripten_stack_restore"), Va = A("__emscripten_stack_alloc"), Ua = A("_emscripten_stack_get_current"), pc = A("___cxa_decrement_exception_refcount"), oc = A("___cxa_increment_exception_refcount"), Sa = A("___thrown_object_from_unwind_exception"), Wa = A("___get_exception_message"), Ra = A("___cpp_exception"), za = A("wasmMemory"), I = A("wasmTable"), sc = { __assert_fail: (b, a, c, d) => x(`Assertion failed: ${L(b)}, at: ` + [a ? L(a) : "unknown filename", c, d ? L(d) : "unknown function"]), __throw_exception_with_stack_trace: (b) => {
    b = new WebAssembly.Exception(Ra, [b], { traceStack: true });
    b.message = Ya(b);
    throw b;
  }, _abort_js: () => x("native code called abort()"), _embind_register_bigint: (b, a, c, d, e) => {
    a = P(a);
    const g = 0n === d;
    let f = (h) => h;
    if (g) {
      const h = 8 * c;
      f = (m) => BigInt.asUintN(h, m);
      e = f(e);
    }
    T(b, { name: a, j: f, m: (h, m) => {
      if ("number" == typeof m) {
        m = BigInt(m);
      } else if ("bigint" != typeof m) {
        throw new TypeError(`Cannot convert "${U(m)}" to ${this.name}`);
      }
      cb(a, m, d, e);
      return m;
    }, A: bb(a, c, !g), s: null });
  }, _embind_register_bool: (b, a, c, d) => {
    a = P(a);
    T(b, { name: a, j: function(e) {
      return !!e;
    }, m: function(e, g) {
      return g ? c : d;
    }, A: function(e) {
      return this.j(B[e]);
    }, s: null });
  }, _embind_register_class: (b, a, c, d, e, g, f, h, m, r, n, q, u) => {
    n = P(n);
    g = V(e, g);
    h &&= V(f, h);
    r &&= V(m, r);
    u = V(q, u);
    var v = tb(n);
    sb(v, function() {
      W(`Cannot construct ${n} due to unbound types`, [d]);
    });
    X([b, a, c], d ? [d] : [], (w) => {
      w = w[0];
      if (d) {
        var C = w.h;
        var N = C.D;
      } else {
        N = pb.prototype;
      }
      w = qb(n, function(...Oa) {
        if (Object.getPrototypeOf(this) !== O) {
          throw new S(`Use 'new' to construct ${n}`);
        }
        if (void 0 === D.G) {
          throw new S(`${n} has no accessible constructor`);
        }
        var Kb = D.G[Oa.length];
        if (void 0 === Kb) {
          throw new S(`Tried to invoke ctor of ${n} with invalid number of parameters (${Oa.length}) - expected (${Object.keys(D.G).toString()}) parameters instead!`);
        }
        return Kb.apply(this, Oa);
      });
      var O = Object.create(N, { constructor: { value: w } });
      w.prototype = O;
      var D = new ub(n, w, O, u, C, g, h, r);
      if (D.u) {
        var J;
        (J = D.u).K ?? (J.K = []);
        D.u.K.push(D);
      }
      C = new Bb(n, D, true, false, false);
      J = new Bb(n + "*", D, false, false, false);
      N = new Bb(n + " const*", D, false, true, false);
      hb[b] = { pointerType: J, W: N };
      Cb(v, w);
      return [C, J, N];
    });
  }, _embind_register_class_class_function: (b, a, c, d, e, g, f, h) => {
    var m = Mb(c, d);
    a = P(a);
    a = Nb(a);
    g = V(e, g, h);
    X([], [b], (r) => {
      function n() {
        W(`Cannot call ${q} due to unbound types`, m);
      }
      r = r[0];
      var q = `${r.name}.${a}`;
      a.startsWith("@@") && (a = Symbol[a.substring(2)]);
      var u = r.h.constructor;
      void 0 === u[a] ? (n.C = c - 1, u[a] = n) : (rb(u, a, q), u[a].v[c - 1] = n);
      X([], m, (v) => {
        v = Lb(q, [v[0], null].concat(v.slice(1)), null, g, f, h);
        void 0 === u[a].v ? (v.C = c - 1, u[a] = v) : u[a].v[c - 1] = v;
        if (r.h.K) {
          for (const w of r.h.K) {
            w.constructor.hasOwnProperty(a) || (w.constructor[a] = v);
          }
        }
        return [];
      });
      return [];
    });
  }, _embind_register_class_constructor: (b, a, c, d, e, g) => {
    l(0 < a);
    var f = Mb(a, c);
    e = V(d, e);
    X([], [b], (h) => {
      h = h[0];
      var m = `constructor ${h.name}`;
      void 0 === h.h.G && (h.h.G = []);
      if (void 0 !== h.h.G[a - 1]) {
        throw new S(`Cannot register multiple constructors with identical number of parameters (${a - 1}) for class '${h.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
      }
      h.h.G[a - 1] = () => {
        W(`Cannot construct ${h.name} due to unbound types`, f);
      };
      X([], f, (r) => {
        r.splice(1, 0, null);
        h.h.G[a - 1] = Lb(m, r, null, e, g);
        return [];
      });
      return [];
    });
  }, _embind_register_class_function: (b, a, c, d, e, g, f, h, m) => {
    var r = Mb(c, d);
    a = P(a);
    a = Nb(a);
    g = V(e, g, m);
    X([], [b], (n) => {
      function q() {
        W(`Cannot call ${u} due to unbound types`, r);
      }
      n = n[0];
      var u = `${n.name}.${a}`;
      a.startsWith("@@") && (a = Symbol[a.substring(2)]);
      h && n.h.da.push(a);
      var v = n.h.D, w = v[a];
      void 0 === w || void 0 === w.v && w.className !== n.name && w.C === c - 2 ? (q.C = c - 2, q.className = n.name, v[a] = q) : (rb(v, a, u), v[a].v[c - 2] = q);
      X([], r, (C) => {
        C = Lb(u, C, n, g, f, m);
        void 0 === v[a].v ? (C.C = c - 2, v[a] = C) : v[a].v[c - 2] = C;
        return [];
      });
      return [];
    });
  }, _embind_register_class_property: (b, a, c, d, e, g, f, h, m, r) => {
    a = P(a);
    e = V(d, e);
    X([], [b], (n) => {
      n = n[0];
      var q = `${n.name}.${a}`, u = { get() {
        W(`Cannot access ${q} due to unbound types`, [c, f]);
      }, enumerable: true, configurable: true };
      u.set = m ? () => W(`Cannot access ${q} due to unbound types`, [c, f]) : () => {
        throw new S(q + " is a read-only property");
      };
      Object.defineProperty(n.h.D, a, u);
      X([], m ? [c, f] : [c], (v) => {
        var w = v[0], C = { get() {
          var O = Ob(this, n, q + " getter");
          return w.j(e(g, O));
        }, enumerable: true };
        if (m) {
          m = V(h, m);
          var N = v[1];
          C.set = function(O) {
            var D = Ob(this, n, q + " setter"), J = [];
            m(r, D, N.m(J, O));
            Hb(J);
          };
        }
        Object.defineProperty(n.h.D, a, C);
        return [];
      });
      return [];
    });
  }, _embind_register_emval: (b) => T(b, Sb), _embind_register_enum: (b, a, c, d, e) => {
    a = P(a);
    e = 0 === e ? "object" : 1 === e ? "number" : "string";
    switch (e) {
      case "object":
        let f = function() {
        };
        f.values = {};
        T(b, { name: a, constructor: f, valueType: e, j: function(h) {
          return this.constructor.values[h];
        }, m: (h, m) => m.value, A: Tb(a, c, d), s: null });
        sb(a, f);
        break;
      case "number":
        var g = {};
        T(b, { name: a, O: g, valueType: e, j: (h) => h, m: (h, m) => m, A: Tb(a, c, d), s: null });
        sb(a, g);
        delete k[a].C;
        break;
      case "string":
        g = {}, T(b, { name: a, V: {}, U: {}, O: g, valueType: e, j: function(h) {
          return this.U[h];
        }, m: function(h, m) {
          return this.V[m];
        }, A: Tb(a, c, d), s: null }), sb(a, g), delete k[a].C;
    }
  }, _embind_register_enum_value: (b, a, c) => {
    var d = Ub(b, "enum");
    a = P(a);
    switch (d.valueType) {
      case "object":
        b = d.constructor;
        d = Object.create(d.constructor.prototype, { value: { value: c }, constructor: { value: qb(`${d.name}_${a}`, function() {
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
    a = P(a);
    T(b, { name: a, j: (d) => d, m: (d, e) => {
      if ("number" != typeof e && "boolean" != typeof e) {
        throw new TypeError(`Cannot convert ${U(e)} to ${this.name}`);
      }
      return e;
    }, A: Vb(a, c), s: null });
  }, _embind_register_integer: (b, a, c, d, e) => {
    a = P(a);
    let g = (h) => h;
    if (0 === d) {
      var f = 32 - 8 * c;
      g = (h) => h << f >>> f;
      e = g(e);
    }
    T(b, { name: a, j: g, m: (h, m) => {
      if ("number" != typeof m && "boolean" != typeof m) {
        throw new TypeError(`Cannot convert "${U(m)}" to ${a}`);
      }
      cb(a, m, d, e);
      return m;
    }, A: bb(a, c, 0 !== d), s: null });
  }, _embind_register_memory_view: (b, a, c) => {
    function d(g) {
      return new e(ra.buffer, y[g + 4 >> 2], y[g >> 2]);
    }
    var e = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array][a];
    c = P(c);
    T(b, { name: c, j: d, A: d }, { aa: true });
  }, _embind_register_optional: (b) => {
    T(b, Wb);
  }, _embind_register_std_string: (b, a) => {
    a = P(a);
    T(b, { name: a, j(c) {
      var d = L(c + 4, y[c >> 2], true);
      M(c);
      return d;
    }, m(c, d) {
      d instanceof ArrayBuffer && (d = new Uint8Array(d));
      var e = "string" == typeof d;
      if (!(e || ArrayBuffer.isView(d) && 1 == d.BYTES_PER_ELEMENT)) {
        throw new S("Cannot pass non-string to std::string");
      }
      var g = e ? Xb(d) : d.length;
      var f = qc(4 + g + 1), h = f + 4;
      y[f >> 2] = g;
      e ? Z(d, h, g + 1) : B.set(d, h);
      null !== c && c.push(M, f);
      return f;
    }, A: Ab, s(c) {
      M(c);
    } });
  }, _embind_register_std_wstring: (b, a, c) => {
    c = P(c);
    if (2 === a) {
      var d = Zb;
      var e = $b;
      var g = ac;
    } else {
      l(4 === a, "only 2-byte and 4-byte strings are currently supported"), d = bc, e = cc, g = dc;
    }
    T(b, { name: c, j: (f) => {
      var h = d(f + 4, y[f >> 2] * a, true);
      M(f);
      return h;
    }, m: (f, h) => {
      if ("string" != typeof h) {
        throw new S(`Cannot pass non-string to C++ string type ${c}`);
      }
      var m = g(h), r = qc(4 + m + a);
      y[r >> 2] = m / a;
      e(h, r + 4, m + a);
      null !== f && f.push(M, r);
      return r;
    }, A: Ab, s(f) {
      M(f);
    } });
  }, _embind_register_void: (b, a) => {
    a = P(a);
    T(b, { S: true, name: a, j: () => {
    }, m: () => {
    } });
  }, _emval_create_invoker: (b, a, c) => {
    var [d, ...e] = gc(b, a);
    a = d.m.bind(d);
    var g = e.map((m) => m.A.bind(m));
    b--;
    var f = { toValue: Rb };
    b = g.map((m, r) => {
      var n = `argFromPtr${r}`;
      f[n] = m;
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
        f.getStringOrSymbol = jc, h = "toValue(handle)[getStringOrSymbol(methodName)]";
    }
    h += `(${b})`;
    d.S || (f.toReturnWire = a, f.emval_returnValue = hc, h = `return emval_returnValue(toReturnWire, destructorsRef, ${h})`);
    h = `return function (handle, methodName, destructorsRef, args) {
  ${h}
  }`;
    c = new Function(Object.keys(f), h)(...Object.values(f));
    h = `methodCaller<(${e.map((m) => m.name)}) => ${d.name}>`;
    return fc(qb(h, c));
  }, _emval_decref: Qb, _emval_incref: (b) => {
    9 < b && (Y[b + 1] += 1);
  }, _emval_invoke: (b, a, c, d, e) => ec[b](a, c, d, e), _emval_run_destructors: (b) => {
    var a = Rb(b);
    Hb(a);
    Qb(b);
  }, _tzset_js: (b, a, c, d) => {
    var e = (/* @__PURE__ */ new Date()).getFullYear(), g = new Date(e, 0, 1).getTimezoneOffset();
    e = new Date(e, 6, 1).getTimezoneOffset();
    y[b >> 2] = 60 * Math.max(g, e);
    F[a >> 2] = Number(g != e);
    a = (f) => {
      var h = Math.abs(f);
      return `UTC${0 <= f ? "-" : "+"}${String(Math.floor(h / 60)).padStart(2, "0")}${String(h % 60).padStart(2, "0")}`;
    };
    b = a(g);
    a = a(e);
    l(b);
    l(a);
    l(16 >= Xb(b), `timezone name truncated to fit in TZNAME_MAX (${b})`);
    l(16 >= Xb(a), `timezone name truncated to fit in TZNAME_MAX (${a})`);
    e < g ? (Z(b, c, 17), Z(a, d, 17)) : (Z(b, d, 17), Z(a, c, 17));
  }, clock_time_get: function(b, a, c) {
    if (!(0 <= b && 3 >= b)) {
      return 28;
    }
    va[c >> 3] = BigInt(Math.round(1e6 * (0 === b ? Date.now() : performance.now())));
    return 0;
  }, emscripten_resize_heap: (b) => {
    var a = B.length;
    b >>>= 0;
    l(b > a);
    if (2147483648 < b) {
      return p(`Cannot enlarge memory, requested ${b} bytes, but the limit is ${2147483648} bytes!`), false;
    }
    for (var c = 1; 4 >= c; c *= 2) {
      var d = a * (1 + 0.2 / c);
      d = Math.min(d, b + 100663296);
      var e = Math, g = e.min;
      d = Math.max(b, d);
      l(65536, "alignment argument is required");
      e = g.call(e, 2147483648, 65536 * Math.ceil(d / 65536));
      a: {
        g = e;
        d = za.buffer.byteLength;
        try {
          za.grow((g - d + 65535) / 65536 | 0);
          ya();
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
    for (e of mc()) {
      var g = a + c;
      y[b + d >> 2] = g;
      c += Z(e, g, Infinity) + 1;
      d += 4;
    }
    return 0;
  }, environ_sizes_get: (b, a) => {
    var c = mc();
    y[b >> 2] = c.length;
    b = 0;
    for (var d of c) {
      b += Xb(d) + 1;
    }
    y[a >> 2] = b;
    return 0;
  }, fd_close: () => {
    x("fd_close called without SYSCALLS_REQUIRE_FILESYSTEM");
  }, fd_seek: function() {
    return 70;
  }, fd_write: (b, a, c, d) => {
    for (var e = 0, g = 0; g < c; g++) {
      var f = y[a >> 2], h = y[a + 4 >> 2];
      a += 8;
      for (var m = 0; m < h; m++) {
        var r = b, n = B[f + m], q = nc[r];
        l(q);
        0 === n || 10 === n ? ((1 === r ? fa : p)(Qa(q)), q.length = 0) : q.push(n);
      }
      e += h;
    }
    y[d >> 2] = e;
    return 0;
  } }, tc, H;
  H = await async function() {
    function b(d) {
      d = H = d.exports;
      var e = {};
      for (f in d) {
        var g = d[f];
        e[f] = "function" == typeof g ? Da(g) : g;
      }
      var f = H = e;
      l("undefined" != typeof f.__getTypeName, "missing Wasm export: __getTypeName");
      l("undefined" != typeof f.malloc, "missing Wasm export: malloc");
      l("undefined" != typeof f.free, "missing Wasm export: free");
      l("undefined" != typeof f.fflush, "missing Wasm export: fflush");
      l("undefined" != typeof f.__funcs_on_exit, "missing Wasm export: __funcs_on_exit");
      l("undefined" != typeof f.emscripten_stack_get_end, "missing Wasm export: emscripten_stack_get_end");
      l("undefined" != typeof f.emscripten_stack_get_base, "missing Wasm export: emscripten_stack_get_base");
      l("undefined" != typeof f.__trap, "missing Wasm export: __trap");
      l("undefined" != typeof f.emscripten_stack_init, "missing Wasm export: emscripten_stack_init");
      l("undefined" != typeof f.emscripten_stack_get_free, "missing Wasm export: emscripten_stack_get_free");
      l("undefined" != typeof f._emscripten_stack_restore, "missing Wasm export: _emscripten_stack_restore");
      l("undefined" != typeof f._emscripten_stack_alloc, "missing Wasm export: _emscripten_stack_alloc");
      l("undefined" != typeof f.emscripten_stack_get_current, "missing Wasm export: emscripten_stack_get_current");
      l("undefined" != typeof f.__cxa_decrement_exception_refcount, "missing Wasm export: __cxa_decrement_exception_refcount");
      l("undefined" != typeof f.__cxa_increment_exception_refcount, "missing Wasm export: __cxa_increment_exception_refcount");
      l("undefined" != typeof f.__thrown_object_from_unwind_exception, "missing Wasm export: __thrown_object_from_unwind_exception");
      l("undefined" != typeof f.__get_exception_message, "missing Wasm export: __get_exception_message");
      l("undefined" != typeof f.memory, "missing Wasm export: memory");
      l("undefined" != typeof f.__indirect_function_table, "missing Wasm export: __indirect_function_table");
      l("undefined" != typeof f.__cpp_exception, "missing Wasm export: __cpp_exception");
      Fb = G("__getTypeName", 1);
      qc = G("malloc", 1);
      M = G("free", 1);
      ja = f.emscripten_stack_get_end;
      Aa = f.__trap;
      rc = f.emscripten_stack_init;
      Xa = f._emscripten_stack_restore;
      Va = f._emscripten_stack_alloc;
      Ua = f.emscripten_stack_get_current;
      pc = G("__cxa_decrement_exception_refcount", 1);
      oc = G("__cxa_increment_exception_refcount", 1);
      Sa = G("__thrown_object_from_unwind_exception", 1);
      Wa = G("__get_exception_message", 3);
      za = f.memory;
      I = f.__indirect_function_table;
      Ra = f.__cpp_exception;
      Ea();
      ya();
      return H;
    }
    var a = k, c = { env: sc, wasi_snapshot_preview1: sc };
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
    Fa ??= k.locateFile ? k.locateFile ? k.locateFile("libavoid.wasm", ca) : ca + "libavoid.wasm" : new URL("libavoid.wasm", import.meta.url).href;
    return function(d) {
      l(k === a, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
      a = null;
      return b(d.instance);
    }(await Ia(c));
  }();
  (function() {
    function b() {
      l(!tc);
      tc = true;
      k.calledRun = true;
      if (!ha) {
        l(!xa);
        xa = true;
        ka();
        H.__wasm_call_ctors();
        pa?.(k);
        k.onRuntimeInitialized?.();
        na("onRuntimeInitialized");
        l(!k._main, 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
        ka();
        if (k.postRun) {
          for ("function" == typeof k.postRun && (k.postRun = [k.postRun]); k.postRun.length; ) {
            var a = k.postRun.shift();
            Ka.push(a);
          }
        }
        na("postRun");
        Ja(Ka);
      }
    }
    rc();
    ia();
    if (k.preRun) {
      for ("function" == typeof k.preRun && (k.preRun = [k.preRun]); k.preRun.length; ) {
        Ma();
      }
    }
    na("preRun");
    Ja(La);
    k.setStatus ? (k.setStatus("Running..."), setTimeout(() => {
      setTimeout(() => k.setStatus(""), 1);
      b();
    }, 1)) : b();
    ka();
  })();
  xa ? moduleRtn = k : moduleRtn = new Promise((b, a) => {
    pa = b;
    qa = a;
  });
  for (const b of Object.keys(k)) {
    b in moduleArg || Object.defineProperty(moduleArg, b, { configurable: true, get() {
      x(`Access to module property ('${b}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`);
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
