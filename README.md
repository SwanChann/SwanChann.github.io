# Personal Web

这是一个可长期维护的 **Personal Web + Digital Garden + Research / Engineering Notebook**。内容以 Markdown / MDX 为主库，Astro 在构建时自动生成页面、标签、关联内容、RSS、Sitemap 和 Pagefind 全文索引；不需要数据库、后台或手工登记文章。

当前仓库中的个人链接和正文是明确标注的 placeholder。发布前先完成[首次配置](#首次配置)，再删除或改写样例内容。

## 技术栈

- Astro `5.15.9`，静态输出
- TypeScript `5.9.3`
- Markdown / MDX 与 Astro Content Layer API
- Pagefind `1.5.2` 静态全文搜索
- Astro RSS `4.0.13`
- Astro Sitemap `3.6.1`
- GitHub Pages 与 GitHub Actions
- 原生 Astro 组件、CSS Variables、少量必要浏览器 JavaScript

Astro 版本不是 registry 当前最高主版本：本项目创建时本机为 Node `20.15.1`，Astro 7 要求 Node `>=22.12.0`。当前组合已按实际 Node engine 约束选择并验证；GitHub Actions 使用 Node 22。

## 本地开发

要求 Node `>=20.3.0` 和 npm `>=9.6.5`。

```bash
npm install
npm run dev
```

Astro 开发服务器会显示 `draft: true` 的内容，并标记为 local-only。Pagefind 只在生产构建后生成，因此开发服务器中的搜索页会提示先构建。

## 检查与构建

```bash
npm run check
npm run build
npm run preview
```

`npm run build` 依次执行：

```text
Astro 类型与内容检查
→ Astro 静态构建
→ Pagefind 为 dist/ 建立全文索引
```

用 `npm run preview` 打开构建产物后，可以验证真实搜索。`dist/` 和 `node_modules/` 已加入 `.gitignore`。

## 内容模型

| Collection | 目录 | 用途 | 特有字段 |
| --- | --- | --- | --- |
| Writing | `src/content/writing/` | 形成完整观点的长文 | `date` |
| Notes | `src/content/notes/` | TIL、命令、概念、调试、论文小记 | `date`, `type` |
| Projects | `src/content/projects/` | 问题、架构、实现、结果与教训 | `startDate`, `endDate`, `github`, `demo`, `paper` |
| Research | `src/content/research/` | 方向、问题、论文、实验、想法 | `date`, `topic` |
| Experience | `src/content/experience/` | 真实遇到并解决的问题 | `date`, `category` |

所有 collection 共享：

- `title`, `description`
- `tags`: 跨 Writing / Notes / Projects / Research / Experience 连接内容
- `status`: `seed`, `growing`, `mature`, `evergreen`
- `draft`: 生产环境是否隐藏
- `featured`: 首页或列表的精选信号
- `updated`, `aliases`（可选）

完整 schema 在 `src/content.config.ts`。模板在 `docs/content-templates/`，不会被 Astro 当作正式内容发布。

## Digital Garden 状态

- `seed`：刚记录的想法，允许很短。
- `growing`：仍在持续补充和修正。
- `mature`：结构和证据已经比较完整。
- `evergreen`：需要长期维护的核心知识页。

状态只表达内容成熟度，不代表事实可信度或研究质量。研究结论仍需单独给出数据、方法和证据。

## 添加 Writing

可以复制 `docs/content-templates/writing.md`，也可以运行：

```bash
npm run new:writing -- "Why Research Needs an OS"
```

生成的文件默认 `draft: true`：

```yaml
---
title: "Why Research Needs an OS"
description: "Thoughts on building a personal AI-assisted research workflow."
date: 2026-08-13
updated: 2026-08-13
tags:
  - Research OS
  - AI Agent
status: growing
draft: false
featured: true
---
```

保存到 `src/content/writing/your-slug.md` 后，会自动进入 Writing、Tags、搜索、RSS、首页 Latest Writing 和相关内容计算，不需要修改页面代码。

## 添加 Note

```bash
npm run new:note -- "Agent Harness"
```

```yaml
---
title: "Agent Harness"
description: "A short concept note."
date: 2026-08-13
updated: 2026-08-13
type: concept
tags:
  - AI Agent
status: seed
draft: false
featured: false
---
```

`type` 可选值：`til`, `debug`, `paper`, `tool`, `concept`, `learning`, `setup`。

## 添加 Project

```bash
npm run new:project -- "Project Name"
```

Project 的 `github`, `demo`, `paper`, `startDate`, `endDate` 都是可选字段。首页 Selected Projects 自动读取 `featured: true` 且非 draft 的项目。

```yaml
---
title: "Project Name"
description: "The problem and scope in one sentence."
updated: 2026-08-13
status: growing
featured: true
tags:
  - Robotics
draft: false
startDate: 2026-01-01
# github: https://github.com/YOUR_GITHUB_USERNAME/REPOSITORY
---
```

## 添加 Research

```bash
npm run new:research -- "Embodied Navigation"
```

Research 必须填写 `topic`，正文适合组织研究问题、证据、阅读路径、实验和想法。不要把计划或工程 smoke test 写成已完成的科研成果。

## 添加 Experience

```bash
npm run new:experience -- "How I Fixed the Problem"
```

`category` 可选值：`debugging`, `deployment`, `environment`, `workflow`, `tooling`, `infrastructure`。Experience 应记录真实问题、诊断证据、解决过程和验证；短小的新发现更适合 Notes。

## Markdown 与 MDX

普通内容优先 `.md`。只有需要内容组件时才使用 `.mdx`：

```mdx
import ExperimentResult from '../../components/ExperimentResult.astro';

<ExperimentResult
  label="Evaluation"
  successRate={0.87}
  fps={12.4}
  sample={false}
/>
```

示例 Writing 已证明 MDX 可以构建。真实指标必须同时说明数据集、分母、评估协议和证据路径。

## Draft、排序与关联内容

- 本地开发显示 draft；生产构建不生成 draft 路由，也不会将其放入列表、Tag、Related Content、RSS、Sitemap 或 Pagefind。
- Writing 按 `date` 降序；Notes / Research / Experience 按 `updated` 优先、否则按 `date`；Projects 先展示 featured，再按 `startDate`。
- Related Content 使用最简单的 shared-tags 分数；同标签越多越靠前，相同分数按最近更新时间排序。

## 首次配置

先修改三个位置：

1. `src/config/site.ts`：姓名、标题、简介、GitHub、CSDN、Email 和可选身份入口。
2. `src/data/now.ts`：当前 Working on / Learning / Building。
3. `src/content/`：删除或改写所有带 `Sample / Placeholder` 的样例。

`src/config/site.ts` 是页面身份信息的唯一来源。`astro.config.mjs` 中的生产 origin / base path 由部署环境变量控制，因为 Astro 配置在构建发生前执行。

本地模拟某个公开地址时，可复制 `.env.example` 为 `.env`：

```dotenv
SITE_URL=https://YOUR_GITHUB_USERNAME.github.io
BASE_PATH=/personal-site
```

不要把 secret 写入 `.env`；本项目不需要部署 secret。

## 首页数据来源

- Now：`src/data/now.ts`
- Selected Projects：Projects 中 `featured: true`
- Latest Writing：最新公开 Writing
- Recent Notes：最近更新的公开 Notes
- 身份链接：`src/config/site.ts`

因此添加内容不需要修改 `src/pages/index.astro`。

## 站点背景

- 背景资产：`public/images/star-sea-background.webp`
- 路径与预加载：`src/layouts/BaseLayout.astro`
- 浅色 / 深色遮罩：`src/styles/global.css` 中的 `--backdrop-tint-*` tokens

替换背景时可以保留同一文件名；推荐使用经过压缩的 WebP，并在浅色、深色和窄屏视口下重新检查文字可读性。背景是装饰层，不承载需要辅助技术读取的信息。

## Search

Pagefind 在 `npm run build` 的最后一步扫描 `dist/`。搜索页为 `/search/`，索引范围包括公开的 Writing、Notes、Projects、Research 和 Experience。页面通过构建后的 `pagefind/pagefind-component-ui.js` 加载真实静态索引，并可按内容类型过滤；没有假的前端过滤器。

GitHub Pages 的项目仓库 base path 由 `astro.config.mjs` 和 `src/utils/paths.ts` 统一处理，Pagefind bundle 也从同一个 base path 加载。

## Giscus

Giscus 只预留给 Writing。默认配置为空，不加载脚本、不显示评论，也不会报错。

启用步骤：

1. 在目标公开 GitHub 仓库启用 Discussions。
2. 安装并授权 [Giscus App](https://github.com/apps/giscus)。
3. 在 [giscus.app](https://giscus.app/) 选择仓库和 Discussion category。
4. 将生成配置中的 `repo`, `repoId`, `category`, `categoryId` 填入 `src/config/giscus.ts`。
5. 保持 `mapping: 'pathname'`，然后运行 `npm run build`。

不要填写假的 ID。四个必填值中任何一个为空时，评论保持禁用。

## RSS 与 Sitemap

- Writing RSS：`/rss.xml`
- Sitemap index：构建输出中的 `/sitemap-index.xml`

两者只包含生产环境实际发布的内容。Sitemap 由 `@astrojs/sitemap` 根据最终 `site` 和 `base` 生成。

## GitHub Pages 部署

`.github/workflows/deploy.yml` 在 `main` push 或手动触发时执行 `npm ci → npm run build → upload → deploy`。

1. 在 GitHub 创建空仓库并把本地仓库连接、推送；本项目没有代替你执行远程操作。
2. 仓库进入 **Settings → Pages → Build and deployment**。
3. 将 Source 设为 **GitHub Actions**。
4. 确认默认分支为 `main`。
5. push 后在 Actions 中查看 `Deploy to GitHub Pages`。

两种 GitHub Pages 仓库会自动识别：

- `YOUR_GITHUB_USERNAME.github.io`：`https://YOUR_GITHUB_USERNAME.github.io/`，base 为 `/`。
- 普通仓库 `personal-site`：`https://YOUR_GITHUB_USERNAME.github.io/personal-site/`，base 为 `/personal-site`。

workflow 当前使用 GitHub 官方 Actions 主版本：`actions/checkout@v7`, `actions/setup-node@v7`, `actions/configure-pages@v6`, `actions/upload-pages-artifact@v5`, `actions/deploy-pages@v5`。

## Custom Domain

有域名以后再执行：

1. 在仓库 **Settings → Pages → Custom domain** 填入域名。
2. 按 GitHub 提示设置 DNS：apex 域名通常使用 GitHub Pages 的 A/AAAA 记录；子域名通常以 CNAME 指向 `YOUR_GITHUB_USERNAME.github.io`。以 GitHub 当时显示的官方值为准。
3. 在仓库 **Settings → Secrets and variables → Actions → Variables** 新建：
   - `SITE_URL=https://example.com`
   - `BASE_PATH=/`
4. 可将仅包含域名的 `public/CNAME` 提交到仓库；当前没有创建，因为真实域名未知。
5. DNS 生效后在 Pages 设置启用 **Enforce HTTPS**。
6. 重新构建并检查 canonical、RSS 和 Sitemap 是否指向新域名。

## 隐私与分析

V1 没有广告、Google Analytics、Cookie、登录或用户追踪。以后确有需要时可以单独评估 Cloudflare Web Analytics、Plausible 或 Umami；当前架构不依赖它们。

## 主要目录

```text
src/
├── components/          # Astro UI、SEO、TOC、Giscus、内容卡片
├── config/              # 站点身份与可选 Giscus
├── content/             # Markdown / MDX 内容主库
├── data/                # Now 等小型结构化数据
├── layouts/             # 全站与内容详情布局
├── pages/               # 路由入口
├── styles/              # Design Tokens 与全局排版
└── utils/               # 路径、排序、标签、关联内容、日期
docs/
├── ARCHITECTURE.md
└── content-templates/
scripts/
└── new-content.mjs
```

架构细节见 `docs/ARCHITECTURE.md`；未来 Agent 约束见 `AGENTS.md`；当前项目里程碑见 `PROJECT_STATE.md`。

## 样例内容

以下内容都明确标记为 `Sample / Placeholder`，没有虚构个人经历或科研成果：

- Writing：Why I Am Building a Personal Research OS（MDX）
- Notes：TIL: A Personal Website Can Be a Knowledge Base；Draft Content Example
- Projects：Personal Research OS；Quadruped Visual Navigation；Power Grid VLM
- Research：Embodied Navigation
- Experience：Building a Markdown-First Personal Website

发布个人网站前，可以直接删除这些文件，再用模板或 `npm run new:*` 创建真实内容。
