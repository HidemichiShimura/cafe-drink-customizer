import { defineConfig } from "vite";
import jsconfigPaths from "vite-jsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
});
