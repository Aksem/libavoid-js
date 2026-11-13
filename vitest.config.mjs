import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["test/**/*.test.mjs"],
    // Routing larger diagrams in wasm can take a few seconds.
    testTimeout: 30_000,
    projects: [
      {
        extends: true,
        test: {
          name: "node",
          environment: "node",
          typecheck: {
            // Type-checks typings/libavoid.d.ts via test/**/*.test-d.ts.
            enabled: true,
            include: ["test/**/*.test-d.ts"],
            tsconfig: "./tsconfig.json",
          },
        },
      },
      {
        extends: true,
        test: {
          name: "browser",
          // Tests that rely on Node APIs (fs, process, ...) go here.
          exclude: ["test/node-only/**"],
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],
  },
});
