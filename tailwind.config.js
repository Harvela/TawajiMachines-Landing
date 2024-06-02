/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Poppins', 'serif'],
      mono: ['Poppins', 'monospace'],
      heading: ['Poppins', 'sans-serif'],
    },
    colors: {
      primary: {
        100: '#F7F0E7',
        200: '#F7E6D0',
        300: '#F8DCB8',
        400: '#F8D2A0',
        500: '#F9C788',
        600: '#F9BD71',
        700: '#F9B359',
        800: '#FAA941',
        900: '#FB9512',
        DEFAULT: '#1278FB', // 500
        on: '#f4f8fd',
      },
    },
    extend: {
      colors: {
        primary: {
          100: '#F7F0E7',
          200: '#F7E6D0',
          300: '#F8DCB8',
          400: '#F8D2A0',
          500: '#F9C788',
          600: '#F9BD71',
          700: '#F9B359',
          800: '#FAA941',
          900: '#FB9512',
          DEFAULT: '#1278FB', // 500
          on: '#f4f8fd',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
