import { defineConfig } from 'astro/config';

const siteUrl = process.env.CF_PAGES_URL
  || (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`)
  || 'https://tin-tuc-hub.pages.dev';

export default defineConfig({
  site: siteUrl,
  build: { format: 'directory' },
  trailingSlash: 'ignore'
});
