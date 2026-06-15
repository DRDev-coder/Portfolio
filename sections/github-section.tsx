import Image from "next/image";
import Link from "next/link";
import { GitCommitHorizontal, GitFork, Star } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getGitHubProfileData } from "@/lib/github";
import { pinnedRepos, profile } from "@/lib/site-config";

export async function GitHubSection() {
    const github = await getGitHubProfileData(profile.githubUsername, pinnedRepos);
    const pinnedCards = github?.pinnedRepos?.length
        ? github.pinnedRepos
        : pinnedRepos.map((repoName, index) => ({
            id: index,
            name: repoName,
            html_url: `${profile.githubUrl}/${repoName}`,
            description: "Repository showcasing production engineering patterns",
            stargazers_count: 0,
            forks_count: 0,
            language: "-",
        }));

    return (
        <section id="github" className="container py-16">
            <Reveal>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">GitHub Activity</p>
            </Reveal>
            <Reveal delay={0.05}>
                <h2 className="mt-2 text-3xl font-bold text-slate-100 md:text-4xl">
                    Open Source & Shipping Velocity
                </h2>
            </Reveal>

            {/* Contribution Chart */}
            <Reveal delay={0.1} className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-lg">
                <Image
                    src={`https://ghchart.rshah.org/22d3ee/${profile.githubUsername}`}
                    alt={`${profile.githubUsername} contribution graph`}
                    width={1200}
                    height={220}
                    className="w-full rounded-lg border border-white/10 bg-slate-900/80 p-2"
                />
                <p className="mt-3 text-xs text-slate-400">
                    Live contribution chart from GitHub • Updated hourly
                </p>
            </Reveal>

            {/* Stats Cards */}
            {github && (
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <Reveal>
                        <Card className="border-white/10 bg-white/[0.04] text-center">
                            <CardHeader>
                                <CardTitle className="text-base text-slate-400">Public Repos</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-4xl font-bold text-gradient">{github.user.public_repos}</p>
                            </CardContent>
                        </Card>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <Card className="border-white/10 bg-white/[0.04] text-center">
                            <CardHeader>
                                <CardTitle className="text-base text-slate-400">Push Events (30d)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-4xl font-bold text-gradient">{github.activity.pushEvents}</p>
                            </CardContent>
                        </Card>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <Card className="border-white/10 bg-white/[0.04] text-center">
                            <CardHeader>
                                <CardTitle className="text-base text-slate-400">Active Days (30d)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-4xl font-bold text-gradient">{github.activity.activeDaysLastMonth}</p>
                            </CardContent>
                        </Card>
                    </Reveal>
                </div>
            )}

            {/* Pinned Repos */}
            <Reveal className="mt-10">
                <h3 className="text-xl font-semibold text-slate-100">Featured Repositories</h3>
            </Reveal>

            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {pinnedCards.map((repo, index) => (
                    <Reveal key={repo.id} delay={0.05 * index}>
                        <Card className="group border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-white/[0.08]">
                            <CardHeader>
                                <CardTitle className="text-lg text-slate-100">
                                    <Link href={repo.html_url} target="_blank" className="hover:text-cyan-300 transition-colors">
                                        {repo.name}
                                    </Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="min-h-[3rem] text-sm leading-relaxed text-slate-300">
                                    {repo.description ?? "Production-oriented engineering project."}
                                </p>
                                <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
                                    <span className="inline-flex items-center gap-1">
                                        <Star className="h-3.5 w-3.5" /> {repo.stargazers_count}
                                    </span>
                                    <span className="inline-flex items-center gap-1">
                                        <GitFork className="h-3.5 w-3.5" /> {repo.forks_count}
                                    </span>
                                    <span className="inline-flex items-center gap-1">
                                        <GitCommitHorizontal className="h-3.5 w-3.5" />
                                        {repo.language ?? "Mixed"}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </Reveal>
                ))}
            </div>

            {!github && (
                <Reveal className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-slate-300">
                    Unable to fetch GitHub API data right now. Verify the username in site config or try again after API rate limits reset.
                </Reveal>
            )}
        </section>
    );
}
