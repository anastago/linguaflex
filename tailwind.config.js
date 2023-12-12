/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
        whisper: ["Whisper", "cursive"],
        roboto: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
