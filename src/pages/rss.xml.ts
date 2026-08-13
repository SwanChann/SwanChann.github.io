import rss from '@astrojs/rss';
import { getVisibleEntries, sortByRecent } from '../utils/content';
import { entrySlug } from '../utils/paths';
import { siteConfig } from '../config/site';

export async function GET(context: { site?: URL }) {
  const writing = sortByRecent(await getVisibleEntries('writing'));
  const base = import.meta.env.BASE_URL === '/' ? '/' : `${import.meta.env.BASE_URL.replace(/\/$/, '')}/`;

  return rss({
    title: `${siteConfig.name} — Writing`,
    description: siteConfig.description,
    site: context.site ?? new URL(siteConfig.siteUrl),
    items: writing.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: `${base}writing/${entrySlug(entry.id)}/`,
      categories: entry.data.tags,
    })),
    customData: `<language>${siteConfig.language}</language>`,
  });
}

