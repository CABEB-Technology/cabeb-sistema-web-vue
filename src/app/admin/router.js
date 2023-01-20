import userRouter from './user/router';

const routes = {
    path: 'administracao',
    name: 'Administracao',
    component: () => import('./Administracao.vue'),
    children: [
        userRouter
    ],
};

export default routes;
