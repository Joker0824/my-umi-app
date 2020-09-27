import React from 'react';
import { Form, Input, Col, Row } from 'antd';
import { FormProp } from './type';
import { useMount } from 'ahooks';
const StartForm: React.FC<FormProp> = ({
  itemData,
  onValuesChange,
  updateItem,
}) => {
  const startInitValues: StartFields = { shape: 'start' };
  const initialValues = { ...startInitValues, ...itemData };
  useMount(() => {
    updateItem(initialValues);
  });
  return (
    <Form initialValues={initialValues} onValuesChange={onValuesChange}>
      <Row gutter={20}>
        <Col span={6}>
          {/* <Form.Item label="节点代号" name="shape">
            <Input />
          </Form.Item> */}
        </Col>
      </Row>
    </Form>
  );
};

export default StartForm;
