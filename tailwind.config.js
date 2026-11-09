/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      spacing: {
        'safe-pc': '64px',
        'safe-m': '15px',
      },
      maxWidth: {
        'site': '1440px',
      }
    },
  },
  plugins: [],
}

