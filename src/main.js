import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import YouTube from 'vue3-youtube'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)
app.use(router)
app.component('YouTube', YouTube)

app.mount('#app')
