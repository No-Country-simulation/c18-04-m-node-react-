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
      'yellow' : 'rgba(214, 186, 0, 1)',
      'darkPurple' : 'rgba(18, 9, 26, 1)',
      'lightPurple': 'rgba(164, 155, 155, 0.14)',
      'gray' : 'rgba(164, 155, 155, 1)'
    },
    //Config Screens
    screens:{
      'sm': '393',
      'xl': '1920'
    },
    fontFamily:{
      'marcellus':["Marcellus SC", "sans-serif"],
    },
    extend:{
    },
  },
  plugins: [],
};
