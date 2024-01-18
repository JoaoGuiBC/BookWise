import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: '15.25rem 1fr',
      },
      backgroundImage: {
        'gradient-vertical':
          'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
        'gradient-horizontal':
          'linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)',
      },
      fontFamily: {
        sans: 'var(--font-nunito)',
      },
      colors: {
        gray: {
          100: '#F8F9FC',
          200: '#E6E8F2',
          300: '#D1D6E4',
          400: '#8D95AF',
          500: '#303F73',
          600: '#252D4A',
          700: '#181C2A',
          800: '#0E1116',
        },
        green: {
          100: '#50B2C0',
          200: '#255D6A',
          300: '#0A313C',
        },
        purple: {
          100: '#8381D9',
          200: '#2A2879',
        },
      },
      keyframes: {
        'show-overlay': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'show-content': {
          from: { opacity: '0', transform: 'translateX(50%) scale(0.96)' },
          to: { opacity: '1', transform: 'translateX(0) scale(1)' },
        },
      },
      animation: {
        'show-overlay': 'show-overlay 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'show-content': 'show-content 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
export default config
