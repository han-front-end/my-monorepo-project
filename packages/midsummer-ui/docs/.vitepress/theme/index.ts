import Theme from 'vitepress/theme'
import Test from "../../../src/components/Test";
import MButton from '../../../src/button/src/button'
import MTree from '../../../src/tree/src/tree'

import '../../../src/index.scss'
// import '../../../src/button/style/button.scss'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'

import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue";
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'

export default {
  ...Theme,
  enhanceApp({app}) {
    app.component('Test', Test)
    app.component('MButton',MButton)
    app.component('MTree',MTree)
    app.component('DemoBlock', DemoBlock)
    app.component('Demo', Demo)
  }
}