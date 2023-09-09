<script setup lang="ts">
import Navbar from './components/navbar/navbar.vue'
import Sidebar from './components/sidebar/sidebar.vue';
</script>

<template>
  <Navbar />
  <main class="main-content flex flex-col md:flex-row">
    <Sidebar v-show="$route.fullPath.startsWith('/attendance') || $route.fullPath === '/'" />
    <router-view />
  </main>
</template>
