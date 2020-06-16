<template>
    <v-form v-model="isValid">
        <QuestionFormTextInput v-for="text in textOnly" :key="'text' + text.id" :question="text"/>
        <QuestionFormMultipleChoice v-for="choice in multipleChoice" :key="'choice' + choice.id" :question="choice"/>
        <v-btn @click="submit" :disabled="!isValid" >Отправить</v-btn>
        <v-row>
            <v-col cols = "4"><v-spacer/></v-col>
            <v-col cols = "4">
                <v-alert type="success" :value="sendSuccsesfully" prominent >Успешно сохранено!</v-alert>
            </v-col>
            <v-col cols = "4"><v-spacer/></v-col>
        </v-row>
    </v-form>
</template>

<script>
    import NProgress from "nprogress";
    import axios from "axios";
    import QuestionFormTextInput from "@/components/QuestionFormTextInput";
    import QuestionFormMultipleChoice from "@/components/QuestionFormMultipleChoice";

    export default {
        name: "QuestionForm",
        components: {QuestionFormMultipleChoice, QuestionFormTextInput},
        data () {
            return {
                textOnly: [],
                multipleChoice: [],
                isValid: true,
                sendSuccsesfully: false
            }
        },
        beforeRouteEnter (to, from, next) {
            NProgress.start()
            axios.get("api/questions").then((resp) => {
                next(vm => {
                    vm.textOnly = resp.data.textQuestions
                    vm.multipleChoice = resp.data.multipleChoicesQuestions
                    NProgress.done()
                })
            }).catch(() => NProgress.done())
        },
        methods: {
            submit () {
                axios.post("api/questionnaire", {
                    textQuestions: this.textOnly.map(t => {
                        return {id: t.id, answer: t.answer}
                    }),
                    multipleChoicesQuestions: this.multipleChoice.map(t => {
                        return {id: t.id, chosen: t.chosen}
                    })
                }).then(() => this.sendSuccsesfully = true)
            }
        }

    }
</script>

<style scoped>

</style>