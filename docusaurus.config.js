// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tài liệu Pythonvn',
  tagline: 'Xem ngay tài liệu của bạn ngay bây giờ tại docs.pythonvn.com',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.pythonvn.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'meothongthai', // Usually your GitHub org/user name.
  projectName: 'docs-pythonvn', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // lastVersion: 'current',
          // versions: {
          //   current: {
          //     label: '1.0.1',
          //     path: '1.0.1',
          //   },
          // },
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docs-logo.svg',
      navbar: {
        title: 'Docs PythonVn',
        logo: {
          alt: 'Docs Pythonvn',
          src: 'img/docs-logo.svg',
          href: '/'
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {
          //   type: 'docsVersionDropdown',
          //   versions: {
          //     current: {label: 'Version 1.0.1'},
          //   },
          //   position: 'right',
          // },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Python Việt Nam',
          src: 'img/logo.svg',
          href: 'https://pythonvn.com',
          width: 250,
          height: 51,
        },
        links: [
          {
            title: 'Python Việt Nam',
            items: [
              {
                html: `
                    Giải pháp phần mềm Tinh Tế Nhất</br>
                    🌐 Website: pythonvn.com</br>
                    📞 Hotline: 0336 568 388
                  `,
              },
            ],
          },
          {
            title: 'Dẫn đường',
            items: [
              {
                label: 'Hướng dẫn',
                href: '/',
              },
              {
                label: 'Sản phẩm mới',
                href: '#',
              },
              {
                label: 'Tin tức',
                href: '#',
              },
            ],
          },
          {
            title: 'Các chính sách',
            items: [
              {
                label: 'Chính sách bảo mật',
                href: '#',
              },
              {
                label: 'Chính sách quy định chung',
                href: '#',
              },
              {
                label: 'Chính sách bảo hành',
                href: '#',
              },
            ],
          },
          {
            title: 'Mạng xã hội',
            items: [
              {
                label: 'Discord',
                href: '#',
              },
              {
                label: 'Facebook',
                href: '#',
              },
              {
                label: 'Zalo',
                href: '#',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pythonvn, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
