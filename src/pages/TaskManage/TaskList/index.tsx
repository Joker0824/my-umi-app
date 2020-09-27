import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Form, Table, Input, Button, Switch, Tag, Modal } from 'antd';
import { ColumnsType } from 'antd/lib/table/Table.d';
import {
  SearchOutlined,
  ClockCircleOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { useAntdTable, useBoolean } from 'ahooks';
import { PaginatedParams } from 'ahooks/lib/useAntdTable';
import { getTaskList } from '@/api/task';
import style from './style.less';
import { ReturnList } from './type';
import Cron from '@/components/Cron';

/**
 * @description 表单字段
 * @interface ISearchForm
 */
interface ISearchForm {
  keyword?: string;
}

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
  return getTaskList({ current, size: pageSize, keyword: keyword });
};
const TaskList = () => {
  const [form] = Form.useForm();
  const [visible, { setTrue: showModal, setFalse: hideModal }] = useBoolean(
    false,
  );
  const cronRef = useRef<{ generate: () => string }>(null);
  const { tableProps, search } = useAntdTable<ReturnList>(getData, {
    form,
    formatResult(result) {
      const { total, records: list } = result.resource;
      return { total, list } as any;
    },
  });

  const { submit } = search;
  const columns: ColumnsType<ITaskDetailResponse> = [
    {
      title: '任务名称',
      dataIndex: 'taskName',
    },
    {
      title: 'cron',
      dataIndex: 'cron',
      width: 80,
      render: (cron: string) => {
        return (
          <Button
            onClick={showModal}
            size="small"
            type="primary"
            icon={<EditOutlined />}
          >
            编辑
          </Button>
        );
      },
    },
    {
      title: '定时/长任务',
      dataIndex: 'isRegular',
      width: 130,
      render: (isRegular: boolean) => {
        return (
          <Switch
            checkedChildren="定时"
            unCheckedChildren="长任务"
            defaultChecked={isRegular}
          />
        );
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
      title: '开启/关闭',
      dataIndex: 'isEnabled',
      render: (isEnabled: boolean) => {
        return (
          <Switch
            checkedChildren="开启"
            unCheckedChildren="关闭"
            defaultChecked={isEnabled}
          />
        );
      },
    },
    {
      title: '下次执行时间',

      dataIndex: 'nextExecuteTime',
      render: (nextExecuteTime: string) => {
        return (
          <Tag icon={<ClockCircleOutlined />} color="#999">
            {nextExecuteTime}
          </Tag>
        );
      },
    },
  ];

  const searchFrom = (
    <Form className={style.searchForm} layout="inline" form={form}>
      <Form.Item name="keyword" label="任务名称">
        <Input allowClear />
      </Form.Item>
      <Form.Item>
        <Button onClick={submit} icon={<SearchOutlined />} />
      </Form.Item>
    </Form>
  );
  const cronModal = (
    <Modal
      title="编辑Cron"
      visible={visible}
      onOk={() => {
        console.log(cronRef.current?.generate());
      }}
      cancelText="取消"
      onCancel={hideModal}
    >
      <Cron value="000000" ref={cronRef} />
    </Modal>
  );

  return (
    <PageContainer>
      {searchFrom}
      <Table columns={columns} rowKey="taskId" {...tableProps} />
      {cronModal}
    </PageContainer>
  );
};

export default TaskList;
