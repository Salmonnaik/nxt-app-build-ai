import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = 'https://nxt-app-build-ai-production.up.railway.app/api';

const getHeaders = () => {
  const token = Cookies.get('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const api = {
  get: async (url) => {
    const response = await axios.get(`${BASE_URL}${url}`, { headers: getHeaders() });
    return response;
  },
  post: async (url, data) => {
    const response = await axios.post(`${BASE_URL}${url}`, data, { headers: getHeaders() });
    return response;
  },
  put: async (url, data) => {
    const response = await axios.put(`${BASE_URL}${url}`, data, { headers: getHeaders() });
    return response;
  },
  delete: async (url) => {
    const response = await axios.delete(`${BASE_URL}${url}`, { headers: getHeaders() });
    return response;
  },
};

export default api;