"use client";

import { useCallback } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

// Stable init callback — must not change across renders
async function initEngine(engine: Engine) {
    await loadSlim(engine);
}

const particleOptions = {
    background: {
        color: { value: "transparent" },
    },
    fpsLimit: 60,
    pauseOnOutsideViewport: true,
    detectRetina: true,
    particles: {
        number: {
            value: 280,
            density: {
                enable: true,
                width: 1920,
                height: 1080,
            },
        },
        color: {
            value: ["#ffffff", "#c8d4dc", "#a0b4c0", "#dce8f0", "#e0e8ff"],
        },
        opacity: {
            value: { min: 0.12, max: 0.55 },
            animation: {
                enable: true,
                speed: 0.8,
                sync: false,
            },
        },
        size: {
            value: { min: 0.3, max: 3.2 },
            animation: {
                enable: true,
                speed: 1.6,
                sync: false,
            },
        },
        move: {
            enable: true,
            speed: { min: 0.18, max: 0.85 },
            direction: "none" as const,
            random: true,
            straight: false,
            outModes: {
                default: "out" as const,
            },
        },
        links: {
            enable: true,
            distance: 160,
            color: "#ffffff",
            opacity: 0.1,
            width: 0.7,
        },
    },
    interactivity: {
        detectsOn: "window" as const,
        events: {
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: {
                enable: true,
            },
        },
        modes: {
            repulse: {
                distance: 160,
                duration: 0.6,
                speed: 0.8,
                factor: 5,
                easing: "ease-out-quad" as const,
            },
        },
    },
    responsive: [
        {
            maxWidth: 1024,
            options: {
                particles: {
                    number: { value: 160 },
                    links: { distance: 140, opacity: 0.09 },
                    move: { speed: { min: 0.15, max: 0.65 } },
                },
            },
        },
        {
            maxWidth: 640,
            options: {
                particles: {
                    number: { value: 65 },
                    links: { enable: false },
                    move: { speed: { min: 0.1, max: 0.4 } },
                    size: { value: { min: 0.5, max: 2.0 } },
                    opacity: { value: { min: 0.1, max: 0.4 } },
                },
                interactivity: {
                    events: { onHover: { enable: false } },
                },
            },
        },
    ],
};

function ParticlesCanvas() {
    const loaded = useCallback(async () => {}, []);

    return (
        <Particles
            id="tsparticles"
            particlesLoaded={loaded}
            options={particleOptions}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 0,
                pointerEvents: "none",
            }}
        />
    );
}

export function ParticleBackground() {
    return (
        <ParticlesProvider init={initEngine}>
            <ParticlesCanvas />
        </ParticlesProvider>
    );
}
