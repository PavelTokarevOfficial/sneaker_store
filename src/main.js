import { createApp } from 'vue';
import App from './App.vue';
import router from './vueRouter.js';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const app = createApp(App);
app.use(router); // Использование Vue Router в приложении
app.mount('#app');