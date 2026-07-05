import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#050816',
        accent: '#7C3AED',
        secondary: '#8B5CF6',
        tertiary: '#A855F7',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 80px rgba(124,58,237,0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config;
