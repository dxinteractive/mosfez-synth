import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "mosfez-xen-synth": path.resolve(__dirname, "../src"),
    },
  },
  // TODO - work out why this is
  optimizeDeps: {
    exclude: ["mosfez-faust"],
  },
  plugins: [react()],
});
