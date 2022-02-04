// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'react-hotkeys-docs-hook',
  tagline: 'Hotkeys are cool',
  url: 'https://react-hotkeys-docs-hook.vercel.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  //favicon: 'img/favicon.ico',
  organizationName: 'liorpollak', // Usually your GitHub org/user name.
  projectName: 'react-hotkeys-docs-hook', // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'react-hotkeys-docs-hook',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          //{ to: '/blog', label: 'Blog', position: 'left' },
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
            title: 'Documentation',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'API',
            items: [
              {
                label: 'useHotkeysDocs',
                to: '/docs/useHotkeysDocs',
              },
              {
                label: 'HotkeysDocsContext',
                to: '/docs/HotkeysDocsContext',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'react-hotkeys-hook',
                href: 'https://react-hotkeys-hook.vercel.app/',
              },
              {
                label: 'Support',
                href:
                  'https://github.com/liorpollak/react-hotkeys-docs-hook/discussions',
              },
              {
                label: 'FAQ',
                href: 'https://github.com/liorpollak/react-hotkeys-docs-hook',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/liorpollak/react-hotkeys-docs-hook',
              },
            ],
          },
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
