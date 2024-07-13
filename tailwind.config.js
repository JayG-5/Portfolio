/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'NanumGothic' : ['NanumGothic', 'sans-serif'],
      'KarGugSu': ['NanumKarGugSu', 'sans-serif'],
      'NanumSquare': ['NanumSquareB', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        grantStack: '#CCCCFF',
        grantProject: '#8b5cf6',
        grantCareer: '#0d9488',
      },
    },
  },
  plugins: [],
};
