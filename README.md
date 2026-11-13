# libavoid-js

JavaScript and TypeScript port of [libavoid](https://www.adaptagrams.org/documentation/libavoid.html),
the C++ library for object-avoiding connector routing in diagrams, compiled to
WebAssembly. It routes connectors (edges) around shapes, as polylines or
orthogonally, and updates the routes incrementally when shapes move.

**[Documentation](https://aksem.github.io/libavoid-js/)** ·
[API reference](https://aksem.github.io/libavoid-js/modules.html) ·
[Changelog](CHANGELOG.md)

## Installation

```sh
npm install libavoid-js
```

The library works in both web browsers and Node.js: Chrome 93, Firefox 92,
Safari 15.4, Node 18.3.0 or newer. TypeScript typings are included.

Upgrading from 0.4.x or a 0.5 beta? See the [migration guide](docs/migration-0.5.md).

## Quick start

```js
import { AvoidLib } from 'libavoid-js';

await AvoidLib.load(); // optionally: AvoidLib.load('/path/to/libavoid.wasm')
const Avoid = AvoidLib.getInstance();

const router = new Avoid.Router(Avoid.RouterFlag.OrthogonalRouting);
router.setRoutingParameter(Avoid.RoutingParameter.shapeBufferDistance, 10);

// Shapes: a rectangle (top-left corner + size) or a polygon.
const a = router.addShape({ x: 0, y: 0, width: 100, height: 50 });
const b = router.addShape({ x: 300, y: 150, width: 100, height: 50 });

// Pins: where connectors attach, as a fraction of the shape's size.
a.addPin({ classId: 1, x: 1, y: 0.5, directions: Avoid.ConnDirFlag.ConnDirRight });
b.addPin({ classId: 1, x: 0, y: 0.5, directions: Avoid.ConnDirFlag.ConnDirLeft });

const conn = router.addConnector({ shape: a, pin: 1 }, { shape: b, pin: 1 });
conn.setCallback((c) => console.log(c.displayRoute())); // [Point { x, y }, ...]

router.processTransaction(); // routes everything that changed

router.moveShape(b, 0, 40); // by a delta, or to a new rectangle / polygon
router.processTransaction();

router.delete(); // frees the router and everything added to it
```

Changes (`add*`, `moveShape`, `delete`, ...) are collected and routed together by
`router.processTransaction()`, which calls the callbacks of re-routed connectors.

Only the router needs `.delete()`: it frees everything added to it. Points,
rectangles and routes are plain JS values.

## Guides

- [Connectors](docs/connectors.md): transactions and callbacks, connector ends, pins, junctions.
- [Troubleshooting](docs/troubleshooting.md)

The full API reference is on the [documentation site](https://aksem.github.io/libavoid-js/).

## Integrations

libavoid-js can be used directly with your own diagram renderer or through
an integration with an existing diagramming framework.

- **[JointJS — @joint/router-avoid](https://docs.jointjs.com/learn/features/automatic-layouts/standalone-link-routing/)**
  integrates libavoid-js with JointJS graphs. It tracks changes to elements
  and links, updates connector routes, and supports routing in a Web Worker.

- **[Sprotty — sprotty-routing-libavoid](https://github.com/Aksem/sprotty-routing-libavoid)**
  adds libavoid-based edge routing to Sprotty, with setup instructions and
  anchors for rectangles, ellipses, and diamonds.

- **[ELK JSON — @mr_mint/elkjs-libavoid](https://github.com/MrMint/elkjs-libavoid)**
  uses libavoid-js to route edges around nodes in ELK JSON graphs.
  Position nodes with ELK.js or another tool, then compute connector routes
  while preserving those positions.

These integrations use libavoid-js as their routing engine. Follow each
project's documentation for installation, supported versions, and
WebAssembly asset setup.

## Contributing and support

Contributions are very welcome! Feel free to open a pull request, report a bug, suggest a feature or ask a question in [GitHub Issues](https://github.com/Aksem/libavoid-js/issues). See [CONTRIBUTING.md](https://github.com/Aksem/libavoid-js/blob/master/CONTRIBUTING.md) for how to build, test and document the library.

Please keep in mind that libavoid-js is an open-source initiative that we work on in our free time. We read every issue and do our best to help, but we can't promise response times or deadlines for fixes and new features.

### Paid support

If you need something done within a fixed timeframe, or want dedicated help, paid support is available. This can be any kind of work on this repository, for example:

- bug fixes, new features or performance improvements in libavoid-js,
- integrating libavoid-js into your project,
- building new projects on top of libavoid-js.

To discuss your needs, please get in touch using the contact details on the [maintainer's GitHub profile](https://github.com/Aksem).

## History

This project was started as part of a research project at [Technische Universität Wien](https://www.tuwien.at) and is further developed by its author and contributors.

<a href="https://www.tuwien.at">
  <img src="https://raw.githubusercontent.com/Aksem/libavoid-js/refs/heads/master/docs/assets/TU_Logo_schwarz_RGB.svg" width="200" alt="Technische Universität Wien Logo" />
</a>
