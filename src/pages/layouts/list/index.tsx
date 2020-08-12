import React from 'react';
import styles from './style.less';
import { useParams } from 'umi';
import { login } from '@/api/login';
import { useRequest } from 'ahooks';
export default () => {
  const params = useParams<{ id: string }>();
  const { data, error, loading } = useRequest(login, {
    defaultParams: [{ username: 'admin', password: '123456' }],
  });
  return (
    <div>
      <h1 className={styles.title}>Page list,id={params.id}</h1>
    </div>
  );
};
