import axios from 'axios';

axios.defaults.baseURL = 'https://techstables-2157aa5076c9.herokuapp.com/';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create({
    baseURL: axios.defaults.baseURL,
    withCredentials: true,
});
export const axiosRes = axios.create({
    baseURL: axios.defaults.baseURL,
    withCredentials: true,
});