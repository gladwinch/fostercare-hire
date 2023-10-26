<template>
    <div class="container">
        <h1 class="text-h2 text-center">Foster Care Ireland</h1>
        <h2 class="text-4 text-center">REFERENCE REQUEST</h2>

        
        <div>
            <div class="text-5">APPLICANT DETAILS</div>
            <div class="text-6 mt-4">{{ applicantName }} has applied for the post of Social Care Worker. You
                have been nominated to provide a reference for this applicant. Enclosed is a copy of
                the job description and person specification. From your knowledge of the applicant,
                could you complete this reference form and return , Thank-you for your
                cooperation and we look forward to receiving the completed form.
            </div>
            <!-- <div class="text-5 mt-4">AISLING HOMES</div> -->
        </div>

        <v-divider></v-divider>

        <div>
            <div class="text-5 text-decoration-underline">REFEREES DETAILS</div>
            
            <div class="form-wrapper mt-4">
                <v-text-field label="Name of person completing reference" v-model="form.name"></v-text-field>
                <v-text-field label="Name of Organization/Employer" v-model="form.organization"></v-text-field>
                <v-text-field label="Your position in the Organization" v-model="form.position"></v-text-field>
                <v-text-field label="Your relationship to the applicant" v-model="form.relationship"></v-text-field>
                <v-text-field label="How long have you know the applicant?" v-model="form.applicant_known"></v-text-field>
            </div>
        </div>

        <v-divider></v-divider>

        <div>
            <div class="text-5 text-decoration-underline">CURRENT EMPLOYMENT IF RELEVANT</div>
            
            <div class="form-wrapper mt-4">
                <v-textarea
                    filled
                    name="input-7-4"
                    label="Current employment if relevant"
                    v-model="form.current_employment"
                ></v-textarea>
            </div>
        </div>

        <v-divider></v-divider>

        <!-- <div>
            <div class="text-5 text-decoration-underline">APPLICANT’S CURRENT EMPLOYMENT DETAILS</div>
            
            <div class="form-wrapper mt-4">
                <v-text-field label="Job Title" v-model="form.job_title"></v-text-field>
                <v-text-field label="Start date" v-model="form.start_date"></v-text-field>
                <v-text-field label="Current salary" v-model="form.current_salary"></v-text-field>
                <v-text-field label="Number of days off sick in past 12 months" v-model="form.sick_off_days"></v-text-field>
                <v-textarea
                    filled
                    name="input-7-4"
                    label="Please give details of their duties and responsibilities"
                    v-model="form.duty_details"
                ></v-textarea>
            </div>
        </div>

        <v-divider></v-divider> -->

        <div>
            <div class="text-5 text-decoration-underline">PLEASE COMMENT ON THE APPLICANTS</div>
            
            <div class="form-wrapper mt-4">
                <v-textarea
                    filled
                    name="input-7-4"
                    label="Reliability and commitment"
                    v-model="form.reliability_commitment"
                ></v-textarea>
                <v-text-field label="Time keeping and Punctuality" v-model="form.punctuality"></v-text-field>
                <v-textarea
                    filled
                    name="input-7-4"
                    label="Approach to working with service users"
                    v-model="form.approach_to_working_service_user"
                ></v-textarea>
                <v-textarea
                    filled
                    name="input-7-4"
                    label="Approach to working with service users friends, family or other representatives"
                    v-model="form.approach_to_working_service_user_friends_family"
                ></v-textarea>
                <v-textarea
                    filled
                    name="input-7-4"
                    label="Approach to working with other professionals"
                    v-model="form.approach_to_working_service_professionals"
                ></v-textarea>
                <v-textarea
                    filled
                    name="input-7-4"
                    label="Approach to working as part of a team"
                    v-model="form.approach_to_working_part_of_team"
                ></v-textarea>
                <v-textarea
                    filled
                    name="input-7-4"
                    label="The applicant's ability to use professional supervision"
                    v-model="form.ability_to_use_professional_supervision"
                ></v-textarea>
                <v-textarea
                    filled
                    name="input-7-4"
                    label="The applicants particular skills and abilities"
                    v-model="form.particular_skills_abilities"
                ></v-textarea>
                <v-textarea
                    filled
                    name="input-7-4"
                    label="The applicants ability to undertake and utilise training in their practice"
                    v-model="form.ability_to_undertake_and_utilise_training"
                ></v-textarea>
                <v-textarea
                    filled
                    name="input-7-4"
                    label="Has the applicant been subject to any disciplinary measures whilst in your employment?"
                    v-model="form.subject_to_any_disciplinary_measures"
                ></v-textarea>
                <v-text-field label="Would you re-employ this applicant?" v-model="form.reemploy_applicant"></v-text-field>
                <v-textarea
                    filled
                    name="input-7-4"
                    label="Any other information you consider to be appropriate in our consideration of this applicants suitability for this post"
                    v-model="form.other_information"
                ></v-textarea>
            </div>

            <v-divider></v-divider>
            <v-text-field label="Print Name / Signature" v-model="form.print_name" class="mt-5"></v-text-field>
            <vue-date-picker
                v-model="form.date"
                :format="format"
                placeholder="Date"
            >
            </vue-date-picker>
        </div>

        <v-btn size="large" variant="outlined" :loading="loading" @click="submitData">
            Submit
        </v-btn>
    </div>

    <v-dialog
      v-model="showDisbleForm"
      width="auto"
      persistent
    >
      <v-card color="black" class="pb-1">
        <v-card-text>
            <v-icon
            style="transform: translateY(-2px);"
            icon="mdi-cancel"
            class="mr-2"
            ></v-icon>
            Invalid reference application
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog
        v-model="loadingForm"
        persistent
        width="auto"
    >
      <v-card
        color="white"
      >
        <v-card-text>
          Please stand by while we load your application
          <v-progress-linear
            indeterminate
            color="black"
            rounded
            class="mt-2 mb-2"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-snackbar
        v-model="showUpdateSnackbar"
        :timeout="2000"
        color="success"
        elevation="24"
    >
        Reference application updated!
    </v-snackbar>
</template>

<script setup>
    const route = useRoute()
    import { addDoc, collection } from "firebase/firestore"

    definePageMeta({
        title: 'Form'
    })

    const url = 'https://page-downloader.onrender.com/request/'
    const nuxtApp = useNuxtApp()
    const db = nuxtApp.$firestore
    const showDisbleForm = ref(false)
    const applicantName = ref("")
    const loadingForm = ref(true)
    const allowRealTime = ref(false)
    const showUpdateSnackbar = ref(false)

    const loading = ref(false)
    const form = ref({

        // REFEREES DETAILS
        name: "",
        organization: "",
        position: "",
        relationship: "",
        applicant_known: "",

        // CURRENT EMPLOYMENT
        current_employment: "",

        // APPLICANT’S CURRENT EMPLOYMENT DETAILS
        // job_title: "",
        // start_date: "",
        // current_salary: "",
        // sick_off_days: "",
        // duty_details: "",

        // PLEASE COMMENT ON THE APPLICANTS
        reliability_commitment: "",
        punctuality: "",
        approach_to_working_service_user: "",
        approach_to_working_service_user_friends_family: "",
        approach_to_working_service_professionals: "",
        approach_to_working_part_of_team: "",
        ability_to_use_professional_supervision: "",
        particular_skills_abilities: "",
        ability_to_undertake_and_utilise_training: "",
        subject_to_any_disciplinary_measures: "",
        reemploy_applicant: "",
        other_information: "",

        // FINAL
        print_name: "",
        date: null,

        // FORM DATA
        id: "",
        ref_id: ""
    })

    const format = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    const submitData = async () => {
        showDisbleForm.value = false
        const { name, id, ref_id } = route.query
        if(!name || !id || !ref_id) {
            showDisbleForm.value = true
            return
        }

        loading.value = true
        console.log(form._rawValue)
        await fetch(`/api/reference-request/${ref_id}/update`, {
            method: 'put',
            body: form._rawValue
        })

        loading.value = false
        reset()

        // await addDoc(collection(db, "applications"), data)
        // await useFetch(url+newDocRef.id)
    }

    function reset() {
        const doc = {
            name: "",
            organization: "",
            position: "",
            relationship: "",
            applicant_known: "",
            current_employment: "",
            reliability_commitment: "",
            punctuality: "",
            approach_to_working_service_user: "",
            approach_to_working_service_user_friends_family: "",
            approach_to_working_service_professionals: "",
            approach_to_working_part_of_team: "",
            ability_to_use_professional_supervision: "",
            particular_skills_abilities: "",
            ability_to_undertake_and_utilise_training: "",
            subject_to_any_disciplinary_measures: "",
            reemploy_applicant: "",
            other_information: "",
            print_name: "",
            date: null,
            id: "",
            ref_id: ""
        }

        form.value = doc
    }

    onMounted(async () => {
        const { name, id, ref_id } = route.query

        if(!name || !id || !ref_id) {
            showDisbleForm.value = true
            loadingForm.value = false
            return
        }

        const { data } = await fetch(`/api/reference-request/${ref_id}`)

        if(
            data._rawValue && 
            data._rawValue.data
        ) {
            let prevApp = JSON.parse(JSON.stringify(data._rawValue.data))
            for (let key in prevApp) {
                if (prevApp[key] !== null) {
                    form.value[key] = prevApp[key];
                }
            }

            setTimeout(() => {
                allowRealTime.value = true
            }, 1000);
        }

        applicantName.value = name
        form.value.id = id
        form.value.ref_id = ref_id
        loadingForm.value = false
    })

    function debounce(func, wait) {
        let timeout

        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args)
            }

            clearTimeout(timeout);
            timeout = setTimeout(later, wait)
        }
    }

    const updateForm = async () => {
        const { ref_id } = route.query
        let formData = toRaw(form)
        formData = formData._rawValue

        loading.value = true
        await fetch(`/api/reference-request/${ref_id}/update`, {
            method: 'put',
            body: formData
        })
        loading.value = false

        showUpdateSnackbar.value = true
    }

    const fetchDebounce = debounce(updateForm, 2000)

    watch(form, () => {
        if(allowRealTime.value) {
            fetchDebounce()
        }
    }, { deep: true, immediate: false })
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .form-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem
    }
</style>