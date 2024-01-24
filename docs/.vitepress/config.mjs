import {createRequire} from 'module';

import {defineConfig} from '@lando/vitepress-theme-default-plus/config';

const require = createRequire(import.meta.url);

const {version} = require('../../package.json');

export default defineConfig({
  title: 'Lando',
  description: 'The offical Lando plugin for Dotnet.',
  landoDocs: 3,
  landoPlugin: 'dotnet',
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
    ['link', {rel: 'icon', href: '/dotnet/favicon.ico', size: 'any'}],
    ['link', {rel: 'icon', href: '/dotnet/favicon.svg', type: 'image/svg+xml'}],
  ],
  themeConfig: {
    nav: [
      {
        text: version,
        class: 'version',
        items: [
          {
            items: [{
              text: 'Release Notes',
              link: `https://github.com/lando/vitepress-theme-default-plus/releases/tag/v${version}`,
            }],
          },
          {
            text: 'Older Versions',
            link: 'https://github.com/lando/vitepress-theme-default-plus/releases',
          },
          {
            text: 'Examples',
            link: 'https://github.com/lando/vitepress-theme-default-plus/docs',
          },
        ],
      },
    ],
  },
});

/*
    sidebar: {
      '/config': configSideBar(),
      '/components': configSideBar(),
      '/composables': configSideBar(),
      '/guides': configSideBar(),
      '/markdown': configSideBar(),
      '/pages': configSideBar(),
      '/': [
        {
          text: 'Introduction',
          collapsed: false,
          items: [
            {text: 'Overview', link: '/overview'},
            {text: 'Installation', link: '/install'},
            {text: 'Usage', link: '/usage'},
          ],
        },
        {
          text: 'Contribution',
          collapsed: false,
          items: [
            {text: 'Development', link: '/development'},
            {text: 'Team', link: '/team'},
          ],
        },
        {
          text: 'Help & Support',
          collapsed: false,
          items: [
            {text: 'GitHub', link: 'https://github.com/lando/vitepress-theme-default-plus/issues/new/choose'},
            {text: 'Slack', link: 'https://launchpass.com/devwithlando'},
            {text: 'Contact Us', link: '/support'},
          ],
        },
        {text: 'Configuration', link: '/config/config'},
        {text: 'Blog', link: '/blog'},
        {text: 'Guides', link: '/guides'},
      ],
    },
  },
});

function configSideBar() {
  return [
    {
      text: 'Theme Configuration',
      collapsed: false,
      items: [
        {text: 'Configuration', link: '/config/config'},
        {text: 'Frontmatter', link: '/config/frontmatter'},
        {text: 'useCollection()', link: '/composables/use-collection'},
        {text: 'useTeam()', link: '/composables/use-team'},
      ],
    },
    {
      text: 'Pages',
      collapsed: false,
      items: [
        {text: 'Collections', link: '/pages/collections'},
        {text: 'Teams', link: '/pages/teams'},
      ],
    },
    {
      text: 'Global Components',
      collapsed: false,
      items: [
        {text: 'Jobs', link: '/components/jobs'},
        {text: 'MailChimp', link: '/components/mailchimp'},
        {text: 'Sponsor', link: '/components/sponsors'},
        {text: 'YouTube', link: '/components/youtube'},
      ],
    },
    {
      text: 'Markdown Containers',
      collapsed: false,
      items: [
        {text: 'Admonitions', link: '/markdown/admonitions'},
        {text: 'Alignments', link: '/markdown/alignments'},
        {text: 'Boxes', link: '/markdown/boxes'},
        {text: 'Cards', link: '/markdown/cards'},
        {text: 'Columns', link: '/markdown/columns'},
        {text: 'Highlights', link: '/markdown/highlights'},
        {text: 'Tabs', link: '/markdown/tabs'},
        {text: 'Thumbnails', link: '/markdown/thumbnails'},
        {text: 'Advanced', link: '/guides/advanced-markdown'},
      ],
    },
    {text: 'Blog', link: '/blog'},
    {text: 'Guides', link: '/guides'},
  ];
}
*/
