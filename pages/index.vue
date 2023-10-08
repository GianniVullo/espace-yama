<template>
  <ContactWidget />
  <!-- HERO SECTION -->
    <HomeHero3 />
  <!-- DESCRIPTION SECTION -->
  <main class="py-10 px-5 sm:px:8 md:px-14 lg:px-40 xl:px-52">
    <HomeServices class="z-50" />
  
    <!-- OBJECTIF SECTION -->
    <HomeObjectifs class="mt-12" />

    <!-- PARCOURS SECTION -->
    <HomeParcours class="mt-12" />
    
    <!-- FORMATIONS SECTION -->
    <HomeFormation class="mt-12" />


    <!-- TARIFS SECTION -->
    <HomeConsultations class="mt-12" />

    <!-- SHANTALA DESCRIPTION -->
    <HomeShantala class="mt-12" />

    <!-- REIKI DESCRIPTION -->
    <HomeRieki class="mt-12" />

    <!-- FORM CONTACT -->
    <HomeMailComponent class="mt-12" />
    <!-- GOOGLE MAP -->
    <HomeMapsComponent class="mt-12" />
  </main>
</template>

<script setup>
definePageMeta({
  title: 'Un titre que Google va trouver cool',
  description: 'une description qui va plaire à Google',
  image: '/logo.png',
})
useSchemaOrg([
  defineWebPage(
    { name: 'Accueil' } //! vaut mieux s'occuper de ça
  ), //useSchemaOrgEnd (!don't remove this)
])
</script>
