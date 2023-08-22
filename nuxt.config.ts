// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
      head: {
          meta: [
              { name: 'viewport', content: 'width=device-width, initial-scale=1' }
          ],
          script: [],
          link: [
              { 
                  rel: 'stylesheet', 
                  href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap' 
              }
          ],
          style: [],
          noscript: []
      }
  },
  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECTID: process.env.FIREBASE_PROJECTID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGEING_SENDERID: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_APPID: process.env.FIREBASE_APPID
    },
  },
  pages: true,
  css: [],
  plugins: [
    { src: '~/plugins/firebase', mode: 'client' },
    { src: '~/plugins/vuedatepicker', mode: 'client' }
  ],
  components: [
    '~/components'
  ],
  modules: [
    '@invictus.codes/nuxt-vuetify'
  ],
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: true,

      /* vite-plugin-vuetify options */
      styles: true,
      autoImport: true,
      useVuetifyLabs: true, 
    }
  }
})
