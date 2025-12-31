import createMDX from "@next/mdx";
import type { NextConfig } from "next";
// import remarkFrontmatter from "remark-frontmatter";
// import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { withMdx } from "./scripts/with-mdx";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [new URL("https://i.ibb.co.com/**")],
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withNextMdx = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    // remarkPlugins: [
    //   remarkFrontmatter,
    //   [remarkMdxFrontmatter, { name: "metadata" }],
    // ],
  },
});

export default withNextMdx(withMdx(nextConfig));
// export default nextConfig;
