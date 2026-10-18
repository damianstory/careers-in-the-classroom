"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { companyQuery } from "@/lib/doors";
import { announceFilterNavigation } from "@/lib/library-filter";
import styles from "./ways-in.module.css";

export function CompanySearch({ query }: { query: string }) {
  const router = useRouter();
  return (
    <form action="/connections#library" method="get" role="search" aria-label="Company directory" className={styles.companySearch}
      onSubmit={(event) => {
        event.preventDefault();
        const value = companyQuery(String(new FormData(event.currentTarget).get("company") ?? ""));
        const params = new URLSearchParams({ by: "company" });
        if (value) params.set("company", value);
        announceFilterNavigation(null);
        router.push(`/connections?${params}#library`);
      }}>
      <input type="hidden" name="by" value="company" />
      <label htmlFor="company-search">Find a company</label>
      <div className={styles.companySearchControls}>
        <input key={query} id="company-search" type="search" name="company" defaultValue={query} maxLength={80} placeholder="Company name" />
        <button type="submit" className="btn btn-ink">Find company</button>
        {query && <Link href="/connections?by=company#library">Clear search</Link>}
      </div>
    </form>
  );
}
