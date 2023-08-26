//创建组件核心文件的模板
import {upperFirst} from "./utils";

export default function genCoreTemplate(name: string) {
  const compName = 'M' + upperFirst(name)
  const propTypeName = upperFirst(name) + 'Props'
  const propName = name + 'Props'
  const propFileName = name + '-type'
  const className = 'm-' + name
  return `\
import {defineComponent, toRefs} from "vue"
import {${propName}, ${propTypeName}} from "./${propFileName}"

export default defineComponent({
  name: '${compName}',
  props: ${propName},
  setup(props: ${propTypeName}) {
    return () => {
      return (
        <div class="${className}"></div>
      )
    }
  }
}`
}