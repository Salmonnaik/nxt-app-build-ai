import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

console.log('API Base URL:', BASE_URL);

const getHeaders = () => {
  const token = Cookies.get('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const api = {
  get: async (url) => {
    console.log('Making GET request to:', `${BASE_URL}${url}`);
    const response = await axios.get(`${BASE_URL}${url}`, { headers: getHeaders() });
    return response;
  },
  post: async (url, data) => {
    console.log('Making POST request to:', `${BASE_URL}${url}`);
    console.log('Request data:', data);
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