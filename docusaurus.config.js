// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '卧软杯',
  tagline: '数理化联合大赛',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://woruan-prize.pages.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kellynew', // Usually your GitHub org/user name.
  projectName: 'woruan-prize', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kellynew/woruan-prize/tree/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
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
            'https://github.com/kellynew/woruan-prize/tree/main/',
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

  stylesheets: [
    {
      href: 'https://fastly.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'feedback-20250331',
        content:
          '<b>提示：目前第二官网暂未设置反馈系统，如有问题请前往<a target="_blank" href="https://woruan.work/提出您的建议/">第一官网</a>反馈！</b>',
        isCloseable: true,
      },
      docs: {
        versionPersistence: 'localStorage',
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: '卧软杯',
        logo: {
          alt: '卧软杯 数理化联合大赛',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'woruan',
            position: 'left',
            label: '题库',
          },
          {to: '/blog', label: '公告栏', position: 'left'},
          {to: '/rank', label: '排行榜', position: 'left'},
          {
            type: 'dropdown',
            label: '小游戏',
            position: 'left',
            items: [
              {
                label: 'Hangman',
                href: 'https://gxwtf.cn/game/hangman',
              },
              {
                label: '诗词九宫格',
                href: 'https://gxwtf.cn/game/gridGame',
              },
              {
                label: 'Wordle',
                href: 'https://gxwtf.cn/game/wordle',
              },
              {
                label: '大学模拟器',
                href: 'https://bijiazu.inari.site/UnivSimulator/',
              },
              {
                label: 'Lexica',
                href: 'https://lexica.github.io/web-lexica/',
              },
              {
                label: '桌游合集',
                href: 'https://game.hullqin.cn/',
              },
              {
                label: '2048',
                href: 'https://play2048.co/',
              },
            ],
          },
          {href: 'https://woruan.work/加入微信群组/', label: '加入我们', position: 'right'},
          {
            href: 'https://github.com/kellynew/woruan-prize',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
        hideOnScroll: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '导航',
            items: [
              {
                label: '题库',
                to: '/docs/intro',
              },
              {
                label: '公告栏',
                to: '/blog',
              },
              {
                label: '排行榜',
                to: '/rank',
              },
            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: '主站',
                href: 'https://woruan.work/',
              },
              {
                label: '广学五题坊',
                href: 'https://gxwtf.cn/',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '加入我们',
                href: 'https://woruan.work/加入微信群组/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/kellynew/woruan-prize',
              },
            ],
          },
        ],
        copyright: `版权所有 © ${new Date().getFullYear()} 卧软杯 数理化联合大赛。使用 Docusaurus 构建。`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
