import request from '@/utils/request';
import { AxiosPromise } from 'axios';
export /**
 * @description 登录
 * @param {ILoginForm} params
 */
const login = (params: ILoginParams) =>
  request({
    url: '/user/login',
    method: 'post',
    params,
  }) as AxiosPromise<IResponse<ILoginResponse>>;
export /**
 * @description 登录
 * @param {ILoginForm} params
 */
const save = (data: FormData) =>
  request({
    url: '/spider/save',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data,
  });
export const getNodes = () =>
  request({
    url: '/spider/get',
    method: 'get',
  });
