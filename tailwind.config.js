import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      sm: '0px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [daisyui],
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
