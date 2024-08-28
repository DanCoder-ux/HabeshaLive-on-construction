import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['vue-smoothie']
  },
  build: {
    rollupOptions: {
      external: ['vue-smoothie']
    }
  },
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})
