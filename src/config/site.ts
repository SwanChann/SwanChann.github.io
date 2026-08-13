export type SocialLink = {
  label: string;
  href: string;
  placeholder?: boolean;
};

export const siteConfig = {
  name: 'Swan Chan',
  shortName: 'Swan',
  siteTitle: 'Swan Chan — Personal Web',
  description: 'A personal web, digital garden, and research and engineering notebook.',
  tagline: 'AI · Robotics · Research Tools',
  introduction: 'I explore embodied intelligence, AI agents, and research workflows.',
  author: 'Swan Chan',
  siteUrl: 'https://swanchann.github.io',
  language: 'en',
  locale: 'en_US',
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
      label: 'Email',
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
