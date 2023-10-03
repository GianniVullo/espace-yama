<template>
    <div id="theme-root" :class="{dark: toggleTheme === 'dark'}">
        <Navbar @toggle-theme="themeToggler" />
        <slot />
        <MyFooter />
    </div>
</template>

<script setup>
const toggleTheme = ref('light')
useHead({
    htmlAttrs:
    {
        'data-theme': toggleTheme
    }
})
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (process.client) {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        toggleTheme.value = 'dark'
        document.querySelector("#theme-root").classList.add('dark')
    } else {
        toggleTheme.value = 'light'
        document.querySelector("#theme-root").classList.remove('dark')
    }
}

function themeToggler(theme) {
    toggleTheme.value = theme
    if (process.client) {
        localStorage.theme = theme
    }
}
</script>

<style lang="scss" scoped></style>