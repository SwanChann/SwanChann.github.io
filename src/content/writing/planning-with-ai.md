---
title: 用 AI 做计划：从脑内待办到可生成周报的最小闭环
description: 记录 Notion Tasks、Action、Result 与 Reportable 如何组成低维护的个人计划和 Word 周报流程。
date: 2026-08-13
updated: 2026-08-13
tags:
  - 个人计划
  - Notion
  - Codex
  - 周报
status: mature
draft: false
featured: false
---

> 整理口径：本文对应任务台账中 2026 年 5 月 26 日和 6 月 1 日的两项任务，并以本地 Codex 对话、流程文档、脚本和已生成周报为依据。

这个专题从一个很朴素的矛盾开始：我习惯把要做的事放在脑子里，但导师又要求每周提交 Word 周报。真正需要的不是复杂的生产力系统，而是一条能把执行痕迹自然变成周报的低摩擦链路。

## Part 1｜5 月 26 日：先选择主系统，而不是同时维护很多工具

工具调研比较了 Notion、飞书、轻量 Todo、本地 Markdown 和 AI Agent。选型标准不是功能最多，而是捕获快、任务可执行、每周可复盘、能输出 Word，并且维护成本不能超过做事本身。

最后的分工是：Notion 作为个人任务主系统，飞书或 Word 作为交付出口，Codex 负责拆解、整理和格式转换。这样避免在 Notion 与飞书维护两套完整任务表。

最初方案还保留了 Daily Logs，但实际使用后发现它和 Tasks 重复。流程随后收敛为只维护一张 Tasks 表：

```text
Inbox
→ 写清 Action
→ 进入 Today / Doing
→ 执行
→ 填写 Result
→ 勾选 Reportable
→ 生成周报
```

## Part 2｜6 月 1 日：把“做计划”改成“留下下一步与证据”

任务字段被压缩为 Task、Project、Status、Action、Due、Result 和 Reportable。Action 只写下一步物理动作，Result 只写实际完成、发现或阻塞；两者不能混在一起。

每天不再追求填满日程，只选择 1 个主任务和 2 个辅助任务。完成后更新状态与 Result，值得向导师汇报的内容才勾选 Reportable。这个设计把周报质量绑定到日常证据，而不是周末临时回忆。

AI 在这里有清晰边界：它可以合并重复任务、把模糊想法拆成动作、根据 CSV 整理表达，但不能决定人生优先级，也不能补写任务表中没有的成果。

## Part 3｜从 CSV 到 Word：让周报成为流程副产品

最终工作流同时导出 `Reportable` 和 `All` 两张 CSV。前者提供本周已完成或阶段性完成的内容，后者提供尚未完成的下周计划。脚本会清理 Notion 页面链接，按项目归类任务，并根据 Word 模板生成 Markdown 与 DOCX。

当前文件夹已经保存了从 5 月下旬到 8 月上旬的多期周报产物。最近一次对话再次从任务表生成周报，并验证 Notion 链接、页面 ID 与段落结构已被清理。

这套系统没有证明我因此“更自律”或“效率提高了多少”。它已经证明的是更窄的工程事实：任务记录可以稳定转换为结构化周报，而且表达受 Task、Action、Result 与 Status 的证据边界约束。
