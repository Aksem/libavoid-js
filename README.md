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

## Build

### Requirements

- Git (to clone original libavoid library and build tools)
- Docker (used to run emcc)
- Python 3.5+ (used for tooling/build automation)

### Build commands

1. `python3 ../tools/generate.py`

    It will generate both release and debug versions of the library, also update documentation.

2. `npm run build`

    It will create a package with generated release version of the library.

### Debugging

Address to source map is hardcoded in `tools/generate.py` script and is always 'http://localhost:8080' in debug build.

Also, symlink to adaptagrams should be in `examples` directory to provide libavoid sources for debugger.

## TODO

- tests
- extend WebIDL bindings to provide the same abilities as C++ library
- host API Docs in platform such Github Pages
