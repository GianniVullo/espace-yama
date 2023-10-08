<template>
  <header class="pointer-events-none relative h-[90vh] w-full overflow-hidden flex">
    <div class="flex w-full h-full">
      <div
        style="background: rgb(0,0,0); background: linear-gradient(90deg, rgba(0,0,0,1) 38%, rgba(0,0,0,0) 100%);"
        class="relative px-6 md:px-0 z-20 w-full sm:w-4/5 lg:w-3/5 xl:w-1/2 flex h-full flex-col text-white items-center justify-center sm:text-start">
        <div class="flex flex-col items-start">
          <h1 class="text-3xl sm:text-4xl" style="font-family: 'Karla'">
            Bienvenue à l'Espace Yama
          </h1>
          <h3 class="mt-7 text-xl sm:text-2xl">Prenez du temps pour vous,</h3>
          <h3 class="mt-2 text-xl sm:text-2xl">harmonisez et équilibrez vos énergies,</h3>
          <h3 class="mt-2 text-xl sm:text-2xl">allez vers le meilleur de qui vous êtes.</h3>
          <p class="mt-7">Pour vous et votre enfant,</p>
          <UiMyButton class="mt-5 text-white">Découvrez mes services</UiMyButton>
        </div>
      </div>
    </div>
    <img
      class="absolute top-0 z-10 h-[90vh] object-cover lg:-right-20 md:left-0 object-center"
      src="/lanterne-Reiki.webp"
      alt="" />
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
