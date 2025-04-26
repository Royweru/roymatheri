import type { Config } from "tailwindcss";


const config: Config = {}

export default config
module.exports = {
  content: ['./features/**/*.{js,jsx,ts,tsx}','./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:"var(--font-serif)", // Default sans-serif font
      },
    },
  },
  plugins: [],
  };