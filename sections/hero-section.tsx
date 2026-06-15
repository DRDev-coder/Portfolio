"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, FileDown, Sparkles, GraduationCap, Code2, Brain } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { trackResumeDownload } from "@/lib/analytics";
import { profile } from "@/lib/site-config";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

const stats = [
    { label: "CGPA", value: "9.13", icon: GraduationCap },
    { label: "Projects", value: "6+", icon: Code2 },
    { label: "Focus", value: "AI/ML", icon: Brain },
];

export function HeroSection() {
    return (
        <section className="relative isolate overflow-hidden pb-24 pt-28 md:pt-36">
            {/* Background Effects */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e293b_0%,#0f172a_50%,#020617_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_35%,black,transparent)]" />

                {/* Animated gradient orbs */}
                <motion.div
                    className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[100px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/15 blur-[80px]"
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
                <motion.div
                    className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[60px]"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.15, 0.3, 0.15],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                />
            </div>

            <div className="container">
                <motion.div
                    initial="hidden"
                    animate="show"
                    transition={{ staggerChildren: 0.12 }}
                    className="mx-auto max-w-4xl"
                >
                    {/* Status badge */}
                    <motion.div
                        variants={fadeUp}
                        transition={{ duration: 0.7 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        </span>
                        Open to Research & Internship Opportunities
                    </motion.div>

                    {/* Name with gradient */}
                    <motion.h1
                        variants={fadeUp}
                        transition={{ duration: 0.7 }}
                        className="text-balance text-5xl font-black tracking-tight text-slate-100 md:text-7xl"
                    >
                        <span className="text-gradient">{profile.name}</span>
                    </motion.h1>

                    {/* Role with typing effect */}
                    <motion.div
                        variants={fadeUp}
                        transition={{ duration: 0.7 }}
                        className="mt-5 flex items-center gap-3"
                    >
                        <Sparkles className="h-5 w-5 text-accent" />
                        <p className="text-lg font-medium text-slate-200 md:text-xl">
                            {profile.role}
                        </p>
                    </motion.div>

                    {/* Bio */}
                    <motion.p
                        variants={fadeUp}
                        transition={{ duration: 0.7 }}
                        className="mt-6 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg"
                    >
                        {profile.shortBio}
                    </motion.p>

                    {/* Stats row */}
                    <motion.div
                        variants={fadeUp}
                        transition={{ duration: 0.7 }}
                        className="mt-8 flex flex-wrap gap-6"
                    >
                        {stats.map((stat) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={stat.label}
                                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur"
                                >
                                    <Icon className="h-5 w-5 text-cyan-300" />
                                    <div>
                                        <p className="text-xl font-bold text-slate-100">{stat.value}</p>
                                        <p className="text-xs uppercase tracking-widest text-slate-400">{stat.label}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* CTA buttons */}
                    <motion.div
                        variants={fadeUp}
                        transition={{ duration: 0.7 }}
                        className="mt-10 flex flex-wrap items-center gap-4"
                    >
                        <Button asChild size="lg" className="group relative overflow-hidden">
                            <Link href="#work" className="gap-2">
                                <span className="relative z-10 flex items-center gap-2">
                                    View Projects
                                    <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                                </span>
                            </Link>
                        </Button>

                        <Button variant="secondary" size="lg" asChild className="group">
                            <a
                                href={profile.resumeUrl}
                                download
                                onClick={() => trackResumeDownload("hero_resume_button", profile.resumeFileName)}
                                className="gap-2"
                            >
                                Download Resume
                                <FileDown className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                            </a>
                        </Button>
                    </motion.div>

                    {/* Education badge */}
                    <motion.div
                        variants={fadeUp}
                        transition={{ duration: 0.7 }}
                        className="mt-8 inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-slate-300"
                    >
                        <GraduationCap className="h-4 w-4 text-primary" />
                        B.Tech CSE @ IIIT Sri City • CGPA 9.13
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
