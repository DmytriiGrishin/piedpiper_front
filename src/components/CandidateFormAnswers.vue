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
    import NProgress from "nprogress";
    import axios from "axios";
    export default {
        name: "CandidateFormAnswers",
        props: ["candidateId"],
        components: {CandidateFormAnswersAnswer},
        data() {
            return {
                answers: [{
                    id: 0,
                    question: "Когда уволились с предыдущего места работы?",
                    text: "Вчера",
                    score: 0
                },{
                    id: 1,
                    question: "Опишите свои политически взгляды",
                    text: "Анархо-примитивистический техно-капиталист",
                    score: 0
                },{
                    id: 2,
                    question: "Опишите свои религиозные взгляды",
                    text: "5G есть  посланник сотоны и это хорошо",
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
                let hasErrors = this.answers.map(ans => {
                    if (ans.score === 0) {
                        this.$refs["answer" + ans.id][0].validationError()
                        return true;
                    }
                    return false
                }).reduce((a, b) => a | b);
                if (hasErrors) {
                    return
                }

                NProgress.start()
                axios.post(`api/score/${this.props.candidateId}`, {answers: this.answers}).then(() => {
                    NProgress.done()
                    this.$router.push('/candidates')
                }).catch(() => {
                    NProgress.done()
                    this.$router.push('/candidates')
                })

            }
        },
        beforeRouteEnter (to, from, next) {
            NProgress.start()
            // axios.get(`api/candidate/${to.params.candidateId}`).then((resp) => {
            //     next(vm => {
            //         vm.candidate = resp.data.candidate
            //         vm.answers = resp.data.answers
            //         NProgress.done()
            //     })
            // }).catch(() => {
                NProgress.done(); next()
            //})
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