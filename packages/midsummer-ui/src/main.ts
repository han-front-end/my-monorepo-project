import { createApp } from 'vue'
import App from './App.vue'

// import Button from './button'

import './index.scss'
import './style.css'

// 使用全量导出
import MidSummerUI from '../build/'

const app = createApp(App)

app.use(MidSummerUI)

app.mount('#app')
