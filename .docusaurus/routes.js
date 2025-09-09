import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs-pythonvn/vi/markdown-page',
    component: ComponentCreator('/docs-pythonvn/vi/markdown-page', '2a6'),
    exact: true
  },
  {
    path: '/docs-pythonvn/vi/docs',
    component: ComponentCreator('/docs-pythonvn/vi/docs', '7b6'),
    routes: [
      {
        path: '/docs-pythonvn/vi/docs',
        component: ComponentCreator('/docs-pythonvn/vi/docs', '710'),
        routes: [
          {
            path: '/docs-pythonvn/vi/docs',
            component: ComponentCreator('/docs-pythonvn/vi/docs', '3ef'),
            routes: [
              {
                path: '/docs-pythonvn/vi/docs/category/how-using',
                component: ComponentCreator('/docs-pythonvn/vi/docs/category/how-using', '573'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs-pythonvn/vi/docs/category/install',
                component: ComponentCreator('/docs-pythonvn/vi/docs/category/install', 'c05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs-pythonvn/vi/docs/how-using/account',
                component: ComponentCreator('/docs-pythonvn/vi/docs/how-using/account', '716'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs-pythonvn/vi/docs/how-using/login',
                component: ComponentCreator('/docs-pythonvn/vi/docs/how-using/login', '603'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs-pythonvn/vi/docs/how-using/media',
                component: ComponentCreator('/docs-pythonvn/vi/docs/how-using/media', 'a5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs-pythonvn/vi/docs/how-using/menu',
                component: ComponentCreator('/docs-pythonvn/vi/docs/how-using/menu', 'fde'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs-pythonvn/vi/docs/how-using/overview',
                component: ComponentCreator('/docs-pythonvn/vi/docs/how-using/overview', '3ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs-pythonvn/vi/docs/how-using/page',
                component: ComponentCreator('/docs-pythonvn/vi/docs/how-using/page', '1ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs-pythonvn/vi/docs/how-using/post',
                component: ComponentCreator('/docs-pythonvn/vi/docs/how-using/post', '43e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs-pythonvn/vi/docs/how-using/slide',
                component: ComponentCreator('/docs-pythonvn/vi/docs/how-using/slide', 'ff0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs-pythonvn/vi/docs/install/server-gunicorn',
                component: ComponentCreator('/docs-pythonvn/vi/docs/install/server-gunicorn', '49a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs-pythonvn/vi/docs/intro',
                component: ComponentCreator('/docs-pythonvn/vi/docs/intro', '942'),
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
    path: '/docs-pythonvn/vi/',
    component: ComponentCreator('/docs-pythonvn/vi/', 'c4c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
