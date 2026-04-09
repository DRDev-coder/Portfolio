import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/site-config";

export function ContactSection() {
    return (
        <section id="contact" className="container pb-20 pt-16">
            <Reveal>
                <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-transparent p-8 backdrop-blur-xl">
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Contact</p>
                    <h2 className="mt-3 text-3xl font-bold text-slate-100 md:text-4xl">Let us build something meaningful</h2>
                    <p className="mt-4 max-w-2xl text-slate-300">
                        Open to research collaborations, internships, and engineering opportunities where AI and systems thinking create measurable impact.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-4 text-slate-200">
                        <Link href={`mailto:${profile.email}`} className="transition-colors hover:text-cyan-300">
                            {profile.email}
                        </Link>
                        <span className="text-slate-500">|</span>
                        <Link
                            href={profile.githubUrl}
                            target="_blank"
                            className="transition-colors hover:text-cyan-300"
                        >
                            GitHub
                        </Link>
                        <span className="text-slate-500">|</span>
                        <Link
                            href={profile.linkedinUrl}
                            target="_blank"
                            className="transition-colors hover:text-cyan-300"
                        >
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
