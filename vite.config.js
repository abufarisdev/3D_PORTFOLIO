import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',          // Point Vite to the public folder
  build: {
    outDir: 'dist',            // Output folder
    emptyOutDir: true,         // Clear old files on build
  },
});