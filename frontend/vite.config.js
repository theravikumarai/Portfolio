
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/assets"), // Alias for the assets folder
    },
  },
  base: "/",  // Ensures proper path resolution in production
  build: {
    outDir: "dist",  // Ensures the correct output folder
  },
});
