import usuariosRouter from './usuarios/router';
import { equipeRotas } from './equipe/router';

export const administracaoRotas = {
    path: 'administracao',
    name: 'Administracao',
    component: () => import('./Administracao.vue'),
    children: [...usuariosRouter, equipeRotas],
};
