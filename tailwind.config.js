export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['cupcake', 'dark'],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    themeRoot: ':root',
  },
}
