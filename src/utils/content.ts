import { getCollection, type CollectionEntry } from 'astro:content';
import { entrySlug, withBase } from './paths';

export const contentCollections = [
  'writing',
  'notes',
  'projects',
  'research',
  'experience',
] as const;

export type ContentCollection = (typeof contentCollections)[number];
export type AnyContentEntry = CollectionEntry<ContentCollection>;

export type ContentRecord = {
  collection: ContentCollection;
  id: string;
  path: string;
  title: string;
  description: string;
  tags: string[];
  status: 'seed' | 'growing' | 'mature' | 'evergreen';
  draft: boolean;
  featured: boolean;
  date?: Date;
  updated?: Date;
  type?: string;
  topic?: string;
  category?: string;
};

type SharedData = {
  title: string;
  description: string;
  tags: string[];
  status: ContentRecord['status'];
  draft: boolean;
  featured: boolean;
  date?: Date;
  updated?: Date;
  startDate?: Date;
  type?: string;
  topic?: string;
  category?: string;
};

export const collectionLabels: Record<ContentCollection, string> = {
  writing: 'Writing',
  notes: 'Notes',
  projects: 'Projects',
  research: 'Research',
  experience: 'Experience',
};

export function isVisible(data: { draft: boolean }): boolean {
  return import.meta.env.DEV || !data.draft;
}

export async function getVisibleEntries<C extends ContentCollection>(
  collection: C,
): Promise<CollectionEntry<C>[]> {
  const entries = await getCollection(collection);
  return entries.filter((entry) => isVisible(entry.data));
}

export function contentDate(data: SharedData): Date | undefined {
  return data.updated ?? data.date ?? data.startDate;
}

export function sortByRecent<T extends AnyContentEntry>(entries: T[]): T[] {
  return [...entries].sort((a, b) => {
    const first = contentDate(a.data as SharedData)?.getTime() ?? 0;
    const second = contentDate(b.data as SharedData)?.getTime() ?? 0;
    return second - first;
  });
}

export function sortProjects<T extends CollectionEntry<'projects'>>(entries: T[]): T[] {
  return [...entries].sort((a, b) => {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    return (b.data.startDate?.getTime() ?? 0) - (a.data.startDate?.getTime() ?? 0);
  });
}

export function toContentRecord(
  collection: ContentCollection,
  entry: AnyContentEntry,
): ContentRecord {
  const data = entry.data as SharedData;
  return {
    collection,
    id: entry.id,
    path: withBase(`/${collection}/${entrySlug(entry.id)}/`),
    title: data.title,
    description: data.description,
    tags: data.tags,
    status: data.status,
    draft: data.draft,
    featured: data.featured,
    date: data.date ?? data.startDate,
    updated: data.updated,
    type: data.type,
    topic: data.topic,
    category: data.category,
  };
}

export async function getAllVisibleContent(): Promise<ContentRecord[]> {
  const groups = await Promise.all(
    contentCollections.map(async (collection) => {
      const entries = await getVisibleEntries(collection);
      return entries.map((entry) => toContentRecord(collection, entry as AnyContentEntry));
    }),
  );

  return groups.flat().sort((a, b) => {
    const first = (a.updated ?? a.date)?.getTime() ?? 0;
    const second = (b.updated ?? b.date)?.getTime() ?? 0;
    return second - first;
  });
}

export function estimateReadingTime(body: string): number {
  const latinWords = body.match(/[A-Za-z0-9]+(?:['’-][A-Za-z0-9]+)*/g)?.length ?? 0;
  const cjkCharacters = body.match(/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}]/gu)?.length ?? 0;
  return Math.max(1, Math.ceil((latinWords + cjkCharacters / 2) / 220));
}

