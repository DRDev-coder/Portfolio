import Image from "next/image";
import { MapPin, GraduationCap, Trophy, Award } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { profile, education, leadership } from "@/lib/site-config";

export function AboutSection() {
    return (
        <section id="about" className="container py-16">
            <div className="grid items-start gap-10 lg:grid-cols-[280px_1fr]">
                {/* Profile Card */}
                <Reveal>
                    <div className="glass glow-primary mx-auto rounded-3xl p-4 lg:sticky lg:top-24">
                        <Image
                            src={profile.profileImage}
                            alt={`${profile.name} profile photo`}
                            width={260}
                            height={260}
                            className="rounded-2xl"
                        />
                        <div className="mt-4 space-y-2 px-2 pb-2">
                            <h3 className="text-lg font-semibold text-slate-100">{profile.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                <MapPin className="h-3.5 w-3.5" />
                                {profile.location}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                <Trophy className="h-3.5 w-3.5 text-amber-400" />
                                <span className="text-xs">{leadership.headboy}</span>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Content */}
                <div className="space-y-10">
                    {/* About Text */}
                    <div>
                        <Reveal>
                            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">About</p>
                        </Reveal>
                        <Reveal delay={0.05}>
                            <h2 className="mt-2 text-3xl font-bold text-slate-100 md:text-4xl">
                                Research-driven engineer building AI at product scale
                            </h2>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                                {profile.aboutBio}
                            </p>
                        </Reveal>
                        <Reveal delay={0.15}>
                            <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-400">
                                {profile.blurb}
                            </p>
                        </Reveal>
                    </div>

                    {/* Education */}
                    <div>
                        <Reveal delay={0.2}>
                            <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-100">
                                <GraduationCap className="h-5 w-5 text-primary" />
                                Education
                            </h3>
                        </Reveal>
                        <div className="mt-4 space-y-4">
                            {education.map((edu, index) => (
                                <Reveal key={edu.institution} delay={0.25 + index * 0.08}>
                                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.07]">
                                        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                                            <div>
                                                <h4 className="font-semibold text-slate-100">{edu.institution}</h4>
                                                <p className="text-sm text-slate-300">{edu.degree}</p>
                                                <p className="text-xs text-slate-400">{edu.location}</p>
                                            </div>
                                            <div className="mt-2 text-right sm:mt-0">
                                                <p className="text-xs uppercase tracking-widest text-cyan-300/80">{edu.period}</p>
                                                <p className="mt-1 text-sm font-semibold text-emerald-400">{edu.grade}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    {/* Awards */}
                    <Reveal delay={0.35}>
                        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
                            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-amber-300">
                                <Award className="h-4 w-4" />
                                Achievements & Leadership
                            </h3>
                            <div className="mt-3 space-y-2">
                                <p className="text-sm text-slate-300">🏆 {leadership.awards}</p>
                                <p className="text-sm text-slate-300">🗣️ Languages: {leadership.languages}</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
