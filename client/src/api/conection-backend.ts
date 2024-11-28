import axios from 'axios'

// Configuración de Axios para la API
const api = axios.create({
  baseURL: 'http://localhost:5003/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

api.defaults.headers.common['Accept-Language'] = 'es'
api.defaults.headers.common['User-TimeZone'] =
  Intl.DateTimeFormat().resolvedOptions().timeZone

export default api
