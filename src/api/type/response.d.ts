import { AxiosPromise } from 'axios';

/**
 * @description 接口返回数据
 * @interface Response
 * @template T
 */
declare interface IResponse<T = any> {
  resource: T;
  msg: string;
  code: number;
}

/**
 * @description list类型返回数据
 * @interface IListResponse
 * @template T
 */
declare interface IListResponse<T = any> {
  size: number;
  total: number;
  pages: number;
  current: number;
  records: T;
}
