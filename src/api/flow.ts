import request from '@/utils/request';
import { formatFromData } from '@/utils/helper';

export /**
 * @description 保存流程图
 * @param {IAddFlow} data
 */
const saveFlow = (data: IAddFlow) =>
  request({
    url: '/flow/add',
    method: 'post',
    data,
  });

export /**
 * @description 删除流程图
 * @param {IAddFlow} data
 */
const deleteFlow = (data: IAddFlow) =>
  request({
    url: '/flow/delete',
    method: 'post',
    data,
  });
