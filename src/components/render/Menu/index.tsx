import React from 'react';
import { Menu } from 'antd';
import { history, useLocation } from 'umi';
import { BasicLayoutProps, MenuDataItem } from '@ant-design/pro-layout';
import { SelectParam } from 'antd/lib/menu/index.d';
import IconFont from '@/icons';
import style from './style.less';
const menu: React.FC<BasicLayoutProps> = props => {
  const { menuData } = props; //注意，在config.ts中route没有设置name的路由不会出现在menuData中
  const { pathname } = useLocation();
  const defaultSelectedKeys: string[] = [pathname];

  const onSelect = (param: SelectParam) => {
    console.log(param);
    history.push(param.key);
  };
  const getMenu = (menuData: MenuDataItem[]) => {
    menuData!.map(({ key, name, icon, children }) => {
      return (
        <Menu.Item key={key} className={style.menuItem}>
          {icon && <IconFont type={icon as string} />}
          {name}
        </Menu.Item>
      );
    });
  };

  return (
    <Menu
      className={style.menu}
      onSelect={onSelect}
      defaultSelectedKeys={defaultSelectedKeys}
    >
      {}
    </Menu>
  );
};

export default menu;
