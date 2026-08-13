---
title: "TIL: A Personal Website Can Be a Knowledge Base"
description: A sample note on why a static site can be both a publishing surface and a durable knowledge index.
date: 2026-08-13
updated: 2026-08-13
type: til
tags:
  - Research OS
  - Workflow
  - Astro
status: seed
draft: false
featured: false
---

> **Sample / Placeholder:** Delete or rewrite this note when real content is ready.

A personal website does not need a database to behave like a useful knowledge base.

The key is to keep the source content structured:

- frontmatter supplies dates, status, type, and tags;
- content collections validate those fields;
- generated routes remove the need for a manual index;
- shared tags create lightweight connections;
- Pagefind indexes the rendered static pages.

The useful distinction is that **Markdown is the source of truth**, while HTML is a build artifact.

## Command to remember

```powershell
npm run new:note -- "A useful title"
```

That creates a draft under `src/content/notes/` without editing a page component.

