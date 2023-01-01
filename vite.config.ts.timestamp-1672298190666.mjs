// vite.config.ts
import { defineConfig } from "file:///Users/mdwarishaliansari/dev/todo-app/node_modules/vite/dist/node/index.js";
import react from "file:///Users/mdwarishaliansari/dev/todo-app/node_modules/@vitejs/plugin-react/dist/index.mjs";
import * as path from "path";
var __vite_injected_original_dirname = "/Users/mdwarishaliansari/dev/todo-app";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__vite_injected_original_dirname, "src", "Common", "Components"),
      "@data": path.resolve(__vite_injected_original_dirname, "src", "Common", "Data"),
      "@hooks": path.resolve(__vite_injected_original_dirname, "src", "Common", "Hooks"),
      "@context": path.resolve(__vite_injected_original_dirname, "src", "Common", "Context"),
      "@helper": path.resolve(__vite_injected_original_dirname, "src", "Common", "helper")
    }
  },
  build: {
    rollupOptions: {
      output: {
        format: "iife",
        entryFileNames: "bundle.js"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWR3YXJpc2hhbGlhbnNhcmkvZGV2L3RvZG8tYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbWR3YXJpc2hhbGlhbnNhcmkvZGV2L3RvZG8tYXBwL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9tZHdhcmlzaGFsaWFuc2FyaS9kZXYvdG9kby1hcHAvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQGNvbXBvbmVudHNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiwgXCJDb21tb25cIiwgXCJDb21wb25lbnRzXCIpLFxuICAgICAgXCJAZGF0YVwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiLCBcIkNvbW1vblwiLCBcIkRhdGFcIiksXG4gICAgICBcIkBob29rc1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiLCBcIkNvbW1vblwiLCBcIkhvb2tzXCIpLFxuICAgICAgXCJAY29udGV4dFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiLCBcIkNvbW1vblwiLCBcIkNvbnRleHRcIiksXG4gICAgICBcIkBoZWxwZXJcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiwgXCJDb21tb25cIiwgXCJoZWxwZXJcIiksXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgLy8gZmlsZTogXCJidW5kbGUuanNcIixcbiAgICAgICAgZm9ybWF0OiBcImlpZmVcIixcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwiYnVuZGxlLmpzXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVMsU0FBUyxvQkFBb0I7QUFDOVQsT0FBTyxXQUFXO0FBQ2xCLFlBQVksVUFBVTtBQUZ0QixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsZUFBb0IsYUFBUSxrQ0FBVyxPQUFPLFVBQVUsWUFBWTtBQUFBLE1BQ3BFLFNBQWMsYUFBUSxrQ0FBVyxPQUFPLFVBQVUsTUFBTTtBQUFBLE1BQ3hELFVBQWUsYUFBUSxrQ0FBVyxPQUFPLFVBQVUsT0FBTztBQUFBLE1BQzFELFlBQWlCLGFBQVEsa0NBQVcsT0FBTyxVQUFVLFNBQVM7QUFBQSxNQUM5RCxXQUFnQixhQUFRLGtDQUFXLE9BQU8sVUFBVSxRQUFRO0FBQUEsSUFDOUQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFFTixRQUFRO0FBQUEsUUFDUixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
