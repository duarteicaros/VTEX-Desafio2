import axios from 'axios';

const api2 = axios.create({
    baseURL: 'http://my-json-server.typicode.com/duarteicaros/db-vtex/produtos-F2'
})

export default api2;