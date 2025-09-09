import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/vi/markdown-page',
    component: ComponentCreator('/vi/markdown-page', 'bee'),
    exact: true
  },
  {
    path: '/vi/docs',
    component: ComponentCreator('/vi/docs', '858'),
    routes: [
      {
        path: '/vi/docs',
        component: ComponentCreator('/vi/docs', 'b89'),
        routes: [
          {
            path: '/vi/docs',
            component: ComponentCreator('/vi/docs', '2ab'),
            routes: [
              {
                path: '/vi/docs/category/how-using',
                component: ComponentCreator('/vi/docs/category/how-using', 'bd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/vi/docs/category/install',
                component: ComponentCreator('/vi/docs/category/install', 'db3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/vi/docs/how-using/account',
                component: ComponentCreator('/vi/docs/how-using/account', '9e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/vi/docs/how-using/login',
                component: ComponentCreator('/vi/docs/how-using/login', 'd13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/vi/docs/how-using/media',
                component: ComponentCreator('/vi/docs/how-using/media', '551'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/vi/docs/how-using/menu',
                component: ComponentCreator('/vi/docs/how-using/menu', '9c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/vi/docs/how-using/overview',
                component: ComponentCreator('/vi/docs/how-using/overview', '7ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/vi/docs/how-using/page',
                component: ComponentCreator('/vi/docs/how-using/page', '400'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/vi/docs/how-using/post',
                component: ComponentCreator('/vi/docs/how-using/post', '695'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/vi/docs/how-using/slide',
                component: ComponentCreator('/vi/docs/how-using/slide', '0af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/vi/docs/install/server-gunicorn',
                component: ComponentCreator('/vi/docs/install/server-gunicorn', '318'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/vi/docs/intro',
                component: ComponentCreator('/vi/docs/intro', '163'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/vi/',
    component: ComponentCreator('/vi/', '2a3'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
