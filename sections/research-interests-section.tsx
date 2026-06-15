import { Lightbulb } from "lucide-react";

import { Reveal } from "@/components/reveal";

export function ResearchInterestsSection() {
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

    return (
        <section className="container py-16" id="research">
            <Reveal>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Research Interests</p>
            </Reveal>
            <Reveal delay={0.05}>
                <h2 className="mt-2 text-3xl font-bold text-slate-100 md:text-4xl">
                    Areas of Deep Curiosity
                </h2>
            </Reveal>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {interests.map((interest, index) => (
                    <Reveal key={interest.title} delay={0.06 * index}>
                        <div className="group rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-white/[0.07]">
                            <div className="flex items-start gap-3">
                                <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-400 transition-transform duration-300 group-hover:scale-110" />
                                <div>
                                    <h3 className="font-semibold text-slate-100">{interest.title}</h3>
                                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{interest.description}</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
