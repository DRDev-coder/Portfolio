import Link from "next/link";
import { Mail, Github, Linkedin, Phone, MapPin, ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/site-config";

export function ContactSection() {
    return (
        <section id="contact" className="container pb-20 pt-16">
            <Reveal>
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 backdrop-blur-xl md:p-12">
                    {/* Background glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Contact</p>
                    <h2 className="mt-3 text-3xl font-bold text-slate-100 md:text-4xl">
                        Let&apos;s build something meaningful
                    </h2>
                    <p className="mt-4 max-w-2xl text-slate-300">
                        Open to research collaborations, internships, and engineering opportunities where AI and systems thinking create measurable impact.
                    </p>

                    {/* Contact cards */}
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <Link
                            href={`mailto:${profile.email}`}
                            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-primary/40 hover:bg-white/10"
                        >
                            <span className="rounded-lg bg-primary/20 p-2 text-primary transition-transform group-hover:scale-110">
                                <Mail className="h-4 w-4" />
                            </span>
                            <div className="min-w-0">
                                <p className="text-xs text-slate-400">Email</p>
                                <p className="truncate text-sm text-slate-200">{profile.email}</p>
                            </div>
                        </Link>

                        <Link
                            href={`tel:${profile.phone}`}
                            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-emerald-500/40 hover:bg-white/10"
                        >
                            <span className="rounded-lg bg-emerald-500/20 p-2 text-emerald-400 transition-transform group-hover:scale-110">
                                <Phone className="h-4 w-4" />
                            </span>
                            <div className="min-w-0">
                                <p className="text-xs text-slate-400">Phone</p>
                                <p className="truncate text-sm text-slate-200">{profile.phone}</p>
                            </div>
                        </Link>

                        <Link
                            href={profile.githubUrl}
                            target="_blank"
                            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/10"
                        >
                            <span className="rounded-lg bg-cyan-500/20 p-2 text-cyan-300 transition-transform group-hover:scale-110">
                                <Github className="h-4 w-4" />
                            </span>
                            <div className="flex min-w-0 items-center gap-1">
                                <div>
                                    <p className="text-xs text-slate-400">GitHub</p>
                                    <p className="text-sm text-slate-200">DRDev-coder</p>
                                </div>
                                <ArrowUpRight className="h-3 w-3 text-slate-500" />
                            </div>
                        </Link>

                        <Link
                            href={profile.linkedinUrl}
                            target="_blank"
                            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-blue-500/40 hover:bg-white/10"
                        >
                            <span className="rounded-lg bg-blue-500/20 p-2 text-blue-400 transition-transform group-hover:scale-110">
                                <Linkedin className="h-4 w-4" />
                            </span>
                            <div className="flex min-w-0 items-center gap-1">
                                <div>
                                    <p className="text-xs text-slate-400">LinkedIn</p>
                                    <p className="text-sm text-slate-200">Darshan R</p>
                                </div>
                                <ArrowUpRight className="h-3 w-3 text-slate-500" />
                            </div>
                        </Link>
                    </div>

                    {/* Location */}
                    <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
                        <MapPin className="h-4 w-4" />
                        {profile.location} • IIIT Sri City
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
