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

// ─── Design token — single accent for the entire timeline ────────────
// All elements share this color family; only opacity differs
const ACCENT = {
    // CSS color values
    line: "rgba(148, 196, 255, 0.82)",       // progress line core
    lineGlow: "rgba(120, 180, 255, 0.22)",   // box-shadow glow
    nodeDim: "rgba(148, 196, 255, 0.18)",    // inactive node fill
    nodeBright: "rgba(180, 215, 255, 0.92)", // active node fill
    nodeGlowDim: "rgba(140, 190, 255, 0)",
    nodeGlowBright: "rgba(140, 190, 255, 0.55)",
    labelDim: "rgba(255,255,255,0.28)",
    labelBright: "rgba(180, 218, 255, 0.92)",
    cardBorderDim: "rgba(255,255,255,0.10)",
    cardBorderBright: "rgba(148, 196, 255, 0.38)",
    cardGlowDim: "rgba(148,196,255,0)",
    cardGlowBright: "rgba(148,196,255,0.06)",
    orbCore: "rgba(200, 228, 255, 0.97)",
    orbGlow: "rgba(148, 196, 255, 0.45)",
};

// Framer Motion spring for card hover
const CARD_SPRING = { type: "spring" as const, stiffness: 270, damping: 22 };

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

    const activationStart = index / totalItems;
    const activationMid = (index + 0.45) / totalItems;
    const activationEnd = (index + 0.8) / totalItems;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.85", "end 0.3"],
        layoutEffect: false,
    });

    // Node scale + glow
    const markerScale = useSpring(
        useTransform(scrollYProgress, [activationStart, activationMid], [0.65, 1]),
        { stiffness: 200, damping: 26 }
    );
    const nodeColor = useTransform(
        scrollYProgress,
        [activationStart, activationMid],
        [ACCENT.nodeDim, ACCENT.nodeBright]
    );
    const nodeGlow = useTransform(
        scrollYProgress,
        [activationStart, activationMid],
        [ACCENT.nodeGlowDim, ACCENT.nodeGlowBright]
    );

    // Year label color
    const labelColor = useTransform(
        scrollYProgress,
        [activationStart, activationMid],
        [ACCENT.labelDim, ACCENT.labelBright]
    );

    // Card border color + glow
    const cardBorder = useTransform(
        scrollYProgress,
        [activationStart, activationEnd],
        [ACCENT.cardBorderDim, ACCENT.cardBorderBright]
    );
    const cardShadow = useTransform(
        scrollYProgress,
        [activationStart, activationEnd],
        [`0 0 0 0px ${ACCENT.cardGlowDim}`, `0 8px 32px 0px ${ACCENT.cardGlowBright}`]
    );

    return (
        <div ref={cardRef} className="relative">
            {/* Year label */}
            <motion.div
                className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 z-20"
                style={{ opacity: useTransform(scrollYProgress, [activationStart - 0.05, activationStart + 0.12], [0, 1]) }}
            >
                <motion.span
                    className="font-mono text-[0.6rem] tracking-[0.12em] uppercase bg-[#0A0A0C] px-2 py-0.5"
                    style={{ color: labelColor }}
                >
                    {item.period.split("—")[0]?.trim()}
                </motion.span>
            </motion.div>

            {/* Card — alternating left/right with scroll-driven border */}
            <motion.div
                className={`md:w-[calc(50%-2.5rem)] ${isLeft ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"}`}
                initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
                animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
                <motion.div
                    whileHover={{
                        y: -7,
                        scale: 1.015,
                    }}
                    transition={CARD_SPRING}
                    className="group rounded-lg p-6 cursor-default"
                    style={{
                        willChange: "transform",
                        border: "1px solid",
                        borderColor: cardBorder,
                        boxShadow: cardShadow,
                        background: "transparent",
                    }}
                >
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
                </motion.div>
            </motion.div>

            {/* Dot on center line */}
            <motion.div
                className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 z-20"
                style={{ scale: markerScale }}
            >
                <motion.div
                    className="h-3 w-3 rounded-full border"
                    style={{
                        backgroundColor: nodeColor,
                        borderColor: nodeColor,
                        boxShadow: useTransform(
                            nodeGlow,
                            (g) => `0 0 8px 3px ${g}`
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

    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 0.85", "end 0.3"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 22,
        restDelta: 0.001,
    });

    // Progress line height
    const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    // Glowing dot top
    const dotTop = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    // Orb visibility
    const glowOpacity = useTransform(smoothProgress, [0, 0.04, 0.96, 1], [0, 1, 1, 0]);

    // Pulse animation for the orb
    const pulseVariants = {
        pulse: {
            scale: [1, 1.5, 1],
            opacity: [0.6, 0, 0.6],
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        },
    };

    return (
        <section id="experience" ref={sectionRef} className="py-16 md:py-24 px-[6vw]">
            <SectionHeader label="Experience & Education" heading="The trajectory." />

            <div ref={timelineRef} className="relative mt-16 max-w-4xl mx-auto">

                {/* ── Base line (static, very dim) ── */}
                <div
                    className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:block"
                    style={{ width: "1px", background: "rgba(255,255,255,0.07)" }}
                />

                {/* ── Progress line (scroll-driven, unified accent color) ── */}
                <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:block" style={{ width: "1px" }}>
                    <motion.div
                        className="absolute top-0 left-0 right-0 origin-top"
                        style={{
                            height: lineHeight,
                            background: `linear-gradient(to bottom,
                                transparent 0%,
                                ${ACCENT.line.replace("0.82", "0.55")} 8%,
                                ${ACCENT.line} 35%,
                                ${ACCENT.line} 80%,
                                ${ACCENT.line.replace("0.82", "0.45")} 100%
                            )`,
                            boxShadow: `0 0 8px 1px ${ACCENT.lineGlow}`,
                        }}
                    />

                    {/* ── Glowing orb tip ── */}
                    <motion.div
                        className="absolute z-30"
                        style={{
                            top: dotTop,
                            left: "50%",
                            transform: "translateX(-50%)",
                        }}
                    >
                        <motion.div
                            style={{ opacity: glowOpacity }}
                            className="relative flex items-center justify-center"
                        >
                            {/* Pulse ring */}
                            <motion.div
                                variants={pulseVariants}
                                animate="pulse"
                                className="absolute rounded-full"
                                style={{
                                    width: "16px",
                                    height: "16px",
                                    background: `radial-gradient(circle, ${ACCENT.orbGlow} 0%, transparent 70%)`,
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
                                    background: ACCENT.orbCore,
                                    boxShadow: `0 0 8px 3px ${ACCENT.orbGlow}, 0 0 18px 6px rgba(148,196,255,0.18)`,
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

                    {/* End node — activates at full scroll */}
                    <div className="hidden md:flex justify-center pt-4">
                        <motion.div
                            className="h-3 w-3 rounded-full border"
                            style={{
                                scale: useTransform(smoothProgress, [0.85, 1], [0.4, 1]),
                                opacity: useTransform(smoothProgress, [0.82, 1], [0, 1]),
                                backgroundColor: ACCENT.nodeBright,
                                borderColor: ACCENT.nodeBright,
                                boxShadow: useTransform(
                                    smoothProgress,
                                    [0.9, 1],
                                    [`0 0 0px 0px ${ACCENT.nodeGlowDim}`, `0 0 10px 3px ${ACCENT.nodeGlowBright}`]
                                ),
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
