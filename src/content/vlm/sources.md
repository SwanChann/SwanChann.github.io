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

## 怎样把索引变成学习路线

不要第一次就通读所有论文。先带着一个已经懂的例子找证据：猫图怎样被切成图块、怎样与文字匹配、怎样接到语言模型。下面三条路线各有一个可以验证理解的问题。

### 路线一：从像素到问答

先读[基础](../foundations/)与[架构](../architecture/)，再看 ViT 的图块和模型结构图：能否说明图块在输入端是什么、Transformer 后的向量又是什么？接着读 CLIP 的训练与推理方式：训练配对图文，推理如何使用文字候选？最后读 LLaVA 或 BLIP-2：它们拿哪一种视觉特征、怎样连接、更新哪些模块？

不需要先背全部参数。第一次阅读应能画出输入输出，第二次再看具体形状和训练配置。如果图像编码器在某个系统中来自 CLIP，也不能把整套 VLM 当成只有 CLIP 匹配流程。

### 路线二：从一次错误到能力测量

先读[感知与推理](../perception-reasoning/)和[评测](../evaluation/)，再看 BLINK、MMVP 或 PerceptionBench 的实际题例、标注和评分规则。问自己：题目读错的是对象、属性、位置还是组合？有没有不能仅靠图像唯一判定的题？

然后看无图/语言先验工作，检查作者怎样改变输入、保持哪些条件。读到高无图分数，结论应落在该题集与协议，而不是直接写“所有模型都没有视觉理解”。

### 路线三：从系统改进到原因解释

先用[论文阅读模板](../paper-reading/)读 MM1 的组件与数据消融，找到一项仅改变部分变量的比较；再读工具贡献研究，区分调用行为和真实返回内容的贡献。若基线计算量不同，把成本也写进阅读卡。

前沿材料如 OpenVLA、Janus-Pro 和 V-JEPA 2 可在对应概念之后读：它们分别增加行动、图像生成或未来预测的要求。不要因为名字含 multimodal，就用同一个问答总分比较所有系统。

## 一条引用应该支持多大的主张

“论文提出一种 Q-Former 连接方案”是设计事实；“在它的实验中改善了任务表现”是作者结果；“这种连接永远优于其他方案”是更强的推广，前两项不自动支持第三项。记录论文版本、评测条件和结论边界，必要时同时保留反例。

引用表用于找到原文。没有直接读到全文的项目已注明，不用它支撑具体实验结论；论文作者结果与个人实验结果也分别记录。

## 架构、训练与视觉表征资料

| 资料 | 作者、年份与发表信息 | 为什么读 |
|---|---|---|
| [CLIP: Learning Transferable Visual Models From Natural Language Supervision](https://arxiv.org/abs/2103.00020) | Radford 等，2021，ICML | 图文对比学习与零样本识别 |
| [An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale](https://arxiv.org/abs/2010.11929) | Alexey Dosovitskiy 等，2021，ICLR（2020 arXiv 首稿） | 图块、位置编码与视觉 Transformer 的基础设计 |
| [BLIP-2: Bootstrapping Language-Image Pre-training](https://arxiv.org/abs/2301.12597) | Junnan Li 等，2023，ICML | 冻结组件与 Q-Former 两阶段连接 |
| [Visual Instruction Tuning / LLaVA](https://arxiv.org/abs/2304.08485) | Haotian Liu 等，2023，NeurIPS | 视觉指令训练的生成式接口 |
| [MM1: Methods, Analysis & Insights from Multimodal LLM Pre-training](https://arxiv.org/abs/2403.09611) | Brandon McKinzie 等，2024，arXiv | 组件、分辨率、token 与数据配比消融 |
| [Cambrian-1: A Fully Open, Vision-Centric Exploration of MLLMs](https://arxiv.org/abs/2406.16860) | Shengbang Tong 等，2024，NeurIPS | 多视觉编码器比较与 CV-Bench |
| [Qwen2.5-VL Technical Report](https://arxiv.org/abs/2502.13923) | Shuai Bai 等，2025，arXiv | 动态分辨率、定位与文档/视频 |
| [Qwen3-VL Technical Report](https://arxiv.org/abs/2511.21631) | Shuai Bai 等，2025，arXiv | 长上下文、多层视觉特征与多模态推理 |
| [Direct Preference Optimization: Your Language Model is Secretly a Reward Model](https://arxiv.org/abs/2305.18290) | Rafael Rafailov 等，2023，arXiv | 理解偏好对怎样用于优化；本身不是VLM视觉能力证据 |

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

## 理解、行动与预测的代表资料

| 资料 | 作者、年份与发表信息 | 带着什么问题读 |
|---|---|---|
| [Janus-Pro: Unified Multimodal Understanding and Generation with Data and Model Scaling](https://arxiv.org/abs/2501.17811) | Xiaokang Chen 等，2025，arXiv | 理解与生成共享哪些模块，哪些视觉路径仍不同？ |
| [OpenVLA: An Open-Source Vision-Language-Action Model](https://arxiv.org/abs/2406.09246) | Moo Jin Kim 等，2024，arXiv；[项目](https://openvla.github.io/) | 视觉与指令怎样接到动作，机器人任务怎样评测？ |
| [V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning](https://arxiv.org/abs/2506.09985) | Mido Assran 等，2025，arXiv | 预测对象是图像还是特征，行动条件规划需要什么额外训练？ |

## 关联与判断

自检：一本索引列出许多论文，是否说明所有论文都支持同一个观点？不是。为选中的一篇写明它支持哪个具体句子、最强证据在哪、还有什么没有排除，再将阅读卡链接到知识专题。

将论文放进[研究范式](../research-paradigms/)后，再按[论文阅读模板](../paper-reading/)记录它的最强证据与适用边界。表中未提供的项目或 GitHub 链接，不应猜测补全。
