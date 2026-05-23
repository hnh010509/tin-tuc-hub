import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string().optional(),
    sourceUrl: z.string().url().optional(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { posts };
