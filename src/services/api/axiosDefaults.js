import axios from 'axios';

axios.defaults.baseURL = 'https://techstables-2157aa5076c9.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true