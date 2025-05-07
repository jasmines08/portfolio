/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nblue: '#69E1FF',
        ngreen: '#98FF79',
        npurple: '#E28DFF',
        nred: '#FF3939',
        nyellow: '#FFDA69',
        nblack: '#222222',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        rubik: ['var(--font-rubik)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}