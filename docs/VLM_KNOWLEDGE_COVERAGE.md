# VLM Knowledge Hub Coverage Matrix

本表审核的是**知识入口是否存在、是否讲到可用于研究判断的深度**，不宣称穷尽全部 VLM 文献。`Yes` 表示 2026-10-08 本地页面已有解释和可点击入口；`Partial` 表示有边界说明但尚缺完整实现推导或系统文献比较。`Core / Important / Advanced / Frontier` 是学习优先级，非科学证据等级。

| Domain | Concept | Page | Covered | Depth |
|---|---|---|---|---|
| Foundations | Vision model / VLM / MLLM | `/vlm/foundations/` | Yes | Core |
| Foundations | CNN / ViT / classification / detection / segmentation | `/vlm/foundations/` | Yes | Core |
| Foundations | CLIP / contrastive learning / zero-shot | `/vlm/foundations/` | Yes | Core |
| Foundations | LLM token / embedding / generation | `/vlm/foundations/` | Yes | Core |
| Foundations | Historical transition and its purpose | `/vlm/foundations/` | Yes | Core |
| Architecture | Visual preprocessing | `/vlm/architecture/` | Yes | Core |
| Architecture | Vision encoder / patch / feature map | `/vlm/architecture/#vision-encoder` | Yes | Core |
| Architecture | Resolution / tiling / crop / multi-scale | `/vlm/architecture/#resolution` | Yes | Core |
| Architecture | Visual token versus text token | `/vlm/architecture/#visual-token` | Yes | Core |
| Architecture | Projector / MLP / Q-Former / resampler | `/vlm/architecture/#connector-and-fusion` | Yes | Core |
| Architecture | Token concatenation / cross-attention / fusion | `/vlm/architecture/#connector-and-fusion` | Yes | Core |
| Architecture | LLM backbone / model families | `/vlm/architecture/` | Yes | Core |
| Representation | Pixel / local / global / semantic features | `/vlm/visual-representation/` | Yes | Core |
| Representation | Geometric / spatial / positional information | `/vlm/visual-representation/` | Yes | Core |
| Representation | Compression / information bottleneck | `/vlm/visual-representation/` | Yes | Core |
| Representation | Information present versus information used | `/vlm/visual-representation/` | Yes | Core |
| Training | Vision encoder pretraining | `/vlm/training/` | Yes | Core |
| Training | Vision-language alignment / multimodal pretraining | `/vlm/training/` | Yes | Core |
| Training | Instruction tuning / SFT | `/vlm/training/` | Yes | Core |
| Training | RLHF / DPO / reward-based post-training | `/vlm/training/` | Yes | Important |
| Training | Image-caption / interleaved / text-only mixture | `/vlm/training/` | Yes | Core |
| Training | OCR / document / chart / spatial / synthetic / video / trajectory data | `/vlm/training/` | Yes | Important |
| Capability | Recognition / fine-grained / attributes | `/vlm/visual-perception/` | Yes | Core |
| Capability | Counting / comparison | `/vlm/visual-perception/` | Yes | Core |
| Capability | OCR / document / chart / diagram | `/vlm/text-grounding/` | Yes | Core |
| Capability | Localization / referring / grounding | `/vlm/text-grounding/` | Yes | Core |
| Capability | Object relation / scene understanding | `/vlm/visual-perception/` | Yes | Core |
| Capability | 2D spatial / orientation / rotation | `/vlm/spatial-3d/` | Yes | Core |
| Capability | Depth / 3D / geometry | `/vlm/spatial-3d/` | Yes | Important |
| Capability | Multi-image / video / temporal | `/vlm/temporal-reasoning/` | Yes | Important |
| Capability | GUI visual understanding | `/vlm/text-grounding/` | Yes | Important |
| Capability | Compositional visual reasoning | `/vlm/temporal-reasoning/` | Yes | Core |
| Perception vs reasoning | Error decomposition / earliest observable error | `/vlm/perception-reasoning/` | Yes | Core |
| Perception vs reasoning | Grounding versus spatial versus language mapping errors | `/vlm/perception-reasoning/` | Yes | Core |
| Perception vs reasoning | Faithfulness of explanation / CoT | `/vlm/perception-reasoning/` | Yes | Core |
| Failure | Hallucination / visual neglect / semantic prior | `/vlm/failure-modes/` | Yes | Core |
| Failure | Small object / OCR / grounding / spatial error | `/vlm/failure-modes/` | Yes | Core |
| Failure | Prompt sensitivity / shortcut / instability | `/vlm/failure-modes/` | Yes | Core |
| Failure | Stable-but-wrong / asymmetric bias / calibration | `/vlm/failure-modes/` | Yes | Core |
| Inference | Prompt / CoT / visual prompting | `/vlm/inference/` | Yes | Important |
| Inference | Crop / zoom / ROI / multi-view | `/vlm/inference/` | Yes | Important |
| Inference | Repeated inference / self-consistency / test-time scaling | `/vlm/inference/` | Yes | Important |
| Inference | External OCR / detector / segmenter | `/vlm/inference/` | Yes | Important |
| Inference | Flip / rotation / scale / contrast | `/vlm/inference/` | Yes | Core |
| Inference | Training-free diagnosis / enhancement / correction | `/vlm/inference/` | Yes | Important |
| Evaluation | Dataset / task / sample / annotation / ground truth | `/vlm/evaluation/` | Yes | Core |
| Evaluation | Prompt / inference / evaluator / aggregation | `/vlm/evaluation/` | Yes | Core |
| Evaluation | Accuracy / exact match / F1 / recall / IoU | `/vlm/evaluation/` | Yes | Core |
| Evaluation | LLM-as-a-Judge / human evaluation | `/vlm/evaluation/` | Yes | Core |
| Evaluation | Pairwise / category / capability profile | `/vlm/evaluation/` | Yes | Core |
| Evaluation | Contamination / saturation / judge bias / stochasticity | `/vlm/evaluation/` | Yes | Core |
| Evaluation | General / perception / spatial / visual pattern / hallucination / GUI benchmarks | `/vlm/evaluation/` | Yes | Important |
| Research | Benchmark / diagnosis / capability / failure / bias | `/vlm/research-paradigms/` | Yes | Core |
| Research | Scaling / architecture / data-centric | `/vlm/research-paradigms/` | Yes | Core |
| Research | Training / post-training / inference-time / training-free | `/vlm/research-paradigms/` | Yes | Core |
| Research | Probing / activation / causal intervention | `/vlm/research-paradigms/` | Yes | Advanced |
| Research | Agentic / GUI / embodied / VLA | `/vlm/research-paradigms/` | Yes | Important |
| Research question | Anecdote / phenomenon / pattern / bias | `/vlm/research-question/` | Yes | Core |
| Research question | Hypothesis / mechanism / falsification / contribution | `/vlm/research-question/` | Yes | Core |
| Paper reading | Problem / gap / observation / method / evidence | `/vlm/paper-reading/` | Yes | Core |
| Paper reading | Ablation / generalization / reading template | `/vlm/paper-reading/` | Yes | Core |
| Frontier | High-resolution / long context / video | `/vlm/frontiers/` | Yes | Frontier |
| Frontier | Native / unified multimodal / multimodal RL | `/vlm/frontiers/` | Partial | Frontier |
| Frontier | Spatial intelligence / VLA / world models | `/vlm/frontiers/` | Partial | Frontier |
| Frontier | Tool-augmented perception / multimodal agents | `/vlm/frontiers/` | Yes | Frontier |
| Glossary | Core architecture, capability, training and evaluation terms | `/vlm/glossary/` | Yes | Core |
| Personal research | Observation / hypothesis / open question / result separated | `/vlm/my-research/` | Yes | Frontier |

## 审核结论

2026-10-08 根据读者反馈更新全部20个内容页及总导航：先给具体情境，再解释概念与步骤，最后给速查和研究判断。教学计算、反事实例子和假想论文明确标注；每页有自检或阅读练习。`Covered=Yes` 只表示有知识入口；读者是否理解还需根据反馈检查，不能由概念出现次数或构建通过推断。

19 个知识专题加 1 个资料索引，覆盖了入门研究所需的一级领域，并把视觉能力拆成4个可独立查阅的二级专题。Frontier 页通过任务与原论文展开 multimodal RL、world model 和统一生成/理解的含义与验证要求，但不包含完整文献比较或实现推导，因此仍有 Partial 项。`My Research` 中没有可复算的实验结果，页面明确标为待验证。

## 本轮讲解深度逐页审核

本表审核具体讲解是否存在，不宣称读者理解已被测试。计数包括所有20个内容文件；总导航另有阅读说明。

| 页面 | 贯穿情境或学习练习 | 展开的核心步骤/差别 | 理解检查 |
|---|---|---|---|
| Foundations | 猫图分类、匹配、问答 | 像素—特征—分类头；CLIP与生成 | 5道自检 |
| Architecture | 红项圈颜色问题 | 预处理、patch、向量、投影、融合、生成 | 解释各环节输入输出 |
| Visual representation | 红蓝项圈与箭头 | 语义/几何；可读出/使用/解释 | probe成功是否等于使用 |
| Training | 同图配不同训练目标 | 参数/激活/冻结；五类训练与数据 | 冻结与奖励边界 |
| Capabilities | 两只猫与标牌的综合题 | 子技能依赖与能力剖面 | 图表错误怎样拆分 |
| Visual perception | 认猫、属性、计数、比较 | 逐项能力所需线索与混杂 | 定位与属性绑定 |
| Text grounding | 文字、表格、按钮 | OCR/版面/定位/指代/行动 | 人工OCR的归因边界 |
| Spatial 3D | 箭头、猫球、杯子视角 | 坐标、方向、深度、等变/不变 | 翻转任务标签规则 |
| Temporal reasoning | 猫图、事件视频、折线图 | 对应、采样、检索、前提与计算 | 关键帧是否进入输入 |
| Perception reasoning | 带端点坐标的箭头 | 目标/端点/关系/输出；解释忠实性 | 正确事实对照的边界 |
| Failure modes | 同图重复与平衡方向题 | 幻觉、忽略、摇摆、偏差、校准 | 个案与系统偏差 |
| Inference | 改提示、裁剪、工具、翻转 | 新证据、计算、聚合、诊断 | 重复与新视角的区别 |
| Evaluation | 一道箭头题到统计结果 | 任务、真值、解析；指标实际计算 | precision/recall及总分 |
| Research paradigms | 同一方向错答的多条路线 | 各范式问题、实验与贡献 | 无新模型的诊断价值 |
| Research question | 可复查个案到限定问题 | 验证、边界、预测、反证、贡献 | 方法想法与问题区别 |
| Frontiers | 猫图到视频、操作与预测 | 各方向缺口、新输入输出、验证 | 生成与闭环证据区别 |
| Paper reading | 假想局部放大论文 | 问题/假设/方法/消融/泛化 | 涨分与原因解释区别 |
| Glossary | 每个原有条目补实例 | 40个条目与完整解释链接 | 用词前解释具体含义 |
| My research | 已有转述如何核实 | 印象转成可测量；观察/假设/结果 | 缺原始记录的证据等级 |
| Sources | 三条问题导向阅读路线 | 原论文怎样支持限定主张 | 引用支持哪个具体句子 |

## 维护规则

新增一级主题时先决定所属页面；若没有合适位置，新建专题。新增术语同步更新 Glossary；新增论文同步更新 Sources；声称某概念已覆盖时检查对应页面是否有定义、用途、常见误解和验证方法。此表随本地内容更新，不以构建通过替代学术核验。
