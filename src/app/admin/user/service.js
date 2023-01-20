import {axiosJwt, urlBase} from '../../../service/';

const url = `${urlBase}/usuario`;
export default {
    obterTodos() {
        return axiosJwt.get(url);
    },
};