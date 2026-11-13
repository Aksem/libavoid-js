---
title: Troubleshooting
group: Guides
---

# Troubleshooting

## The wasm file is not found

`AvoidLib.load()` looks for `libavoid.wasm` next to the JS file that loads it.
If your bundler or server puts the wasm somewhere else, pass its URL:

```js
await AvoidLib.load('/assets/libavoid.wasm');
```

The file to serve is `node_modules/libavoid-js/dist/libavoid.wasm`.

## `RuntimeError: Aborted(CompileError: WebAssembly.instantiate(): expected magic word ...`

The `libavoid.wasm` the browser received is not a valid wasm file, typically an
HTML error page or a file mangled by a dev server. Check in the Network tab of
the browser that it is downloaded without errors and that its size is the same
as that of the [libavoid.wasm file](https://github.com/Aksem/libavoid-js/blob/master/dist/libavoid.wasm).

## `Avoid library should be initialized before using`

{@link AvoidLibType.getInstance | AvoidLib.getInstance()} was called before
`await AvoidLib.load()` finished.

## The example does not work when opening `index.html`

Browsers do not load wasm from `file://` URLs. Serve the directory with an
HTTP server, e.g. `npx http-server examples`.

## A connector goes straight through shapes

- Check {@link ConnRef.hasValidRoute}: if it is `false`, the router found no
  route, for example because pin directions or obstacles rule out every path,
  and fell back to a straight line.
- Check that the end is attached with `{ shape, pin }`. A shape's bounds
  passed as an end are read as a free `{ x, y }` point; see
  [Connectors](./connectors.md#connector-ends).

## `TypeError` or `RangeError` from a method

Arguments are checked before they reach wasm, and the message names the method
and the argument, e.g.
`Router.setRoutingParameter: invalid RoutingParameter value 9`. A misspelt enum
name such as `Avoid.ConnType.Orthogonal` is `undefined` and throws a
`TypeError`; a number that is not a value of the enum throws a `RangeError`.
The `@throws` sections of the API reference list the errors of each method.

## Still stuck?

Ask in [GitHub Issues](https://github.com/Aksem/libavoid-js/issues).
