import { createRouter, createWebHistory } from 'vue-router';
import Loginsocios from '../views/Loginsocios.vue';

const routes = [
  {
    path: '/',
    name: 'LoginSocios',
    component: Loginsocios
  }
];

const router = createRouter({
  history: createWebHistory("#"),
  routes
});

export default router;