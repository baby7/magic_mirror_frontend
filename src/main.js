import Vue from 'vue'
import router from './router'
import config from '@/config'
import store from '@/store'
import App from './App.vue'
import echarts from "echarts";

/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * @description 全局变量
 */
Vue.store = store

Vue.prototype.$echarts = echarts;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app');
