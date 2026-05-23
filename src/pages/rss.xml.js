import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: 'tin-tuc-hub',
    description: 'Curated reference resources',
    site: context.site,
    items: posts.map(p => ({
      title: p.data.title,
      pubDate: p.data.pubDate,
      description: p.data.description || '',
      link: `/posts/${p.slug}/`,
    })),
  });
}
