import rss from '@astrojs/rss';
import { getVisibleEntries } from '../../utils/content';
import { entrySlug } from '../../utils/paths';
import { siteConfig } from '../../config/site';

export async function GET(context: { site?: URL }) {
  const entries = (await getVisibleEntries('daily'))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return rss({
    title: `${siteConfig.name} — AI 日报`,
    description: '经过来源核验的 AI 论文、模型与工具进展。',
    site: context.site ?? new URL(siteConfig.siteUrl),
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: `${base}/daily/${entrySlug(entry.id)}/`,
      categories: entry.data.tags,
    })),
    customData: `<language>${siteConfig.language}</language>`,
  });
}
