import React from 'react';
import { Form, Input, Row, Col, Checkbox, Select } from 'antd';
const { Option } = Select;
import { useMount } from 'ahooks';
const threadCountTypeOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
import { FormProp } from './type';
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
    <div>
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
              <Select
                mode="tags"
                style={{ width: '100%' }}
                placeholder="输入参数后回车"
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="输出值" name="outputValue">
              <Select
                mode="tags"
                style={{ width: '100%' }}
                placeholder="输入参数后回车"
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="输出到数据库" name="outputDatabase">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={6}>
            <Form.Item
              label="输出到csv"
              name="outputCsv"
              valuePropName="checked"
            >
              <Checkbox />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ResultForm;
