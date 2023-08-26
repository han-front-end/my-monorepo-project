//创建组件类型文件的模板
import {upperFirst} from "./utils";

export default function genTypesTemplate(name: string) {
  const propTypeName = upperFirst(name) + 'Props'
  const propName = name + 'Props'
  return `\
import {ExtractPropTypes, PropType} from "vue";

export const ${propName} = {} as const

export type ${propTypeName} = ExtractPropTypes<typeof ${propName}>
`
}