import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/site-config";

export function AboutSection() {
    return (
        <section id="about" className="container py-16">
            <div className="grid items-center gap-8 md:grid-cols-[240px_1fr]">
                <Reveal>
                    <div className="glass mx-auto w-fit rounded-3xl p-3">
                        <Image
                            src={profile.profileImage}
                            alt={`${profile.name} profile photo`}
                            width={220}
                            height={220}
                            className="rounded-2xl"
                        />
                    </div>
                </Reveal>

                <div>
                    <Reveal>
                        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">About</p>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <h2 className="mt-2 text-3xl font-bold text-slate-100 md:text-4xl">
                            Research-driven engineer with product instincts
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                            {profile.aboutBio}
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
