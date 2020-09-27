import React from 'react';
import { Form, Input, Col, Row, Checkbox } from 'antd';
import { FormProp } from './type';
import { useMount } from 'ahooks';
import { Store } from 'ahooks/lib/useAntdTable';

const SqlForm: React.FC<FormProp> = ({
  itemData,
  onValuesChange,
  updateItem,
}) => {
  const sqlInitValues: SQLFields = {
    datasourceId: '',
    isStream: 1,
    label: '执行SQL',
    shape: 'sql',
    sql: '',
    statementType: 'select',
  };
  const initialValues = { ...sqlInitValues, ...itemData };
  useMount(() => {
    updateItem(initialValues);
  });
  const changeValue = (changedValue: Store, values: Store) => {
    onValuesChange!(changedValue, values);
  };

  return (
    <Form initialValues={initialValues} onValuesChange={changeValue}>
      <Row gutter={20}>
        <Col span={6}>
          <Form.Item label="自定义节点名" name="label">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="数据源id" name="datasourceId">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="语句类型" name="statementType">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="SQL语句" name="sql">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={6}>
          <Form.Item
            label="输出到sqlRowSet流"
            name="isStream"
            valuePropName="checked"
          >
            <Checkbox />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default SqlForm;
