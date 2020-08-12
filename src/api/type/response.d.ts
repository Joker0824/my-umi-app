/**
 * @description 接口返回数据
 * @interface Response
 * @template T
 */
declare interface Response<T = any> {
  data: T;
  message: string;
  code: number;
}
