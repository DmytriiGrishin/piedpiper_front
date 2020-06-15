<template>
  <v-app id="app">
    <main>
    <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  components: {

  },
  created: function () {
    axios.interceptors.response.use(undefined, function (err) {
      return new Promise(function () {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          localStorage.removeItem('user-token')
          axios.defaults.headers.common['Authorization'] = null
          this.$router.push("/login")
        }
      });
    });
  }
}
</script>

<style>
#app {
  /*font-family: Roboto, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  text-align: center;
  margin-top: 60px;
}
/*div.v-application .primary--text {*/
/*  color: #2c3e50 !important;*/
/*}*/
</style>
