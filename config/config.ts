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
  routes: [
    { path: '/login', component: '@/pages/login' },
    {
      path: '/',
      component: '@/layouts',
      routes: [
        { path: '/list/:id', component: '@/pages/layouts/list' },
        {
          path: '/admin',
          component: '@/pages/layouts/admin',
          wrappers: ['@/wrappers/auth'],
        },
      ],
    },
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'lodash',
    ],
  ],
  publicPath: '/public/',
});
