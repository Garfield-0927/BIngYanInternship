import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/Login')
  },
  {
    path: '/home',
    component: () => import('@/views/home/Home'),
    children:[
      {
        path: "today",
        component: () => import('@/views/home/ChildComp/HomeToday')
      },
      {
        path: "habit",
        component: () => import('@/views/home/ChildComp/HomeHabit'),
      },
      {
        path: "more",
        component: () => import('@/views/home/ChildComp/HomeMore')
      },
      ]

  },
  {
    path:"/habitAdd",
    component: () => import('@/views/habitadd/HabitAdd'),
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router