import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getContentList } from "@/lib/content";

export const metadata = {
    title: "Case Studies",
    description: "Engineering case studies with architecture, challenges, and impact.",
};

export default async function WorkPage() {
    const projects = await getContentList("projects");

    return (
        <section className="container py-16">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Case Studies</p>
            <h1 className="mt-2 text-4xl font-bold text-slate-100 md:text-5xl">Selected Project Deep Dives</h1>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
                {projects.map((project) => (
                    <Card
                        key={project.slug}
                        className="transition-all duration-300 hover:-translate-y-1 hover:border-primary/35"
                    >
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.excerpt}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {project.problem ? (
                                <p className="text-sm text-slate-300">
                                    <span className="text-slate-100">Problem:</span> {project.problem}
                                </p>
                            ) : null}
                            {project.results ? (
                                <p className="text-sm text-slate-300">
                                    <span className="text-slate-100">Results:</span> {project.results}
                                </p>
                            ) : null}
                            <Link
                                href={`/work/${project.slug}`}
                                className="inline-block text-primary transition-colors hover:text-cyan-300 hover:underline"
                            >
                                View Case Study
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
