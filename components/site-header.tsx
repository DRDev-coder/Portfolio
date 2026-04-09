import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { navItems, profile } from "@/lib/site-config";

export function SiteHeader() {
    return (
        <header className="sticky top-4 z-40 mx-auto w-[min(95%,72rem)] rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
                <Link href="/" className="text-sm font-semibold tracking-wide text-slate-100">
                    {profile.name}
                </Link>

                <nav className="hidden items-center gap-5 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm text-slate-300 transition-colors hover:text-white"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <Button variant="secondary" size="sm" asChild>
                        <Link href={profile.resumeUrl} target="_blank">
                            Resume
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
