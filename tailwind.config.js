/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F4C81',
          dark: '#0A3559',
          light: '#2C7DA0',
        },
        accent: {
          DEFAULT: '#E07A5F',
          dark: '#C56D55',
          light: '#F0A894',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F8FAFB',
          muted: '#EDF2F7',
        },
        text: {
          primary: '#2D3748',
          secondary: '#4A5568',
          muted: '#718096',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(15, 76, 129, 0.08), 0 1px 2px rgba(15, 76, 129, 0.06)',
        'card-hover': '0 4px 6px rgba(15, 76, 129, 0.12), 0 2px 4px rgba(15, 76, 129, 0.08)',
        'navbar': '0 1px 2px rgba(15, 76, 129, 0.1)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}
