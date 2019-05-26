import Vue from 'vue'
import Router from 'vue-router'

const About = () => import('./views/About.vue')
const Home = () => import('./views/Home.vue')
const Index = () => import('./views/home/index.vue')

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
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    }
  ]
})
export default router
