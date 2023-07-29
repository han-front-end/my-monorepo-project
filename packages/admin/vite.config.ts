import {defineConfig} from "vite";
import path from 'path'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from "unocss";

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'


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
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia'
      ],
      dts: 'src/auto-imports.d.ts'
    }),
    Components({
      extensions: ['vue'],
      include:[/\.vue$/],
      dts: 'src/components.d.ts'
    })
  ]
})