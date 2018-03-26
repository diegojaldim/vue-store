import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Notifications from 'vue-notification'
import VueLodash from 'vue-lodash'

import Home from '@/components/home'
import Produtos from '@/components/produtos'
import Carrinho from '@/components/carrinho'
import Checkout from '@/components/checkout'
import Pedidos from '@/components/pedidos'

require('@/assets/css/dashboard.css')

Vue.use(Router)
Vue.use(VueAxios, axios)
Vue.use(Notifications)
Vue.use(VueLodash)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/produtos',
      component: Produtos
    },
    {
      path: '/carrinho',
      component: Carrinho
    },
    {
      path: '/checkout',
      component: Checkout
    },
    {
      path: '/pedidos',
      component: Pedidos
    }
  ]
})
