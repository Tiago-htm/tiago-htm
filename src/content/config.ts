import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string(),
    stack: z.array(z.string()),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
  }),
});

export const collections = { projects };