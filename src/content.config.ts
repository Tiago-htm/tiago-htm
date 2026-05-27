import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    stack: z.array(z.string()),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
  }),
});

export const collections = { projects };
