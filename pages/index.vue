<template>
  <ContactWidget />
  <!-- HERO SECTION -->
  <HomeHero3 />
  <!-- DESCRIPTION SECTION -->
  <main
    class="flex flex-col sm:px:8 bg-gradient-to-tr from-primary-50 from-30% to-primary-400 px-5 py-10 md:px-14 lg:px-40 xl:px-52">
    <HomeServices class="z-50" />
    <HomeSeparator />

    <!-- OBJECTIF SECTION -->
    <HomeObjectifs />
    <HomeSeparator />

    <!-- PARCOURS SECTION -->
    <HomeParcours />
    <HomeSeparator />

    <!-- FORMATIONS SECTION -->
    <HomeFormation />
    <HomeSeparator />

    <!-- TARIFS SECTION -->
    <HomeConsultations />
    <HomeSeparator />

    <!-- SHANTALA DESCRIPTION -->
    <HomeShantala />
    <HomeSeparator />

    <!-- REIKI DESCRIPTION -->
    <HomeRieki />
    <HomeSeparator />

    <!-- FORM CONTACT -->
    <!-- <HomeMailComponent /> -->
    <!-- GOOGLE MAP -->
    <HomeMapsComponent />
  </main>
</template>

<script setup>
definePageMeta({
  title: 'Praticien Reiki sur Liège - Soins énergétiques, massage Shantala et Reiki enfant',
  description: 'Espace bien-être dédié aux adultes et aux enfants. Je pratique le Reiki (soins énergétiques) et le massage bébé Shantala.',
  image: '/Logo.png',
})
useSchemaOrg([
  defineWebPage(
    { name: 'Accueil' } //! vaut mieux s'occuper de ça
  ), //useSchemaOrgEnd (!don't remove this)
])
</script>
