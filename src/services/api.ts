import axios from 'axios';

const api = axios.create({
    baseURL: 'http://my-json-server.typicode.com/duarteicaros/VTEX-Desafio2'
})

export default api;