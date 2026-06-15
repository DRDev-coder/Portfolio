export const metadata = {
    title: "Now",
    description: "What I am currently learning and building.",
};

export default function NowPage() {
    return (
        <section className="container py-16">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Now</p>
            <h1 className="mt-2 text-4xl font-bold text-slate-100">What I am working on currently</h1>
            <div className="mt-6 space-y-4 rounded-2xl border border-white/15 bg-white/5 p-6 text-slate-300 backdrop-blur-xl">
                <p>1. Building citation-aware RAG systems with hybrid retrieval and cross-encoder reranking.</p>
                <p>2. Researching reinforcement learning for autonomous driving — Deep Q-Networks and reward shaping.</p>
                <p>3. Benchmarking self-supervised representation learning methods (SimCLR, MoCo v2, BYOL).</p>
                <p>4. Developing full-stack AI code workspaces with semantic chunking and dependency-aware retrieval.</p>
            </div>
        </section>
    );
}
