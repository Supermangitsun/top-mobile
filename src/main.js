import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import Vant from 'vant'
import validate, { Validator } from 'vee-validate'// 导入表单验证插件和辅助中文化文件
import zhCN from 'vee-validate/dist/locale/zh_CN'// 导入校验中文化
import 'vant/lib/index.css'
import './styles/index.less'
Vue.use(Vant)
Vue.config.productionTip = false
Vue.use(validate)// 注册vee-validate插件
Validator.localize('zhCN', zhCN)// 配置汉化中文
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
