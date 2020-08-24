import React from 'react';
import { history, RequestConfig, Route } from 'umi';
import RightContent from '@/components/render/RightContent';
import { login } from './api/login';
import { setToken } from './utils/auth';
import { BasicLayoutProps, MenuDataItem } from '@ant-design/pro-layout';
import AppHeader from './components/render/AppHeader';
import Title from './components/render/Title';
import { Menu, MenuItem } from './components/render';
/**
 * @description 在初始加载和路由切换时做一些事情
 * @export
 * @param {*} { location, routes, action }
 */
export function onRouteChange({ location, routes, action }: any) {
  console.log(location);
}

/**
 * @description 修改路由
 * @export
 * @param {*} { routes }
 */
export function patchRoutes({ routes }: any) {
  console.log('patchRoutes');
  routes.unshift({
    path: '/foo',
    exact: true,
    component: require('@/extraRoutes/foo').default,
  });
}
export function render(oldRender: any) {
  console.log('render');
  oldRender();
}
const { AXIOS_TIMEOUT, ApiUrl } = window.g;
export const request: RequestConfig = {
  timeout: AXIOS_TIMEOUT,
  prefix: ApiUrl,
};
export async function getInitialState() /* : Promise<{
  currentUser?: API.CurrentUser;
  settings?: LayoutSettings;
}>   */ {
  try {
    const {
      data: { data },
    } = await login({ username: 'admin', password: '123456' });
    if (data.token) {
      setToken(data.token);
    }
    return data;
  } catch (e) {
    console.log(e);
  }
  // 如果是登录页面，不执行
  // if (history.location.pathname !== '/user/login') {
  //   try {
  //     const currentUser = await queryCurrent();
  //     return {
  //       currentUser,
  //       settings: defaultSettings,
  //     };
  //   } catch (error) {
  //     history.push('/user/login');
  //   }
  // }
  // return {
  //   settings: defaultSettings,
  // };
}
export const layout = (
  /* {
  initialState,
}: {
  initialState: { settings?: LayoutSettings; currentUser?: API.CurrentUser };
} */
  initialState: ILoginResponse,
): BasicLayoutProps => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    logo: '/logo.svg',
    primaryColor: '#1890ff',
    contentStyle: { backgroundColor: '#ff0000', padding: 0 },
    collapsedButtonRender: false,
    breadcrumbRender(route) {
      console.log(route);
      return route;
    },
    headerRender(props: BasicLayoutProps) {
      return <AppHeader {...props} />;
    },
    headerTitleRender(props: BasicLayoutProps) {
      return <Title {...props} />;
    },
    // menuItemRender(itemProps: MenuDataItem) {
    //   return <MenuItem {...itemProps} />;
    // },
    // menuRender(props) {
    //   return <Menu />;
    // },
    // footerRender: () => <Footer />,
    // onPageChange: () => {
    //   // 如果没有登录，重定向到 login
    //   if (
    //     !initialState?.currentUser?.userid &&
    //     history.location.pathname !== '/user/login'
    //   ) {
    //     history.push('/user/login');
    //   }
    // },
    // ...initialState?.settings,
  };
};
