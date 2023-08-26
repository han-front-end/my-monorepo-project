import { App } from 'vue'
import Tree from "./src/tree";

// 具名导出
export { Tree }

export default {
  install(app: App){
    app.component('MTree', Tree)
  }
}