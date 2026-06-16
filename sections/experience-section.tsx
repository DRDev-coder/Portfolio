"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useInView,
} from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { experienceTimeline } from "@/lib/site-config";

/* ─── Animated timeline card ─────────────────────────────────────── */
function TimelineCard({
    item,
    index,
    isLeft,
    totalItems,
    containerRef,
}: {
    item: (typeof experienceTimeline)[0];
    index: number;
    isLeft: boolean;
    totalItems: number;
    containerRef: React.RefObject<HTMLDivElement | null>;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: true, margin: "-80px 0px" });

    // Map card position to progress range
    const activationStart = index / totalItems;
    const activationEnd = (index + 0.6) / totalItems;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "end 0.3"],
        layoutEffect: false,
    });

    // Marker glow activation
    const markerScale = useTransform(
        scrollYProgress,
        [activationStart, activationEnd],
        [0.7, 1]
    );
    const markerGlow = useTransform(
        scrollYProgress,
        [activationStart, activationEnd],
        [0, 1]
    );
    const markerOpacity = useTransform(
        scrollYProgress,
        [activationStart - 0.05, activationStart + 0.1],
        [0.2, 1]
    );

    const springScale = useSpring(markerScale, { stiffness: 200, damping: 25 });

    return (
        <div ref={cardRef} className="relative">
            {/* Year label on center line */}
            <motion.div
                className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 z-20"
                style={{ opacity: markerOpacity }}
            >
                <span className="font-mono text-[0.6rem] tracking-[0.1em] text-white/50 uppercase bg-[#0A0A0C] px-2">
                    {item.period.split("—")[0]?.trim()}
                </span>
            </motion.div>

            {/* Card — alternating left/right */}
            <motion.div
                className={`md:w-[calc(50%-2.5rem)] ${isLeft ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"}`}
                initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
                animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="group rounded-lg border border-white/10 bg-transparent p-6 transition-all duration-400 hover:border-white/20 hover:bg-white/[0.025]">
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
                        <p className="font-sans text-[0.83rem] text-white/45">
                            {item.organization}
                        </p>
                        <p className="font-mono text-[0.6rem] tracking-[0.08em] text-white/25 uppercase">
                            {item.location}
                        </p>
                    </div>

                    {/* Impact points */}
                    <ul className="space-y-2.5">
                        {item.impact.map((point, i) => (
                            <motion.li
                                key={point}
                                className="flex gap-3 text-[0.83rem] leading-relaxed text-white/50"
                                initial={{ opacity: 0, x: isLeft ? -8 : 8 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.45, delay: 0.25 + i * 0.08, ease: "easeOut" }}
                            >
                                <span className="mt-[9px] h-[4px] w-[4px] shrink-0 rounded-full bg-primary/40" />
                                <span className="font-sans">{point}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.div>

            {/* Dot on center line */}
            <motion.div
                className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 z-20"
                style={{ scale: springScale }}
            >
                <motion.div
                    className="h-3 w-3 rounded-full border border-white/40 bg-[#0A0A0C]"
                    style={{
                        boxShadow: useTransform(
                            markerGlow,
                            [0, 1],
                            ["0 0 0px 0px rgba(255,255,255,0)", "0 0 8px 2px rgba(200,212,220,0.45)"]
                        ),
                        backgroundColor: useTransform(
                            markerGlow,
                            [0, 1],
                            ["rgba(255,255,255,0.05)", "rgba(220,232,240,0.85)"]
                        ),
                    }}
                />
            </motion.div>
        </div>
    );
}

/* ─── Main section ────────────────────────────────────────────────── */
export function ExperienceSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    // Scroll progress tracking the entire timeline container
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 0.85", "end 0.3"],
    });

    // Smooth spring on scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 22,
        restDelta: 0.001,
    });

    // Progress line height: 0% → 100%
    const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    // Glowing dot top position (% along the line)
    const dotTop = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    // Glow pulse intensity
    const glowOpacity = useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

    return (
        <section id="experience" ref={sectionRef} className="py-16 md:py-24 px-[6vw]">
            <SectionHeader label="Experience & Education" heading="The trajectory." />

            {/* Timeline container */}
            <div ref={timelineRef} className="relative mt-16 max-w-4xl mx-auto">

                {/* ── Base line (static, low opacity) ── */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/8 -translate-x-1/2 hidden md:block" />

                {/* ── Progress line (scroll-driven) ── */}
                <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:block" style={{ width: "1px" }}>
                    <motion.div
                        className="absolute top-0 left-0 right-0 origin-top"
                        style={{
                            height: lineHeight,
                            background: "linear-gradient(to bottom, rgba(180,210,255,0.0) 0%, rgba(200,228,255,0.7) 30%, rgba(180,210,240,0.85) 70%, rgba(160,200,230,0.5) 100%)",
                            boxShadow: "0 0 6px 1px rgba(180,210,255,0.35)",
                        }}
                    />

                    {/* ── Glowing tip dot ── */}
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 z-30"
                        style={{ top: dotTop }}
                    >
                        <motion.div
                            style={{ opacity: glowOpacity }}
                            className="relative flex items-center justify-center"
                        >
                            {/* Outer soft glow ring */}
                            <div
                                className="absolute rounded-full"
                                style={{
                                    width: "14px",
                                    height: "14px",
                                    background: "radial-gradient(circle, rgba(200,228,255,0.25) 0%, transparent 70%)",
                                    transform: "translate(-50%, -50%)",
                                    top: "50%",
                                    left: "50%",
                                }}
                            />
                            {/* Core dot */}
                            <div
                                className="rounded-full"
                                style={{
                                    width: "5px",
                                    height: "5px",
                                    background: "rgba(220,240,255,0.95)",
                                    boxShadow: "0 0 6px 2px rgba(180,220,255,0.6), 0 0 12px 4px rgba(160,210,255,0.25)",
                                    transform: "translateX(-50%)",
                                    marginLeft: "0.5px",
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* ── Timeline items ── */}
                <div className="space-y-12 md:space-y-20">
                    {experienceTimeline.map((item, index) => (
                        <TimelineCard
                            key={item.title}
                            item={item}
                            index={index}
                            isLeft={index % 2 === 0}
                            totalItems={experienceTimeline.length}
                            containerRef={timelineRef}
                        />
                    ))}

                    {/* End marker */}
                    <div className="hidden md:flex justify-center pt-4">
                        <motion.div
                            className="h-3 w-3 rounded-full border border-white/20 bg-white/10"
                            style={{
                                scale: useTransform(smoothProgress, [0.85, 1], [0.5, 1]),
                                opacity: useTransform(smoothProgress, [0.8, 1], [0, 1]),
                                boxShadow: useTransform(
                                    smoothProgress,
                                    [0.9, 1],
                                    ["0 0 0px 0px rgba(200,220,255,0)", "0 0 8px 2px rgba(200,220,255,0.3)"]
                                ),
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
