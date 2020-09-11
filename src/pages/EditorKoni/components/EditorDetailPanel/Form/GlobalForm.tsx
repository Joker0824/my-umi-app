import React from 'react';
import { useModel } from 'umi';
import { Col, Row, Input, Form, Select } from 'antd';
import { Store } from 'rc-field-form/lib/interface';
const { Item } = Form;
const { Option } = Select;
const submitStrategyOptions = ['child', 'linked', 'parent', 'random'];
const threadCountTypeOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const GlobalForm = () => {
  const { globalFormData, setGlobalFormData } = useModel('useDetailPanelModel');
  const onValuesChange = (changedValues: Store, allValues: Store) => {
    console.log(allValues);
    setGlobalFormData(allValues as GlobalFields);
  };

  return (
    <Form initialValues={globalFormData} onValuesChange={onValuesChange}>
      <Row gutter={20}>
        <Col span={6}>
          <Item label="爬虫名称" name="spiderName">
            <Input />
          </Item>
        </Col>
        <Col span={6}>
          <Item label="提交策略" name="submitStrategy">
            <Select>
              {submitStrategyOptions.map(item => (
                <Option key={item} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </Item>
        </Col>
        <Col span={6}>
          <Item label="线程数" name="threadCount">
            <Select>
              {threadCountTypeOptions.map(item => (
                <Option key={item} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </Item>
        </Col>
      </Row>
    </Form>
  );
};

export default GlobalForm;
