import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "mosfez-synth/offline-render": path.resolve(
        __dirname,
        "../dist/offline-render.mjs"
      ),
      "mosfez-synth": path.resolve(__dirname, "../src"),
    },
  },
  // TODO - work out why this is
  optimizeDeps: {
    exclude: ["mosfez-faust"],
  },
  plugins: [react()],
});
