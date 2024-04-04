/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      textColor: {
        'blue-gray': '#AEC2EA',
        indigo: '#8D86C9',
        'soft-white': '#FBF5EF33',
        'light-purple': '#F2F1F933',
        redwood: '#322D4E',
        black: '#242424',
        purple: '#322D4E',
      },
      backgroundColor: {
        'blue-gray': '#AEC2EA33',
        indigo: '#8D86C9',
        'soft-white': '#FBF5EF33',
        'light-purple': '#F2F1F933',
        redwood: '#322D4E',
        black: '#242424',
        purple: '#322D4E',
        'blue-action': '#009ef8',
        'red-secondary': '#eb1f49',
        'blue-linear': '#002242',
        orange: '#fd9000',
        'brown-green': '#b48f00',
      },
      borderColor: {
        'blue-linear': '#002242',
      },
      borderWidth: {
        1: '1px',
      },
      height: {
        1: '1px',
      },
      gridTemplateColumns: {
        '4-50px/3fr': '50px repeat(3, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
