/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EAEAEA", // Concrete Light Grey
        secondary: "#000000", // Deep Black
        accent: "#666666", // Medium Grey
        darkest: "#333333", // Dark Grey
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        heading: ["Montserrat", "Impact", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      boxShadow: {
        'brutalist': '5px 5px 0px 0px rgba(0,0,0,1)',
        '3d-layer': '0 10px 40px -10px rgba(0,0,0,0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
