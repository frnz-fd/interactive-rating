/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-linear' : 'radial-gradient(40.24% 30.29% at 40.73% 15.11%, #171E28 0%, #252932 23%, #1E252F 50%, #1A212B 77%, #171E28 100%)',
      },
      colors: {
        white: 'hsl(0, 0%, 100%)',
        lightGrey: 'hsl(217, 12%, 63%)',
        mediumGrey: 'hsl(216, 12%, 54%)',
        darkBlue: 'hsl(213, 19%, 18%)',
        veryDarkBlue: 'hsl(216, 12%, 8%)',
        Orange: 'hsl(25, 97%, 53%)',
      },
    },
  },
  plugins: [],
}