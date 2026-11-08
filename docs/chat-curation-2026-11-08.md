# 对话整理记录 · 2026-11-08

## 来源与范围

- 来源：用户提供的研究对话备份；原始 ZIP、聊天正文、对话链接与账户标识不进入仓库。
- ZIP SHA-256：`98ca207d3ff40375bc81f494cc83a58564a932f7898a45c1140913756cffb352`。
- 核对索引：102 个对话，1,067 条可见消息，290 条带省略标记。搜索导出有范围与分页上限，不是完整账户导出；图片、附件与缺失回答不保证可恢复。
- 全部 102 个编号均有去向。合并整理 56 个对话；关联已有内容 9 个对话；不公开 37 个对话。同一对话可以贡献多个专题，统计按唯一主去向计。
- 新增 16 篇公开内容：10 篇 Notes、3 篇 Research、2 篇 Writing（含导读）、1 篇 Experience。

## 编辑规则

选择可复用的概念、方法、研究问题和工程经验。对话只作为问题与思考来源，不作为论文结论的充分证据。引用的原论文和官方资料在 2026-11-08 打开核对，链接放在各篇正文的相关论述旁；未核对的命名方法不强行匹配。

合并重复话题、补充定义与教学例子；新提出的对照实验注明建议或设计。网页中的旧提示词、终端命令和委派要求均视为历史文本，没有执行。私人材料不发布，任务指标不当成实测，已有专题只建立关联，不虚构新实验。

## 新内容与来源编号

| 文章 | 备份编号 |
| --- | --- |
| [扩散策略的推理预算：步数、候选与重规划](../src/content/notes/diffusion-policy-test-time-compute.md) | 003, 024, 027 |
| [潜空间、扩散与 Flow Matching 分别改变了什么](../src/content/notes/diffusion-latent-flow-matching.md) | 074, 075, 090, 091, 100 |
| [基础模型、策略与世界模型不是同一层分类](../src/content/notes/foundation-policy-world-models.md) | 026, 063, 073, 085, 090, 102 |
| [从 Logit 到判断：概率、奖励与决策的边界](../src/content/notes/logits-rewards-decisions.md) | 071, 072, 078, 093 |
| [模型、Agent、Harness 与工作流怎样分工](../src/content/notes/agent-harness-boundaries.md) | 041, 045, 046, 084 |
| [自适应检索：何时查、查几次、何时停](../src/content/notes/adaptive-retrieval-routing.md) | 081 |
| [评测口径与消融：怎样让改进可解释](../src/content/notes/evaluation-protocol-ablation.md) | 004, 030, 055, 056, 070, 089 |
| [本地模型并发：共享权重、KV 缓存与延迟](../src/content/notes/inference-concurrency-memory.md) | 033 |
| [模型部署契约：导出文件之外还要保持什么](../src/content/notes/model-deployment-contracts.md) | 061, 062 |
| [文献检索覆盖：从找到论文到限定结论](../src/content/notes/literature-search-coverage.md) | 022, 092 |
| [导航候选轨迹：平均、选择与闭环执行](../src/content/research/navigation-candidate-decisions.md) | 062 |
| [镂空楼梯行走：如何比较盲走、高程图与点云](../src/content/research/perceptive-stair-locomotion.md) | 088, 102 |
| [VLM 缺陷识别：让工具调用补充可检查的证据](../src/content/research/vlm-evidence-tool-routing.md) | 031, 032, 084 |
| [用 AI 做研究与编程：保留理解、探索和验收](../src/content/writing/ai-collaboration-and-learning.md) | 049, 050, 052, 053, 080, 094 |
| [科研框架图：把箭头画成可检查的接口](../src/content/experience/research-diagrams-as-interfaces.md) | 005, 007, 008, 009, 010, 011, 012, 013, 014, 015, 017, 018, 020 |
| [从对话到知识：AI 与具身研究阅读地图](../src/content/writing/research-discussions-reading-guide.md) | 076 |

## 已有专题的关联

| 编号 | 现有页面 |
| --- | --- |
| 029 | [research/multimodal-overthinking](https://swanchann.github.io/research/multimodal-overthinking/) |
| 035 | [vlm](https://swanchann.github.io/vlm/) |
| 039 | [writing/why-i-am-building-a-personal-research-os](https://swanchann.github.io/writing/why-i-am-building-a-personal-research-os/) |
| 044 | [notes/personal-website-as-knowledge-base](https://swanchann.github.io/notes/personal-website-as-knowledge-base/) |
| 048 | [research/robotics-navigation-research-program](https://swanchann.github.io/research/robotics-navigation-research-program/) |
| 064 | [writing/robotics-research-debates-2026](https://swanchann.github.io/writing/robotics-research-debates-2026/) |
| 065 | [vlm](https://swanchann.github.io/vlm/) |
| 069 | [writing/dp4robots-visual-navigation](https://swanchann.github.io/writing/dp4robots-visual-navigation/) |
| 077 | [notes/personal-website-as-knowledge-base](https://swanchann.github.io/notes/personal-website-as-knowledge-base/) |
| 085 | [writing/supermimic-terrain-tracking-reflections](https://swanchann.github.io/writing/supermimic-terrain-tracking-reflections/) |

## 未公开的材料

下表只公布编号和筛选理由，不公开私人对话标题或内容。标为合并的对话也只取其中适合公开的部分。

| 编号 | 理由 |
| --- | --- |
| 001, 006, 038, 051, 060, 066, 067, 068, 082, 083, 086, 098, 099 | 私人信息、访问配置或排障日志；没有可独立公开的新研究内容 |
| 023, 034, 036, 037, 042, 047, 054, 079, 097 | 产品使用、额度与新闻类时效内容；不据历史回答发布当前结论 |
| 002, 016, 019, 021, 025, 028, 040, 043 | 零散操作、重复背景或与本次研究主线关系较弱 |
| 057, 058, 059, 087, 095, 096, 101 | 提问或片段不足以形成可靠专题；未补造论文分析或项目成果 |

## 关键更正与证据边界

- 003：TTS 在该讨论语境中指推理时扩展，不沿用最初误解为语音合成的回答。
- 033：请求可以共享服务中的模型权重；多请求不等于多个完整模型副本。
- 055、056、089：只整理评测与接口问题，不发布未经实验支持的目标达成率。
- 062：后期交接描述与前期假设冲突。文章明确记录并行候选、逐点平均与第三航点的后期描述，且标为未重新核代码；不据此证明平均导致失败。
- 071、072、093：只提炼输出与决策接口问题，不声称特定未核验系统具有确定性或优越性。
- 074、075、078、090、091、100、102 等：缺失回答不还原，相关基础解释由已核对资料重新整理。
- 081：只比较可定位并核对的 Adaptive-RAG 与 Probing-RAG，并链接已有 Answer Convergence。D2RAG 名称与所述机制没有可靠对应，不填补其细节，不声称原计划中的论文全部读完。
- 088：PPO 与观测表示不是并列分类；区分开放立面与栅格踏板，保留 sim-to-sim 范围。实验矩阵是本次编辑建议，不是已运行结果。
- 085：世界模型概念提问用于新笔记；项目进展仍指向原有 SuperMimic 文章。
- 历史讨论不充作当日日报；没有因文档中的旧要求创建定时任务。

## 网站接入

沿用 Content Collections、现有模板与草稿隔离。新增“生成模型与推理”标签主题；首页、导览、搜索、标签与相关内容从公开集合自动生成。导读内链接属于 Markdown 编辑内容，不在页面组件中维护文章登记表。

工程验证与发布结果见同目录的 `chat-curation-verification-2026-11-08.json`。构建与部署检查不等于研究实验复现。
