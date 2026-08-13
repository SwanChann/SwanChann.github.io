import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const status = z.enum(['seed', 'growing', 'mature', 'evergreen']);

const shared = {
  title: z.string(),
  description: z.string(),
  updated: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  status: status.default('seed'),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  aliases: z.array(z.string()).optional(),
};

const dated = {
  ...shared,
  date: z.coerce.date(),
};

const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.{md,mdx}' }),
  schema: z.object(dated),
});

const notes = defineCollection({
  loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...dated,
    type: z.enum(['til', 'debug', 'paper', 'tool', 'concept', 'learning', 'setup']),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...shared,
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    paper: z.string().url().optional(),
  }),
});

const research = defineCollection({
  loader: glob({ base: './src/content/research', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...dated,
    topic: z.string(),
  }),
});

const experience = defineCollection({
  loader: glob({ base: './src/content/experience', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...dated,
    category: z.enum([
      'debugging',
      'deployment',
      'environment',
      'workflow',
      'tooling',
      'infrastructure',
    ]),
  }),
});

export const collections = { writing, notes, projects, research, experience };
