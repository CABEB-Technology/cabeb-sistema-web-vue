import { gestaoRotas } from './gestao/router';

export const equipeRotas = {
    path: 'equipe',
    name: 'Equipe',
    children: [...gestaoRotas],
};