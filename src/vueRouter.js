import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/MainPage/MainPage.vue';
import ListSneakers from './components/Sneakers/Sneakers.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/list-sneakers',
        name: 'ListSneakers',
        component: ListSneakers,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
