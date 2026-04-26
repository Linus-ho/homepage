import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Zilan Hongda Technology',
  tagline: 'Professional Trading · Supply Chain Services · Intelligent Solutions',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.zlhd.tech/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For Cloudflare Pages deployment, use '/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization config - English as default, Chinese as alternative
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      'zh-Hans': {
        label: '简体中文',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '珠海市紫岚宏达科技有限公司',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/about',
          label: '公司简介',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '研究报告',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '关于我们',
          items: [
            {
              label: '公司简介',
              to: '/about',
            },
            {
              label: '研究报告',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '联系我们',
          items: [
            {
              label: '微信：linus_trading',
              href: '#',
            },
            {
              label: 'WhatsApp：+85256836011',
              href: 'https://wa.me/85256836011',
            },
          ],
        },

      ],
      copyright: `Copyright © ${new Date().getFullYear()} 珠海市紫岚宏达科技有限公司 ｜ 使用Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
