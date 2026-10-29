import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'DM Loremind',
  tagline: 'Documentation officielle de DM Loremind',
  favicon: 'img/Logo.png',

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
    locales: ['fr', 'en'],
    localeConfigs: {
      fr: {label: 'Français', htmlLang: 'fr-FR', path: 'fr'},
      en: {label: 'English', htmlLang: 'en-US', path: 'en'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/IGMLcreation/loremind-docs/tree/main/',
        },
        blog: {
          path: 'blog',
          routeBasePath: 'devlog',
          blogTitle: 'Devlog DM Loremind',
          blogDescription: 'Journal de bord du développement de DM Loremind — features, coulisses, choix techniques.',
          blogSidebarTitle: 'Articles récents',
          blogSidebarCount: 10,
          postsPerPage: 10,
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom', 'json'],
            title: 'Devlog DM Loremind',
            description: 'Suivez le développement de DM Loremind',
            copyright: `Copyright © ${new Date().getFullYear()} IGMLcreation — DM Loremind.`,
            language: 'fr',
          },
          editUrl: 'https://github.com/IGMLcreation/loremind-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    'plugin-image-zoom',
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Ancienne page de la bêta Patreon, renommée quand la bêta est devenue libre.
        redirects: [
          {from: '/docs/configuration/beta-patreon', to: '/docs/configuration/canal-beta'},
        ],
      },
    ],
  ],

  themeConfig: {
    image: 'img/loremind-social-card.png',
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
      title: 'DM Loremind',
      logo: {
        alt: 'DM Loremind Logo',
        src: 'img/app-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/devlog',
          label: 'Devlog',
          position: 'left',
        },
        {
          href: 'https://discord.gg/cPpFzCjEzQ',
          label: '💬 Discord',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
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
            {
              label: 'Devlog',
              to: '/devlog',
            },
          ],
        },
        {
          title: 'Projet',
          items: [
            {
              label: 'Rejoindre le Discord',
              href: 'https://discord.gg/cPpFzCjEzQ',
            },
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
      copyright: `Copyright © ${new Date().getFullYear()} IGMLcreation — DM Loremind. Contenu sous licence CC BY-SA 4.0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
