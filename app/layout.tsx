import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Playfair_Display } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { ParticleBackground } from "@/components/particle-background";
import { profile } from "@/lib/site-config";
import "@/styles/globals.css";

const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-dm-sans",
    display: "swap",
    weight: ["400", "500", "700"],
});

const dmMono = DM_Mono({
    subsets: ["latin"],
    variable: "--font-dm-mono",
    display: "swap",
    weight: ["400", "500"],
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
    weight: ["400", "700", "800"],
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
        <html lang="en" className="dark" suppressHydrationWarning>
            <body
                suppressHydrationWarning
                className={`${dmSans.variable} ${dmMono.variable} ${playfair.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
            >
                <ParticleBackground />
                {/* Bottom fade gradient (matching reference) */}
                <div
                    className="fixed bottom-0 left-0 right-0 h-20 pointer-events-none z-[48]"
                    style={{ background: "linear-gradient(to top, rgba(10,10,12,0.72) 0%, transparent 100%)" }}
                />
                <div className="relative z-10">
                    <SiteHeader />
                    <main>{children}</main>
                </div>
            </body>
        </html>
    );
}
