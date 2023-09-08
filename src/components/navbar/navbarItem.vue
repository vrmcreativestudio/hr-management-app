<script setup lang="ts">
defineProps<{ name: string, href: string }>()
</script>

<template>
  <li data-te-nav-item-ref>
    <a class="navbar-item flex p-[8px]" :href="href">
      <span class="mr-[5px]">{{ name }}</span>
      <font-awesome-icon icon="caret-down" />
    </a>
  </li>
</template>
