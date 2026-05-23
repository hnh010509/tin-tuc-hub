import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// site URL: ưu tiên env CF_PAGES_URL (Cloudflare Pages), fallback Vercel/local
const siteUrl = process.env.CF_PAGES_URL
  || process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`
  || 'https://tin-tuc-hub.pages.dev';

export default defineConfig({
  site: siteUrl,
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404')
    })
  ],
  build: { format: 'directory' },
  trailingSlash: 'ignore'
});
