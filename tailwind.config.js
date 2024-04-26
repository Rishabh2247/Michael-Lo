/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'One': ['Font1'],
        'Two': ['Font2'],
        'Three': ['Font3']
      }
    },
  },
  plugins: [],
}

