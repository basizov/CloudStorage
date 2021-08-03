import { AxiosInstance, AxiosRequestConfig } from "axios";

const setRequestConfig = (config: AxiosRequestConfig) => {
  const token = localStorage.getItem('token') || '';

  config.headers.Authorization = `Bearer ${token}`;
  return (config);
}

const interseptors = (axios: AxiosInstance) => {
  axios.interceptors.request.use(setRequestConfig);
};

export default interseptors;
