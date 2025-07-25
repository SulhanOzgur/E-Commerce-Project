/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // <== BUNU EKLE!
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#252B42',
          lightgray: '#737373',
          lightblue: '#23A6F0',
        },
      },
    },
  },
  plugins: [],
};
