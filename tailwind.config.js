/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          paper: 'var(--paper)',
          'paper-raised': 'var(--paper-raised)',
          ink: 'var(--ink)',
          'ink-soft': 'var(--ink-soft)',
          'ink-faint': 'var(--ink-faint)',
          rule: 'var(--rule)',
          accent: 'var(--accent)',
          'accent-soft': 'var(--accent-soft)',
        },
        fontFamily: {
          mono: ['var(--font-jetbrains-mono)', 'monospace'],
          serif: ['var(--font-source-serif)', 'Georgia', 'serif'],
        },
      },
    },
    plugins: [],
  }
