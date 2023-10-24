export default defineNuxtRouteMiddleware(() => {
    if (process.client) {
        const rc = useRuntimeConfig()
        const token = localStorage.getItem("auth-token")
        
        // if(rc.public.SECRET_TOKEN !== token) {
        //     return navigateTo('/login')
        // }
    }
})