/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
            'background-dark': '#0d1117',
            'secondary-dark': '#151b23',
            'third-dark': '#232321',
            accent: '#27272a',
            whitish: '#f4f4f5',
            indigo: '#5c6ac4',
            orange: '#fe640b',
            'indigo-dark': '#202e78',
        },
    },
  },
 plugins: [],

};
