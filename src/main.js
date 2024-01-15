import { createApp } from 'vue'
import router from './router'
import store from './store'
import './style.css'
import App from './App.vue'
import * as filters from './filters'

const app = createApp(App)
.use(router)
.use(store);

app.config.globalProperties.$filters = filters

app.mount("#app")
