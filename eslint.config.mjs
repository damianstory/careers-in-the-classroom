import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Bundled third-party skills are not application source.
    ".claude/skills/**",
    // Archived browser runs include standalone CommonJS scripts and local configs.
    "docs/validation/**/implementation-evidence/**",
    "docs/validation/browser-qa-*/**",
  ]),
]);

export default eslintConfig;
