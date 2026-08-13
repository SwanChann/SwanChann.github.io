import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER;
const isUserSite = repository === `${repositoryOwner}.github.io`;
const inferredBase = process.env.GITHUB_ACTIONS === 'true' && repository && !isUserSite
  ? `/${repository}`
  : '/';

const rawBase = process.env.BASE_PATH || inferredBase;
const base = rawBase === '/' ? '/' : `/${rawBase.replace(/^\/+|\/+$/g, '')}`;
const site = process.env.SITE_URL
  || (process.env.GITHUB_ACTIONS === 'true' && repositoryOwner
    ? `https://${repositoryOwner}.github.io`
    : 'https://example.com');

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',
      wrap: true,
    },
  },
});

