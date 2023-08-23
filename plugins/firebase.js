import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(nuxtApp => {
    const runtimeConfig = useRuntimeConfig()
    const config = {
        apiKey: runtimeConfig.public.FIREBASE_API_KEY,
        authDomain: runtimeConfig.public.FIREBASE_AUTH_DOMAIN,
        projectId: runtimeConfig.public.FIREBASE_PROJECTID,
        storageBucket: runtimeConfig.public.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: runtimeConfig.public.FIREBASE_MESSAGEING_SENDERID,
        appId: runtimeConfig.public.FIREBASE_APPID
    }
    
    const app = initializeApp(config)
    const firestore = getFirestore(app)
    
    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)
})