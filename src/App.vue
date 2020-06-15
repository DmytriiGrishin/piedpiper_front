<template>
  <v-app id="app">
    <main>
    <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {

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
