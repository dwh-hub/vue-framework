import Layout from '@/layout/index.vue'

const router = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/main/login/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/main/home.vue')
      }
    ]
  }
]

export default router
