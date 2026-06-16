/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        mono: ['var(--font-dm-mono)', 'Consolas', 'monospace'],
      },
      colors: {
        background: '#0A0A0C',
        foreground: '#fafaf8',
        primary: '#e8e0d0',
        accent: '#22d3ee',
        muted: 'rgba(255, 255, 255, 0.45)',
        surface: 'rgba(255, 255, 255, 0.04)',
        card: 'rgba(255, 255, 255, 0.04)',
        border: 'rgba(255, 255, 255, 0.12)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'text-reveal': {
          '0%': { transform: 'translateY(105%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'line-expand': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'text-reveal': 'text-reveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'line-expand': 'line-expand 0.8s ease-out forwards',
        'gradient-shift': 'gradient-shift 9s ease infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
        pulse: 'pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
