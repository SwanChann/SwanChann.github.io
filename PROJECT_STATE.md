# Project State

- last_verified: 2026-08-13
- durable_goal: Build a maintainable Markdown-first, static-first personal web, digital garden, and research/engineering notebook that can be maintained primarily through content files for at least five years.
- success_criteria: The production build passes; required routes, search, RSS, sitemap, MDX, tags, related content, drafts, theme, optional Giscus, documentation, and GitHub Pages deployment are implemented without a backend or invented personal data.
- active_workstream: Evidence-backed Chinese content
- current_milestone: Eight evidence-backed Chinese writing topics published
- current_task: Replace or remove the remaining sample content in Projects, Research, Notes, Experience, and About when verified material is available.
- status: verified

## Milestones

1. [verified] Established the Git repository and Node-compatible Astro dependency baseline.
2. [verified] Implemented the design system, layouts, centralized configuration, and five content collections.
3. [verified] Implemented required routes, automatic indexes, cross-collection tags, and related content.
4. [verified] Integrated Pagefind, RSS, sitemap, optional Giscus, and GitHub Pages deployment.
5. [verified] Added explicitly labeled sample content, authoring templates, a content generator, and maintenance documentation.
6. [verified] Verified types, production output, root and project-repository base paths, links, search, theme persistence, and responsive rendering.
7. [verified] Published the site through GitHub Actions to `https://swanchann.github.io/`.
8. [verified] Added a responsive starry-ocean background with light/dark readability overlays and published it.
9. [verified] Converted the complete public interface and all sample content to Chinese, removed any language-switching scope, and published the verified build.
10. [verified] Reconstructed all eight projects in the supplied 102-task CSV from local Codex conversations and project evidence, added one chronological multi-Part Chinese Writing article per project, and published the complete Writing layer.

## Verified Facts

- `F:\codespace\PersonalWeb` was empty when inspected on 2026-08-13.
- The directory was not a Git repository when inspected.
- Local runtimes: Node v20.15.1, npm 10.7.0, Git 2.44.0.windows.1.
- The user authorized using the active local GitHub account `SwanChann` to create and publish this website repository on 2026-08-13.
- `SwanChann/SwanChann.github.io` did not exist when checked immediately before publication.
- The public repository is `https://github.com/SwanChann/SwanChann.github.io`; local `main` tracks `origin/main` over HTTPS.
- GitHub Actions run `31662024315` completed both the build and deploy jobs successfully.
- Live verification returned HTTP 200 for the homepage, Pagefind JavaScript, and RSS; the homepage contains the expected title, GitHub profile, and canonical site URL.
- The generated starry-ocean background was saved as a 1536x1024 WebP at `public/images/star-sea-background.webp` and compressed to 158,728 bytes.
- Local production build and browser screenshots verified the background in light, dark, and 600px narrow layouts; text remained readable and the narrow layout did not show horizontal clipping.
- GitHub Actions run `31662851401` completed both build and deploy jobs successfully for commit `5e49378`.
- Live verification returned HTTP 200 for the updated homepage and background; the public asset was served as `image/webp` with the expected 158,728-byte size, and a live dark-theme screenshot showed the new background behind readable content.
- Installed baseline: Astro 5.15.9, TypeScript 5.9.3, Pagefind 1.5.2, `@astrojs/mdx` 4.3.9, `@astrojs/rss` 4.0.13, `@astrojs/sitemap` 3.6.1.
- `npm run check` completed with 0 errors, 0 warnings, and 0 hints; `npm run build` generated 28 static pages plus RSS, sitemap, and a Pagefind index for 7 public content pages.
- The production build excludes `src/content/notes/draft-example.md`; the route, tags, relations, RSS, sitemap, and search index contain no draft entry.
- GitHub Pages project-repository simulation generated `/personal-site/` links, canonical URLs, sitemap URLs, and Pagefind bundle/base configuration correctly.
- Browser verification at 375, 768, and 1440 CSS pixels found no document-level horizontal overflow; mobile navigation, light/dark/system behavior, theme persistence, and Pagefind results were exercised.
- Generated-site link checks covered 830 internal references in both root and project-base builds with 0 missing targets.
- The public HTML language, Open Graph locale, Giscus locale, navigation, status labels, dates, search controls, page metadata, RSS title, and all seven public sample entries now use Chinese; technical names such as Astro, Markdown, GitHub, CSDN, Pagefind, VLM, and AI Agent remain as product or domain terms.
- The latest local `npm run check` completed with 0 errors, 0 warnings, and 0 hints; `npm run build` generated 28 pages and a single `zh-cn` Pagefind index covering 7 public pages while excluding the draft route.
- Local Pagefind queries returned Chinese results for `导航`, `具身`, and `研究`; browser screenshots verified the Chinese homepage and search interface against the starry-ocean background.
- GitHub Actions run `31663941525` completed both build and deploy jobs successfully for commit `77429f1`.
- Live verification returned HTTP 200 for the homepage, Chinese search page, Pagefind JavaScript, and starry-ocean WebP. The homepage declares `zh-CN`, contains the expected Chinese introduction, exposes no English navigation labels, and a live browser screenshot confirmed the rendered Chinese page.
- The supplied UTF-8 BOM CSV has SHA-256 `1DC10FD691F77861490F5AA973C29968C42F5C126B205349B99D738880FEA419`, 102 task rows, and eight distinct projects spanning recorded creation dates from 2026-05-25 through 2026-08-12; two power-grid tasks have no creation date.
- The new Writing layer contains eight public articles and 38 chronological Parts: AIResearchOS, AI 工作流研究, 毕业设计, DP4Robots, 学业必做, 扬州电网缺陷检测, 追热点, and 做计划 with AI.
- Article claims were cross-checked against selected local Codex sessions and current evidence in `ResearchOS`, `AI工作流研究`, `VLM-defect`, `visualnav-transformer`, and `F:\实验室\计划`. Missing, Doing, Inbox, Waiting, mock, smoke, and NO-GO states remain explicitly bounded in the prose.
- The task CSV is a user-provided untracked source file and remains untouched. The articles do not expose its private Notion URLs or unnecessary personal administrative details.
- After the content change, `npm run check` completed with 0 errors, 0 warnings, and 0 hints. `npm run build` generated 60 pages; Pagefind indexed 14 public content pages in one `zh-cn` index.
- RSS contains all eight Writing entries, the draft example remains absent from production output, and local Pagefind queries returned results for `电网缺陷` (2), `ResearchFlow` (1), `周报` (2), and `视觉导航` (1).
- Pull request `#1` merged the article batch into `main` as commit `9b4dbf36e9ea2564262241a341d1517ef2dc0a60`; GitHub Actions run `31673604992` completed both build and deploy successfully.
- Live checks returned HTTP 200 for the Writing index, all eight article routes, RSS, and Pagefind JavaScript. The index linked all eight slugs, the power-grid article contained its title and Part 8, and the live RSS contained eight items.

## Decisions

- Use Astro-native components and static output; add client JavaScript only for theme, search, and optional comments.
- Keep all identity links and personal placeholders in one site configuration module.
- Treat all sample content as explicit placeholder material; do not infer research results or account details.
- Pin Astro 5 rather than installing Astro 7 because the verified local Node 20.15.1 runtime does not meet Astro 7's Node requirement.
- Use Pagefind 1.5 Component UI so the search interface is accessible, filterable by content section, and explicitly aware of the deployment base path.
- Treat the starry-ocean image as a fixed decorative layer, resolve it through `withBase()`, and use separate light/dark tint tokens rather than altering content markup.
- Keep the public experience Chinese-only for now. Preserve existing English URL paths and schema enum identifiers as stable code contracts, while rendering their labels in Chinese.
- Treat the CSV as a chronological index, not sufficient scientific evidence. Use local conversations to recover decisions and current project artifacts to verify metrics and status.
- Map each CSV project to one Writing article, and split that article into chronological Parts according to research phase rather than creating one page per task.
- Preserve incomplete topics as incomplete public retrospectives instead of filling gaps with inferred research content; sanitize the academic-transition topic to avoid exposing unnecessary personal records.

## Risks And Unknowns

- CSDN URL, email, custom domain, and Giscus IDs are unknown and must remain placeholders or disabled. The GitHub account and public site URL have been verified separately.
- Astro build emits one upstream Vite unused-import warning from Astro's `remotePattern.js`; it does not originate in project code and does not affect the successful static build.
- CSDN and email still use visibly labeled placeholders; Giscus remains safely disabled because no repository/category IDs have been configured.
- Notes, Projects, Research, Experience, and the About biography still include explicit sample or placeholder content; the eight Writing entries are now evidence-bounded personal project retrospectives.
- The two power-grid tasks without creation dates can only be placed by experiment phase, not by an exact day.
- The hotspot-tracking project remains an Inbox item with no completed paper analysis; its article records that boundary rather than supplying a retrospective result.

## Next Step And User Decision

- Next step: replace or remove the remaining sample Projects, Research, Notes, Experience, and About text, then configure CSDN or email only after those public details are provided.
- User decision: provide the next verified content or identity fields that should become public. A custom domain and Giscus remain optional and unconfigured.
