// 引入vite导出的build方法，用它来创建
const path = require('path')
const fs = require('fs')
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

// 组件目录
const componentsDir = path.resolve(__dirname, '../src')

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
const createPackagreJson = name => {
  // 预设
  const fileStr = `
  {
    "name": "${name ? name : 'midsummer-ui'}",
    "version": "0.0.0",
    "main": "${name ? 'index.umd.cjs' : 'midsummer-ui.umd.cjs'}",
    "module": "${name ? 'index.js' : 'midsummer-ui.js'}",
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

  if (name) {
    // 单个组件，输出对于的package.json
    fsExtra.outputFile(path.resolve(outputDir, `${name}/package.json`), fileStr, 'utf-8')
  } else {
    // 全量打包
    fsExtra.outputFile(path.resolve(outputDir, 'package.json'), fileStr, 'utf-8')
  }

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
// 单组件按需构建
const buildSingle = async name => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(componentsDir, name),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd']
        },
        outDir: path.resolve(outputDir, name)
      }
    })
  )
  createPackagreJson(name)
}

const buildLib = async () => {
  await buildAll()

  // 按需打包
  fs.readdirSync(componentsDir)
    .filter(name => {
      // 只要文件夹不要文件，且里面包含index.ts
      const componentDir = path.resolve(componentsDir, name)
      const isDir = fs.lstatSync(componentDir).isDirectory() // 测试componentDir 是否是一个路径
      return isDir && fs.readdirSync(componentDir).includes('index.ts')
    })
    .map(async name => {
      await buildSingle(name)
    })
}

buildLib()