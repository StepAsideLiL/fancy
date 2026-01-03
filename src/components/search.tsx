"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  searchQuery,
  type TSearchPriority,
  type TSearchResult,
} from "@/lib/actions/search-query";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

export default function Search() {
  const [searchText, setSearchText] = React.useState("");
  const [queryResult, setQueryResult] = React.useState<TSearchResult | null>(
    null,
  );
  const [searchFocued, setSearchFocued] = React.useState(false);
  const searchListContainer = React.useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (searchListContainer.current && searchFocued) {
      gsap.to(searchListContainer.current, {
        height: 300,
      });
    }
  }, [searchFocued]);

  async function handleSearch(value: string) {
    if (value === "") {
      setQueryResult(null);
      return;
    }
    await searchQuery(value).then((res) => {
      setQueryResult(res);
    });
  }

  return (
    <section className="mx-auto w-full max-w-7xl space-y-3">
      <Input
        onFocus={() => setSearchFocued(true)}
        onBlur={() => setSearchFocued(false)}
        value={searchText}
        onChange={(e) => {
          handleSearch(e.target.value);
          setSearchText(e.target.value);
        }}
      />

      {(searchFocued || queryResult) && (
        <div>
          <div
            ref={searchListContainer}
            className={cn(
              "h-0 overflow-clip bg-background px-10 shadow-foreground/10 shadow-lg",
              searchFocued && "overflow-auto",
            )}
          >
            {queryResult ? (
              <div>
                {Object.keys(queryResult).map((k) => (
                  <div key={k}>
                    {queryResult[k as TSearchPriority].length > 0 && (
                      <div>
                        <p className="select-none font-semibold text-sm capitalize">
                          {k}
                        </p>
                        <ul>
                          {queryResult[k as TSearchPriority].map((element) => (
                            <li key={element.slug} className="w-full">
                              <Link
                                href={element.url}
                                className="inline-block w-full"
                              >
                                {element.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <p className="select-none text-muted-foreground">Search</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
