/** @type {import('tailwindcss').Config} */


module.exports = {
  mode: 'jit',

  darkMode:false, // or media or class
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/l_components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{
      'poppins':['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        primary: '#202225',
        secondary: '#5865f2',
      }
    },
  },
  plugins: [],
}
