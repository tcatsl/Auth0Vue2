import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Auth from '@/components/auth'
import callback from '@/components/callback'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    { path: '/callback', component: callback}
  ],

  mode: 'history'
})
