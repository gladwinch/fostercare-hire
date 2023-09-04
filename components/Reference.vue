<template>
    <v-card
        width="300"
        color="grey-lighten-5"
    >
        <v-card-title>
            {{ data.name }}
        </v-card-title>
        <v-card-subtitle>
            {{ customData }}
        </v-card-subtitle>
        <v-card-actions class="mt-auto">
            <v-btn 
                variant="text"
                color="teal-accent-4" 
                @click="viewRef">
                View
            </v-btn>

            <v-btn 
                variant="text"
                color="teal-accent-4" 
                @click="editRef">
                Edit
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
    const props = defineProps([
        'data'
    ])

    function convertDateFormat(dateString) {
        // Parse the input date string to a Date object
        const date = new Date(dateString);

        // Extract year, month, and day from the Date object
        const year = date.getUTCFullYear();
        const month = date.getUTCMonth() + 1; // Months are zero-based in JS
        const day = date.getUTCDate();

        // Format the date as year/month.day
        const formattedDate = `${year}/${month}/${day}`;

        return formattedDate;
    }

    const customData = computed(() => {
        if(!props.data.date) return 'no date'
        return convertDateFormat(props.data.date)
    })

    const refData = useState('ref-data', () => props.data)

    const editRef = () => {
        refData.value = props.data
        navigateTo(`/application/${props.data.id}/edit`)
    }

    const viewRef = () => {
        refData.value = props.data
        navigateTo(`/application/${props.data.id}`)
    }

</script>