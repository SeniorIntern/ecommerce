import { COOKIES } from '@/constants';
import axios from 'axios';
import { getCookie } from 'cookies-next';

const token = getCookie(COOKIES.ACCESS_TOKEN);

const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1`,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token}`
  }
});

// ensure the cookie is fetched fresh for each request.
apiClient.interceptors.request.use((config) => {
  const token = getCookie(COOKIES.ACCESS_TOKEN); // Fetch latest token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default apiClient;
