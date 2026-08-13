---
title: Building a Markdown-First Personal Website
description: A sample experience record about the decisions and compatibility checks behind this Astro foundation.
date: 2026-08-13
updated: 2026-08-13
category: tooling
tags:
  - Astro
  - Deployment
  - Workflow
status: mature
draft: false
featured: false
---

> **Sample / Placeholder:** This page documents the scaffold itself. Keep only the parts that remain true after you customize the repository.

## Situation

The site needed to remain static, Markdown-first, compatible with GitHub Pages subpaths, and maintainable without registering every new page manually.

## Constraint

The local runtime was Node 20.15.1. The current Astro 7 release required a newer Node version, so installing the registry latest version would not have produced a reliable local baseline.

## Resolution

The project pinned an Astro 5 release whose declared engine supports the installed runtime. Compatible MDX, sitemap, RSS, and check packages were selected together. Content uses Astro's Content Layer API with glob loaders rather than the legacy implicit collection configuration.

## Verification

The repository's final build report should be treated as the current verification evidence. This paragraph alone is not proof that a later checkout still builds.

## Lessons learned

- Inspect actual package engines before scaffolding.
- Treat a successful install with engine warnings as a risk, not a clean baseline.
- Keep deployment base-path behavior centralized in Astro configuration.
- Make samples label themselves so scaffolding cannot be mistaken for personal history or research evidence.
