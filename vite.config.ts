// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/My-portfolio-/", // Ensure this matches your repo name EXACTLY
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // This means assets will be in /My-portfolio-/assets/
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});