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
                    class="border"
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
    .border {
        border: 1px solid #000000;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
    }
</style>