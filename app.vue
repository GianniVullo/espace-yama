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
        logo: '/logo.png',
        
        
        geo: {
            "@type": "GeoCoordinates",
            latitude: 50.6376977,
            longitude: 5.5965322
        },  
        
        openingHoursSpecification: [
            //! à changer absolumunent, ceci est à titre d'exemple
            {
                dayOfWeek: 'Saturday',
                opens: '09:30',
                closes: '13:30',
            },
            {
                dayOfWeek: ['Monday', 'Tuesday'],
                opens: '10:30',
                closes: '15:30',
            },
        ]
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
    font-family: 'KarlaBold';
    src: url('/fonts/Karla-Bold.woff2') format('woff2');
}
</style>