import React from 'react';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { removeToken } from '@/utils/auth';
import { history } from 'umi';
const RightContent = () => {
  const handleLogout = () => {
    removeToken();
    history.replace('/login');
  };

  return (
    <div>
      <Button
        onClick={handleLogout}
        shape="circle"
        icon={<LogoutOutlined style={{ color: '#ff0000' }} />}
      />
    </div>
  );
};

export default RightContent;
