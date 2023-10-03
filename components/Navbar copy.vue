<template>
    <nav class="w-screen bg-accent-200 py-3 flex items-center justify-between px-3 z-20 fixed top-0 bg-opacity-25 hover:bg-opacity-70 duration-500">
        <NuxtLink to="/">
            <button>
                Espace Yama
            </button>
        </NuxtLink>
        <slot name="primary-nav">
            <ul class="md:flex items-center hidden">
                <li class="mr-5 last:mr-0" v-for="(link, idx) in menuItems" :key="idx">
                    <NuxtLink
                        :class="{ 'font-semibold text-primary-900': $route.path === link.href, 'text-primary-600': $route.path !== link.href }"
                        :to="link.href">{{ link.titre }}</NuxtLink>
                </li>
                <li class="mr-5 last:mr-0">
                    <a
                        target="_blank"
                        class="text-primary-600"
                        href="https://docs.google.com/spreadsheets/d/14KV-9y9GQkTSF6dxUeCEvEQLgYC-vBXItyNzKFF_gcs/edit#gid=0">Nos offres</a>
                </li>
            </ul>
        </slot>
        <slot name="secondary-nav">
            <!-- <ul class="md:flex items-center hidden">
                <li class="cursor-pointer" @click="toggleDark()">
                    <button>
                        <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-6 fill-primary-400"
                            viewBox="0 0 512 512">
                            <path
                                d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 fill-primary-700" viewBox="0 0 384 512">
                            <path
                                d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                        </svg>
                    </button>
                </li>
            </ul> -->
            <button class="md:hidden" @click="toggleDrawer()">
                <svg v-if="!drawer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
            </button>
        </slot>
        <ul ref="drawerEl" class="fixed h-[100vh] z-50 w-52 left-0 top-0 bg-primary-50 p-5 shadow-xl" :class="{'hidden': !drawer}">
            <li class="mr-5 last:mr-0 my-2" v-for="(link, idx) in menuItems" :key="idx">
                <NuxtLink
                    :class="{ 'font-semibold text-primary-900': $route.path === link.href, 'text-primary-600': $route.path !== link.href }"
                    :to="link.href">{{ link.titre }}</NuxtLink>
            </li>
            <li class="cursor-pointer mt-3" @click="toggleDark()">
                <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-6 fill-primary-400" viewBox="0 0 512 512">
                    <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 fill-primary-700" viewBox="0 0 384 512">
                    <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                </svg>
            </li>

        </ul>
    </nav>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
    attribute: 'data-theme',
    valueDark: 'dark',
    valueLight: 'light',
  })
const toggleDark = useToggle(isDark)
const menuItems = [
    { titre: 'Accueil', isDropdown: false, href: '/', subMenu: null, },
    
    // Exemple de menu Dropdown (Avec un href, le rootMenuItem sera navigable sinon seul les submenu le seront)
    //          {
    //             titre: 'Cabinet', isDropdown: true, * Optionnal --> href: '/cabinet' <--, subMenu: [
    //                  { titre: 'Kiné à domicile', href: '/a-domicile' },
    //                  { titre: 'Douleurs chroniques', href: '/chronic-pain' },
    //                  { titre: 'Qui sommes-nous ?', href: '/qui-sommes-nous' },
    //              ],
    //          },
    // { titre: 'Blog', isDropdown: false, href: '/blog', subMenu: null, },
    // { titre: 'Boutique', isDropdown: false, href: '/', subMenu: null, },
    // { titre: 'Contact', isDropdown: false, href: '/', subMenu: null, },
]
const drawer = ref(false)
const toggleDrawer = useToggle(drawer)

</script>

<style scoped></style>