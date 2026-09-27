---
title: 视觉能力地图
description: 用可测任务区分识别、属性、计数、OCR、grounding、空间、视频和视觉推理。
area: 能力
level: Core
order: 5
related: [visual-perception, text-grounding, spatial-3d, temporal-reasoning]
---

## 核心问题

“视觉能力强”究竟是哪些能力强？没有单一公认 taxonomy：有的论文按输入类型分，有的按认知操作分，有的按错误位置分。下表按**完成任务所需的主要视觉证据**组织，类别可以重叠。

## 心智模型

先问输出需要图中哪个事实，再问是否还需关系、知识或多步推理。例如“数有几个杯子”同时要求识别与实例分离；“哪个杯子在左边”又加入定位与参照系。

四组可继续查阅的二级能力页：[物体与场景感知](../visual-perception/)、[文字与视觉定位](../text-grounding/)、[空间与三维](../spatial-3d/)、[多图、视频与视觉推理](../temporal-reasoning/)。每个能力都按“是什么、为何重要、所需信息、常见错误、代表测量、与其他能力的关系”记录。

## 能力清单

| 能力 | 是什么、需要什么信息 | 常见错误与代表性测量 |
|---|---|---|
| Recognition / fine-grained / attribute | 认出物体、细分类别与颜色状态；需语义和局部细节 | 相似类别混淆、用场景猜属性；可用受控分类和细粒度 VQA |
| Counting / comparison | 分清实例并比较数量、大小或属性 | 重叠目标漏计；配对改动数量的题更能检验依赖 |
| OCR / document / chart / diagram | 读文字、版面、图例、轴和符号 | 字形、单元格或坐标轴对错；OCRBench、图表任务 |
| Localization / referring / grounding | 把语言指向图中对象，并输出框、点或区域 | 找错同类目标；用定位标注和 IoU/点距评估 |
| Relation / scene | 对象间关系、遮挡、动作与整体场景 | 正确识别对象却绑错关系；关系最小对照 |
| 2D spatial / orientation / rotation | 左右上下、内外、朝向与旋转 | 坐标系、端点和镜像混淆；CV-Bench、空间配对题 |
| Depth / 3D / geometry | 深度顺序、视角变化、尺寸和真实距离 | 2D 投影歧义；必须标明可判定条件和单位 |
| Multi-image / video / temporal | 跨图对应、事件顺序、长视频线索 | 帧采样漏证据、跨帧身份混淆 |
| GUI visual understanding | 看清控件、状态、可点击区域 | 小字、精确坐标和窗口变化；需区分感知与执行 |
| Visual reasoning | 基于已提取图中事实组合、计算或推断 | 把前提看错误判为推理弱；需“提供正确事实”对照 |

## 它怎样工作

一个任务可用“依赖图”表达：`OCR + 定位 → 读指定单元格 → 比较两数 → 输出结论`。若最终答案错，应检查最早不正确的可验证子事实。需要注意：这样的分解是**分析工具**，不声称模型内部真有同样的串行模块。

## 为什么重要

两个模型总分相同，能力剖面可能相反。研究者应报告类别、样本难度、图像来源和不确定性，而非只报告一个 accuracy。[PerceptionBench](https://arxiv.org/abs/2607.24957) 尝试以原子感知能力减少综合题混杂；其分类是一个有用方案，不是唯一标准。

## 容易混淆

**Spatial relation** 问图上相对位置；**3D reasoning** 可涉及真实深度；**grounding** 要将文字明确绑定到位置；**visual reasoning** 常依赖前面多项能力。单图的真实距离可能不可判定，不能把所有错误归为模型缺陷。

## 研究视角

为每类能力记录：标注单元、最小对照、文字基线、常见混杂和适用指标。若题目无需图像即可猜对，应标记视觉依赖不足，见[评测](../evaluation/)。

## 代表性工作

[Cambrian-1/CV-Bench](https://arxiv.org/abs/2406.16860) 将视觉编码器比较与视觉中心评测联系；[Mind the Gap](https://arxiv.org/abs/2503.19707) 指出空间任务需要更细的划分；[PerceptionBench](https://arxiv.org/abs/2607.24957) 以错误分类构造原子问题。论文结果均受其题集、模型和评分协议约束。

## 关联与判断

从[感知与推理](../perception-reasoning/)学习定位错误，从[失败模式](../failure-modes/)学习错误剖面。读完应能把一个 VQA 题拆成至少两个必要能力，并说明哪种对照能隔离目标能力。
