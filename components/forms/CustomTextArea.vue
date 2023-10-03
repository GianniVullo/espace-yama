<template>
    <textarea class="text-xl w-[100%] sm:w-auto leading-relaxed invalid:border-error-500 focus:border-2 focus:border-accent-600 focus:outline-none border-b border-l border-primary-700 rounded-lg shadow-inner" :cols="cols" :rows="rows" v-model="value" :placeholder="placeholder"></textarea>
    <div class="text-error-500"><p>{{ errorMessage }}</p></div>
</template>  

<script setup>
const props = defineProps({
    name: String,
    errors: String,
    placeholder: String,
    cols: String,
    rows: String
});
// The `name` is returned in a function because we want to make sure it stays reactive
// If the name changes you want `useField` to be able to pick it up
const { value, errorMessage } = useField(() => props.name);
</script>
  
<style scoped>
textarea, select {
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
}
</style>