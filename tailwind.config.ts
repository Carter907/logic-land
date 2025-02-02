import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  darkMode: 'selector',

  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {

      fontFamily: ["t"]
    }
  },

  plugins: [typography]
} satisfies Config;
