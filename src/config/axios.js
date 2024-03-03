import axios from 'axios';

const clienteAxios = axios.create({
    baseURL : 'http://localhost:7777'
});

export default clienteAxios;