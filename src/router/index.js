import Vue from 'vue'
import VueRouter from 'vue-router'
import loginForm from '../components/loginForm.vue'
import home from '../views/Home.vue'
import teacher from '../views/landingPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home,
    meta: { transition: 'zoom' }
  },
  {
    path: '/login',
    name: 'login',
    component: loginForm,
    meta: { transition: 'fade-in-right' }
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: teacher
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
