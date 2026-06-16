"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    variant?: "fade" | "clip";
};

export function Reveal({ children, className, delay = 0, y = 20, variant = "fade" }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    if (variant === "clip") {
        return (
            <div ref={ref} className={cn("overflow-hidden", className)}>
                <motion.div
                    initial={{ y: "100%" }}
                    animate={inView ? { y: 0 } : { y: "100%" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
                >
                    {children}
                </motion.div>
            </div>
        );
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
