import React from 'react';
import { MenuDataItem } from '@ant-design/pro-layout';
import MenuItemGjgl from '@/icons/components/MenuItemGjgl';
import style from './style.less';
const MenuItem: React.FC<MenuDataItem> = props => {
  console.log(props);
  console.log(style);
  return (
    <div className={style.menuItem}>
      <MenuItemGjgl height={30} width={30} />
      <p> {props.name}</p>
    </div>
  );
};

export default MenuItem;
