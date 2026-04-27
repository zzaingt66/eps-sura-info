import type { NextConfig } from "next";

const isGitHubPages = process.env.NEXT_PUBLIC_DEPLOY_TARGET === "github-pages";

const nextConfig: NextConfig = {
  // "export" genera HTML estático (para GitHub Pages) pero no soporta API routes.
  // En despliegues con servidor (Vercel, self-hosted) se omite para habilitar la API.
  ...(isGitHubPages ? { output: "export" } : {}),
  basePath: isGitHubPages ? "/eps-sura-info" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
