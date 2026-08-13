export type NowGroup = {
  label: string;
  items: string[];
};

export const now = {
  updated: 'August 2026',
  groups: [
    {
      label: 'Working on',
      items: ['Embodied Navigation', 'Personal Research OS', 'AI Agent Workflow'],
    },
    {
      label: 'Learning',
      items: ['World Models', 'Agent Harness', 'Vision-Language-Action Models'],
    },
    {
      label: 'Building',
      items: ['Personal Knowledge Website'],
    },
  ] satisfies NowGroup[],
};

