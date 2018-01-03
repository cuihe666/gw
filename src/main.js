
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 全局引入
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/vue2-animate.css'
import '../static/css/tg_mobile_reset.css'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  axios,
  template: '<App/>',
  components: { App }
})
