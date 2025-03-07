# libavoid-js

Libavoid port for js. This port is created mostly using [WebIDL Bindings](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/WebIDL-Binder.html).

## Usage

There are two versions of the library:

- **Release version** of the library is in `dist` directory
- **Debug version** of the library is in `examples/lib` directory

A usage example is in `examples` directory. To try it out start http server in this
directory, just opening index.html in your browser doesn't work unfortunately.

The library works in both webbrowser and node.js environments.

## Documentation

Library API Documentation is in `api_docs_build` directory, just open `index.html`

## FAQ

* I get the following error: `RuntimeError: Aborted(CompileError: WebAssembly.instantiate(): expected magic word ...`

  It means, that libavoid.wasm file is invalid. Please check in Network tab of the browser, that it is downloaded without errors and its size is the same as of [libavoid.wasm file](https://github.com/Aksem/libavoid-js/blob/master/dist/libavoid.wasm).

## Build

### Requirements

- Git (to clone original libavoid library and build tools)
- Docker (used to run emcc)
- Python 3.5+ (used for tooling/build automation)

### Build commands

1. `python3 ./tools/generate.py`

    It will generate both release and debug versions of the library, also update documentation.

2. `npm run build`

    It will create a package with generated release version of the library.

### Debugging

Address to source map is hardcoded in `tools/generate.py` script and is always 'http://localhost:8080' in debug build.

Also, symlink to adaptagrams should be in `examples` directory to provide libavoid sources for debugger.

## History

This project was started as part of a research project at [Technische Universität Wien](https://www.tuwien.at) and is further developed by its author and contributors.

<a href="https://www.tuwien.at">
  <img src="https://raw.githubusercontent.com/Aksem/libavoid-js/refs/heads/master/docs/assets/TU_Logo_schwarz_RGB.svg" width="200" alt="Technische Universität Wien Logo" />
</a>
