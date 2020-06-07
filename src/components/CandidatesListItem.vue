<template>
    <v-row @click="openCandidate" class="candidates-list-item">
        <v-col><span class="fio">{{candidate.name}}</span></v-col>
        <v-col><span class="position">{{candidate.position}}</span></v-col>
    </v-row>
</template>

<script>
    export default {
        name: "CandidatesListItem",
        props: ['candidate'],
        methods: {
            openCandidate() {
                this.$router.push(`/candidate/${this.candidate.id}`)
            }
        }
    }
</script>

<style scoped>
    .candidates-list-item {
        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        display: grid;
        grid-template-columns: 1fr 1fr ;
        grid-column-gap: 3em;
        justify-content: space-evenly;
        margin: 0.5em 2em 0 2em;
    }
</style>