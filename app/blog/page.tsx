import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getContentList } from "@/lib/content";

export const metadata = {
    title: "Blog",
    description: "Technical essays on AI, systems, and product engineering.",
};

export default async function BlogPage() {
    const posts = await getContentList("blog");

    return (
        <section className="container py-16">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Insights</p>
            <h1 className="mt-2 text-4xl font-bold text-slate-100">Blog and Technical Writing</h1>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
                {posts.map((post) => (
                    <Card key={post.slug} className="transition-all duration-300 hover:-translate-y-1 hover:border-primary/35">
                        <CardHeader>
                            <CardTitle>{post.title}</CardTitle>
                            <CardDescription>{post.excerpt}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs uppercase tracking-wide text-slate-400">
                                {post.date} · {post.readTime} min read
                            </p>
                            <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-primary hover:underline">
                                Read article
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
