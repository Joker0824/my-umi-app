import request from '@/utils/request';

export /**
 * @description 创建新任务
 * @param {ICreateTaskData} data
 */
const createTask = (data: ICreateTaskData) =>
  request({
    url: '/task/add',
    method: 'post',
    data,
  });

export /**
 * @description 删除任务
 * @param {IDeleteTaskParams} params
 */
const deleteTask = (taskIdList: ITaskIdList) =>
  request({
    url: '/task/delete',
    method: 'delete',
    params: { taskIdList },
  });

export /**
 * @description 得到任务详情
 * @param {ITaskDetailParams} params
 */
const getTaskDetail = (params: ITaskDetailParams) =>
  request({
    url: '/task/detail',
    method: 'get',
    params,
  });

export /**
 * @description 编辑任务
 * @param {IEditTaskParams} params
 */
const editTask = (params: IEditTaskParams) =>
  request({
    url: '/task/edit',
    method: 'put',
    params,
  });

export /**
 * @description 得到任务列表
 * @param {ITaskListParams} params
 */
const getTaskList = (params: ITaskListParams) =>
  request({
    url: '/task/list',
    method: 'get',
    params,
  });

export /**
 * @description 开始任务
 * @param {ITaskIdList} taskIdList
 */
const startTask = (taskIdList: ITaskIdList) =>
  request({
    url: '/task/start',
    method: 'post',
    data: { taskIdList },
  });

export /**
 * @description 停止任务
 * @param {ITaskIdList} taskIdList
 */
const stopTask = (taskIdList: ITaskIdList) =>
  request({
    url: '/task/stop',
    method: 'post',
    data: { taskIdList },
  });
