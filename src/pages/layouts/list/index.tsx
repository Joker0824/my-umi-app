import React from 'react';
import styles from './style.less';
import { useParams } from 'umi';

export default () => {
  const params = useParams<{ id: string }>();
  console.log(params);
  return (
    <div>
      <h1 className={styles.title}>Page list,id={params.id}</h1>
    </div>
  );
};
