<template>
  <header class="relative h-[90vh] w-full overflow-hidden flex">
    <div class="flex w-full h-full">
      <div
        class="relative bg-gradient-to-r from-black to-transparent px-6 md:px-0 z-20 w-full sm:w-4/5 lg:w-3/5 xl:w-1/2 flex h-full flex-col text-white items-center justify-center sm:text-start">
        <div class="flex flex-col items-start">
          <h1 class="text-3xl sm:text-4xl" style="font-family: 'Karla'">
            Bienvenue à l'Espace <span class="whitespace-nowrap">bien-être</span> Yama
          </h1>
          <h3 class="mt-7 text-xl sm:text-2xl">Prenez du temps pour vous,</h3>
          <h3 class="mt-2 text-xl sm:text-2xl">harmonisez et équilibrez vos énergies,</h3>
          <h3 class="mt-2 text-xl sm:text-2xl">allez vers le meilleur de qui vous êtes.</h3>
          <p class="mt-7">Espace dédié aux adultes et aux enfants,</p>
          <NuxtLink to="#services" class="mt-5 rounded text-white py-2 px-3 border border-red-500 hover:scale-110 duration-500 cursor-pointer shadow-md hover:shadow-xl">Découvrez mes services</NuxtLink>
        </div>
      </div>
    </div>
    <img
      class="absolute top-0 z-10 h-[90vh] object-cover lg:-right-20 md:left-0 object-[65%]"
      src="/lanterne-Reiki.webp"
      alt="" />
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
