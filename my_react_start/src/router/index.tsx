import React, { ReactNode, lazy } from 'react'
const Login = lazy(() => import('../views/login/login'));
const Page404 = lazy(() => import('../views/errorPage/404'));
const Index = lazy(() => import('../views/home/index'));

interface IRouter {
  title: string,
  path: string,
  key: string,
  exact?: boolean,
  component?: ReactNode,
  children?: IRouter[]
}

const router: IRouter[] = [
  {
    path: '/',
    key: 'index',
    exact: true,
    component: <Index />,
    title: '首页'
  },
  {
    path: '/login',
    key: 'login',
    component: <Login />,
    title: '登录'
  },
  {
    path: '*',
    key: '404',
    component: <Page404 />,
    title: '404'
  }
];

export default router;
