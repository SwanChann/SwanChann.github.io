export type SocialLink = {
  label: string;
  href: string;
  placeholder?: boolean;
};

export const siteConfig = {
  name: 'Swan Chan',
  shortName: 'Swan',
  siteTitle: 'Swan Chan — 个人网站',
  description: '一个记录研究、工程实践与持续思考的个人网站和数字花园。',
  tagline: '人工智能 · 机器人 · 科研工具',
  introduction: '我关注具身智能、AI Agent 与科研工作流。',
  author: 'Swan Chan',
  siteUrl: 'https://swanchann.github.io',
  language: 'zh-CN',
  locale: 'zh_CN',
  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/SwanChann',
    },
    {
      label: 'CSDN',
      href: 'https://blog.csdn.net/YOUR_CSDN_USERNAME',
      placeholder: true,
    },
    {
      label: '邮箱',
      href: 'mailto:YOUR_EMAIL@example.com',
      placeholder: true,
    },
  ] satisfies SocialLink[],
  optionalProfiles: {
    googleScholar: '',
    orcid: '',
    linkedin: '',
    zhihu: '',
    bilibili: '',
  },
} as const;
