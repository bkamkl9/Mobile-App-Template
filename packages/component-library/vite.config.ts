import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { copyFileSync } from 'node:fs'
import dts from 'unplugin-dts/vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'ComponentLibrary',
      fileName: 'component-library',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    dts(),
    {
      name: 'build helpers',
      writeBundle() {
        copyFileSync(
          resolve(__dirname, './src/assets/colors.css'),
          resolve(__dirname, './dist/colors.css')
        )
      },
    },
  ],
  envPrefix: 'COMPONENT_LIBRARY_',
})
