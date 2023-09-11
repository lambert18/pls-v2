module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
        'smax': {'max': '639px'},
      },
      animation: {
        'animatetop': 'animatetop 1s',
      },
      keyframes: {
        animatetop: {
          'from': { top: '-300px', opacity: '0' },
          'to': { top: '0', opacity: '1' },
      },
      },
    },
  },
  plugins: [],
}
