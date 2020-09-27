/**
 * @description 添加新任务data类型
 * @interface ICreateTaskData
 */
declare interface ICreateTaskData {
  cron: string;
  description: string;
  flowId?: string;
  isRegular?: boolean;
  taskName?: string;
}

declare type ITaskIdList = number[];

/**
 * @description 得到任务详情params类型
 * @interface ITaskDetailParams
 */
declare interface ITaskDetailParams {
  taskId: number;
}
declare interface JwFlow {
  createTime: string;
  flowId: string;
  flowJson: string;
  flowName: string;
  state: number;
  verify: boolean;
}
/**
 * @description 得到任务详情response类型
 * @interface ITaskDetailResponse
 */
declare interface ITaskDetailResponse {
  beginTime: string;
  createTime: string;
  cron: string;
  description: string;
  enabled: number;
  endTime: string;
  executeCount: number;
  flowId: string;
  isEnabled: boolean;
  isRegular: boolean;
  jwFlow: JwFlow;
  lastExecuteTime: string;
  nextExecuteTime: string;
  regular: number;
  taskId: number;
  taskName: string;
}
/**
 * @description 编辑任务params类型
 * @interface IEditTaskParams
 */
declare interface IEditTaskData {
  cron?: string;
  description?: string;
  flowId: string;
  isRegular: boolean;
  taskId: number;
  taskName: string;
}

/**
 * @description 得到任务列表params类型
 * @interface ITaskListParams
 */
declare interface ITaskListParams {
  current: number;
  keyword?: string;
  size: number;
}
