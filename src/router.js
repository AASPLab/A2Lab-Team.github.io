import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'Início',
      path: '/',
      component: () => import('@/containers/HomeContainer'),
    },
    {
      name: 'Subscribe',
      path: '/subscribe',
      component: () => import('@/containers/SubscribeContainer'),
    }
  ]
})

export default router
