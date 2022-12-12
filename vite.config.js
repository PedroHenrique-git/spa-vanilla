import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'spa-vanilla',
      fileName: 'spa-vanilla',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './lib/test/setup.ts',
  },
  plugins: [dts()],
});
