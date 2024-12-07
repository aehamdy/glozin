/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'muted-blue': '#607890',
        'warning-red': '#d0473e',
        'navItem-hover': '#d0473e',
        primary: {
          dark: '#000',
          light: '#fff',
        },
        secondary: {
          dark: '#111',
        },
        button: {
          buyNow: '#d0473e',
        },
        price: {
          originalPrice: '##666',
          salePrice: '#d0473e',
        },
        text: {
          heading: '#111',
          content: '#444',
        },
        badge: {
          notification: '#d0473d',
          sale: '#d0473e',
          limitedStock: '#14854f',
        }
      },
      transitionDuration: {
        short: "250ms",
        medium: "500ms",
      }
    },
  },
  plugins: [],
}