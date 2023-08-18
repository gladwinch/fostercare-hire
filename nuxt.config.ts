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
      // Config within public will be also exposed to the client
      public: {}
  },
  pages: true,
  css: [],
  plugins: [],
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
