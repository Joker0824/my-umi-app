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
      component: './Login',
      hideInMenu: true,
      layout: false,
    },
    {
      path: '/list/:id',
      component: './List',
      hideInMenu: true,
      // layout: {
      //   hideMenu: true, //隐藏左侧菜单
      //   hideNav: true, //隐藏左侧菜单
      //   hideFooter: true, //footer
      // },
    },
    {
      path: '/admin',
      component: './Admin',
      hideInMenu: true,
      // access: 'canReadAdmin', //配置页面权限
      // wrappers: ['@/wrappers/auth'],
    },
    // {
    //   name: '拓扑编辑器',
    //   path: '/editorkoni',
    //   hideInMenu: true,
    //   component: './EditorKoni',
    // },

    {
      name: '任务管理',
      path: '/task-manage',
      icon: 'icon-menu_item_rwgl',
      routes: [
        {
          name: '创建任务',
          path: 'create-task',
          component: './TaskManage/CreateTask',
        },
        {
          name: '任务列表',
          path: 'task-list',
          component: './TaskManage/TaskList',
        },
      ],
    },
    {
      name: '流程图管理',
      path: '/flow-manage',
      icon: 'icon-menu_item_lct',
      routes: [
        {
          name: '流程图列表',
          path: 'flow-list',
          component: './FlowManage/FlowList',
        },
        {
          name: '流程图详情',
          path: 'flow-detail',
          component: './FlowManage/FlowDetail',
        },
      ],
    },
    {
      name: '数据管理',
      path: '/data-manage',
      component: './DataManage',
      icon: 'icon-menu_item_sjgl',
      exact: true,
    },
    {
      name: '系统管理',
      path: '/system-manage',
      component: './SystemManage',
      icon: 'icon-menu_item_xtgl',
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
