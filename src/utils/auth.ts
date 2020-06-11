export const API_KEY: string = 'Authorization';

export /**
 * @description 设置token
 * @param {string} token
 */
const setToken = (token: string): void => {
  sessionStorage.setItem(API_KEY, token);
};

export /**
 * @description 获取token
 * @returns {(string | null)} token
 */
const getToken = (): string | null => {
  return sessionStorage.getItem(API_KEY);
};

export /**
 * @description 删除token
 * @returns
 */
const removeToken = () => {
  return sessionStorage.removeItem(API_KEY);
};
