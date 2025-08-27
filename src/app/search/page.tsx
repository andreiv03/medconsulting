"use client";

import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import Fuse from "fuse.js";

import searchData from "@/data/search.json";

import styles from "@/styles/pages/search.module.scss";

export default function Search() {
  const [query, setQuery] = useState("");

  const fuse = new Fuse(searchData, {
    keys: ["id", "url", "page", "title", "description"],
    includeScore: true,
  });

  const results = fuse
    .search(query)
    .sort((a, b) => a.score! - b.score!)
    .slice(0, 5);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["search"]}>
        <input
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search"
          type="text"
          value={query}
        />
        <BiSearch />
      </div>

      <div className={styles["results"]}>
        {results.map((result) => (
          <div className={styles["result"]} key={result.item.id}>
            <div className={styles["current_page"]}>{result.item.page}</div>
            <div className={styles["title"]}>
              {result.item.title.length > 30
                ? `${result.item.title.slice(0, 30)}...`
                : result.item.title}
            </div>
            <div className={styles["description"]}>{result.item.description}</div>
            <Link href={result.item.url} />
          </div>
        ))}
      </div>
    </div>
  );
}
