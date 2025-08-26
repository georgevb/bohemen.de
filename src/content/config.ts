import { z, defineCollection } from 'astro:content';

const portfolioCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    alt: z.string(),
    category: z.enum(['wedding', 'portrait', 'event', 'nature']),
    size: z.enum(['small', 'medium', 'large']).default('medium'),
    order: z.number().default(0),
    published: z.boolean().default(true),
  }),
});

const testimonialsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    author: z.string(),
    event: z.string().optional(),
    content: z.string(),
    order: z.number().default(0),
    published: z.boolean().default(true),
  }),
});

export const collections = {
  portfolio: portfolioCollection,
  testimonials: testimonialsCollection,
};