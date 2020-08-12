import request from '@/utils/request';
export /**
 * @description 登录
 * @param {ILoginForm} params
 */
const login = async (params: any) =>
  request({
    url: '/user/login',
    method: 'post',
    params,
  });
