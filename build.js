const fs = require("fs");
const esbuild = require("esbuild");
const { copy } = require("esbuild-plugin-copy");

// .mjs for better node.js support
const builds = [
  { entrypoint: 'index', extension: ".js", format: "esm", platform: "browser" },
  { entrypoint: 'index-node', extension: ".mjs", format: "esm", platform: "node" },
];

for (const build of builds) {
  // release
  esbuild
    .build({
      entryPoints: [`src/${build.entrypoint}${build.extension}`],
      outdir: "dist",
      outExtension: {
        ".js": build.extension,
      },
      bundle: true,
      sourcemap: true,
      minify: true,
      splitting: build.format === "esm",
      format: build.format,
      platform: build.platform,
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
      fs.copyFile(
        './typings/libavoid.d.ts',
        `./dist/${build.entrypoint}.d.ts`,
        (err) => {
          if (err) throw err;
        }
      );
      fs.copyFile(
        `./dist/index${build.extension}`,
        `./examples/dist/index${build.extension}`,
        (err) => {
          if (err) throw err;
        }
      );
      fs.copyFile(
        `./dist/index${build.extension}.map`,
        `./examples/dist/index${build.extension}.map`,
        (err) => {
          if (err) throw err;
        }
      );
    })
    .catch(() => process.exit(1));

  // debug
  esbuild
    .build({
      entryPoints: ["examples/debug-src/index.js"],
      outdir: "examples/debug-dist",
      outExtension: {
        ".js": build.extension,
      },
      bundle: true,
      minify: false,
      splitting: true,
      format: build.format,
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
}
