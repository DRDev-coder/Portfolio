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
            value: 200,
            density: {
                enable: true,
                width: 1920,
                height: 1080,
            },
        },
        color: {
            value: ["#ffffff", "#c0c8d0", "#9aaabb", "#d8e0e8"],
        },
        opacity: {
            value: { min: 0.08, max: 0.45 },
            animation: {
                enable: true,
                speed: 0.6,
                sync: false,
            },
        },
        size: {
            value: { min: 0.4, max: 2.2 },
            animation: {
                enable: true,
                speed: 1.2,
                sync: false,
            },
        },
        move: {
            enable: true,
            speed: { min: 0.12, max: 0.55 },
            direction: "none" as const,
            random: true,
            straight: false,
            outModes: {
                default: "out" as const,
            },
        },
        links: {
            enable: true,
            distance: 140,
            color: "#ffffff",
            opacity: 0.07,
            width: 0.6,
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
                distance: 110,
                duration: 0.5,
                speed: 0.6,
                factor: 4,
                easing: "ease-out-quad" as const,
            },
        },
    },
    responsive: [
        {
            maxWidth: 1024,
            options: {
                particles: {
                    number: { value: 120 },
                    links: { distance: 120 },
                },
            },
        },
        {
            maxWidth: 640,
            options: {
                particles: {
                    number: { value: 55 },
                    links: { enable: false },
                    move: { speed: { min: 0.08, max: 0.3 } },
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
