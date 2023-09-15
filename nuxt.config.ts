// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@hypernym/nuxt-gsap', '@nuxtjs/strapi'],
  gsap: {
    extraPlugins: {
      scrollTrigger: true
    }
  },
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1338',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  css: ['~/assets/scss/main.scss', '~/assets/css/reset.css'],
  app: {
    head : {
      title: "Czaplinski.co"
    }
  }
})
