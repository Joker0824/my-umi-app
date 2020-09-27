import React from 'react';
import style from './style.less';
import { BasicLayoutProps } from '@ant-design/pro-layout';
import Logo from '@/icons/components/Logo';
const AppHeader: React.FC<BasicLayoutProps> = props => {
  return (
    <div className={style.appHeader}>
      <Logo width={150} height={50} />
    </div>
  );
};

export default AppHeader;
