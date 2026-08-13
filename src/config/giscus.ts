export const giscusConfig = {
  repo: '',
  repoId: '',
  category: '',
  categoryId: '',
  mapping: 'pathname',
  reactionsEnabled: true,
  emitMetadata: false,
  inputPosition: 'top',
  lang: 'zh-CN',
} as const;

export const isGiscusEnabled = Boolean(
  giscusConfig.repo
  && giscusConfig.repoId
  && giscusConfig.category
  && giscusConfig.categoryId,
);
