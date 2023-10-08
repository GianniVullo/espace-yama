<template>
  <nav
    :class="{'!h-28': y == 0}"
    class="fixed h-16 top-0 z-[9999] flex w-screen items-center justify-between bg-white px-3 py-3 md:px-12 duration-500 ease-in-out">
    <ul class="hidden items-center md:flex w-1/3">
      <li class="mr-5 last:mr-0" v-for="(link, idx) in leftMenu" :key="idx">
        <NuxtLink
          :class="{
            'font-semibold text-primary-900': $route.path === link.href,
            'text-primary-600': $route.path !== link.href,
          }"
          :to="link.href"
          >{{ link.titre }}</NuxtLink
        >
      </li>
    </ul>
    <NuxtLink to="/" class="flex flex-col justify-center items-center md:w-1/3">
      <div class="flex items-start">
        <span style="font-family: 'Karla';" :class="{'text-3xl': y == 0}" class="duration-500 ease-in-out text-center">Espace Yama</span>
        <img src="/Logo.png" :class="{'!w-20': y == 0}" class="mx-5 w-12 duration-500 ease-in-out" alt="" />
          <span style="font-family: 'Karla';" :class="{'text-xl': y == 0}" class="duration-500 ease-in-out self-end text-start">Praticienne Reiki</span>
      </div>
      
    </NuxtLink>
    <ul class="hidden items-center md:flex md:justify-end md:w-1/3">
      <li class="mr-5 last:mr-0" v-for="(link, idx) in rightMenu" :key="idx">
        <NuxtLink
          :class="{
            'font-semibold text-primary-900': $route.path === link.href,
            'text-primary-600': $route.path !== link.href,
          }"
          :to="link.href"
          >{{ link.titre }}</NuxtLink
        >
      </li>
    </ul>
    <button class="md:hidden" @click="toggleDrawer()">
      <svg
        v-if="!drawer"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6 cursor-pointer">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <ul
      ref="drawerEl"
      class="fixed left-0 top-0 z-50 h-[100vh] w-52 bg-primary-50 p-5 shadow-xl"
      :class="{ hidden: !drawer }">
      <li
        class="my-2 mr-5 last:mr-0"
        v-for="(link, idx) in rightMenu"
        :key="idx">
        <NuxtLink
          :class="{
            'font-semibold text-primary-900': $route.path === link.href,
            'text-primary-600': $route.path !== link.href,
          }"
          :to="link.href"
          >{{ link.titre }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
const leftMenu = [
  { titre: 'Qui suis-je', isDropdown: false, href: '/#parcours', subMenu: null },
  { titre: 'Qualifications', isDropdown: false, href: '/#formations', subMenu: null },
  { titre: 'Massage Shantala', isDropdown: false, href: '/#shantala', subMenu: null },
]
const rightMenu = [
  { titre: 'Services', isDropdown: false, href: '/#services', subMenu: null },
  { titre: 'Tarifs', isDropdown: false, href: '/#tarifs', subMenu: null },

]
const drawer = ref(false)
const toggleDrawer = useToggle(drawer)
const { y } = useWindowScroll()

</script>

<style scoped></style>
