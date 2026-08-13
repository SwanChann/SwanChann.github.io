# PersonalWeb Architecture

## Architecture Principles

1. **Markdown-first**：长期内容保存在 `src/content/`，HTML 是可再生成的构建产物。
2. **Static-first**：Astro 在构建时生成完整站点；不依赖数据库、后端 API 或运行时服务。
3. **Content-first**：页面展示由 frontmatter 和正文驱动，新增内容不修改导航、首页或索引代码。
4. **Git-native**：内容修改通过普通文件 diff、commit、push 和 GitHub Actions 发布。
5. **Progressive complexity**：优先原生 Astro、CSS 和小函数；MDX、浏览器 JavaScript、第三方嵌入只在必要位置使用。
6. **Evidence-bounded**：样例、计划、工程验证和研究结果必须可区分；项目结构不替内容背书。

## Content Model

`src/content.config.ts` 使用 Astro 5 Content Layer API 和 `glob()` loader 定义五个 collection：

- `writing`：完整观点和长文。
- `notes`：低门槛知识单元，有有限的 `type` 枚举。
- `projects`：完整项目故事，外部链接均可选。
- `research`：按 `topic` 组织的研究问题、证据、实验和想法。
- `experience`：按 `category` 组织的已解决实践问题。

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

## Routing

Astro 文件路由生成：

```text
/
/writing/             /writing/[...slug]/
/notes/               /notes/[...slug]/
/projects/            /projects/[...slug]/
/research/            /research/[...slug]/
/experience/          /experience/[...slug]/
/tags/                /tags/[tag]/
/about/               /links/
/search/              /rss.xml
/404.html
```

动态详情页的 `getStaticPaths()` 直接读取 collection，因此新增 Markdown 后自动生成 URL。`src/utils/paths.ts` 集中处理 `import.meta.env.BASE_URL`，确保 GitHub Pages 项目子路径可用。

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
- `@astrojs/sitemap` 根据生产路由生成 sitemap，并自然排除未生成的 draft 路由。

## Deployment

`astro.config.mjs` 的规则：

1. 显式 `SITE_URL` / `BASE_PATH` 优先。
2. GitHub Actions 中，从 `GITHUB_REPOSITORY_OWNER` 和 `GITHUB_REPOSITORY` 推断 GitHub Pages origin。
3. `OWNER.github.io` 仓库使用 `/`；普通仓库使用 `/REPOSITORY`。
4. 本地无配置时使用安全 placeholder origin 和 `/`。

`.github/workflows/deploy.yml` 使用官方 Pages artifact 流程；build 和 deploy 分开，deploy job 拥有 `pages: write` 与 OIDC 所需权限。

## Configuration

- `src/config/site.ts`：姓名、站点文案、身份链接、预留 profile。
- `src/config/giscus.ts`：评论参数；四个标识不全时完全禁用。
- `src/data/now.ts`：首页 Now 数据。
- `.env.example`：本地或非 GitHub 环境的公开 origin / base 示例，不含 secret。
- `src/styles/global.css`：light/dark/system tokens、排版、布局、可访问性和响应式规则。

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
- TOC 使用 Astro 渲染得到的 headings；desktop sticky，窄屏回到正文前的折叠块。
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
