<script setup lang="ts">
defineProps<{ name: string, href: string }>()
</script>

<template>
  <li data-te-nav-item-ref>
    <router-link class="navbar-item flex p-[8px] items-center w-full md:w-none justify-between" :to="href">
      <span class="mr-[5px]">{{ name }}</span>
      <font-awesome-icon icon="caret-down" />
    </router-link>
  </li>
</template>
