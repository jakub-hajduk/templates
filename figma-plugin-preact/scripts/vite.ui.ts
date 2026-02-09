import { resolve } from 'node:path';
import preact from '@preact/preset-vite'
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [
    preact(),
    viteSingleFile(),
    {
      name: 'strip-bang',
      resolveId(source) {
        if (source === '!../css/base.css') {
          return source;
        }
      },
      load(id) {
        if (id.includes('!../css/base.css')) {
          return '';
        }
      }
    },
  ],
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
