"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { navItems, profile } from "@/lib/site-config";

export function SiteHeader() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-4 z-40 mx-auto w-[min(95%,72rem)] rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
                <Link href="/" className="text-sm font-semibold tracking-wide text-slate-100">
                    {profile.name}
                </Link>

                {/* Desktop nav */}
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
                        <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                    </Button>
                    {/* Mobile hamburger */}
                    <button
                        className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-white/10 md:hidden"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile nav */}
            {mobileOpen && (
                <nav className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3 md:hidden">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                            onClick={() => setMobileOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}
