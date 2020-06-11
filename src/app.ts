import { history } from 'umi';
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
