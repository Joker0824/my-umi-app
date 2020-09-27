import React from 'react';
import { RequestConfig, history } from 'umi';
import RightContent from '@/components/render/RightContent';
import { BasicLayoutProps } from '@ant-design/pro-layout';
import AppHeader from './components/render/AppHeader';
import Title from './components/render/Title';
import { Menu } from './components/render';
import { getToken } from './utils/auth';

const { AXIOS_TIMEOUT, ApiUrl } = window.g;
export const request: RequestConfig = {
  timeout: AXIOS_TIMEOUT,
  prefix: ApiUrl,
};

/**
 * @description 在初始加载和路由切换时做一些事情
 * @export
 * @param {*} {
 *   routes,
 *   matchedRoutes,
 *   location,
 *   action,
 * }
 */
export function onRouteChange({
  routes,
  matchedRoutes,
  location,
  action,
}: any) {
  console.log(location.pathname);
}

/**
 * @description 修改路由
 * @export
 * @param {*} { routes }
 */
export function patchRoutes({ routes }: any) {
  routes.unshift({
    path: '/foo',
    exact: true,
    component: require('@/extraRoutes/foo').default,
  });
}
/**
 * @description 比如用于渲染之前做权限校验
 * @export
 * @param {*} oldRender
 */
export function render(oldRender: any) {
  const isLogin = !!getToken();
  if (isLogin) {
    oldRender();
  } else {
    history.push('/login');
    oldRender();
  }
}

/**
 * @description 设置初始状态
 * @export
 * @returns
 */
export async function getInitialState() /* : Promise<{
  currentUser?: API.CurrentUser;
  settings?: LayokutSettings;
}>   */ {
  try {
    // const {
    //   data: { data },
    // } = await login({ username: 'admin', password: '123456' });
    // if (data.token) {
    //   setToken(data.token);
    // }
    // return data;
    return { token: 'sss' };
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
export /**
 * @description 设置pro-layout
 * @param {ILoginResponse} initialState
 * @returns {BasicLayoutProps}
 */
const layout = (
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
    contentStyle: { padding: 0 },
    // loading: true,
    iconfontUrl: '//at.alicdn.com/t/font_2026404_132bpfp2kuk.js',
    contentWidth: 'Fluid',
    siderWidth: 150,
    fixedHeader: false, //是否固定 header 到顶部
    fixSiderbar: true, //是否固定导航
    // collapsedButtonRender: false,
    pageTitleRender: false,
    // headerRender(props: BasicLayoutProps) {
    //   return <AppHeader {...props} />;
    // },
    // breadcrumbRender(route) {
    //   console.log(route);
    //   return route;
    // },
    headerTitleRender(props: BasicLayoutProps) {
      return <Title {...props} />;
    },
    // menuItemRender(itemProps: MenuDataItem) {
    //   return <MenuItem {...itemProps} />;
    // },
    // menuRender(props: BasicLayoutProps) {
    //   return <Menu {...props} />;
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
