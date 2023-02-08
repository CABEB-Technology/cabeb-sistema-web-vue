import { axiosJwt, urlBase } from '../../../service';

const url = `${urlBase}/usuario`;

export const usuarioService = {
    obterTodos() {
        return axiosJwt.get(url);
    },
    deletarUsuario(id) {
        return axiosJwt.delete(`${url}/${id}`);
    },
    obterUsuario(id) {
        return axiosJwt.get(`${url}/${id}`);
    },
};
