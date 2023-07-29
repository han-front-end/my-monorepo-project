import {createApp} from "vue";
import {createRouter, createWebHistory} from "vue-router";

import App from './App.vue'

import 'uno.css'
import routes from '~pages'


const router = createRouter({
  history: createWebHistory(),
  routes
})


const app = createApp(App)
app.use(router)

// * 自动加载
Object.values(import.meta.globEager('./modules/*.ts')).forEach(item => item.install?.({app}))


app.mount('#app')