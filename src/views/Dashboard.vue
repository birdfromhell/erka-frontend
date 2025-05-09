<script setup>
import { ref } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Active Users',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: '#0ea5e9',
      tension: 0.4
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}

const recentActivity = ref([
  {
    id: 1,
    user: 'Alice Johnson',
    action: 'Created new user account',
    time: '2 hours ago'
  },
  {
    id: 2,
    user: 'Bob Smith',
    action: 'Updated system settings',
    time: '4 hours ago'
  },
  {
    id: 3,
    user: 'Carol Williams',
    action: 'Generated monthly report',
    time: '6 hours ago'
  }
])
</script>

<template>
  <div class="space-y-6">
    <!-- Stats -->
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div class="card">
        <h3 class="text-lg font-medium text-gray-900">Total Users</h3>
        <p class="mt-2 text-3xl font-bold text-primary-600">1,234</p>
        <p class="mt-1 text-sm text-gray-500">+12% from last month</p>
      </div>
      <div class="card">
        <h3 class="text-lg font-medium text-gray-900">Active Sessions</h3>
        <p class="mt-2 text-3xl font-bold text-primary-600">423</p>
        <p class="mt-1 text-sm text-gray-500">Current active users</p>
      </div>
      <div class="card">
        <h3 class="text-lg font-medium text-gray-900">Server Load</h3>
        <p class="mt-2 text-3xl font-bold text-green-600">24%</p>
        <p class="mt-1 text-sm text-gray-500">Healthy status</p>
      </div>
      <div class="card">
        <h3 class="text-lg font-medium text-gray-900">Response Time</h3>
        <p class="mt-2 text-3xl font-bold text-primary-600">238ms</p>
        <p class="mt-1 text-sm text-gray-500">Average over 24h</p>
      </div>
    </div>

    <!-- Chart -->
    <div class="card">
      <h3 class="text-lg font-medium text-gray-900 mb-4">User Activity</h3>
      <div class="h-80">
        <Line :data="chartData" :options="chartOptions" />
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="card">
      <h3 class="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
      <div class="space-y-4">
        <div
          v-for="activity in recentActivity"
          :key="activity.id"
          class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
        >
          <div class="flex-1">
            <p class="font-medium text-gray-900">{{ activity.user }}</p>
            <p class="text-gray-500">{{ activity.action }}</p>
          </div>
          <span class="text-sm text-gray-400">{{ activity.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>