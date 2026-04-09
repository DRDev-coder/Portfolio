import { BrainCircuit, LayoutTemplate, ServerCog, Wrench } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillGroups } from "@/lib/site-config";

const iconMap = {
    Brain: BrainCircuit,
    ServerCog,
    LayoutTemplate,
    Wrench,
};

export function SkillsSection() {
    return (
        <section id="skills" className="container py-16">
            <Reveal>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Skills</p>
            </Reveal>
            <Reveal delay={0.05}>
                <h2 className="mt-2 text-3xl font-bold text-slate-100 md:text-4xl">
                    Structured Engineering Capability
                </h2>
            </Reveal>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
                {skillGroups.map((group, index) => {
                    const Icon = iconMap[group.icon as keyof typeof iconMap] ?? Wrench;

                    return (
                        <Reveal key={group.title} delay={0.08 * index}>
                            <Card className="group border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-white/[0.08]">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-slate-100">
                                        <span className="rounded-lg border border-cyan-300/35 bg-cyan-300/10 p-2 text-cyan-300 transition-transform duration-300 group-hover:scale-110">
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
                                                className="rounded-full border border-white/15 bg-slate-900/70 px-3 py-1 text-xs tracking-wide text-slate-300 transition-colors duration-300 group-hover:border-primary/35 group-hover:text-slate-100"
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
