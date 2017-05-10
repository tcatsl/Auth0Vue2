// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Auth from '@/components/auth'
import Hello from '@/components/hello'
Vue.config.productionTip = true

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
new Vue({
  el: '#auth',
  router,
  template: '<Auth/>',
  components: { Auth }
});
