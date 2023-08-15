// 引入vite导出的build方法，用它来创建
const path = require('path')
const {defineConfig, build} = require('vite')
const vueJsx = require('@vitejs/plugin-vue-jsx')
const vue = require('@vitejs/plugin-vue')
const fsExtra = require('fs-extra')

// 基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})

//  入口文件
const entryFile = path.resolve(__dirname, './entry.ts')

//  输出目录
const outputDir = path.resolve(__dirname, '../build')

// rollup配置
const rollupOptions = {
  // 外置
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

// 生成package.json
const createPackagreJson = () => {
  // 预设
  const fileStr = `
  {
    "name": "midsummer-ui",
    "version": "0.0.0",
    "main": "midsummer-ui.umd.cjs",
    "module": "midsummer-ui.js",
    "author": "midsummer",
    "description": "第一个个人开发的组件库，以后用于协助开发其他项目",
    "repository": {
      "type": "git",
      "url": ""
    },
    "keywords": ["vue3","组件库","tsx","UI"],
    "license": "ISC",
    "bugs": {
      "url": ""
    }
  }`

  fsExtra.outputFile(path.resolve(outputDir, 'package.json'), fileStr, 'utf-8')
}

// 执行创建
// 全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: 'midsummer-ui',
          fileName: 'midsummer-ui',
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )

  createPackagreJson()
}

const buildLib = async () => {
  await buildAll()
}

buildLib()