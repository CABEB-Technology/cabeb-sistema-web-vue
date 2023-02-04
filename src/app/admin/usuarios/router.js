const usuario = {
    path: 'usuarios',
    name: 'Usuários',
    component: () => import('./Usuario.vue'),
};

const formInserir = {
    path: 'usuarios/inserir',
    name: 'usuario_inserir',
    component: () => import('./Form.vue'),
};

const formAtualizar = {
    path: 'usuarios/:id/atualizar',
    name: 'usuario_atualizar',
    component: () => import('./Form.vue'),
};

export default [usuario, formInserir, formAtualizar];
