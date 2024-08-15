import { createRouter, createWebHistory } from 'vue-router';
import AppBody from '../components/body.vue'
import viewJobs from '../components/viewJobs.vue';
// import addJobs from '../components/addJobs.vue';
import applyHere from '../components/applyHere.vue'

const routes = [
  { path: '/', component: AppBody},
  { path: '/jobs', component: viewJobs },
  { path: '/addjob', component: applyHere },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
