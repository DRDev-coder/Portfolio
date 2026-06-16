"use client";

import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FileDown, Mail, Github, Linkedin } from "lucide-react";
import Image from "next/image";

import { trackResumeDownload } from "@/lib/analytics";
import { profile } from "@/lib/site-config";

// Spring config — responsive with premium smoothness
const SPRING = { stiffness: 90, damping: 14, restDelta: 0.001 };
const SPRING_SLOW = { stiffness: 58, damping: 12, restDelta: 0.001 };

export function HeroSection() {
    const heroRef = useRef<HTMLElement>(null);

    // Raw mouse motion values (normalized -0.5 → +0.5 relative to hero)
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);

    // Smooth springs for each layer
    // Text: slowest (lowest movement — stays readable)
    const textX = useSpring(useTransform(rawX, (v) => v * 18), SPRING);
    const textY = useSpring(useTransform(rawY, (v) => v * 18), SPRING);

    // Image: medium movement
    const imageX = useSpring(useTransform(rawX, (v) => v * 30), SPRING_SLOW);
    const imageY = useSpring(useTransform(rawY, (v) => v * 30), SPRING_SLOW);

    // 3D tilt — slightly more dramatic
    const tiltX = useSpring(useTransform(rawY, (v) => -v * 7), SPRING_SLOW);
    const tiltY = useSpring(useTransform(rawX, (v) => v * 7), SPRING_SLOW);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
        const rect = heroRef.current?.getBoundingClientRect();
        if (!rect) return;
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        rawX.set(nx);
        rawY.set(ny);
    }, [rawX, rawY]);

    const handleMouseLeave = useCallback(() => {
        rawX.set(0);
        rawY.set(0);
    }, [rawX, rawY]);

    return (
        <section
            id="hero"
            ref={heroRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative min-h-screen flex flex-col justify-center px-[6vw] md:px-[8.5vw] overflow-hidden"
        >
            {/* Thin line below nav */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute top-[80px] left-[8.5vw] right-[8.5vw] h-px bg-white/8 origin-left hidden md:block"
            />

            {/* Main 2-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[4vw] items-center pt-[60px] relative z-[1]">
                {/* Left column — text (slower layer) */}
                <motion.div
                    className="will-change-transform"
                    style={{ x: textX, y: textY }}
                >
                    {/* Tagline with line */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="overflow-hidden mb-8"
                    >
                        <div className="inline-flex items-center gap-[10px]">
                            <div className="w-7 h-px bg-primary" />
                            <span className="font-mono text-[0.7rem] tracking-[0.12em] text-primary">
                                Building end-to-end AI systems — from retrieval to production inference.
                            </span>
                        </div>
                    </motion.div>

                    {/* Giant name — serif */}
                    <div className="overflow-visible mb-[-0.05em]">
                        <motion.h1
                            initial={{ y: "105%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                            className="font-serif text-[clamp(3.2rem,10vw,8.5rem)] font-extrabold leading-[0.9] tracking-[0.02em] text-foreground"
                        >
                            Darshan
                        </motion.h1>
                    </div>
                    <div className="overflow-visible mb-12">
                        <motion.h1
                            initial={{ y: "105%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
                            className="font-serif text-[clamp(3.2rem,10vw,8.5rem)] font-extrabold leading-[1.1] tracking-[0.02em] text-foreground"
                        >
                            R.
                        </motion.h1>
                    </div>

                    {/* Role & Education meta */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.0 }}
                        className="flex flex-row gap-12 mb-10"
                    >
                        <div>
                            <p className="font-mono text-[0.65rem] tracking-[0.15em] text-white/40 uppercase mb-1.5">
                                Role
                            </p>
                            <p className="font-sans text-[0.9rem] text-primary leading-relaxed">
                                {profile.role}
                            </p>
                        </div>
                        <div>
                            <p className="font-mono text-[0.65rem] tracking-[0.15em] text-white/40 uppercase mb-1.5">
                                Education
                            </p>
                            <p className="font-sans text-[0.9rem] text-primary leading-relaxed">
                                IIIT Sri City<br />
                                B.Tech CSE • CGPA 9.13
                            </p>
                        </div>
                    </motion.div>

                    {/* Social links & resume */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.2 }}
                        className="inline-flex flex-col items-stretch gap-3"
                    >
                        <div className="flex gap-3 items-center">
                            <a href={`mailto:${profile.email}`} className="social-circle" aria-label="Email">
                                <Mail className="h-[15px] w-[15px]" />
                            </a>
                            <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="GitHub">
                                <Github className="h-[15px] w-[15px]" />
                            </a>
                            <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="LinkedIn">
                                <Linkedin className="h-[15px] w-[15px]" />
                            </a>
                            <a
                                href={profile.resumeUrl}
                                download
                                onClick={() => trackResumeDownload("hero_resume_button", profile.resumeFileName)}
                                className="h-[38px] px-[14px] rounded-full border border-white/12 flex items-center gap-[7px] text-white/65 hover:text-white/90 hover:border-white/30 transition-all duration-200 no-underline whitespace-nowrap flex-shrink-0"
                            >
                                <FileDown className="h-[14px] w-[14px]" />
                                <span className="font-mono text-[0.62rem] tracking-[0.1em] uppercase">
                                    Download Resume
                                </span>
                            </a>
                        </div>

                        {/* Status pill */}
                        <div className="status-pill">
                            <div className="w-[7px] h-[7px] rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse flex-shrink-0" />
                            <span className="font-mono text-[0.55rem] tracking-[0.2em] text-white/50 uppercase">
                                Open to Research &amp; Internship Opportunities
                            </span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right column — profile image (faster layer + 3D tilt) */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.8 }}
                    className="relative w-[74%] mx-auto md:ml-auto md:mr-[2vw]"
                    style={{ x: imageX, y: imageY }}
                >
                    <motion.div
                        className="will-change-transform rounded-[4px]"
                        style={{
                            rotateX: tiltX,
                            rotateY: tiltY,
                            transformPerspective: 800,
                        }}
                    >
                        <div className="relative rounded-[4px] overflow-hidden aspect-[3/4]">
                            <Image
                                src={profile.profileImage}
                                alt={profile.name}
                                fill
                                className="object-cover object-[50%_15%]"
                                style={{ filter: "grayscale(20%) contrast(1.05)" }}
                                priority
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,12,0.85)] via-[rgba(10,10,12,0.2)] to-transparent" />
                        </div>

                        {/* Image meta line */}
                        <div className="flex flex-row justify-between gap-0 mt-4 pb-2 border-b border-white/6">
                            <span className="font-mono text-[0.6rem] tracking-[0.12em] text-white/35 uppercase">
                                B.Tech CSE — IIIT Sri City
                            </span>
                            <span className="font-mono text-[0.6rem] tracking-[0.12em] text-white/35 uppercase">
                                RAG • RL • Deep Learning
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
            >
                <span className="font-mono text-[0.6rem] tracking-[0.25em] text-white/45 uppercase">
                    Scroll
                </span>
            </motion.div>
        </section>
    );
}
