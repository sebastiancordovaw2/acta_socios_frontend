import { createApp } from 'vue'
import router from './router';

import './assets/tailwind.css';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import './style.css'
import App from './App.vue'

createApp(App)
.use(router)
.use(VueSweetalert2)
.mount('#app')
