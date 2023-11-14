import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

/*
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
*/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // or any value that suits your project
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
});
