import Vue from 'vue'
import VueRouter from 'vue-router'
import loginForm from '../components/loginForm.vue'
import home from '../views/Home.vue'
import landingPage from '../views/landingPage.vue'
import table from '../components/table.vue'
import admin from '../views/admin.vue'
import registerTeacher from '../components/registerGuru.vue'
import registerMama from '../components/registerMama.vue'

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
    component: landingPage,
    children: [
      {
        path: 'IX/A',
        name: 'kelas',
        component: table
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin,
    children: [
      {
        path: 'teacher',
        name: 'registerTeacher',
        component: registerTeacher
      },
      {
        path: 'mama',
        name: 'registerMama',
        component: registerMama
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
