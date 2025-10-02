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
            // IE Global Brand Colors - Enhanced for 2025
            brand: {
              DEFAULT: '#2A7FFF', // IE Blue - primary brand color (4.5:1 contrast)
              700: '#1E63CC',     // Darker blue for hover states
              600: '#2563EB',     // Medium blue for secondary elements
              accent: '#18C8D8',  // Cyan accent - enhanced for better contrast
              light: '#60A5FA',   // Light blue for subtle highlights
            },
            
            // Secondary Palette - Nature-inspired warm accents
            secondary: {
              amber: '#F59E0B',   // Warm amber for highlights
              coral: '#FF6B6B',   // Coral for alerts and CTAs
              emerald: '#10B981', // Emerald for success states
              violet: '#8B5CF6',  // Violet for premium features
            },
            
            // Background Colors - Dark-first with light mode support
            bg: {
              DEFAULT: '#0A0A0B', // Primary background - deepest dark
              950: '#050506',     // Darkest background
              900: '#0E0F12',     // Elevated surfaces - cards, modals
              800: '#14161A',     // Secondary surfaces - form inputs
              700: '#1B1F25',     // Tertiary surfaces - borders, dividers
              600: '#2A2D35',     // Light borders and dividers
            },
            
            // Light Mode Backgrounds
            light: {
              DEFAULT: '#FFFFFF', // Primary light background
              50: '#F8FAFC',      // Subtle light background
              100: '#F1F5F9',     // Card backgrounds
              200: '#E2E8F0',     // Borders and dividers
              300: '#CBD5E1',     // Input borders
            },
            
            // Enhanced Neutral Colors - Better contrast ratios
            gray: {
              50: '#F8FAFC',      // Lightest - for light mode
              100: '#F1F5F9',     // Very light
              200: '#E3E8EF',     // Light text on dark (4.5:1 contrast)
              300: '#C4CBD4',     // Secondary text (4.5:1 contrast)
              400: '#9AA3AF',     // Tertiary text (3:1 contrast for large text)
              500: '#64748B',     // Medium gray
              600: '#475569',     // Dark gray
              700: '#334155',     // Darker gray
              800: '#1E293B',     // Very dark gray
              900: '#0F172A',     // Darkest gray
            },
            
            // Semantic Colors - Enhanced for accessibility
            status: {
              success: '#10B981', // Success states (4.5:1 contrast)
              warning: '#F59E0B', // Warning states (4.5:1 contrast)
              error: '#EF4444',   // Error states (4.5:1 contrast)
              info: '#3B82F6',    // Info states (4.5:1 contrast)
            },
            
            // Text Colors - High contrast
            foreground: {
              DEFAULT: '#FFFFFF', // Primary text - high contrast white
              secondary: '#C4CBD4', // Secondary text
              muted: '#9AA3AF',   // Muted text
              light: '#F8FAFC',   // Light mode text
            },
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

