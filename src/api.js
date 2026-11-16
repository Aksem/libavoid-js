// Public JS API, installed on the embind classes of embind/bindings.cpp.
//
// The bindings expose raw `_`-prefixed methods that take only numbers, handles
// and packed coordinates. This file adds the public methods on the same
// prototypes (no wrapper objects, so there is one JS object per handle):
//  - validates every argument before calling into wasm: the module is built
//    with ABORT_ON_WASM_EXCEPTIONS, and embind lets NaN and `undefined` enum
//    values through;
//  - dispatches on argument types (embind only overloads on argument count);
//  - converts geometry to and from Point / Rect / plain arrays;
//  - tracks ownership: the router owns shapes, junctions and connectors, and
//    shapes/junctions own their pins. `.delete()` / `Symbol.dispose` remove an
//    object through its owner, and using a removed object throws instead of
//    touching freed memory.
// See docs/dev/js-native-api-plan.md.
import { Point, Rect, coordsFromPoints, finite, pointsFromCoords, rectFromBox } from "./geometry.js";

const CONN_DIR_ALL = 15;
const MAX_UINT32 = 0xffffffff;
// Pin class ids: libavoid asserts > 0 and != CONNECTIONPIN_UNSET (INT_MAX).
// CONNECTIONPIN_CENTRE (INT_MAX - 1) is allowed: code generated from
// libavoid's debug output uses it (e.g. examples/benchmark.js).
const MAX_PIN_CLASS_ID = 0x7fffffff - 1;

// Methods whose first parameter is a libavoid enum: [class, method, enum].
const ENUM_PARAMETERS = [
  ["Router", "setRoutingParameter", "RoutingParameter"],
  ["Router", "setRoutingOption", "RoutingOption"],
  ["ConnRef", "setRoutingType", "ConnType"],
];

/**
 * Installs the public API on an initialised module. Stub modules without the
 * bound classes (in tests) are left unchanged.
 */
export function installApi(avoid) {
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

// ---------------------------------------------------------------------------
// Ownership

function createOwnership() {
  const removed = new WeakSet();
  const children = new WeakMap(); // owner -> Set of owned handles
  const owners = new WeakMap(); // handle -> owner
  return {
    add(owner, child) {
      let set = children.get(owner);
      if (!set) children.set(owner, (set = new Set()));
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
    },
  };
}

/**
 * Wraps the public methods of `proto` so that calling them on a removed
 * handle throws (like embind does for deleted JS-owned objects).
 */
function guardDeletedUse(proto, className, ownership) {
  const skip = new Set(["constructor", "delete", "isDeleted", "isAliasOf", "clone", "deleteLater"]);
  for (const name of Object.getOwnPropertyNames(proto)) {
    if (skip.has(name) || name.startsWith("_")) continue;
    const fn = Object.getOwnPropertyDescriptor(proto, name).value;
    if (typeof fn !== "function") continue;
    proto[name] = function (...args) {
      if (ownership.isRemoved(this)) {
        throw new Error(`${this.constructor?.name || className}.${name}: the object was already deleted`);
      }
      return fn.apply(this, args);
    };
  }
}

/** Throws unless `value` is a live handle of class `Cls`. */
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
  return function () {
    throw new TypeError(`${className}.clone: not supported, the object is owned by its router`);
  };
}

// ---------------------------------------------------------------------------
// Argument helpers

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
  if (value === undefined) return fallback;
  if (typeof value !== "boolean") {
    throw new TypeError(`${context}: ${name} must be a boolean, got ${describeValue(value)}`);
  }
  return value;
}

function directionsOf(value, name, context) {
  return value === undefined ? CONN_DIR_ALL : integerIn(value, 0, CONN_DIR_ALL, name, context);
}

/** The `id` option: 0 (the default) lets libavoid assign a unique id. */
function idOption(options, context) {
  if (options === undefined) return 0;
  requireObject(options, "options", context);
  return options.id === undefined ? 0 : integerIn(options.id, 0, MAX_UINT32, "options.id", context);
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
    finite(rect.height, `${name}.height`, context),
  ];
}

function polygonCoords(points, minPoints, context) {
  const coords = coordsFromPoints(points, context);
  if (points.length < minPoints) {
    throw new RangeError(
      `${context}: expected at least ${minPoints} point${minPoints === 1 ? "" : "s"}, got ${points.length}`,
    );
  }
  return coords;
}

// ---------------------------------------------------------------------------
// Enums

// Enums are plain numbers, which embind passes to C++ unchecked: `undefined`
// (e.g. a misspelt enum key) would silently become 0, and an out-of-range
// number would index past libavoid's parameter arrays.
function installEnumArgumentChecks(avoid) {
  for (const [className, methodName, enumName] of ENUM_PARAMETERS) {
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
  // The parameter value must be finite too (embind lets NaN through).
  const setRoutingParameter = avoid.Router.prototype.setRoutingParameter;
  avoid.Router.prototype.setRoutingParameter = function (parameter, value) {
    finite(value, "value", "Router.setRoutingParameter");
    return setRoutingParameter.call(this, parameter, value);
  };
}

// ---------------------------------------------------------------------------
// Router

function installRouter(avoid, ownership) {
  const { Router, ShapeRef, JunctionRef, ConnRef } = avoid;
  const proto = Router.prototype;
  const raw = {
    delete: proto.delete,
    processTransaction: proto.processTransaction,
    deleteShape: proto.deleteShape,
    deleteJunction: proto.deleteJunction,
    deleteConnector: proto.deleteConnector,
  };
  const owned = (router, handle, Cls, name, context) => {
    requireHandle(handle, Cls, ownership, name, context);
    requireOwnedBy(handle, router, ownership, name, context);
    return handle;
  };

  // libavoid asserts (and the module aborts) when a shape or junction is
  // deleted in the same transaction it was added in. Track those and throw.
  const pendingAdds = new WeakMap(); // router -> Set of shapes/junctions
  const markPending = (router, handle) => {
    let pending = pendingAdds.get(router);
    if (!pending) pendingAdds.set(router, (pending = new Set()));
    pending.add(handle);
    return handle;
  };
  // libavoid asserts that moving a shape keeps its number of points
  // (Obstacle::setNewPoly). The count is fixed at creation, so track it here.
  const pointCounts = new WeakMap(); // shape -> number of points
  const requirePointCount = (shape, count, context) => {
    const expected = pointCounts.get(shape);
    if (count !== expected) {
      throw new RangeError(
        `${context}: a shape keeps its number of points (libavoid); this shape has ${expected}, ` +
          `got ${count}. Delete it and add a new shape instead.`,
      );
    }
  };

  const requireNotPending = (router, handle, name, context) => {
    if (pendingAdds.get(router)?.has(handle)) {
      throw new Error(
        `${context}: the ${name} was added in the current transaction; ` +
          "call processTransaction() before deleting it",
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
      const created = Array.isArray(shape)
        ? this._addShapePoly(polygonCoords(shape, 3, context), id)
        : this._addShapeRect(...rectArgs(shape, "shape", context), id);
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
      // Validate everything before creating anything.
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
    },
  });

  // Deleting the router frees everything it owns, so mark all of it removed.
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

/**
 * Validates a ConnEndLike and returns a function that applies it to a
 * connector: `(conn, isSource) => void`.
 */
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

// ---------------------------------------------------------------------------
// Obstacles: ShapeRef and JunctionRef

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
    },
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
          pin.insideOffset === undefined ? 0 : finite(pin.insideOffset, "pin.insideOffset", context),
          directionsOf(pin.directions, "pin.directions", context),
        ),
      );
    },
  });

  Object.assign(JunctionRef.prototype, {
    addPin(pin) {
      const context = "JunctionRef.addPin";
      requireObject(pin, "pin", context);
      return ownership.add(
        this,
        this._addPin(
          integerIn(pin.classId, 1, MAX_PIN_CLASS_ID, "pin.classId", context),
          directionsOf(pin.directions, "pin.directions", context),
        ),
      );
    },
    recommendedPosition() {
      const { x, y } = this._recommendedPosition();
      return new Point(x, y);
    },
  });

  installRouterOwnedDelete(ShapeRef, "deleteShape", ownership);
  installRouterOwnedDelete(JunctionRef, "deleteJunction", ownership);
}

/** `.delete()` / `Symbol.dispose` remove the object through its router. */
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
    clone: notCloneable(className),
  });
}

// ---------------------------------------------------------------------------
// Connectors

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
          departure: packed[4 * i + 3],
        };
      }
      return checkpoints;
    },
    setCallback(callback) {
      if (typeof callback !== "function") {
        throw new TypeError(`${context("setCallback")}: callback must be a function, got ${describeValue(callback)}`);
      }
      // C++ calls back without arguments; pass this handle, so the callback
      // gets the same object the user holds (no new handle per call).
      this._setCallback(() => callback(this));
    },
  });

  installRouterOwnedDelete(ConnRef, "deleteConnector", ownership);
}

// ---------------------------------------------------------------------------
// Connection pins

function installPin(avoid, ownership) {
  const { ShapeConnectionPin } = avoid;
  const proto = ShapeConnectionPin.prototype;
  const rawDelete = proto.delete;
  const rawIsDeleted = proto.isDeleted;
  const rawSetConnectionCost = proto.setConnectionCost;

  // The pin's destructor detaches it from its parent and from connector ends,
  // so deleting it directly is correct (and immediate, not transactional).
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
      // libavoid dereferences the parent shape, which a junction's pin does
      // not have: the module aborts.
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
    clone: notCloneable("ShapeConnectionPin"),
  });
}

// ---------------------------------------------------------------------------
// Polygon utilities (libavoid's PolygonInterface methods as free functions)

function installPolygonUtilities(avoid) {
  const raw = {
    offsetPolygon: avoid._offsetPolygon,
    boundingRectPolygon: avoid._boundingRectPolygon,
    offsetBoundingBox: avoid._offsetBoundingBox,
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
