<script setup lang="ts">
import Navbar from './components/navbar/navbar.vue'
import Sidebar from './components/sidebar/sidebar.vue';
</script>

<template>
  <Navbar />
  <div class="max-w-[1536px] w-full mx-auto">
    <main class="main-content flex flex-col md:flex-row">
      <Sidebar v-show="$route.fullPath.startsWith('/attendance') || $route.fullPath === '/'" />
      <router-view />
    </main>
  </div>
</template>
