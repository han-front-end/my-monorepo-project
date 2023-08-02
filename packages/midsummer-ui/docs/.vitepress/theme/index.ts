import Theme from 'vitepress/theme'
import HelloWorld from "../../../src/components/HelloWorld.vue";
export default {
  ...Theme,
  enhanceApp({app}) {
    app.component('HellWorld', HelloWorld)
  }
}