import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.wasm"], // Add this line
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
