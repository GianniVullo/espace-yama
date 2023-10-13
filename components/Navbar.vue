<template>
  <nav
    :class="{ '!h-28': y == 0 }"
    class="fixed top-0 z-[9999] flex h-16 w-screen items-center justify-between border-b border-accent-950 bg-white px-3 py-3 duration-500 ease-in-out md:px-12">
    <ul class="hidden w-1/3 items-center md:flex">
      <li class="mr-5 last:mr-0 hover:scale-105 duration-500" v-for="(link, idx) in leftMenu" :key="idx">
        <NuxtLink
          :class="{ 'text-primary-800': link.isVisible }"
          class="text-primary-600 duration-500 border-b-0"
          :to="link.href"
          >{{ link.titre }}</NuxtLink
        >
      </li>
    </ul>
    <NuxtLink
      to="/"
      class="flex w-10/12 flex-col items-center justify-center md:w-1/3 border-b-0">
      <div class="flex items-start">
        <span
          style="font-family: 'Brush'"
          :class="{ 'text-3xl md:text-5xl': y == 0 }"
          class="text-center text-2xl md:text-3xl duration-500 ease-in-out"
          >Espace Yama</span
        >
        <img
          src="/Logo.png"
          :class="{ '!w-20': y == 0 }"
          class="mx-5 w-12 duration-500 ease-in-out"
          alt="" />
        <span
          style="font-family: 'Karla'"
          :class="{ 'text-lg md:text-xl': y == 0 }"
          class="self-end text-xs text-start duration-500 ease-in-out"
          >Praticienne Reiki</span
        >
      </div>
    </NuxtLink>
    <ul class="hidden items-center md:flex md:w-1/3 md:justify-end">
      <li class="mr-5 last:mr-0 hover:scale-105 duration-500" v-for="(link, idx) in rightMenu" :key="idx">
        <NuxtLink
          :class="{ 'text-primary-800': link.isVisible }"
          class="text-primary-600 hover:scale-105 duration-500 border-b-0"
          :to="link.href"
          >{{ link.titre }}</NuxtLink
        >
      </li>
    </ul>
    <button
      class="flex h-full w-2/12 items-center justify-center md:hidden"
      @click="toggleDrawer()">
      <div class="relative w-full">
        <Transition name="fade">
          <svg
            v-if="!drawer"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="absolute -top-3 right-0 h-6 w-6 cursor-pointer">
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
            class="absolute -top-3 right-0 h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Transition>
      </div>
    </button>
    <ul
      ref="drawerEl"
      class="fixed left-0 top-0 z-50 h-[100vh] w-52 bg-gradient-to-bl from-secondary-50 from-30% to-secondary-100 p-5 shadow-xl duration-500"
      :class="{ 'pointer-events-none !w-0 !p-0': !drawer }">
      <li
        class="my-2 mr-5 opacity-100 duration-300 last:mr-0"
        :class="{ '!opacity-0': !drawer }"
        v-for="(link, idx) in rightMenu"
        :key="idx">
        <NuxtLink
          :class="{ 'font-bold text-primary-900': link.isVisible }"
          class="border-b-0"
          :to="link.href"
          >{{ link.titre }}</NuxtLink
        >
      </li>
      <li
        class="my-2 mr-5 opacity-100 duration-300 last:mr-0"
        :class="{ '!opacity-0': !drawer }"
        v-for="(link, idx) in leftMenu"
        :key="idx">
        <NuxtLink
          :class="{ 'font-bold text-primary-900': link.isVisible }"
          class="border-b-0"
          :to="link.href"
          >{{ link.titre }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
const parcours = ref(null)
const formations = ref(null)
const services = ref(null)
const shantala = ref(null)
const tarifs = ref(null)
let parcoursVisible = false
let formationsVisible = false
let servicesVisible = false
let shantalaVisible = false
let tarifsVisible = false

const leftMenu = ref([
  {
    titre: 'Qui suis-je',
    isDropdown: false,
    href: '/#parcours',
    subMenu: null,
    isVisible: false
  },
  {
    titre: 'Qualifications',
    isDropdown: false,
    href: '/#formations',
    subMenu: null,
    isVisible: false
  },
  {
    titre: 'Massage Shantala',
    isDropdown: false,
    href: '/#shantala',
    subMenu: null,
    isVisible: false
  },
])
const rightMenu = ref([
  {
    titre: 'Services',
    isDropdown: false,
    href: '/#services',
    subMenu: null,
    isVisible: false
  },
  {
    titre: 'Tarifs',
    isDropdown: false,
    href: '/#tarifs',
    subMenu: null,
    isVisible: false
  },
])
const drawer = ref(false)
const toggleDrawer = useToggle(drawer)
const { y } = useWindowScroll()

onMounted(() => {
  parcours.value = document.getElementById("parcours")
  formations.value = document.getElementById("formations")
  shantala.value = document.getElementById("shantala")
  services.value = document.getElementById("services")
  tarifs.value = document.getElementById("tarifs")
  leftMenu.value[0].isVisible = useElementVisibility(parcours)
  leftMenu.value[1].isVisible = useElementVisibility(formations)
  leftMenu.value[2].isVisible = useElementVisibility(shantala)
  rightMenu.value[0].isVisible = useElementVisibility(services)
  rightMenu.value[1].isVisible = useElementVisibility(tarifs)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
