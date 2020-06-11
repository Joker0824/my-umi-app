import { defineConfig } from 'umi';
import routes from './routes';
export default defineConfig({
  title: 'fxx',
  // layout: {},  ant-design-pro 的布局
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {}, //启用按需加载
  routes: routes,
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: '@umijs/hooks',
        libraryDirectory: 'lib',
        camel2DashComponentName: false,
      },
    ],
  ],
});
