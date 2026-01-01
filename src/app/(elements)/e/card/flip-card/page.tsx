import { parseMdx } from "@/lib/mdx";
import nextMetadata from "@/lib/next-metadata";
import Element from "./element";

export async function generateMetadata() {
  const { data } = await parseMdx();
  return nextMetadata(data.name, data.description);
}

export default function Page() {
  return <Element />;
}
