import React, { FC } from 'react';
import { Button, Space } from 'antd';
import { useHistory } from 'umi';
import style from './style.less';
import { ReactComponent as AdobeIcon } from '@/icons/adobe.svg';
import { ReactComponent as AngularIcon } from '@/icons/angular.svg';
import { ReactComponent as UserIcon } from '@/icons/user.svg';
import { ReactComponent as LogoIcon } from '@/icons/logo.svg';
const iconConfig = { width: 50, height: 50, cursor: 'pointer' };
const layouts: FC = ({ children }) => {
  const history = useHistory();
  const onClick = (path: string) => {
    history.push({ pathname: path });
  };
  return (
    <div style={{ padding: 20 }}>
      <header>我是layout header</header>
      <LogoIcon width={300} height={200} />
      <UserIcon className={style.icon} />
      <AdobeIcon className={style.icon} />
      <AngularIcon className={style.icon} />

      <Space size="small">
        <Button onClick={() => onClick('/list/111')}>/list</Button>
        <Button
          onClick={() => {
            onClick('/admin');
          }}
        >
          /admin
        </Button>
      </Space>
      {children}
      <footer>我是layout footer</footer>
    </div>
  );
};
export default layouts;
