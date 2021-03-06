// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axiosRequest from './axiosRequest'
import requestApi from './api/api.js'
// import store from './store/index';

Vue.use(ElementUI)
Vue.prototype.$requestApi = requestApi;
Vue.prototype.$axiosRequest = axiosRequest;
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
})
