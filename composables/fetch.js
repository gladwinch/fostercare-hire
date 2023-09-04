export default fetch = (url, opts) => {
    const config = useRuntimeConfig()
  
    return useFetch(url, { 
        ...opts,
        baseURL: config.public.API_BASE_URL,
        // credentials: 'include',
        headers: {
            'Signature': config.public.API_SIGNATURE,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}