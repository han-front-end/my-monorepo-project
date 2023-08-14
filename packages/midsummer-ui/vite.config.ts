import {defineConfig} from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/]
    }),
    vueJsx({})
  ],
  test: {
    globals: true,
    environment: "happy-dom",
    transformMode: {
      web: [/\.[jt]sx$/]
    }
  }
})
