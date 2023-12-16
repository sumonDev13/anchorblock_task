/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#6941C6',
        customBlack: '#404040',
        black:'#4E5D78',
        levelBlack:'#344054'
      },
    },
  },
  plugins: [],
}

