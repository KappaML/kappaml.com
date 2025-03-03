module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#13A2AD",
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-13%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'wave': 'wave 15s ease-in-out infinite',
        'wave-slow': 'wave 18s ease-in-out infinite reverse',
        'wave-slower': 'wave 20s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
