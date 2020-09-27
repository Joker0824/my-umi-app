import { Callbacks } from 'rc-field-form/lib/interface';
import { Store } from 'ahooks/lib/useAntdTable';
/**
 * @description
 * @interface FormProp
 * @template T
 */
export declare interface FormProp {
  itemData: any;
  onValuesChange: Callbacks['onValuesChange'];
  updateItem: (values: Store) => void;
}
