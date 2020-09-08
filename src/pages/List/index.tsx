import React from 'react';
import { Select } from 'antd';
import style from './style.less';
import { useParams } from 'umi';
// import { login } from '@/api/login';
// import { useRequest } from 'ahooks';
const children: any = [];
for (let i = 10; i < 36; i++) {
  children.push(
    <Select.Option key={i.toString(36) + i} value={i}>
      {i.toString(36) + i}
    </Select.Option>,
  );
}
export default () => {
  const params = useParams<{ id: string }>();
  // const { data, error, loading } = useRequest<IResponse<ILoginResponse>>(
  //   login,
  //   {
  //     defaultParams: [{ account: 'test001', password: '111111' }],
  //   },
  // );
  // console.log(data, error, loading);
  return (
    <div>
      <Select
        mode="multiple"
        style={{ width: 300 }}
        placeholder="Please select"
        className={style.customSelect}
      >
        {children}
      </Select>
      <h1 className={style.title}>Page list,id={params.id}</h1>
      <div className={style.card}></div>
      <div className="fl">fsf</div>
    </div>
  );
};
