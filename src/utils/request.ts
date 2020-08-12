import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { getToken, API_KEY } from '@/utils/auth';
import { message } from 'antd';
import { apiConfig } from '@/api/config';
const { AXIOS_TIMEOUT, ApiUrl } = apiConfig;
const service = axios.create({
  baseURL: ApiUrl, // url = base url + request url
  timeout: AXIOS_TIMEOUT,
  withCredentials: true, // send cookies when cross-domain requests
});

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    let token = getToken();
    if (token) {
      config.headers[API_KEY] = token;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    message.error(error.message);
  },
);

export default service;
