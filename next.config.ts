import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Search parameters must not be logged. `npm run dev` also disables Next.js trace
  // recording (NEXT_TRACE_SPAN_THRESHOLD_MS), checked by `npm run test:privacy-dev`.
  logging: { incomingRequests: false },
  // The library lives at /examples; the home page introduces the project. Old search, Explore and
  // filtered home links keep working: the query string is passed through, and the browser keeps any #hash.
  async redirects() {
    return [
      { source: "/search", destination: "/examples", permanent: false },
      { source: "/explore", destination: "/examples", permanent: false },
      ...["course", "unit", "topic"].map((key) => ({
        source: "/",
        has: [{ type: "query" as const, key }],
        destination: "/examples",
        permanent: false,
      })),
    ];
  },
};

export default nextConfig;
