<template>
  <!-- HERO SECTION -->
    <HomeHero />
  <!-- DESCRIPTION SECTION -->
  <main class="py-10 px-52">
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
    <section>REIKI DESCRIPTION</section>

    <!-- FORM CONTACT -->
    <section>FORM CONTACT</section>

    <!-- GOOGLE MAP -->
    <section>GOOGLE MAP</section>
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
