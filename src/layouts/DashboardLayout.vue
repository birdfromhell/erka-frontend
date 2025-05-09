<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ClipboardDocumentListIcon,
  BellIcon
} from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, to: '/' },
  { name: 'Users', icon: UsersIcon, to: '/users' },
  { name: 'Reports', icon: ChartBarIcon, to: '/reports' },
  { name: 'Settings', icon: Cog6ToothIcon, to: '/settings' },
  { name: 'Logs', icon: ClipboardDocumentListIcon, to: '/logs' }
]

const sidebarOpen = ref(false)
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <div
      :class="[
        'fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      ]"
    >
      <div class="flex items-center justify-between h-16 px-4 border-b">
        <RouterLink to="/" class="text-xl font-bold text-primary-600">Admin Dashboard</RouterLink>
        <button @click="sidebarOpen = false" class="lg:hidden">
          <XMarkIcon class="w-6 h-6" />
        </button>
      </div>
      <nav class="p-4 space-y-1">
        <RouterLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.to"
          class="flex items-center px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-50"
          :class="{ 'bg-primary-50 text-primary-600': $route.path === item.to }"
        >
          <component :is="item.icon" class="w-5 h-5 mr-3" />
          {{ item.name }}
        </RouterLink>
      </nav>
    </div>

    <!-- Main content -->
    <div class="lg:pl-64">
      <!-- Header -->
      <header class="sticky top-0 z-40 bg-white border-b">
        <div class="flex items-center justify-between h-16 px-4">
          <button @click="sidebarOpen = true" class="lg:hidden">
            <Bars3Icon class="w-6 h-6" />
          </button>
          <div class="flex items-center space-x-4">
            <button class="relative">
              <BellIcon class="w-6 h-6 text-gray-500" />
              <span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div class="relative group">
              <button class="flex items-center space-x-2">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                  alt="User"
                  class="w-8 h-8 rounded-full"
                />
                <span class="hidden md:block">John Doe</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Page content -->
      <main class="p-4">
        <RouterView />
      </main>
    </div>
  </div>
</template>