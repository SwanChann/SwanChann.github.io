import type { ContentCollection, ContentRecord } from './content';

export function findRelatedContent(
  all: ContentRecord[],
  current: { collection: ContentCollection; id: string; tags: string[] },
  limit = 6,
): ContentRecord[] {
  const normalizedTags = new Set(current.tags.map((tag) => tag.toLocaleLowerCase('en')));

  return all
    .filter((item) => !(item.collection === current.collection && item.id === current.id))
    .map((item) => ({
      item,
      score: item.tags.reduce(
        (total, tag) => total + (normalizedTags.has(tag.toLocaleLowerCase('en')) ? 1 : 0),
        0,
      ),
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => {
      if (a.score !== b.score) return b.score - a.score;
      const first = (a.item.updated ?? a.item.date)?.getTime() ?? 0;
      const second = (b.item.updated ?? b.item.date)?.getTime() ?? 0;
      return second - first;
    })
    .slice(0, limit)
    .map(({ item }) => item);
}
