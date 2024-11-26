import axios from 'axios';

// Configuración de Axios para la API
const api = axios.create({
  baseURL: 'http://localhost:3000/api', // URL del backend
});

export default api;