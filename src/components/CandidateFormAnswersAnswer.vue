<template>
    <div class="answer-container">
        <div class="question"> {{answer.question}} </div>
        <div class="answer">  {{answer.text}} </div>
        <v-rating @input="dismissError" v-model="answer.score" :background-color="color" >
        </v-rating>
    </div>
</template>

<script>
    export default {
        name: "CandidateFormAnswersAnswer",
        props: ["answer"],
        data() {
            return {
                score: 0,
                color: "rgba(0, 0, 0, 0.5)"
            }
        },
        methods: {
            validationError() {
                this.color = "rgba(255, 0, 0, 0.5)"
            },
            dismissError() {
                console.log("dismissing error")
                this.color = "rgba(0, 0, 0, 0.5)"
            }
        }
    }
</script>

<style scoped>
    .answer-container {
        display: grid;
        grid-template-columns: 1fr 3fr 0.5fr;
        grid-column-gap: 1em ;
        justify-content: space-evenly;
        margin: 0.5em 2em 0 2em;
        font-family: Roboto,sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
    }

    .answer {
        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        vertical-align: bottom;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .question {
        display: flex;
        align-items: center;
    }

</style>