/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.mdx",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-mono': ['"Space Mono"', 'serif'],
      },
    },
  },
  plugins: [],
};
