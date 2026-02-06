import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  root: resolve('src', 'ui'),
  build: {
    lib: {
      fileName: 'index',
      entry: 'index.html',
      formats: ['es'],
    },
    emptyOutDir: false,
    cssCodeSplit: false,
    sourcemap: 'inline',
    cssMinify: true,
    minify: true,
  },
  resolve: {
    alias: {
      '@shared': resolve('src', 'shared'),
      '@main': resolve('src', 'main'),
      '@ui': resolve('src', 'ui'),
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
});
