// Topic definitions select content by tags, never by a manually maintained article list.
export const topics = [
  {
    id: 'vision-language',
    title: '视觉语言模型',
    description: '从模型基础、视觉能力，到评测方法与研究问题。',
    tags: ['VLM', 'MLLM', '评测', '多模态'],
    knowledgeHub: true,
  },
  {
    id: 'embodied-ai',
    title: '具身智能与导航',
    description: '机器人如何理解环境，以及研究如何走向可验证的实践。',
    tags: ['具身智能', '视觉导航', '机器人科研', 'NoMaD'],
    knowledgeHub: false,
  },
  {
    id: 'research-workflow',
    title: 'AI 与科研工作流',
    description: 'AI Agent、人机协作，以及可持续积累的科研工具与方法。',
    tags: ['AI Agent', 'AI 工作流', '科研工作流', 'ResearchOS', 'ResearchFlow', 'Codex'],
    knowledgeHub: false,
  },
] as const;
