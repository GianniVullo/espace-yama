// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    'nuxt-seo-kit'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@vee-validate/nuxt',
  ],
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          href: '/favicon.png'
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL ||'https://espace-yama.be',
      siteName: 'Espace Yama',
      siteDescription: '', //! remplir ici
      language: 'fr',
    }
  },

})
