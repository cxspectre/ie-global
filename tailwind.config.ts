import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0A0A0B',
          900: '#0E0F12',
          800: '#14161A',
          700: '#1B1F25',
        },
        brand: {
          DEFAULT: '#2A7FFF',
          700: '#1E63CC',
          accent: '#18C8D8',
        },
        gray: {
          200: '#E3E8EF',
          300: '#C4CBD4',
          400: '#9AA3AF',
        },
        status: {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
        },
        foreground: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        display: ['General Sans', ...fontFamily.sans],
        mono: ['JetBrains Mono', ...fontFamily.mono],
      },
      fontSize: {
        'step--1': 'clamp(12px, 0.75vw, 13px)',
        'step-0': 'clamp(16px, 1vw, 18px)',
        'step-1': 'clamp(18px, 1.25vw, 20px)',
        'step-2': 'clamp(22px, 1.6vw, 24px)',
        'step-3': 'clamp(26px, 2vw, 30px)',
        'step-4': 'clamp(32px, 2.6vw, 38px)',
        'step-5': 'clamp(40px, 3.2vw, 48px)',
      },
      lineHeight: {
        display: '1.2',
        body: '1.5',
      },
      container: {
        center: true,
        padding: '1.25rem',
        screens: {
          '2xl': '1280px',
        },
      },
      boxShadow: {
        card: '0 8px 30px rgba(0,0,0,0.35)',
        glass: '0 8px 32px rgba(0,0,0,0.3)',
      },
      backdropBlur: {
        glass: '16px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;

