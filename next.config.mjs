import createMDX from "@next/mdx";

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/Portfolio",
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
    // Remove trailing slashes for clean URLs on GitHub Pages
    trailingSlash: false,
};

export default withMDX(nextConfig);
