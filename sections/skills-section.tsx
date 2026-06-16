"use client";

import { motion } from "framer-motion";
import { BrainCircuit, LayoutTemplate, ServerCog, Wrench, Search, Terminal } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { skillGroups } from "@/lib/site-config";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Brain: BrainCircuit,
    Search,
    Terminal,
    ServerCog,
    LayoutTemplate,
    Wrench,
};

const cardSpring = { type: "spring" as const, stiffness: 280, damping: 22 };

export function SkillsSection() {
    return (
        <section id="skills" className="py-16 md:py-24 px-[6vw]">
            <SectionHeader label="Technical Stack" heading="Engineering capabilities." />

            <Reveal delay={0.05}>
                <p className="font-sans text-[0.95rem] text-white/45 mt-4 mb-10 max-w-2xl">
                    Tools and technologies I use to build AI systems, full-stack applications,
                    and research prototypes.
                </p>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {skillGroups.map((group, index) => {
                    const Icon = iconMap[group.icon as keyof typeof iconMap] ?? Wrench;

                    return (
                        <Reveal key={group.title} delay={0.06 * index}>
                            <motion.div
                                whileHover={{
                                    y: -8,
                                    scale: 1.025,
                                    boxShadow: "0 12px 40px rgba(180,210,255,0.07), 0 0 0 1px rgba(255,255,255,0.14)",
                                }}
                                transition={cardSpring}
                                className="group rounded-lg border border-white/10 bg-transparent p-6 cursor-default"
                                style={{ willChange: "transform" }}
                            >
                                {/* Title row */}
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="rounded-md border border-white/10 bg-white/5 p-2.5 text-white/50 transition-all duration-300 group-hover:text-white/85 group-hover:border-white/22 group-hover:bg-white/8">
                                        <Icon className="h-4 w-4" />
                                    </span>
                                    <h3 className="font-serif text-lg font-bold text-foreground">
                                        {group.title}
                                    </h3>
                                </div>

                                {/* Skill pills */}
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="font-mono text-[0.62rem] tracking-[0.05em] rounded-full border border-white/10 bg-transparent px-3 py-1.5 text-white/40 transition-all duration-300 group-hover:border-white/20 group-hover:text-white/60"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
}
