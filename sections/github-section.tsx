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
            description: "Pinned repository",
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
                    Open Source and Shipping Velocity
                </h2>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-lg">
                <Image
                    src={`https://ghchart.rshah.org/22d3ee/${profile.githubUsername}`}
                    alt={`${profile.githubUsername} contribution graph`}
                    width={1200}
                    height={220}
                    className="w-full rounded-lg border border-white/10 bg-slate-900/80 p-2"
                />
                <p className="mt-3 text-xs text-slate-400">
                    Contributions chart visualization paired with live GitHub API repository and activity data.
                </p>
            </Reveal>

            <Reveal className="mt-10">
                <h3 className="text-xl font-semibold text-slate-100">Pinned Repositories</h3>
            </Reveal>

            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {pinnedCards.map((repo, index) => (
                    <Reveal key={repo.id} delay={0.05 * index}>
                        <Card className="group border-cyan-300/25 bg-cyan-300/[0.08] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60">
                            <CardHeader>
                                <CardTitle className="text-lg text-slate-100">
                                    <Link href={repo.html_url} target="_blank" className="hover:text-cyan-300">
                                        {repo.name}
                                    </Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="min-h-[3.2rem] text-sm leading-relaxed text-slate-300">
                                    {repo.description ?? "Repository with production-oriented engineering patterns."}
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

            {!github ? (
                <Reveal className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-slate-300">
                    Unable to fetch GitHub API data right now. Verify the username in site config or try again after API rate limits reset.
                </Reveal>
            ) : (
                <>
                    <div className="mt-5 grid gap-4 md:grid-cols-3">
                        <Reveal>
                            <Card className="border-white/10 bg-white/[0.04]">
                                <CardHeader>
                                    <CardTitle className="text-base">Public Repositories</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-3xl font-bold text-slate-100">{github.user.public_repos}</p>
                                </CardContent>
                            </Card>
                        </Reveal>
                        <Reveal delay={0.05}>
                            <Card className="border-white/10 bg-white/[0.04]">
                                <CardHeader>
                                    <CardTitle className="text-base">Push Events (30d)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-3xl font-bold text-slate-100">{github.activity.pushEvents}</p>
                                </CardContent>
                            </Card>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <Card className="border-white/10 bg-white/[0.04]">
                                <CardHeader>
                                    <CardTitle className="text-base">Active Days (30d)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-3xl font-bold text-slate-100">{github.activity.activeDaysLastMonth}</p>
                                </CardContent>
                            </Card>
                        </Reveal>
                    </div>

                    <Reveal className="mt-10">
                        <h3 className="text-xl font-semibold text-slate-100">Additional Top Repositories</h3>
                    </Reveal>

                    <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {github.topRepos.map((repo, index) => (
                            <Reveal key={repo.id} delay={0.05 * index}>
                                <Card className="group border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/45">
                                    <CardHeader>
                                        <CardTitle className="text-lg text-slate-100">
                                            <Link href={repo.html_url} target="_blank" className="hover:text-cyan-300">
                                                {repo.name}
                                            </Link>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="min-h-[3.2rem] text-sm leading-relaxed text-slate-300">
                                            {repo.description ?? "Repository with production-oriented engineering patterns."}
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
                </>
            )}
        </section>
    );
}
