import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Override default white with softer off-white
        'white': '#FAFAFA',
        // Primary
        'navy': '#0A284E',
        'electric-blue': '#2D92F3',
        // Secondary
        'slate-grey': '#F4F7FA',
        'charcoal': '#111111',
        // Legacy (keeping for compatibility)
        'sky-blue': '#76C1F2',
        'soft-grey': '#EDEDED',
        'carbon-black': '#111111',
        // Accent
        'byte-orange': '#F69332',
        // Off-white for explicit use when needed
        'off-white': '#FAFAFA',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'hero': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'display': ['38px', { lineHeight: '1.3', fontWeight: '700' }],
        'h1': ['32px', { lineHeight: '1.4', fontWeight: '700' }],
        'h2': ['28px', { lineHeight: '1.4', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.5', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.8', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.8', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.7', fontWeight: '400' }],
      },
      spacing: {
        'section': '120px',
        'section-md': '80px',
        'section-sm': '60px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'elevated': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 20px rgba(45, 146, 243, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(45, 146, 243, 0.15)' },
          '50%': { boxShadow: '0 0 30px rgba(45, 146, 243, 0.25)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

