/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1F3A5F',
        secondary: '#2B2F36',
        accent: '#D98E04',
        surface: '#F5F7FA',
        ink: '#1A1A1A',
      },
      boxShadow: {
        panel: '0 20px 60px rgba(31, 58, 95, 0.12)',
        soft: '0 14px 35px rgba(26, 26, 26, 0.08)',
      },
      backgroundImage: {
        'industrial-grid':
          'linear-gradient(rgba(31,58,95,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(31,58,95,0.06) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 12s linear infinite',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
