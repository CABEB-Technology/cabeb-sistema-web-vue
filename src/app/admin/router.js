import usuariosRouter from './usuarios/router';

export const administracaoRotas = {
    path: 'administracao',
    name: 'Administracao',
    component: () => import('./Administracao.vue'),
    children: [...usuariosRouter],
};
