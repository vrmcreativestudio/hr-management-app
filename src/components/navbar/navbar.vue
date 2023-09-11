<template>
  <nav class="navbar flex-no-wrap relative py-[18px] flex w-full items-center justify-between shadow-md xl:flex-wrap xl:justify-start">    
    <div class="max-w-[1536px] w-full mx-auto">
      <div class="flex w-full flex-wrap items-center justify-between px-[10px] xl:!px-[30px]">
        <NavbarLogo />

        <button
          class="menu flex items-center justify-center w-[36px] h-[36px] bg-transparent px-2 border rounded p-2 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 xl:hidden"
          type="button"
          id="navbarCollapseButton"
          data-te-collapse-init
          data-te-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          data-te-collapse-collapsed>
          <font-awesome-icon icon="bars" />
        </button>

        <div
          class="!visible hidden relative basis-[100%] items-center mt-4 xl:!flex xl:!basis-auto xl:!mt-0"
          id="navbarCollapse"
          data-te-collapse-item>
          <ul class="list-style-none mr-auto flex flex-col pl-0 xl:!flex-row" data-te-navbar-nav-ref>
            <NavbarItem v-for="(headerItem, index) in headerItems" :key="index" :name="headerItem.name" :href="headerItem.href"/>
          </ul>
          <NavbarSearch />
          <NavbarAccount />
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Collapse, initTE } from "tw-elements"

import NavbarAccount from './navbarAccount.vue'
import NavbarItem from './navbarItem.vue'
import NavbarLogo from './navbarLogo.vue'
import NavbarSearch from './navbarSearch.vue'

import '../../styles/components/navbar.scss'

export default {
  mounted() {
    initTE({ Collapse });
  },
  watch: {
    $route() {
      const collapseButton = document.getElementById('navbarCollapseButton');
      if (collapseButton && !collapseButton.hasAttribute('data-te-collapse-collapsed'))
        collapseButton.click();
    }
  },
  data() {
    return {
      headerItems: [
        {
          name: "My Request",
          href: '/my-request',
        },
        {
          name: "My Team",
          href: '/my-team',
        },
        {
          name: "Company",
          href: '/company',
        },
        {
          name: "Administration Tools",
          href: '/admin-tools',
        },
        {
          name: "Maintenance",
          href: '/maintenance',
        },
      ]
    };
  },
  components: { NavbarLogo, NavbarSearch, NavbarAccount, NavbarItem }
}
</script>
