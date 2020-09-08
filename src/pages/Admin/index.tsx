import React from 'react';
import styles from './style.less';
import { useModel, useAccess } from 'umi';
import { setToken } from '@/utils/auth';

export default () => {
  const { initialState, loading, error, refresh, setInitialState } = useModel(
    '@@initialState',
  );
  const access = useAccess();
  return (
    <div>
      <h1 className={styles.title}>{JSON.stringify(access)}</h1>
    </div>
  );
};
