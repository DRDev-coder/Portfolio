import Link from "next/link";
import { ArrowUpRight, ChartNoAxesCombined } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { selectedProjects } from "@/lib/site-config";

export function SelectedWorkSection() {
    return (
        <section id="work" className="container py-16">
            <Reveal>
                <div className="mb-8 flex items-end justify-between gap-4">
                    <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Selected Work</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-100 md:text-4xl">
                            Flagship Projects and Case Studies
                        </h2>
                    </div>
                    <Button variant="secondary" asChild>
                        <Link href="/work">View All</Link>
                    </Button>
                </div>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {selectedProjects.map((project, index) => (
                    <Reveal key={project.slug} delay={0.06 * index}>
                        <Card className="group relative overflow-hidden border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-white/[0.08]">
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-cyan-300 to-primary opacity-70" />
                            <CardHeader className="space-y-3">
                                <p className="inline-flex w-fit items-center gap-1 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.15em] text-cyan-200">
                                    {project.category}
                                </p>
                                <CardTitle className="text-2xl leading-tight text-slate-100">{project.title}</CardTitle>
                                <div className="rounded-lg border border-primary/25 bg-primary/10 px-3 py-2">
                                    <p className="text-[11px] uppercase tracking-[0.16em] text-primary/80">{project.metricLabel}</p>
                                    <p className="mt-1 text-lg font-semibold text-white">{project.metricValue}</p>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-5">
                                <div className="space-y-2">
                                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">Problem</p>
                                    <CardDescription className="leading-relaxed text-slate-300">{project.problem}</CardDescription>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">Approach</p>
                                    <p className="text-sm leading-relaxed text-slate-200">{project.approach}</p>
                                </div>

                                <div className="space-y-2">
                                    <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-slate-400">
                                        <ChartNoAxesCombined className="h-3.5 w-3.5" /> Key Results
                                    </p>
                                    <ul className="space-y-2">
                                        {project.keyResults.map((result) => (
                                            <li key={result} className="flex gap-2 text-sm text-slate-300">
                                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                                                <span>{result}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-white/20 bg-slate-900/80 px-2.5 py-1 text-xs text-slate-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <Button variant="secondary" asChild className="w-full group-hover:border-cyan-300/40">
                                    <Link href={`/work/${project.slug}`} className="inline-flex items-center justify-center gap-2">
                                        View Case Study
                                        <ArrowUpRight className="h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
