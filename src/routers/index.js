import VueRouter from 'vue-router'
import Hello from '../components/Hello.vue'

const defaultRouter = [
  {
    name: 'Hello',
    path: '/',
    component: Hello,
    title: '首页',
  },
]

const router = new VueRouter({
  mode: 'hash',
  linkActiveClass: 'g-link-active',
  routes: defaultRouter,
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition)
    console.log(to)
    console.log(from)
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  },
})

export default router
