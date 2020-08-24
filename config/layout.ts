import { BasicLayoutProps } from '@ant-design/pro-layout';
const layout: BasicLayoutProps = {
  navTheme: 'light',
  title: '金乌系统',
  logo: '/logo.svg',
  layout: 'mix',
  contentWidth: 'Fixed',
  primaryColor: '#1890ff',
  contentStyle: { backgroundColor: '#ff0000', padding: 0 },
  breadcrumbRender(route) {
    console.log(route);
    return route;
  },
};
export default layout;
