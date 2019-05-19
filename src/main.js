import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import qs from 'qs'
import CryptoUtils from './assets/js/CryptoUtils.js'
import { ToastPlugin, ConfirmPlugin } from 'vux'

Vue.use(ToastPlugin) //Toast提示插件
Vue.use(ConfirmPlugin)

Vue.prototype.CryptoUtils = CryptoUtils
Vue.prototype.axios = Axios
Vue.prototype.qs = qs

Vue.config.productionTip = false
console.log(process.env.NODE_ENV)
console.log(process.env.VUE_APP_MOCK_URL)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
