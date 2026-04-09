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
                    Impact Timeline
                </h2>
            </Reveal>

            <div className="relative mt-10 pl-6 md:pl-10">
                <div className="absolute bottom-0 left-2 top-0 w-px bg-gradient-to-b from-primary/20 via-cyan-300/40 to-transparent md:left-4" />

                <div className="space-y-8">
                    {experienceTimeline.map((item, index) => (
                        <Reveal key={item.title} delay={0.08 * index}>
                            <article className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-lg transition-all duration-300 hover:border-primary/35 hover:bg-white/[0.08]">
                                <span className="absolute -left-[1.18rem] top-7 h-3.5 w-3.5 rounded-full border border-cyan-300/60 bg-slate-900 md:-left-[1.7rem]" />
                                <p className="text-xs uppercase tracking-[0.18em] text-cyan-300/80">{item.period}</p>
                                <h3 className="mt-2 text-xl font-semibold text-slate-100">{item.title}</h3>
                                <p className="mt-1 text-sm text-slate-400">{item.organization}</p>

                                <ul className="mt-4 space-y-2">
                                    {item.impact.map((point) => (
                                        <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/80" />
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
