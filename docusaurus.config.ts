import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'LoreMind',
  tagline: 'Documentation officielle de LoreMind',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://loremind-docs.igmlcreation.fr',
  baseUrl: '/',

  organizationName: 'IGMLcreation',
  projectName: 'loremind-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/IGMLcreation/loremind-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: ['plugin-image-zoom'],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    imageZoom: {
      selector: '.markdown :not(em) > img',
      options: {
        margin: 24,
        background: 'rgba(10, 10, 20, 0.92)',
        scrollOffset: 40,
      },
    },
    navbar: {
      title: 'LoreMind',
      logo: {
        alt: 'LoreMind Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/IGMLcreation/LoreMind',
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
              label: 'Introduction',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Projet',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/IGMLcreation/LoreMind',
            },
            {
              label: 'Démo',
              href: 'https://loremind-demo.igmlcreation.fr',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IGMLcreation — LoreMind. Contenu sous licence CC BY-SA 4.0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
