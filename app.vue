<template>
  <div>
    <SeoKit />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useSchemaOrg([
    defineLocalBusiness({
        // Google Doc about that : https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=fr
        name: 'Espace Yama',
        '@type': ['Organization', 'LocalBusiness', 'HealthAndBeautyBusiness'], // Liste des types et sous-types : https://unhead-schema-org.harlanzw.com/schema/local-business
        address: {
            streetAddress: 'rue de Robermont 130',
            addressLocality: 'Liège',
            postalCode: '4020',
            addressCountry: 'Be',
        },
        logo: '/Logo.png',
        geo: {
            "@type": "GeoCoordinates",
            latitude: 50.6376977,
            longitude: 5.5965322
        },     
    }),
    defineWebSite({
        name: 'Espace Yama',
        url: 'espace-yama.be',
        inLanguage: 'fr'
    }),
])
</script>

<style>
@font-face {
    font-family: 'Karla';
    src: url('/fonts/Karla-Regular.woff2') format('woff2');
}
@font-face {
    font-family: 'KarlaMedium';
    src: url('/fonts/Karla-Medium.woff2') format('woff2');
}
@font-face {
    font-family: 'Brush';
    src: url('/fonts/aAnomanObong.woff2') format('woff2');
}
@font-face {
    font-family: 'KarlaBold';
    src: url('/fonts/Karla-Bold.woff2') format('woff2');
}
p, li {
    font-family: 'Karla';
}
  html {
    scroll-behavior: smooth;
  }

.link {
    color: #8C4D3E;
    border-bottom: #8C4D3E solid 1px;
}
.link:visited {
    color: #B36B2D;
    border-bottom: #B36B2D solid 1px;
}

.link:hover {
    border-bottom: none;
}
</style>