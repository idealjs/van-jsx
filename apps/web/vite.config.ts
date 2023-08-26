import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      "@idealjs/van-jsx": path.resolve(__dirname, "../../packages/core/src"),
    },
  },
});
