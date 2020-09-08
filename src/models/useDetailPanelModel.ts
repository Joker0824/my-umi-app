import { useState } from 'react';
import { GlobalField } from '@/pages/EditorKoni/components/EditorDetailPanel/FormField';
/**
 * @description 详情面板数据
 * @export
 * @returns
 */
export default function useDetailPanelModel() {
  const [globalFormData, setGlobalFormData] = useState<GlobalField>({
    spiderName: '',
    submitStrategy: 'random',
    threadCount: '1',
    shape: 'set',
  });
  return {
    globalFormData,
    setGlobalFormData,
  };
}
