import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import constants from "./extension/ProjectConstants";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src", "Common", "Components"),
      "@data": path.resolve(__dirname, "src", "Common", "Data"),
      "@hooks": path.resolve(__dirname, "src", "Common", "Hooks"),
      "@context": path.resolve(__dirname, "src", "Common", "Context"),
      "@helper": path.resolve(__dirname, "src", "Common", "helper"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // file: "bundle.js",
        format: "iife",
        entryFileNames: "bundle.js",
      },
    },
  },
  base: `${constants.basePath}/`,
  server: {
    port: constants.localPort,
    hmr: {
      protocol: "ws",
    },
  },
});
