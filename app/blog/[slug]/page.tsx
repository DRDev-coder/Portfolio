import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import { mdxComponents } from "@/components/mdx-components";
import { getContentBySlug, getContentList } from "@/lib/content";

type BlogPageProps = {
    params: { slug: string };
};

export async function generateStaticParams() {
    const posts = await getContentList("blog");
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
    const post = await getContentBySlug("blog", params.slug);

    if (!post) {
        return { title: "Post" };
    }

    return {
        title: post.meta.title,
        description: post.meta.excerpt,
    };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
    const post = await getContentBySlug("blog", params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="container py-16">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Article</p>
            <h1 className="mt-3 text-4xl font-bold text-slate-100">{post.meta.title}</h1>
            <p className="mt-3 text-sm text-slate-400">
                {post.meta.date} · {post.meta.readTime} min read
            </p>

            <div className="prose prose-invert mt-10 max-w-none prose-pre:bg-slate-900/90">
                <MDXRemote
                    source={post.content}
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
