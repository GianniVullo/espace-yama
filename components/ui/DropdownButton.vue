<template>
            <label class="relative flex flex-col justify-end items-end md:hidden">
                <input class="hidden peer" type="checkbox" name="" id="">
                <slot name="toggler">
                </slot>
                <ul class="top-6 absolute hidden peer-checked:flex flex-col bg-primary-100 p-3 rounded-lg shadow">
                    <slot name="items"></slot>
                </ul>
            </label>
</template>

<script setup>
</script>

<style scoped>
</style>