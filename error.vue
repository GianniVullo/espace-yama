<template>
    <div id="theme-root" :data-theme="toggleTheme" :class="{ dark: toggleTheme === 'dark' }"
        class="h-[100vh] flex flex-col justify-start items-center bg-bleu-50 dark:bg-bleu-900 text-center">
        <Navbar class="mb-52"/>
        <h1 class="text-3xl text-neutral-800">{{ error.statusCode }}</h1>
        <p class="text-5xl mb-5 text-neutral-400">{{ error.statusMessage }}</p>
        <p class="text-base mb-5 text-neutral-800">{{ error.message }}</p>
        <a v-if="data" :href="data.retour"
            class="cursor-pointer bg-bleu-500 p-3 rounded-lg text-white hover:bg-bleu-600 border-b-4 border-b-bleu-900 font-semibold">Retour</a>
    </div>
</template>

<script setup>
const error = useError()
const destination = error.value.data
const data = computed(() => {
    try {
        return JSON.parse(error.data)
    } catch (error) {
        return null;
    }
})
</script>

<style lang="scss" scoped></style>