import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Search parameters must not be logged. `npm run dev` also disables Next.js trace
  // recording (NEXT_TRACE_SPAN_THRESHOLD_MS), checked by `npm run test:privacy-dev`.
  logging: { incomingRequests: false },
  // The home page is now the example library. Old search and Explore links keep working (query kept).
  async redirects() {
    return [
      { source: "/search", destination: "/", permanent: false },
      { source: "/explore", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
