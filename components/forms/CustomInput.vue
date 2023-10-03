<template>
    <input class="invalid:border-error-500 focus:outline-none focus:border-2 focus:border-accent-600 border-b border-l border-primary-700 rounded-lg shadow-inner"  v-model="value" :type="type || 'text'" :placeholder="placeholder" />
    <div class="text-error-500 text-sm"><p>{{ errorMessage }}</p></div>
</template>  

<script setup>
const props = defineProps({
    name: String,
    type: String,
    placeholder: String

});
// The `name` is returned in a function because we want to make sure it stays reactive
// If the name changes you want `useField` to be able to pick it up
const { value, errorMessage } = useField(() => props.name);
</script>
  
<style scoped>
input, select {
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
}
</style>