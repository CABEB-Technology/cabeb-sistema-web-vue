import {axiosJwt, urlBase} from '../../../service/';

const url = `${urlBase}/usuario`;
export default {
    obterTodos() {
        return axiosJwt.get(url);
    },
    deletarUsuario(id) {
        return axiosJwt.delete(`${url}/${id}`);
    }
};