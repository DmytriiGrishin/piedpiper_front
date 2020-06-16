<template>
  <div>
    <v-container fluid class="list-header-container">
      <v-row no-gutters align="center">
        <v-col cols="12" md="10">
            <v-row justify="space-evenly" class="list-header">
                <v-col cols=“12”>ФИО СОТРУДНИКА</v-col>
                <v-col cols=“12”>РОЛЬ</v-col>
            </v-row>
        </v-col>
        <v-col cols="12" md="2">
            <v-row align="center" justify="center">
                <v-col cols=“12”>
                    <v-btn color="primary" @click="logout"><span>ВЫЙТИ</span></v-btn>
                </v-col>
            </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="candidates-list">
      <v-row justify="space-evenly" class="candidates-list-header">
        <v-col cols=“12”><span class="fio">ФИО КАНДИДАТА</span></v-col>
        <v-col cols=“12”><span class="position">Должность</span></v-col>
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
  import axios from "axios";
  import NProgress from "nprogress";
  export default {
    components: {CandidatesListItem},
    props: {
      source: String,
    },
    data: () => ({
      candidates: [{
        id: 0,
          fio: "Жмыщенко Михаил Петрович",
        position: "Охранник",
      }, {
        id: 1,
          fio: "Жмыщенко Михаил Петрович",
        position: "Охранник",
      }, {
        id: 2,
          fio: "Жмыщенко Михаил Петрович",
        position: "Охранник",
      }, {
        id: 3,
          fio: "Жмыщенко Михаил Петрович",
        position: "Охранник",
      }, {
        id: 4,
          fio: "Жмыщенко Михаил Петрович",
        position: "Охранник",
      }, {
        id: 5,
          fio: "Жмыщенко Михаил Петрович",
        position: "Охранник",
      }]
    }),
      methods: {
        logout () {
            localStorage.removeItem('user-token')
            axios.defaults.headers.common['Authorization'] = null
            this.$router.push("/login")
        }
      },
      beforeRouteEnter (to, from, next) {
          NProgress.start()
          axios.get("api/questions").then((resp) => {
              next(vm => {
                  vm.candidates = resp.data.candidates
                  NProgress.done()
              })
          }).catch(() => NProgress.done())

      }
  }
</script>

<style scoped>
  button span {
    margin: 0 1em 0 1em
  }

  .list-header-container {
    margin: 0 2em 0 2em;
  }


  .list-header {
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }


  button {
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  * {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    text-align: center;
  }

  .candidates-list {
    padding: 1em 0 0 0 ;
  }

  .candidates-list-header {
    background: #FFFFFF;
    border: 1px solid #000000;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    margin: 0.5em 2em 0 2em;
  }

</style>