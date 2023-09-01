import { createApp } from 'nativescript-vue'
import { createPinia } from 'pinia'
import Home from './screens/home-screen.vue'

const pinia = createPinia()
const app = createApp(Home)

app.use(pinia)
app.start()
