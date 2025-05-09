import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import Dashboard from '@/views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: 'users',
          name: 'users',
          component: () => import('@/views/Users.vue')
        },
        {
          path: 'reports',
          name: 'reports',
          component: () => import('@/views/Reports.vue')
        },
        {
          path: 'settings',
          name: 'settings',
          component: () => import('@/views/Settings.vue')
        },
        {
          path: 'logs',
          name: 'logs',
          component: () => import('@/views/Logs.vue')
        }
      ]
    }
  ]
})

export default router