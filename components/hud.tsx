"use client";

import { useEffect, useRef, useState } from "react";

export function HUD() {
    const [time, setTime] = useState("");
    const [elapsed, setElapsed] = useState("00:00:00");
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const startTime = useRef(Date.now());

    useEffect(() => {
        const formatIST = () => {
            const now = new Date();
            const ist = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
            const hh = String(ist.getHours()).padStart(2, "0");
            const mm = String(ist.getMinutes()).padStart(2, "0");
            const ss = String(ist.getSeconds()).padStart(2, "0");
            return `IST ${hh}:${mm}:${ss}`;
        };

        const formatElapsed = () => {
            const diff = Math.floor((Date.now() - startTime.current) / 1000);
            const h = Math.floor(diff / 3600);
            const m = Math.floor((diff % 3600) / 60);
            const s = diff % 60;
            return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
        };

        // Set immediately
        setTime(formatIST());
        setElapsed(formatElapsed());

        const interval = setInterval(() => {
            setTime(formatIST());
            setElapsed(formatElapsed());
        }, 1000);

        const handleMouseMove = (e: MouseEvent) => {
            setMouse({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1,
            });
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        return () => {
            clearInterval(interval);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const formatCoord = (val: number) => {
        const sign = val >= 0 ? "+" : "";
        return `${sign}${val.toFixed(4)}`;
    };

    return (
        <>
            {/* Bottom Left — IST time */}
            <div className="fixed bottom-5 left-6 z-[60] hidden md:block select-none pointer-events-none">
                <span className="font-mono text-[0.6rem] tracking-[0.12em] text-white/30">
                    {time}
                </span>
            </div>

            {/* Bottom Right — session + coordinates */}
            <div className="fixed bottom-5 right-6 z-[60] hidden md:flex flex-row items-end gap-5 select-none pointer-events-none">
                {/* Session timer */}
                <span className="font-mono text-[0.6rem] tracking-[0.1em] text-white/30">
                    {elapsed}
                </span>

                {/* Coordinates */}
                <div className="flex flex-col items-start gap-[3px]">
                    <span className="font-mono text-[0.6rem] tracking-[0.1em] text-white/30">
                        X {formatCoord(mouse.x)}
                    </span>
                    <span className="font-mono text-[0.6rem] tracking-[0.1em] text-white/30">
                        Y {formatCoord(mouse.y)}
                    </span>
                </div>
            </div>
        </>
    );
}
