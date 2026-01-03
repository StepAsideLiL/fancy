"use server";

import { elements, type TElement } from "@/_generated/elements";

export type TSearchPriority = "name" | "description" | "tags" | "content";

type TQueryElement = {
  name: TElement["name"];
  description: TElement["description"];
  slug: TElement["slug"];
  category: TElement["category"];
  url: TElement["url"];
  content: TElement["content"];
  tags: TElement["tags"];
};

export type TSearchResult = Record<TSearchPriority, TQueryElement[]>;

export async function searchQuery(value: string): Promise<TSearchResult> {
  const query = value.trim().toLowerCase();

  if (!query) {
    return {
      name: [],
      description: [],
      tags: [],
      content: [],
    };
  }

  const grouped: TSearchResult = {
    name: [],
    description: [],
    tags: [],
    content: [],
  };

  for (const element of elements) {
    if (element.name.toLocaleLowerCase().includes(query)) {
      grouped.name.push({
        name: element.name,
        description: element.description,
        slug: element.slug,
        category: element.category,
        url: element.url,
        content: element.content,
        tags: element.tags,
      });
      continue;
    }

    if (element.description.toLocaleLowerCase().includes(query)) {
      grouped.description.push({
        name: element.name,
        description: element.description,
        slug: element.slug,
        category: element.category,
        url: element.url,
        content: element.content,
        tags: element.tags,
      });
      continue;
    }

    if (element.tags.some((tag) => tag.toLowerCase().includes(query))) {
      grouped.tags.push({
        name: element.name,
        description: element.description,
        slug: element.slug,
        category: element.category,
        url: element.url,
        content: element.content,
        tags: element.tags,
      });
      continue;
    }

    if (element.content.toLowerCase().includes(query)) {
      grouped.content.push({
        name: element.name,
        description: element.description,
        slug: element.slug,
        category: element.category,
        url: element.url,
        content: element.content,
        tags: element.tags,
      });
    }
  }

  return grouped;
}
