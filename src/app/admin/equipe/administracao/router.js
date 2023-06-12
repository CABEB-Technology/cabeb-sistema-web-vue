export const administracaoRotas = [
    {
        path: 'administracao',
        name: 'Administracao',
        component: () => import('./Administracao.vue'),
    },
    {
        path: 'administracao/inserir',
        name: 'administracao_inserir',
        component: () => import('../Form.vue'),
    },
    {
        path: 'administracao/:id/atualizar',
        name: 'administracao_atualizar',
        component: () => import('../Form.vue'),
    }
];
