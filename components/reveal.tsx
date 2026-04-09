"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    y?: number;
};

export function Reveal({ children, className, delay = 0, y = 20 }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-120px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
            transition={{ duration: 0.55, ease: "easeOut", delay }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
