# Contributing to libavoid-js

Contributions are very welcome! Feel free to open a pull request, report a bug,
suggest a feature or ask a question in [GitHub Issues](https://github.com/Aksem/libavoid-js/issues).

## Build

### Requirements

- Git (to clone original libavoid library)
- Docker (used to run emcc)
- Python 3.5+ (used for tooling/build automation)

### Build commands

1. `npm run full-rebuild`

    It will generate both release and debug versions of the library.

2. If you want only to rebuild JS package without regenerating bindings, you can use the following command: `npm run build`

3. `npm test` runs the tests in Node and Chromium (run `npm run build` first, the tests also cover `dist`).

4. `npm run leakcheck` checks for memory leaks: it builds an AddressSanitizer variant of the module, runs the scenarios in `tools/leakcheck/scenarios.mjs` through the public API with LeakSanitizer, and checks with forced garbage collection that the JS side releases callbacks and handles. Also runs in CI.

### Release and debug versions

- **Release version** of the library is in `dist` directory
- **Debug version** of the library is in `examples/debug-dist` directory

A usage example is in `examples` directory. To try it out start http server in this
directory, just opening index.html in your browser doesn't work unfortunately.

### Debugging

Address to source map is hardcoded in `tools/generate.py` script and is always 'http://localhost:8080' in debug build.

Also, symlink to adaptagrams should be in `examples` directory to provide libavoid sources for debugger.

## Documentation

The documentation site is built with [TypeDoc](https://typedoc.org/) by
`npm run api-docs` into `api_docs_build` (open `index.html`), and published to
GitHub Pages by the `Docs` workflow on every push to `master`. It consists of:

- `README.md`: the start page;
- the guides in `docs/*.md`, `docs/migration-0.5.md` and `CHANGELOG.md`, added
  as pages by the `@document` tags at the top of `typings/libavoid.d.ts`. A new
  page needs a `title` and `group` in its front matter and a `@document` tag;
- the API reference, generated from `typings/libavoid.d.ts`.

Notes for maintainers that should not be published go in `docs/dev/`.

## Lessons learned

- WebIDL is a powerful concept, but implementation in emscripten toolset is not very actively developed and if certain feature is missing such as support of callbacks or you encounter a bug, you should be ready to implement or to fix it by yourself. We started with WebIDL(own fork with implementation of callbacks, support of prefixed enums and more) and then switched to embind. Embind supports more features, so probability you need to modify it is lower, and it is more performant.
