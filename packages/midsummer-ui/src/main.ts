import { createApp } from 'vue'
import App from './App.vue'

import Button from './button'

import './index.css'
import './style.css'

const app = createApp(App)

app.use(Button)

app.mount('#app')
