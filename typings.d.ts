declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
/**
 * @description window全局变量
 * @interface Window
 */
interface Window {
  g: {
    AXIOS_TIMEOUT: number;
    ApiUrl: string;
    WsUrl: string;
  };
}
