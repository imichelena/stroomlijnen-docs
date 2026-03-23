import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Stroomlijnen Knowledge Base',
  tagline: 'Everything you need to know about electric charging for fleets',
  favicon: 'img/favicon.ico',

  future: {
    v4: false,
  },

  url: 'https://docs.stroomlijnen.nl',
  baseUrl: '/',

  organizationName: 'imichelena',
  projectName: 'stroomlijnen-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Stroomlijnen B.V.',
        url: 'https://docs.stroomlijnen.nl',
        description: 'Dutch CPO and eMSP specializing in electric truck charging at theaters and logistics sites.',
        sameAs: [
          'https://www.linkedin.com/company/stroomlijnen',
        ],
      }),
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl', 'de', 'fr', 'es', 'pt', 'it', 'pl', 'sv', 'da'],
    localeConfigs: {
      en: { label: 'English', htmlLang: 'en-GB' },
      nl: { label: 'Nederlands', htmlLang: 'nl-NL' },
      de: { label: 'Deutsch', htmlLang: 'de-DE' },
      fr: { label: 'Français', htmlLang: 'fr-FR' },
      es: { label: 'Español', htmlLang: 'es-ES' },
      pt: { label: 'Português', htmlLang: 'pt-PT' },
      it: { label: 'Italiano', htmlLang: 'it-IT' },
      pl: { label: 'Polski', htmlLang: 'pl-PL' },
      sv: { label: 'Svenska', htmlLang: 'sv-SE' },
      da: { label: 'Dansk', htmlLang: 'da-DK' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/imichelena/stroomlijnen-docs/tree/main/',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom', 'json'],
            xslt: true,
            title: 'Stroomlijnen Blog',
            description: 'Insights on electric fleet charging, Plug & Charge, and EV infrastructure',
            copyright: `Copyright © ${new Date().getFullYear()} Stroomlijnen B.V.`,
          },
          editUrl: 'https://github.com/imichelena/stroomlijnen-docs/tree/main/',
          blogTitle: 'Stroomlijnen Blog',
          blogDescription: 'Insights on electric fleet charging, Plug & Charge, and EV infrastructure in the Netherlands and Europe.',
          blogSidebarCount: 10,
          blogSidebarTitle: 'Recent posts',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/stroomlijnen-social-card.png',
    metadata: [
      { name: 'keywords', content: 'EV charging, electric trucks, fleet charging, Plug and Charge, OCPP, ISO 15118, Netherlands, CPO, eMSP, theater charging' },
      { name: 'author', content: 'Stroomlijnen B.V.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Stroomlijnen Knowledge Base' },
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Stroomlijnen',
      logo: {
        alt: 'Stroomlijnen Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://docs.stroomlijnen.nl/blog/rss.xml',
          label: '📡 RSS',
          position: 'right',
        },
        {
          href: 'https://stroomlijnen.nu',
          label: 'stroomlijnen.nu',
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
            { label: 'Getting Started', to: '/docs/getting-started/intro' },
            { label: 'Plug & Charge', to: '/docs/plug-and-charge/what-is-pnc' },
            { label: 'Fleet Management', to: '/docs/fleet-management/overview' },
            { label: 'Technical', to: '/docs/technical/ocpp-overview' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'FAQ', to: '/docs/faq' },
            { label: 'Blog', to: '/blog' },
            { label: 'RSS Feed', href: 'https://docs.stroomlijnen.nl/blog/rss.xml' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'Stroomlijnen.nu', href: 'https://stroomlijnen.nu' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/stroomlijnen' },
            { label: 'Contact', href: 'mailto:info@stroomlijnen.nu' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Stroomlijnen B.V. — The Show Must Go On.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'python'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
