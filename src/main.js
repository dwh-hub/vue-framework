import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vue-global-api'
import * as directives from './directive'
import '@/assets/styles/reset.css'
import './mock'

const app = createApp(App)

// 注册指令
Object.keys(directives).forEach(k => app.directive(k, directives[k]))

app.use(router).use(store).mount('#app')
