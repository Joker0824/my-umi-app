import React from 'react';
import { history } from 'umi';
import { getToken } from '@/utils/auth';
export default (props: any) => {
  const isLogin = !!getToken();
  if (isLogin) {
    return <div>{props.children} </div>;
  } else {
    history.push('/login');
    return null;
  }
};
