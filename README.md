# libavoid-js

Libavoid port for js. This port is created mostly using [WebIDL Bindings](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/WebIDL-Binder.html).

## Usage

There are two versions of the library:

- **Production version** of the library is in `dist` directory
- **Debug version** of the library is in `examples/lib` directory

A usage example is in `examples` directory. To try it out start http server in this
directory, just opening index.html in your browser doesn't work unfortunately.

## Documentation

Library API Documentation is in `api_docs_build` directory, just open `index.html`

## Build

### Requirements

- Git (to clone original libavoid library and build tools)
- Docker (used to run emcc)
- Python 3.5+ (used for tooling/build automation)

### Build commands

- `python3 ../tools/generate.py`
  
  It will generate both production and debug versions of the library, also update documentation.

## TODO

- idea: docs from c++
- tests
- extend WebIDL bindings to provide the same abilities as C++ library
- host API Docs in platform such Github Pages
- automated build in Github Actions or similar
