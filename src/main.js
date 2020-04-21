import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/js/swiper.min.js';
import 'swiper/css/swiper.min.css';
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueLazyload)


fnResize()
window.onresize = function () {
  fnResize()
}
function fnResize() {
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth
  document.documentElement.style.fontSize = (deviceWidth / 24) + 'px'
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
