import { Card } from 'antd';
import { Minimap } from 'gg-editor';
import React from 'react';
import style from './style.less';
const EditorMinimap = () => (
  <Card className={style.minimap} type="inner" size="small" bordered={false}>
    <Minimap height={200} width={300} />
  </Card>
);

export default EditorMinimap;
