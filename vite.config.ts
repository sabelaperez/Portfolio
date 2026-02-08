import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base:'/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',

    rollupOptions: {
      output: {
        manualChunks: {
          'react': ['react', 'react-dom'],
          'i18n': ['react-i18next', 'i18next', 'i18next-browser-languagedetector', 'i18next-http-backend'],
        }
      }
    }
  },

  server: {
    host: true,
    port: 3000,
    open: false, // No abrir navegador automáticamente
  },

  preview: {
    port: 4173,
    host: true,
  },
});
