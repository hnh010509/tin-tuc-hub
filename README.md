# tin-tuc-hub

Astro static site, auto-deploys to Vercel on git push.

## Structure
- `src/content/posts/*.md` — each markdown = 1 post
- `src/pages/index.astro` — homepage with post list
- `src/pages/posts/[...slug].astro` — dynamic post route
- Auto sitemap at `/sitemap-index.xml`
- RSS at `/rss.xml`

## Deploy
1. Push to main → Vercel auto-builds + deploys
2. Live at `https://tin-tuc-hub.vercel.app`
