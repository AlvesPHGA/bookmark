/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
   theme: {
      extend: {
         colors: {
            // Primary
            softBlue: 'hsl(231, 69%, 60%)',
            softRed: 'hsl(0, 94%, 66%)',
            // Neutral
            grayishBlue: 'hsl(229, 8%, 60%)',
            veryDarkBlue: 'hsl(229, 31%, 21%)',
         },

         fontFamily: {
            rubik: ['Rubik', 'sans-serif'],
         },
      },
   },
   plugins: [],
};
