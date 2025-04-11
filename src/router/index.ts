import { createRouter, createWebHistory } from 'vue-router'
import MynumberReception from '../views/MynumberReception.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mynumber-reception',
      component: MynumberReception,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
