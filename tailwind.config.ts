import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1800px',
      // => @media (min-width: 1800px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#0976d9',
      'secondary': '#119bff',
      'ublue': {
        50: '#edfbff',
        100: '#d7f4ff',
        200: '#d7f4ff',
        300: '#88e4ff',
        400: '#50d2ff',
        500: '#28b6ff',
        600: '#28b6ff',
        700: '#28b6ff',
        800: '#28b6ff',
        900: '#28b6ff',
        950: '#11355a',
      },
    },
    extend: {},
  },
  plugins: [
    require('tailgrids/plugin'), 
    require('@tailwindcss/typography'),
    require('tw-elements/plugin.cjs'),
    require('daisyui'),
    [nextui()],
  ],
};

module.exports = withMT(config);