import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/vue-acceleration',
    name: 'vue-acceleration',
    component: () => import('../views/VueAccelerationApp.vue')
  },{
    path: '/form-iview',
    name: 'form-iview',
    component: () => import('../views/FormIview.vue')
  },{
    path: '/my-form',
    name: 'my-form',
    component: () => import('../views/MyFormView.vue')
  }
  ,{
    path: '/another-form',
    name: 'another-form',
    component: () => import('../components/AnotherForm.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
