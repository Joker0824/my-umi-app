import { Store } from 'rc-field-form/lib/interface';
declare type StrategyType = 'random' | 'linked' | 'child' | 'parent';
declare type threadCountType =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9';
declare type ZeroOrOne = 0 | 1;
/**
 * @description 全局配置
 * @interface GlobalField
 */
declare interface GlobalField {
  spiderName: string;
  submitStrategy: StrategyType;
  threadCount: threadCountType;
  shape: 'set';
}

/**
 * @description 开始
 * @interface StartFields
 */
declare interface StartFields {
  shape: 'start';
}
/**
 * @description http
 * @interface HttpFields
 */
declare interface HttpFields {
  label: string;
  method:
    | 'POST'
    | 'GET  '
    | 'PUT'
    | 'DELETE'
    | 'PATCH'
    | 'HEAD'
    | 'OPTIONS'
    | 'TRACE';
  sleep: string;
  timeout: string;
  responseCharset: string;
  retryCount: string;
  parameterName: string[];
  parameterValue: string[];
  parameterDescription: string[];
  cookieName: string[];
  cookieValue: string[];
  cookieDescription: string[];
  headerName: string[];
  headerValue: string[];
  headerDescription: string[];
  followRedirect: ZeroOrOne;
  tlsValidate: ZeroOrOne;
  cookieAutoSet: ZeroOrOne;
  repeatEnable: ZeroOrOne;
  shape: 'http';
  url: string;
  proxy: string;
}
/**
 * @description 浏览器HTTP
 * @interface BrowserHttpFields
 */
declare interface BrowserHttpFields {
  shape: 'browser_http';
  label: string;
  pageLoadTimeout: string;
  implicitlyWaitTimeout: string;
  driverType: 'chrome' | 'firefox' | 'htmlunit';
  windowSize: string;
  userAgent: string;
  arguments: string;
  url: string;
  proxy: string;
  cookieAutoSet: ZeroOrOne;
  headless: ZeroOrOne;
  javascriptDisabled: ZeroOrOne;
  imageDisabled: ZeroOrOne;
  pluginDisable: ZeroOrOne;
  javaDisable: ZeroOrOne;
  incognito: ZeroOrOne;
  sandbox: ZeroOrOne;
  hideScrollbar: ZeroOrOne;
  maximized: ZeroOrOne;
}

/**
 * @description 变量提取
 * @interface VarExtractFields
 */
declare interface VarExtractFields {
  shape: 'var';
  label: string;
  variableName: string[];
  variableValue: string[];
  variableDescription: string[];
}
/**
 * @description 函数操作
 * @interface FunFields
 */
declare interface FunFields {
  shape: 'fun';
  label: string;
  _function: string;
}

/**
 * @description 执行SQL
 * @interface SQLFields
 */
declare interface SQLFields {
  shape: 'sql';
  label: string;
  datasourceId: string;
  statementType:
    | 'select'
    | 'selectOne'
    | 'selectInt'
    | 'insert'
    | 'delete'
    | 'update'
    | 'insertofPk';
  sql: string;
  isStream: ZeroOrOne;
}
/**
 * @description 结果输出
 * @interface ResultFields
 */
declare interface ResultFields {
  shape: 'result';
  label: string;
  datasourceId: string;
  tableName: string;
  csvName: string;
  csvEncoding: string[];
  outputName: string[];
  outputValue: string[];
  outputAll: ZeroOrOne;
  outputDatabase: ZeroOrOne;
  outputCsv: ZeroOrOne;
}

/**
 * @description 结束
 * @interface EndFields
 */
declare interface EndFields {
  shape: 'end';
  label: string;
}
