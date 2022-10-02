import { createRouter, createWebHistory } from 'vue-router';
import { trackRouter } from 'vue-gtag-next';
import appRotas from '@/app/router';

const routes = [
    {
        path: '/',
        name: 'home',
        redirect: { name: 'DashBoard' },
        component: () => import('@/App.vue'),
        children: [...appRotas]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/app/auth/LoginComponent.vue'),
    },
    {
        path: '/cadastrar',
        name: 'cadastrar',
        component: () => import('@/app/usuario/CadastroComponent'),
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
