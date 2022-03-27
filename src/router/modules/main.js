import Layout from '@/layout/index.vue'

const router = [
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
