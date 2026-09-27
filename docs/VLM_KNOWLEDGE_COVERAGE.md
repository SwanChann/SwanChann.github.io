# VLM Knowledge Hub Coverage Matrix

本表审核的是**知识入口是否存在、是否讲到可用于研究判断的深度**，不宣称穷尽全部 VLM 文献。`Yes` 表示 2026-09-28 本地页面已有解释和可点击入口；`Partial` 表示有边界说明但尚缺专门案例或系统文献比较。`Core / Important / Advanced / Frontier` 是学习优先级，非科学证据等级。

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

19 个知识专题加 1 个资料索引，覆盖了入门研究所需的一级领域，并把视觉能力拆成 4 个可独立查阅的二级专题。Frontier 页对 multimodal RL、world model 和统一生成/理解仅建立概念入口；要进入这些方向，需要另建有来源的专题，而不是将其挤入总导航页。`My Research` 中没有可复算的实验结果，页面明确标为待验证。

## 维护规则

新增一级主题时先决定所属页面；若没有合适位置，新建专题。新增术语同步更新 Glossary；新增论文同步更新 Sources；声称某概念已覆盖时检查对应页面是否有定义、用途、常见误解和验证方法。此表随本地内容更新，不以构建通过替代学术核验。
