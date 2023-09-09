<script setup lang="ts">
import '../../styles/components/sidebar.scss'
</script>

<template>
  <div class="sidebar md:max-w-[354px] w-full md:border-r-[1px]">
    <div class="header py-6 px-8">
      <h2 class="mb-2">Manage Attendance</h2>
      <p>Attendance management is where you can generate, add, edit, and export the logs of the employees.</p>
    </div>

    <div class="sidebar-menu pb-6 px-6 border-b-[1px]">
      <router-link class="sidebar-item block w-full relative pl-10 pr-4 py-4" to="/attendance">
        <div class="absolute left-4">
          <font-awesome-icon icon="calendar" />
        </div>
        Attendance Logs
      </router-link>

      <router-link class="sidebar-item block w-full relative pl-10 pr-4 py-4" to="/attendance/exports">
        <div class="absolute left-4">
          <font-awesome-icon icon="download" />
        </div>
        Exported Files
      </router-link>
    </div>
  </div>
</template>
