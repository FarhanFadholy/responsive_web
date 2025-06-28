/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Pastikan path sesuai
  theme: {
    extend: {
      keyframes: {
        shadowDropCenter: {
          '0%': {
            'box-shadow': '0 0 0 0 rgba(0, 0, 0, 0)',
          },
          '100%': {
            'box-shadow': '0 0 20px rgba(0, 0, 0, 0.35)',
          },
        },
      },
      animation: {
        shadowDropCenter: 'shadowDropCenter 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
    },
  },
  plugins: [],
}