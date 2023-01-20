import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入 jquery
// import jquery from 'jquery'
// Vue.prototype.jquery = $

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
