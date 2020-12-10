import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Menu from '@/components/menu/Menu'
import Detail from '@/components/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
