---
title: "今日所学：个人网站也可以成为知识库"
description: 一篇示例笔记，说明静态网站为什么既能用于发布，也能成为可长期维护的知识索引。
date: 2026-08-13
updated: 2026-08-13
type: til
tags:
  - 科研操作系统
  - 工作流
  - Astro
status: seed
draft: false
featured: false
---

> **示例 / 占位内容：** 准备好真实内容后，请删除或重写这篇笔记。

个人网站不一定需要数据库，也可以成为实用的知识库。

关键是让源内容保持结构化：

- frontmatter 提供日期、状态、类型与标签；
- 内容集合负责校验这些字段；
- 自动生成的路由省去了手工维护索引；
- 共同标签建立轻量连接；
- Pagefind 为渲染后的静态页面建立索引。

一个重要区别是：**Markdown 是内容的主要来源**，HTML 则是构建产物。

## 值得记住的命令

```powershell
npm run new:note -- "一个有用的标题"
```

这条命令会在 `src/content/notes/` 下创建草稿，不需要编辑页面组件。
