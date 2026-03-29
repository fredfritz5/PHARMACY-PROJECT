"use client";

import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PRODUCTS, fuzzySearchHelper, Product } from "@/lib/mockData";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim().length > 1) {
      setSuggestions(fuzzySearchHelper(query, PRODUCTS).slice(0, 5));
    } else {
      setSuggestions([]);
    }
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setFocused(false);
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <form 
        className={`${styles.searchBox} ${focused ? styles.searchBoxFocused : ""}`}
        onSubmit={handleSearch}
      >
        <Search className={styles.icon} />
        <input 
          type="text" 
          className={styles.input} 
          placeholder="Search for medications, vitamins, or symptoms..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
        />
        <button type="submit" className={styles.btn}>Search</button>
      </form>

      {focused && suggestions.length > 0 && (
        <div className={styles.suggestions}>
          {suggestions.map((p) => (
            <Link 
              href={`/products/${p.id}`} 
              key={p.id} 
              className={styles.suggestionItem}
              onClick={() => setFocused(false)}
            >
              <Search size={16} color="var(--text-secondary)" />
              <div className={styles.suggestionName}>{p.name}</div>
              <div className={styles.suggestionCat}>{p.category}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
