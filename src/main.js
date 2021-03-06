import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import VueRouter from "vue-router";
import CandidatesList from "@/components/CandidatesList";
import CandidateFormAnswers from "@/components/CandidateFormAnswers";
import Login from "@/components/Login";
import QuestionForm from "@/components/QuestionForm";

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Login },
  { path: '/candidates', component: CandidatesList },
  { path: '/candidate/:candidateId', component: CandidateFormAnswers, },
  {path: '/login', component: Login},
  {path: '/questions', component: QuestionForm}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  console.log(`name:`)
  console.log(to)

  // Start the route progress bar.


  next()
})



new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
