const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],

  theme: {
    extend: {
      colors: {
        purple: '#12091A',
        gold: '#D6BA00',
        gray: '#A49B9B24',
        pastel: '#A49B9B',
        blacke: '#12091A',
        lightGray: '#828282',
      },
      fontFamily: {
        Marcellus: ['Marcellus', 'serif'],
      },
    },
    plugins: [],
  },
};
