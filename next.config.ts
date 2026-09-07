import type { NextConfig } from "next";

// Deployed as a static site on GitHub Pages, served from
// https://<user>.github.io/mirzap/ — a project (non-root) path, so the
// build needs a basePath/assetPrefix. Only applied when building in CI
// (GITHUB_PAGES=true, set by the deploy workflow) so `npm run dev` and a
// plain local `npm run build` still serve from "/".
const repoName = "mirzap";
const isGithubPagesBuild = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  ...(isGithubPagesBuild && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),
  images: {
    // GitHub Pages serves static files only — no server to run Next's
    // built-in image optimizer against.
    unoptimized: true,
  },
  // Allows viewing the dev server through a Cloudflare quick tunnel
  // (temporary *.trycloudflare.com URL) for sharing work-in-progress.
  // Without this, Next.js blocks cross-origin requests for JS chunks/HMR
  // from any host other than localhost, so the page renders its initial
  // HTML but never hydrates (nothing interactive works, animations never
  // trigger).
  allowedDevOrigins: ["*.trycloudflare.com"],
};

export default nextConfig;
