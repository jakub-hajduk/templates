import { defineConfig } from 'figstack';
import preact from '@preact/preset-vite'

export default defineConfig({
  ui: {
    plugins: [
      preact(),
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
      }
    ]
  }
})
