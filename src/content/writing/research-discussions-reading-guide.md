---
title: AI 与具身研究：专题文章索引
description: 按生成模型与推理、机器人导航与控制、VLM 证据与评测、科研与 AI 协作分类汇集专题文章。
date: 2026-11-08
tags: [生成模型, 具身智能, VLM, 科研工作流]
status: growing
featured: true
draft: false
updated: 2026-11-08
---

这里按四个主题汇集 AI 与具身研究文章，涵盖基础概念、论文方法、工程实践与实验设计。各专题之间通过相关链接连接，便于查阅同一问题的不同层面。

## 分类维度

这些概念不适合全部塞进一棵互斥分类树。Transformer 描述架构，扩散描述生成机制，强化学习描述学习问题与反馈，机器人描述应用与交互对象。一个系统可以同时具有这些属性。

阅读新方法时，可以先填写六个坐标：它做什么任务、处理什么模态、采用什么架构、从什么监督学习、怎样生成或预测、如何与环境交互。这些维度有助于区分方法之间的联系与差异。

## 一、生成模型与推理

1. [基础模型、策略与世界模型](../../notes/foundation-policy-world-models/)：先分清模型在系统中的角色。
2. [潜空间、扩散与 Flow Matching](../../notes/diffusion-latent-flow-matching/)：理解表示空间、训练目标与采样过程。
3. [扩散策略的推理预算](../../notes/diffusion-policy-test-time-compute/)：区分步数、候选、预测和执行时域。
4. [Logit、奖励与判断](../../notes/logits-rewards-decisions/)：解释模型分数能说明什么。

已有的[多模态过度思考研究总览](../../research/multimodal-overthinking/)连接 DEER、SoT、Answer Convergence 等论文笔记，继续讨论何时值得增加或停止计算。

## 二、机器人导航与控制

1. [导航候选轨迹的平均与选择](../../research/navigation-candidate-decisions/)：比较候选聚合、航点转换与闭环执行。
2. [镂空楼梯的感知行走比较](../../research/perceptive-stair-locomotion/)：把观测方式与训练算法分开。
3. [模型部署契约](../../notes/model-deployment-contracts/)：核对张量、坐标、单位与时间。
4. [科研框架图的接口表达](../../experience/research-diagrams-as-interfaces/)：让系统关系可以被检查。

项目背景见[四足视觉导航](../../projects/quadruped-visual-navigation/)和[SuperMimic 地形跟踪复盘](../supermimic-terrain-tracking-reflections/)。实验结果的适用范围以各项目的验证条件为准。

## 三、VLM 证据与评测

1. [VLM 知识专题](../../vlm/)：补齐模型基础、视觉能力和方法背景。
2. [VLM 缺陷识别的证据路由](../../research/vlm-evidence-tool-routing/)：区分看不清、规则错误和输出错误。
3. [自适应检索](../../notes/adaptive-retrieval-routing/)：比较输入侧路由与中间状态探针。
4. [评测口径与消融](../../notes/evaluation-protocol-ablation/)：让“变好了”具有可比较的含义。

这一组文章尤其区分预测置信度、证据充分性与答案正确率。它们可能相关，但不能互相替代。

## 四、科研与 AI 协作

1. [模型、Agent、Harness 与工作流](../../notes/agent-harness-boundaries/)：明确不同层次的责任。
2. [本地推理并发与显存](../../notes/inference-concurrency-memory/)：理解服务侧的真实成本。
3. [文献检索覆盖](../../notes/literature-search-coverage/)：记录检索范围、版本与未解决问题。
4. [用 AI 保留理解、探索和验收](../ai-collaboration-and-learning/)：把一次协作转成可复用的研究积累。

[AI 日报](../../daily/)按日期记录论文、模型与工具的新进展，并链接原始来源。
