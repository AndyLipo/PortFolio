// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        caribbean_current: {
          DEFAULT: '#006d77',
          100: '#001617',
          200: '#002b2f',
          300: '#004146',
          400: '#00565e',
          500: '#006d77',
          600: '#00b4c4',
          700: '#13ebff',
          800: '#62f2ff',
          900: '#b0f8ff',
        },
        tiffany_blue: {
          DEFAULT: '#83c5be',
          100: '#152c2a',
          200: '#2a5954',
          300: '#3f857e',
          400: '#56afa6',
          500: '#83c5be',
          600: '#9bd0cb',
          700: '#b4dcd8',
          800: '#cde7e5',
          900: '#e6f3f2',
        },
        alice_blue: {
          DEFAULT: '#edf6f9',
          100: '#183d49',
          200: '#307991',
          300: '#5badc8',
          400: '#a3d1e0',
          500: '#edf6f9',
          600: '#f0f7fa',
          700: '#f4f9fb',
          800: '#f7fbfc',
          900: '#fbfdfe',
        },
        pale_dogwood: {
          DEFAULT: '#ffddd2',
          100: '#5d1700',
          200: '#ba2e00',
          300: '#ff5117',
          400: '#ff9774',
          500: '#ffddd2',
          600: '#ffe3da',
          700: '#ffeae3',
          800: '#fff1ed',
          900: '#fff8f6',
        },
        atomic_tangerine: {
          DEFAULT: '#e29578',
          100: '#39180c',
          200: '#723018',
          300: '#ac4824',
          400: '#d6673f',
          500: '#e29578',
          600: '#e8aa93',
          700: '#eebfae',
          800: '#f4d4c9',
          900: '#f9eae4',
        },
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '100% 100%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '150% 150%',
            'background-position': 'right center',
          },
        },
      },
      width: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
