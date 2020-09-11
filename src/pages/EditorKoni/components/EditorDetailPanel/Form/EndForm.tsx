import React from 'react';
import { Form, Input, Row, Col } from 'antd';
import { FormProp } from './type';
import { useMount } from 'ahooks';
const EndForm: React.FC<FormProp> = ({
  itemData,
  onValuesChange,
  updateItem,
}) => {
  const endInitValues: EndFields = { label: '结束', shape: 'end' };

  const initialValues = { ...endInitValues, ...itemData };
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
      </Row>
    </Form>
  );
};

export default EndForm;
