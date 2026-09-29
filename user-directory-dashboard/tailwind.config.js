/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',
     './src/**/*.{js,jsx}'],
  prefix: 'tw-',
  corePlugins: { preflight: false },

  theme: {
    extend: {
      colors: {
        ink: '#14213d',
        paper: '#f3f5f9',
        brand: { DEFAULT: '#0f766e', dark: '#115e59', soft: '#ccfbf1' },
        signal: '#d97706',
      }
    },
  },
  plugins: [],
};
