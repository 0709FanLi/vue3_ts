import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import { store, key } from './store/index'

import 'element-plus/dist/index.css'
import './index.less'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store, key)
app.mount('#app')
