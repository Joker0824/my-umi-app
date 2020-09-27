/**
 * @description 用户登录所需参数
 * @interface ILoginParams
 */
declare interface ILoginData {
  username: string;
  password: string;
}
/**
 * @description 登录返回数据
 * @interface ILoginResponse
 */
declare interface ILoginResponse {
  token: string;
  nickname: string;
  role: string;
  username: string;
}
