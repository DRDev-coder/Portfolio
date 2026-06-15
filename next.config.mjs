import createMDX from "@next/mdx";

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
});

// Use basePath only for GitHub Pages (not for Render or local dev)
const isGithubPages = process.env.DEPLOY_TARGET === "github";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: isGithubPages ? "/Portfolio" : "",
    pageExtensions: ["ts", "tsx", "md", "mdx"],
    reactStrictMode: true,
    images: {
        unoptimized: true,
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ghchart.rshah.org",
            },
        ],
    },
    trailingSlash: false,
};

export default withMDX(nextConfig);
