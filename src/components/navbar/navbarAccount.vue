<script setup lang="ts">
import { onMounted } from 'vue'
import { Dropdown, initTE } from "tw-elements"

onMounted(() => {
  initTE({ Dropdown })
})
</script>

<template>
  <div
    class="user-account relative flex ml-0 xl:ml-4"
    data-te-dropdown-ref
    data-te-dropdown-alignment="end">
    <a
      class="hidden-arrow flex flex-row items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
      href="#"
      id="dropdownMenuButton2"
      role="button"
      data-te-dropdown-toggle-ref
      aria-expanded="false">
      <div class="user-img w-[30px] h-[30px] mr-1 block rounded-full"></div>
      <div class="user-name p-2"><span class="mr-[5px]">Admin</span> <font-awesome-icon icon="caret-down" /></div>
    </a>
    <ul
      class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
      aria-labelledby="dropdownMenuButton2"
      data-te-dropdown-menu-ref>
      <li>
        <a
          class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
          href="#"
          data-te-dropdown-item-ref
          >Action</a
        >
      </li>
      <li>
        <a
          class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
          href="#"
          data-te-dropdown-item-ref
          >Another action</a
        >
      </li>
      <li>
        <a
          class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
          href="#"
          data-te-dropdown-item-ref
          >Logout</a
        >
      </li>
    </ul>
  </div>
</template>
