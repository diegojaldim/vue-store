import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Notifications from 'vue-notification'
import VueLodash from 'vue-lodash'

import Login from '@/components/login'
import Home from '@/components/home'
import Produtos from '@/components/produtos'
import Carrinho from '@/components/carrinho'
import Checkout from '@/components/checkout'
import Pedidos from '@/components/pedidos'
import ProdutoDetalhes from '@/components/produtos/Detalhes'
import PedidosDetalhes from '@/components/pedidos/Detalhes'
import Registro from '@/components/registro'

require('@/assets/css/dashboard.css')

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(Notifications)
Vue.use(VueLodash)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
    {
      path: '/registro',
      component: Registro,
      name: 'registro'
    },
    {
      path: '/',
      component: Home,
      name: 'home',
      meta: {requiresAuth: true}
    },
    {
      path: '/produtos',
      component: Produtos,
      name: 'produtos',
      meta: {requiresAuth: true}  
    },
    {
      path: '/produtos/:id',
      component: ProdutoDetalhes,
      name: 'produtos-detalhes',
      meta: {requiresAuth: true}
    },
    {
      path: '/carrinho',
      component: Carrinho,
      name: 'carrinho',
      meta: {requiresAuth: true}
    },
    {
      path: '/checkout',
      component: Checkout,
      name: 'checkout',
      meta: {requiresAuth: true}
    },
    {
      path: '/pedidos',
      component: Pedidos,
      name: 'pedidos',
      meta: {requiresAuth: true}
    },
    {
      path: '/pedidos/:id',
      component: PedidosDetalhes,
      name: 'pedidos-detalhes',
      meta: {requiresAuth: true}
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
    const token = localStorage.getItem('token')
    
    if(!token){
      next({
        path: 'login'
      })
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router