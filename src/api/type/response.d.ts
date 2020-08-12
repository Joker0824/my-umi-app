/**
 * @description 接口返回数据
 * @interface Response
 * @template T
 */
declare interface IResponse<T = any> {
  data: T;
  message: string;
  code: number;
}
