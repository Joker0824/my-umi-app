import React, { useContext } from 'react';
import { IRouteComponentProps } from 'umi';
import EditorKoni from '@/components/EditorKoni';
const DataManage: React.FC<IRouteComponentProps> = ({ route }) => {
  return (
    <div className="data-manage">
      <EditorKoni />
    </div>
  );
};

export default DataManage;
