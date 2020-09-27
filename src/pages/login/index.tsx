import React from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { Callbacks } from 'rc-field-form/lib/interface';
import { login } from '@/api/login';
import { history } from 'umi';
import style from './style.less';
import { ReactComponent as LogoIcon } from '@/icons/assets/logo.svg';
import { IResponse } from '@/api/type/response';
import { setToken } from '@/utils/auth';
const LoginForm = () => {
  /**
   * @description 提交表单且数据验证成功后回调事件
   * @param {*} values
   */
  const onFinish: Callbacks['onFinish'] = async values => {
    run(values as ILoginData);
  };
  const { loading, run } = useRequest<IResponse<string>>(login, {
    manual: true,
    onSuccess(result) {
      const { code, msg, resource } = result;
      if (code === 1) {
        setToken(resource);
        history.replace('/task-manage/task-list');
      } else {
        message.warning(msg);
      }
    },
  });
  return (
    <div className={style.formWrapper}>
      <Form
        name="normal_login"
        className={style.loginForm}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Row justify="center">
          <Col style={{ padding: '20px 0' }}>
            <LogoIcon width={200} height={70} />
          </Col>
        </Row>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="用户名"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item>
          <Button
            style={{ width: '100%' }}
            loading={loading}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
