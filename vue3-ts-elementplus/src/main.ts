import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementPlus from 'element-plus';

import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css';
import 'element-plus/dist/index.css';
import axios from './http';
import * as ElementPlusIcons from '@element-plus/icons-vue'

const app = createApp(App)

// 全局挂载axios
app.config.globalProperties.$axios = axios;


app.use(store)
app.use(router)
app.use(ElementPlus);
for(const [key,component] of Object.entries(ElementPlusIcons)) {
 app.component(key,component)
}
app.mount('#app')