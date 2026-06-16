"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

const interests = [
    {
        title: "Retrieval-Augmented Generation",
        description: "Hybrid retrieval with BM25, vector search, reranking, and citation-grounded generation",
    },
    {
        title: "Reinforcement Learning",
        description: "Deep Q-Networks, reward shaping, and policy evaluation for autonomous decision-making",
    },
    {
        title: "Self-Supervised Learning",
        description: "Contrastive and non-contrastive representation learning (SimCLR, MoCo, BYOL)",
    },
    {
        title: "Computer Vision",
        description: "Crowd analytics, density estimation, and temporal risk detection from video streams",
    },
    {
        title: "Prompt Engineering & LLM Ops",
        description: "Citation-aware prompting, multi-LLM orchestration, and evaluation frameworks",
    },
    {
        title: "AI Product Development",
        description: "Building reliable AI features at product scale with knowledge operations and workflow design",
    },
];

const cardSpring = { type: "spring" as const, stiffness: 280, damping: 22 };

export function ResearchInterestsSection() {
    return (
        <section className="py-16 md:py-24 px-[6vw]" id="research">
            <SectionHeader label="Research Interests" heading="Areas of deep curiosity." />

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {interests.map((interest, index) => (
                    <Reveal key={interest.title} delay={0.06 * index}>
                        <motion.div
                            whileHover={{
                                y: -8,
                                scale: 1.025,
                                boxShadow: "0 12px 40px rgba(180,210,255,0.07), 0 0 0 1px rgba(255,255,255,0.14)",
                            }}
                            transition={cardSpring}
                            className="group rounded-lg border border-white/10 bg-transparent p-5 cursor-default"
                            style={{ willChange: "transform" }}
                        >
                            <div className="flex items-start gap-3">
                                <div className="dot-marker mt-1 group-hover:bg-white/60 transition-colors duration-300" />
                                <div>
                                    <h3 className="font-serif font-bold text-foreground mb-1.5 group-hover:text-white transition-colors duration-300">
                                        {interest.title}
                                    </h3>
                                    <p className="font-sans text-[0.83rem] leading-relaxed text-white/45 group-hover:text-white/60 transition-colors duration-300">
                                        {interest.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
