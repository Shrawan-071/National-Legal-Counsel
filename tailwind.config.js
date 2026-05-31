export default {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fef7f0',
          100: '#fde9d5',
          200: '#facaa8',
          300: '#f7a46f',
          400: '#f37a2f',
          500: '#e85d0d',
          600: '#d5430a',
          700: '#b0350c',
          800: '#8c2d10',
          900: '#722713'
        },
        accent: {
          50: '#fdf4f0',
          100: '#fce7dc',
          200: '#f8cdb6',
          300: '#f3a884',
          400: '#ec7c4a',
          500: '#e55a1f',
          600: '#d14115',
          700: '#b03213',
          800: '#8e2a15',
          900: '#752516'
        },
        dark: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#0d0f11'
        }
      },
      boxShadow: {
        soft: '0 22px 60px rgba(13, 15, 17, 0.25)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(229, 90, 31, 0.15), transparent 36%), radial-gradient(circle at right, rgba(213, 67, 10, 0.12), transparent 28%), linear-gradient(180deg, #0d0f11 0%, #1a1d20 100%)',
      },
    },
  },
  plugins: [],
};
