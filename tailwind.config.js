/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'vertical-spacing': '5.625rem', //90px
        'horizontal-spacing': '1.066rem', //15px
        heroHeightSmall: 'calc(100dvh - 170px)',
        heroHeightMedium: 'calc(100dvh - 170px)',
      },
      colors: {
        'muted-blue': '#607890',
        'overlay': '#00000098',
        'navigation-dots': '#ffffff99',
        'rate-color': '#ff9c0f',
        primary: {
          dark: '#000',
          light: '#ffffff',
          red: '#d0473d',
          border: '#ebebeb',
        },
        secondary: {
          dark: '#111',
          // light: '#ebebeb',
          light: '#c0c0c0',
          red: '#d0473e',
        },
        button: {
          buyNow: '#d0473e',
        },
        price: {
          originalPrice: '##666',
          salePrice: '#d0473e',
        },
        heading: {
          dark: '#111',
        },
        content: {
          dark: '#111',
          'medium-dark': '#444',
          'light-dark': '#666',
        },
        badge: {
          notification: '#d0473d',
          sale: '#d0473e',
          limitedStock: '#14854f',
        }
      },
      borderRadius: {
        tiny: '0.5rem',
        small: '1rem',
        medium: '2rem',
      },
      zIndex: {
        overlay: '95',
        top: '100',
      },
      transitionDuration: {
        short: "250ms",
        medium: "500ms",
        long: "700ms",
      },
      keyframes: {
        'horizontal-text-move': {
          to: {transform: 'translateX(-33.33%)'}
        }
      },
      animation: {
        'horizontal-move': 'horizontal-text-move 20s linear infinite',
      }
    },
  },
  plugins: [],
}