import {createRequire} from 'module';

import {defineConfig} from '@lando/vitepress-theme-default-plus/config';

const require = createRequire(import.meta.url);

const {name, version} = require('../../package.json');
const landoPlugin = name.replace('@lando/', '');

export default defineConfig({
  title: 'Lando Dotnet Plugin',
  description: 'The offical Lando plugin for Dotnet.',
  landoDocs: 3,
  landoPlugin,
  version,
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
    ['link', {rel: 'icon', href: '/dotnet/favicon.ico', size: 'any'}],
    ['link', {rel: 'icon', href: '/dotnet/favicon.svg', type: 'image/svg+xml'}],
  ],
  themeConfig: {
    sidebar: sidebar(),
  },
});

function sidebar() {
  return [
    {
      text: 'Overview',
      collapsed: false,
      items: [
        {text: 'Introduction', link: '/'},
        {text: 'Installation', link: '/install'},
        {text: 'Configuration', link: '/config'},
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
        {text: 'GitHub', link: 'https://github.com/lando/dotnet/issues/new/choose'},
        {text: 'Slack', link: 'https://www.launchpass.com/devwithlando'},
        {text: 'Contact Us', link: '/support'},
      ],
    },
    {text: 'Examples', link: 'https://github.com/lando/dotnet/tree/main/examples'},
  ];
};
