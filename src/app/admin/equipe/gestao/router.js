export const gestaoRotas = [
    {
        path: 'gestao',
        name: 'Gestão',
        component: () => import('./Gestao.vue'),
    },
    {
        path: 'gestao/inserir',
        name: 'gestao_inserir',
        component: () => import('../Form.vue'),
    },
    {
        path: 'gestao/:id/atualizar',
        name: 'gestao_atualizar',
        component: () => import('../Form.vue'),
    }
];
