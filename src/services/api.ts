import axios from 'axios';

const api = axios.create({
    baseURL: 'http://my-json-server.typicode.com/duarteicaros/db-vtex/produtos-F1'
})

export default api;