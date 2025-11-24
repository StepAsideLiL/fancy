import type { Metadata } from "next";

export default function nextMetadata(
  title?: string,
  description?: string,
): Metadata {
  const site = {
    title: "Fancy",
    description: "How fancy the web can be!",
    author: {
      name: "StepAsideLiL",
      url: "https://github.com/StepAsideLiL",
    },
  };
  const baseUrl = "http://localhost:3000";

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", title ? title : site.title);

  return {
    title: title ? `${title} - ${site.title}` : site.title,
    description: description ? description : site.description,
    authors: site.author,
    metadataBase: new URL(baseUrl),
    icons: {
      icon: [
        { url: "/icons/favicon.ico" },
        new URL("/icons/favicon.ico", baseUrl),
        { url: "/icons/favicon-16x16.png", sizes: "16x16" },
        { url: "/icons/favicon-32x32.png", sizes: "32x32" },
      ],
    },
    manifest: "/site.webmanifest",
    openGraph: {
      title: site.title,
      description: site.description,
      type: "website",
      url: site.author.url,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: site.title,
        },
      ],
    },
  };
}
