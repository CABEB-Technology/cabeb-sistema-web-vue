import router from '../router';

export function errorHandler(error) {
    if (error.response) {
        console.log(error)
    } else {
        console.log(error.message);
        router.push("/error");
    }
}
