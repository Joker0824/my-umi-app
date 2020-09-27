import React from 'react';
import { Form, Row, Col, Input, Select, Checkbox } from 'antd';
import _ from 'lodash';
import { FormProp } from './type';
import { useMount } from 'ahooks';
const { Item } = Form;
const { Option } = Select;
const driverTypes = ['chrome', 'firefox', 'htmlunit'];
const BrowserHttpForm: React.FC<FormProp> = ({
  itemData,
  onValuesChange,
  updateItem,
}) => {
  const browserHttpInitValues: BrowserHttpFields = {
    arguments: '',
    cookieAutoSet: 1,
    driverType: 'chrome',
    headless: 1,
    hideScrollbar: 1,
    imageDisabled: 1,
    implicitlyWaitTimeout: '',
    incognito: 1,
    javaDisable: 1,
    javascriptDisabled: 1,
    label: '浏览器HTTP',
    maximized: 1,
    pageLoadTimeout: '',
    pluginDisable: 1,
    proxy: '',
    sandbox: 1,
    shape: 'browser_http',
    url: '',
    userAgent: '',
    windowSize: '',
  };
  const initialValues = { ...browserHttpInitValues, ...itemData };
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
          <Item label="驱动类型" name="driverType">
            <Select style={{ width: 120 }}>
              {driverTypes.map(type => (
                <Option key={type} value={type}>
                  {type}
                </Option>
              ))}
            </Select>
          </Item>
        </Col>
        <Col span={6}>
          <Item label="窗口大小" name="windowSize">
            <Input />
          </Item>
        </Col>
        <Col span={6}>
          <Item label="代理" name="proxy">
            <Input />
          </Item>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={6}>
          <Item label="请求url" name="url">
            <Input />
          </Item>
        </Col>
        <Col span={6}>
          <Item label="页面加载等待时长(毫秒)" name="implicitlyWaitTimeout">
            <Input />
          </Item>
        </Col>
        <Col span={6}>
          <Item label="页面加载超时时长（毫秒）" name="pageLoadTimeout">
            <Input />
          </Item>
        </Col>
        <Col span={6}>
          <Item label="沙盒模式" name="sandbox" valuePropName="checked">
            <Checkbox />
          </Item>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={6}>
          <Item label="用户访问信息" name="userAgent">
            <Input />
          </Item>
        </Col>
        <Col span={6}>
          <Item label="隐藏滚动条" name="hideScrollbar" valuePropName="checked">
            <Checkbox />
          </Item>
        </Col>
        <Col span={6}>
          <Item label="禁用图片" name="imageDisabled" valuePropName="checked">
            <Checkbox />
          </Item>
        </Col>
        <Col span={6}>
          <Item label="禁用java" name="javaDisable" valuePropName="checked">
            <Checkbox />
          </Item>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={6}>
          <Item
            label="禁用js"
            name="javascriptDisabled"
            valuePropName="checked"
          >
            <Checkbox />
          </Item>
        </Col>
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
          <Item label="隐身模式" name="incognito" valuePropName="checked">
            <Checkbox />
          </Item>
        </Col>
        <Col span={6}>
          <Item label="最大化" name="maximized" valuePropName="checked">
            <Checkbox />
          </Item>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={6}>
          <Item label="禁用插件" name="pluginDisable" valuePropName="checked">
            <Checkbox />
          </Item>
        </Col>
        <Col span={6}>
          <Item label="无头模式" name="headless" valuePropName="checked">
            <Checkbox />
          </Item>
        </Col>
      </Row>
    </Form>
  );
};

export default BrowserHttpForm;
