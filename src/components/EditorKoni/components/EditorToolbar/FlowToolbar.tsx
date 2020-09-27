import { Divider, Tooltip } from 'antd';
import React from 'react';
import { Toolbar } from 'gg-editor';
import ToolbarButton from './ToolbarButton';
import styles from './index.less';
import IconFont from '../../common/IconFont';

const FlowToolbar: React.FC<{ onSave: () => void }> = ({ onSave }) => (
  <Toolbar className={styles.toolbar}>
    <Tooltip title="保存" placement="bottom" overlayClassName={styles.tooltip}>
      <IconFont type="icon-baocun" onClick={onSave} />
    </Tooltip>
    <ToolbarButton command="undo" text="撤销" />
    <ToolbarButton command="redo" text="重做" />
    <Divider type="vertical" />
    <ToolbarButton command="copy" text="复制" />
    <ToolbarButton command="paste" text="粘贴" />
    <ToolbarButton command="delete" text="删除" />
    <Divider type="vertical" />
    <ToolbarButton command="zoomIn" icon="zoom-in" text="放大" />
    <ToolbarButton command="zoomOut" icon="zoom-out" text="缩小" />
    <ToolbarButton command="autoZoom" icon="fit-map" text="适应画布" />
    <ToolbarButton command="resetZoom" icon="actual-size" text="重置大小" />
    <Divider type="vertical" />
    <ToolbarButton command="toBack" icon="to-back" text="后置" />
    <ToolbarButton command="toFront" icon="to-front" text="前置" />
    <Divider type="vertical" />
    {/* <ToolbarButton
      command="multiSelect"
      icon="multi-select"
      text="Multi Select"
    /> */}
    {/* <ToolbarButton command="addGroup" icon="group" text="Add Group" /> */}
    {/* <ToolbarButton command="unGroup" icon="ungroup" text="Ungroup" /> */}
  </Toolbar>
);

export default FlowToolbar;
