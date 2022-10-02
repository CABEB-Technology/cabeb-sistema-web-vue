import { createRouter, createWebHistory } from 'vue-router';
import { trackRouter } from 'vue-gtag-next';
import HomeView from '../views/HomeView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/app/auth/LoginComponent.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
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
