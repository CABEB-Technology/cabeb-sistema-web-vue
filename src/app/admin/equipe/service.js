import { axiosJwt, urlBase } from '../../../service';

const url = `${urlBase}/equipe`;

export const equipeService = {
    criarIntegrante(integrante) {
        return axiosJwt.post(`${url}`, integrante);
    },
    obterIntegrantes(id) {
        return axiosJwt.get(`${url}/integrantes/${id}`);
    },
    obterIntegrantePorId(id) {
        return axiosJwt.get(`${url}/${id}`);
    },
    atualizarIntegrante(id, integrante) {
        return axiosJwt.put(`${url}/${id}`, integrante);
    },
    deletarIntegrante(id) {
        return axiosJwt.delete(`${url}/${id}`);
    },
};
