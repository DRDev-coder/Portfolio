"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type SectionHeaderProps = {
    label: string;
    heading: string;
};

export function SectionHeader({ label, heading }: SectionHeaderProps) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div ref={ref}>
            {/* Monospace label + line */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="section-label"
            >
                <span>{label}</span>
            </motion.div>

            {/* Large serif heading */}
            <div className="overflow-hidden">
                <motion.h2
                    initial={{ y: "100%" }}
                    animate={inView ? { y: 0 } : { y: "100%" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="section-heading"
                >
                    {heading}
                </motion.h2>
            </div>
        </div>
    );
}
