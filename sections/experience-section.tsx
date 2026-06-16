"use client";

import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { experienceTimeline } from "@/lib/site-config";

export function ExperienceSection() {
    return (
        <section id="experience" className="py-16 md:py-24 px-[6vw]">
            <SectionHeader label="Experience & Education" heading="The trajectory." />

            {/* Centered timeline */}
            <div className="relative mt-16 max-w-4xl mx-auto">
                {/* Center line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

                <div className="space-y-12 md:space-y-16">
                    {experienceTimeline.map((item, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <Reveal key={item.title} delay={0.08 * index}>
                                <div className="relative">
                                    {/* Year marker on center line */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 z-10">
                                        <span className="font-mono text-[0.6rem] tracking-[0.1em] text-white/30 uppercase bg-[#0A0A0C] px-2">
                                            {item.period.split("—")[0]?.trim()}
                                        </span>
                                    </div>

                                    {/* Card — alternating left/right */}
                                    <div className={`md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'}`}>
                                        <div className="rounded-lg border border-white/12 bg-transparent p-6 transition-all duration-300 hover:border-white/22 hover:bg-white/[0.02]">
                                            {/* Header */}
                                            <div className="flex flex-col gap-1 mb-4">
                                                <div className="flex items-start justify-between gap-4">
                                                    <h3 className="font-serif text-lg font-bold text-foreground">
                                                        {item.title}
                                                    </h3>
                                                    <span className="font-mono text-[0.55rem] tracking-[0.1em] text-white/30 uppercase whitespace-nowrap shrink-0 mt-1">
                                                        {item.period}
                                                    </span>
                                                </div>
                                                <p className="font-sans text-[0.83rem] text-white/40">
                                                    {item.organization}
                                                </p>
                                                <p className="font-mono text-[0.6rem] tracking-[0.08em] text-white/25 uppercase">
                                                    {item.location}
                                                </p>
                                            </div>

                                            {/* Impact points */}
                                            <ul className="space-y-2.5">
                                                {item.impact.map((point) => (
                                                    <li key={point} className="flex gap-3 text-[0.83rem] leading-relaxed text-white/50">
                                                        <span className="mt-[9px] h-[4px] w-[4px] shrink-0 rounded-full bg-primary/40" />
                                                        <span className="font-sans">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Dot on center line */}
                                    <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2">
                                        <div className="h-2.5 w-2.5 rounded-full bg-white/20 border border-white/30" />
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}

                    {/* End dot */}
                    <div className="hidden md:flex justify-center">
                        <div className="h-3 w-3 rounded-full bg-white/15" />
                    </div>
                </div>
            </div>
        </section>
    );
}
