"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, FileDown, Sparkles } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { trackResumeDownload } from "@/lib/analytics";
import { profile } from "@/lib/site-config";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

export function HeroSection() {
    return (
        <section className="relative isolate overflow-hidden pb-20 pt-24 md:pt-32">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e293b_0%,#0f172a_50%,#020617_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_35%,black,transparent)]" />
                <div className="absolute -left-28 top-1/3 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
                <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
            </div>

            <div className="container">
                <motion.div
                    initial="hidden"
                    animate="show"
                    transition={{ staggerChildren: 0.12 }}
                    className="mx-auto max-w-4xl"
                >
                    <motion.div
                        variants={fadeUp}
                        transition={{ duration: 0.7 }}
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur"
                    >
                        <Sparkles className="h-4 w-4 text-accent" />
                        Building for high-impact research and product engineering
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        transition={{ duration: 0.7 }}
                        className="text-balance text-4xl font-black tracking-tight text-slate-100 md:text-6xl"
                    >
                        <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-300 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-shift">
                            {profile.name}
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        transition={{ duration: 0.7 }}
                        className="mt-5 text-lg text-slate-300 md:text-xl"
                    >
                        Computer Science Student | AI & Systems Enthusiast
                    </motion.p>

                    <motion.p
                        variants={fadeUp}
                        transition={{ duration: 0.7 }}
                        className="mt-6 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg"
                    >
                        {profile.shortBio}
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        transition={{ duration: 0.7 }}
                        className="mt-9 flex flex-wrap items-center gap-4"
                    >
                        <Button asChild size="lg">
                            <Link href="#work" className="gap-2">
                                View Work
                                <ArrowDownRight className="h-4 w-4" />
                            </Link>
                        </Button>

                        <Button variant="secondary" size="lg" asChild>
                            <a
                                href={profile.resumeUrl}
                                download
                                onClick={() => trackResumeDownload("hero_resume_button", profile.resumeFileName)}
                                className="gap-2"
                            >
                                Download Resume
                                <FileDown className="h-4 w-4" />
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
