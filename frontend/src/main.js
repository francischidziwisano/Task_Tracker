import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuebootstrap from 'bootstrap-vue'
import axios from 'axios';
import Vueaxios from 'vue-axios';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons';
import 'bootstrap-icons/font/bootstrap-icons.css'

Vue.use(Vuebootstrap);
Vue.use(axios);
Vue.use(Vueaxios);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
