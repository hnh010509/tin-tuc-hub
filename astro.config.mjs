import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tin-tuc-hub.vercel.app',
  integrations: [sitemap()],
  build: { format: 'directory' }
});
