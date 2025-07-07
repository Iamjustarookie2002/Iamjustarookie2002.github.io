/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Margarine', 'cursive'],
        'shadows': ['Shadows Into Light', 'cursive'],
        'margarine': ['Margarine', 'cursive'],
        'agbalumo': ['Agbalumo', 'cursive'],
      },
    },
  },
  plugins: [],
};
