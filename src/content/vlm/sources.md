---
title: 代表性资料索引
description: 保存本知识库引用的原论文、作者、年份、发表信息与来源链接。
area: 研究
level: Important
order: 16
related: [paper-reading, frontiers, evaluation]
---

## 使用规则

优先读原论文、会议页面或官方技术报告。这里保存的是**出处与研究问题**；论文报告的结果未由本站独立复现。随着新版本出现，应记录版本和阅读日期，不静默覆盖旧结论。

## 架构、训练与视觉表征

| 资料 | 作者、年份与发表信息 | 为什么读 |
|---|---|---|
| [CLIP: Learning Transferable Visual Models From Natural Language Supervision](https://arxiv.org/abs/2103.00020) | Radford 等，2021，ICML | 图文对比学习与零样本识别 |
| [BLIP-2: Bootstrapping Language-Image Pre-training](https://arxiv.org/abs/2301.12597) | Junnan Li 等，2023，ICML | 冻结组件与 Q-Former 两阶段连接 |
| [Visual Instruction Tuning / LLaVA](https://arxiv.org/abs/2304.08485) | Haotian Liu 等，2023，NeurIPS | 视觉指令训练的生成式接口 |
| [MM1: Methods, Analysis & Insights from Multimodal LLM Pre-training](https://arxiv.org/abs/2403.09611) | Brandon McKinzie 等，2024，arXiv | 组件、分辨率、token 与数据配比消融 |
| [Cambrian-1: A Fully Open, Vision-Centric Exploration of MLLMs](https://arxiv.org/abs/2406.16860) | Shengbang Tong 等，2024，NeurIPS | 多视觉编码器比较与 CV-Bench |
| [Qwen2.5-VL Technical Report](https://arxiv.org/abs/2502.13923) | Shuai Bai 等，2025，arXiv | 动态分辨率、定位与文档/视频 |
| [Qwen3-VL Technical Report](https://arxiv.org/abs/2511.21631) | Shuai Bai 等，2025，arXiv | 长上下文、多层视觉特征与多模态推理 |

## 评测、错误与工具贡献

| 资料 | 作者、年份与发表信息 | 为什么读 |
|---|---|---|
| [MMMU](https://arxiv.org/abs/2311.16502) | Xiang Yue 等，2024，CVPR | 综合学科知识与视觉推理评测 |
| [MMVP / Eyes Wide Shut?](https://arxiv.org/abs/2401.06209) | Shengbang Tong 等，2024，CVPR | 图像配对与视觉表征盲点 |
| [BLINK](https://arxiv.org/abs/2404.12390) | Xingyu Fu 等，2024，ECCV | 经典视觉任务转成多模态问答 |
| [OCRBench: On the Hidden Mystery of OCR in Large Multimodal Models](https://arxiv.org/abs/2305.07895) | Yuliang Liu 等，2023，arXiv（2024 修订） | 文字识别、文档问答等 OCR 能力评测 |
| [VLind-Bench](https://arxiv.org/abs/2406.08702) | Kang-il Lee 等，2024，arXiv | 语言先验与反常识图像控制 |
| [Mind the Gap: Benchmarking Spatial Reasoning in VLMs](https://arxiv.org/abs/2503.19707) | Ilias Stogiannidis 等，2025，arXiv | 空间任务的细分与混杂 |
| [PerceptionBench](https://arxiv.org/abs/2607.24957) | Zichao Lin 等，2026，arXiv | 原子感知能力与错误剖面 |
| [MIRAGE: The Illusion of Visual Understanding](https://arxiv.org/abs/2603.21687) | Mohammad Asadi 等，2026，arXiv | 无图基线、题干线索与解释风险 |
| [Do Multimodal Agents Really Benefit from Tool Use?](https://arxiv.org/abs/2606.02357) | Jiawei Guo 等，2026，arXiv | 真实工具、空返回与无工具消融 |
| [OSWorld](https://arxiv.org/abs/2404.07972) | Tianbao Xie 等，2024，NeurIPS | 多模态 agent 的交互任务测量 |
| [Position: Your VLM May Not Be Thinking with Interleaved Images](https://openreview.net/forum?id=ivAHZuj8k1) | Wenjie Yang 等，2026，ICML Position Track；[作者页面](https://agoyang.github.io/) | 中间图像的必要性问题；本次未直接读取 OpenReview 正文，实验细节待核查 |

## 关联与判断

将论文放进[研究范式](../research-paradigms/)后，再按[论文阅读模板](../paper-reading/)记录它的最强证据与适用边界。表中未提供的项目或 GitHub 链接，不应猜测补全。
