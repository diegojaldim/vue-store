import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import Home from '@/components/home'
import Produtos from '@/components/produtos'

require('@/assets/css/dashboard.css')

Vue.use(Router)
Vue.use(VueAxios, axios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/produtos',
      name: 'Produtos',
      component: Produtos
    },
  ]
})
