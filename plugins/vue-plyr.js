import VuePlyr from 'vue-plyr/dist/vue-plyr.ssr'
import 'vue-plyr/dist/vue-plyr.css'

const VuePlayer = VuePlyr;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VuePlayer, { plyr: {} });
});