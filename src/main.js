import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
// eslint-disable-next-line no-unused-vars
import router from "@/router";

import axios from "axios";
Vue.prototype.$axios=axios;
Vue.prototype.productionTip=false;
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App),
  router,
}).$mount('#app');
