<template>
    <div>
        <h1>Login</h1>
            <v-btn
                class="mt-6"
                color="white"
                outlined
                dark
                @click="googleSignIn"
            >
            <img
                src="../assets/google.png"
                alt="Google Icon"
                class="mr-2"
            />
        
            Sign in with Google
        </v-btn>

        <v-snackbar
            v-model="notfost"
            :timeout="8000"
            v
            >
            Please login from fostercare account

            <template v-slot:actions>
                <v-btn
                color="blue"
                variant="text"
                @click="notfost = false"
                >
                Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script setup>
    import { initializeApp } from 'firebase/app'
    import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

    definePageMeta({
        title: 'Login',
        ssr: false
    })

    const runtimeConfig = useRuntimeConfig()
    let auth = null
    let provider = null
    const notfost = ref(false)

    const googleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            console.log('----',result)
            const email   = result.user.email

            if(!email.includes('fostercare')) {
                return notfost.value = true
            }

            localStorage.setItem("auth-token", runtimeConfig.public.SECRET_TOKEN)
            navigateTo('/application')
        })
        .catch(e => {
            console.log(e)
        })
    }

    onMounted(() => {
        const config = {
            apiKey: runtimeConfig.public.FIREBASE_API_KEY,
            authDomain: runtimeConfig.public.FIREBASE_AUTH_DOMAIN,
            projectId: runtimeConfig.public.FIREBASE_PROJECTID,
            storageBucket: runtimeConfig.public.FIREBASE_STORAGE_BUCKET,
            messagingSenderId: runtimeConfig.public.FIREBASE_MESSAGEING_SENDERID,
            appId: runtimeConfig.public.FIREBASE_APPID
        }

        const app = initializeApp(config)
        const _auth = getAuth(app)

        const _provider = new GoogleAuthProvider()

        auth = _auth
        provider = _provider
    })
</script>