import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { headers } from "next/headers";
import { cache } from "react";

type PostFrontmatter = {
  name: string;
  description: string;
};

export const parseMdx = cache(async () => {
  const headersList = await headers();
  const pathname =
    headersList.get("x-pathname") ||
    new URL(headersList.get("referer") || "").pathname;

  const source = fs.readFileSync(
    path.resolve(
      "src",
      "app",
      "(elements)",
      ...pathname.split("/").filter(Boolean),
      "docs.mdx",
    ),
    "utf8",
  );

  return {
    data: matter(source).data as PostFrontmatter,
    content: matter(source).content,
  };
});
