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
    //Config Global Colors
    colors:{
      'red' : 'hsl(1, 90%, 64%)',
    },
    //Config Screens
    screens:{
      'sm': '400',
    },
    fontFamily:{
      custo:["sans-serif"],
    },
    extend:{
    },
  },
  plugins: [],
};
