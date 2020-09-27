import React from 'react';
import { Form, Input, Row, Col } from 'antd';
import { FormProp } from './type';
import { useMount } from 'ahooks';
const FunForm: React.FC<FormProp> = ({
  itemData,
  onValuesChange,
  updateItem,
}) => {
  const funInitValues: FunFields = {
    _function: '',
    label: '函数操作',
    shape: 'fun',
  };
  const initialValues = { ...funInitValues, ...itemData };
  useMount(() => {
    updateItem(initialValues);
  });

  return (
    <Form initialValues={initialValues} onValuesChange={onValuesChange}>
      <Row gutter={20}>
        <Col span={6}>
          <Form.Item label="自定义节点名" name="label">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="函数代码" name="_function">
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default FunForm;
