---
title: AI Content Workflow
---

# AI Content Workflow

This document is a practical guide for future AI agents modifying the content model of this site.

## High-Level Model

The site uses Quartz for publishing and is organized to stay friendly to Obsidian editing.

The intended model is:

- a short bilingual root homepage at `content/index.md`
- Chinese primary content under `content/zh/`
- English primary content under `content/en/`
- Chinese blog source posts under `content/zh/blog/`
- English mirrored blog posts under `content/en/blog/`

## Why This Model Exists

Earlier versions of the site mixed Chinese and English in the same long pages. That made pages visually noisy and harder to maintain.

The current model is preferred because it:

- keeps reading cleaner
- keeps translation responsibilities explicit
- works naturally in Obsidian
- gives Quartz stable URLs for each language

## Page Pairing Rules

For every major page, keep a Chinese and English pair.

Examples:

- `content/zh/About Me.md` <-> `content/en/About Me.md`
- `content/zh/Resume.md` <-> `content/en/Resume.md`
- `content/zh/Projects.md` <-> `content/en/Projects.md`
- `content/zh/Blog.md` <-> `content/en/Blog.md`

Each pair should:

- describe the same conceptual page
- include a top-of-page language switch
- stay reasonably aligned in purpose, even if wording differs

## Root Homepage Rules

`content/index.md` is special.

- Keep it short.
- Keep it bilingual.
- Use it as a language selection and quick-links page.
- Do not turn it back into a long mixed-language resume.

Quartz expects this file to remain `content/index.md`.

## Blog Rules

When the user adds a Chinese post:

1. Create or update the Chinese file in `content/zh/blog/`.
2. Ensure an English counterpart exists in `content/en/blog/`.
3. Add or preserve a visible language switch in both versions.

Scaffolding command:

```bash
pnpm run blog:mirror
```

Behavior:

- reads Chinese blog posts in `content/zh/blog/`
- creates missing English counterparts in `content/en/blog/`
- does not overwrite existing English posts

The scaffolded English post is only a draft shell. If the user asks for a true translation, write a real English version.

## Frontmatter Guidance

Use clear frontmatter on user-facing content pages.

Common fields:

- `title`
- `description`
- `aliases`
- `tags`

For bilingual pairs:

- keep tags language-specific where helpful, such as `zh` and `en`
- avoid alias sprawl unless it improves discoverability

## Linking Guidance

Prefer stable wikilinks that make sense in Obsidian.

Examples:

- `[[Resume]]`
- `[[Projects]]`
- `[[blog/|进入中文博客归档]]`

When linking across languages, relative Markdown links are acceptable when they are clearer than ambiguous wikilinks.

## Build and Verification

Before finishing:

```bash
pnpm exec prettier content/**/*.md scripts/*.mjs package.json --check
node ./quartz/bootstrap-cli.mjs build
```

If you change content routing, also inspect the generated `public/` paths to confirm the language pages emit where expected.

## Common Mistakes to Avoid

- Mixing both languages throughout every long page
- Forgetting the matching page in the other language
- Writing new Chinese blog posts outside `content/zh/blog/`
- Overwriting an English blog file that was already manually improved
- Renaming `content/index.md` to `Index.md`
- Reintroducing deleted legacy top-level content files without a clear reason

## Current Legacy Cleanup Context

The repo previously had top-level pages like:

- `content/About Me.md`
- `content/Resume.md`
- `content/Projects.md`
- `content/Blog.md`

Those were superseded by the language-specific layout and should not be recreated casually.
