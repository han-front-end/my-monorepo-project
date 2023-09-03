import {defineConfig} from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as path from "path";

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      "build": path.resolve(__dirname, 'build')
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/]
    }),
    vueJsx({}),
  ],
  build: {
    cssCodeSplit: true,
  },
  test: {
    globals: true,
    environment: "happy-dom",
    transformMode: {
      web: [/\.[jt]sx$/]
    }
  }
})
