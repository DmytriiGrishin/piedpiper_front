import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import VueRouter from "vue-router";
import CandidatesList from "@/components/CandidatesList";
import CandidateFormAnswers from "@/components/CandidateFormAnswers";

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/', component: CandidatesList },
  { path: '/candidates', component: CandidatesList },
  { path: '/candidate/:candidateId', component: CandidateFormAnswers, }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
