<script setup lang="ts">
import Navbar from './components/navbar/navbar.vue'
</script>

<template>
  <Navbar />
  <main class="main-content flex flex-col md:flex-row">
    <router-view />
  </main>
</template>
