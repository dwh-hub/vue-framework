import Layout from '@/views/layout/index.vue'

const router = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/main/login.vue')
  },
  {
    path: '/404',
    name: 'notFound',
    component: () => import('@/views/main/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'admin',
    component: Layout
  }
]

export default router
