# AI Working Guide

This repository is a Quartz-based personal site and Obsidian-friendly content vault for Dingyi Tian.

Future AI agents working in this repo should read this file before making content or structural changes.

## Project Intent

- This site is both a personal homepage and a blog.
- The content is maintained in a way that should remain comfortable to edit in Obsidian.
- The content model is bilingual, but Chinese and English should usually live in separate files rather than mixed paragraph-by-paragraph.

## Core Content Structure

- `content/index.md`
  - Root homepage.
  - This page is intentionally short and bilingual.
  - It acts as a language selector and main entry point.
- `content/zh/`
  - Chinese core pages.
- `content/en/`
  - English core pages.
- `content/zh/blog/`
  - Chinese blog posts and the Chinese blog archive.
- `content/en/blog/`
  - English blog posts and the English blog archive.

Current core pages:

- `content/zh/About Me.md`
- `content/zh/Resume.md`
- `content/zh/Projects.md`
- `content/zh/Blog.md`
- `content/en/About Me.md`
- `content/en/Resume.md`
- `content/en/Projects.md`
- `content/en/Blog.md`

## Bilingual Rules

- Do not revert to the old pattern of mixing Chinese and English throughout the same long page.
- Keep `content/index.md` short and bilingual.
- All major pages should have both a Chinese version and an English version.
- Each paired page should include a visible language switch near the top.
- When adding a new major page in one language, add the corresponding page in the other language too.

Preferred pattern:

- Chinese page: `content/zh/Page Name.md`
- English page: `content/en/Page Name.md`

## Blog Workflow

- Chinese is the source language for future blog writing.
- New Chinese blog posts should be created under `content/zh/blog/`.
- English counterparts should live under `content/en/blog/`.
- Every blog post should have a language switch near the top.

There is a helper script for scaffolding English counterparts:

- `pnpm run blog:mirror`

This script reads Chinese blog posts from `content/zh/blog/` and creates missing English draft counterparts under `content/en/blog/`.

Important:

- The script creates English draft scaffolds, not polished translations.
- If the user asks for a real English version, write or improve the English content manually.
- Do not overwrite an existing English post unless the user explicitly asks for regeneration.

## Obsidian Friendliness

- Prefer normal Markdown notes over framework-heavy content structures.
- Prefer wikilinks where appropriate.
- Avoid introducing unnecessary nesting or complex generated content layouts.
- Keep filenames and page organization predictable and stable.
- Root `content/index.md` must remain lowercase `index.md` because Quartz expects it for the homepage.

## Quartz Constraints

- Quartz expects the homepage at `content/index.md`.
- `quartz.config.ts` currently has `CustomOgImages` disabled for reliable local/offline builds.
- Do not re-enable `Plugin.CustomOgImages()` unless you also verify the build environment supports the required remote font fetch behavior.

## Validation Checklist

After content or structure changes, run:

```bash
pnpm exec prettier content/**/*.md scripts/*.mjs package.json quartz.config.ts quartz/styles/custom.scss --check
node ./quartz/bootstrap-cli.mjs build
```

If you changed only a subset of files, it is fine to narrow the Prettier command, but always run a full Quartz build before finishing structural or content-routing work.

## Git Hygiene

- Do not stage or commit unrelated files such as `.playwright-cli/` unless the user explicitly asks for that.
- Be careful with filenames containing spaces.
- Avoid destructive cleanup of user-authored content.

## If You Need to Extend the System

When adding new sections or automations, prefer extending the existing bilingual structure instead of creating a third competing content model.

If you are unsure, preserve these invariants:

- short bilingual root homepage
- separate `zh` and `en` core pages
- future blog source in `content/zh/blog/`
- mirrored English blog counterparts in `content/en/blog/`
- visible language switch on all major pages
