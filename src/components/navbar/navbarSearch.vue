<template>
  <div class="search-employee ml-0 mb-2 xl:ml-2 xl:mb-0">
    <div class="relative">
      <input
        class="
          py-[6px]
          pl-[12px]
          pr-[46px]
          block
          w-full
          max-w-none
          xl:!max-w-[200px]
          border
          rounded
          bg-transparent
          transition
        "
        type="text"
        id="search-employee"
        placeholder="Search Employee..."
      >
      <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-[12px]">
        <font-awesome-icon icon="magnifying-glass" />
      </div>
    </div>
  </div>
</template>
