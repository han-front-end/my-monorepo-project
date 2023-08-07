import { createApp } from 'vue'
import App from './App.vue'

import Button from './button'

import './index.scss'
import './style.css'

const app = createApp(App)

app.use(Button)

app.mount('#app')
