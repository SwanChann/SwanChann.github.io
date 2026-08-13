export type NowGroup = {
  label: string;
  items: string[];
};

export const now = {
  updated: '2026 年 8 月',
  groups: [
    {
      label: '正在进行',
      items: ['具身导航', '个人科研操作系统', 'AI Agent 工作流'],
    },
    {
      label: '正在学习',
      items: ['世界模型', 'Agent Harness', '视觉-语言-动作模型'],
    },
    {
      label: '正在构建',
      items: ['个人知识网站'],
    },
  ] satisfies NowGroup[],
};
