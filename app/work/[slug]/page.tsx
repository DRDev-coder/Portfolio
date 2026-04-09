import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import { mdxComponents } from "@/components/mdx-components";
import { getContentBySlug, getContentList } from "@/lib/content";

type WorkPageProps = {
    params: { slug: string };
};

export async function generateStaticParams() {
    const projects = await getContentList("projects");
    return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
    const project = await getContentBySlug("projects", params.slug);

    if (!project) {
        return { title: "Case Study" };
    }

    return {
        title: project.meta.title,
        description: project.meta.excerpt,
    };
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
    const project = await getContentBySlug("projects", params.slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="container py-16 md:py-20">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Case Study</p>
            <h1 className="mt-3 max-w-4xl text-balance text-4xl font-bold leading-tight text-slate-100 md:text-5xl">
                {project.meta.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                {project.meta.excerpt}
            </p>

            <div className="mt-10 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl md:grid-cols-2 xl:grid-cols-3">
                <div>
                    <h2 className="text-xs uppercase tracking-[0.15em] text-slate-400">Problem</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">
                        {project.meta.problem ?? "Detailed in writeup"}
                    </p>
                </div>
                <div>
                    <h2 className="text-xs uppercase tracking-[0.15em] text-slate-400">Why it matters</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">
                        {project.meta.whyItMatters ?? "Detailed in writeup"}
                    </p>
                </div>
                <div>
                    <h2 className="text-xs uppercase tracking-[0.15em] text-slate-400">Approach</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">
                        {project.meta.approach ?? "Detailed in writeup"}
                    </p>
                </div>
                <div>
                    <h2 className="text-xs uppercase tracking-[0.15em] text-slate-400">Challenges</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">
                        {project.meta.challenges ?? "Detailed in writeup"}
                    </p>
                </div>
                <div>
                    <h2 className="text-xs uppercase tracking-[0.15em] text-slate-400">Results</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">
                        {project.meta.results ?? "Detailed in writeup"}
                    </p>
                </div>
                <div>
                    <h2 className="text-xs uppercase tracking-[0.15em] text-slate-400">Learnings</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">
                        {project.meta.learnings ?? "Detailed in writeup"}
                    </p>
                </div>
            </div>

            <div className="prose prose-invert prose-lg prose-headings:font-semibold prose-p:text-slate-300 prose-li:text-slate-300 mt-12 max-w-3xl prose-pre:bg-slate-900/90">
                <MDXRemote
                    source={project.content}
                    components={mdxComponents}
                    options={{
                        mdxOptions: {
                            remarkPlugins: [remarkGfm],
                        },
                    }}
                />
            </div>
        </article>
    );
}
