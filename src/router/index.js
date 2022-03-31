import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !localStorage.getItem('token')) {
    next({ path: '/login' })
    return
  }
  next()
})

router.afterEach((to, from) => {})

export default router
