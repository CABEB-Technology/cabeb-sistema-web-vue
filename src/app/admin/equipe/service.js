import { axiosJwt, urlBase } from '../../../service';

const url = `${urlBase}/equipe`;

export const gestaoService = {
    criarIntegrante(integrante) {
        return axiosJwt.post(`${url}`, integrante);
    },
    obterGestao() {
        return axiosJwt.get(`${url}/integrantes/${1}`);
    },
    obterIntegrante(id) {
        return axiosJwt.get(`${url}/${id}`);
    },
    atualizarIntegrante(id, integrante) {
        return axiosJwt.put(`${url}/${id}`, integrante);
    },
    deletarIntegrante(id) {
        return axiosJwt.delete(`${url}/${id}`);
    },
};
