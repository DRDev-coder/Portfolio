"use client";

import { useEffect, useRef } from "react";

export function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let particles: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            opacity: number;
            twinkleSpeed: number;
            twinklePhase: number;
        }> = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = document.documentElement.scrollHeight;
        };

        const initParticles = () => {
            const count = Math.min(Math.floor((canvas.width * canvas.height) / 18000), 150);
            particles = Array.from({ length: count }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.08,
                vy: (Math.random() - 0.5) * 0.08,
                size: Math.random() * 1.2 + 0.3,
                opacity: Math.random() * 0.4 + 0.08,
                twinkleSpeed: Math.random() * 0.02 + 0.005,
                twinklePhase: Math.random() * Math.PI * 2,
            }));
        };

        let time = 0;

        const drawConnections = () => {
            const maxDist = 100;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < maxDist) {
                        const opacity = (1 - dist / maxDist) * 0.05;
                        ctx!.beginPath();
                        ctx!.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                        ctx!.lineWidth = 0.4;
                        ctx!.moveTo(particles[i].x, particles[i].y);
                        ctx!.lineTo(particles[j].x, particles[j].y);
                        ctx!.stroke();
                    }
                }
            }
        };

        const animate = () => {
            time += 1;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around instead of bounce for more natural movement
                if (p.x < -10) p.x = canvas.width + 10;
                if (p.x > canvas.width + 10) p.x = -10;
                if (p.y < -10) p.y = canvas.height + 10;
                if (p.y > canvas.height + 10) p.y = -10;

                // Twinkle effect
                const twinkle = Math.sin(time * p.twinkleSpeed + p.twinklePhase) * 0.3 + 0.7;
                const finalOpacity = p.opacity * twinkle;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`;
                ctx.fill();
            });

            drawConnections();
            animationId = requestAnimationFrame(animate);
        };

        resize();
        initParticles();
        animate();

        const handleResize = () => {
            resize();
            initParticles();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ opacity: 0.7 }}
        />
    );
}
