import React from 'react';
import styles from './style.less';
import { useParams } from 'umi';
import { login } from '@/api/login';
import { useRequest } from 'ahooks';
export default () => {
  const params = useParams<{ id: string }>();
  const { data, error, loading } = useRequest<IResponse<ILoginResponse>>(
    login,
    {
      defaultParams: [{ username: 'admin', password: '123456' }],
      onSuccess(response) {
        console.log(response.data.nickname);
      },
    },
  );
  console.log(data, error, loading);
  return (
    <div>
      <h1 className={styles.title}>Page list,id={params.id}</h1>
    </div>
  );
};
