import Vue from 'vue'
import VueRouter from 'vue-router'
import loginForm from '../components/loginForm.vue'
import home from '../views/Home.vue'
import landingPage from '../views/landingPage.vue'
import table from '../components/table.vue'
import admin from '../views/admin.vue'
import course from '../components/course.vue'
import register from '../components/register.vue'
import parent from '../views/parent.vue'
import tambahMurid from '../components/registerMurid.vue'
import Class from '../components/class.vue'

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
        path: 'kelas/:id',
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
        path: 'login',
        name: 'login',
        component: loginForm
      },
      {
        path: 'course',
        name: 'course',
        component: course
      },
      {
        path: 'register',
        name: 'register',
        component: register
      },
      {
        path: 'student',
        name: 'student',
        component: tambahMurid
      },
      {
        path: 'class',
        name: 'class',
        component: Class
      }
    ]
  },
  {
    path: '/mama',
    name: 'Parent',
    component: parent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
