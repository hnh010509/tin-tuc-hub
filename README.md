# Tin Tức Hub

Trang tổng hợp tin tức và bài viết tham khảo, xây dựng bằng [Astro](https://astro.build).

## Tính năng

- Static site, deploy auto qua Vercel
- Sitemap + RSS feed tự động
- Phân trang, tags, related posts
- SEO-optimized (Open Graph, Twitter Card, Schema.org)
- Responsive design

## Phát triển

```bash
npm install
npm run dev
```

## Cấu trúc

- `src/content/posts/*.md` — Bài viết (markdown)
- `src/pages/` — Routes
- `src/layouts/BaseLayout.astro` — Layout chung
- `src/components/` — UI components
