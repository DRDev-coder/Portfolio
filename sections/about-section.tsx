"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { profile, education, leadership } from "@/lib/site-config";

const CARD_SPRING = { type: "spring" as const, stiffness: 280, damping: 22 };
const CARD_HOVER = {
    y: -6,
    scale: 1.02,
    boxShadow: "0 10px 36px rgba(180,210,255,0.06), 0 0 0 1px rgba(255,255,255,0.16)",
};

export function AboutSection() {
    return (
        <section id="about" className="relative pt-16 md:pt-24 pb-8">
            <div className="px-[6vw]">
                {/* Section header */}
                <SectionHeader label="About" heading="Research-driven engineer building AI at product scale." />

                {/* Quote */}
                <Reveal delay={0.1}>
                    <p className="font-sans text-[1.05rem] leading-[1.65] text-primary mt-8 mb-10 border-l-2 border-primary/30 pl-4 max-w-[520px]">
                        {profile.aboutBio}
                    </p>
                </Reveal>

                {/* 2-column layout: bio + info cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[6vw] items-start">
                    {/* Left — bio text */}
                    <div className="self-start">
                        <Reveal delay={0.15}>
                            <p className="font-sans text-[0.95rem] leading-[1.8] text-white/55 mb-5 max-w-[580px] text-justify">
                                {profile.shortBio}
                            </p>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="font-sans text-[0.95rem] leading-[1.8] text-white/55 max-w-[580px] text-justify">
                                {profile.blurb}
                            </p>
                        </Reveal>
                    </div>

                    {/* Right — info cards */}
                    <div className="flex flex-col gap-3">
                        <Reveal delay={0.15}>
                            <motion.div
                                whileHover={CARD_HOVER}
                                transition={CARD_SPRING}
                                className="info-card"
                                style={{ willChange: "transform" }}
                            >
                                <div className="dot-marker" />
                                <div>
                                    <p className="font-serif font-extrabold text-[0.95rem] text-foreground mb-1.5">
                                        AI Systems & RAG
                                    </p>
                                    <p className="font-sans text-[0.83rem] leading-[1.65] text-white/55 text-justify">
                                        Building production-style RAG pipelines with BM25, vector retrieval, hybrid fusion, cross-encoder reranking, and citation-grounded generation.
                                    </p>
                                </div>
                            </motion.div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <motion.div
                                whileHover={CARD_HOVER}
                                transition={CARD_SPRING}
                                className="info-card"
                                style={{ willChange: "transform" }}
                            >
                                <div className="dot-marker" />
                                <div>
                                    <p className="font-serif font-extrabold text-[0.95rem] text-foreground mb-1.5">
                                        Deep Learning & RL
                                    </p>
                                    <p className="font-sans text-[0.83rem] leading-[1.65] text-white/55 text-justify">
                                        DQN with prioritized experience replay, reward shaping for autonomous driving, self-supervised learning benchmarks (SimCLR, MoCo v2, BYOL).
                                    </p>
                                </div>
                            </motion.div>
                        </Reveal>

                        <Reveal delay={0.25}>
                            <motion.div
                                whileHover={CARD_HOVER}
                                transition={CARD_SPRING}
                                className="info-card"
                                style={{ willChange: "transform" }}
                            >
                                <div className="dot-marker" />
                                <div>
                                    <p className="font-serif font-extrabold text-[0.95rem] text-foreground mb-1.5">
                                        Full-Stack Product Engineering
                                    </p>
                                    <p className="font-sans text-[0.83rem] leading-[1.65] text-white/55 text-justify">
                                        End-to-end application development with React, Next.js, Node.js, and FastAPI. From concept to deployment with clean architecture.
                                    </p>
                                </div>
                            </motion.div>
                        </Reveal>

                        {/* Education cards */}
                        {education.map((edu, i) => (
                            <Reveal key={edu.institution} delay={0.3 + i * 0.05}>
                                <motion.div
                                    whileHover={CARD_HOVER}
                                    transition={CARD_SPRING}
                                    className="info-card"
                                    style={{ willChange: "transform" }}
                                >
                                    <div className="dot-marker" />
                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                                            <div>
                                                <p className="font-serif font-extrabold text-[0.95rem] text-foreground mb-0.5">
                                                    {edu.institution}
                                                </p>
                                                <p className="font-sans text-[0.83rem] text-white/45">
                                                    {edu.degree}
                                                </p>
                                            </div>
                                            <div className="text-right shrink-0">
                                                <p className="font-mono text-[0.58rem] tracking-[0.1em] text-white/35 uppercase">
                                                    {edu.period}
                                                </p>
                                                <p className="font-sans text-[0.83rem] font-semibold text-emerald-400 mt-0.5">
                                                    {edu.grade}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Reveal>
                        ))}

                        {/* Achievements */}
                        <Reveal delay={0.4}>
                            <div className="p-5 border border-white/7 rounded-md">
                                <p className="font-mono text-[0.55rem] tracking-[0.18em] text-white/30 uppercase mb-3">
                                    Achievements & Leadership
                                </p>
                                <div className="flex flex-col gap-2">
                                    <p className="font-sans text-[0.83rem] leading-[1.5] text-white/40">
                                        🏆 {leadership.awards}
                                    </p>
                                    <p className="font-sans text-[0.83rem] leading-[1.5] text-white/40">
                                        👨‍🎓 {leadership.headboy}
                                    </p>
                                    <p className="font-sans text-[0.83rem] leading-[1.5] text-white/40">
                                        🗣️ Languages: {leadership.languages}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
