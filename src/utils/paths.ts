export function withBase(path = '/'): string {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const cleanPath = path.replace(/^\/+/, '');
  return cleanPath ? `${base}${cleanPath}` : base;
}

export function entrySlug(id: string): string {
  return id.replace(/\.(md|mdx)$/i, '').replace(/\/index$/, '');
}

export function tagSlug(tag: string): string {
  return tag
    .normalize('NFKC')
    .trim()
    .toLocaleLowerCase('en')
    .replace(/\s+/g, '-')
    .replace(/[^\p{L}\p{N}-]+/gu, '')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '');
}

