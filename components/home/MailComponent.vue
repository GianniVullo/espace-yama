<template>
  <div>
    <h3 class="mb-5 text-xl text-center">Me contacter</h3>
    <div class="flex flex-col md:flex-row items-center">
      <p>Vous pourrez me contacter par mail à</p>
      <button class="rounded bg-red-500 px-3 py-1 mt-1 md:mt-0 md:ml-1 text-white">
        espaceyama@gmail.com
      </button>
    </div>
    <!-- <p>ou avec le formulaire ci-après</p>
    <form action="" class="flex flex-col p-1">
      <label for="from" class="mt-5 flex flex-col">
        Votre email
        <input
          type="email"
          name="email"
          id="from"
          v-model="from"
          class="rounded-lg border-b border-l border-primary-700 p-2 shadow-inner invalid:border-error-500 focus:border-2 focus:border-accent-600 focus:outline-none"
          placeholder="adresse e-mail" />
      </label>
      <label for="body" class="mt-4 flex flex-col">
        Votre message
        <textarea
          name="body"
          id="body"
          rows="10"
          class="w-[100%] rounded-lg border-b border-l border-primary-700 p-2 text-xl leading-relaxed shadow-inner invalid:border-error-500 focus:border-2 focus:border-accent-600 focus:outline-none sm:w-auto"
          v-model="body"
          placeholder="Bonjour, je suis John Doe et je..."></textarea>
      </label>
      <button>
        
      </button>
    </form> -->
  </div>
</template>

<script setup>
const from = ref("")
const body = ref("")
</script>

<style scoped>
h3 {
  font-family: 'KarlaBold';
}
</style>
