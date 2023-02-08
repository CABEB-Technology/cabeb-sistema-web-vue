import { usuariosMenu } from './usuarios/menu';
import { equipeMenu } from './equipe/menu';

export const administracaoMenu = {
    label: 'ADMINISTRAÇÃO',
    items: [usuariosMenu, equipeMenu],
};
