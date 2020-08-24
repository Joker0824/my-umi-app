import { defineConfig } from 'umi';
import layout from './layout';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true, //配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避浏览器加载缓存。
  dynamicImport: {},
  layout, //pro-layout配置
  routes: [
    {
      path: '/login',
      // layout: false, //不使用layout(@ant-design/pro-layout)
      component: './Login',
    },
    {
      name: '列表',
      path: '/list/:id',
      component: './List',
      // hideInMenu: true,
      // layout: {
      //   hideMenu: true, //隐藏左侧菜单
      //   hideNav: true, //隐藏左侧菜单
      //   hideFooter: true, //footer
      // },
    },
    {
      name: '权限页',
      path: '/admin',
      component: './Admin',
      // access: 'canReadAdmin', //配置页面权限
      // wrappers: ['@/wrappers/auth'],
    },
    {
      name: '拓扑编辑器',
      path: '/editorkoni',
      component: './EditorKoni',
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
