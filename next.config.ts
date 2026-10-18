import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Search parameters must not be logged. `npm run dev` also disables Next.js trace
  // recording (NEXT_TRACE_SPAN_THRESHOLD_MS), checked by `npm run test:privacy-dev`.
  logging: { incomingRequests: false },
  // The library lives at /examples. Old search and Explore links keep working (query kept); filtered
  // home links are redirected in src/proxy.ts, which also catches empty values.
  async redirects() {
    return [
      { source: "/search", destination: "/examples", permanent: false },
      { source: "/explore", destination: "/examples", permanent: false },
    ];
  },
};

export default nextConfig;
