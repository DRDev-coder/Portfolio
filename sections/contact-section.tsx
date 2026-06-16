import Link from "next/link";
import { Mail, Github, Linkedin, Phone, MapPin, ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { profile } from "@/lib/site-config";

export function ContactSection() {
    return (
        <section id="contact" className="pb-24 pt-16 md:pt-24 px-[6vw]">
            <SectionHeader label="Contact" heading="Let's build something meaningful." />

            <Reveal delay={0.1}>
                <p className="font-sans text-[0.95rem] text-white/45 mt-4 mb-10 max-w-2xl">
                    Open to research collaborations, internships, and engineering opportunities
                    where AI and systems thinking create measurable impact.
                </p>
            </Reveal>

            {/* Contact grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Reveal delay={0.12}>
                    <Link
                        href={`mailto:${profile.email}`}
                        className="group flex items-center gap-4 rounded-lg border border-white/10 bg-transparent p-5 transition-all duration-300 hover:border-white/22 hover:bg-white/[0.02]"
                    >
                        <span className="social-circle">
                            <Mail className="h-[15px] w-[15px]" />
                        </span>
                        <div className="min-w-0">
                            <p className="font-mono text-[0.55rem] tracking-[0.15em] text-white/30 uppercase">Email</p>
                            <p className="font-sans text-[0.85rem] text-primary truncate">{profile.email}</p>
                        </div>
                    </Link>
                </Reveal>

                <Reveal delay={0.15}>
                    <Link
                        href={`tel:${profile.phone}`}
                        className="group flex items-center gap-4 rounded-lg border border-white/10 bg-transparent p-5 transition-all duration-300 hover:border-white/22 hover:bg-white/[0.02]"
                    >
                        <span className="social-circle">
                            <Phone className="h-[15px] w-[15px]" />
                        </span>
                        <div className="min-w-0">
                            <p className="font-mono text-[0.55rem] tracking-[0.15em] text-white/30 uppercase">Phone</p>
                            <p className="font-sans text-[0.85rem] text-primary truncate">{profile.phone}</p>
                        </div>
                    </Link>
                </Reveal>

                <Reveal delay={0.18}>
                    <Link
                        href={profile.githubUrl}
                        target="_blank"
                        className="group flex items-center gap-4 rounded-lg border border-white/10 bg-transparent p-5 transition-all duration-300 hover:border-white/22 hover:bg-white/[0.02]"
                    >
                        <span className="social-circle">
                            <Github className="h-[15px] w-[15px]" />
                        </span>
                        <div className="flex min-w-0 items-center gap-1.5">
                            <div>
                                <p className="font-mono text-[0.55rem] tracking-[0.15em] text-white/30 uppercase">GitHub</p>
                                <p className="font-sans text-[0.85rem] text-primary">DRDev-coder</p>
                            </div>
                            <ArrowUpRight className="h-3 w-3 text-white/25 group-hover:text-white/50 transition-colors" />
                        </div>
                    </Link>
                </Reveal>

                <Reveal delay={0.21}>
                    <Link
                        href={profile.linkedinUrl}
                        target="_blank"
                        className="group flex items-center gap-4 rounded-lg border border-white/10 bg-transparent p-5 transition-all duration-300 hover:border-white/22 hover:bg-white/[0.02]"
                    >
                        <span className="social-circle">
                            <Linkedin className="h-[15px] w-[15px]" />
                        </span>
                        <div className="flex min-w-0 items-center gap-1.5">
                            <div>
                                <p className="font-mono text-[0.55rem] tracking-[0.15em] text-white/30 uppercase">LinkedIn</p>
                                <p className="font-sans text-[0.85rem] text-primary">Darshan R</p>
                            </div>
                            <ArrowUpRight className="h-3 w-3 text-white/25 group-hover:text-white/50 transition-colors" />
                        </div>
                    </Link>
                </Reveal>
            </div>

            {/* Location */}
            <Reveal delay={0.25}>
                <div className="mt-8 flex items-center gap-2.5 font-mono text-[0.62rem] tracking-[0.1em] text-white/30 uppercase">
                    <MapPin className="h-3.5 w-3.5" />
                    {profile.location} • IIIT Sri City
                </div>
            </Reveal>

            {/* Footer divider */}
            <Reveal delay={0.3}>
                <div className="mt-16 pt-8 border-t border-white/6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="font-mono text-[0.55rem] tracking-[0.15em] text-white/20 uppercase">
                            © 2025 Darshan R. All rights reserved.
                        </p>
                        <p className="font-mono text-[0.55rem] tracking-[0.15em] text-white/20 uppercase">
                            Built with Next.js, Tailwind CSS & Framer Motion
                        </p>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
