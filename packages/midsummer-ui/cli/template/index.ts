import {upperFirst} from "./utils";

export default function genIndexTemplate(name: string) {
  const compName = 'M' + upperFirst(name)
  return `\
import { App } from 'vue'
import ${upperFirst(name)} from "./src/${name}";

// 具名导出
export { ${upperFirst(name)} }

export default {
  install(app: App){
    app.component('${compName}', ${upperFirst(name)})
  }
}`
}