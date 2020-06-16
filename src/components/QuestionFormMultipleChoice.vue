<template>
    <v-container fluid>
        <v-row justify="space-evenly" align-content="center">
            <v-col cols="12" md="4" class="align-center">
                <v-row align="center" justify="center">
                    <v-col cols=“12”>
                        <span>{{question.label}}</span>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="7">
                <v-radio-group mandatory row v-model="question.chosen">
                    <v-radio v-for="choice in question.variants" :key="choice" :label="choice" :value="choice" color='accent'>
                    </v-radio>
                </v-radio-group>
            </v-col>
            <v-col cols="12" md="1" ><v-spacer/></v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "QuestionFormMultipleChoice",
        props: ["question"]
    }
</script>

<style scoped>
</style>