# PersonalWeb Agent Rules

## Core architecture

- Markdown-first: public knowledge lives under `src/content/`.
- Content pages and indexes must be generated from Astro Content Collections. Do not hardcode article or project registries in page components.
- Keep the site static-first. Do not add a backend, database, authentication, CMS, or server runtime without explicit user authorization.
- Prefer Astro components and server-rendered HTML. Add browser JavaScript only when a real interaction requires it.
- Preserve the schemas in `src/content.config.ts`; update templates and README whenever a deliberate schema change is made.

## Evidence and content

- Never invent personal details, account URLs, work history, publications, project results, metrics, customers, or research conclusions.
- Keep sample and placeholder content explicitly labeled until replaced with verified personal material.
- Distinguish implementation checks from scientific evidence. A passing build does not validate a research claim.
- Draft content uses `draft: true`; production must continue to exclude it from routes, indexes, tags, related content, RSS, sitemap, and Pagefind.

## Configuration and paths

- Maintain identity and external profile links in `src/config/site.ts`.
- Maintain current-focus data in `src/data/now.ts`.
- Maintain Giscus settings only in `src/config/giscus.ts`; an empty configuration must remain safe.
- Use `src/utils/paths.ts` for internal links so GitHub Pages project subpaths keep working.

## Before finishing a change

- Run `npm run check` for content schema and TypeScript changes.
- Run `npm run build` before reporting a completed implementation.
- Check `git diff --check` and review `git status --short`; do not stage, commit, push, or change remotes unless the current user request authorizes it.
- Keep `README.md`, `docs/ARCHITECTURE.md`, and `PROJECT_STATE.md` aligned with verified architecture changes.
