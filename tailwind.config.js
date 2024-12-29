import tinycolor from 'tinycolor2';

/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{html,ts}'];
export const theme = {
  extend: {
    colors: {
      primary: '#173046',
      secondary: '#0378A6',
      secondaryLight: tinycolor('#0378A6').lighten(10).toString(), // Lighten by 10%
      darkGray: '#7D8592',
      lightGray: '#F7F9FC',
      danger: '#FD6157',
      success: '#14804A',
      textBlack: '#464F60',
      grayBorder: '#E7EAEB',
    },
    backgroundImage: {
      'main-gradient': 'linear-gradient(to bottom, #173046, #0D5476, #0378A6)',
    },
  },
};
export const plugins = [];
