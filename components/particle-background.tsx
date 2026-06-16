"use client";

import { useCallback } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

// Stable init callback — must not change across renders
async function initEngine(engine: Engine) {
    await loadSlim(engine);
}

// ─── Global Constellation Interaction System ────────────────────────────────
// Design intent: the particle network feels like a living AI systems graph
// that responds to the user's presence across the entire viewport.
// THREE simultaneous hover modes create layered organic response:
//   1. "repulse"  — particles drift smoothly away (presence awareness)
//   2. "bubble"   — nearby particles grow slightly brighter/larger (highlighting)
//   3. "grab"     — nearby connection lines brighten (network activation)
// ───────────────────────────────────────────────────────────────────────────

const particleOptions = {
    background: {
        color: { value: "transparent" },
    },
    fpsLimit: 60,
    pauseOnOutsideViewport: true,
    detectRetina: true,

    // ── Particles ────────────────────────────────────────────────────────────
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
            // Slightly wider range so bubble mode has headroom to brighten
            value: { min: 0.10, max: 0.48 },
            animation: {
                enable: true,
                speed: 0.7,
                sync: false,
            },
        },
        size: {
            // Wide range creates depth; bubble mode makes nearest ones grow
            value: { min: 0.3, max: 3.0 },
            animation: {
                enable: true,
                speed: 1.4,
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
            color: "#c8d8e8",
            // Slightly lower baseline — grab mode will brighten nearby lines
            opacity: 0.08,
            width: 0.65,
            // Lines also respond to particle-particle distance (triangles disabled)
            triangles: { enable: false },
        },
    },

    // ── Interaction System ──────────────────────────────────────────────────
    interactivity: {
        // Track cursor across the ENTIRE window — active in ALL sections
        detectsOn: "window" as const,
        events: {
            onHover: {
                enable: true,
                // Three simultaneous modes for layered organic response
                mode: ["repulse", "bubble", "grab"],
            },
            resize: { enable: true },
        },
        modes: {
            // 1. REPULSE — smooth drift away, like objects avoiding presence
            repulse: {
                distance: 140,          // generous but not aggressive
                duration: 0.7,          // smooth return journey
                speed: 0.5,             // unhurried, elegant
                factor: 3.5,            // moderate force — no screen-flying
                easing: "ease-out-quad" as const,
            },

            // 2. BUBBLE — particles near cursor grow slightly + brighten
            //    Creates "waking up" effect — network activates around user
            bubble: {
                distance: 200,          // wider zone than repulse
                size: 4.5,              // max size particles grow to (from ~3.0)
                duration: 0.4,          // responsive
                opacity: 0.72,          // brightens from baseline ~0.3 avg
                speed: 2,               // how fast bubble state engages
            },

            // 3. GRAB — connection lines between cursor and nearby particles brighten
            //    Creates "network activation" feel — lines illuminate on approach
            grab: {
                distance: 220,          // largest zone — subtle brightening from afar
                links: {
                    opacity: 0.28,      // jumps from 0.08 baseline — noticeable but elegant
                    color: "#d4e8ff",   // slight blue tint on activation (steel blue family)
                },
            },

            // 4. SLOW — particles near cursor slow down slightly, becoming more deliberate
            //    Adds to the "intelligence" feel — the system notices you
            slow: {
                radius: 120,
                factor: 3,              // moderate slow — not frozen
            },
        },
    },

    // ── Responsive Breakpoints ──────────────────────────────────────────────
    responsive: [
        {
            // Tablet — reduce density, keep interactions but lower intensity
            maxWidth: 1024,
            options: {
                particles: {
                    number: { value: 160 },
                    links: { distance: 140, opacity: 0.07 },
                    move: { speed: { min: 0.15, max: 0.65 } },
                },
                interactivity: {
                    modes: {
                        repulse: { distance: 120, factor: 3 },
                        bubble: { distance: 160, size: 3.5, opacity: 0.65 },
                        grab: { distance: 180, links: { opacity: 0.22 } },
                    },
                },
            },
        },
        {
            // Mobile — simplified, minimal interaction overhead
            maxWidth: 640,
            options: {
                particles: {
                    number: { value: 65 },
                    links: { enable: false },
                    move: { speed: { min: 0.1, max: 0.4 } },
                    size: { value: { min: 0.5, max: 2.0 } },
                    opacity: { value: { min: 0.1, max: 0.38 } },
                },
                interactivity: {
                    events: {
                        onHover: { enable: false },
                    },
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
