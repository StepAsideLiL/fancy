import fs from "node:fs";
import path from "node:path";
import chokidar from "chokidar";
import matter from "gray-matter";
import type { NextConfig } from "next";

const ROOT = process.cwd();
const ELEMENTS_DIR = path.join(ROOT, "src/components/elements");
const OUTPUT_FILE = path.join(ROOT, "src/_generated/elements.ts");

type ElementMeta = {
  category: string;
  slug: string;
  name: string;
  description: string;
  content: string;
  tags: string[];
  elementImportPath: string;
};

function scanElements(): ElementMeta[] {
  const results: ElementMeta[] = [];

  if (!fs.existsSync(ELEMENTS_DIR)) return results;

  const categories = fs.readdirSync(ELEMENTS_DIR);

  for (const category of categories) {
    const categoryDir = path.join(ELEMENTS_DIR, category);
    if (!fs.statSync(categoryDir).isDirectory()) continue;

    const slugs = fs.readdirSync(categoryDir);

    for (const slug of slugs) {
      const slugDir = path.join(categoryDir, slug);
      if (!fs.statSync(slugDir).isDirectory()) continue;

      const elementFile = path.join(slugDir, "element.tsx");
      const docFile = path.join(slugDir, "doc.mdx");

      if (!fs.existsSync(elementFile) || !fs.existsSync(docFile)) {
        continue;
      }

      const mdx = fs.readFileSync(docFile, "utf8");
      const { data, content } = matter(mdx);

      results.push({
        category,
        slug,
        name: data.name ?? slug,
        description: data.description ?? "",
        tags: data.tags,
        content,
        elementImportPath: `../components/elements/${category}/${slug}/element`,
      });
    }
  }

  return results;
}

function generateFile(elements: ElementMeta[]) {
  const imports = elements
    .map(
      (el, i) =>
        `import { Element as Element${i} } from "${el.elementImportPath}";`,
    )
    .join("\n");

  const items = elements
    .map(
      (el, i) => `{
  name: ${JSON.stringify(el.name)},
  description: ${JSON.stringify(el.description)},
  slug: "${el.slug}",
  category: "${el.category}",
  url: "/e/${el.category}/${el.slug}",
  content: ${JSON.stringify(el.content)},
  tags: ${JSON.stringify(el.tags)},
  element: Element${i},
}`,
    )
    .join(",\n");

  const content = `/* eslint-disable */
/* This file is auto-generated. Do not edit manually. */

import type { ComponentType } from "react";

export type TElement = {
  name: string;
  description: string;
  slug: string;
  category: string;
  url: string;
  content: string;
  tags: string[];
  element: ComponentType;
};

${imports}

export const elements: TElement[] = [
${items}
];
`;

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, content, "utf8");
}

function buildElements() {
  const elements = scanElements();
  generateFile(elements);
}

function watchElements() {
  const watcher = chokidar.watch(path.join(ELEMENTS_DIR, "**/doc.mdx"), {
    ignoreInitial: true,
  });

  watcher.on("add", buildElements);
  watcher.on("change", buildElements);
  watcher.on("unlink", buildElements);
}

export function withElements(nextConfig: NextConfig = {}): NextConfig {
  buildElements();

  if (process.env.NODE_ENV === "development") {
    watchElements();
  }

  return nextConfig;
}
