/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],

  // ---- Styling hygiene: how Tailwind and Bootstrap coexist -----------------
  // 1. `prefix` -> every Tailwind class is written as `tw-*`, so it can never
  //    collide with Bootstrap names (`container`, `collapse`, `visible`, ...).
  // 2. `preflight: false` -> Bootstrap's Reboot is the single CSS reset.
  //    Two resets fighting each other is the main source of override hacks.
  // Result: no `!important`, no specificity wars.
  prefix: 'tw-',
  corePlugins: { preflight: false },

  theme: {
    extend: {
      colors: {
        ink: '#14213d',
        paper: '#f3f5f9',
        brand: { DEFAULT: '#0f766e', dark: '#115e59', soft: '#ccfbf1' },
        signal: '#d97706',
      },
      boxShadow: {
        card: '0 1px 2px rgba(20,33,61,.06), 0 4px 14px rgba(20,33,61,.05)',
        lift: '0 2px 4px rgba(20,33,61,.08), 0 12px 28px rgba(20,33,61,.12)',
      },
    },
  },
  plugins: [],
};
