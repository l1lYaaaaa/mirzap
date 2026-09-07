// Mirrors the basePath conditionally applied in next.config.ts for the
// GitHub Pages build. next/image doesn't auto-prefix `src` strings with
// `unoptimized: true`, so asset paths built from this constant need it
// manually. Set alongside GITHUB_PAGES=true in the deploy workflow.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
