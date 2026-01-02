"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { type SearchResult, searchQuery } from "@/lib/actions/search-query";

export default function Search() {
  const [searchText, setSearchText] = React.useState("");
  const [queryResult, setQueryResult] = React.useState<SearchResult[]>([]);

  async function handleSearch(value: string) {
    console.log(value);
    const res = await searchQuery(value);
    setQueryResult(res);
  }

  return (
    <section className="mx-auto w-full max-w-7xl">
      <Input
        value={searchText}
        onChange={(e) => {
          handleSearch(e.target.value);
          setSearchText(e.target.value);
        }}
      />

      <div>
        <pre>{JSON.stringify(queryResult, null, 2)}</pre>
      </div>
    </section>
  );
}
