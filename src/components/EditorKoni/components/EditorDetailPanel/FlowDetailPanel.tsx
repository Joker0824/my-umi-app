import {
  CanvasPanel,
  DetailPanel,
  EdgePanel,
  GroupPanel,
  MultiPanel,
  NodePanel,
} from 'gg-editor';
import { Card } from 'antd';
import React from 'react';
import DetailForm from './DetailForm';
import { GlobalForm } from './Form';
import styles from './index.less';

const FlowDetailPanel = () => (
  <Card>
    <DetailPanel className={styles.detailPanel}>
      <NodePanel>
        <DetailForm type="node" />
      </NodePanel>
      <EdgePanel>
        <DetailForm type="edge" />
      </EdgePanel>
      <GroupPanel>
        <DetailForm type="group" />
      </GroupPanel>
      <MultiPanel>
        <Card type="inner" size="small" title="Multi Select" bordered={false} />
      </MultiPanel>
      <CanvasPanel>
        <Card type="inner" size="small" title="全局设置" bordered={false} />
        <GlobalForm />
      </CanvasPanel>
    </DetailPanel>
  </Card>
);

export default FlowDetailPanel;
