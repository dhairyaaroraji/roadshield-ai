/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ocean: {
          abyss: '#020712',
          deep: '#06152d',
          surface: '#0a1e3f',
          card: '#0c244b',
          cardHover: '#102e5e',
          wave: '#163e79',
          border: '#1b4a8c',
          subtle: '#2563eb',
          cerulean: '#0284c7',
          sky: '#0ea5e9',
          cyan: '#06b6d4',
          aqua: '#22d3ee',
          seafoam: '#14b8a6',
          mist: '#bae6fd',
          foam: '#e0f2fe',
        },
        shield: {
          dark: '#020712',
          card: '#0c244b',
          surface: '#0a1e3f',
          border: '#1b4a8c',
          neonGreen: '#14b8a6',
          neonAmber: '#f59e0b',
          neonRed: '#f43f5e',
          neonBlue: '#38bdf8',
        }
      },
      backgroundImage: {
        'ocean-radial': 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(6, 182, 212, 0.22), rgba(2, 7, 18, 0))',
        'ocean-depth': 'linear-gradient(180deg, #06152d 0%, #020712 100%)',
        'ocean-wave-gradient': 'linear-gradient(135deg, #0284c7 0%, #06b6d4 50%, #38bdf8 100%)',
        'ocean-card-gradient': 'linear-gradient(180deg, rgba(12, 36, 75, 0.95) 0%, rgba(7, 22, 48, 0.98) 100%)',
        'ocean-surface-gradient': 'linear-gradient(145deg, rgba(16, 46, 94, 0.8) 0%, rgba(10, 30, 63, 0.9) 100%)',
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 2s linear infinite',
        'wave-flow': 'waveFlow 8s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        waveFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
