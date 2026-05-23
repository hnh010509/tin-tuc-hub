import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('posts', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, 100);
  return rss({
    title: 'Tin Tức Hub',
    description: 'Tổng hợp tin tức, bài viết tham khảo',
    site: context.site,
    items: posts.map(p => ({
      title: p.data.title,
      pubDate: p.data.pubDate,
      description: p.data.description || '',
      link: `/posts/${p.slug}/`,
      author: p.data.author,
      categories: p.data.tags
    })),
    customData: `<language>vi-VN</language>`
  });
}
