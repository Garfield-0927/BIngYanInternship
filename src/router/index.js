import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
  },
  {
    path:"/clockInRecord",
    component: () => import('@/views/clockinrecord/ClockInRecord'),
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router