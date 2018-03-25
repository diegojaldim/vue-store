import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Produtos from '@/components/produtos'

require('@/assets/css/dashboard.css')

Vue.use(Router)

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
