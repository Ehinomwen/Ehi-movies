import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

  const router = createRouter({
  history: createWebHistory(),
   routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/movie/:id',
      name: 'About Movie',
      component: AboutView
    }
  ]
})

export default router
