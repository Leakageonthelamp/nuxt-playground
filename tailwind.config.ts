import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    'app.vue',
    'error.vue',
    './components/**/*.{js,vue,ts}',
    './features/**/*.{js,vue,ts}',
    './layouts/**/*.{js,vue,ts}',
    './pages/**/*.{js,vue,ts}',
    './error.{js,vue,ts}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        customPrimary: {
          '50': '#fdf4ff',
          '100': '#fae8ff',
          '200': '#f5d0fe',
          '300': '#f0abfc',
          '400': '#e879f9',
          '500': '#d946ef',
          '600': '#c026d3',
          '700': '#a21caf',
          '800': '#86198f',
          '900': '#701a75',
          '950': '#4a044e',
        },
      },
    },
  },
  plugins: [],
}
