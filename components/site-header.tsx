"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";

import { navItems, profile } from "@/lib/site-config";

export function SiteHeader() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 100);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Desktop nav — initially part of hero, then minimal on scroll */}
            <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-500 ${
                    scrolled ? "bg-[#0A0A0C]/80 backdrop-blur-md" : "bg-transparent"
                }`}
            >
                <div className="mx-auto flex items-center justify-center gap-0 px-[5%] py-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="font-mono text-[0.65rem] tracking-[0.13em] uppercase text-white/35 hover:text-white/80 hover:bg-white/5 transition-all duration-200 px-4 py-2.5 rounded-[3px] text-center"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <a
                        href={profile.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[0.65rem] tracking-[0.13em] uppercase text-white/35 hover:text-white/80 hover:bg-white/5 transition-all duration-200 px-4 py-2.5 rounded-[3px] text-center flex items-center gap-1.5"
                    >
                        <FileDown className="h-3 w-3" />
                        Resume
                    </a>
                </div>
                {/* Thin line below nav — only visible at top */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className={`h-px mx-[5%] origin-left transition-opacity duration-300 ${
                        scrolled ? "bg-white/5 opacity-50" : "bg-white/8 opacity-100"
                    }`}
                />
            </motion.nav>

            {/* Mobile nav */}
            <div className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${
                scrolled ? "bg-[#0A0A0C]/80 backdrop-blur-md" : "bg-transparent"
            }`}>
                <div className="flex items-center justify-between px-5 py-4">
                    <Link href="/" className="font-mono text-xs tracking-[0.1em] uppercase text-white/60">
                        {profile.name}
                    </Link>
                    <button
                        className="text-white/50 hover:text-white/80 transition-colors p-2"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {/* Mobile overlay */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="bg-[#0A0A0C]/95 backdrop-blur-xl border-t border-white/8 px-5 pb-6 pt-2"
                        >
                            <div className="flex flex-col gap-1">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="font-mono text-xs tracking-[0.13em] uppercase text-white/40 hover:text-white/80 py-3 px-3 rounded transition-colors"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <a
                                    href={profile.resumeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono text-xs tracking-[0.13em] uppercase text-white/40 hover:text-white/80 py-3 px-3 rounded transition-colors flex items-center gap-2"
                                >
                                    <FileDown className="h-3 w-3" />
                                    Resume
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
