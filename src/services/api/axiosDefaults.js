import axios from 'axios';

// axios.defaults.baseURL = 'https://techstables-2157aa5076c9.herokuapp.com/'
axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();