import React from 'react';
import MenuItemGjgl from '@/icons/components/MenuItemGjgl';
import { Menu } from 'antd';
import style from './style.less';
export default () => {
  console.log(style.menuItem);
  return (
    <Menu className={style.menu}>
      <Menu.Item key="gjgl" className={style.menuItem}>
        <MenuItemGjgl />
        <p>工具管理</p>
      </Menu.Item>
    </Menu>
  );
};
