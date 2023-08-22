<template>
    <div class="container">
        <div class="header bold-border">Foster Care Ireland</div>
        <div class="text-center">REFERENCE REQUEST</div>

        <div class="text-center mt-10" v-if="loading">
            <v-progress-circular
                indeterminate
                color="black"
                :size="50"
                class="text-center"
            ></v-progress-circular>
        </div>

        <div class="text-center text-red" v-else-if="!application">ALLICATION NOT FOUND FOR ID</div>

        <div class="container" id="application" v-else>
            <div>
                <div class="header font-weight-bold">APPLICANT DETAILS</div>
                <div class="box">
                    <div>
                        <div class="font-weight-bold">Name of person completing reference:</div>
                        <div>{{ application.name }}</div>
                    </div>
                    <div>
                        <div class="font-weight-bold">Name of Organization/Employer:</div>
                        <div>{{ application.organization }}</div>
                    </div>
                    <div>
                        <div class="font-weight-bold">Your position in the Organization:</div>
                        <div>{{ application.position }}</div>
                    </div>
                    <div>
                        <div class="font-weight-bold">Your relationship to the applicant:</div>
                        <div>{{ application.relationship }}</div>
                    </div>
                    <div>
                        <div class="font-weight-bold">How long have you know the applicant?:</div>
                        <div>{{ application.applicant_known }}</div>
                    </div>
                </div>
            </div>

            <!-- EMPLOYMENT -->
            <div>
                <div class="header font-weight-bold">CURRENT EMPLOYMENT IF RELEVANT</div>
                <div class="box">
                    <div>{{ application.current_employment }}</div>
                </div>
            </div>

            <div>
                <div class="header font-weight-bold">PLEASE COMMENT ON THE APPLICANTS</div>
                <div class="box">
                    <div>
                        <div class="font-weight-bold">Reliability and commitment:</div>
                        <div>{{ application.reliability_commitment }}</div>
                    </div>
                    <div>
                        <div class="font-weight-bold">Time keeping and Punctuality:</div>
                        <div>{{ application.approach_to_working_service_user }}</div>
                    </div>
                    <div>
                        <div class="font-weight-bold">Approach to working with service users:</div>
                        <div>{{ application.approach_to_working_service_user }}</div>
                    </div>
                    <div>
                        <div class="font-weight-bold">Approach to working with service users friends, family or other representatives:</div>
                        <div>{{ application.approach_to_working_service_user_friends_family }}</div>
                    </div>
                    <div>
                        <div class="font-weight-bold">Approach to working with other professionals:</div>
                        <div>{{ application.approach_to_working_service_professionals }}</div>
                    </div>
                    <div>
                        <div class="font-weight-bold">Approach to working as part of a team:</div>
                        <div>{{ application.approach_to_working_part_of_team }}</div>
                    </div>
                    <div>
                        <div class="font-weight-bold">The applicant's ability to use professional supervision:</div>
                        <div>{{ application.ability_to_use_professional_supervision }}</div>
                    </div>
                    <div>
                        <div class="font-weight-bold">The applicants particular skills and abilities:</div>
                        <div>{{ application.particular_skills_abilities }}</div>
                    </div>
                    <div>
                        <div class="font-weight-bold">The applicants ability to undertake and utilise training in their practice:</div>
                        <div>{{ application.ability_to_undertake_and_utilise_training }}</div>
                    </div>
                    <div>
                        <div class="font-weight-bold">Has the applicant been subject to any disciplinary measures whilst in your employment?:</div>
                        <div>{{ application.subject_to_any_disciplinary_measures }}</div>
                    </div>
                    <div>
                        <div class="font-weight-bold">Any other information you consider to be appropriate in our consideration of this applicants suitability for this post:</div>
                        <div>{{ application.other_information }}</div>
                    </div>
                </div>
            </div>

            <div class="box" style="border-top: solid 1px black;">
                <div>
                    <div class="font-weight-bold">Print Name: </div>
                    <div>{{ application.print_name }}</div>
                </div>
                <div>
                    <div class="font-weight-bold">Date:</div>
                    <div>{{ computedDate }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { getDoc, doc } from "firebase/firestore"
    const nuxtApp = useNuxtApp()
    const db = nuxtApp.$db
    
    const application = ref(null)
    const loading = ref(true)

    onMounted(async () => {
        loading.value = true
        const route = useRoute()
        const docRef = doc(db, route.params.id)
        const docSnap = await getDoc(docRef)

        if(!docSnap.exists()) return loading.value = false
        const document = docSnap.data()
        console.log('document: ', document)
        application.value = document
        loading.value = false
    })

    const computedDate = computed(() => {
        if(!application.value.date) return ''
        const seconds = application.value.date.seconds
        const date = new Date(seconds * 1000)
        return `${date.toDateString().split(' ').slice(0, 4).join(' ')}`
    })
</script>

<style scoped>
    div {
        font-size: 16px;
    }

    .container {
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
    }

    .header {
        background-color: #B3B3B3;
        padding: 2px 4px;
        color: black;
        border: solid 1px black;
    }

    .bold-border {
        border: solid 4px black;
        font-weight: bold;
    }

    .box {
        border-bottom: solid 1px black;
        border-left: solid 1px black;
        border-right: solid 1px black;
        padding: 2px 8px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>