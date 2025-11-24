import type { Metadata } from "next";
import nextMetadata from "@/lib/next-metadata";

export const metadata: Metadata = nextMetadata("Home");

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
