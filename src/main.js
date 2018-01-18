// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper  from 'vue-awesome-swiper';   //swiper轮播插件引用
import 'swiper/dist/css/swiper.css'      //swiper轮播插件css引用
import ElementUi from 'element-ui';     //引用element-ui
import "element-ui/lib/theme-chalk/index.css"   //引用element-ui css样式


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper);    //使用轮播插件
Vue.use(ElementUi);   //使用element-ui插件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
