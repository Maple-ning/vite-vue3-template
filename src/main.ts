// core
import { createApp } from 'vue'
import App from './App.vue'
import store from "./store"
import router from "./router"
// css
import "@/styles/index.scss"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"

const app = createApp(App)

app.use(store).use(router)
router.isReady().then(() => {
  app.mount('#app')
})
