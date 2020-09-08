import React from 'react';
import { Form, Input, Row, Col, Checkbox } from 'antd';
import { FormProp } from './type';
import { useMount } from 'ahooks';
const ResultForm: React.FC<FormProp> = ({
  itemData,
  onValuesChange,
  updateItem,
}) => {
  const resultInitValues: ResultFields = {
    csvEncoding: [],
    csvName: '',
    datasourceId: '',
    label: '结果输出',
    outputAll: 1,
    outputCsv: 1,
    outputDatabase: 1,
    outputName: [],
    outputValue: [],
    shape: 'result',
    tableName: '',
  };
  const initialValues = { ...resultInitValues, ...itemData };
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
          <Form.Item label="数据源id" name="datasourceId">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="表名" name="tableName">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="csv名称" name="csvName">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={6}>
          <Form.Item label="cvs编码" name="csvEncoding">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="输出项" name="outputName">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="输出值" name="outputValue">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="csv名称" name="csvName">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={6}>
          <Form.Item label="输出到数据库" name="outputDatabase">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="输出到csv" name="outputCsv" valuePropName="checked">
            <Checkbox />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default ResultForm;
