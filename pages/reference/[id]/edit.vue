<template>
    <div class="container">
        <v-btn color="black" @click="navigateTo('/reference')">Back</v-btn>
        <h2 class="text-4 text-center">REFERENCE REQUEST EDIT</h2>

        
        <div>
            <!-- <div class="text-5">APPLICANT DETAILS</div> -->
            <!-- <div class="text-6 mt-4">Fabiana Olivia Acha Uzeda has applied for the post of Social Care Worker. You
                have been nominated to provide a reference for this applicant. Enclosed is a copy of
                the job description and person specification. From your knowledge of the applicant,
                could you complete this reference form and return , Thank-you for your
                cooperation and we look forward to receiving the completed form.
            </div> -->
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

        <v-btn size="large" :loading="loading" color="green" @click="saveData">
            Update
        </v-btn>
    </div>
</template>

<script setup>
    definePageMeta({
		title: 'Edit',
		// middleware: ['auth'],
	})

    const refData = useState('ref-data')
    definePageMeta({
        title: 'Form edit'
    })

    const loading = ref(false)
    const form = ref({
        id: '',
        name: "",
        organization: "",
        position: "",
        relationship: "",
        applicant_known: "",
        current_employment: "",
        reliability_commitment: "",
        punctuality: "",
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
        date: null
    })

    const format = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    const saveData = async () => {
        loading.value = true
        await fetch(`/api/reference-request/${form.value.id}/update`, {
            method: 'put',
            body: form._rawValue
        })

        loading.value = false

        // :TODO back to application
    }

    onMounted(() => {
        const data = toRaw(refData.value)
        if(!data) navigateTo('/reference')

        form.value = data
    })
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