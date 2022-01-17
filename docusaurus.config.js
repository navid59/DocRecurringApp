// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NETOPIA Paymnets',
  tagline: 'Recurring payment API',
  url: 'https://netopia-payments.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'RecurringPayments', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: '',
        logo: {
          alt: 'Netopia Payment',
          src: 'img/logo-blue.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documents',
          },
          {to: '/blog', label: 'About recurring payments', position: 'left'},
          {
            href: 'https://github.com/mobilpay/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Recurring payments',
            items: [
              {
                label: 'Documents',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Other Services',
            items: [
              {
                label: 'Card',
                href: 'https://netopia-payments.com/servicii/card/',
              },
              {
                label: 'SMS',
                href: 'https://netopia-payments.com/servicii/sms/',
              },
              {
                label: 'mobilPay Wallet',
                href: 'https://netopia-payments.com/servicii/mobilpay-wallet-plata-cu-mobilul/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Contact',
                href: 'https://netopia-payments.com/contact/',
              },
              {
                label: 'Suport',
                href: 'https://netopia-payments.com/contact-suport/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NETOPIA Payments.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
