import { IResponse, IListResponse } from '@/api/type/response';
/**
 * @description 表单字段
 * @interface ISearchForm
 */
export interface ISearchForm {
  keyword?: string;
}
export type ReturnList = IResponse<IListResponse<ITaskDetailResponse>>;
