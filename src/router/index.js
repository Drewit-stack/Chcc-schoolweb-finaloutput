import { createRouter, createWebHistory } from 'vue-router'
// Import the view components you will create
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import AdmissionsPage from '../views/AdmissionsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/admissions',
      name: 'admissions',
      component: AdmissionsPage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: {
        template:
          '<div class="page-content" style="padding: 4rem; text-align: center;"><h1>Contact Page</h1><p>For inquiries, please use the footer details. God bless!</p></div>',
      },
    },
  ],
})

export default router
