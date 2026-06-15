"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Search,
    Code,
    Car,
    AlertTriangle,
    Brain,
    Truck,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { selectedProjects } from "@/lib/site-config";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Search,
    Code,
    Car,
    AlertTriangle,
    Brain,
    Truck,
};

export function SelectedWorkSection() {
    return (
        <section id="work" className="container py-16">
            <Reveal>
                <div className="mb-10">
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Selected Work</p>
                    <h2 className="mt-2 text-3xl font-bold text-slate-100 md:text-4xl">
                        AI Product & Technical Projects
                    </h2>
                    <p className="mt-3 max-w-2xl text-slate-400">
                        End-to-end systems spanning RAG pipelines, reinforcement learning, computer vision, and full-stack product engineering.
                    </p>
                </div>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {selectedProjects.map((project, index) => {
                    const Icon = iconMap[project.icon] ?? Code;

                    return (
                        <Reveal key={project.slug} delay={0.06 * index}>
                            <motion.div
                                whileHover={{ y: -6 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.07]"
                            >
                                {/* Gradient top bar */}
                                <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient} opacity-80 transition-opacity group-hover:opacity-100`} />

                                {/* Glow effect on hover */}
                                <div className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${project.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />

                                <div className="flex flex-1 flex-col p-6">
                                    {/* Category badge + icon */}
                                    <div className="flex items-start justify-between">
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-cyan-200">
                                            {project.category}
                                        </span>
                                        <span className={`rounded-lg bg-gradient-to-br ${project.gradient} p-2 text-white shadow-lg`}>
                                            <Icon className="h-4 w-4" />
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-4 text-xl font-bold leading-tight text-slate-100">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
                                        {project.description}
                                    </p>

                                    {/* Highlights */}
                                    <ul className="mt-4 space-y-1.5">
                                        {project.highlights.slice(0, 3).map((highlight) => (
                                            <li key={highlight} className="flex gap-2 text-xs text-slate-400">
                                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-300/60" />
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech stack */}
                                    <div className="mt-5 flex flex-wrap gap-1.5">
                                        {project.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-white/15 bg-slate-900/70 px-2.5 py-0.5 text-[11px] text-slate-300 transition-colors duration-300 group-hover:border-primary/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* GitHub link */}
                                    <Link
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/10 hover:text-white"
                                    >
                                        View on GitHub
                                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </Link>
                                </div>
                            </motion.div>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
}
