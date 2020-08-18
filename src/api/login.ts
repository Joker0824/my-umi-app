import request from '@/utils/request';
export /**
 * @description 登录
 * @param {ILoginForm} params
 */
const login = (params: ILoginParams) =>
  request({
    url: '/user/login',
    method: 'post',
    params,
  });
