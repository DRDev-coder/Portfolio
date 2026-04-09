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
                <p>1. Building retrieval systems for domain-specific academic search.</p>
                <p>2. Studying SimCLR, contrastive objectives, and representation collapse behavior.</p>
                <p>3. Practicing distributed systems debugging with telemetry-heavy workflows.</p>
            </div>
        </section>
    );
}
