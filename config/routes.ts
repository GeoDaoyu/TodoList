export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: './Welcome',
    hideInMenu: true,
  },
  {
    path: '/jQuery',
    name: 'jQuery',
    component: './jQuery',
  },
  {
    path: '/Ramda',
    name: 'Ramda',
    component: './Ramda',
  },
  {
    path: '/DvaJS',
    name: 'DvaJS',
    component: './DvaJS',
  },
  {
    path: '/RTK',
    name: 'RTK',
    component: './RTK',
  },
  {
    path: '/ahooks',
    name: 'ahooks',
    component: './ahooks',
  },
  {
    path: '/rxjs',
    name: 'rxjs',
    component: './rxjs',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
