import { createRouter, createWebHistory } from 'vue-router'
import MynumberReception from '../views/MynumberReception.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MynumberReception',
      component: MynumberReception,
    },
    // 他のルート
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
