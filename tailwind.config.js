/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        abyss: '#060912',
        ink: '#0B1120',
        deep: '#111827',
        surface: '#18212F',
        border: '#1F2937',
        'border-soft': '#273449',

        paper: '#F8FAFC',
        mist: '#E2E8F0',
        whisper: '#94A3B8',
        'whisper-soft': '#CBD5E1',
        'whisper-dim': '#64748B',

        accent: '#7DD3FC',
        'accent-soft': '#BAE6FD',
        'accent-deep': '#0EA5E9',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.035em',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
