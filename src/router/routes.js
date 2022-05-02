import Layout from '@/pages/layout/index.vue'

const router = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/pages/main/login.vue')
  },
  {
    path: '/404',
    name: 'notFound',
    component: () => import('@/pages/main/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'admin',
    component: Layout
  }
]

export default router
