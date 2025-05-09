<script setup>
import { ref } from 'vue'

const reports = ref([
  { id: 1, name: 'Monthly Analytics', date: '2024-03-01', status: 'Completed' },
  { id: 2, name: 'User Activity', date: '2024-03-05', status: 'Pending' },
  { id: 3, name: 'System Performance', date: '2024-03-10', status: 'In Progress' }
])
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-semibold text-gray-900 mb-6">Reports</h1>
    
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="report in reports" :key="report.id">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {{ report.name }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ report.date }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <span :class="{
                'px-2 py-1 rounded-full text-xs font-medium': true,
                'bg-green-100 text-green-800': report.status === 'Completed',
                'bg-yellow-100 text-yellow-800': report.status === 'Pending',
                'bg-blue-100 text-blue-800': report.status === 'In Progress'
              }">
                {{ report.status }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <button class="text-indigo-600 hover:text-indigo-900">View</button>
              <button class="ml-4 text-gray-600 hover:text-gray-900">Download</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>