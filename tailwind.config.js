/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}", // Include this line for the components folder
  ],
  theme: {
    extend: {
      spacing: {
        '11': '6rem',
        '18': '10rem',
        '30': '40rem',
        "45p": '20%',
      },
      fontSize: {
        'new': '1.19rem',
        'small': '0.7rem',
        'smal': '0.8rem',
      },
      height: {
        'h8': '30rem',
        'h7': '20rem',
        "h6": '17rem',
        "h25": '25rem',
        'h10': '32rem',
        'h10s': '10rem',
        'h13': '13rem',
        'h90': '40.9rem',
        'h93': '41.5rem',
        'h89': '40rem',
        'h94': '96%',
      },
      screens: {
        'max-md': { 'max': '850px' },
        'max-w': { 'max': '650px' },
        'maxx': { 'max': '768px' },
        'md-min': '1220px',
        'minx': '1220px',
      },
      padding: {
        'phalf': '50%',
      },
      width: {
        'w8': '45rem',
        'w10': '90%',
        'w95': '95%',
        'w3': '80%',
        'w3s': '100%',
        'w70': '70%',
        'w10s': '10rem',
        'w4': '40rem',
        'w35': '35rem',
        'w7': '20rem',
        'whalf': '50%',
        'w13': '13rem',
        "w6": '17rem',
      },
      gap: {
        'g22': '22rem',
      },
      colors: {
        primary2: "#1F2937",
        accent1: "#3B82F6",
        highlight: "#F59E0B",
        primary: '#1D4ED8',
        accent: '#F97316',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '4rem',
      },
      borderWidth: {
        '3': '3px',
      },
      keyframes: {
        fadeInOut: {
          '0%, 45%': { opacity: '1' },
          '50%, 95%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        textPulse: {
          '0%, 100%': { fontSize: '1rem' }, // Normal size
          '50%': { fontSize: '1.5rem' },   // Enlarged size
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 10s infinite',
        textPulse: 'textPulse 2s infinite',
      },
    },
  },
  plugins: [],
};
