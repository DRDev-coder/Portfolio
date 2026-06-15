import { Briefcase, MapPin } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { experienceTimeline } from "@/lib/site-config";

export function ExperienceSection() {
    return (
        <section id="experience" className="container py-16">
            <Reveal>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Experience</p>
            </Reveal>
            <Reveal delay={0.05}>
                <h2 className="mt-2 text-3xl font-bold text-slate-100 md:text-4xl">
                    Professional Journey
                </h2>
            </Reveal>

            <div className="relative mt-10 pl-8 md:pl-12">
                {/* Timeline line */}
                <div className="absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-primary via-cyan-300/40 to-transparent md:left-5" />

                <div className="space-y-8">
                    {experienceTimeline.map((item, index) => (
                        <Reveal key={item.title} delay={0.08 * index}>
                            <article className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-lg transition-all duration-300 hover:border-primary/35 hover:bg-white/[0.08]">
                                {/* Timeline dot */}
                                <span className="absolute -left-[1.38rem] top-7 flex h-4 w-4 items-center justify-center md:-left-[1.88rem]">
                                    <span className="absolute h-4 w-4 animate-dot-pulse rounded-full border border-cyan-300/60 bg-slate-900" />
                                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                                </span>

                                {/* Header */}
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.18em] text-cyan-300/80">{item.period}</p>
                                        <h3 className="mt-2 flex items-center gap-2 text-xl font-semibold text-slate-100">
                                            <Briefcase className="h-4 w-4 text-primary" />
                                            {item.title}
                                        </h3>
                                        <p className="mt-1 text-sm text-slate-400">{item.organization}</p>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                        <MapPin className="h-3 w-3" />
                                        {item.location}
                                    </div>
                                </div>

                                {/* Impact points */}
                                <ul className="mt-5 space-y-3">
                                    {item.impact.map((point) => (
                                        <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/80 transition-colors group-hover:bg-cyan-300" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
