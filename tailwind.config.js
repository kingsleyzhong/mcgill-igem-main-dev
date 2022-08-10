module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mcgill-red': '#ED1B2F',
        'mcgill-mahogany': '#6E0C16',
        'pink-text': '#ED1B2F80'

      },
      cursor: {
        'igem': "url('/cursor.png') 12 12, auto"
      },
      fontFamily: {
        'source-code-pro': ['Source Code Pro', 'monospace'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'signika': ['Signika', 'sans-serif'],
        'mono': ['Ubuntu Mono', 'monospace'],
        'asap': ['Asap', 'sans-serif'],
        'ibarra': ['Ibarra Real Nova', 'serif'],
        'monoton': ['Monoton', 'cursive'],
      }
    },
  },
  plugins: [],
}
