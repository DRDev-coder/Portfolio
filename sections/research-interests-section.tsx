import { Reveal } from "@/components/reveal";

export function ResearchInterestsSection() {
    const interests = [
        "Self-supervised representation learning",
        "Retrieval-augmented generation systems",
        "Efficient systems for inference and observability",
        "Applied ML for education and productivity",
    ];

    return (
        <section className="container py-16" id="research">
            <Reveal>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Research Interests</p>
            </Reveal>
            <Reveal delay={0.05}>
                <h2 className="mt-2 text-3xl font-bold text-slate-100 md:text-4xl">Where I am curious right now</h2>
            </Reveal>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
                {interests.map((interest, index) => (
                    <Reveal key={interest} delay={0.06 * index}>
                        <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-slate-300 backdrop-blur transition-colors duration-300 hover:border-cyan-300/45 hover:text-slate-100">
                            {interest}
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
