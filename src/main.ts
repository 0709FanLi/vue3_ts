import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import { store, key } from './store/index'

import 'element-plus/dist/index.css'
import './index.less'

import risingv3 from 'risingv3'
// import 'risingv3/dist/lib/dd-ui.css'

// console.log('risingv3---', risingv3)

const app = createApp(App)
// app.use(risingv3)
app.use(ElementPlus)
app.use(router)

app.use(store, key)
app.mount('#app')
