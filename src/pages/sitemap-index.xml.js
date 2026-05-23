import { getCollection } from 'astro:content';
import { slugify } from '../utils/slugify';

export async function GET(context) {
  const site = context.site?.toString().replace(/\/$/, '') || 'https://tin-tuc-hub.pages.dev';
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const tags = new Set();
  posts.forEach(p => p.data.tags.forEach(t => tags.add(t)));

  const urls = [
    { loc: '/', priority: '1.0', changefreq: 'daily' },
    { loc: '/about/', priority: '0.5', changefreq: 'monthly' },
    { loc: '/privacy/', priority: '0.3', changefreq: 'yearly' },
    { loc: '/tags/', priority: '0.7', changefreq: 'weekly' }
  ];

  posts.forEach(p => urls.push({
    loc: `/posts/${p.slug}/`,
    lastmod: p.data.pubDate.toISOString().slice(0, 10),
    priority: '0.8',
    changefreq: 'weekly'
  }));

  Array.from(tags).forEach(t => urls.push({
    loc: `/tags/${slugify(t)}/`,
    priority: '0.6',
    changefreq: 'weekly'
  }));

  // Paginated archive pages
  const postsPerPage = 12;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  for (let i = 2; i <= totalPages; i++) {
    urls.push({ loc: `/page/${i}/`, priority: '0.5', changefreq: 'weekly' });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${site}${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
}
