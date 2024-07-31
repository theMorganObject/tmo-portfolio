import type { Config } from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xs': '342px',
      xs: '480px',
      ...defaultTheme.screens,
    },
    colors: {
      lime: {
        0: '#f4fce3',
        1: '#e9fac8',
        2: '#d8f5a2',
        3: '#c0eb75',
        4: '#a9e34b',
        5: '#94d82d',
        6: '#82c91e',
        7: '#74b816',
        8: '#66a80f',
        9: '#5c940d',
        10: '#528d0a',
        11: '#487f07',
        12: '#2f5d04',
        13: '#1e3f02',
      },
      blue: {
        0: '#e7f5ff',
        1: '#d0ebff',
        2: '#a5d8ff',
        3: '#74c0fc',
        4: '#4dabf7',
        5: '#339af0',
        6: '#228be6',
        7: '#1c7ed6',
        8: '#1971c2',
        9: '#1864ab',
        10: '#15559a',
        11: '#12488a',
        12: '#0f3b7a',
        13: '#0c2e6a',
      },
      red: {
        0: '#fff5f5',
        1: '#ffe3e3',
        2: '#ffc9c9',
        3: '#ffa8a8',
        4: '#ff8787',
        5: '#ff6b6b',
        6: '#fa5252',
        7: '#f03e3e',
        8: '#e03131',
        9: '#c92a2a',
        10: '#b12a2a',
        11: '#992323',
        12: '#821e1e',
        13: '#6b1d1d',
      },
      gray: {
        0: '#f8f9fa',
        1: '#f1f3f5',
        2: '#e9ecef',
        3: '#dee2e6',
        4: '#ced4da',
        5: '#adb5bd',
        6: '#868e96',
        7: '#495057',
        8: '#343a40',
        9: '#212529',
      },
      gold: {
        0: '#fffbe6',
        1: '#fff5cc',
        2: '#ffefb3',
        3: '#ffe999',
        4: '#ffe280',
        5: '#ffdb66',
        6: '#ffd54d',
        7: '#ffcf33',
        8: '#ffc61a',
        9: '#ffbd00',
        10: '#d19e00',
        11: '#b37e00',
        12: '#805c00',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-josefin-sans)'],
        reey: ['var(--font-reey)'],
      },
      gridTemplateColumns: {
        '20': 'repeat(20, minmax(0, 1fr))',
      },
      skew: {
        '9': '9deg',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
