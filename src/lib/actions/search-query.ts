"use server";

import { elements, type TElement } from "@/_generated/elements";

type SearchPriority = "name" | "description" | "tags" | "content";

export type SearchResult = {
  element: {
    name: TElement["name"];
    description: TElement["description"];
    slug: TElement["slug"];
    category: TElement["category"];
    url: TElement["url"];
    content: TElement["content"];
    tags: TElement["tags"];
  };
  matchedBy: SearchPriority;
};

export async function searchQuery(value: string): Promise<SearchResult[]> {
  const query = value.trim().toLowerCase();

  if (!query) {
    return [];
  }

  const nameMatches: SearchResult[] = [];
  const descriptionMatches: SearchResult[] = [];
  const tagsMatches: SearchResult[] = [];
  const contentMatches: SearchResult[] = [];

  for (const element of elements) {
    if (element.name.toLocaleLowerCase().includes(query)) {
      nameMatches.push({
        element: {
          name: element.name,
          description: element.description,
          slug: element.slug,
          category: element.category,
          url: element.url,
          content: element.content,
          tags: element.tags,
        },
        matchedBy: "name",
      });
      continue;
    }

    if (element.description.toLocaleLowerCase().includes(query)) {
      descriptionMatches.push({
        element: {
          name: element.name,
          description: element.description,
          slug: element.slug,
          category: element.category,
          url: element.url,
          content: element.content,
          tags: element.tags,
        },
        matchedBy: "description",
      });
      continue;
    }

    if (element.tags.some((tag) => tag.toLowerCase().includes(query))) {
      tagsMatches.push({
        element: {
          name: element.name,
          description: element.description,
          slug: element.slug,
          category: element.category,
          url: element.url,
          content: element.content,
          tags: element.tags,
        },
        matchedBy: "tags",
      });
      continue;
    }

    if (element.content.toLowerCase().includes(query)) {
      contentMatches.push({
        element: {
          name: element.name,
          description: element.description,
          slug: element.slug,
          category: element.category,
          url: element.url,
          content: element.content,
          tags: element.tags,
        },
        matchedBy: "content",
      });
    }
  }

  return [
    ...nameMatches,
    ...descriptionMatches,
    ...tagsMatches,
    ...contentMatches,
  ];
}
