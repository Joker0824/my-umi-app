import React, { useContext } from 'react';
import { PageContainer, RouteContext } from '@ant-design/pro-layout';
import { useRouteMatch, IRouteComponentProps } from 'umi';
const CreateTask: React.FC<IRouteComponentProps> = ({ route }) => {
  const match = useRouteMatch();
  console.log(match);
  const context = useContext(RouteContext);
  console.log(context);
  return <PageContainer className="create-task">创建任务</PageContainer>;
};

export default CreateTask;
