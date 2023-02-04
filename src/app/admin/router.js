import usuariosRouter from './usuarios/router';

const routes = {
    path: 'administracao',
    name: 'Administracao',
    component: () => import('./Administracao.vue'),
    children: [...usuariosRouter],
};

export default routes;
