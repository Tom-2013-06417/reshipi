import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    fontFamily: {
      'serif': ['Merriweather', ...defaultTheme.fontFamily.serif],
      'sans': ['"Public Sans"', ...defaultTheme.fontFamily.sans],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
} satisfies Config
