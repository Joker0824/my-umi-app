import { Col, Row } from 'antd';
import GGEditor, { Koni } from 'gg-editor';
import { useModel } from 'umi';
import React, { useRef, useEffect } from 'react';
import _ from 'lodash';
import { useRequest } from 'ahooks';
// import EditorMinimap from './components/EditorMinimap';
import { saveFlow } from '@/api/flow';
import { KoniContextMenu } from './components/EditorContextMenu';
import { KoniDetailPanel } from './components/EditorDetailPanel';
import { KoniItemPanel } from './components/EditorItemPanel';
import { KoniToolbar } from './components/EditorToolbar';
import EditorRegisterNode from './components/EditorRegisterNode';
import styles from './index.less';
GGEditor.setTrackable(false);
const addFormData = (data: Object) => {
  const formData = new FormData();
  formData.append('json', JSON.stringify(data));
  return formData;
};
export default () => {
  const ref = useRef();
  const { globalFormData } = useModel('useDetailPanelModel');
  const { run: handleSaveFlow } = useRequest(saveFlow, {
    manual: true,
    onSuccess: (result, params) => {
      console.log(params);
      console.log(result);
    },
  });
  // const { run: handleGetNodes } = useRequest(getNodes, {
  //   onSuccess: result => {
  //     console.log(result);
  //   },
  // });
  /**
   * @description 获取接口data
   * @returns {any[]}
   */

  const getData = () => {
    const editor: any = ref.current;
    const data: { nodes?: any[]; edges?: any[] } = editor.propsAPI.save();
    return JSON.stringify(data);
  };

  /**
   * @description 保存
   */
  const handleSave = () => {
    const formattedData = getData();

    handleSaveFlow({
      flowJson: formattedData,
      flowName: Math.random() + 'flowName',
      verify: false,
    });
  };
  return (
    <GGEditor className={styles.editor} ref={ref as any}>
      <Row className={styles.editorHd}>
        <Col span={24}>
          <KoniToolbar onSave={handleSave} />
        </Col>
      </Row>
      <Row className={styles.editorBd}>
        <Col span={2} className={styles.editorSidebar}>
          <KoniItemPanel />
        </Col>
        <Col span={22} className={styles.editorContent}>
          <Koni className={styles.koni} />
          {/* <EditorMinimap /> */}
        </Col>
        {/* <Col span={6} className={styles.editorSidebar}>
          <KoniDetailPanel />
          <EditorMinimap />
        </Col> */}
      </Row>
      <Row className={styles.detail}>
        <Col span={24}>
          <KoniDetailPanel />
        </Col>
      </Row>
      <KoniContextMenu />
      <EditorRegisterNode />
    </GGEditor>
  );
};
