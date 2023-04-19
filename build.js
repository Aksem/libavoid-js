const fs = require("fs");
const esbuild = require("esbuild");
const { copy } = require("esbuild-plugin-copy");

// release esm/mjs
esbuild
  .build({
    entryPoints: ["src/index.js"],
    outdir: "dist",
    outExtension: {
      ".js": ".mjs",
    },
    bundle: true,
    sourcemap: true,
    minify: true,
    splitting: true,
    format: "esm",
    platform: "neutral",
    external: ["module"],
    plugins: [
      copy({
        resolveFrom: "cwd",
        assets: {
          from: ["./src/generated/libavoid.wasm"],
          to: ["./dist", "./examples/dist"],
        },
        watch: true,
      }),
    ],
  })
  .then(() => {
    fs.copyFile("./dist/index.mjs", "./examples/dist/index.mjs", (err) => {
      if (err) throw err;
    });
    fs.copyFile(
      "./dist/index.mjs.map",
      "./examples/dist/index.mjs.map",
      (err) => {
        if (err) throw err;
      }
    );
  })
  .catch(() => process.exit(1));

// debug esm / mjs
esbuild
  .build({
    entryPoints: ["examples/debug-src/index.js"],
    outdir: "examples/debug-dist",
    outExtension: {
      ".js": ".mjs",
    },
    bundle: true,
    minify: false,
    splitting: true,
    format: "esm",
    platform: "neutral",
    external: ["module"],
    plugins: [
      copy({
        resolveFrom: "cwd",
        assets: {
          from: [
            "./examples/debug-src/generated/libavoid.wasm",
            "./examples/debug-src/generated/libavoid.wasm.map",
          ],
          to: ["./examples/debug-dist"],
        },
        watch: true,
      }),
    ],
  })
  .catch(() => process.exit(1));

// release cjs
// esbuild
//     .build({
//         entryPoints: ['src/index.js'],
//         outdir: 'dist',
//         outExtension: {
//             '.js': '.cjs'
//         },
//         bundle: true,
//         sourcemap: true,
//         minify: true,
//         platform: 'node',
//         target: ['node10.4']
//     })
//     .catch(() => process.exit(1));
