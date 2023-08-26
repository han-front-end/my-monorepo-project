import * as fs from 'fs-extra'
import {resolve} from 'path'
import {lightBlue, lightGreen} from 'kolorist'
import genCoreTemplate from "../template/core";
import genTypesTemplate from "../template/types";
import genStyleTemplate from "../template/style";
import genTestTemplate from "../template/test";
import genIndexTemplate from "../template";

export interface ComponentMeta {
  name: string,
  title: string,
  category: string,
}

export default function createComponent(meta: ComponentMeta) {
  const {name} = meta

  //拼接组件目录
  const componentDir = resolve('../src', name)
  console.log(componentDir)

  const comSrcDir = resolve(componentDir, 'src')
  const styleDir = resolve(componentDir, 'style')
  const testDir = resolve(componentDir, 'test')

  fs.ensureDirSync(comSrcDir)
  fs.ensureDirSync(styleDir)
  fs.ensureDirSync(testDir)

  // 文件和内容创建
  // 核心文件： 组件文件
  const coreFilePath = resolve(comSrcDir, name + '.tsx')
  fs.writeFileSync(coreFilePath, genCoreTemplate(name), { encoding: 'utf-8'})

  // 核心文件： 组件类型文件
  const typeFilePath = resolve(comSrcDir, name + '-type.ts')
  fs.writeFileSync(typeFilePath, genTypesTemplate(name), { encoding: 'utf-8'})

  // 核心文件： 样式文件
  const styleFilePath = resolve(styleDir, `${name}.scss`)
  fs.writeFileSync(styleFilePath, genStyleTemplate(name), { encoding: 'utf-8'})

  // 核心文件： 测试文件
  const testFilePath = resolve(testDir, `${name}.test.ts`)
  fs.writeFileSync(testFilePath, genTestTemplate(name), { encoding: 'utf-8'})

  // 组索引文件
  const indexFilePath = resolve(componentDir, 'index.ts')
  fs.writeFileSync(indexFilePath, genIndexTemplate(name), { encoding: 'utf-8'})

  // 创建成功通知
  console.log(
    lightGreen(
      `✅ 组件${name}目录创建生成`
    )
  )
  console.log(
    lightBlue(
      `✅ 组件目录: ${componentDir}`
    )
  )
}