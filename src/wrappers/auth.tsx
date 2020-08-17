import React from 'react';
import {  Redirect } from 'umi';
import { getToken } from '@/utils/auth';
export default (props: any) => {
  const isLogin = !!getToken();
  return isLogin ? <div>{props.children} </div> : <Redirect to="/login" />;
};
