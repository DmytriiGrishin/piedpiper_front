<template>
  <div>
    <div class="list-header-container">
      <div class="list-header">
        <h2>ФИО СОТРУДНИКА</h2>
        <h2>РОЛЬ</h2>
      </div>
      <button><span>ВЫЙТИ</span></button>
    </div>

    <v-container fluid class="candidates-list">
      <v-row class="candidates-list-header">
        <v-col><span class="fio">ФИО КАНДИДАТА</span></v-col>
        <v-col><span class="position">Должность</span></v-col>
      </v-row>
      <CandidatesListItem class="candidates-list-item"
                          v-for="candidate in candidates"
                          :key="candidate.id"
                          v-bind:candidate="candidate"  />
    </v-container>

  </div>
</template>

<script>
  import CandidatesListItem from "@/components/CandidatesListItem";
  export default {
    components: {CandidatesListItem},
    props: {
      source: String,
    },
    data: () => ({
      candidates: [{
        id: 0,
        name: "Жмыщенко Михаил Петрович",
        position: "Охранник",
      }, {
        id: 1,
        name: "Жмыщенко Михаил Петрович",
        position: "Охранник",
      }, {
        id: 2,
        name: "Жмыщенко Михаил Петрович",
        position: "Охранник",
      }, {
        id: 3,
        name: "Жмыщенко Михаил Петрович",
        position: "Охранник",
      }, {
        id: 4,
        name: "Жмыщенко Михаил Петрович",
        position: "Охранник",
      }, {
        id: 5,
        name: "Жмыщенко Михаил Петрович",
        position: "Охранник",
      }]

    }),
  }
</script>

<style scoped>
  button span {
    margin: 0 1em 0 1em
  }

  .list-header-container {
    display: grid;
    grid-template-columns: 5fr 1fr ;
    grid-column-gap: 3em;
    margin: 0 2em 0 2em;
  }


  .list-header {
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-column-gap: 3em;
    justify-content: space-evenly;
  }


  button {
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    max-inline-size: fit-content;
  }
  .list-header h2 {
    display: inline;
  }

  * {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #000000;
  }

  .candidates-list {
    padding: 1em 0 0 0 ;
  }

  .candidates-list-header {
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