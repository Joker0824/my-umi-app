import React, { useState, useRef, useMemo } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import {
  Form,
  Table,
  Input,
  Button,
  Tag,
  Modal,
  message,
  Popconfirm,
  Card,
  Tooltip,
  Switch,
  Space,
  Popover,
  Spin,
} from 'antd';
import { TableProps } from 'antd/lib/table/Table.d';
import { ValidateMessages } from 'rc-field-form/lib/interface';

import {
  SearchOutlined,
  ClockCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  ExclamationCircleOutlined,
  BulbOutlined,
  LoadingOutlined,
  StepForwardOutlined,
  PauseOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { useAntdTable, useBoolean, useRequest, useSetState } from 'ahooks';
import { PaginatedParams } from 'ahooks/lib/useAntdTable';
import {
  getTaskList,
  editTask,
  startTask,
  stopTask,
  addTask,
  deleteTask,
} from '@/api/task';
import style from './style.less';
import { ReturnList, ISearchForm } from './type';
import Cron from '@/components/Cron';
import { IResponse } from '@/api/type/response';
type modalType = 'add' | 'edit';

const TaskList = () => {
  const [form] = Form.useForm();
  const [
    taskModalVisible,
    { setTrue: showTaskModal, setFalse: hideTaskModal },
  ] = useBoolean(false);
  const cronRef = useRef<{ generate: () => string }>(null);
  const [taskModalForm] = Form.useForm();
  const [modalType, setModalType] = useState<modalType>('add'); //记录弹窗是编辑任务还是创建任务
  const modalTitle = useMemo(
    () => (modalType === 'add' ? '创建任务' : '编辑任务'),
    [modalType],
  );
  const [taskId, setTaskId] = useState<number>();
  const [flowId, setFlowId] = useState<string>();

  const validateMessages: ValidateMessages = {
    required: '${label}为必填项!',
    types: {
      email: '${label} 不是有效的邮箱!',
      number: '${label} 不是有效的数字!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /**
   * @description 获取form和分页组件里的字段
   * @param {PaginatedParams[0]} { current, pageSize }
   * @param {ISearchForm} { keyword }
   * @returns
   */
  const getData = (
    { current, pageSize }: PaginatedParams[0],
    { keyword }: ISearchForm,
  ) => {
    return getTaskList({
      current,
      size: pageSize,
      keyword: keyword,
    });
  };
  const { tableProps, search, refresh: refreshTable } = useAntdTable<
    ReturnList
  >(getData, {
    form,
    // pollingInterval: 5000,
    // pollingWhenHidden: false,
    formatResult(result) {
      const { total, records: list } = result.resource;
      return { total, list } as any;
    },
  });
  const { submit } = search;
  const tableConfig: TableProps<ITaskDetailResponse> = {
    columns: [
      {
        title: '任务名称',
        dataIndex: 'taskName',
        render: (taskName: string, record, index) => {
          return <span>{taskName} </span>;
        },
      },
      {
        title: 'cron',
        dataIndex: 'cron',
        width: 80,
        render: (cron, record) => {
          return <Tag>{cron}</Tag>;
        },
      },
      {
        title: '定时/长任务',
        dataIndex: 'isRegular',
        width: 130,
        render: (isRegular: boolean, record) => {
          return <Tag color="default">{isRegular ? '定时' : '长任务'}</Tag>;
        },
      },
      {
        title: '创建时间',
        dataIndex: 'createTime',
        width: 150,
        render: (createTime: string) => {
          return (
            <Tag icon={<ClockCircleOutlined />} color="#999">
              {createTime}
            </Tag>
          );
        },
      },
      {
        title: '状态',
        dataIndex: 'isEnabled',
        render: (isEnabled: boolean, record) => {
          return isEnabled ? (
            <SyncOutlined spin />
          ) : (
            <Tag icon={<ExclamationCircleOutlined />} color="warning">
              未启动
            </Tag>
          );
        },
      },
      {
        title: '下次执行时间',
        dataIndex: 'nextExecuteTime',
        render: (nextExecuteTime: string) => {
          return (
            nextExecuteTime && (
              <Tag icon={<ClockCircleOutlined />} color="#999">
                {nextExecuteTime}
              </Tag>
            )
          );
        },
      },
      {
        title: '操作',
        render: (text, record) => {
          return (
            <Space>
              <Popconfirm
                title="确认删除任务?"
                onConfirm={() => deleteTaskRequest([record.taskId])}
                okText="确定"
                cancelText="取消"
                className={style.operateItem}
              >
                <Button danger size="small" icon={<DeleteOutlined />} />
              </Popconfirm>
              <Tooltip title="查看任务">
                <Button
                  className={style.operateItem}
                  size="small"
                  icon={<SearchOutlined />}
                />
              </Tooltip>
              <Tooltip title="编辑任务">
                <Button
                  onClick={() => handleEditTask(record)}
                  className={style.operateItem}
                  size="small"
                  icon={<EditOutlined />}
                />
              </Tooltip>
              {record.isEnabled ? (
                <Tooltip title="停止任务">
                  <Button
                    onClick={() => handleStopTask(record)}
                    className={style.operateItem}
                    size="small"
                    danger
                    icon={<PauseOutlined />}
                  />
                </Tooltip>
              ) : (
                <Tooltip title="开始任务">
                  <Button
                    onClick={() => handleStartTask(record)}
                    className={style.operateItem}
                    size="small"
                    icon={<StepForwardOutlined />}
                  />
                </Tooltip>
              )}
            </Space>
          );
        },
      },
    ],
    expandable: {
      expandedRowRender: record => (
        <Card title="任务描述">{record.description}</Card>
      ),
    },
    rowKey: 'taskId',
  };
  const { loading: editTaskLoading, run: editTaskRequest } = useRequest(
    editTask,
    {
      manual: true,
      formatResult(result) {
        return result;
      },
      onSuccess(result) {
        const { code, msg } = result as IResponse<string>;
        if (code === 1) {
          hideTaskModal();
          refreshTable(); //重新获取表格数据
        } else {
          message.warning(msg);
        }
      },
    },
  );
  const { loading: addTaskLoading, run: addTaskRequest } = useRequest(addTask, {
    manual: true,
    formatResult(result) {
      return result;
    },
    onSuccess(result) {
      const { code, msg } = result as IResponse<string>;
      if (code === 1) {
        hideTaskModal();
        refreshTable();
      } else {
        message.warning(msg);
      }
    },
  });

  const { run: startTaskRequest } = useRequest(startTask, {
    manual: true,
    formatResult(result) {
      return result;
    },
    onSuccess(result) {
      const { code, msg } = result as IResponse<string>;
      if (code === 1) {
        message.success('成功开始任务');
      } else {
        message.warning(msg);
      }
    },
  });
  const { run: deleteTaskRequest } = useRequest(deleteTask, {
    manual: true,
    formatResult(result) {
      return result;
    },
    onSuccess(result) {
      const { code, msg } = result as IResponse<string>;
      if (code === 1) {
        message.success('删除成功');
        refreshTable();
      } else {
        message.warning(msg);
      }
    },
  });
  const { run: stopTaskRequest } = useRequest(stopTask, {
    manual: true,
    formatResult(result) {
      return result;
    },
    onSuccess(result) {
      const { code, msg } = result as IResponse<string>;
      if (code === 1) {
        message.success('成功停止任务');
      } else {
        message.warning(msg);
      }
      message.success('');
    },
  });
  /**
   * @description 编辑任务
   * @param {ITaskDetailResponse} record
   */
  const handleEditTask = (record: ITaskDetailResponse) => {
    setModalType('edit');
    setTaskId(record.taskId);
    setFlowId(record.flowId);
    taskModalForm.setFieldsValue(record);
    showTaskModal();
  };
  /**
   * @description 创建任务
   */
  const handleAddTask = () => {
    setModalType('add');
    showTaskModal();
  };

  /**
   * @description 开始任务
   * @param {ITaskDetailResponse} record
   */
  const handleStartTask = (record: ITaskDetailResponse) => {
    startTaskRequest([record.taskId]);
  };

  /**
   * @description 关闭任务
   * @param {ITaskDetailResponse} record
   */
  const handleStopTask = (record: ITaskDetailResponse) => {
    stopTaskRequest([record.taskId]);
  };

  /**
   * @description 点击Modal确定按钮
   * @param {modalType} modalType
   */
  const onModalOk = async (modalType: modalType) => {
    try {
      const {
        cron,
        description,
        flowId,
        isRegular,
        taskName,
      } = (await taskModalForm.validateFields()) as IAddTaskData;
      if (modalType === 'add') {
        addTaskRequest({
          cron,
          description,
          isRegular,
          flowId: '1308669296028708865',
          taskName,
        });
      }
      if (modalType === 'edit') {
        editTaskRequest({
          flowId,
          isRegular,
          taskId: taskId!,
          taskName,
          cron,
          description,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const searchFrom = (
    <Form className={style.searchForm} layout="inline" form={form}>
      <Form.Item name="keyword" label="任务名称">
        <Input allowClear />
      </Form.Item>
      <Form.Item>
        <Button onClick={submit} icon={<SearchOutlined />} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleAddTask} icon={<PlusOutlined />}>
          创建任务
        </Button>
      </Form.Item>
    </Form>
  );

  const taskModal = (
    <Modal
      title={modalTitle}
      visible={taskModalVisible}
      onOk={() => onModalOk(modalType)}
      okText="确定"
      cancelText="取消"
      onCancel={hideTaskModal}
      destroyOnClose
      afterClose={() => {
        setFlowId(undefined);
        setTaskId(undefined);
        taskModalForm.resetFields([
          'cron',
          'isRegular',
          'taskName',
          'description',
        ]);
      }}
    >
      <Spin
        indicator={<LoadingOutlined />}
        spinning={modalType === 'add' ? addTaskLoading : editTaskLoading}
      >
        <Form
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 17 }}
          className={style.searchForm}
          form={taskModalForm}
          validateMessages={validateMessages}
        >
          <Form.Item
            name="taskName"
            label="任务名称"
            rules={[{ required: true }]}
          >
            <Input allowClear />
          </Form.Item>
          <Form.Item
            name="isRegular"
            label="定时/长任务"
            valuePropName="checked"
            rules={[{ required: true }]}
          >
            <Switch checkedChildren="定时" unCheckedChildren="长任务" />
          </Form.Item>
          <Form.Item label="cron规则">
            <Form.Item name="cron" noStyle>
              <Input style={{ width: 200, marginRight: 10 }} allowClear />
            </Form.Item>
            <Popover
              content={<Cron value="****?*" ref={cronRef} />}
              title="设置Cron"
              placement="bottomLeft"
              trigger="click"
              onVisibleChange={(visible: boolean) => {
                if (!visible) {
                  const cron = cronRef.current?.generate()!;
                  taskModalForm.setFieldsValue({ cron });
                }
              }}
            >
              <Tooltip title="生成Cron">
                <Button icon={<BulbOutlined />}></Button>
              </Tooltip>
            </Popover>
          </Form.Item>
          <Form.Item name="description" label="任务描述">
            <Input.TextArea rows={4} allowClear />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );

  return (
    <PageContainer>
      {searchFrom}
      <Table {...tableConfig} {...tableProps} />
      {taskModal}
    </PageContainer>
  );
};

export default TaskList;
