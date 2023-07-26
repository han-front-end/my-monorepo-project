import {defineConfig} from "vite";
import path from 'path'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from "unocss";


export default defineConfig({
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, './src')}`
    }
  },
  plugins: [
    Vue({
      include: [/\.vue$/]
    }),
    Unocss({
      presets: [
        presetUno(),presetAttributify(),presetIcons()
      ]
    }),
    Pages({
      extensions: ['vue']
    })
  ]
})