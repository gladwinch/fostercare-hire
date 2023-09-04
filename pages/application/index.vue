<template>
    <div class="wrapper">
        <div class="text-5">REFERENCES LIST</div>
        <v-text-field 
            v-model="search"
            label="Name of person completing reference"
            variant="solo-filled"
        ></v-text-field>

        <div class="text-center mt-10" v-if="loading">
            <v-progress-circular
                indeterminate
                color="black"
                :size="50"
                class="text-center"
            ></v-progress-circular>
        </div>

        <div class="ref-wrapper">
            <Reference
                v-for="ref in references"
                :data="ref"
            />
        </div>

        <div class="footer mt-10" v-if="loading">
            <v-btn variant="text" color="green" :disabled="prev">Prev</v-btn>
            <v-btn variant="text" color="green" :disabled="next">Next</v-btn>
        </div>
    </div>
</template>

<script setup>
    import { debounce } from 'lodash'

    const search = ref('')
    const loading = ref(false)
    const references = ref([])
    const page = ref(1)
    const next = ref(false)
    const prev = ref(false)

    async function searchApplication() {
        loading.value = true
        const { data } = await fetch(`/api/reference-request?page=${page._rawValue}`, {
            method: 'get'
        })

        if(
            data._rawValue && 
            data._rawValue.data && 
            data._rawValue.data.data
        ) {
            references.value = data._rawValue.data.data
            // setRefs(data._rawValue.data.data)

            // first page setup
            let firstpage = data._rawValue.data.first_page_url 
            if(firstpage) {
                let fpage = firstpage.split('=')[1]
                if(fpage == page._rawValue) {
                    prev.value = false
                } else {
                    prev.value = fpage
                }
            }

            // last page setup
            let lastPage = data._rawValue.data.last_page_url 
            if(lastPage) {
                let lpage = lastPage.split('=')[1]
                if(lpage == page._rawValue) {
                    next.value = false
                } else {
                    next.value = lpage
                }
            }
        }

        loading.value = false
        console.log(data)
    }

    const searchApplicants = debounce(searchApplication, 500)
    watch(search, searchApplicants)

    onMounted(() => {
        searchApplicants()

        setTimeout(() => {
            if(!references.value.length) {
                searchApplicants()
            }
        }, 6000)
    })
</script>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .ref-wrapper {
        display: flex;
        gap: 2em;
        flex-wrap: wrap;
    }

    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>