# Project State

- last_verified: 2026-11-08
- durable_goal: Build a maintainable Markdown-first, static-first personal web, digital garden, and research/engineering notebook that can be maintained primarily through content files for at least five years.
- success_criteria: The production build passes; required routes, search, RSS, sitemap, MDX, tags, related content, drafts, theme, optional Giscus, documentation, and GitHub Pages deployment are implemented without a backend or invented personal data.
- active_workstream: Refine public article copy and topic navigation
- current_milestone: Present articles by topic without editorial-process introductions
- current_task: Public copy and classification labels verified locally; publication pending.
- status: in_progress

## Public Copy Revision 2026-11-08

- Public navigation, homepage and /start-here/ use 文章分类; route paths remain stable.
- Article introductions, summaries and topic index describe subject matter directly; editorial-process narratives were removed. External paper citations and unverified-research limitations remain intact.
- Verified: Astro check (52 files, zero errors/warnings/hints), production build (119 pages, 59 search entries), 5,782 internal links, all generated HTML scanned for obsolete wording, all changed articles retain external citations, and 15 desktop/mobile route checks with updated search titles.
- Publication: pending.

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
11. [published and live-verified] Added an Astro Content Collection based VLM Knowledge Hub with a map page, 19 knowledge pages plus one source index, cross-links, glossary, independent personal research observations, coverage matrix, and link checks. Published from commit `fc37fa0` through GitHub Pages run `36333636814`.
12. [published and live-verified] Expanded all 20 VLM content pages and the index with concrete teaching examples, intermediate steps, and comprehension checks; added examples and reading links to all 40 glossary entries and problem-guided source reading routes. Content commit `ef0f62d` deployed successfully through GitHub Pages run `37720199435`; all 21 live routes matched the updated local content.
13. [published and live-verified] Refined all 20 VLM pages and navigation with a formal reading map and concept-focused openings; generated and manually inspected four AI teaching illustrations for nine concept placements; fixed 32 failed strong-emphasis pairs across 11 pages and added a built-output regression checker. Content commit `a183c36` deployed through GitHub Pages run `38128789592`; all 21 live routes matched local visible text and all four live image files matched local bytes.

14. [published and live-verified] Published the SuperMimic terrain-tracking research reflection in Writing and a 16-page 1080x1440 PNG download, with identical article body content and a separate experimental result summary. Content commit `8e91b39`, successful Astro deployment run `41770025028`. This is a publication deliverable, not a new robotics experiment.

15. [verified] Implemented and published the reading redesign, topic guide and responsive article outline. Passed root/subpath builds, 40 browser route/viewport checks and final live page/asset comparisons; final code commit `5bae284`, successful Astro workflow `42460846625`.

16. [verified] Replaced six public sample entries and About copy; published five paper notes and one research synthesis from accessible saved discussions; added daily archive, detail routes, RSS and draft generator. Code commit dd74a1a deployed in successful workflow 42462504599; 16 live pages and three assets matched local output.

17. [verified] Published the supplied partial ChatGPT backup as 16 curated articles with a four-topic reading structure and complete source disposition. Content commit eee67f4 deployed in successful workflow 42464537073; 23 live routes, four assets and live search verified.

## Verified Facts

- Content commit eee67f470ec44bce0bad21657e66d48a94f155db passed build and deploy in workflow 42464537073. Twenty-three live routes returned HTTP 200 and matched normalized local main content; CSS, two search scripts and RSS matched local bytes. Live Pagefind finds the new stair, logit and Flow Matching articles, excludes the draft sample, and the homepage links the reading guide.

- Chat curation validation: Astro check passed (52 files, zero errors/warnings/hints); root and subpath builds generated 119 pages and indexed 59 articles. Each base passed 5,782 internal references. Browser checks passed for 20 routes at 1440, 390 and 320px (60 checks); new terms are searchable and drafts excluded. Guide desktop and stair-research mobile screenshots were inspected. The 16 new articles passed a targeted privacy/encoding audit; this does not validate proposed research experiments. Evidence: docs/chat-curation-verification-2026-11-08.json.

- The supplied 2026-11-08 ZIP index has 102 conversations, 1,067 visible messages and 290 omission flags. It is a search-derived partial backup, not complete ChatGPT account history. All 102 source IDs have an editorial disposition in docs/chat-curation-2026-11-08.md; raw chats remain private.

- Content commit dd74a1ada72e259acd56b193a401d7c5a61ecd65 completed build/deploy in workflow 42462504599. Sixteen changed live routes returned HTTP 200 and matched normalized local main content; daily RSS and two search scripts matched bytes. Only documentation and removal of one trailing blank line follow the deployed revision.


- The 2026-11-08 content refresh replaces six public placeholders and About copy, removes unknown identity links, and adds five paper notes plus one research synthesis. Primary paper sources were opened; SoT uses v4 consistently. Complete web ChatGPT history is unavailable.
- Local Astro check passed for 52 files. Final root build has 97 HTML pages and 43 indexed articles; 4,247 internal references passed. A subpath build with temporary daily fixtures passed 4,341 references, date sorting, RSS, detail/tag routes and draft exclusion. Generator default draft and overwrite refusal passed. All fixtures were removed before the final root build.
- Browser QA passed 16 routes at 1440, 1024, 390 and 320px (64 checks); search finds the new notes and excludes drafts. Daily mobile navigation works. Desktop research and daily screenshots were inspected. Evidence: docs/content-refresh-verification-2026-11-08.json. Empty daily collection messages are expected until content exists; no fake issue or automation was added.


- On 2026-11-08 the user selected Eugene Yan and Lil'Log as the two references and authorized implementation without another scoring round. The redesign adds `/start-here/`, matches existing content by topic tags, prioritizes reading entry points and recent writing on the homepage, and replaces the decorative background with solid light/dark surfaces. Existing content schemas, article URLs, scientific claims and downloads are unchanged.
- The local checkout was five commits behind the remote. Fast-forwarded from `5ed7509` to `a6a822c` before publication, preserving the latest SuperMimic article and all 15 downloadable cards. The unrelated untracked task CSV was left untouched.
- The initial redesign commit `71a8d75` deployed through successful Astro workflow `42460593255`. Live checks exposed different same-date list/pagination ordering between Windows and Linux; `src/utils/content.ts` now resolves date ties with stable content IDs. The SuperMimic downloadable Markdown differs only in checkout line endings, so publication checks normalize those for text downloads while hashing binary and shared code assets exactly.
- The repository still had Pages `build_type: legacy`, triggering an additional Jekyll run that failed while parsing Astro frontmatter. Switched Pages to `build_type: workflow` and re-read the setting successfully; the existing Astro workflow remains the sole intended publisher.
- Final root and `/personal-site/` builds both passed Astro check (49 files, zero errors/warnings/hints), generated 91 pages and indexed 37 public pages. Each build passed 3,484 internal links and draft-exclusion checks. VLM checks passed 20 routes, 1,153 links, 210 strong elements and nine image placements. The upstream Astro/Vite unused-import warning remains.
- The final browser pass covered ten routes at 1440, 768, 390 and 320 pixels: no horizontal overflow, missing images after eager decoding, or uncaught browser errors. Mobile navigation, collapsed/expandable TOC and persisted dark/light selection worked; Pagefind returned 29 results for `视觉`. Home, guide, VLM index and article screenshots were inspected. Evidence: `docs/reading-redesign-verification-2026-11-08.json`. Final publication checks passed for commit `5bae284` through successful workflow `42460846625`: ten live pages returned HTTP 200 and matched normalized main content; shared CSS, two Pagefind scripts and the card ZIP matched bytes, while downloadable Markdown matched after line-ending normalization.

- On 2026-11-04 the corrected SuperMimic copy replaced the article and downloadable Markdown. The final reading/resources section was removed; the download links remain. The PNG archive and preview now contain 15 pages, numbered 01–15, rendered at 1080×1440 with Noto Sans CJK SC. Single PNG files are also provided. This is an editorial update, not a new robotics experiment.

- On 2026-11-04 the SuperMimic article was revised to lead with completed work, explain terms in the implementation sequence, and expand foot-trajectory/IK processing. The evaluation-reminder page was removed; the detailed result summary remains linked. All 16 cards were regenerated in the existing design. Content commit `48f67e1`, successful Astro deployment run `41774804679`; live article and ZIP/Markdown/preview matched the revision. This revises milestone 14 rather than adding a research milestone.

- On 2026-11-04 the new article and its PNG ZIP, Markdown, result summary and measured-result extract returned HTTP 200. The downloadable ZIP contained all 16 pages and matched the local deliverable. Browser checks at 1440px and 390px found no horizontal overflow; all article sections were preserved in card rendering. The production build generated 90 pages and Pagefind indexed 37 public content pages. A parallel legacy Jekyll build failed; the configured Astro deployment succeeded and live content was verified. No hosting configuration was changed.

- On 2026-10-11 the VLM index was reorganized around three formal reading-map tracks. All 20 detail Markdown files were updated with consistent chapter headings; foundations and architecture introduce their scope before using the cat example within the relevant concept. Detailed explanations and comprehension exercises were retained.
- Four illustrations were generated with the built-in image_gen tool and inspected manually. WebP assets under `public/images/vlm/` total 223,248 bytes; complete prompts are recorded in `docs/vlm-image-prompts.json`. The nine placements explain representation, object/attribute binding, spatial transformations and temporal occlusion. Captions distinguish concept graphics from true model activations, exact transformed image pairs and measured video data.
- A baseline built-HTML audit found 64 literal bold delimiters (32 failed pairs) across 11 detail pages. Source spacing corrections resolved their CommonMark delimiter-boundary failures. The new `scripts/check-vlm-rendering.py` checks actual article text outside code and verifies image paths, alt and dimensions: 20 pages, 210 strong elements, nine image placements, four distinct images, zero errors.
- Root and simulated `/personal-site/` builds passed Astro check (47 files, zero errors/warnings/hints), generated 85 pages and indexed 36 public pages. The existing upstream Vite unused-import warning remains. Both VLM link checks found 826 valid internal links and zero errors, and both rendering checks passed.
- Headless Edge checked all 21 VLM routes at 1440px and 500px (42 page/viewport checks): zero document overflow, broken illustration loads or weak computed strong font weights. Screenshots of the navigation at both widths, the architecture illustration, corrected evaluation prose and temporal illustration were visually inspected.
- This revision changes teaching presentation and rendering, not the literature evidence or the status of personal research observations. The frontier literature verification date remains 2026-10-08; personal observations remain unverified.
- GitHub Pages run `38128789592` completed build and deploy successfully for `a183c36d9f65733d111ae321cae6fa0e627710f8`. Fresh live requests for the index and all 20 detail routes returned HTTP 200 and matched normalized local visible content by SHA-256, with no literal bold delimiters outside code. Four live WebP assets returned HTTP 200 with `image/webp` and matched their local bytes exactly. The route and asset hashes are retained in `docs/vlm-publication-verification-2026-10-11.json`.

- On 2026-10-08 all 20 files under `src/content/vlm/` and the VLM index were updated. Foundations and architecture trace one cat image through pixels, features, matching and generation; other pages explain their concepts through cats, arrows, tables, videos, interaction tasks or an explicitly fictional paper. Example configurations and scores are marked as teaching assumptions, not actual experiments.
- The current root build passed Astro check with 0 errors, 0 warnings and 0 hints, generated 85 pages, and indexed 36 public pages with Pagefind. The VLM checker found 20 detail routes and 827 valid internal links including fragment targets. A simulated `/personal-site/` build also passed and its checker found the same 827 valid links.
- Headless Edge checked document and table bounds for the index plus all 20 VLM detail pages at 500px: no document overflow or table escaping its viewport. Screenshots of the index and glossary were visually inspected. VLM table cells now keep a minimum readable width so English terms are not split into isolated letters; wider tables use the existing horizontal scroll container.
- GitHub Pages run `37720199435` completed both build and deploy successfully for content commit `ef0f62d`. Fresh HTTP requests for `/vlm/` and all 20 detail routes returned 200; normalized visible article text (and index main text) matched the corresponding local build by SHA-256 on all 21 routes. This checks content publication, not scientific replication or reader comprehension.
- The existing personal research observation remains unverified: no source image, complete model response or reproducible experiment was added in this revision.
- On 2026-09-28 the VLM Knowledge Hub was implemented in the existing `F:\codespace\PersonalWeb` Astro repository; the conversation started in `F:\codespace\VLM`, which contains the prior Markdown and chat workbook rather than site source.
- The new `/vlm/` index is a navigation page; `src/content/vlm/` contains 20 Markdown entries, including four secondary visual-capability pages. The personal research page labels its directional observation unverified because the original image and model output are unavailable.
- Local Astro check reported 0 errors, 0 warnings, and 0 hints. A root and simulated `/personal-site/` build each generated 81 pages; Pagefind indexed 34 public content pages. The VLM link checker found 20 detail routes and 583 valid VLM internal links in each base path.
- Headless Edge visual inspection covered the VLM index at 1440px and 500px widths, and the Evaluation detail at 500px after the TOC change. The existing site colors and responsive single-column cards rendered; the VLM detail TOC is initially collapsed to keep the first screen focused.
- GitHub Pages run `36333636814` completed its build and deploy jobs successfully for `fc37fa0`. Live GET requests returned HTTP 200 for `/vlm/` and `/vlm/evaluation/`, and both responses contained the expected VLM page content.

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
- The 2026-11-08 reading redesign supersedes the starry-ocean presentation: retain the historical asset, but do not load or preload it. Use white/charcoal surfaces, restrained headings, a 46rem maximum article column, and a desktop outline that becomes a collapsed native disclosure on mobile.
- Keep the public experience Chinese-only for now. Preserve existing English URL paths and schema enum identifiers as stable code contracts, while rendering their labels in Chinese.
- Treat the CSV as a chronological index, not sufficient scientific evidence. Use local conversations to recover decisions and current project artifacts to verify metrics and status.
- Map each CSV project to one Writing article, and split that article into chronological Parts according to research phase rather than creating one page per task.
- Preserve incomplete topics as incomplete public retrospectives instead of filling gaps with inferred research content; sanitize the academic-transition topic to avoid exposing unnecessary personal records.

## Risks And Unknowns

- CSDN URL and email are unknown and removed from public configuration. Custom domain and Giscus remain unconfigured.
- Astro build emits one upstream Vite unused-import warning from Astro's `remotePattern.js`; it does not originate in project code and does not affect the successful static build.
- A partial browser-chat backup is now available and curated. Complete account history, missing assistant answers, original figures and attachments remain unavailable; the new articles distinguish sourced explanation from recovered conversation and experimental results.
- Six public sample entries and About have been replaced with evidence-bounded content. Historical project state is explicitly dated; this revision does not re-run research experiments. AI daily has no published issue or scheduled automation yet.
- The two power-grid tasks without creation dates can only be placed by experiment phase, not by an exact day.
- The hotspot-tracking project remains an Inbox item with no completed paper analysis; its article records that boundary rather than supplying a retrospective result.

## Next Step And User Decision

- Next step: No required work remains for this supplied archive. AI daily remains available for separately researched dated issues; no recurring automation is configured.
- User decision: none needed for the supplied archive. Additional original messages or experiment artifacts would be required to resolve the explicitly marked evidence gaps.
