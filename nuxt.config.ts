// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-07-12',

  devServer: {
    port: 8230,
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      script: [
        { src: 'https://tools.atlesque.dev/consent.js', defer: true },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
})
