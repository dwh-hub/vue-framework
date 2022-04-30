import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import store from '@/store'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // 进入非登录页
  if (to.path !== '/login') {
    // 登录状态失效 - 跳转登录
    if (!localStorage.getItem('token')) {
      next({ path: '/login' })
      return
    }
    // 缓存中没有菜单信息 - 注册注册路由
    if (!store.state.app.menus || !store.state.app.menus.length) {
      store
        .dispatch('app/getUserMenus')
        .then(() => {
          next({ path: to.path })
        })
        .catch(() => {
          next({ path: '/login' })
        })
      return
    }
  }
  if (to.path === '/login' && localStorage.getItem('token')) {
    next({ path: '/' })
    return
  }
  next()
})

router.afterEach((to, from) => {})

export default router
