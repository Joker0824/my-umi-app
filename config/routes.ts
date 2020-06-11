import { IRoute } from 'umi';

const routes: IRoute[] = [
  { path: '/login', component: '@/pages/login' },
  {
    path: '/',
    component: '@/layouts',
    // wrappers: ['@/wrappers/auth'],
    routes: [
      { path: '/list/:id', component: '@/pages/layouts/list' },
      { path: '/admin', component: '@/pages/layouts/admin' },
    ],
  },
];
export default routes;
