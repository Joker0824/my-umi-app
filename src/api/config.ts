interface ApiConfig {
  AXIOS_TIMEOUT: number;
  ApiUrl: string;
  WsUrl: string;
}
export const apiConfig: ApiConfig = (window as any).g;
