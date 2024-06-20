import { createRouter, createWebHistory } from 'vue-router';
import Loginsocios from '../views/Loginsocios.vue';
import Datasocios from '../views/Datasocios.vue';

const routes = [
  {
    path: '/',
    name: 'LoginSocios',
    component: Loginsocios
  },
  {
    path: '/datasocios',
    name: 'DataSocios',
    component: Datasocios
  }
];

const router = createRouter({
  history: createWebHistory("#"),
  routes
});

export default router;