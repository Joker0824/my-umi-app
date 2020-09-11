import { useState } from 'react';
/**
 * @description 详情面板数据
 * @export
 * @returns
 */
export default function useDetailPanelModel() {
  const [globalFormData, setGlobalFormData] = useState<GlobalFields>({
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
