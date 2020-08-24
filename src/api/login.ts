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
