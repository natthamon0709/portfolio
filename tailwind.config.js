/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,vue,ts}",
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue"
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#080c14',
          surface: '#0d1322',
          card: '#131c31',
          border: '#1f2d4d',
          cyan: '#06b6d4',
          purple: '#a855f7',
          emerald: '#10b981',
          blue: '#3b82f6',
          amber: '#f59e0b'
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Kanit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        thai: ['Kanit', 'Space Grotesk', 'sans-serif']
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.35)',
        'glow-purple': '0 0 25px -5px rgba(168, 85, 247, 0.35)',
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.35)'
      }
    }
  },
  plugins: []
}
