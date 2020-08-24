import React from 'react';
import style from './style.less';
import { BasicLayoutProps } from '@ant-design/pro-layout';

const AppHeader: React.FC<BasicLayoutProps> = props => {
  return <div className={style.appHeader}>我是AppHeader</div>;
};

export default AppHeader;
