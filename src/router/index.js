import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'hobi.index',
      component: () => import('../views/hobi/index.vue'),
    },
    {
      path: '/hobi/create',
      name: 'hobi.create',
      component: () => import('../views/hobi/create.vue'),
    },
    {
      path: '/hobi/edit:id',
      name: 'hobi.edit',
      component: () => import('../views/hobi/edit.vue'),
    },
  ],
})

export default router
