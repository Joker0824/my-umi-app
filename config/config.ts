import { defineConfig } from 'umi';
import routes from './routes';
export default defineConfig({
  title: 'fxx',
  // layout: {},  ant-design-pro 的布局
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true, //配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存。
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
  publicPath: '/public/',
});
