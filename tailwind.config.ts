import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
