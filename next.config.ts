import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  // Allows viewing the dev server through a Cloudflare quick tunnel
  // (temporary *.trycloudflare.com URL) for sharing work-in-progress.
  // Without this, Next.js blocks cross-origin requests for JS chunks/HMR
  // from any host other than localhost, so the page renders its initial
  // HTML but never hydrates (nothing interactive works, animations never
  // trigger).
  allowedDevOrigins: ["*.trycloudflare.com"],
};

export default nextConfig;
