import { fileURLToPath } from "node:url";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^pg$/,
        replacement: path.resolve(__dirname, "src/pg-stub.ts"),
      },
      {
        find: "capnweb",
        replacement: path.resolve(__dirname, "packages/capnweb/src/index.ts"),
      },
      {
        find: "typegres",
        replacement: path.resolve(__dirname, "packages/typegres/src/index.ts"),
      },
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
      // Polyfill Node.js modules for browser
      {
        find: /^events$/,
        replacement: path.resolve(__dirname, "src/empty-module.ts"),
      },
    ],
  },
  optimizeDeps: {
    exclude: ["@electric-sql/pglite", "pg"],
  },
  build: {
    rollupOptions: {
      external: ["pg"],
    },
  },
  server: {
    port: 5173,
    host: true,
    allowedHosts: [
      ".csb.app", // CodeSandbox wildcard
    ],
  },
});
