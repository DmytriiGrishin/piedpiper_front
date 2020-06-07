<template>
    <div>
        <div class="answer-form-header">
            <h2>{{candidate.name}}</h2>
            <h2>{{candidate.position}}</h2>
        </div>
        <br>
        <CandidateFormAnswersAnswer v-for="answer in answers" :key="answer.id" :answer="answer" :ref="'answer' + answer.id"/>
        <br>
        <div class="button-save">
            <v-btn @click="saveForm" block>Оценить</v-btn>
        </div>
    </div>
</template>

<script>
    import CandidateFormAnswersAnswer from "@/components/CandidateFormAnswersAnswer";
    export default {
        name: "CandidateFormAnswers",
        props: ["candidateId"],
        components: {CandidateFormAnswersAnswer},
        data() {
            return {
                answers: [{
                    id: 0,
                    question: "Как вы относитесь к неофашизму?",
                    text: "Я точно не являюсь неофашистом, как явным, так и скрытым",
                    score: 0
                },{
                    id: 1,
                    question: "Ссылки на ваши приложения",
                    text: "https://dmytriigrishin.github.io/t-rex-runner/",
                    score: 0
                }],
                candidate: {
                    name: "Жмыщенко Михаил Петрович",
                    position: "Охранник"
                }
            }
        },
        methods: {
            saveForm() {
                console.log(`candidate ${this.candidateId}:`)
                if (this.answers.map(ans => {
                    if (ans.score === 0) {
                      this.$refs["answer" + ans.id][0].validationError()
                        return true;
                    }
                    return false
                }).reduce((a, b) => a | b)) {
                    return
                }
                this.$router.push('/candidates')
            }
        }
    }
</script>

<style scoped>
    .answer-form-header {
        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr ;
        grid-column-gap: 3em;
        justify-content: space-evenly;
        margin: 0 2em 0 2em;
    }
    .button-save {
        margin: 0 2em 0 2em;
    }
</style>