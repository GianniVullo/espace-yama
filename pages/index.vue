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
