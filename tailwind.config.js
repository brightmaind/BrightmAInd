/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        abyss: '#06070A',
        ink: '#0A0B0D',
        deep: '#101216',
        surface: '#16181C',
        border: '#22252A',
        'border-soft': '#2A2D33',

        paper: '#EDEAE4',
        mist: '#D8D5CE',
        whisper: '#9A968D',
        'whisper-soft': '#B8B4AB',
        'whisper-dim': '#6B675F',

        cream: '#F5F3EF',
        'cream-soft': '#EBE8E1',
        charcoal: '#1A1B1E',
        'charcoal-soft': '#3D3E42',
        'charcoal-dim': '#5F5C55',

        accent: '#E8823A',
        'accent-soft': '#F4A36E',
        'accent-deep': '#C56826',
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
