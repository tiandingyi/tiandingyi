import fs from "node:fs/promises"
import path from "node:path"

const root = process.cwd()
const zhBlogDir = path.join(root, "content", "zh", "blog")
const enBlogDir = path.join(root, "content", "en", "blog")

const targets = process.argv.slice(2)

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

function slugToTitle(slug) {
  return slug
    .replace(/\.md$/i, "")
    .split(/[-_]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

function splitFrontmatter(raw) {
  if (!raw.startsWith("---\n")) {
    return { frontmatter: "", body: raw }
  }

  const end = raw.indexOf("\n---\n", 4)
  if (end === -1) {
    return { frontmatter: "", body: raw }
  }

  return {
    frontmatter: raw.slice(4, end).trim(),
    body: raw.slice(end + 5).trim(),
  }
}

function extractSimpleField(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*["']?(.+?)["']?$`, "m"))
  return match ? match[1] : ""
}

function extractTags(frontmatter) {
  const lines = frontmatter.split("\n")
  const tagsIndex = lines.findIndex((line) => line.trim() === "tags:")
  if (tagsIndex === -1) return []

  const tags = []
  for (let i = tagsIndex + 1; i < lines.length; i++) {
    const line = lines[i]
    if (!line.startsWith("  - ")) break
    tags.push(line.replace("  - ", "").trim())
  }
  return tags
}

function buildEnglishFrontmatter(zhFrontmatter, slug) {
  const zhTitle = extractSimpleField(zhFrontmatter, "title") || slugToTitle(slug)
  const date = extractSimpleField(zhFrontmatter, "date")
  const originalTags = extractTags(zhFrontmatter).filter((tag) => tag !== "zh" && tag !== "en")
  const tags = ["en", "blog", ...originalTags]

  const lines = [
    "---",
    `title: "English Version of ${zhTitle}"`,
    `description: "English counterpart of the Chinese blog post: ${zhTitle}."`,
    "aliases:",
    `  - ${zhTitle}`,
    "tags:",
    ...tags.map((tag) => `  - ${tag}`),
  ]

  if (date) {
    lines.push(`date: ${date}`)
  }

  lines.push("---")
  return lines.join("\n")
}

function buildEnglishBody(slug, zhBody) {
  const zhRelative = `../../zh/blog/${slug}`

  return [
    `[中文](${zhRelative.replace(/ /g, "%20")}) | [[../index|English Blog Archive]] | [[../Blog|Blog Home]]`,
    "",
    "# Translation Draft",
    "",
    "> [!note] Translation Workflow",
    `> This page is the English counterpart of [[${zhRelative}|the Chinese original]].`,
    "> Replace this draft with a polished English version when ready.",
    "",
    "## Source Note",
    "",
    `- Original article: [[${zhRelative}]]`,
    "- Status: Draft translation scaffold",
    "",
    "## Original Chinese Content",
    "",
    "```md",
    zhBody,
    "```",
  ].join("\n")
}

async function listMarkdownFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    if (entry.isDirectory()) continue
    if (!entry.name.endsWith(".md")) continue
    if (entry.name.toLowerCase() === "index.md") continue
    files.push(entry.name)
  }

  return files.sort()
}

async function mirrorOne(fileName) {
  const zhPath = path.join(zhBlogDir, fileName)
  const enPath = path.join(enBlogDir, fileName)

  const raw = await fs.readFile(zhPath, "utf8")
  const { frontmatter, body } = splitFrontmatter(raw)

  try {
    await fs.access(enPath)
    console.log(`skip existing: content/en/blog/${fileName}`)
    return
  } catch {
    // create below
  }

  const englishFile = `${buildEnglishFrontmatter(frontmatter, fileName)}\n\n${buildEnglishBody(fileName, body)}\n`
  await fs.writeFile(enPath, englishFile, "utf8")
  console.log(`created: content/en/blog/${fileName}`)
}

async function main() {
  await ensureDir(zhBlogDir)
  await ensureDir(enBlogDir)

  let files = targets.map((target) => path.basename(target))
  if (files.length === 0) {
    files = await listMarkdownFiles(zhBlogDir)
  }

  if (files.length === 0) {
    console.log("No Chinese blog posts found under content/zh/blog/.")
    return
  }

  for (const fileName of files) {
    await mirrorOne(fileName)
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
