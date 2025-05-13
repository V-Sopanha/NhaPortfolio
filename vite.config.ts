import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Update this line:
  base: "/my-portfolio-/", // Replace my-portfolio- with your actual repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});

// This configuration file is for a Vite project using React.
// It includes the React plugin for Vite and sets the base path for the project.
// The base path is set to "/my-portfolio-/" which should be replaced with the actual repository name.
// The configuration also optimizes dependencies and specifies the output directory and assets directory for the build.