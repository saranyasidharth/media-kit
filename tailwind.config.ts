import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B9D',
        secondary: '#C44569',
        accent: '#FFA07A',
        'text-dark': '#1a1a2e',
        'text-medium': '#4a4a68',
        'text-light': '#6b6b8a',
        'bg-start': '#fef5f7',
        'bg-end': '#fff9fb',
        border: '#f0e6ea',
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['var(--font-cormorant)', 'serif'],
      },
      boxShadow: {
        sm: '0 2px 8px rgba(255,107,157,0.08)',
        md: '0 8px 24px rgba(255,107,157,0.12)',
        lg: '0 16px 48px rgba(255,107,157,0.18)',
      },
      borderRadius: {
        hero: '32px',
        section: '28px',
        card: '24px',
        pill: '50px',
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out both',
        scaleIn: 'scaleIn 0.8s ease-out both',
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
        shimmer: 'shimmer 3s infinite',
        slideInLeft: 'slideInLeft 0.6s ease-out both',
        slideInRight: 'slideInRight 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}

export default config
