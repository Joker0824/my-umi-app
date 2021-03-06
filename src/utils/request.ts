import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { getToken, API_KEY } from '@/utils/auth';
import { message } from 'antd';
import _ from 'lodash';
import Qs from 'qs';
const { AXIOS_TIMEOUT, ApiUrl } = window.g;
const service = axios.create({
  baseURL: ApiUrl, // url = base url + request url
  timeout: AXIOS_TIMEOUT,
  withCredentials: true, // send cookies when cross-domain requests
  paramsSerializer(params) {
    // 去除 空字符串,null,undefined
    let formatParams = _.omitBy(params, value => {
      if (_.isString(value)) {
        value = value.trim();
      }
      return [null, '', undefined].includes(value);
    });
    let res = Qs.stringify(formatParams, { arrayFormat: 'brackets' });
    return res;
  },
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
  response => {
    return response.data;
  },
  (error: AxiosError) => {
    return error;
  },
);

export default service;
