import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Notifications from 'vue-notification'
import VueLodash from 'vue-lodash'

import Home from '@/components/home'
import Produtos from '@/components/produtos'
import Carrinho from '@/components/carrinho'

require('@/assets/css/dashboard.css')

Vue.use(Router)
Vue.use(VueAxios, axios)
Vue.use(Notifications)
Vue.use(VueLodash)

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
    {
      path: '/carrinho',
      name: 'Carrinho',
      component: Carrinho
    },
  ]
})
