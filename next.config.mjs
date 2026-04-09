import createMDX from "@next/mdx";

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["ts", "tsx", "md", "mdx"],
    reactStrictMode: true,
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ghchart.rshah.org",
            },
        ],
    },
};

export default withMDX(nextConfig);
