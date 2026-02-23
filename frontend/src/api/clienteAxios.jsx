import axios from 'axios';

const clienteAxios = axios.create({
  baseURL: 'http://localhost:8080',
});

// Este "interceptor" actúa como un peaje: antes de que salga cualquier pedido,
// revisa si está la clave en el baúl (localStorage) y la pega en el Header.
clienteAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token_admin');
  if (token) {
    config.headers['X-Swift-Token']= token;
  }
  return config;
});

export default clienteAxios;