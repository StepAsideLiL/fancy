import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import { withElements } from "./scripts/with-elements";

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
});

export default withNextMdx(withElements(nextConfig));
