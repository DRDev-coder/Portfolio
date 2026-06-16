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
import { SectionHeader } from "@/components/section-header";
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
        <section id="work" className="py-16 md:py-24 px-[6vw]">
            <SectionHeader label="Selected Work" heading="AI Product & Technical Projects" />

            <Reveal delay={0.05}>
                <p className="font-sans text-[0.95rem] text-white/50 mt-4 mb-10 max-w-2xl">
                    End-to-end systems spanning RAG pipelines, reinforcement learning, computer vision,
                    and full-stack product engineering.
                </p>
            </Reveal>

            {/* Project grid — 2 columns on larger screens */}
            <div className="grid gap-5 md:grid-cols-2">
                {selectedProjects.map((project, index) => {
                    const Icon = iconMap[project.icon] ?? Code;

                    return (
                        <Reveal key={project.slug} delay={0.06 * index}>
                            <motion.div
                                whileHover={{ y: -4 }}
                                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                                className="group relative flex flex-col h-full rounded-lg border border-white/10 bg-transparent transition-all duration-300 hover:border-white/20 hover:bg-white/[0.02]"
                            >
                                <div className="flex flex-col p-6 flex-1">
                                    {/* Category + icon row */}
                                    <div className="flex items-start justify-between mb-4">
                                        <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-white/35">
                                            {project.category}
                                        </span>
                                        <span className="rounded-md bg-white/5 border border-white/10 p-2 text-white/50 transition-colors group-hover:text-white/80">
                                            <Icon className="h-4 w-4" />
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-serif text-xl font-bold leading-tight text-foreground mb-3">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="font-sans text-[0.87rem] leading-relaxed text-white/50 flex-1 mb-4">
                                        {project.description}
                                    </p>

                                    {/* Highlights */}
                                    <ul className="space-y-1.5 mb-5">
                                        {project.highlights.slice(0, 3).map((highlight) => (
                                            <li key={highlight} className="flex gap-2.5 text-[0.78rem] text-white/40">
                                                <span className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-primary/50" />
                                                <span className="font-sans">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech stack */}
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {project.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="font-mono text-[0.6rem] tracking-[0.05em] rounded-full border border-white/10 bg-transparent px-2.5 py-1 text-white/40 transition-colors group-hover:border-white/18 group-hover:text-white/55"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* GitHub link */}
                                    <Link
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-transparent px-4 py-2.5 font-mono text-[0.68rem] tracking-[0.08em] uppercase text-white/50 transition-all duration-300 hover:border-white/25 hover:text-white/80"
                                    >
                                        View on GitHub
                                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
