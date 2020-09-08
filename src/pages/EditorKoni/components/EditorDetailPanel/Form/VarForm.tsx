import React from 'react';
import { Form, Input, Col, Row } from 'antd';
import { FormProp } from './type';
import { useMount } from 'ahooks';

const VarForm: React.FC<FormProp> = ({
  itemData,
  onValuesChange,
  updateItem,
}) => {
  const varInitValues: VarExtractFields = {
    label: '变量提取',
    shape: 'var',
    variableDescription: [],
    variableName: [],
    variableValue: [],
  };
  const initialValues = { ...varInitValues, ...itemData };
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
          <Form.Item label="变量名" name="variableName">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="变量值" name="variableValue">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="变量描述" name="variableDescription">
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default VarForm;
