import Image from "next/image";
import Link from "next/link";
import { GitCommitHorizontal, GitFork, Star, ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
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
        <section id="github" className="py-16 md:py-24 px-[6vw]">
            <SectionHeader label="GitHub Activity" heading="Open source & shipping velocity." />

            {/* Contribution Chart */}
            <Reveal delay={0.1} className="mt-8">
                <div className="overflow-hidden rounded-lg border border-white/10 bg-transparent p-5">
                    <Image
                        src={`https://ghchart.rshah.org/e8e0d0/${profile.githubUsername}`}
                        alt={`${profile.githubUsername} contribution graph`}
                        width={1200}
                        height={220}
                        className="w-full rounded-md border border-white/8 bg-[#0A0A0C] p-2"
                    />
                    <p className="mt-3 font-mono text-[0.6rem] tracking-[0.08em] text-white/30 uppercase">
                        Live contribution chart from GitHub • Updated hourly
                    </p>
                </div>
            </Reveal>

            {/* Stats Cards */}
            {github && (
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {[
                        { label: "Public Repos", value: github.user.public_repos },
                        { label: "Push Events (30d)", value: github.activity.pushEvents },
                        { label: "Active Days (30d)", value: github.activity.activeDaysLastMonth },
                    ].map((stat, i) => (
                        <Reveal key={stat.label} delay={0.05 * i}>
                            <div className="rounded-lg border border-white/10 bg-transparent p-6 text-center transition-all duration-300 hover:border-white/20 hover:bg-white/[0.02]">
                                <p className="font-mono text-[0.6rem] tracking-[0.15em] text-white/35 uppercase mb-2">
                                    {stat.label}
                                </p>
                                <p className="font-serif text-4xl font-bold text-gradient">
                                    {stat.value}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            )}

            {/* Pinned Repos */}
            <Reveal className="mt-10" delay={0.1}>
                <h3 className="font-serif text-xl font-bold text-foreground">
                    Featured Repositories
                </h3>
            </Reveal>

            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {pinnedCards.map((repo, index) => (
                    <Reveal key={repo.id} delay={0.05 * index}>
                        <div className="group rounded-lg border border-white/10 bg-transparent p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.02]">
                            <div className="flex items-start justify-between mb-2">
                                <h4 className="font-serif text-lg font-bold text-foreground">
                                    <Link
                                        href={repo.html_url}
                                        target="_blank"
                                        className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                                    >
                                        {repo.name}
                                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </h4>
                            </div>
                            <p className="min-h-[3rem] font-sans text-[0.83rem] leading-relaxed text-white/45 mb-4">
                                {repo.description ?? "Production-oriented engineering project."}
                            </p>
                            <div className="flex items-center gap-4 font-mono text-[0.6rem] tracking-[0.05em] text-white/30">
                                <span className="inline-flex items-center gap-1">
                                    <Star className="h-3 w-3" /> {repo.stargazers_count}
                                </span>
                                <span className="inline-flex items-center gap-1">
                                    <GitFork className="h-3 w-3" /> {repo.forks_count}
                                </span>
                                <span className="inline-flex items-center gap-1">
                                    <GitCommitHorizontal className="h-3 w-3" />
                                    {repo.language ?? "Mixed"}
                                </span>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>

            {!github && (
                <Reveal className="mt-5">
                    <div className="rounded-lg border border-white/10 bg-transparent p-6 font-sans text-[0.9rem] text-white/45">
                        Unable to fetch GitHub API data right now. Verify the username in site config or try again after API rate limits reset.
                    </div>
                </Reveal>
            )}
        </section>
    );
}
