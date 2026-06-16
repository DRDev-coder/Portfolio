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
                            <div className="group rounded-lg border border-white/10 bg-transparent p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.02]">
                                {/* Title row */}
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="rounded-md border border-white/10 bg-white/5 p-2.5 text-white/50 transition-all duration-300 group-hover:text-white/80 group-hover:border-white/20">
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
                                            className="font-mono text-[0.62rem] tracking-[0.05em] rounded-full border border-white/10 bg-transparent px-3 py-1.5 text-white/40 transition-all duration-300 group-hover:border-white/18 group-hover:text-white/55"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
}
