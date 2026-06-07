import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FDFBF7',
          dark: '#F5F0E8',
          deep: '#EDE4D6',
        },
        gold: {
          light: '#E8D9B8',
          DEFAULT: '#C5A059',
          dark: '#9A7A3A',
          deep: '#7A5E2A',
        },
        ink: {
          DEFAULT: '#2C2C2C',
          muted: '#7A6A54',
          border: '#E8D9B8',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-amiri)', 'serif'],
        script: ['var(--font-great-vibes)', 'cursive'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #9A7A3A 0%, #C5A059 50%, #E8D9B8 100%)',
        'dark-luxury': 'linear-gradient(160deg, #1a1209 0%, #2d1f0e 50%, #1a1209 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
