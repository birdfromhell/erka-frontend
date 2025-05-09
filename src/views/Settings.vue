<template>
  <div class="p-6">
    <h1 class="text-2xl font-semibold mb-6">Settings</h1>
    
    <div class="grid gap-6">
      <!-- Profile Settings -->
      <section class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-medium mb-4">Profile Settings</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Display Name</label>
            <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
        </div>
      </section>

      <!-- Notification Settings -->
      <section class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-medium mb-4">Notification Preferences</h2>
        <div class="space-y-4">
          <div class="flex items-center">
            <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
            <label class="ml-2 block text-sm text-gray-700">Email Notifications</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
            <label class="ml-2 block text-sm text-gray-700">Push Notifications</label>
          </div>
        </div>
      </section>

      <!-- Theme Settings -->
      <section class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-medium mb-4">Theme Settings</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Theme</label>
            <select class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              <option>Light</option>
              <option>Dark</option>
              <option>System</option>
            </select>
          </div>
        </div>
      </section>

      <!-- Save Button -->
      <div class="flex justify-end">
        <button class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Save Changes
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic will be implemented here
</script>