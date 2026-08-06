/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#f7f4ee',
        paper: '#efe9df',
        ink: '#111110',
        charcoal: '#2b2a27',
        stone: '#7c766a',
        line: '#11111022',
        rose: '#b98a80',
        bordeaux: '#3d1c1f',
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      maxWidth: {
        'wrap': '1320px',
      },
      animation: {
        'markIn': 'markIn 1s ease forwards .1s',
        'heroZoom': 'heroZoom 22s ease-in-out infinite alternate',
        'cue': 'cue 2s ease-in-out infinite',
        'scroll': 'scroll 30s linear infinite',
        'fadeUp': 'fadeUp .5s ease',
      },
      keyframes: {
        markIn: {
          to: { opacity: '1' }
        },
        heroZoom: {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.06)' }
        },
        cue: {
          '50%': { top: '100%' },
          '51%': { top: '-100%' },
          '100%': { top: '0%' }
        },
        scroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
}
