import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { NextConfig } from "next";

type MenuJson = {
  name: string;
  description: string;
  slug: string;
  category: string;
  url: string;
  content: string;
}[];

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "src/app/(elements)/e");
const OUTPUT_DIR = path.join(ROOT, "src/_generated");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "elements.json");

function walk(dir: string, result: string[] = []) {
  if (!fs.existsSync(dir)) return result;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(full, result);
    } else if (entry.name === "page.tsx") {
      result.push(full);
    }
  }

  return result;
}

function generateMenu() {
  console.log("Generating Menus.");

  const pages = walk(APP_DIR);
  const menu: MenuJson = [];

  for (const pagePath of pages) {
    /**
     * pagePath example:
     * src/app/(elements)/e/button/primary/page.tsx
     */
    const parts = pagePath.split(path.sep);
    // biome-ignore lint/style/noNonNullAssertion: <"allow">
    const slug = parts.at(-2)!;
    // biome-ignore lint/style/noNonNullAssertion: <"allow">
    const category = parts.at(-3)!;

    const docsPath = path.join(path.dirname(pagePath), "docs.mdx");

    if (!fs.existsSync(docsPath)) {
      continue;
    }

    const source = fs.readFileSync(docsPath, "utf8");
    const { data, content } = matter(source);

    menu.push({
      name: String(data.name ?? slug),
      description: String(data.description ?? ""),
      slug,
      category,
      url: `e/${category}/${slug}`,
      content,
    });
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(menu, null, 2), "utf8");
}

function watchDocs() {
  fs.watch(APP_DIR, { recursive: true }, (_, filename) => {
    if (filename?.endsWith("docs.mdx")) {
      generateMenu();
    }
  });
}

export function withMdx(nextConfig: NextConfig = {}): NextConfig {
  generateMenu();

  /**
   * Enable Turbopack file watching so HMR
   * triggers when docs.mdx changes
   */
  if (process.env.NODE_ENV === "development") {
    watchDocs();
  }

  return {
    ...nextConfig,
  };
}
