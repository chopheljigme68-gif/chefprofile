import type { Config } from 'tailwindcss';

/**
 * Palette is lifted directly from the Bhutanese pangtse/kira textile supplied
 * in the brief: cream ground, crimson lattice, saffron diamonds, olive
 * zigzags, jade crosses, clay centres.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FBF7E4',
        parchment: '#F3ECD2',
        ink: '#1E1A16',
        graphite: '#4A423A',
        crimson: '#E13B32',
        saffron: '#F4A62A',
        olive: '#8C9C3C',
        jade: '#5FAE96',
        clay: '#9C6437',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        label: '0.16em',
      },
      maxWidth: {
        prose: '68ch',
      },
      boxShadow: {
        card: '0 1px 2px rgba(30,26,22,0.04), 0 12px 28px -18px rgba(30,26,22,0.35)',
        lift: '0 2px 4px rgba(30,26,22,0.05), 0 28px 50px -24px rgba(30,26,22,0.45)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
