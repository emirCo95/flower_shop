import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        borcelle: '#ebe4dc',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        'hero-pattern': "url('/hero.jpg')",
        'about-pattern': "url('/about.jpg')",
        'collections-pattern': "url('/collections.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
