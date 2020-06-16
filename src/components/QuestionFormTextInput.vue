<template>
    <v-container fluid class="mr-2 ml-2">
        <v-row justify="space-around">
            <v-col cols="12" md="4" >
                <v-row align="center" justify="center">
                    <v-col cols=“12”>
                        <span>{{question.label}}</span>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="7" ><v-text-field
                    name="answer"
                    type="text"
                    v-model="question.answer"
                    :rules="[v => !!v || 'Все вопросы обязательны для ответа']"
                    required
            ></v-text-field></v-col>
            <v-col cols="12" md="1" ><v-spacer/></v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "QuestionFormTextInput",
        data () {
            return {
            }
        },
        props: ["question"]
    }
</script>

<style scoped>
</style>