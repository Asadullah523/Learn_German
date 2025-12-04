/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enable dark mode via class
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            colors: {
                // Custom palette mapped to CSS variables for dynamic switching
                background: 'var(--bg-primary)',
                surface: 'var(--bg-secondary)',
                card: 'var(--bg-card)',
                primary: {
                    DEFAULT: '#2563EB',
                    dark: '#1D4ED8',
                    light: '#60A5FA',
                },
                secondary: {
                    DEFAULT: '#64748B',
                    dark: '#475569',
                    light: '#94A3B8',
                },
                accent: {
                    rose: '#E11D48',
                    gold: '#D97706',
                    emerald: '#059669',
                },
                text: {
                    primary: 'var(--text-primary)',
                    secondary: 'var(--text-secondary)',
                    muted: 'var(--text-muted)',
                    light: 'var(--text-light)',
                }
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                'glass-hover': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                'neumorph': '20px 20px 60px #d1d9e6, -20px -20px 60px #ffffff',
                'neumorph-dark': '20px 20px 60px #1b1b2f, -20px -20px 60px #252540',
                'glow': '0 0 20px rgba(37, 99, 235, 0.5)',
            },
            backgroundImage: {
                'gradient-primary': 'var(--gradient-primary)',
                'gradient-accent': 'var(--gradient-accent)',
                'gradient-gold': 'var(--gradient-gold)',
                'gradient-success': 'var(--gradient-success)',
                'gradient-dark': 'var(--gradient-dark)',
                'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'blob': 'blob 7s infinite',
                'slide-up': 'slideUpFade 0.6s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                slideUpFade: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
