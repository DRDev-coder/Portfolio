import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { PageTransition } from "@/components/page-transition";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/lib/site-config";
import "@/styles/globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Darshan R. | AI and Systems Portfolio",
        template: "%s | Darshan R.",
    },
    description:
        "Elite developer portfolio showcasing AI systems, research-driven engineering, and product execution.",
    keywords: [
        "Darshan",
        "AI",
        "Systems",
        "Portfolio",
        "NUS",
        "NTU",
        "Georgia Tech",
        "Machine Learning",
    ],
    openGraph: {
        title: "Darshan R. | AI and Systems Portfolio",
        description:
            "Research-minded engineering portfolio featuring case studies, technical writing, and production systems.",
        type: "website",
        images: [
            {
                url: profile.ogImage,
                width: 1200,
                height: 630,
                alt: "Darshan R. portfolio social preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Darshan R. | AI and Systems Portfolio",
        description:
            "Research-minded engineering portfolio featuring case studies, technical writing, and production systems.",
        images: [profile.ogImage],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                suppressHydrationWarning
                className={`${inter.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
            >
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
                    <div className="relative mx-auto min-h-screen max-w-[90rem] px-3 py-4 md:px-6">
                        <SiteHeader />
                        <main>
                            <PageTransition>{children}</PageTransition>
                        </main>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
