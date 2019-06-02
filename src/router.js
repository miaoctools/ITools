import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('./views/home/home.vue')
/* const Index = () => import('./views/home/index.vue') */
const Detail = () => import('./views/detail/detail.vue')

Vue.use(Router)

const router = new Router({
  mode: process.env.NODE_ENV === 'production' ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    /* {
      path: '/index',
      name: 'index',
      component: Index
    }, */
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
export default router
