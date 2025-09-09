import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'eb7'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'bf0'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '824'),
            routes: [
              {
                path: '/docs/category/how-using',
                component: ComponentCreator('/docs/category/how-using', '60b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/install',
                component: ComponentCreator('/docs/category/install', '155'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/how-using/account',
                component: ComponentCreator('/docs/how-using/account', '8c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/how-using/login',
                component: ComponentCreator('/docs/how-using/login', 'e15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/how-using/media',
                component: ComponentCreator('/docs/how-using/media', 'b7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/how-using/menu',
                component: ComponentCreator('/docs/how-using/menu', 'ed5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/how-using/overview',
                component: ComponentCreator('/docs/how-using/overview', '89a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/how-using/page',
                component: ComponentCreator('/docs/how-using/page', '021'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/how-using/post',
                component: ComponentCreator('/docs/how-using/post', '643'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/how-using/slide',
                component: ComponentCreator('/docs/how-using/slide', 'eab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/install/server-gunicorn',
                component: ComponentCreator('/docs/install/server-gunicorn', '5dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
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
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
