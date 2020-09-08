import React from 'react';
import { Card, Input, Select, Form } from 'antd';
import {
  BrowserHttpForm,
  HttpForm,
  VarForm,
  FunForm,
  SqlForm,
  ResultForm,
  StartForm,
  EndForm,
  GlobalForm,
} from './Form';
import { withPropsAPI } from 'gg-editor';
import _ from 'lodash';
import { boolean2Number } from '@/utils/formatter';
import { Store } from 'ahooks/lib/useFusionTable';
const { Item } = Form;
const { Option } = Select;
type shapeType =
  | 'var'
  | 'start'
  | 'http'
  | 'end'
  | 'fun'
  | 'result'
  | 'browser_http'
  | 'sql';
const inlineFormItemLayout = {
  labelCol: {
    sm: { span: 8 },
  },
  wrapperCol: {
    sm: { span: 16 },
  },
};
interface DetailFormProps {
  type: string;
  propsAPI?: any;
}

class DetailForm extends React.Component<DetailFormProps> {
  get item() {
    const { propsAPI } = this.props;
    return propsAPI.getSelected()[0];
  }

  /**
   * @description 更新字段
   * @memberof DetailForm
   */
  updateItem = (values: Store) => {
    const { propsAPI } = this.props;
    const { getSelected, executeCommand, update, save } = propsAPI;
    setTimeout(() => {
      const item = getSelected()[0];
      if (!item) {
        return;
      }
      executeCommand(() => {
        update(item, {
          ...values,
        });
      });
    }, 0);
  };

  handleInputBlur = (type: string) => (
    e: React.FormEvent<HTMLInputElement>,
  ) => {
    e.preventDefault();
    this.updateItem({
      [type]: e.currentTarget.value,
    });
  };
  /**
   * @description
   * @type {Callbacks['onValuesChange']}
   * @memberof DetailForm
   */
  onValuesChange = (changedValues: Store, values: Store) => {
    let newValue;
    switch (values.shape) {
      case 'browser_http':
        newValue = boolean2Number(values, [
          'cookieAutoSet',
          'headless',
          'javascriptDisabled',
          'imageDisabled',
          'pluginDisable',
          'javaDisable',
          'incognito',
          'sandbox',
          'hideScrollbar',
          'maximized',
        ]);
        break;
      case 'http':
        newValue = boolean2Number(values, [
          'followRedirect',
          'tlsValidate',
          'cookieAutoSet',
          'repeatEnable',
        ]);
        break;
      case 'var':
      case 'end':
      case 'start':
      case 'fun':
        newValue = values;
        break;
      case 'sql':
        newValue = boolean2Number(values, ['isStream']);
        break;
      case 'result':
        newValue = boolean2Number(values, [
          'outputAll',
          'outputDatabase',
          'outputCsv',
        ]);
        break;
      default:
        break;
    }
    console.log(newValue);
    this.updateItem(newValue);
  };
  /**
   * @description 根据不同的node shape渲染表单
   * @memberof DetailForm
   */
  renderNodeDetail = () => {
    const item = this.item.getModel();
    return this.renderForm(item);
  };
  renderForm(item: any) {
    const shape: shapeType = item.shape;
    switch (shape) {
      case 'browser_http':
        return (
          <BrowserHttpForm
            updateItem={this.updateItem}
            itemData={item as BrowserHttpFields}
            onValuesChange={this.onValuesChange}
          />
        );
      case 'end':
        return (
          <EndForm
            updateItem={this.updateItem}
            itemData={item as EndFields}
            onValuesChange={this.onValuesChange}
          />
        );
      case 'result':
        return (
          <ResultForm
            updateItem={this.updateItem}
            itemData={item as ResultFields}
            onValuesChange={this.onValuesChange}
          />
        );
      case 'sql':
        return (
          <SqlForm
            updateItem={this.updateItem}
            itemData={item as SQLFields}
            onValuesChange={this.onValuesChange}
          />
        );
      case 'fun':
        return (
          <FunForm
            updateItem={this.updateItem}
            itemData={item as FunFields}
            onValuesChange={this.onValuesChange}
          />
        );
      case 'var':
        return (
          <VarForm
            updateItem={this.updateItem}
            itemData={item as VarExtractFields}
            onValuesChange={this.onValuesChange}
          />
        );
      case 'http':
        return (
          <HttpForm
            itemData={item as HttpFields}
            onValuesChange={this.onValuesChange}
            updateItem={this.updateItem}
          />
        );
      case 'start':
        return (
          <StartForm
            updateItem={this.updateItem}
            itemData={item as StartFields}
            onValuesChange={this.onValuesChange}
          />
        );
      default:
        break;
    }
  }
  renderEdgeDetail = () => {
    const { label = '', shape = 'flow-smooth' } = this.item.getModel();
    return (
      <Form initialValues={{ label, shape }}>
        <Item label="Label" name="label" {...inlineFormItemLayout}>
          <Input onBlur={this.handleInputBlur('label')} />
        </Item>
        <Item label="样式" name="shape" {...inlineFormItemLayout}>
          <Select onChange={value => this.updateItem({ shape: value })}>
            <Option value="flow-smooth">光滑</Option>
            <Option value="flow-polyline">折线</Option>
            <Option value="flow-polyline-round">折线(圆角)</Option>
          </Select>
        </Item>
      </Form>
    );
  };

  renderGroupDetail = () => {
    const { label = '新建分组' } = this.item.getModel();
    return (
      <Form initialValues={{ label }}>
        <Item label="Label" name="label" {...inlineFormItemLayout}>
          <Input onBlur={this.handleInputBlur('label')} />
        </Item>
      </Form>
    );
  };
  render() {
    const { type } = this.props;
    if (!this.item) {
      return null;
    }
    const getTitle = (type: string) => {
      if (type === 'node') {
        return '节点';
      }
      if (type === 'group') {
        return '组';
      }
      if (type === 'edge') {
        return '边';
      }
    };

    return (
      <Card type="inner" size="small" title={getTitle(type)} bordered={false}>
        {type === 'node' && this.renderNodeDetail()}
        {type === 'edge' && this.renderEdgeDetail()}
        {type === 'group' && this.renderGroupDetail()}
      </Card>
    );
  }
}

export default withPropsAPI(DetailForm as any);
