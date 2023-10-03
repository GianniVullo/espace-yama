<template>
    <NuxtLink class="text-primary-500" :to="to">
        <slot />
    </NuxtLink>
</template>

<script setup>
defineProps(['to'])
</script>

<style lang="scss" scoped>

</style>