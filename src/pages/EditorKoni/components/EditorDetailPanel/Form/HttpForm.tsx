import React from 'react';
import { FormProp } from './type';
import { Form, Input, Row, Col, Checkbox, Select } from 'antd';
import { useMount } from 'ahooks';
const { Item } = Form;
const methods = ['GET', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS', 'TRACE'];
const HttpForm: React.FC<FormProp> = ({
  itemData,
  onValuesChange,
  updateItem,
}) => {
  const httpFormInitValue: HttpFields = {
    cookieAutoSet: 1,
    cookieDescription: [],
    cookieName: [],
    cookieValue: [],
    followRedirect: 1,
    headerDescription: [],
    headerName: [],
    headerValue: [],
    label: 'HTTP',
    method: 'GET  ',
    parameterDescription: [],
    parameterName: [],
    parameterValue: [],
    proxy: '',
    repeatEnable: 1,
    responseCharset: '',
    retryCount: '',
    shape: 'http',
    sleep: '',
    timeout: '',
    tlsValidate: 1,
    url: '',
  };
  const initialValues = { ...httpFormInitValue, ...itemData };
  useMount(() => {
    updateItem(initialValues);
  });
  return (
    <Form initialValues={initialValues} onValuesChange={onValuesChange}>
      <Row gutter={20}>
        <Col span={6}>
          <Item label="自定义节点名" name="label">
            <Input />
          </Item>
        </Col>
        <Col span={6}>
          <Item label="请求路径" name="url">
            <Input />
          </Item>
        </Col>
        <Col span={6}>
          <Item label="爬虫间隔时长（单位毫秒）" name="sleep">
            <Input />
          </Item>
        </Col>
        <Col span={6}>
          <Item label="超时时长（单位毫秒）" name="timeout">
            <Input />
          </Item>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={6}>
          <Item
            label="自动管理cookie"
            name="cookieAutoSet"
            valuePropName="checked"
          >
            <Checkbox />
          </Item>
        </Col>
        <Col span={6}>
          <Item
            label="跟随重定向"
            name="followRedirect"
            valuePropName="checked"
          >
            <Checkbox />
          </Item>
        </Col>
        <Col span={6}>
          <Item label="自动去重" name="repeatEnable" valuePropName="checked">
            <Checkbox />
          </Item>
        </Col>
        <Col span={6}>
          <Item label="TLS证书验证" name="tlsValidate" valuePropName="checked">
            <Checkbox />
          </Item>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={6}>
          <Item label="请求方式" name="method">
            <Select style={{ width: 120 }}>
              {methods.map(method => (
                <Select.Option key={method} value={method}>
                  {method}
                </Select.Option>
              ))}
            </Select>
          </Item>
        </Col>
        <Col span={6}>
          <Item label="cookie名" name="cookieName">
            <Input />
          </Item>
        </Col>
        <Col span={6}>
          <Item label="cookie值" name="cookieValue">
            <Input />
          </Item>
        </Col>
        <Col span={6}>
          <Item label="cookie描述" name="cookieDescription">
            <Input />
          </Item>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={6}>
          <Item label="header描述" name="headerDescription">
            <Input />
          </Item>
        </Col>
        <Col span={6}>
          <Item label="header名" name="headerName">
            <Input />
          </Item>
        </Col>
        <Col span={6}>
          <Item label="header值" name="headerValue">
            <Input />
          </Item>
        </Col>

        <Col span={6}>
          <Item label="参数描述" name="parameterDescription">
            <Input />
          </Item>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={6}>
          <Item label="参数名" name="parameterName">
            <Input />
          </Item>
        </Col>
        <Col span={6}>
          <Item label="参数值" name="parameterValue">
            <Input />
          </Item>
        </Col>
        <Col span={6}>
          <Item label="设置代理" name="proxy">
            <Input />
          </Item>
        </Col>
        <Col span={6}>
          <Item label="页面编码" name="responseCharset">
            <Input />
          </Item>
        </Col>
      </Row>

      <Row gutter={20}>
        <Col span={6}>
          <Item label="重试次数" name="retryCount">
            <Input />
          </Item>
        </Col>
      </Row>
    </Form>
  );
};

export default HttpForm;
