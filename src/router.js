import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import { appRotas } from './app/router.js';
import { trackRouter } from 'vue-gtag-next';

const routes = [
    {
        path: '/',
        name: 'home',
        component: App,
        children: [...appRotas],
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./app/auth/Login.vue'),
    },

    {
        path: '/error',
        name: 'error',
        component: () => import('./pages/Error.vue'),
    },
    {
        path: '/:catchAll(.*)',
        name: 'notfound',
        component: () => import('./pages/NotFound.vue'),
        hidden: true,
    },
    {
        path: '/access',
        name: 'access',
        component: () => import('./pages/Access.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

trackRouter(router);

router.beforeEach((to, from, next) => {
    const rotasPublicas = ['/login', '/cadastrar'];
    const authRequired = !rotasPublicas.includes(to.path);

    const isAuthenticated = localStorage.getItem('token');
    if (!authRequired) {
        next();
    } else {
        if (isAuthenticated != null) {
            next();
        } else {
            next('/login');
        }
    }
});

export default router;
