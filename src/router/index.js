import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/MyHome.vue'
import User from '@/views/MyUser.vue'
import Main from '@/views/MyMain.vue'
import Mall from '@/views/MyMall.vue'
import PageOne from '@/views/PageOne.vue'
import PageTwo from '@/views/PageTwo.vue'
import Login from '@/views/MyLogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      { path: 'home', name: 'home', component: Home },
      { path: 'user', component: User },
      { path: 'mall', component: Mall },
      { path: 'page1', component: PageOne },
      { path: 'page2', component: PageTwo },
      { path: '*', redirect: { name: 'home' } }
    ]
  },
  {
    // 重定向
    path: '/*',
    redirect: {
      name: 'main'
    }
  }
  // {
  //   path: '/about',
  //   name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.name !== 'login' && !localStorage.getItem('token')) {
    next({ name: 'login' })
  } else next()
})

export default router
