import { BrainCircuit, LayoutTemplate, ServerCog, Wrench, Search, Terminal } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillGroups } from "@/lib/site-config";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Brain: BrainCircuit,
    Search,
    Terminal,
    ServerCog,
    LayoutTemplate,
    Wrench,
};

// Assign gradient colors to skill groups
const gradients = [
    "from-violet-500 to-purple-600",
    "from-cyan-500 to-blue-600",
    "from-amber-500 to-orange-600",
    "from-emerald-500 to-teal-600",
    "from-rose-500 to-pink-600",
    "from-indigo-500 to-blue-600",
];

export function SkillsSection() {
    return (
        <section id="skills" className="container py-16">
            <Reveal>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Technical Skills</p>
            </Reveal>
            <Reveal delay={0.05}>
                <h2 className="mt-2 text-3xl font-bold text-slate-100 md:text-4xl">
                    Engineering Capabilities
                </h2>
                <p className="mt-3 max-w-2xl text-slate-400">
                    Tools and technologies I use to build AI systems, full-stack applications, and research prototypes.
                </p>
            </Reveal>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {skillGroups.map((group, index) => {
                    const Icon = iconMap[group.icon as keyof typeof iconMap] ?? Wrench;
                    const gradient = gradients[index % gradients.length];

                    return (
                        <Reveal key={group.title} delay={0.08 * index}>
                            <Card className="group relative overflow-hidden border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-white/[0.08]">
                                {/* Top gradient line */}
                                <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${gradient} opacity-60 transition-opacity group-hover:opacity-100`} />

                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-slate-100">
                                        <span className={`rounded-lg bg-gradient-to-br ${gradient} p-2.5 text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                                            <Icon className="h-4 w-4" />
                                        </span>
                                        {group.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {group.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full border border-white/15 bg-slate-900/70 px-3 py-1.5 text-xs tracking-wide text-slate-300 transition-all duration-300 group-hover:border-primary/35 group-hover:text-slate-100"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
}
