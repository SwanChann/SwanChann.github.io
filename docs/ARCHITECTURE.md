# PersonalWeb Architecture

## Architecture Principles

1. **Markdown-first**：长期内容保存在 `src/content/`，HTML 是可再生成的构建产物。
2. **Static-first**：Astro 在构建时生成完整站点；不依赖数据库、后端 API 或运行时服务。
3. **Content-first**：页面展示由 frontmatter 和正文驱动，新增内容不修改导航、首页或索引代码。
4. **Git-native**：内容修改通过普通文件 diff、commit、push 和 GitHub Actions 发布。
5. **Progressive complexity**：优先原生 Astro、CSS 和小函数；MDX、浏览器 JavaScript、第三方嵌入只在必要位置使用。
6. **Evidence-bounded**：样例、计划、工程验证和研究结果必须可区分；项目结构不替内容背书。

## Content Model

`src/content.config.ts` 使用 Astro 5 Content Layer API 和 `glob()` loader 定义七个 collection：

- `writing`：完整观点和长文。
- `notes`：低门槛知识单元，有有限的 `type` 枚举。
- `projects`：完整项目故事，外部链接均可选。
- `research`：按 `topic` 组织的研究问题、证据、实验和想法。
- `experience`：按 `category` 组织的已解决实践问题。
- `vlm`：按 `area`, `level`, `order` 组织的专题和资料索引，`related` 显式连接专题。
- `daily`：AI 日报，复用 dated schema；按 `date` 归档，`updated` 只记录修订。

共享 schema 提供 `title`, `description`, `updated`, `tags`, `status`, `draft`, `featured`, `aliases`。内容模型是稳定接口；修改它时需同步模板、样例、页面和 README。

## Content Collections

`src/utils/content.ts` 统一读取公开内容：

```text
getCollection()
→ dev 显示 draft / production 排除 draft
→ collection-specific sorting
→ ContentRecord normalization
→ page, tag, homepage, RSS, related content consumers
```

`ContentRecord` 是跨 collection 展示模型，只保留卡片、Tag 和 Related Content 需要的字段。正文仍由 Astro `render(entry)` 直接渲染，不复制到第二套数据源。

日期相同的条目使用稳定的 ID 次序（跨 collection 时包含 collection 名），避免 Windows 与 Linux 文件遍历顺序改变首页列表、主题导读和文章前后页。

## Routing

Astro 文件路由生成：

```text
/
/writing/             /writing/[...slug]/
/notes/               /notes/[...slug]/
/projects/            /projects/[...slug]/
/research/            /research/[...slug]/
/vlm/                 /vlm/[...slug]/
/experience/          /experience/[...slug]/
/daily/               /daily/[...slug]/       /daily/rss.xml
/tags/                /tags/[tag]/
/about/               /links/
/start-here/
/search/              /rss.xml
/404.html
```

动态详情页的 `getStaticPaths()` 直接读取 collection，因此新增 Markdown 后自动生成 URL。`src/utils/paths.ts` 集中处理 `import.meta.env.BASE_URL`，确保 GitHub Pages 项目子路径可用。

VLM 有独立知识导航而不是时间线索引：`src/pages/vlm/index.astro` 从 collection 读取专题卡片，`src/pages/vlm/[...slug].astro` 渲染 Markdown、目录、前后页和 `related` 链接。导航路径和系统链是少量稳定的学习路线数据；专题清单不硬编码在页面。Markdown 正文使用同级相对链接，Astro 构建后的根路径和 Pages 子路径均由 `scripts/check-vlm-links.py` 验证。VLM 暂不并入全站按日期排序的 `ContentRecord`，也不进入 Writing RSS；Pagefind 直接索引其详情正文。

总导航的阅读地图分模型基础、视觉能力和研究方法三条主线。概念插图保存在 `public/images/vlm/`，正文用带图注的 HTML figure 引用 `../../images/vlm/`，使根部署与项目子路径部署均能解析；样式限定在 `.vlm-detail .prose` 内。`scripts/check-vlm-rendering.py` 检查构建后的20个正文，排除代码块后检测残留的 `**`，同时验证图片路径、alt 和尺寸。中文紧接以括号结尾的加粗词组时，需保留闭合标记后的空格，遵守 [CommonMark 的 emphasis 规则](https://spec.commonmark.org/0.31.2/#emphasis-and-strong-emphasis)。这项检查验证 HTML 结构与资源路径，不能代替浏览器视觉核对。

## Search

`npm run build` 先运行 Astro，再运行：

```bash
pagefind --site dist
```

Pagefind 扫描最终 HTML，将索引和 UI bundle 写入 `dist/pagefind/`。内容详情用 `data-pagefind-body` 限制主体；Header、Footer、TOC、Related Content 和 Search 页面使用 `data-pagefind-ignore` 避免噪声。Search 页面从当前 base path 加载生成后的 bundle。

## SEO, RSS, and Sitemap

- `src/components/SEO.astro` 统一生成 title、description、canonical、Open Graph、Twitter Card 和 article 时间。
- canonical origin 来自 Astro `site`；GitHub Actions 可通过 `SITE_URL` repository variable 覆盖。
- `src/pages/rss.xml.ts` 生成公开 Writing feed。
- `src/pages/daily/rss.xml.ts` 生成独立日报 feed；空栏目输出零条 item。日报沿用生产 draft 过滤，进入标签、关联内容、Pagefind 和 sitemap。空栏目页面明确显示首期未发布，不生成虚构新闻。
- `@astrojs/sitemap` 根据生产路由生成 sitemap，并自然排除未生成的 draft 路由。

## Deployment

`astro.config.mjs` 的规则：

1. 显式 `SITE_URL` / `BASE_PATH` 优先。
2. GitHub Actions 中，从 `GITHUB_REPOSITORY_OWNER` 和 `GITHUB_REPOSITORY` 推断 GitHub Pages origin。
3. `OWNER.github.io` 仓库使用 `/`；普通仓库使用 `/REPOSITORY`。
4. 本地无配置时使用安全 placeholder origin 和 `/`。

`.github/workflows/deploy.yml` 使用官方 Pages artifact 流程；build 和 deploy 分开，deploy job 拥有 `pages: write` 与 OIDC 所需权限。

GitHub Pages 的 `build_type` 为 `workflow`，由这条 Astro 工作流发布。不要切回分支根目录的 legacy/Jekyll 模式，否则它会错误地把 `.astro` frontmatter 当作 YAML 解析。该设置在 2026-11-08 的改版发布中核对并修正。

## Configuration

- `src/config/site.ts`：姓名、站点文案、身份链接、预留 profile。
- `src/config/giscus.ts`：评论参数；四个标识不全时完全禁用。
- `src/data/now.ts`：首页 Now 数据。
- `src/data/topics.ts`：主题名称、说明及匹配标签；首页显示主题入口，`/start-here/` 从公开 Content Collections 自动选择文章，按 featured 优先排列并保留组内时间顺序。VLM 基础阅读入口按 Core 和 order 自动生成。
- `.env.example`：本地或非 GitHub 环境的公开 origin / base 示例，不含 secret。
- `src/styles/global.css`：light/dark/system tokens、纯色阅读布局、排版、可访问性和响应式规则。
- `public/images/star-sea-background.webp`：历史装饰背景资源，保留文件但已不再被 `BaseLayout` 引用或预加载。

## Related Content

`src/utils/related.ts` 实现无数据库的 shared-tags 算法：

1. 排除当前内容。
2. 对共享 tag 数计分。
3. 只保留至少一个共享 tag 的内容。
4. 先按分数、再按更新时间排序。
5. 最多返回六项，并按 collection 分组展示。

它是可解释的 V1 连接机制，不是语义搜索、backlink 或知识图谱。

## Design Decisions

- 不引入 React / Vue / Svelte；页面保持 Astro 静态 HTML。
- 浏览器 JavaScript 仅用于 theme、Pagefind 和启用后的 Giscus。
- theme 在 `<head>` 中先应用已保存值，减少首屏颜色闪烁；选择支持 `system`, `light`, `dark`。
- 阅读布局参考 Eugene Yan 的主题组织和 Lil’Log 的克制排版，采用纯色背景、低对比分隔线及系统字体。首页先提供阅读入口与最新文章，将个人近况置后；不使用示例项目作为首页精选内容。
- 列表标题先于说明和日期等元数据；`CollectionList` 支持完整卡片与 compact 列表，调用方可指定二级或三级标题。
- TOC 使用 Astro 渲染得到的 headings；desktop sticky 且独立滚动，窄屏在正文前显示原生折叠块，默认关闭。两个视图通过 CSS 互斥显示，均排除在 Pagefind 主体之外，不增加客户端脚本。
- 首页、页脚及链接页仅显示已确认的身份链接；未知邮箱与 CSDN 已从配置移除。可选 profile 和 Giscus 仍安全关闭。
- 系统字体保证离线可用和中英文覆盖，不依赖第三方字体 CDN。
- 不实现复杂 backlinks、知识图谱、analytics、CMS 或同步；这些属于未来独立决策。

## Change Protocol

架构修改完成前至少运行：

```bash
npm run check
npm run build
git diff --check
```

然后更新 `README.md`、本文件和 `PROJECT_STATE.md` 中受影响的事实。构建通过只说明网站工程验收通过，不说明样例内容或研究结论得到验证。
